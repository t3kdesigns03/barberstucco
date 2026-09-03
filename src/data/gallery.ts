export type GalleryCategory =
  | "residential"
  | "commercial"
  | "details"
  | "texture";

export type GalleryImage = {
  /** Path under /public. */
  src: string;
  alt: string;
  category: GalleryCategory;
  /** object-position override for the 4:3 grid crop, when centre clips the subject. */
  objectPosition?: string;
};

export const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  residential: "Residential",
  commercial: "Commercial",
  details: "Details",
  texture: "Texture",
};

export const CATEGORY_BLURBS: Record<GalleryCategory, string> = {
  residential: "Lake homes, additions and full re-skins.",
  commercial: "Storefronts, offices, restaurants and public buildings.",
  details: "Reveals, joints, arches, columns and trim.",
  texture: "Finish coats up close — the part you actually live with.",
};

/**
 * Photography from Barber Stucco's own archive. Project names and dates were
 * never recorded with these files, so every description sticks to what is
 * actually in the frame.
 */
export const gallery: GalleryImage[] = [
  // ---------------------------------------------------------------- residential
  {
    src: "/images/gallery/img_0413_op_665x498.jpg",
    alt: "Single-story lake home in stone and stucco with a three-car garage",
    category: "residential",
  },
  {
    src: "/images/gallery/img_0506.jpg",
    alt: "Hillside home in tan stucco with an arched entry and tall windows",
    category: "residential",
  },
  {
    src: "/images/gallery/img_0512_op_665x443.jpg",
    alt: "Home under a red tile roof with an arched stucco entry and rooftop cupola",
    category: "residential",
  },
  {
    src: "/images/gallery/img_0521_op_665x443.jpg",
    alt: "Multi-story lake home with stacked decks over a stucco exterior",
    category: "residential",
  },
  {
    src: "/images/gallery/img_1247.jpg",
    alt: "Large stucco residence with copper-roofed bays behind a white fence",
    category: "residential",
  },
  {
    src: "/images/gallery/img_1267.jpg",
    alt: "Lakefront home with stucco walls and a stone entry surround",
    category: "residential",
  },
  {
    src: "/images/gallery/img_1342.jpg",
    alt: "Two-story stucco home with a cupola and arched window heads",
    category: "residential",
  },
  {
    src: "/images/gallery/img_1357.jpg",
    alt: "Multi-story lake home with a tile roof and columned balconies",
    category: "residential",
  },
  {
    src: "/images/gallery/img_1358_op_665x498.jpg",
    alt: "Hillside lake home with stepped stucco elevations and balconies",
    category: "residential",
  },
  {
    src: "/images/gallery/img_1393.jpg",
    alt: "Lakefront residence with stucco columns and arched window openings",
    category: "residential",
  },
  {
    src: "/images/gallery/img_1395.jpg",
    alt: "Large residence combining stone and stucco under steep gables",
    category: "residential",
  },
  {
    src: "/images/gallery/img_1406_op_665x498.jpg",
    alt: "Mediterranean-style residence with a tile roof and arched loggia",
    category: "residential",
  },
  {
    src: "/images/gallery/m.jpg",
    alt: "Single-story home with stucco columns and copper roof accents",
    category: "residential",
  },
  {
    src: "/images/gallery/n.jpg",
    alt: "Long hillside residence in stucco with a series of arched openings",
    category: "residential",
  },
  {
    src: "/images/gallery/picture_op_665x498.jpg",
    alt: "Home with a tile roof, stucco columns and an arched entry porch",
    category: "residential",
  },
  {
    src: "/images/gallery/res1.jpg",
    alt: "Two-story home in stucco and stone among mature trees",
    category: "residential",
  },

  // ----------------------------------------------------------------- commercial
  {
    src: "/images/gallery/img_0442_op_665x498.jpg",
    alt: "Three-story mixed-use building on a downtown corner, stucco above storefronts",
    category: "commercial",
  },
  {
    src: "/images/gallery/img_0692_op_665x498.jpg",
    alt: "Powersports dealership storefront with a stucco parapet and sign band",
    category: "commercial",
  },
  {
    src: "/images/gallery/img_0723_op_665x548.jpg",
    alt: "Restaurant exterior with stucco walls and a peaked glass entry",
    category: "commercial",
  },
  {
    src: "/images/gallery/img_0817.jpg",
    alt: "Two-story office building in snow, EIFS facade with teal glazing",
    category: "commercial",
  },
  {
    src: "/images/gallery/img_1336.jpg",
    alt: "Single-story commercial building in stucco over a stone base",
    category: "commercial",
  },
  {
    src: "/images/gallery/parkside_village.jpg",
    alt: "Single-story commercial building with a stucco facade and full-height glazing",
    category: "commercial",
  },
  {
    src: "/images/gallery/work_pictures_001.jpg",
    alt: "Municipal building entrance finished in stucco",
    category: "commercial",
  },

  // -------------------------------------------------------------------- details
  {
    src: "/images/gallery/img_0416_op_665x498.jpg",
    alt: "Arched window with a cut-stone surround set into a stucco wall",
    category: "details",
  },
  {
    src: "/images/gallery/img_0524_op_665x800.jpg",
    alt: "Recessed entry with an arched head, stucco pilasters and glass-block sidelights",
    category: "details",
  },
  {
    src: "/images/gallery/img_0693_op_665x498.jpg",
    alt: "Parapet cap and cornice above ashlar-scored stucco",
    category: "details",
  },
  {
    src: "/images/gallery/img_0695.jpg",
    alt: "Column and stone base detail at a commercial entry",
    category: "details",
  },
  {
    src: "/images/gallery/getattachment.jpg",
    alt: "Gable and eave detail where synthetic stone meets the wall above",
    category: "details",
  },
  {
    src: "/images/gallery/img_1266.jpg",
    alt: "Cast lattice relief worked into a stucco column",
    category: "details",
  },
  {
    src: "/images/gallery/img_1269.jpg",
    alt: "Arched entry openings framed by patterned stucco pilasters",
    category: "details",
  },
  {
    src: "/images/gallery/img_1271_op_665x498.jpg",
    alt: "Bay window with a banded stucco surround",
    category: "details",
  },
  {
    src: "/images/gallery/img_1337.jpg",
    alt: "Two-tone diamond inlay set into a stucco pilaster",
    category: "details",
  },
  {
    src: "/images/gallery/img_1344.jpg",
    alt: "Window sills and corbels below a tile-roof eave",
    category: "details",
  },
  {
    src: "/images/gallery/img_1386.jpg",
    alt: "Layered cornice banding above a window head",
    category: "details",
  },
  {
    src: "/images/gallery/img_1392_op_665x498.jpg",
    alt: "Trim band running across a heavily textured wall",
    category: "details",
  },
  {
    src: "/images/gallery/img_1396.jpg",
    alt: "Half-round window head trimmed in stucco",
    category: "details",
  },
  {
    src: "/images/gallery/img_1400_op_665x498.jpg",
    alt: "Cornice returning around an outside corner",
    category: "details",
  },
  {
    src: "/images/gallery/img_1408.jpg",
    alt: "Arched wood entry between stucco columns under a tile roof",
    category: "details",
  },
  {
    src: "/images/gallery/img_1409.jpg",
    alt: "Stacked stone veneer wrapping an outside corner",
    category: "details",
  },
  {
    src: "/images/gallery/img_1414_op_665x498.jpg",
    alt: "Window opening trimmed with a stucco band and reveal",
    category: "details",
  },
  {
    src: "/images/gallery/work_pictures_002.jpg",
    alt: "Dentil cornice running below a parapet",
    category: "details",
  },
  {
    src: "/images/gallery/work_pictures_005.jpg",
    alt: "Rope-twist column detail in stucco",
    category: "details",
  },
  {
    src: "/images/gallery/work_pictures_020.jpg",
    alt: "Keystone medallion set above a stone arch",
    category: "details",
  },
  {
    src: "/images/gallery/work_pictures_032.jpg",
    alt: "Interior fireplace surround in cast plaster",
    category: "details",
  },
  {
    src: "/images/gallery/work_pictures_071.jpg",
    alt: "Entry column beside an arched window head",
    category: "details",
  },

  // -------------------------------------------------------------------- texture
  {
    src: "/images/gallery/img_0651.jpg",
    alt: "Close-up of synthetic stone veneer coursing around a wall outlet",
    category: "texture",
  },
  {
    src: "/images/gallery/img_0795.jpg",
    alt: "Close-up of a heavy troweled sand finish",
    category: "texture",
  },
  {
    src: "/images/gallery/img_0798_op_665x498.jpg",
    alt: "Close-up of a coarse aggregate finish above a smooth band",
    category: "texture",
  },
  {
    src: "/images/gallery/img_1275.jpg",
    alt: "Close-up of a knockdown finish coat",
    category: "texture",
  },
  {
    src: "/images/gallery/img_1389_op_665x498.jpg",
    alt: "Close-up of ashlar-scored stucco in grey",
    category: "texture",
  },
  {
    src: "/images/gallery/img_1410_op_665x498.jpg",
    alt: "Close-up of a mottled limestone-look ArcusStone finish",
    category: "texture",
  },
  {
    src: "/images/gallery/img_1411_op_665x498.jpg",
    alt: "Close-up of a hand-troweled limestone-look finish in grey",
    category: "texture",
  },
  {
    src: "/images/gallery/img_1412_op_665x498.jpg",
    alt: "Limestone-look finish returning into a window opening",
    category: "texture",
  },
  {
    src: "/images/gallery/img_1413_op_665x498.jpg",
    alt: "Hand-troweled limestone finish wrapping a window surround",
    category: "texture",
  },
  {
    src: "/images/gallery/pic2.jpg",
    alt: "Close-up of scored stucco blocks in grey",
    category: "texture",
  },
];

export const byCategory = (c: GalleryCategory) =>
  gallery.filter((g) => g.category === c);

const find = (src: string) => gallery.find((g) => g.src === src)!;

/** Hero + featured work, picked for the architecture rather than the detail. */
export const HERO_IMAGE = find("/images/gallery/img_1406_op_665x498.jpg");

export const FEATURED: GalleryImage[] = [
  "/images/gallery/img_0442_op_665x498.jpg",
  "/images/gallery/img_1395.jpg",
  "/images/gallery/img_0723_op_665x548.jpg",
  "/images/gallery/img_1358_op_665x498.jpg",
  "/images/gallery/img_1408.jpg",
  "/images/gallery/img_1275.jpg",
].map(find);
