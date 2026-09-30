import type { Faces } from './fonts';

/**
 * Nunito, Android's face. Rounded like SF Pro Rounded, and under the SIL Open
 * Font License, so it may ship on any platform; SF may not leave Apple's.
 * Heavy maps to ExtraBold (800), the nearest of Nunito's weights to SF Heavy.
 * One file per weight, so the weight is in the family name and no `fontWeight`
 * is set. See `fonts.ts`.
 */
export const faces = {
  regular: { fontFamily: 'Nunito_400Regular' },
  medium: { fontFamily: 'Nunito_500Medium' },
  semibold: { fontFamily: 'Nunito_600SemiBold' },
  bold: { fontFamily: 'Nunito_700Bold' },
  heavy: { fontFamily: 'Nunito_800ExtraBold' },
} as const satisfies Faces;

export const faceAssets = {
  [faces.regular.fontFamily]: require('@expo-google-fonts/nunito/400Regular/Nunito_400Regular.ttf'),
  [faces.medium.fontFamily]: require('@expo-google-fonts/nunito/500Medium/Nunito_500Medium.ttf'),
  [faces.semibold.fontFamily]: require('@expo-google-fonts/nunito/600SemiBold/Nunito_600SemiBold.ttf'),
  [faces.bold.fontFamily]: require('@expo-google-fonts/nunito/700Bold/Nunito_700Bold.ttf'),
  [faces.heavy.fontFamily]: require('@expo-google-fonts/nunito/800ExtraBold/Nunito_800ExtraBold.ttf'),
};

/** Nunito has no `trak` table and Android adds no tracking of its own. */
export function systemTracking(_size: number): number {
  return 0;
}
