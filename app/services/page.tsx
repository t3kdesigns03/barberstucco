import type { Metadata } from "next";
import Button from "@/components/Button";
import Photo from "@/components/Photo";
import { BUSINESS, SERVICES } from "@/src/data/business";

export const metadata: Metadata = {
  title: "Services — Dryvit, EIFS, hard-coat stucco, ArcusStone & stone",
  description:
    "The five exterior systems Barber Stucco installs around the Lake of the Ozarks, and what actually makes each one last.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-page pb-10 pt-14 md:pt-20">
        <p className="eyebrow">Services</p>
        <h1 className="mt-3 max-w-3xl font-display text-[2.6rem] leading-[1.05] tracking-tightest sm:text-6xl">
          Five systems, and the reasons they fail when they fail.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Residential and commercial, new construction and re-skins. Which
          system belongs on your building depends on the substrate, the
          exposure and what you want it to look like in fifteen years — call
          and we&rsquo;ll tell you which one we&rsquo;d put on it.
        </p>

        <nav aria-label="Jump to a system" className="mt-8 flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-muted ring-1 ring-inset ring-stone transition-colors hover:text-ink hover:ring-teal"
            >
              {s.short}
            </a>
          ))}
        </nav>
      </section>

      <div className="divide-y divide-stone">
        {SERVICES.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            aria-labelledby={`${s.slug}-heading`}
            className={`scroll-mt-28 ${i % 2 === 1 ? "bg-white" : ""}`}
          >
            <div className="container-page py-16 md:py-24">
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div className="overflow-hidden rounded-[28px] bg-stone shadow-lift">
                    <Photo
                      src={s.image}
                      alt={s.imageAlt}
                      width={1000}
                      height={750}
                      sizes="(min-width: 1024px) 32rem, 92vw"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  {s.logo && (
                    <div className="absolute -bottom-5 left-6 rounded-2xl bg-white px-4 py-3 shadow-card ring-1 ring-stone">
                      <Photo
                        src={s.logo}
                        alt={`${s.logoAlt} product mark`}
                        width={160}
                        height={54}
                        className="h-7 w-auto object-contain"
                      />
                    </div>
                  )}
                </div>

                <div className="max-w-prose">
                  <h2
                    id={`${s.slug}-heading`}
                    className="font-display text-4xl leading-tight tracking-tightest sm:text-5xl"
                  >
                    {s.name}
                  </h2>
                  <p className="mt-4 text-lg font-medium text-teal-deep">
                    {s.blurb}
                  </p>
                  <div className="mt-6 space-y-5 leading-relaxed text-muted">
                    {s.body.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                  </div>

                  <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-[0.95rem] text-ink"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className="mt-0.5 h-5 w-5 shrink-0 text-teal"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 10.5l4 4 8-9" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {s.link && (
                    <p className="mt-7 text-sm text-muted">
                      Product information:{" "}
                      <a
                        href={s.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-teal-deep underline decoration-teal-bright decoration-2 underline-offset-4"
                      >
                        {s.link.label}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="dark-band bg-ink text-white">
        <div className="rule-glow" aria-hidden="true" />
        <div className="container-page flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-tightest text-white sm:text-5xl">
              Not sure which one you need?
            </h2>
            <p className="mt-4 max-w-lg text-lg text-white/70">
              That is a normal place to start. Tell us the building and
              we&rsquo;ll tell you what belongs on it.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={BUSINESS.phoneHref} variant="onDark" size="lg">
              {BUSINESS.phoneDisplay}
            </Button>
            <a
              href="/contact/"
              className="inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-semibold text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white hover:text-ink"
            >
              Request a consult
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
