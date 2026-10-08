import type { RetestResult } from '@/entities/program';

/**
 * The numbers the Progress screen draws, worked out from what is on file.
 *
 * Pure, and free of anything that pulls in React Native, so the rules — how a
 * month becomes bars, what a delta compares, when the chart is allowed to start
 * — run under `bun test` without a screen.
 */

// ── Ranges ───────────────────────────────────────────────────────────────────

export type RangeKey = 'week' | 'month' | 'quarter';

/**
 * The three spans the segmented control offers, and how each is drawn.
 *
 * A week is seven daily bars and a month thirty slim ones, the way Apple
 * Health draws them. Ninety-odd daily bars would be hairlines, so three months
 * is thirteen weekly bars instead, each the mean of the mornings in it — 91
 * days so the weeks come out whole.
 */
export const RANGES: Readonly<Record<RangeKey, { days: number; bucket: number }>> = {
  week: { days: 7, bucket: 1 },
  month: { days: 30, bucket: 1 },
  quarter: { days: 91, bucket: 7 },
};

export const RANGE_ORDER: readonly RangeKey[] = ['week', 'month', 'quarter'];

// ── Dates ────────────────────────────────────────────────────────────────────

/** `YYYY-MM-DD` moved by whole days, in local time like every key in the app. */
export function shiftKey(key: string, days: number): string {
  const [y, m, d] = key.split('-').map(Number);
  const date = new Date(y, m - 1, d + days);
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${mm}-${dd}`;
}

// ── Morning pain ─────────────────────────────────────────────────────────────

/** Mornings on file before the chart is drawn. Fewer than this is not a chart,
 * it is two dots, and the card says how many more it needs instead. */
export const CHART_MIN_READINGS = 3;

export type PainBar = {
  /** The morning's reading, or the mean of a week's. Null for an empty slot,
   * which is still drawn as a faint track. */
  value: number | null;
  /** First and last date the bar covers; the same key for a daily bar. */
  from: string;
  to: string;
  /** The most recent bar with a reading — the one the accent picks out. */
  latest: boolean;
};

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

function mean(values: readonly (number | null)[]): number | null {
  const logged = values.filter((v): v is number => v != null);
  return logged.length === 0 ? null : logged.reduce((sum, v) => sum + v, 0) / logged.length;
}

/** How many mornings in a series carry a reading. */
export function countReadings(series: readonly (number | null)[]): number {
  return series.reduce<number>((n, v) => (v == null ? n : n + 1), 0);
}

/**
 * The bars for one range. `series` is one value per day, oldest first, ending
 * on `endDate`, and exactly `RANGES[range].days` long.
 */
export function painBars(series: readonly (number | null)[], endDate: string, range: RangeKey): PainBar[] {
  const { days, bucket } = RANGES[range];
  const window = series.slice(-days);
  const first = shiftKey(endDate, -(days - 1));
  const bars: PainBar[] = [];
  for (let start = 0; start < window.length; start += bucket) {
    const slice = window.slice(start, start + bucket);
    const value = mean(slice);
    bars.push({
      value: value == null ? null : bucket === 1 ? value : round1(value),
      from: shiftKey(first, start),
      to: shiftKey(first, start + slice.length - 1),
      latest: false,
    });
  }
  for (let i = bars.length - 1; i >= 0; i -= 1) {
    if (bars[i].value != null) {
      bars[i].latest = true;
      break;
    }
  }
  return bars;
}

export type PainSummary = {
  /** Mean of the mornings in the range, one decimal. */
  average: number | null;
  /** The same for the span of equal length before it. */
  previous: number | null;
  /** `average - previous`, one decimal. Negative is better. */
  delta: number | null;
};

/**
 * The headline figure and its change. `series` covers two ranges back to back,
 * oldest first: the one before, then the one shown.
 */
export function painSummary(series: readonly (number | null)[], days: number): PainSummary {
  const current = mean(series.slice(-days));
  const before = series.length > days ? mean(series.slice(-2 * days, -days)) : null;
  const average = current == null ? null : round1(current);
  const previous = before == null ? null : round1(before);
  return {
    average,
    previous,
    delta: average == null || previous == null ? null : round1(average - previous),
  };
}

/**
 * Where the dashed "start" line sits: the mean of the plan's first week, or
 * null before any morning in it was logged. The same baseline the morning-pain
 * goal is measured from, so the line and the goal never disagree.
 */
export function painStart(firstWeek: readonly (number | null)[]): number | null {
  const value = mean(firstWeek);
  return value == null ? null : round1(value);
}

/** Mornings still to log before the chart starts. 0 once it has. */
export function readingsToGo(total: number): number {
  return Math.max(0, CHART_MIN_READINGS - total);
}

/**
 * Which bars carry a label underneath. Every day of a week; on the longer
 * spans every seventh day or fourth week, counted back from the newest so the
 * label nearest "now" is always there.
 */
export function tickIndices(count: number, range: RangeKey): number[] {
  const every = range === 'week' ? 1 : range === 'month' ? 7 : 4;
  const out: number[] = [];
  for (let i = count - 1; i >= 0; i -= every) out.unshift(i);
  return out;
}

// ── Tests ────────────────────────────────────────────────────────────────────

export type StrengthKey = 'calf' | 'balance' | 'arch';

export type StrengthTrend = {
  key: StrengthKey;
  /** Every result on file, oldest first. */
  values: number[];
  latest: number | null;
  /** Latest against the first test. Null with fewer than two tests. */
  delta: number | null;
};

export const STRENGTH_ORDER: readonly StrengthKey[] = ['calf', 'balance', 'arch'];

/**
 * One trend per test, always all three so the card keeps its shape before the
 * first test.
 *
 * The weaker calf, as the goal reads it; the rehabilitated side for the holds
 * (the left column is that side throughout — see `resultOf`).
 */
export function strengthTrends(results: readonly RetestResult[]): StrengthTrend[] {
  const pick: Record<StrengthKey, (r: RetestResult) => number> = {
    calf: (r) => Math.min(r.calf.left, r.calf.right),
    balance: (r) => r.balance.left,
    arch: (r) => r.arch.left,
  };
  return STRENGTH_ORDER.map((key) => {
    const values = results.map(pick[key]);
    const latest = values.length > 0 ? values[values.length - 1] : null;
    return {
      key,
      values,
      latest,
      delta: values.length > 1 && latest != null ? round1(latest - values[0]) : null,
    };
  });
}

/**
 * The sparkline's points in a `width` × `height` box, inset by `pad` so the
 * end dot is never clipped. A flat series sits on the middle line.
 */
export function sparkPoints(
  values: readonly number[],
  width: number,
  height: number,
  pad = 4,
): { x: number; y: number }[] {
  if (values.length === 0) return [];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const spanX = width - pad * 2;
  const spanY = height - pad * 2;
  return values.map((v, i) => ({
    x: values.length === 1 ? width / 2 : pad + (i / (values.length - 1)) * spanX,
    y: max === min ? height / 2 : pad + (1 - (v - min) / (max - min)) * spanY,
  }));
}

// ── Consistency ──────────────────────────────────────────────────────────────

export type HeatCell = { attended: boolean; future: boolean; inPlan: boolean };

/** Days shown up on, out of the days that could have been — past days inside
 * the plan, today included. */
export function heatSummary(cells: readonly HeatCell[]): { done: number; total: number } {
  const counted = cells.filter((c) => c.inPlan && !c.future);
  return { done: counted.filter((c) => c.attended).length, total: counted.length };
}
