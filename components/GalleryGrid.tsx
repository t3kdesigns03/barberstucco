"use client";

import { useMemo, useState } from "react";
import Photo from "./Photo";
import Lightbox from "./Lightbox";
import {
  CATEGORY_BLURBS,
  CATEGORY_LABELS,
  gallery,
  type GalleryCategory,
} from "@/src/data/gallery";

type Filter = "all" | GalleryCategory;

const FILTERS: Filter[] = ["all", "residential", "commercial", "details", "texture"];

const LABEL: Record<Filter, string> = {
  all: "All",
  ...CATEGORY_LABELS,
};

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<number | null>(null);

  const images = useMemo(
    () => (filter === "all" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: gallery.length };
    for (const g of gallery) c[g.category] = (c[g.category] ?? 0) + 1;
    return c;
  }, []);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setFilter(f);
                setOpen(null);
              }}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                active
                  ? "bg-ink text-white shadow-[0_10px_28px_-14px_rgba(6,25,27,.8)]"
                  : "bg-white text-muted ring-1 ring-inset ring-stone hover:text-ink hover:ring-teal"
              }`}
            >
              {LABEL[f]}
              <span className={active ? "ml-2 text-teal-bright" : "ml-2 text-muted/60"}>
                {counts[f] ?? 0}
              </span>
            </button>
          );
        })}
      </div>

      {filter !== "all" && (
        <p className="mt-4 text-[0.95rem] text-muted">{CATEGORY_BLURBS[filter]}</p>
      )}

      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-stone text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <Photo
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 92vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent p-4 pt-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-teal-bright">
                  {CATEGORY_LABELS[img.category]}
                </span>
                <span className="mt-1 block text-sm text-white">{img.alt}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <Lightbox
          images={images}
          index={open}
          onClose={() => setOpen(null)}
          onIndexChange={setOpen}
        />
      )}
    </>
  );
}
