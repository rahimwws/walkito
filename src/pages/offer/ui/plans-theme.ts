import { createContext, useContext } from 'react';

import { PRIMARY, colors, meterColors, palette } from '@/shared/config';
import { mix, shade } from '@/shared/lib/color';

/**
 * The plans step's colours, in one place.
 *
 * The step is drawn in the app's own appearance, as the onboarding before it
 * is: the navigation theme paints the screen, and the pieces here take the
 * page's surface and card from `palette`. It used to be a picture of the
 * product rather than a screen of the app (a light violet sky over a white
 * sheet, the same in the dark appearance), and the jump
 * from two dark pages to a bright sky read as somebody else's pop-up.
 *
 * Everything that marks the choice (the chosen plan, the checks, the button)
 * is derived from `HUE`, the brand violet. The buy button is the app's own
 * primary button and takes none of these.
 */
const HUE: string = PRIMARY;

type Plus = {
  /** The chosen plan's border, the checks. */
  accent: string;
  /** Words and ticks on `accent`. */
  onAccent: string;
  /** The highlighted word of the headline, on the surface. */
  lit: string;
  /** The chosen plan's fill. */
  wash: string;
  /** A tint for a radio not chosen, and the trial's track. */
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
  /** A plan that is not chosen: its border. */
  edge: string;
};

export type PlansTheme = { scheme: 'light' | 'dark'; PLUS: Plus; SHEET: Sheet };

const LIGHT: PlansTheme = {
  scheme: 'light',
  PLUS: {
    accent: shade(HUE, 0.1),
    onAccent: colors.onInk,
    lit: shade(HUE, 0.1),
    wash: mix('#FFFFFF', HUE, 0.1),
    washEdge: mix('#FFFFFF', HUE, 0.45),
  },
  SHEET: {
    surface: palette.light.background,
    card: palette.light.card,
    ink: palette.light.foreground,
    label: meterColors.light.label,
    caption: meterColors.light.caption,
    edge: colors.separator,
  },
};

/** The app's dark page: its own surface and card, the violet, and a lighter
 * violet for the lit word, which the violet is too dim for on near-black. */
const DARK: PlansTheme = {
  scheme: 'dark',
  PLUS: {
    accent: HUE,
    onAccent: colors.onInk,
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
    edge: mix(palette.dark.card, '#FFFFFF', 0.12),
  },
};

/** The step in the app's appearance. */
export function plansThemeFor(scheme: 'light' | 'dark'): PlansTheme {
  return scheme === 'dark' ? DARK : LIGHT;
}

export const PlansThemeContext = createContext<PlansTheme>(DARK);

export function usePlansTheme(): PlansTheme {
  return useContext(PlansThemeContext);
}
