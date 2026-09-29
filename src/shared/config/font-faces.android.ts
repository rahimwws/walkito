/**
 * Nunito — Android's face. Rounded like SF Pro Rounded, and under the SIL Open
 * Font License, so it may ship on any platform; SF may not leave Apple's.
 * Heavy maps to ExtraBold (800), the nearest of Nunito's weights to SF Heavy.
 * See `fonts.ts`.
 */
export const faces = {
  regular: 'Nunito_400Regular',
  medium: 'Nunito_500Medium',
  semibold: 'Nunito_600SemiBold',
  bold: 'Nunito_700Bold',
  heavy: 'Nunito_800ExtraBold',
} as const;

export const faceAssets = {
  [faces.regular]: require('@expo-google-fonts/nunito/400Regular/Nunito_400Regular.ttf'),
  [faces.medium]: require('@expo-google-fonts/nunito/500Medium/Nunito_500Medium.ttf'),
  [faces.semibold]: require('@expo-google-fonts/nunito/600SemiBold/Nunito_600SemiBold.ttf'),
  [faces.bold]: require('@expo-google-fonts/nunito/700Bold/Nunito_700Bold.ttf'),
  [faces.heavy]: require('@expo-google-fonts/nunito/800ExtraBold/Nunito_800ExtraBold.ttf'),
};
