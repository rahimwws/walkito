import { describe, expect, test } from 'bun:test';

import { LANGUAGES, translatorFor } from '@/shared/lib/i18n';

import { footCheckRows, type FootCheckFacts } from './foot-check-result';

const t = translatorFor('en');
const NONE: FootCheckFacts = { heel: null, ankle: null, arch: null, balance: null };

describe('her Foot Check before the price', () => {
  test('nothing done: no rows, so no card', () => {
    expect(footCheckRows(NONE, t)).toEqual([]);
  });

  test('"Not sure" is not a result', () => {
    expect(footCheckRows({ ...NONE, heel: 'unsure', arch: 'unsure' }, t)).toEqual([]);
  });

  test('the heel she saw, in the words the check used', () => {
    const rows = footCheckRows({ ...NONE, heel: 'left' }, t);
    expect(rows.map((row) => row.value)).toEqual([t('footCheck.heel.leftRow')]);
  });

  test('degrees replace the heel answer, with the difference between the sides', () => {
    const rows = footCheckRows({ ...NONE, heel: 'left', ankle: { left: 31.4, right: 37.6 } }, t);
    expect(rows).toHaveLength(1);
    expect(rows[0].value).toBe('Left 31°, right 38°');
    expect(rows[0].detail).toBe('Your left ankle bends 7° less than your right.');
    expect(footCheckRows({ ...NONE, ankle: { left: 35, right: 35 } }, t)[0].detail).toBe(t('footCheck.paywall.sameBend'));
  });

  test('the big toe and balance only when she has them', () => {
    const rows = footCheckRows({ ...NONE, arch: 'yes', balance: { left: 12, right: null } }, t);
    expect(rows.map((row) => row.key)).toEqual(['toe']);
    const both = footCheckRows({ ...NONE, arch: 'no', balance: { left: 12.2, right: 9 } }, t);
    expect(both.map((row) => row.key)).toEqual(['toe', 'balance']);
    expect(both[1].value).toBe('On one leg: left 12 s, right 9 s');
  });

  test('no row carries a date or a promise, in any language', () => {
    const facts: FootCheckFacts = { heel: 'right', ankle: { left: 40, right: 33 }, arch: 'yes', balance: { left: 10, right: 14 } };
    for (const language of LANGUAGES) {
      for (const row of footCheckRows(facts, translatorFor(language))) {
        const text = [row.value, row.detail ?? ''].join(' ');
        expect(text).not.toMatch(/\b20\d\d\b/);
        expect(text.length).toBeGreaterThan(0);
      }
    }
  });
});
