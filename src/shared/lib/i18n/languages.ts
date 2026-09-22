/**
 * The languages the app ships in, and nothing else.
 *
 * Kept free of storage and of `expo-localization` on purpose: the catalogue
 * files and the plural rules both need `Language`, and neither should drag MMKV
 * or a native module into a bun test run to get it. Detection and persistence
 * live in `store.ts`, which is the only file here that touches either.
 */

/** Ordered as the picker renders them: the source language first, then by
 * speaker count. */
export const LANGUAGES = ['en', 'ru', 'es'] as const;

export type Language = (typeof LANGUAGES)[number];

/**
 * How each language names itself, plus the two-letter badge the onboarding
 * header shows.
 *
 * Endonyms — "Русский", not "Russian". A language picker is read by someone who
 * cannot yet read the language the app is currently in, so listing the options
 * in the *current* language defeats the control: a Russian speaker staring at
 * an English app needs to recognise "Русский" on sight. This is why the labels
 * are data rather than catalogue keys, and why they are the one set of strings
 * that is deliberately never translated.
 *
 * `badge` is uppercase ISO 639-1 because that is what fits in the header beside
 * a progress bar. It is not shown anywhere a full name would fit.
 */
export const LANGUAGE_META: Record<Language, { name: string; badge: string }> = {
  en: { name: 'English', badge: 'EN' },
  ru: { name: 'Русский', badge: 'RU' },
  es: { name: 'Español', badge: 'ES' },
};

/** Narrows anything to a supported language, or null. Accepts full tags
 * (`ru-RU`, `es-419`) as well as bare codes, since that is what both the device
 * and a stored value can look like. */
export function asLanguage(tag: string | null | undefined): Language | null {
  if (tag == null) return null;
  const code = tag.toLowerCase().split(/[-_]/)[0];
  return (LANGUAGES as readonly string[]).includes(code) ? (code as Language) : null;
}
