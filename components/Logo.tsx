import {
  MARK_LAYERS,
  WORDMARK_HEIGHT,
  WORDMARK_PATH,
  WORDMARK_TRANSFORM,
  WORDMARK_WIDTH,
} from "./brand-paths";

type Tone = "ink" | "inverse";

const TONES: Record<Tone, { shell: string; accent: string; word: string }> = {
  ink: { shell: "#06191B", accent: "#129AA3", word: "#06191B" },
  inverse: { shell: "#FFFFFF", accent: "#1EC8D0", word: "#FFFFFF" },
};

function Mark({
  shell,
  accent,
  transform,
}: {
  shell: string;
  accent: string;
  transform?: string;
}) {
  return (
    <g transform={transform}>
      {MARK_LAYERS.map((l, i) => (
        <path
          key={i}
          d={l.d}
          transform={l.transform}
          fill={l.role === "shell" ? shell : accent}
        />
      ))}
    </g>
  );
}

/** Icon only — the facade, the arched reveal and the heart in the gable. */
export function LogoMark({
  className,
  tone = "ink",
  title = "Barber Stucco",
}: {
  className?: string;
  tone?: Tone;
  title?: string;
}) {
  const t = TONES[tone];
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={title}
      focusable="false"
    >
      <Mark shell={t.shell} accent={t.accent} />
    </svg>
  );
}

const MARK = 64;
const GAP = 18;
const WORD_H = 44;
const SCALE = WORD_H / WORDMARK_HEIGHT;
const WORD_W = WORDMARK_WIDTH * SCALE;
const TOTAL_W = MARK + GAP + WORD_W;
const TOTAL_H = 72;

/** Mark + script wordmark, drawn as outlines so it needs no webfont. */
export default function Logo({
  className,
  tone = "ink",
  title = "Barber Stucco",
}: {
  className?: string;
  tone?: Tone;
  title?: string;
}) {
  const t = TONES[tone];
  return (
    <svg
      viewBox={`0 0 ${TOTAL_W.toFixed(2)} ${TOTAL_H}`}
      className={className}
      role="img"
      aria-label={title}
      focusable="false"
    >
      <Mark
        shell={t.shell}
        accent={t.accent}
        transform={`translate(0 ${(TOTAL_H - MARK) / 2})`}
      />
      <g
        transform={`translate(${MARK + GAP} ${(TOTAL_H - WORD_H) / 2 + 2}) scale(${SCALE.toFixed(5)})`}
        fill={t.word}
      >
        <g transform={WORDMARK_TRANSFORM}>
          <path d={WORDMARK_PATH} />
        </g>
      </g>
    </svg>
  );
}
