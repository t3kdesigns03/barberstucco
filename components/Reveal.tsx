"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

let readied = false;
function markReady() {
  if (!readied && typeof document !== "undefined") {
    document.documentElement.classList.add("reveal-ready");
    readied = true;
  }
}

/**
 * Fades its children up as they scroll into view. CSS is gated on the
 * `.reveal-ready` class this sets, so without JS everything is simply visible;
 * `prefers-reduced-motion` disables the motion in CSS. `delay` staggers
 * siblings (ms).
 */
export default function Reveal({
  children,
  as,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setInView(true);
      return;
    }
    markReady();
    const el = ref.current;
    if (!el) return;
    // Already in view on mount (e.g. reload mid-page) — reveal without waiting.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
