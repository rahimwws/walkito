import { describe, expect, test } from 'bun:test';

import {
  countReadings,
  heatSummary,
  painBars,
  painStart,
  painSummary,
  readingsToGo,
  shiftKey,
  sparkPoints,
  strengthTrends,
  tickIndices,
} from './progress-data';

describe('shiftKey', () => {
  test('crosses months and years', () => {
    expect(shiftKey('2026-03-01', -1)).toBe('2026-02-28');
    expect(shiftKey('2026-12-31', 1)).toBe('2027-01-01');
    expect(shiftKey('2026-10-08', 0)).toBe('2026-10-08');
  });
});

describe('painBars', () => {
  test('a week is seven daily bars, the newest reading picked out', () => {
    const bars = painBars([5, null, 4, 4, 3, 2, null], '2026-10-08', 'week');
    expect(bars).toHaveLength(7);
    expect(bars[0]).toEqual({ value: 5, from: '2026-10-02', to: '2026-10-02', latest: false });
    expect(bars[6].value).toBeNull();
    expect(bars.findIndex((b) => b.latest)).toBe(5);
  });

  test('three months is thirteen weekly means', () => {
    const series = Array.from({ length: 91 }, (_, i) => (i < 7 ? 6 : i >= 84 ? (i % 2 === 0 ? 2 : 3) : null));
    const bars = painBars(series, '2026-10-08', 'quarter');
    expect(bars).toHaveLength(13);
    expect(bars[0].value).toBe(6);
    expect(bars[0].from).toBe('2026-07-10');
    expect(bars[0].to).toBe('2026-07-16');
    expect(bars[5].value).toBeNull();
    expect(bars[12].to).toBe('2026-10-08');
    expect(bars[12].value).toBe(2.4);
    expect(bars[12].latest).toBe(true);
  });

  test('nothing logged means nothing is picked out', () => {
    expect(painBars(Array(30).fill(null), '2026-10-08', 'month').some((b) => b.latest)).toBe(false);
  });
});

describe('painSummary', () => {
  test('average and change against the span before', () => {
    expect(painSummary([6, 6, 6, 6, 6, 6, 6, 4, 4, 3, 3, null, null, null], 7)).toEqual({
      average: 3.5,
      previous: 6,
      delta: -2.5,
    });
  });
  test('no previous span, no delta', () => {
    expect(painSummary([null, null, 4, 3], 2)).toEqual({ average: 3.5, previous: null, delta: null });
  });
  test('nothing in the range', () => {
    expect(painSummary([5, null], 1).average).toBeNull();
  });
});

describe('the empty chart', () => {
  test('starts at three mornings', () => {
    expect(readingsToGo(0)).toBe(3);
    expect(readingsToGo(2)).toBe(1);
    expect(readingsToGo(9)).toBe(0);
    expect(countReadings([0, null, 3])).toBe(2);
  });
  test('the start line is the first week', () => {
    expect(painStart([7, null, 6, null, null, null, null])).toBe(6.5);
    expect(painStart([null, null])).toBeNull();
  });
});

describe('tickIndices', () => {
  test('every day of a week, counted back on longer spans', () => {
    expect(tickIndices(7, 'week')).toEqual([0, 1, 2, 3, 4, 5, 6]);
    expect(tickIndices(30, 'month')).toEqual([1, 8, 15, 22, 29]);
    expect(tickIndices(13, 'quarter')).toEqual([0, 4, 8, 12]);
  });
});

describe('strengthTrends', () => {
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

  test('every test on file, the change since the first', () => {
    const [calf, balance, arch] = strengthTrends([result(8, 9, 15), result(12, 14, 25), result(16, 20, 34)]);
    expect(calf).toEqual({ key: 'calf', values: [8, 12, 16], latest: 16, delta: 8 });
    expect(balance.delta).toBe(11);
    expect(arch.values).toEqual([15, 25, 34]);
  });
  test('one test is a baseline', () => {
    expect(strengthTrends([result(11, 8, 20)])[0]).toEqual({ key: 'calf', values: [11], latest: 11, delta: null });
  });
  test('no tests still gives three rows', () => {
    expect(strengthTrends([]).map((t) => t.latest)).toEqual([null, null, null]);
  });
});

describe('sparkPoints', () => {
  test('lowest at the bottom, highest at the top, inset', () => {
    const pts = sparkPoints([1, 3], 100, 20, 4);
    expect(pts[0]).toEqual({ x: 4, y: 16 });
    expect(pts[1]).toEqual({ x: 96, y: 4 });
  });
  test('a single test sits in the middle', () => {
    expect(sparkPoints([5], 100, 20)).toEqual([{ x: 50, y: 10 }]);
  });
});

describe('heatSummary', () => {
  test('counts only past days inside the plan', () => {
    expect(
      heatSummary([
        { attended: true, future: false, inPlan: true },
        { attended: false, future: false, inPlan: true },
        { attended: false, future: false, inPlan: false },
        { attended: false, future: true, inPlan: true },
      ]),
    ).toEqual({ done: 1, total: 2 });
  });
});
