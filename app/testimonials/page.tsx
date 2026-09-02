import type { Metadata } from "next";
import Button from "@/components/Button";
import { BUSINESS, REFERENCES, TESTIMONIALS } from "@/src/data/business";

export const metadata: Metadata = {
  title: "Testimonials & trade references",
  description:
    "Letters from a design/build general contractor and an EIFS moisture inspector, plus five builder and inspector references you can call.",
  alternates: { canonical: "/testimonials/" },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="container-page pb-4 pt-14 md:pt-20">
        <p className="eyebrow">Trust</p>
        <h1 className="mt-3 max-w-3xl font-display text-[2.6rem] leading-[1.05] tracking-tightest sm:text-6xl">
          General contractors call us back. That&rsquo;s the whole review.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Two letters below — one from a design/build GC we do commercial work
          for, one from an inspector whose job is finding walls that failed.
          Under them, five people in the trade who will pick up the phone.
        </p>
      </section>

      <section className="container-page py-12 md:py-16">
        <ul className="grid gap-6 lg:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col rounded-[28px] bg-white p-8 shadow-card ring-1 ring-stone sm:p-10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-teal-bright"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M9.5 5C6.4 6.6 4.5 9.5 4.5 13v6h7v-7H8c0-2.3 1-3.9 3.1-5L9.5 5Zm10 0c-3.1 1.6-5 4.5-5 8v6h7v-7H18c0-2.3 1-3.9 3.1-5L19.5 5Z" />
                </svg>
                <blockquote className="mt-5 flex-1 text-[1.05rem] leading-relaxed text-body">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="mt-7 border-t border-stone pt-5">
                  <span className="block font-display text-xl tracking-tight text-ink">
                    {t.name}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {t.role}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-page">
          <p className="eyebrow">References</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight tracking-tightest sm:text-5xl">
            Trusted by builders &amp; inspectors.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            These are trade references, not consumer reviews. They are people
            we have worked with and for. Call any of them.
          </p>

          <ul className="mt-10 divide-y divide-stone rounded-[26px] bg-paper ring-1 ring-stone">
            {REFERENCES.map((r) => (
              <li key={r.name}>
                <div className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                  <div>
                    <p className="font-display text-xl tracking-tight text-ink">
                      {r.name}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">{r.company}</p>
                  </div>
                  <a
                    href={r.phoneHref}
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink ring-1 ring-inset ring-stone transition-colors hover:text-teal-deep hover:ring-teal"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-teal"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                    </svg>
                    {r.phoneDisplay}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
            Want your GC to talk to ours? Say so when you call.
          </p>
          <Button href={BUSINESS.phoneHref} size="lg">
            {BUSINESS.phoneDisplay}
          </Button>
        </div>
      </section>
    </>
  );
}
