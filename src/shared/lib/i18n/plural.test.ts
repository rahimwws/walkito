import { describe, expect, test } from 'bun:test';

import { pluralCategory } from './plural';

describe('english', () => {
  test('one only at exactly 1', () => {
    expect(pluralCategory('en', 1)).toBe('one');
    expect(pluralCategory('en', 0)).toBe('other');
    expect(pluralCategory('en', 2)).toBe('other');
    expect(pluralCategory('en', 21)).toBe('other');
  });

  // "1.0 days", not "1.0 day" — the fraction makes it plural even at one.
  test('a visible fraction is plural even at 1', () => {
    expect(pluralCategory('en', 1.0)).toBe('one'); // 1.0 === 1, no fraction survives
    expect(pluralCategory('en', 1.5)).toBe('other');
  });
});

describe('russian', () => {
  test('one: 1, 21, 31, 101', () => {
    for (const n of [1, 21, 31, 41, 101, 121]) {
      expect(pluralCategory('ru', n)).toBe('one');
    }
  });

  test('few: 2-4, 22-24', () => {
    for (const n of [2, 3, 4, 22, 23, 24, 32, 102, 103]) {
      expect(pluralCategory('ru', n)).toBe('few');
    }
  });

  test('many: 0, 5-10, 25-30', () => {
    for (const n of [0, 5, 6, 7, 8, 9, 10, 25, 26, 30, 100]) {
      expect(pluralCategory('ru', n)).toBe('many');
    }
  });

  /**
   * The rule this whole file exists for.
   *
   * 11–14 end in 1, 2, 3 and 4, so a last-digit-only implementation calls them
   * `one` and `few` and renders "11 день" / "12 дня". Both are wrong; all four
   * are `many`. An 11-day streak is not an edge case.
   */
  test('teens take many despite their last digit', () => {
    for (const n of [11, 12, 13, 14]) {
      expect(pluralCategory('ru', n)).toBe('many');
    }
    // And the same shape one hundred up, which is where an `i % 100 === 11`
    // written as `i === 11` stops working.
    for (const n of [111, 112, 113, 114]) {
      expect(pluralCategory('ru', n)).toBe('many');
    }
  });

  test('fractions fall through to other', () => {
    expect(pluralCategory('ru', 1.5)).toBe('other');
    expect(pluralCategory('ru', 2.5)).toBe('other');
  });
});

describe('spanish', () => {
  test('one at 1, other elsewhere', () => {
    expect(pluralCategory('es', 1)).toBe('one');
    expect(pluralCategory('es', 0)).toBe('other');
    expect(pluralCategory('es', 2)).toBe('other');
    expect(pluralCategory('es', 21)).toBe('other');
    expect(pluralCategory('es', 11)).toBe('other');
  });

  test('many only at whole millions', () => {
    expect(pluralCategory('es', 1_000_000)).toBe('many');
    expect(pluralCategory('es', 2_000_000)).toBe('many');
    expect(pluralCategory('es', 1_000_001)).toBe('other');
    // Zero is not a million.
    expect(pluralCategory('es', 0)).toBe('other');
  });
});

describe('negatives', () => {
  // No caller passes one today, but a count that goes negative through a bug
  // should agree with its magnitude rather than landing in a different form.
  test('agree with their magnitude', () => {
    expect(pluralCategory('ru', -1)).toBe('one');
    expect(pluralCategory('ru', -11)).toBe('many');
    expect(pluralCategory('en', -1)).toBe('one');
  });
});
