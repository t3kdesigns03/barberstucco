# Barber Stucco

Marketing site for **Barber Stucco** — stucco, EIFS, hard-coat, ArcusStone and
synthetic stone in Camdenton, Missouri (Lake of the Ozarks).

Next.js (App Router) + TypeScript + Tailwind, statically exported to `out/`
and deployed on Netlify. No database, no CMS, no server.

```
app/          routes (one folder per page) + fonts + global CSS
components/   header, footer, logo, gallery, lightbox, contact form
src/data/     business facts, services copy, gallery manifest
public/       brand SVGs, favicons, project photography
scripts/      asset download + brand asset generation
```

---

## Run it locally

```bash
npm install
npm run assets     # downloads the project photos into public/images (see below)
npm run dev        # http://localhost:3000
```

Build the static site the same way Netlify will:

```bash
npm run build      # emits ./out
npx serve out      # optional: preview the exported site
```

Node 20+ (Netlify is pinned to 22 in `netlify.toml`).

---

## Project photography

The photos come from the old Homestead site, so they are downloaded rather
than hotlinked:

```bash
npm run assets            # skips anything already in public/
npm run assets -- --force # re-download everything
```

The script reads `src/data/sources.mjs`, writes into
`public/images/gallery/`, `public/images/products/` and
`public/images/robert-barber.jpg`, and reports anything that 404s instead of
failing the run. If `sharp` is installed it also re-encodes the photos to
progressive JPEG at up to 1600px wide — worth doing once before you deploy:

```bash
npm i -D sharp && npm run assets -- --force
```

A photo that hasn't been downloaded renders as a stucco-toned panel rather
than a broken image, so the site is never visibly broken mid-setup.

Filenames and categories live in `src/data/gallery.ts`. To add new work, drop
the file in `public/images/gallery/` and add an entry there — `src`, `alt`,
`category`.

---

## Push it to GitHub

```bash
git init                      # already done if you cloned this
git add .
git commit -m "New Barber Stucco site"
git branch -M main
git remote add origin https://github.com/<you>/barberstucco.git
git push -u origin main
```

`node_modules/`, `.next/` and `out/` are gitignored. The photos in `public/`
**are** committed, so Netlify doesn't need network access to the old site at
build time.

---

## Connect Netlify

1. Netlify → **Add new site → Import an existing project → GitHub**, pick the repo.
2. Netlify reads `netlify.toml`, so the settings should already read
   **build command** `npm run build` and **publish directory** `out`. Deploy.
3. Point the domain at it: **Domain management → Add a domain you already own**
   → `barberstucco.com`, then update the DNS records Netlify shows you at
   whoever hosts the domain today. HTTPS is issued automatically.

### Canonical domain — one switch

Every absolute URL (page canonicals, `og:url`, JSON-LD `url`, `robots` host,
`sitemap.xml`) comes from a single value in `src/data/site.ts`, which reads the
`NEXT_PUBLIC_SITE_URL` environment variable and falls back to
`https://www.barberstucco.com`.

- **While previewing** on `barberstucco.t3kdesigns.app`, the fallback is
  harmless — search engines are told the canonical home is barberstucco.com,
  which is where you're headed.
- **At DNS cutover**, nothing in the code needs to change. If you ever need a
  different canonical host, set it in **Netlify → Site configuration →
  Environment variables**:

  ```
  NEXT_PUBLIC_SITE_URL = https://www.barberstucco.com
  ```

  It's read at build time, so trigger a redeploy after changing it. Locally you
  can drop the same line in a `.env.local` file.

### The contact form

`/contact` posts to **Netlify Forms** — no backend needed. Netlify picks up
the `data-netlify="true"` form from the deployed HTML on the first deploy.

- Submissions: **Netlify → Forms → contact**.
- Email alerts: **Forms → Settings → Form notifications → Add notification →
  Email notification**, send to `barbers_us@yahoo.com`.
- Spam: a honeypot field (`company-website`) is already wired up.
- After submitting, visitors land on `/thank-you`.

Click-to-call and the mailto link work regardless of the form, so nothing is
lost if a visitor would rather just call.

---

## Brand assets

`public/brand/` holds the mark, the horizontal lockup (dark and inverse) and
the favicon; `app/icon.svg` and `app/apple-icon.png` are what browsers pick up.
The wordmark is real SVG outlines — no webfont, no raster — converted from
Great Vibes (SIL Open Font License 1.1).

`components/Logo.tsx` draws the same shapes inline so the header logo can be
recoloured without another network request. If the mark ever changes, edit
`scripts/build-brand.mjs` and regenerate:

```bash
npm i -D opentype.js
node scripts/build-brand.mjs /path/to/GreatVibes-Regular.ttf
```

Body type is Instrument Sans, headings are Fraunces — both self-hosted as
variable woff2 in `app/fonts/`, loaded through `next/font/local`, so there are
no Google Fonts requests and no layout shift.

---

## Editing content

Nearly all copy lives in two files:

- `src/data/business.ts` — phone, address, email, nav, credentials, the five
  service write-ups, testimonials, trade references.
- `src/data/gallery.ts` — every photo, its alt text and its category.

Page layout lives in `app/*/page.tsx`. Colours are Tailwind tokens defined in
`tailwind.config.ts` and mirrored as CSS variables in `app/globals.css`.
