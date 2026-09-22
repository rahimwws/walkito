/**
 * The app's translation layer.
 *
 * **Why this is hand-written instead of i18next.** Expo's own docs point at
 * i18next, and for an app pulling translations from a service it would be the
 * right answer. This one ships three bundled languages and needs exactly two
 * guarantees, both of which a library makes *harder* rather than easier:
 *
 *   • **A missing translation must not compile.** `CatalogueFor<L>` is derived
 *     from the English object, so adding a key creates a type error in Russian
 *     and Spanish until it is filled in. i18next reaches the same place only
 *     through `i18next.d.ts` module augmentation, and even then does not check
 *     that a translation uses the same placeholders as its original.
 *   • **Russian's `few` form must be impossible to forget.** That is a property
 *     of the catalogue *type* here. In a library it is a runtime lookup that
 *     falls back silently.
 *
 * The cost is the part a library would have given us free — an ICU parser, a
 * plugin system, lazy namespace loading — and none of that is wanted: the
 * plural rules are 40 lines (`plural.ts`), and a language pack fetched at
 * runtime is a blank screen on a phone with no signal.
 *
 * Usage:
 *
 * ```tsx
 * const t = useT();
 * <Text>{t('streak.title', { count: 3 })}</Text>
 * ```
 */

export { LANGUAGES, LANGUAGE_META, asLanguage, type Language } from './languages';

export {
  getDeviceLanguage,
  getLanguage,
  getLanguagePreference,
  setLanguagePreference,
  subscribeToLanguage,
  useLanguage,
  useLanguagePreference,
  type LanguagePreference,
} from './store';

export { translatorFor, useT, type Translate } from './translate';

export { pluralCategory, type PluralCategory } from './plural';

export type { Key } from './catalogue';
