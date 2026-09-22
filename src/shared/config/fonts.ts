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

/**
 * Inter — the one exception, and it is a single screen.
 *
 * The founder's note is the only place the app stops being a coach and becomes
 * a person writing a letter. It is also the longest unbroken block of prose the
 * app ever shows, and SF Pro Rounded is tuned for labels and numerals rather
 * than for paragraphs — set at fifteen points across four lines it reads soft
 * in exactly the way a signed note should not.
 *
 * So: rounded everywhere, Inter in `NoteSheet`, and nowhere else. If a second
 * screen ever wants it, that is a decision to make on purpose rather than a
 * precedent this comment set by accident.
 *
 * Loaded from `@expo-google-fonts/inter`, which was already a dependency. The
 * five `Inter-*.ttf` files that used to sit in `assets/fonts/` are the ones the
 * note at the top of `AGENTS.md` describes as deleted — these are the package's,
 * not those.
 */
export const noteFonts = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semibold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
} as const;

/** Font map for expo-font's useFonts. */
export const fontAssets = {
  [fonts.regular]: require('@assets/fonts/SF-Pro-Rounded-Regular.otf'),
  [fonts.medium]: require('@assets/fonts/SF-Pro-Rounded-Medium.otf'),
  [fonts.semibold]: require('@assets/fonts/SF-Pro-Rounded-Semibold.otf'),
  [fonts.bold]: require('@assets/fonts/SF-Pro-Rounded-Bold.otf'),
  [fonts.heavy]: require('@assets/fonts/SF-Pro-Rounded-Heavy.otf'),
  [noteFonts.regular]: require('@expo-google-fonts/inter/400Regular/Inter_400Regular.ttf'),
  [noteFonts.medium]: require('@expo-google-fonts/inter/500Medium/Inter_500Medium.ttf'),
  [noteFonts.semibold]: require('@expo-google-fonts/inter/600SemiBold/Inter_600SemiBold.ttf'),
  [noteFonts.bold]: require('@expo-google-fonts/inter/700Bold/Inter_700Bold.ttf'),
};
