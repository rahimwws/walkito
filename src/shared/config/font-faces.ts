import type { Faces } from './fonts';

/**
 * iOS: the system's own rounded design, which is SF Pro Rounded drawn from the
 * copy iOS already carries. The app ships no font file for it. See `fonts.ts`.
 *
 * `ui-rounded` is React Native's name for UIFontDescriptorSystemDesignRounded:
 * RN asks UIKit for the system font at `fontWeight` and then switches its
 * design to rounded (`RCTFontWithFontProperties` in RCTFontUtils.mm). So the
 * weight lives here, where a bundled face used to carry it in its name. 400 to
 * 800 map to UIFontWeightRegular, Medium, Semibold, Bold and Heavy, the same
 * five cuts the bundled files were.
 *
 * Web resolves this file too. The app does not ship there.
 */
export const faces = {
  regular: { fontFamily: 'ui-rounded', fontWeight: '400' },
  medium: { fontFamily: 'ui-rounded', fontWeight: '500' },
  semibold: { fontFamily: 'ui-rounded', fontWeight: '600' },
  bold: { fontFamily: 'ui-rounded', fontWeight: '700' },
  heavy: { fontFamily: 'ui-rounded', fontWeight: '800' },
} as const satisfies Faces;

/** Nothing to load: the face is part of the system. */
export const faceAssets = {};

/**
 * Track 0 of the `trak` table in iOS's rounded system font (SFUIRounded.ttf,
 * iOS 26.5; macOS's SFNSRounded.ttf has the same table), as [point size, font
 * units at 2048 per em].
 *
 * The bundled .otf had no `trak` table, so CoreText set it with no tracking at
 * all. The system copy has one, and CoreText applies it to every glyph on its
 * own: +0.37pt per character at 17pt, +0.51pt at 13pt. Left alone, every line
 * in the app would set wider than it did: 4% at 17pt, 9% at 12pt, enough to
 * rewrap a title or shrink a fitted label further. `fonts.*` takes it back
 * out through letterSpacing, which reaches CoreText as a kern added on top of
 * the tracking rather than in place of it.
 */
const TRAK: readonly (readonly [size: number, units: number])[] = [
  [6, 174],
  [9, 130],
  [10, 116],
  [11, 104],
  [12, 92],
  [13, 80],
  [14, 70],
  [15, 60],
  [16, 52],
  [17, 45],
  [20, 37],
  [22, 32],
  [28, 26],
  [32, 24],
  [36, 22],
  [50, 14],
  [64, 6],
  [80, 0],
];

const UNITS_PER_EM = 2048;

/**
 * The tracking, in points, that iOS adds after each glyph of the rounded
 * system face at `size`.
 *
 * CoreText interpolates between the table's sizes in font units and truncates
 * to a whole unit before scaling to points. Checked against CoreText itself,
 * rendering the same strings in the bundled .otf and in the system face on the
 * iOS 26.5 simulator: this matches its tracking to under 0.02 units at every
 * half point from 5 to 150pt. Below 6pt the first entry holds; from 80pt up
 * there is none.
 */
export function systemTracking(size: number): number {
  const [firstSize, firstUnits] = TRAK[0];
  if (size <= firstSize) return (firstUnits * size) / UNITS_PER_EM;
  for (let i = 1; i < TRAK.length; i++) {
    const [s1, u1] = TRAK[i];
    if (size > s1) continue;
    const [s0, u0] = TRAK[i - 1];
    // Multiply before dividing, and nudge before the floor, so a size that
    // lands on a whole unit (24pt is exactly 30) is not floored to the unit
    // below by a rounding error.
    const units = Math.floor(u0 + ((size - s0) * (u1 - u0)) / (s1 - s0) + 1e-9);
    return (units * size) / UNITS_PER_EM;
  }
  return 0;
}
