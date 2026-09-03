/**
 * Regenerates the Barber Stucco brand assets.
 *
 *   node scripts/build-brand.mjs                       # mark change only
 *   node scripts/build-brand.mjs /path/GreatVibes.ttf  # also rebuild wordmark
 *
 * The mark is a front-elevation facade: an ink silhouette with a pitched
 * gable, a teal arched window (a stucco reveal, split into two lights by a
 * mullion), a teal heart seated at the ridge, and a thin teal ground line.
 * The script wordmark is real SVG outlines converted from Great Vibes
 * (SIL Open Font License 1.1); it rarely changes, so when no TTF is passed the
 * existing wordmark paths are read back from components/brand-paths.ts and
 * only the mark + SVGs are regenerated. Generated files are committed.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TTF = process.argv[2];

const INK = "#06191B";
const TEAL = "#129AA3";
const TEAL_BRIGHT = "#1EC8D0";

/* ---------- the mark (64x64) ------------------------------------------- *
 * Front elevation, not a house icon: pitched facade, centred arched window
 * with a mullion, heart at the ridge, teal ground line. role "shell" is the
 * ink body (white when inverted); role "accent" is teal (teal-bright when
 * inverted). Order matters — later layers paint over earlier ones.          */
const HEART =
  "M12 21 C12 21 3 14.4 3 8.5 A5.5 5.5 0 0 1 12 5 A5.5 5.5 0 0 1 21 8.5 C21 14.4 12 21 12 21 Z";

const MARK_LAYERS = [
  // facade silhouette with a gable roof
  { role: "shell", d: "M32 6 L56 25 L56 55 L8 55 L8 25 Z" },
  // thin ground line the building sits on
  { role: "accent", d: "M6 55 H58 V57.6 H6 Z" },
  // arched window (stucco reveal)
  { role: "accent", d: "M24 50 V34 A8 8 0 0 1 40 34 V50 Z" },
  // mullion splitting the window into two lights
  { role: "shell", d: "M31 27 H33 V50 H31 Z" },
  // heart at the ridge
  { role: "accent", d: HEART, transform: "translate(26 7.5) scale(0.5)" },
];

/* ---------- wordmark ---------------------------------------------------- */
function cmdsToD(cmds, dp = 2) {
  const n = (v) => {
    const r = Number(v.toFixed(dp));
    return Object.is(r, -0) ? 0 : r;
  };
  let out = "";
  let open = false;
  for (const c of cmds) {
    if (c.type === "M" && open) out += "Z";
    if (c.type === "M") open = true;
    if (c.type === "M") out += `M${n(c.x)} ${n(c.y)}`;
    else if (c.type === "L") out += `L${n(c.x)} ${n(c.y)}`;
    else if (c.type === "C")
      out += `C${n(c.x1)} ${n(c.y1)} ${n(c.x2)} ${n(c.y2)} ${n(c.x)} ${n(c.y)}`;
    else if (c.type === "Q") out += `Q${n(c.x1)} ${n(c.y1)} ${n(c.x)} ${n(c.y)}`;
    else if (c.type === "Z") {
      out += "Z";
      open = false;
    }
  }
  if (open) out += "Z";
  return out;
}

async function buildWordmarkFromTtf() {
  const opentype = (await import("opentype.js")).default;
  const font = opentype.parse(fs.readFileSync(TTF).buffer);
  const size = 200;
  const scale = size / font.unitsPerEm;
  const text = "Barber Stucco";
  let x = 0;
  let prev = null;
  const parts = [];
  const bb = { x1: Infinity, y1: Infinity, x2: -Infinity, y2: -Infinity };
  for (const ch of text) {
    const g = font.charToGlyph(ch);
    if (prev) x += (font.getKerningValue(prev, g) || 0) * scale;
    const p = g.getPath(x, 0, size);
    const b = p.getBoundingBox();
    if (ch !== " " && Number.isFinite(b.x1)) {
      bb.x1 = Math.min(bb.x1, b.x1);
      bb.y1 = Math.min(bb.y1, b.y1);
      bb.x2 = Math.max(bb.x2, b.x2);
      bb.y2 = Math.max(bb.y2, b.y2);
    }
    parts.push(cmdsToD(p.commands));
    x += g.advanceWidth * scale;
    prev = g;
  }
  return {
    d: parts.join(""),
    transform: `translate(${(-bb.x1).toFixed(2)} ${(-bb.y1).toFixed(2)})`,
    width: +(bb.x2 - bb.x1).toFixed(2),
    height: +(bb.y2 - bb.y1).toFixed(2),
  };
}

function readWordmarkFromBrandPaths() {
  const src = fs.readFileSync(path.join(ROOT, "components/brand-paths.ts"), "utf8");
  const grab = (name, re) => {
    const m = src.match(re);
    if (!m) throw new Error(`could not read ${name} from brand-paths.ts (pass a TTF to rebuild it)`);
    return m[1];
  };
  return {
    d: JSON.parse(grab("WORDMARK_PATH", /WORDMARK_PATH = (".*?");/s)),
    transform: JSON.parse(grab("WORDMARK_TRANSFORM", /WORDMARK_TRANSFORM = (".*?");/s)),
    width: Number(grab("WORDMARK_WIDTH", /WORDMARK_WIDTH = ([\d.]+);/)),
    height: Number(grab("WORDMARK_HEIGHT", /WORDMARK_HEIGHT = ([\d.]+);/)),
  };
}

const w = TTF ? await buildWordmarkFromTtf() : readWordmarkFromBrandPaths();

/* ---------- emit -------------------------------------------------------- */
const markGroup = (shell, accent, extra = "") => {
  const paint = (r) => (r === "shell" ? shell : accent);
  const paths = MARK_LAYERS.map(
    (l) =>
      `    <path d="${l.d}" fill="${paint(l.role)}"${l.transform ? ` transform="${l.transform}"` : ""}/>`,
  ).join("\n");
  return `  <g${extra}>\n${paths}\n  </g>`;
};

const MARK = 64;
const WORD_H = 44;
const ws = WORD_H / w.height;
const wordW = +(w.width * ws).toFixed(2);
const GAP = 18;
const TOTAL_W = +(MARK + GAP + wordW).toFixed(2);
const TOTAL_H = 72;
const markY = (TOTAL_H - MARK) / 2;
const wordY = (TOTAL_H - WORD_H) / 2 + 2;

const write = (rel, body) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body);
  console.log("wrote", rel, body.length, "bytes");
};

write(
  "public/brand/logo-mark.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Barber Stucco">
${markGroup(INK, TEAL)}
</svg>
`,
);

const horizontal = (shell, accent, word) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${TOTAL_W} ${TOTAL_H}" width="${TOTAL_W}" height="${TOTAL_H}" role="img" aria-label="Barber Stucco">
${markGroup(shell, accent, ` transform="translate(0 ${markY})"`)}
  <g transform="translate(${MARK + GAP} ${wordY}) scale(${ws.toFixed(5)})" fill="${word}">
    <g transform="${w.transform}"><path d="${w.d}"/></g>
  </g>
</svg>
`;

write("public/brand/logo-horizontal.svg", horizontal(INK, TEAL, INK));
write(
  "public/brand/logo-horizontal-inverse.svg",
  horizontal("#FFFFFF", TEAL_BRIGHT, "#FFFFFF"),
);

const faviconBody = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="#F7FBFC"/>
  <g transform="translate(32 33) scale(0.86) translate(-32 -32)">
${markGroup(INK, TEAL)}
  </g>
</svg>
`;
write("public/brand/favicon.svg", faviconBody);
write("app/icon.svg", faviconBody);

write(
  "components/brand-paths.ts",
  `// GENERATED by scripts/build-brand.mjs — do not hand-edit.
// Mark geometry + wordmark outlines (Great Vibes, SIL Open Font License 1.1).
export type MarkLayer = { role: "shell" | "accent"; d: string; transform?: string };

export const MARK_LAYERS: MarkLayer[] = ${JSON.stringify(MARK_LAYERS, null, 2)};

export const WORDMARK_PATH = ${JSON.stringify(w.d)};
export const WORDMARK_TRANSFORM = ${JSON.stringify(w.transform)};
export const WORDMARK_WIDTH = ${w.width};
export const WORDMARK_HEIGHT = ${w.height};
`,
);

console.log(JSON.stringify({ TOTAL_W, TOTAL_H, wordW, ws: +ws.toFixed(5) }));
