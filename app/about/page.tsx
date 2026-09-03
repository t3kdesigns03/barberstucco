import type { Metadata } from "next";
import Button from "@/components/Button";
import Photo from "@/components/Photo";
import { BUSINESS } from "@/src/data/business";

export const metadata: Metadata = {
  title: "About Barber Stucco",
  description:
    "Robert Barber and a crew that has worked together for years, installing stucco, EIFS and stone exteriors around the Lake of the Ozarks. Fully insured and licensed.",
  alternates: { canonical: "/about/" },
};

const PRINCIPLES = [
  {
    title: "The wall gets figured out first",
    body: "Flashing, joints, terminations and transitions get laid out before anybody opens a pail of finish. Nearly every failed stucco or EIFS wall gets opened up and traced back to one of those four places — not to the middle of the field.",
  },
  {
    title: "Same crew, job after job",
    body: "Our crew has worked together for a long time. That is the practical reason the details are consistent from one elevation to the next: nobody is learning our standard on your building.",
  },
  {
    title: "Sized for the whole job",
    body: "We keep crews and equipment large enough to take on a commercial building without stretching thin, and we are set up to travel when the work is worth the trip.",
  },
  {
    title: "On time, on budget, no callbacks",
    body: "General contractors schedule around us because we hit the dates we give them. The measure we care about is whether anyone has to call us back after the scaffold comes down.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-page pb-4 pt-14 md:pt-20">
        <p className="eyebrow eyebrow-tick">About</p>
        <h1 className="mt-3 max-w-3xl font-display text-[2.6rem] leading-[1.05] tracking-tightest sm:text-6xl">
          A stucco company run by the person who still walks the wall.
        </h1>
      </section>

      <section className="container-page py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <div className="overflow-hidden rounded-[28px] bg-stone shadow-lift">
              <Photo
                src="/images/robert-barber.jpg"
                alt="Robert Barber, owner of Barber Stucco"
                width={800}
                height={775}
                priority
                sizes="(min-width: 1024px) 26rem, 92vw"
                className="w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-muted">
              <span className="font-semibold text-ink">Robert Barber</span> ·
              Owner
            </p>
          </div>

          <div className="max-w-prose">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Barber Stucco is Robert Barber&rsquo;s company.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                He owns it, he bids it, and he is on the job while it is going
                on. When a general contractor calls with a question about a
                detail on a set of plans, he is the one who answers — which is
                a large part of why the same builders keep calling.
              </p>
              <p>
                The work is residential and commercial exterior finishes:
                Dryvit and other EIFS assemblies, traditional hard-coat stucco,
                ArcusStone, and synthetic stone. All of it around the Lake of
                the Ozarks and across mid-Missouri, and further out when a job
                calls for it.
              </p>
              <p>
                We are fully insured and licensed, we are certified in all
                Dryvit products, and we are the only certified Arcus Stone
                applicators in the lake area. We guarantee our workmanship, and
                Dryvit installations carry a 12-year warranty on the product
                installation.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={BUSINESS.phoneHref}>
                Call {BUSINESS.phoneDisplay}
              </Button>
              <Button href="/contact/" variant="secondary">
                Request a consult
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <p className="eyebrow eyebrow-tick">How we work</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight tracking-tightest sm:text-5xl">
            Four things that decide whether an exterior lasts.
          </h2>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <li
                key={p.title}
                className="rounded-[26px] bg-paper p-7 ring-1 ring-stone transition-shadow hover:shadow-card"
              >
                <span className="font-display text-sm font-semibold text-teal-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-2xl tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="dark-band stucco-dark grid gap-8 rounded-[28px] bg-ink p-8 text-white sm:p-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="eyebrow eyebrow-tick">Warranty &amp; coverage</p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-white sm:text-4xl">
              Insured, licensed, and on the hook for our own work.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              Barber Stucco is fully insured and licensed. We guarantee our
              workmanship, and because we are certified in all Dryvit products,
              Dryvit installations we perform carry a 12-year warranty on the
              product installation.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-6 self-center lg:grid-cols-1">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-teal-bright">
                Dryvit warranty
              </dt>
              <dd className="mt-1 font-display text-4xl text-white">12 yr</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-teal-bright">
                ArcusStone
              </dt>
              <dd className="mt-1 font-display text-xl leading-tight text-white">
                Only certified applicators in the lake area
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
