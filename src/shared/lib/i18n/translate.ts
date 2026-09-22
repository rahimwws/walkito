import { useMemo } from 'react';

import { CATALOGUES } from './catalogue';
import type { Key, Source } from './catalogue/types';
import type { Language } from './languages';
import { pluralCategory, type PluralCategory } from './plural';
import { useLanguage } from './store';

/**
 * The placeholder names inside a template, as a union of string literals.
 *
 * `Placeholders<'{count} of {total}'>` is `'count' | 'total'`. This is what
 * makes `t()` demand exactly the right parameters at the call site — pass
 * `{ count }` to a string that also wants `{total}` and it fails to compile,
 * rather than rendering the literal text "{total}" to a user.
 */
type Placeholders<S extends string> = S extends `${string}{${infer P}}${infer Rest}`
  ? P | Placeholders<Rest>
  : never;

/** The parameters a key needs. Plural entries always need `count`, plus
 * whatever their text interpolates. */
type ParamsOf<K extends Key> = Source[K] extends string
  ? Placeholders<Source[K]>
  : Source[K] extends { other: infer Other extends string }
    ? Placeholders<Other> | 'count'
    : never;

/**
 * A rest-parameter tuple so keys with no placeholders take no second argument
 * at all: `t('settings.title')` rather than `t('settings.title', {})`.
 *
 * The `[X] extends [never]` wrapper defeats union distribution — a bare
 * `ParamsOf<K> extends never` would distribute over the union and answer for
 * each member separately, which is never what you want from an emptiness test.
 */
type Args<K extends Key> = [ParamsOf<K>] extends [never]
  ? []
  : [params: Record<ParamsOf<K>, string | number>];

/** Substitutes `{name}` from `params`. An unknown name is left as-is rather
 * than blanked, so a mistake looks like a mistake in a screenshot instead of
 * silently deleting half a sentence. */
function fill(template: string, params: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (whole, name: string) =>
    Object.hasOwn(params, name) ? String(params[name]) : whole,
  );
}

/**
 * Picks a plural form, degrading through the categories that exist.
 *
 * The type system already guarantees the form a real count selects is present,
 * so this ladder only runs for the optional members — Russian `other` at a
 * fractional count, Spanish `many` at a million. Falling back beats returning
 * undefined and rendering "undefined days" for an input nobody predicted.
 */
const FALLBACK: Record<PluralCategory, readonly PluralCategory[]> = {
  one: ['one', 'other', 'many', 'few'],
  few: ['few', 'many', 'other', 'one'],
  many: ['many', 'other', 'few', 'one'],
  other: ['other', 'many', 'few', 'one'],
};

function selectForm(
  forms: Partial<Record<PluralCategory, string>>,
  category: PluralCategory,
): string {
  for (const candidate of FALLBACK[category]) {
    const form = forms[candidate];
    if (form != null) return form;
  }
  return '';
}

/** A translator bound to one language. */
export type Translate = <K extends Key>(key: K, ...args: Args<K>) => string;

/**
 * Builds the translator for `language`.
 *
 * Exported for tests and for the handful of non-React callers that have to
 * produce text outside a component — notification bodies are scheduled from a
 * background task where no hook can run, so they ask for a translator by
 * language rather than receiving one from context.
 */
export function translatorFor(language: Language): Translate {
  const catalogue = CATALOGUES[language];

  return <K extends Key>(key: K, ...args: Args<K>): string => {
    const entry = catalogue[key] as string | Partial<Record<PluralCategory, string>>;
    const params = (args[0] ?? {}) as Record<string, string | number>;

    if (typeof entry === 'string') return fill(entry, params);

    const count = Number(params.count ?? 0);
    return fill(selectForm(entry, pluralCategory(language, count)), params);
  };
}

/**
 * The translator for the current language.
 *
 * Re-renders the calling component whenever the preference changes, which is
 * what makes the switcher take effect immediately rather than on next launch.
 * Memoised on the language so a component holding `t` in a dependency array
 * doesn't re-run its effects on every unrelated render.
 */
export function useT(): Translate {
  const language = useLanguage();
  return useMemo(() => translatorFor(language), [language]);
}
