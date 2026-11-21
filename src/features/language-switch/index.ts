/**
 * Changing the app's language.
 *
 * The first slice to earn a place in `features` — two pages need it, which is
 * the bar `src/README.md` sets for moving code down a layer. Onboarding shows
 * `LanguageBadge` in its header, which opens the `/language` form sheet; settings embeds `LanguageOptions` in the form
 * sheet it already has. Both drive the same store.
 */
export { LanguageBadge } from './ui/language-badge';
export { LanguageOptions } from './ui/language-options';
export { LanguageSheetScreen } from './ui/language-sheet';
