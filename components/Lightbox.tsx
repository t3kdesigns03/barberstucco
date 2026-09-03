"use client";

import { useCallback, useEffect, useRef } from "react";
import Photo from "./Photo";
import { CATEGORY_LABELS, type GalleryImage } from "@/src/data/gallery";

type Props = {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

/** ~90 lines of dialog beats 40kB of gallery library. */
export default function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreTo = useRef<Element | null>(null);

  const touchX = useRef<number | null>(null);
  const image = images[index];
  const go = useCallback(
    (delta: number) =>
      onIndexChange((index + delta + images.length) % images.length),
    [index, images.length, onIndexChange],
  );

  useEffect(() => {
    restoreTo.current = document.activeElement;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    const prevPad = document.body.style.paddingRight;
    const sbw = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (sbw > 0) document.body.style.paddingRight = `${sbw}px`;
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPad;
      (restoreTo.current as HTMLElement | null)?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Tab") {
        // Trap focus inside the dialog.
        const nodes = panelRef.current?.querySelectorAll<HTMLElement>("button");
        if (!nodes || nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Project photo ${index + 1} of ${images.length}`}
      className="dark-band fixed inset-0 z-[100] flex items-center justify-center bg-ink p-4 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div ref={panelRef} className="flex w-full max-w-5xl flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-bright">
            {index + 1} / {images.length}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white hover:text-ink"
          >
            <span className="sr-only">Close</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        <div
          onTouchStart={(e) => {
            touchX.current = e.changedTouches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
          }}
        >
          <Photo
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={1600}
            height={1200}
            priority
            className="max-h-[58vh] w-full rounded-2xl object-contain sm:max-h-[68vh]"
          />
        </div>

        <p className="text-center text-sm leading-relaxed text-white/75">
          <span className="font-semibold uppercase tracking-[0.12em] text-teal-bright">
            {CATEGORY_LABELS[image.category]}
          </span>
          <span className="px-1.5 text-white/40">·</span>
          {image.alt}
        </p>

        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white hover:text-ink"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
            Previous
          </button>

          <button
            type="button"
            onClick={() => go(1)}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white hover:text-ink"
          >
            Next
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
