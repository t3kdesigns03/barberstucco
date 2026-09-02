import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/data/site";

export const dynamic = "force-static";


const ROUTES = [
  { path: "/", priority: 1, changeFrequency: "monthly" as const },
  { path: "/services/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/gallery/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about/", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/testimonials/", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/contact/", priority: 0.9, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
