/**
 * The legacy Homestead site is the only source for Barber Stucco's project
 * photography. `scripts/fetch-assets.mjs` pulls these into /public and the
 * gallery data file points at the local copies.
 */
export const BASE = "http://www.barberstucco.com/";

/** Owner portrait. */
export const OWNER = {
  url: "files/QuickSiteImages/Robert_Barber_op_665x644.jpg",
  out: "images/robert-barber.jpg",
};

/** Manufacturer / system marks used as small partner logos. */
export const PRODUCTS = [
  { url: "files/QuickSiteImages/Dryvit.jpg", out: "images/products/dryvit.jpg" },
  { url: "files/QuickSiteImages/Arcusstone.jpg", out: "images/products/arcusstone.jpg" },
  { url: "files/QuickSiteImages/EIFS.jpg", out: "images/products/eifs.jpg" },
  { url: "files/QuickSiteImages/HardCoat.jpg", out: "images/products/hardcoat.jpg" },
  { url: "files/QuickSiteImages/Syn_stone.jpg", out: "images/products/synthetic-stone.jpg" },
];

/** Gallery photography, filed to match src/data/gallery.ts. */
export const GALLERY = {
  residential: [
    "IMG_0413_op_665x498.jpg",
    "IMG_0506.JPG",
    "IMG_0512_op_665x443.jpg",
    "IMG_0521_op_665x443.jpg",
    "IMG_1247.jpg",
    "IMG_1267.jpg",
    "IMG_1342.JPG",
    "IMG_1357.JPG",
    "IMG_1358_op_665x498.jpg",
    "IMG_1393.jpg",
    "IMG_1395.jpg",
    "IMG_1406_op_665x498.jpg",
    "m.jpg",
    "n.jpg",
    "Picture_op_665x498.jpg",
    "res1.jpg",
  ],
  commercial: [
    "IMG_0442_op_665x498.jpg",
    "IMG_0692_op_665x498.jpg",
    "IMG_0723_op_665x548.jpg",
    "IMG_0813.jpg",
    "IMG_0817.jpg",
    "IMG_1336.jpg",
    "parkside_village.jpg",
    "Work_Pictures_001.jpg",
  ],
  details: [
    "IMG_0416_op_665x498.jpg",
    "IMG_0524_op_665x800.jpg",
    "IMG_0693_op_665x498.jpg",
    "IMG_0695.JPG",
    "GetAttachment.jpg",
    "IMG_1266.jpg",
    "IMG_1269.jpg",
    "IMG_1271_op_665x498.jpg",
    "IMG_1337.jpg",
    "IMG_1344.JPG",
    "IMG_1385_op_665x498.jpg",
    "IMG_1386.jpg",
    "IMG_1390.jpg",
    "IMG_1392_op_665x498.jpg",
    "IMG_1396.jpg",
    "IMG_1400_op_665x498.jpg",
    "IMG_1408.jpg",
    "IMG_1409.jpg",
    "IMG_1414_op_665x498.jpg",
    "Work_Pictures_002.jpg",
    "Work_Pictures_005.jpg",
    "Work_Pictures_020.jpg",
    "Work_Pictures_032.jpg",
    "Work_Pictures_071.jpg",
  ],
  texture: [
    "IMG_0651.JPG",
    "IMG_0795.JPG",
    "IMG_0798_op_665x498.jpg",
    "IMG_1275.jpg",
    "IMG_1389_op_665x498.jpg",
    "IMG_1392.jpg",
    "IMG_1410_op_665x498.jpg",
    "IMG_1411_op_665x498.jpg",
    "IMG_1412_op_665x498.jpg",
    "IMG_1413_op_665x498.jpg",
    "pic2.jpg",
  ],
};

/** public/images/gallery/<slug> for a legacy filename. */
export const slugFor = (name) =>
  "images/gallery/" + name.toLowerCase().replace(/\.jpeg$/, ".jpg");
