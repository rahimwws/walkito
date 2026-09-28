/**
 * The arithmetic behind the glass chip's colours, kept pure so the contrast
 * rule can be tested rather than eyeballed on a simulator that renders blur
 * inaccurately anyway.
 */

type Rgb = readonly [number, number, number];

function parse(hex: string): Rgb {
  const h = hex.replace('#', '');
  return [0, 2, 4].map((i) => Number.parseInt(h.slice(i, i + 2), 16)) as unknown as Rgb;
}

function toHex(rgb: Rgb): string {
  return `#${rgb.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('').toUpperCase()}`;
}

/** `a` moved `t` of the way to `b`. */
export function mixHex(a: string, b: string, t: number): string {
  const x = parse(a);
  const y = parse(b);
  return toHex([0, 1, 2].map((i) => x[i] * (1 - t) + y[i] * t) as unknown as Rgb);
}

function luminance(hex: string): number {
  const channel = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  const [r, g, b] = parse(hex);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/** WCAG contrast ratio between two opaque colours. */
export function contrast(a: string, b: string): number {
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

/** How strongly a day card carries its colour — `DayCard`'s today tint. */
export const CARD_TINT = 0.46;
/** The glass's own sheen and the darkening under it. White alone over these
 * cards left white text at 3.3–3.9:1; the darkening is what clears 4.5. */
export const SHEEN = 0.1;
export const DARKEN = 0.15;
/** The depth drawn behind the chips, at its brightest — the worst case. */
export const DEPTH_LIGHTEN = 0.15;

/** The card a chip sits on: its tone over the page. */
export function cardColour(tone: string, page: string): string {
  return mixHex(page, tone, CARD_TINT);
}

/** An unselected chip, flattened to one colour for the contrast check. */
export function chipFace(tone: string, page: string): string {
  const behind = mixHex(cardColour(tone, page), '#FFFFFF', DEPTH_LIGHTEN);
  return mixHex(mixHex(behind, '#FFFFFF', SHEEN), '#000000', DARKEN);
}

/**
 * The solid fill for Reduce Transparency: the tone darkened until white text
 * clears 4.5:1. The spec's "lightened 20%" failed on teal and gold (≈4.0:1),
 * so the direction is flipped and the amount found rather than fixed.
 */
export function solidFill(tone: string): string {
  for (let t = 0.3; t <= 0.8; t += 0.02) {
    const fill = mixHex(tone, '#000000', t);
    if (contrast('#FFFFFF', fill) >= 4.5) return fill;
  }
  return mixHex(tone, '#000000', 0.8);
}

/** A selected chip is near-white; its label is the tone, darkened to read on it. */
export const SELECTED_FILL = 0.9;
export function selectedLabel(tone: string, page: string): string {
  const face = mixHex(cardColour(tone, page), '#FFFFFF', SELECTED_FILL);
  for (let t = 0; t <= 0.8; t += 0.02) {
    const label = mixHex(tone, '#000000', t);
    if (contrast(label, face) >= 4.5) return label;
  }
  return '#000000';
}

export type ChipSurface = 'liquid-glass' | 'blur' | 'solid';

/**
 * Which surface a chip draws: the system's Liquid Glass on iOS 26, the blur
 * underneath on anything older, and a flat fill whenever the user has asked
 * for Reduce Transparency — that setting wins over both.
 */
export function chipSurface(glassAvailable: boolean, reduceTransparency: boolean): ChipSurface {
  if (reduceTransparency) return 'solid';
  return glassAvailable ? 'liquid-glass' : 'blur';
}
