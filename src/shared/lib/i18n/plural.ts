/**
 * CLDR plural categories for the three languages this app ships in.
 *
 * **Why this is hand-written rather than `Intl.PluralRules`.**
 *
 * Hermes ships Intl, but which *parts* of it depends on how the engine was
 * compiled, and on iOS several members resolve through the platform's own
 * locale services rather than ICU data bundled with the binary. A category
 * lookup that silently degrades is the worst possible failure here: it does not
 * throw, it just returns `'other'` for every count, and Russian quietly renders
 * "5 день" on the streak tile for everyone. Nobody notices until a Russian
 * speaker opens the app.
 *
 * Three languages is four short predicates. They are frozen data — CLDR plural
 * *categories* for established languages do not change — and being ours means
 * they are testable in bun, on the machine, in the same run as everything else.
 * See `plural.test.ts`, which covers the boundaries these rules exist for
 * (11–14 in Russian is the one that catches every naive implementation).
 *
 * Extracted from Unicode CLDR 44, `plurals.xml`.
 */

/** The CLDR category set. Not every language uses every member — see
 * `CATEGORIES_BY_LANGUAGE` for which ones a catalogue must supply. */
export type PluralCategory = 'one' | 'few' | 'many' | 'other';

/**
 * Which categories a translator has to write for each language.
 *
 * This is the list the catalogue types are built from, so omitting Russian's
 * `few` is a compile error rather than a string that renders wrong at 22.
 *
 * `other` is present everywhere because it is CLDR's required fallback: it
 * catches fractional counts in Russian, and it is the plain plural in English
 * and Spanish.
 */
export const CATEGORIES_BY_LANGUAGE = {
  en: ['one', 'other'],
  ru: ['one', 'few', 'many', 'other'],
  es: ['one', 'many', 'other'],
} as const satisfies Record<string, readonly PluralCategory[]>;

/** Integer part and visible-fraction-digit count, the two operands CLDR's rules
 * for these languages are written against. `v` is what separates "1 day" from
 * "1.0 days" — English pluralises the second one. */
function operands(count: number): { i: number; v: number } {
  const abs = Math.abs(count);
  const i = Math.floor(abs);
  if (Number.isInteger(abs)) return { i, v: 0 };
  // Digits after the point, as written. `1.50` arrives as `1.5`, so this is the
  // count of *significant* fraction digits — which is what the rules that
  // matter here (all of which only test `v = 0`) actually need.
  const fraction = String(abs).split('.')[1] ?? '';
  return { i, v: fraction.length };
}

/** `one` at exactly 1, `other` everywhere else — including 0 and 1.5. */
function english(count: number): PluralCategory {
  const { i, v } = operands(count);
  return i === 1 && v === 0 ? 'one' : 'other';
}

/**
 * Spanish. `one` at exactly 1; `many` only at whole millions.
 *
 * The `many` category exists for "un millón" style agreement and cannot be
 * reached by any count this app produces — days, minutes, moves and seconds.
 * It is implemented anyway because leaving it out would make the rule silently
 * wrong rather than visibly incomplete, and the catalogue type marks it
 * optional so no translator is asked to invent a millionth form.
 */
function spanish(count: number): PluralCategory {
  const { i, v } = operands(count);
  if (i === 1 && v === 0) return 'one';
  if (i !== 0 && i % 1_000_000 === 0 && v === 0) return 'many';
  return 'other';
}

/**
 * Russian. Three integer forms, and the teens are the trap.
 *
 * 1, 21, 31 → `one`   (день)
 * 2–4, 22–24 → `few`  (дня)
 * 0, 5–20, 25–30 → `many` (дней)
 *
 * 11, 12, 13, 14 take `many` despite ending in 1–4, which is why the
 * `i % 100` guards are not optional. An implementation that only tests the last
 * digit renders "11 день", and 11 is a perfectly ordinary streak length.
 */
function russian(count: number): PluralCategory {
  const { i, v } = operands(count);
  if (v !== 0) return 'other';
  const last = i % 10;
  const lastTwo = i % 100;
  if (last === 1 && lastTwo !== 11) return 'one';
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return 'few';
  return 'many';
}

const RULES = { en: english, ru: russian, es: spanish } as const;

/** The CLDR category `count` selects in `language`. */
export function pluralCategory(
  language: keyof typeof RULES,
  count: number,
): PluralCategory {
  return RULES[language](count);
}
