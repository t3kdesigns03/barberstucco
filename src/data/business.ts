export const BUSINESS = {
  name: "Barber Stucco",
  owner: "Robert Barber",
  street: "10182 State Rd. D",
  city: "Camdenton",
  state: "MO",
  zip: "65020",
  phoneDisplay: "(573) 216-7054",
  phoneHref: "tel:+15732167054",
  email: "barbers_us@yahoo.com",
  emailHref: "mailto:barbers_us@yahoo.com",
  url: "https://www.barberstucco.com",
  areaServed: "Lake of the Ozarks, Camdenton and mid-Missouri — travel available",
  mapQuery: "10182 State Rd. D, Camdenton, MO 65020",
} as const;

export const NAV = [
  { href: "/services/", label: "Services" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/about/", label: "About" },
  { href: "/testimonials/", label: "Trust" },
  { href: "/contact/", label: "Contact" },
] as const;

export const CREDENTIALS = [
  "Fully insured & licensed",
  "Certified in all Dryvit products",
  "12-year warranty on Dryvit installs",
  "Only certified Arcus Stone applicators in the lake area",
] as const;

export const REFERENCES = [
  {
    name: "Jim Backsen",
    company: "Prater Backsen Contracting",
    phoneDisplay: "(573) 480-2082",
    phoneHref: "tel:+15734802082",
  },
  {
    name: "Randy Prater",
    company: "Prater Backsen Contracting",
    phoneDisplay: "(573) 480-2039",
    phoneHref: "tel:+15734802039",
  },
  {
    name: "Adam Garnett",
    company: "Septagon Construction",
    phoneDisplay: "(573) 302-7577",
    phoneHref: "tel:+15733027577",
  },
  {
    name: "Pete High",
    company: "Stucco inspector",
    phoneDisplay: "(573) 317-1648",
    phoneHref: "tel:+15733171648",
  },
  {
    name: "Bruce Allison",
    company: "Priority One Homes",
    phoneDisplay: "(573) 216-1899",
    phoneHref: "tel:+15732161899",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Adam Garnett",
    role: "Project Coordinator, Septagon Construction",
    pull: "When Barber Stucco does your project it comes with the knowledge that the job will be done right and there will not be any callbacks.",
    quote:
      "As a Project Coordinator for Septagon Construction Company, I have had the opportunity to work with Barber Stucco on numerous projects over the past several years. Barber Stucco has been a reliable source of information and project assistance to our effort as a Design/Build General Contractor. Barber Stucco primarily does Dryvit systems for our commercial facilities. They are always courteous, knowledgeable and reliable. They always work with our schedule to get the job done on time and within budget. When Barber Stucco does your project it comes with the knowledge that the job will be done right and there will not be any callbacks. I highly recommend Barber Stucco for your next project.",
  },
  {
    name: "Pete High",
    role: "EIFS inspector / moisture analyst",
    pull: "Having the opportunity to see firsthand a lot of Barber Stucco's work, I feel that I can confidently recommend this company.",
    quote:
      "In my work as an EIFS and stucco inspector, I have seen what moisture behind these products can do, and it usually isn't pretty. I have yet to find the product itself failing. It is consistently bad application, improper flashing, leaking windows, improper or no expansion joints, missing or improperly installed water diverters, and improperly flashed decks. It is imperative that the EIFS or stucco contractor follow the manufacturer's specifications in the application of these products. Having the opportunity to see firsthand a lot of Barber Stucco's work, I feel that I can confidently recommend this company.",
  },
] as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  blurb: string;
  body: string[];
  bullets: string[];
  image: string;
  imageAlt: string;
  logo?: string;
  logoAlt?: string;
  link?: { href: string; label: string };
};

export const SERVICES: Service[] = [
  {
    slug: "dryvit",
    name: "Dryvit systems",
    short: "Dryvit",
    blurb:
      "Certified in every Dryvit product, and backed by a 12-year warranty on what we install.",
    body: [
      "Dryvit is the system most general contractors around the lake spec when they want a wall assembly that behaves predictably for decades. We are certified in all Dryvit products — base coats, meshes, air and water-resistive barriers, and the full finish range — which means we can put the right build-up on your wall instead of the one we happen to have on the truck.",
      "Because we're certified, Dryvit installations we do carry a 12-year warranty on the product installation. That warranty is worth exactly as much as the workmanship behind it, which is why we detail the openings and joints before anyone opens a finish pail.",
    ],
    bullets: [
      "Certified in all Dryvit products",
      "12-year warranty on Dryvit installations",
      "Residential and commercial",
      "Full finish and texture range",
    ],
    image: "/images/gallery/img_1357.jpg",
    imageAlt: "Multi-story lake home finished in a Dryvit system",
    logo: "/images/products/dryvit.jpg",
    logoAlt: "Dryvit",
    link: { href: "https://www.dryvit.com", label: "dryvit.com" },
  },
  {
    slug: "eifs",
    name: "EIFS",
    short: "EIFS",
    blurb:
      "Exterior Insulation and Finish Systems, installed the way the manufacturer actually specifies.",
    body: [
      "EIFS gives you continuous insulation, a drainage plane and a finished exterior in one assembly. Done right it is one of the best-performing walls you can put on a building at the lake. Done wrong it traps water, and the wall behind it pays for it.",
      "EIFS almost never fails because of the product. It fails at the flashing, at the joints, at the windows and at the decks — the handful of places where someone decided a detail was close enough. We install to the manufacturer's specification at every one of those transitions: head and sill flashing, back-wrapped terminations, real expansion joints where the substrate needs them, diverters where water has somewhere to go.",
      "That's not a sales pitch. There is an EIFS inspector on our reference list who spends his working life opening up other people's walls.",
    ],
    bullets: [
      "Continuous insulation and a drainage plane",
      "Flashing and joint detailing to manufacturer spec",
      "Window, deck and penetration transitions handled first",
      "New construction and re-skins",
    ],
    image: "/images/gallery/img_0817.jpg",
    imageAlt: "Two-story office building with an EIFS facade and banded trim",
  },
  {
    slug: "hard-coat-stucco",
    name: "Hard-coat stucco",
    short: "Hard-coat",
    blurb:
      "Traditional cementitious stucco over lath — the heavy, honest one.",
    body: [
      "Hard-coat is the traditional three-coat cementitious system: lath, scratch, brown, then the finish. It's dense, it takes abuse, and on the right building it is still the correct answer — especially on masonry, on chimneys and on anything that gets hit by weather and hardware.",
      "It's also less forgiving than a synthetic system, because a cement wall moves and cracks where you don't control it. So we control it: correct lath and fastening, a weather-resistive barrier that laps the right way, control joints laid out on the elevation before we start, and a cure schedule that doesn't get compressed because someone wants the scaffold down.",
    ],
    bullets: [
      "Three-coat cementitious system over lath",
      "Control joints laid out before the first coat",
      "Repairs and re-coats on existing stucco",
      "Residential and commercial",
    ],
    image: "/images/gallery/img_1247.jpg",
    imageAlt: "Large stucco residence with copper-roofed bays behind a white fence",
  },
  {
    slug: "arcusstone",
    name: "ArcusStone",
    short: "ArcusStone",
    blurb:
      "A hand-applied limestone finish. We're the only certified applicators in the lake area.",
    body: [
      "ArcusStone is a plaster-based, hand-troweled finish that gives you the look and feel of cut limestone without the weight, the structure or the price of real stone. It reads as a solid masonry building, and up close it has the depth that a printed or molded product never gets.",
      "It is also entirely a workmanship product — the material is only as good as the hands applying it. That's why the manufacturer certifies applicators, and why we're the only certified ArcusStone applicators in the lake area. If you have seen it on a lake house and wondered what it was, there's a fair chance we put it on.",
    ],
    bullets: [
      "Only certified applicators in the lake area",
      "Limestone look, hand-troweled",
      "Interior and exterior",
      "Columns, surrounds, fireplaces and full elevations",
    ],
    image: "/images/gallery/img_1413_op_665x498.jpg",
    imageAlt: "Hand-troweled limestone finish wrapping a window surround",
    logo: "/images/products/arcusstone.jpg",
    logoAlt: "ArcusStone",
    link: { href: "https://www.arcusstone.com/", label: "arcusstone.com" },
  },
  {
    slug: "synthetic-stone",
    name: "Synthetic stone",
    short: "Synthetic stone",
    blurb:
      "Manufactured stone veneer, installed by the same crew that does your stucco.",
    body: [
      "Synthetic stone does a lot of work on a lake house: a water table under a stucco field, a column base, a chimney, an entry that needs some weight to it. We install it, so you're not coordinating two trades across one wall and hoping the transition between them lands somewhere sensible.",
      "The failure mode here is the same as everywhere else on the exterior — water. Weep screeds, lath and moisture barrier laps, flashings at the top of the stone and at every horizontal surface. Same crew, same details, one set of hands responsible for the whole elevation.",
    ],
    bullets: [
      "Manufactured stone veneer, residential and commercial",
      "Water tables, columns, chimneys and full elevations",
      "Detailed to work with the stucco above it",
      "One crew for the whole exterior",
    ],
    image: "/images/gallery/img_0413_op_665x498.jpg",
    imageAlt:
      "Single-story lake home in stone and stucco with a three-car garage",
  },
];
