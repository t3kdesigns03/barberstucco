"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
};

/**
 * Plain <img> — the site is statically exported, so there is no image
 * optimizer at runtime. Width and height are always set so nothing shifts
 * while photos load. If a project photo is missing (see `npm run assets`) the
 * frame falls back to a stucco-toned panel instead of a broken image.
 */
export default function Photo({
  src,
  alt,
  width,
  height,
  className = "",
  sizes,
  priority = false,
  objectPosition,
}: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  // An eager image usually finishes — or fails — before React hydrates, so its
  // error event never reaches us; check the element's own state on mount.
  // Lazy images start loading after hydration, so the error event is enough
  // and inspecting them early would misread "not started yet" as "broken".
  useEffect(() => {
    if (!priority) return;
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [priority]);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`photo-fallback ${className}`}
        style={{ aspectRatio: `${width} / ${height}`, backgroundPosition: objectPosition }}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      onLoad={() => setFailed(false)}
      onError={() => setFailed(true)}
      className={className}
      style={objectPosition ? { objectPosition } : undefined}
    />
  );
}
