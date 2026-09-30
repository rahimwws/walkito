import type { Locale } from './types.ts';

/**
 * Plural choice for the three languages, integers only.
 *
 * The same CLDR rules as `src/shared/lib/i18n/plural.ts`, restated here because
 * the edge function cannot reach into the app's `src`. Every count an email
 * shows is a whole number — minutes, days, raises, seconds, sessions — so the
 * fractional branches are left out.
 *
 * Russian is the one that matters: 1, 21, 31 take `one`; 2–4, 22–24 take
 * `few`; 5–20 and 11–14 in every hundred take `many`.
 */
export function pick<T>(locale: Locale, n: number, forms: { one: T; few?: T; many?: T; other?: T }): T {
  const i = Math.abs(Math.trunc(n));
  if (locale === 'ru') {
    const d10 = i % 10;
    const d100 = i % 100;
    if (d10 === 1 && d100 !== 11) return forms.one;
    if (d10 >= 2 && d10 <= 4 && (d100 < 12 || d100 > 14)) return forms.few ?? forms.many ?? forms.one;
    return forms.many ?? forms.one;
  }
  return i === 1 ? forms.one : forms.other ?? forms.one;
}

/** English and Spanish: one form at exactly 1, the other otherwise. */
export function two(n: number, one: string, other: string): string {
  return Math.abs(Math.trunc(n)) === 1 ? one : other;
}

/** Russian: the three forms. */
export function three(n: number, one: string, few: string, many: string): string {
  return pick('ru', n, { one, few, many });
}

/** A number for a sentence: whole numbers bare, others to one decimal in the locale's separator. */
export function num(locale: Locale, n: number): string {
  const rounded = Math.round(n * 10) / 10;
  const text = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  return locale === 'en' ? text : text.replace('.', ',');
}
