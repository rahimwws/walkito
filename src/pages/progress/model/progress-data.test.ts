import { describe, expect, test } from 'bun:test';

import { rollingMean, strengthRows } from './progress-data';

describe('rollingMean', () => {
  test('needs four readings in the seven days', () => {
    expect(rollingMean([3, null, 4, null, null])).toEqual([null, null, null, null, null]);
    const mean = rollingMean([4, 4, 2, 2]);
    expect(mean[3]).toBe(3);
  });
  test('only the last seven days count', () => {
    const series = [10, 0, 0, 0, 0, 0, 0, 0];
    expect(rollingMean(series)[7]).toBe(0);
  });
});

describe('strengthRows', () => {
  const result = (calf: number, balance: number, arch: number) => ({
    blockIndex: 0,
    dayNumber: 1,
    date: '2026-01-01',
    calf: { left: calf, right: calf + 2 },
    balance: { left: balance, right: balance },
    arch: { left: arch, right: arch },
    symmetryPct: 0,
    levels: { calf: 1, balance: 1, arch: 1, symmetry: 1 },
  });
  test('first against latest, weaker calf', () => {
    expect(strengthRows([result(11, 8, 20), result(18, 20, 35)])).toEqual([
      { key: 'calf', from: 11, to: 18 },
      { key: 'balance', from: 8, to: 20 },
      { key: 'arch', from: 20, to: 35 },
    ]);
  });
  test('one test has nothing to compare', () => {
    expect(strengthRows([result(11, 8, 20)])[0]).toEqual({ key: 'calf', from: 11, to: null });
  });
});
