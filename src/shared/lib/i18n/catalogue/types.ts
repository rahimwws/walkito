import type { Language } from '../languages';

import type { en } from './en';

/**
 * The plural forms each language's catalogue has to supply.
 *
 * Required members are the ones a real count in this app can select; optional
 * ones are categories CLDR defines but no caller can reach.
 *
 * - **Russian `other`** is the fractional form. Every count here is a whole
 *   day, minute, move or second, so it is never selected — but leaving the
 *   member out entirely would make the type lie about the language.
 * - **Spanish `many`** is the whole-millions form. Same reasoning.
 *
 * Russian's `few` is *not* optional, and that is the point of the whole type:
 * a translator who fills in `one` and `many` and stops has written a catalogue
 * that renders "2 дней", and the compiler says so before the app runs.
 */
export type PluralForms = {
  en: { one: string; other: string };
  ru: { one: string; few: string; many: string; other?: string };
  es: { one: string; other: string; many?: string };
};

/** English is the source of truth. Every other catalogue is typed *from* it, so
 * adding a key here is what creates the obligation to translate it. */
export type Source = typeof en;

export type Key = keyof Source;

/**
 * A complete catalogue for one language.
 *
 * Two things are enforced and both matter:
 *
 * 1. **Every key is present.** A missing one is a compile error, not a blank
 *    label discovered by a user.
 * 2. **Plural-ness is preserved.** A key English writes as a plural entry must
 *    be a plural entry in Russian too — it cannot be flattened to a single
 *    string, which is exactly the shortcut that produces "5 день".
 *
 * What it deliberately does *not* enforce is placeholder parity — that a
 * Russian string uses the same `{name}` set as its English original. Expressing
 * that needs a recursive template-literal check on all ~450 entries at once,
 * which is a real risk to `tsc` time for a guarantee a four-line test gives
 * with a better error message. See `parity.test.ts`.
 */
export type CatalogueFor<L extends Language> = {
  [K in Key]: Source[K] extends string ? string : PluralForms[L];
};
