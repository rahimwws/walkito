import type { Faces } from './fonts';

/**
 * Android: Roboto, the system face, at `fontWeight`. Nothing is bundled.
 * See `fonts.ts`.
 */
export const faces = {
  regular: { fontFamily: 'sans-serif', fontWeight: '400' },
  medium: { fontFamily: 'sans-serif', fontWeight: '500' },
  semibold: { fontFamily: 'sans-serif', fontWeight: '600' },
  bold: { fontFamily: 'sans-serif', fontWeight: '700' },
  heavy: { fontFamily: 'sans-serif', fontWeight: '800' },
} as const satisfies Faces;
