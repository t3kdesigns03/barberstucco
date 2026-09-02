/**
 * One switch for the canonical host. Set NEXT_PUBLIC_SITE_URL in the Netlify
 * environment (or .env.local) to flip the domain; everything — metadata,
 * sitemap, robots, JSON-LD — reads from here. Fallback is the production host
 * that DNS will point at after cutover.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.barberstucco.com"
).replace(/\/$/, "");
