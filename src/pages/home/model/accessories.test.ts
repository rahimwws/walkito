import { describe, expect, test } from 'bun:test';

import { ACCESSORIES, accessoriesFor, unseenAccessories } from './accessories';

describe('accessoriesFor', () => {
  test('nothing before a week', () => {
    expect(accessoriesFor(0)).toEqual([]);
    expect(accessoriesFor(6)).toEqual([]);
  });

  test('each one at its day, and kept after it', () => {
    expect(accessoriesFor(7)).toEqual(['shoe']);
    expect(accessoriesFor(13)).toEqual(['shoe']);
    expect(accessoriesFor(14)).toEqual(['shoe', 'medal']);
    expect(accessoriesFor(30)).toEqual(['shoe', 'medal', 'trophy']);
    expect(accessoriesFor(100)).toEqual(['shoe', 'medal', 'trophy', 'crown']);
    expect(accessoriesFor(365)).toEqual(['shoe', 'medal', 'trophy', 'crown']);
  });

  test('thresholds are in order', () => {
    const days = ACCESSORIES.map((a) => a.days);
    expect([...days].sort((a, b) => a - b)).toEqual(days);
  });
});

describe('unseenAccessories', () => {
  test('earned and not yet seen', () => {
    expect(unseenAccessories(['shoe', 'medal'], ['shoe'])).toEqual(['medal']);
    expect(unseenAccessories(['shoe'], ['shoe'])).toEqual([]);
    expect(unseenAccessories([], [])).toEqual([]);
  });
});
