/**
 * The system face: SF Pro on iOS, Roboto on Android (`font-faces`). Neutral,
 * the way Runna, Nike and Bend set their type, and already on every phone, so
 * the app bundles no font file.
 *
 * Every text style takes its face and size from here and never sets
 * `fontFamily`, `fontWeight` or `fontSize` itself:
 *
 *   title: { ...fonts.bold(28, -0.4), textAlign: 'center' },
 *   body: fonts.regular(19),
 *
 * The second argument is the letterSpacing the design asks for; leave it out
 * for the system's own tracking. iOS tracks SF Pro by size, which is what a
 * native screen does, so nothing is corrected. `faces.*` is the face alone,
 * for a span nested in a Text that already set the size.
 *
 * Sizes follow `type` in `tokens.ts`: body 19, never below 17 for anything a
 * person has to read. Weights stay at Regular and above.
 */
import type { TextStyle } from 'react-native';

import { faces as platformFaces } from './font-faces';

export type FontWeightName = 'regular' | 'medium' | 'semibold' | 'bold' | 'heavy';

/** Just the face: which family, and which weight of it. */
export type Face = { readonly fontFamily: string; readonly fontWeight?: TextStyle['fontWeight'] };

export type Faces = Record<FontWeightName, Face>;

/** A face at a size, with any letterSpacing the design asks for. */
export type SizedFace = Face & { fontSize: number; letterSpacing?: number };

function sized(face: Face) {
  return (fontSize: number, letterSpacing = 0): SizedFace =>
    letterSpacing === 0 ? { ...face, fontSize } : { ...face, fontSize, letterSpacing };
}

export const fonts = {
  regular: sized(platformFaces.regular),
  medium: sized(platformFaces.medium),
  semibold: sized(platformFaces.semibold),
  bold: sized(platformFaces.bold),
  heavy: sized(platformFaces.heavy),
};

export const faces: typeof platformFaces = platformFaces;
