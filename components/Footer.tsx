import Link from "next/link";
import Logo from "./Logo";
import { BUSINESS, CREDENTIALS, NAV } from "@/src/data/business";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark-band bg-ink text-white/75">
      <div className="rule-glow" aria-hidden="true" />
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo tone="inverse" className="h-11 w-auto" />
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed">
              Stucco, EIFS, hard-coat and stone exteriors for the Lake of the
              Ozarks and mid-Missouri. Travel available.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-xs text-white/55">
              {CREDENTIALS.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-white/12 px-3 py-1.5"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow">Get in touch</h2>
            <address className="mt-4 not-italic leading-relaxed">
              <a
                href={BUSINESS.phoneHref}
                className="inline-block py-1.5 text-xl font-semibold text-white transition-colors hover:text-teal-bright"
              >
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={BUSINESS.emailHref}
                className="inline-block break-all py-1.5 transition-colors hover:text-teal-bright"
              >
                {BUSINESS.email}
              </a>
              <p className="mt-4 text-white/60">
                {BUSINESS.street}
                <br />
                {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
              </p>
            </address>
          </div>

          <div>
            <h2 className="eyebrow">Site</h2>
            <ul className="mt-2">
              <li>
                <Link
                  href="/"
                  className="inline-block py-2.5 transition-colors hover:text-teal-bright"
                >
                  Home
                </Link>
              </li>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block py-2.5 transition-colors hover:text-teal-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Barber Stucco. Owner {BUSINESS.owner}.
          </p>
          <p>Fully insured &amp; licensed · Dryvit certified · 12-year Dryvit warranty</p>
        </div>
      </div>
    </footer>
  );
}
