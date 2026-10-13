import { PRIMARY, filled, meterColors, palette, raised } from '@/shared/config';
import { mix, shade } from '@/shared/lib/color';

/**
 * The plans step's colours, in one place.
 *
 * The step is a picture of the product rather than a screen of the app: a sky
 * in the brand colour with the mascot in it, and a white sheet under it. Both
 * stay the same in the dark appearance, the way the reference draws them, so
 * every colour here is fixed rather than read from the scheme.
 *
 * Everything that says "Plus" (the sky, the highlighted word, the chosen plan,
 * the checks, the Plus pill) is derived from `HUE`; change that one line and
 * the whole step follows (the reference itself is green). Derived the way the
 * kit derives its own violet, so with `PRIMARY` these are exactly the kit's
 * `filled.light.primary` and `raised.light.selected*` values.
 */
const HUE: string = PRIMARY;

export const PLUS = {
  /** The sky, top to bottom: the hue a little lighter, then a deeper one. */
  skyTop: mix(HUE, '#FFFFFF', 0.12),
  skyBottom: shade(HUE, 0.32),
  /** On the white sheet: the highlighted word, the chosen plan's border, the
   * checks, the Plus pill. The hue a step down, as the kit's filled violet
   * is, so white on it reads at AA. */
  accent: shade(HUE, 0.1),
  /** The ledge under anything filled with `accent`. */
  accentLip: shade(shade(HUE, 0.1), 0.2),
  /** Words and ticks on `accent`. */
  onAccent: filled.light.primary.label,
  /** The chosen plan's fill and the Plus column's strip. */
  wash: mix('#FFFFFF', HUE, 0.1),
  /** The chosen plan's lip, and a tint for a radio not chosen. */
  washEdge: mix('#FFFFFF', HUE, 0.45),
} as const;

/** The white sheet, the same in both appearances. */
export const SHEET = {
  surface: '#FFFFFF',
  ink: palette.light.foreground,
  /** Secondary lines: a plan's note, a table row. */
  label: meterColors.light.label,
  /** The quietest lines: "per month", "Not now". */
  caption: meterColors.light.caption,
  /** A plan that is not chosen: its border and its lip. */
  edge: raised.light.edge,
} as const;

/** The floating button: the kit's ink face, light scheme, since the sheet is. */
export const PILL = filled.light.ink;
