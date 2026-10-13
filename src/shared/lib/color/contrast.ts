/**
 * Mixing and contrast. PURE — no React, no theme knowledge.
 *
 * The raised kit derives most of its colours from an accent and the surface it
 * sits on (a tinted card, a value on a tile, the label on a filled face), so the
 * arithmetic that keeps those legible has to be one function rather than a hex
 * picked per screen. `raised.test.ts` holds the kit's pairs to it.
 *
 * Opaque `#RRGGBB` / `#RGB` only. An `rgba()` has no single contrast: it
 * depends on what is under it, which only the caller knows.
 */

type Rgb = readonly [number, number, number];

/** The app's ink, `palette.light.foreground`, written here so this file stays
 * free of the theme. */
const INK = '#111114';
const WHITE = '#FFFFFF';

function parse(hex: string): Rgb {
  let h = hex.trim().replace('#', '');
  if (h.length === 3) h = `${h[0]}${h[0]}${h[1]}${h[1]}${h[2]}${h[2]}`;
  return [0, 2, 4].map((i) => Number.parseInt(h.slice(i, i + 2), 16)) as unknown as Rgb;
}

function toHex(rgb: Rgb): string {
  return `#${rgb
    .map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()}`;
}

/** `a` moved `t` (0–1) of the way to `b`. */
export function mix(a: string, b: string, t: number): string {
  const x = parse(a);
  const y = parse(b);
  const k = Math.min(Math.max(t, 0), 1);
  return toHex([0, 1, 2].map((i) => x[i] * (1 - k) + y[i] * k) as unknown as Rgb);
}

/** WCAG relative luminance, 0 (black) to 1 (white). */
export function luminance(hex: string): number {
  const channel = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  const [r, g, b] = parse(hex);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/** WCAG contrast ratio between two opaque colours, 1 to 21. */
export function contrast(a: string, b: string): number {
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

/**
 * Ink or white, whichever reads better on `face`.
 *
 * For a label on a face the caller did not choose: an accent's fill. Amber,
 * orange and teal come back ink in both schemes, which is why a fixed white
 * label (what `ReliefButton` drew) cannot be right for every accent.
 */
export function labelOn(face: string): typeof INK | typeof WHITE {
  return contrast(INK, face) > contrast(WHITE, face) ? INK : WHITE;
}

/**
 * `color` moved toward black on a light surface, or toward white on a dark
 * one, just far enough to reach `min` against `surface`.
 *
 * A value drawn in its metric's accent keeps that accent's hue; it only gets
 * the depth it needs to be read. Found rather than fixed, because the amount
 * differs per accent: amber needs about 0.38 on white, violet none.
 */
export function readableOn(color: string, surface: string, min = 4.5): string {
  const toward = luminance(surface) > 0.18 ? '#000000' : WHITE;
  for (let t = 0; t <= 1; t += 0.02) {
    const candidate = mix(color, toward, t);
    if (contrast(candidate, surface) >= min) return candidate;
  }
  return toward;
}

/** WCAG AA for text under 18.7pt bold: every label a filled face carries. */
const AA = 4.5;

/**
 * A face filled with `fill`: the label that reads on it, the face itself moved
 * just far enough for that label to reach AA, and the ledge under it.
 *
 * Every label on a filled face is under WCAG's large-text size (14pt bold is
 * about 18.7 iOS points; a badge is 11, a button 14 to 18), so the bar is 4.5,
 * not 3. Most accents already clear it with ink and come back as they are; the
 * light scheme's violet takes white at 4.35:1 and is darkened a step.
 *
 * The ledge is the face shaded by `lipShade`, as `shade` would: mixed toward
 * black, which is the same arithmetic.
 */
export function filledFace(
  fill: string,
  lipShade = 0.2,
): { face: string; lip: string; label: string } {
  const label = labelOn(fill);
  const face = readableOn(fill, label, AA);
  return { face, lip: mix(face, '#000000', lipShade), label };
}
