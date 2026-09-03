import Link from "next/link";
import Button from "@/components/Button";
import Photo from "@/components/Photo";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { LogoMark } from "@/components/Logo";
import { BUSINESS, CREDENTIALS, SERVICES, TESTIMONIALS } from "@/src/data/business";
import { FEATURED, HERO_IMAGE } from "@/src/data/gallery";

export default function HomePage() {
  const quote = TESTIMONIALS[0];

  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="container-page grid items-center gap-10 pb-14 pt-12 md:pb-20 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-24">
          <div className="animate-fade-up">
            <p className="eyebrow">Camdenton, Missouri · Lake of the Ozarks</p>
            <h1 className="mt-4 font-display text-[2.6rem] leading-[1.02] tracking-tightest sm:text-6xl lg:text-[4.25rem]">
              Stucco that keeps the weather{" "}
              <span className="relative whitespace-nowrap text-teal-deep">
                on the outside
                <svg
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-teal-bright"
                >
                  <path
                    d="M2 8 C 60 2, 120 10, 180 5 S 260 3, 298 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Residential and commercial exteriors for the lake area — Dryvit
              and EIFS systems, hard-coat stucco, ArcusStone and synthetic
              stone. We install it like moisture is trying to get in, because
              it is.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={BUSINESS.phoneHref} size="lg">
                Call {BUSINESS.phoneDisplay}
              </Button>
              <Button href="/contact/" variant="secondary" size="lg">
                Request a consult
              </Button>
            </div>

            <p className="mt-7 text-sm text-muted">
              Fully insured &amp; licensed · Workmanship guaranteed · Travel
              available
            </p>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -right-10 -top-10 hidden h-48 w-48 rounded-full bg-teal-bright/25 blur-3xl lg:block" />
            <div className="absolute -bottom-12 -left-10 hidden h-44 w-44 rounded-full bg-teal/15 blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-[28px] bg-stone shadow-lift ring-1 ring-inset ring-ink/10">
              <Photo
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                width={1200}
                height={900}
                priority
                sizes="(min-width: 1024px) 34rem, 92vw"
                className="aspect-[5/4] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/25 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 -mt-8 ml-4 inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-card ring-1 ring-stone sm:ml-8">
              <LogoMark className="h-9 w-9 shrink-0" />
              <p className="text-sm font-medium leading-snug text-ink">
                12-year warranty on
                <br className="hidden sm:block" /> Dryvit installations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- proof strip */}
      <section aria-label="Credentials" className="border-y border-stone bg-white">
        <div className="container-page py-6">
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {CREDENTIALS.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 text-[0.95rem] font-medium text-ink"
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
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ services */}
      <section className="container-page py-20 md:py-28">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-tick">What we install</p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tightest sm:text-5xl">
              Five systems. One crew that knows where water goes.
            </h2>
          </div>
          <Button href="/services/" variant="secondary" className="shrink-0 whitespace-nowrap">
            All five systems
          </Button>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 60}>
              <Link
                href={`/services/#${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-white shadow-card ring-1 ring-stone transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:ring-teal/40"
              >
                <Photo
                  src={s.image}
                  alt={s.imageAlt}
                  width={800}
                  height={520}
                  sizes="(min-width: 768px) 22rem, 92vw"
                  className="aspect-[8/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl tracking-tight">
                    {s.name}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">
                    {s.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-deep">
                    Read more
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ------------------------------------------------------- featured work */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow eyebrow-tick">Recent work</p>
              <h2 className="mt-3 font-display text-4xl leading-tight tracking-tightest sm:text-5xl">
                Houses, storefronts, and the details underneath both.
              </h2>
            </div>
            <Button href="/gallery/" variant="secondary" className="shrink-0 whitespace-nowrap">
              Open the gallery
            </Button>
          </Reveal>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((img, i) => (
              <Reveal as="li" key={img.src} delay={i * 60}>
                <ProjectCard image={img} className="h-full" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------- testimonial */}
      <section className="container-page py-20 md:py-28">
        <Reveal as="figure" className="mx-auto max-w-4xl text-center">
          <svg
            viewBox="0 0 24 24"
            className="mx-auto h-10 w-10 text-teal-bright"
            aria-hidden="true"
            fill="currentColor"
          >
            <path d="M9.5 5C6.4 6.6 4.5 9.5 4.5 13v6h7v-7H8c0-2.3 1-3.9 3.1-5L9.5 5Zm10 0c-3.1 1.6-5 4.5-5 8v6h7v-7H18c0-2.3 1-3.9 3.1-5L19.5 5Z" />
          </svg>
          <blockquote className="mt-6 font-display text-2xl leading-snug tracking-tight text-ink sm:text-[2.1rem] sm:leading-[1.25]">
            “{quote.pull}”
          </blockquote>
          <figcaption className="mt-6 text-[0.95rem] text-muted">
            <span className="font-semibold text-ink">{quote.name}</span> ·{" "}
            {quote.role}
          </figcaption>
          <div className="mt-8">
            <Button href="/testimonials/" variant="ghost">
              Read both letters and our trade references
            </Button>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------------------- CTA band */}
      <section className="dark-band stucco-dark bg-ink text-white">
        <div className="rule-glow" aria-hidden="true" />
        <div className="container-page grid gap-10 py-16 md:grid-cols-[1.2fr_1fr] md:items-center md:py-20">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-tightest text-white sm:text-5xl">
              Tell us what&rsquo;s on the wall.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
              New build, re-skin, or a repair somebody else walked away from —
              send a couple of photos and an address and we&rsquo;ll tell you
              straight what it needs.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Button href={BUSINESS.phoneHref} variant="onDark" size="lg">
              {BUSINESS.phoneDisplay}
            </Button>
            <a
              href={BUSINESS.emailHref}
              className="inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-semibold text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white hover:text-ink"
            >
              Email us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
