import { describe, expect, test } from 'bun:test';

import { COUNT_IN_FROM, COUNT_IN_MS, COUNT_IN_TICK_MS, countInAt } from './count-in';

describe('countInAt', () => {
  test('opens on the first number', () => {
    expect(countInAt(0)).toBe(COUNT_IN_FROM);
    expect(countInAt(1)).toBe(3);
  });

  test('holds each number for a whole tick', () => {
    expect(countInAt(COUNT_IN_TICK_MS - 1)).toBe(3);
    expect(countInAt(COUNT_IN_TICK_MS)).toBe(2);
    expect(countInAt(2 * COUNT_IN_TICK_MS - 1)).toBe(2);
    expect(countInAt(2 * COUNT_IN_TICK_MS)).toBe(1);
    expect(countInAt(COUNT_IN_MS - 1)).toBe(1);
  });

  test('reaches go at three seconds and stays there', () => {
    expect(countInAt(COUNT_IN_MS)).toBe(0);
    expect(countInAt(COUNT_IN_MS + 1)).toBe(0);
    // Back from the background long after the count ran out.
    expect(countInAt(10 * 60_000)).toBe(0);
  });

  test('never counts above the start', () => {
    // A `from` a moment in the future, or a clock that stepped backwards.
    expect(countInAt(-500)).toBe(COUNT_IN_FROM);
    expect(countInAt(Number.NaN)).toBe(COUNT_IN_FROM);
  });

  test('says every number once on the way down', () => {
    const seen: number[] = [];
    for (let ms = 0; ms <= COUNT_IN_MS + 200; ms += 100) {
      const n = countInAt(ms);
      if (seen[seen.length - 1] !== n) seen.push(n);
    }
    expect(seen).toEqual([3, 2, 1, 0]);
  });
});
