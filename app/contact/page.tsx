import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Photo from "@/components/Photo";
import { BUSINESS } from "@/src/data/business";

export const metadata: Metadata = {
  title: "Contact Barber Stucco",
  description:
    "Call (573) 216-7054, email, or send project details to Barber Stucco at 10182 State Rd. D, Camdenton, MO 65020.",
  alternates: { canonical: "/contact/" },
};

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  BUSINESS.mapQuery,
)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <section className="container-page pb-4 pt-14 md:pt-20">
        <p className="eyebrow eyebrow-tick">Contact</p>
        <h1 className="mt-3 max-w-3xl font-display text-[2.6rem] leading-[1.05] tracking-tightest sm:text-6xl">
          Tell us about the building.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Residential or commercial, new or a repair. Calling is fastest —
          otherwise the form goes straight to us.
        </p>
      </section>

      <section className="container-page py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* ------------------------------------------------------- details */}
          <div>
            <div className="overflow-hidden rounded-[28px] bg-stone shadow-lift">
              <Photo
                src="/images/robert-barber.jpg"
                alt="Robert Barber, owner of Barber Stucco"
                width={800}
                height={775}
                priority
                sizes="(min-width: 1024px) 28rem, 92vw"
                className="w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-muted">
              <span className="font-semibold text-ink">
                {BUSINESS.owner}
              </span>{" "}
              · Owner
            </p>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="eyebrow">Phone</dt>
                <dd className="mt-2">
                  <a
                    href={BUSINESS.phoneHref}
                    className="inline-block py-1 font-display text-3xl tracking-tight text-ink transition-colors hover:text-teal-deep sm:text-4xl"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Email</dt>
                <dd className="mt-2">
                  <a
                    href={BUSINESS.emailHref}
                    className="-my-1 inline-block break-all py-1 text-lg font-medium text-ink transition-colors hover:text-teal-deep"
                  >
                    {BUSINESS.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Shop</dt>
                <dd className="mt-2 text-lg leading-relaxed text-muted">
                  <address className="not-italic">
                    {BUSINESS.street}
                    <br />
                    {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                  </address>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Service area</dt>
                <dd className="mt-2 text-lg leading-relaxed text-muted">
                  {BUSINESS.areaServed}
                </dd>
              </div>
            </dl>

          </div>

          {/* ---------------------------------------------------------- form */}
          <div>
            <div className="rounded-[28px] bg-white p-6 shadow-card ring-1 ring-stone sm:p-9">
              <h2 className="font-display text-3xl tracking-tight">
                Request a consult
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                A few lines is plenty. Address or area, what&rsquo;s on the
                wall now, and roughly when you want it done.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-20 md:pb-28">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
            Where to find us
          </h2>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              BUSINESS.mapQuery,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="-my-2 inline-flex min-h-[44px] items-center py-2 text-sm font-semibold text-teal-deep underline decoration-teal-bright decoration-2 underline-offset-4 hover:text-ink"
          >
            Get directions
          </a>
        </div>
        <div className="overflow-hidden rounded-[28px] bg-stone ring-1 ring-stone">
          <iframe
            title={`Map to ${BUSINESS.name}, ${BUSINESS.mapQuery}`}
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full border-0 md:h-[420px]"
          />
        </div>
      </section>
    </>
  );
}
