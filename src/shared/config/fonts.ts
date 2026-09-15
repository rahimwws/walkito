/** SF Pro Rounded — the app-wide typeface.
 *
 * Rounded, not neutral: the product is a coach, and the reference apps in this
 * category all use a rounded face. Inter reads correct but cold next to them.
 *
 * Use these families instead of `fontWeight`: each entry is a single face, and
 * pairing a face with a mismatched fontWeight makes iOS synthesize a weight or
 * fall back to the system font entirely.
 *
 * The names are the keys expo-font registers them under, not PostScript names
 * — `useFonts` maps the key to the file, so `fontFamily: fonts.medium`
 * resolves the same whether the font was loaded at runtime (Expo Go) or
 * embedded at build time (dev builds, via the config plugin in app.json). */
export const fonts = {
  regular: 'SFProRounded-Regular',
  medium: 'SFProRounded-Medium',
  semibold: 'SFProRounded-Semibold',
  bold: 'SFProRounded-Bold',
  heavy: 'SFProRounded-Heavy',
} as const;

/** Font map for expo-font's useFonts. */
export const fontAssets = {
  [fonts.regular]: require('@assets/fonts/SF-Pro-Rounded-Regular.otf'),
  [fonts.medium]: require('@assets/fonts/SF-Pro-Rounded-Medium.otf'),
  [fonts.semibold]: require('@assets/fonts/SF-Pro-Rounded-Semibold.otf'),
  [fonts.bold]: require('@assets/fonts/SF-Pro-Rounded-Bold.otf'),
  [fonts.heavy]: require('@assets/fonts/SF-Pro-Rounded-Heavy.otf'),
};
