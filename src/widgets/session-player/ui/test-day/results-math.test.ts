import { describe, expect, test } from 'bun:test';

import { TRACK_HEADROOM, daysBetween, signed, trackAt, trackScale, verdictOf } from './results-math';

describe('trackScale', () => {
  test('puts the largest mark at the headroom line', () => {
    const scale = trackScale(18, 14, 25);
    expect(trackAt(25, scale)).toBeCloseTo(TRACK_HEADROOM);
    expect(trackAt(18, scale)).toBeLessThan(trackAt(25, scale));
  });

  test('a value past its goal still fits', () => {
    const scale = trackScale(40, null, 25);
    expect(trackAt(40, scale)).toBeCloseTo(TRACK_HEADROOM);
    expect(trackAt(25, scale)).toBeLessThan(TRACK_HEADROOM);
  });

  test('zero everywhere draws nothing rather than NaN', () => {
    expect(trackAt(0, trackScale(0, 0, 0))).toBe(0);
  });
});

describe('verdictOf', () => {
  test('a first test has nothing to compare', () => {
    expect(verdictOf([{ type: 'calf_raises', change: null }, { type: 'balance', change: null }])).toEqual({
      kind: 'first',
    });
  });

  test('names the one test that went up', () => {
    expect(
      verdictOf([
        { type: 'calf_raises', change: 3 },
        { type: 'arch_hold', change: -2 },
        { type: 'balance', change: 0 },
        { type: 'symmetry', change: 5 },
      ]),
    ).toEqual({ kind: 'one', type: 'calf_raises' });
  });

  test('never names a dip', () => {
    expect(
      verdictOf([
        { type: 'calf_raises', change: -1 },
        { type: 'arch_hold', change: 0 },
        { type: 'balance', change: -4 },
      ]),
    ).toEqual({ kind: 'steady' });
  });

  test('two and all three', () => {
    expect(
      verdictOf([
        { type: 'calf_raises', change: 1 },
        { type: 'arch_hold', change: 2 },
        { type: 'balance', change: 0 },
      ]).kind,
    ).toBe('two');
    expect(
      verdictOf([
        { type: 'calf_raises', change: 1 },
        { type: 'arch_hold', change: 2 },
        { type: 'balance', change: 3 },
      ]).kind,
    ).toBe('all');
  });
});

test('daysBetween counts whole days, at least one', () => {
  expect(daysBetween('2026-09-24', '2026-10-08')).toBe(14);
  expect(daysBetween('2026-03-28', '2026-03-30')).toBe(2);
  expect(daysBetween('2026-10-08', '2026-10-08')).toBe(1);
});

test('signed uses a true minus sign', () => {
  expect(signed(4)).toBe('+4');
  expect(signed(-2)).toBe('−2');
  expect(signed(0)).toBe('0');
});
