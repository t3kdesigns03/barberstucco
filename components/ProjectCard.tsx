import Link from "next/link";
import Photo from "./Photo";
import { CATEGORY_LABELS, type GalleryImage } from "@/src/data/gallery";

export default function ProjectCard({
  image,
  className = "",
  priority = false,
}: {
  image: GalleryImage;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/gallery/"
      className={`group relative block overflow-hidden rounded-2xl bg-stone shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${className}`}
    >
      <Photo
        src={image.src}
        alt={image.alt}
        width={800}
        height={600}
        priority={priority}
        sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 92vw"
        objectPosition={image.objectPosition}
        className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-4 pt-16">
        <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-teal-bright drop-shadow">
          {CATEGORY_LABELS[image.category]}
        </span>
        <span className="mt-1 block text-sm leading-snug text-white">
          {image.alt}
        </span>
      </span>
    </Link>
  );
}
