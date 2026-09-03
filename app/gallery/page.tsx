import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import Button from "@/components/Button";
import { BUSINESS } from "@/src/data/business";
import { gallery } from "@/src/data/gallery";

export const metadata: Metadata = {
  title: "Project gallery",
  description:
    "Residential and commercial stucco, EIFS and stone work by Barber Stucco around the Lake of the Ozarks — plus the details and finish textures up close.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="container-page pb-8 pt-14 md:pt-20">
        <p className="eyebrow eyebrow-tick">Gallery</p>
        <h1 className="mt-3 max-w-3xl font-display text-[2.6rem] leading-[1.05] tracking-tightest sm:text-6xl">
          {gallery.length} photos from our own jobs.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Whole elevations, and the details most people never look at. Filter
          by what you want to see, then tap any photo to open it full size.
        </p>
      </section>

      <section className="container-page pb-20 md:pb-28">
        <GalleryGrid />
      </section>

      <section className="dark-band stucco-dark bg-ink text-white">
        <div className="rule-glow" aria-hidden="true" />
        <div className="container-page flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-display text-2xl leading-snug tracking-tight text-white sm:text-3xl">
            See something close to your project? Call and we&rsquo;ll tell you
            what it took.
          </p>
          <Button href={BUSINESS.phoneHref} variant="onDark" size="lg">
            {BUSINESS.phoneDisplay}
          </Button>
        </div>
      </section>
    </>
  );
}
