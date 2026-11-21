import type { Faces } from './fonts';

/**
 * iOS: SF Pro, the system face. `System` is React Native's name for it; RN
 * asks UIKit for the system font at `fontWeight`, so the weight lives here.
 * Nothing is bundled and nothing has to load. See `fonts.ts`.
 */
export const faces = {
  regular: { fontFamily: 'System', fontWeight: '400' },
  medium: { fontFamily: 'System', fontWeight: '500' },
  semibold: { fontFamily: 'System', fontWeight: '600' },
  bold: { fontFamily: 'System', fontWeight: '700' },
  heavy: { fontFamily: 'System', fontWeight: '800' },
} as const satisfies Faces;
