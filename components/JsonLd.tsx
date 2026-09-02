import { BUSINESS } from "@/src/data/business";

const SITE_URL = "https://www.barberstucco.com";

const data = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: BUSINESS.name,
  founder: BUSINESS.owner,
  description:
    "Stucco, EIFS, hard-coat stucco, ArcusStone and synthetic stone contractor serving the Lake of the Ozarks and mid-Missouri. Certified in all Dryvit products.",
  url: SITE_URL,
  telephone: "+1-573-216-7054",
  email: BUSINESS.email,
  image: `${SITE_URL}/images/gallery/img_1406_op_665x498.jpg`,
  logo: `${SITE_URL}/brand/logo-horizontal.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.zip,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "State", name: "Missouri" },
    { "@type": "Place", name: "Lake of the Ozarks" },
  ],
  knowsAbout: [
    "EIFS",
    "Dryvit",
    "Hard-coat stucco",
    "ArcusStone",
    "Synthetic stone veneer",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Exterior finish systems",
    itemListElement: [
      "Dryvit systems",
      "EIFS",
      "Hard-coat stucco",
      "ArcusStone",
      "Synthetic stone",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
