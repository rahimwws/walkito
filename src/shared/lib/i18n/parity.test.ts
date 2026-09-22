import { describe, expect, test } from 'bun:test';

import { CATALOGUES } from './catalogue';
import { en } from './catalogue/en';
import { LANGUAGES, type Language } from './languages';
import { CATEGORIES_BY_LANGUAGE } from './plural';
import { translatorFor } from './translate';

/**
 * The checks the type system is deliberately not asked to make.
 *
 * `CatalogueFor<L>` already guarantees key completeness and plural-ness, and
 * those are compile errors. Placeholder parity is the one property left, and
 * expressing it in types means a recursive template-literal comparison across
 * every entry of every catalogue at once — a real cost to `tsc` for a weaker
 * error message than the failure below produces.
 *
 * What makes this safe to do at test time rather than build time is that it is
 * exhaustive: it walks every key of every language, so there is no sampling and
 * nothing to keep in sync by hand.
 */

const PLACEHOLDER = /\{(\w+)\}/g;

function placeholdersIn(template: string): Set<string> {
  return new Set(Array.from(template.matchAll(PLACEHOLDER), (match) => match[1]));
}

/** Every string a catalogue entry can render, flattened with a label saying
 * where it came from so a failure names the exact form. */
function formsOf(entry: unknown, key: string): { label: string; text: string }[] {
  if (typeof entry === 'string') return [{ label: key, text: entry }];
  return Object.entries(entry as Record<string, string>).map(([category, text]) => ({
    label: `${key}.${category}`,
    text,
  }));
}

describe('placeholder parity', () => {
  /**
   * The failure this catches: a translator writes "{count} дней" as "дней" and
   * the number silently disappears from the streak sheet. Or writes `{days}`
   * where English has `{count}`, and the placeholder renders as literal text.
   *
   * Compared against English rather than pairwise, because English is the
   * source every other catalogue is typed from.
   */
  for (const language of LANGUAGES.filter((l) => l !== 'en')) {
    test(`${language} uses the same placeholders as English`, () => {
      const catalogue = CATALOGUES[language] as Record<string, unknown>;

      for (const key of Object.keys(en)) {
        const expected = new Set<string>();
        for (const form of formsOf((en as Record<string, unknown>)[key], key)) {
          for (const name of placeholdersIn(form.text)) expected.add(name);
        }

        for (const form of formsOf(catalogue[key], key)) {
          const actual = placeholdersIn(form.text);

          for (const name of actual) {
            expect(
              expected.has(name),
              `${language} ${form.label} uses {${name}}, which English does not have`,
            ).toBe(true);
          }

          for (const name of expected) {
            expect(
              actual.has(name),
              `${language} ${form.label} is missing {${name}} — it would render without it`,
            ).toBe(true);
          }
        }
      }
    });
  }
});

describe('catalogue completeness', () => {
  /** Belt to the type system's braces. If a catalogue is ever cast or widened
   * in a way that lets a key through, this says so. */
  for (const language of LANGUAGES) {
    test(`${language} has every key and no extras`, () => {
      const keys = Object.keys(CATALOGUES[language] as Record<string, unknown>).sort();
      expect(keys).toEqual(Object.keys(en).sort());
    });
  }

  /** A plural entry must be plural in every language. Flattening one to a
   * single string is the shortcut that renders "5 день". */
  for (const language of LANGUAGES) {
    test(`${language} keeps every plural entry plural`, () => {
      const catalogue = CATALOGUES[language] as Record<string, unknown>;
      for (const [key, source] of Object.entries(en)) {
        if (typeof source === 'string') continue;
        expect(typeof catalogue[key], `${language} ${key} was flattened to a string`).toBe(
          'object',
        );
      }
    });
  }

  /** Required categories present. Russian's `few` is the one that matters —
   * see `plural.test.ts` for why 2, 3 and 4 are their own form. */
  for (const language of LANGUAGES) {
    test(`${language} supplies every required plural form`, () => {
      const catalogue = CATALOGUES[language] as Record<string, unknown>;
      const required = CATEGORIES_BY_LANGUAGE[language].filter(
        (category) =>
          // The optional members: Russian fractions and Spanish millions,
          // neither of which any count in this app can select.
          !(language === 'ru' && category === 'other') &&
          !(language === 'es' && category === 'many'),
      );

      for (const [key, source] of Object.entries(en)) {
        if (typeof source === 'string') continue;
        const forms = catalogue[key] as Record<string, string>;
        for (const category of required) {
          expect(typeof forms[category], `${language} ${key} has no '${category}' form`).toBe(
            'string',
          );
        }
      }
    });
  }
});

describe('no empty strings', () => {
  /** An empty translation is worse than an untranslated one: it renders as a
   * blank label with the layout still reserving space for it. */
  for (const language of LANGUAGES) {
    test(`${language} has no blank entries`, () => {
      const catalogue = CATALOGUES[language] as Record<string, unknown>;
      for (const key of Object.keys(en)) {
        for (const form of formsOf(catalogue[key], key)) {
          expect(form.text.trim().length, `${language} ${form.label} is empty`).toBeGreaterThan(0);
        }
      }
    });
  }
});

describe('translator', () => {
  test('fills placeholders', () => {
    const t = translatorFor('en');
    expect(t('language.systemHint', { language: 'Русский' })).toBe('Match device — Русский');
  });

  test('selects the English plural form', () => {
    const t = translatorFor('en');
    expect(t('streak.dayCount', { count: 1 })).toBe('1 day');
    expect(t('streak.dayCount', { count: 5 })).toBe('5 days');
  });

  /**
   * The whole reason for the project, in one assertion.
   *
   * Three counts, three different Russian words, and 11 taking the same form
   * as 5 rather than the form its last digit suggests.
   */
  test('selects the Russian plural form, teens included', () => {
    const t = translatorFor('ru');
    expect(t('streak.dayCount', { count: 1 })).toBe('1 день');
    expect(t('streak.dayCount', { count: 3 })).toBe('3 дня');
    expect(t('streak.dayCount', { count: 5 })).toBe('5 дней');
    expect(t('streak.dayCount', { count: 11 })).toBe('11 дней');
    expect(t('streak.dayCount', { count: 21 })).toBe('21 день');
    expect(t('streak.dayCount', { count: 22 })).toBe('22 дня');
  });

  test('selects the Spanish plural form', () => {
    const t = translatorFor('es');
    expect(t('streak.dayCount', { count: 1 })).toBe('1 día');
    expect(t('streak.dayCount', { count: 11 })).toBe('11 días');
  });

  /**
   * Word order actually moves. English leads with the count and ends with the
   * noun; Russian puts "подряд" after both; Spanish needs "de" in between.
   * None of the three is reachable by substituting into the others, which is
   * what fragment-based composition would have required.
   */
  test('whole templates let word order differ per language', () => {
    expect(translatorFor('en')('streak.title', { count: 3 })).toBe('3 Days Streak');
    expect(translatorFor('ru')('streak.title', { count: 3 })).toBe('3 дня подряд');
    expect(translatorFor('es')('streak.title', { count: 3 })).toBe('Racha de 3 días');
  });

  test('leaves an unknown placeholder visible rather than blanking it', () => {
    const t = translatorFor('en');
    // Cast past the parameter types on purpose — this is the runtime guard for
    // a call site that got past review with the wrong bag.
    const wrong = t as (key: 'language.systemHint', params: Record<string, string>) => string;
    expect(wrong('language.systemHint', {})).toBe('Match device — {language}');
  });
});
