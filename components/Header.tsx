"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo, { LogoMark } from "./Logo";
import { BUSINESS, NAV } from "@/src/data/business";

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Thin deep-teal utility strip: the one place the old site's dark band earns its keep. */}
      <div className="dark-band bg-ink text-white/85">
        <div className="container-page flex h-9 items-center justify-between text-[0.72rem] sm:text-xs">
          <p className="truncate">
            Camdenton, MO · Lake of the Ozarks{" "}
            <span className="hidden sm:inline text-white/45">
              · travel available
            </span>
          </p>
          <p className="hidden sm:block text-white/60">
            Fully insured &amp; licensed · Dryvit certified
          </p>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-stone bg-paper/90 backdrop-blur-md shadow-[0_6px_24px_-18px_rgba(6,25,27,.5)]"
            : "border-transparent bg-paper"
        }`}
      >
        <div className="container-page flex h-[68px] items-center justify-between gap-2 sm:gap-4 md:h-[76px]">
          <Link
            href="/"
            className="-my-2 shrink-0 rounded-md py-2"
            aria-label="Barber Stucco — home"
          >
            {/* Below 360px the wordmark would push the phone button off-screen. */}
            <LogoMark className="h-8 w-8 xs:hidden" />
            <Logo className="hidden h-7 w-auto xs:block sm:h-9 md:h-10" />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-teal-bright transition-transform duration-200 ${
                    isActive(item.href) ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-teal-deep px-3 py-3 text-[0.78rem] font-semibold text-white shadow-[0_10px_26px_-14px_rgba(11,110,116,.9)] transition-all hover:-translate-y-0.5 hover:bg-teal-mid sm:gap-2 sm:px-5 sm:text-sm"
            >
              <PhoneIcon className="h-4 w-4 shrink-0" />
              <span className="sr-only">Call</span>
              <span aria-hidden="true">{BUSINESS.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-stone text-ink transition-colors hover:bg-white sm:h-11 sm:w-11 lg:hidden"
            >
              <span className="sr-only">
                {open ? "Close menu" : "Open menu"}
              </span>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {open ? (
                  <>
                    <path d="M5 5l14 14" />
                    <path d="M19 5L5 19" />
                  </>
                ) : (
                  <>
                    <path d="M3.5 7h17" />
                    <path d="M3.5 12h17" />
                    <path d="M3.5 17h17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile sheet */}
        <div
          id="mobile-nav"
          hidden={!open}
          className="border-t border-stone bg-paper lg:hidden"
        >
          <nav aria-label="Primary mobile" className="container-page py-3">
            <ul className="divide-y divide-stone">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`flex items-center justify-between py-4 font-display text-xl ${
                      isActive(item.href) ? "text-teal-deep" : "text-ink"
                    }`}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-teal"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 py-4">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full bg-teal-deep px-5 py-3.5 font-semibold text-white"
              >
                <PhoneIcon className="h-4 w-4" />
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={BUSINESS.emailHref}
                className="flex items-center justify-center rounded-full px-5 py-3.5 font-semibold text-ink ring-1 ring-inset ring-stone"
              >
                {BUSINESS.email}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
