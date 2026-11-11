import { createContext, useContext } from 'react';

import { PRIMARY, filled, meterColors, palette, raised } from '@/shared/config';
import { mix, shade } from '@/shared/lib/color';

/**
 * The plans step's colours, in one place.
 *
 * The step is a picture of the product rather than a screen of the app: a sky
 * in the brand colour with the mascot in it, and a white sheet under it. Both
 * stay the same in the dark appearance, the way the reference draws them, so
 * every colour of that view is fixed rather than read from the scheme
 * (`PLUS`, `SHEET`).
 *
 * The view after the first session (`NextDay` in place of the sky) is the
 * other way round: it carries on from the session and the onboarding, so it
 * is drawn in the app's own appearance (`plansThemeFor`), and the pieces the
 * two views share read their colours from `usePlansTheme`.
 *
 * Everything that says "Plus" (the sky, the highlighted word, the chosen plan,
 * the checks) is derived from `HUE`; change that one line and the whole step
 * follows (the reference itself is green). Derived the way the kit derives its
 * own violet, so with `PRIMARY` these are exactly the kit's
 * `filled.light.primary` and `raised.light.selected*` values.
 */
const HUE: string = PRIMARY;

type Plus = {
  /** The sky, top to bottom: the hue a little lighter, then a deeper one. */
  skyTop: string;
  skyBottom: string;
  /** The chosen plan's border, the checks, the button. The hue a step down,
   * as the kit's filled violet is, so white on it reads at AA. */
  accent: string;
  /** The ledge under anything filled with `accent`. */
  accentLip: string;
  /** Words and ticks on `accent`. */
  onAccent: string;
  /** The highlighted word of the headline, on the surface. */
  lit: string;
  /** The chosen plan's fill. */
  wash: string;
  /** The chosen plan's lip, and a tint for a radio not chosen. */
  washEdge: string;
};

type Sheet = {
  surface: string;
  /** A plan's face when it is not chosen. */
  card: string;
  ink: string;
  /** Secondary lines: a plan's note, a table row. */
  label: string;
  /** The quietest lines: "per month", "Not now". */
  caption: string;
  /** A plan that is not chosen: its border and its lip. */
  edge: string;
};

export const PLUS: Plus = {
  skyTop: mix(HUE, '#FFFFFF', 0.12),
  skyBottom: shade(HUE, 0.32),
  accent: shade(HUE, 0.1),
  accentLip: shade(shade(HUE, 0.1), 0.2),
  onAccent: filled.light.primary.label,
  lit: shade(HUE, 0.1),
  wash: mix('#FFFFFF', HUE, 0.1),
  washEdge: mix('#FFFFFF', HUE, 0.45),
};

/** The white sheet, the same in both appearances. */
export const SHEET: Sheet = {
  surface: '#FFFFFF',
  card: '#FFFFFF',
  ink: palette.light.foreground,
  label: meterColors.light.label,
  caption: meterColors.light.caption,
  edge: raised.light.edge,
};

export type PlansTheme = { scheme: 'light' | 'dark'; PLUS: Plus; SHEET: Sheet };

const LIGHT: PlansTheme = { scheme: 'light', PLUS, SHEET };

/** The same pieces on the app's dark page: the page's own surface and card,
 * the kit's dark violet, and a lighter violet for the lit word, which the
 * filled one is too dim for on near-black. */
const DARK: PlansTheme = {
  scheme: 'dark',
  PLUS: {
    ...PLUS,
    accent: filled.dark.primary.face,
    accentLip: filled.dark.primary.lip,
    onAccent: filled.dark.primary.label,
    lit: mix(HUE, '#FFFFFF', 0.3),
    wash: mix(palette.dark.card, HUE, 0.16),
    washEdge: mix(palette.dark.card, HUE, 0.5),
  },
  SHEET: {
    surface: palette.dark.background,
    card: palette.dark.card,
    ink: palette.dark.foreground,
    label: meterColors.dark.label,
    caption: meterColors.dark.caption,
    edge: raised.dark.edge,
  },
};

/** The step in the app's appearance: the view after the first session. */
export function plansThemeFor(scheme: 'light' | 'dark'): PlansTheme {
  return scheme === 'dark' ? DARK : LIGHT;
}

/** The fixed light theme unless a view provides the app's own. */
export const PlansThemeContext = createContext<PlansTheme>(LIGHT);

export function usePlansTheme(): PlansTheme {
  return useContext(PlansThemeContext);
}
