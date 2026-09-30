/** SF Pro Rounded, the app-wide typeface (Nunito on Android).
 *
 * Rounded, not neutral: the product is a coach, and the reference apps in this
 * category all use a rounded face. Inter reads correct but cold next to them.
 *
 * On iOS it is the system's own rounded design, not a bundled copy. The app
 * used to ship five SF Pro Rounded .otf files, and twice over (embedded by the
 * expo-font plugin, and again as the assets `useFonts` loaded): 4.4 MB of the
 * install for a face iOS already has, from files Apple licenses for mock-ups
 * rather than for shipping inside an app. The system copy is the same design
 * cut for cut: set side by side on the iOS 26.5 simulator, the outlines, the
 * advances and the line metrics all match. It is also complete, where the
 * bundled files had been cut down to Latin, Greek and Cyrillic.
 *
 * Two things differ, and `fonts.*` absorbs both. That is why every text style
 * takes its face and size from here, and never sets `fontFamily`, `fontWeight`
 * or `fontSize` itself:
 *
 * - The weight is a `fontWeight` on the one `ui-rounded` family, not a family
 *   per weight.
 * - iOS tracks the system face by size (its `trak` table) and never tracked
 *   the bundled one. `fonts.*` takes that tracking back out through
 *   letterSpacing (`systemTracking` in `font-faces.ts`), which is why it needs
 *   the size.
 *
 *   title: { ...fonts.heavy(24, -0.6), textAlign: 'center' },
 *   label: fonts.semibold(16),
 *
 * The second argument is the letterSpacing the design asks for, written as it
 * always was: `fonts.heavy(24, -0.6)` sets exactly as tight as `fontSize: 24,
 * letterSpacing: -0.6` did on the bundled file. Leave it out for none.
 *
 * The size has to be the one that renders. A later style that sets fontSize or
 * letterSpacing on its own would bring back the tracking this took out, so an
 * override is another `fonts.*` call, carrying the new size and whatever
 * spacing it would have inherited. `faces.*` is the face alone, for a span
 * nested in a Text that already set both, or a later style on the same Text
 * that only changes the weight: it keeps the size and the corrected spacing
 * already there. With a non-default Dynamic Type size the correction is for
 * the size as written, and is off by under 0.1pt a character.
 *
 * `tabular-nums` (what holds the counters still) works on the system face as
 * it did on the bundled one. */
// The face comes from `font-faces`: the system rounded design on iOS, Nunito
// on Android. Apple licenses SF for Apple platforms only, and Android has no
// copy of its own, so Metro resolves `font-faces.android.ts` there.
import type { TextStyle } from 'react-native';

import { faceAssets, faces as platformFaces, systemTracking } from './font-faces';

export type FontWeightName = 'regular' | 'medium' | 'semibold' | 'bold' | 'heavy';

/** Just the face: which family, and on iOS which weight of it. */
export type Face = { readonly fontFamily: string; readonly fontWeight?: TextStyle['fontWeight'] };

export type Faces = Record<FontWeightName, Face>;

/** A face at a size, with the letterSpacing that makes it set as designed. */
export type SizedFace = Face & { fontSize: number; letterSpacing?: number };

function sized(face: Face) {
  return (fontSize: number, letterSpacing = 0): SizedFace => {
    const spacing = letterSpacing - systemTracking(fontSize);
    // Left out at 0 rather than set to it: a kern of exactly 0 is CoreText's
    // switch for turning a font's pair kerning off, while no letterSpacing at
    // all leaves it on. At 104pt, where iOS adds no tracking, an explicit 0
    // widened a 44-character line by 14pt.
    return spacing === 0 ? { ...face, fontSize } : { ...face, fontSize, letterSpacing: spacing };
  };
}

export const fonts = {
  regular: sized(platformFaces.regular),
  medium: sized(platformFaces.medium),
  semibold: sized(platformFaces.semibold),
  bold: sized(platformFaces.bold),
  heavy: sized(platformFaces.heavy),
};

export const faces: typeof platformFaces = platformFaces;

/** Inter, for the note sheet only. SemiBold was loaded here and never used. */
export const noteFonts = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  bold: 'Inter_700Bold',
} as const;

export const fontAssets = {
  ...faceAssets,
  [noteFonts.regular]: require('@expo-google-fonts/inter/400Regular/Inter_400Regular.ttf'),
  [noteFonts.medium]: require('@expo-google-fonts/inter/500Medium/Inter_500Medium.ttf'),
  [noteFonts.bold]: require('@expo-google-fonts/inter/700Bold/Inter_700Bold.ttf'),
};
