import type { Metadata } from "next";
import Button from "@/components/Button";
import { LogoMark } from "@/components/Logo";
import { BUSINESS } from "@/src/data/business";

export const metadata: Metadata = {
  title: "Thanks — we got it",
  description: "Your message reached Barber Stucco in Camdenton, Missouri.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you/" },
};

export default function ThankYouPage() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <LogoMark className="h-14 w-14" />
      <h1 className="mt-8 max-w-2xl font-display text-[2.4rem] leading-[1.05] tracking-tightest sm:text-5xl">
        Got it. We&rsquo;ll be in touch.
      </h1>
      <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
        Your message is in. If it&rsquo;s time-sensitive — a bid deadline, a
        wall that&rsquo;s open, weather coming — call instead and you&rsquo;ll
        get an answer faster.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Button href={BUSINESS.phoneHref} size="lg">
          Call {BUSINESS.phoneDisplay}
        </Button>
        <Button href="/gallery/" variant="secondary" size="lg">
          Look at the work
        </Button>
      </div>
    </section>
  );
}
