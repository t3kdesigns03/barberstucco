import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://www.barberstucco.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/thank-you/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
