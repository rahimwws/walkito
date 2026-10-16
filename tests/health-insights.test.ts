import { describe, expect, test } from 'bun:test';

import { NO_SIGNALS, signalsFrom, todayHealthInputs, type DailyMetric } from '../src/entities/health/model/metrics';
import { dayStory, whyRows } from '../src/pages/home/model/day-story';
import { patternsFrom } from '../src/pages/progress/model/patterns';
import { shoeKm, shoeState } from '../src/pages/progress/model/shoes';

const BLANK: Omit<DailyMetric, 'date'> = {
  steps: null,
  asymmetryPct: null,
  walkingSpeed: null,
  sleepMin: null,
  wakeMin: null,
  restingHR: null,
  flights: null,
  hoursOnFeet: null,
  longestRunKm: null,
  lastRunEndAt: null,
};

/** `n` days ending on 2026-10-30, oldest first, each from `make(index)`. */
function run(n: number, make: (i: number) => Partial<DailyMetric>): DailyMetric[] {
  return Array.from({ length: n }, (_, i) => {
    const date = new Date(2026, 9, 30 - (n - 1 - i));
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return { ...BLANK, date: key, ...make(i) };
  });
}

describe('signals from the new types', () => {
  test('stand hours count as hours on foot when they are more', () => {
    const days = run(3, (i) => ({ hoursOnFeet: 4, standHours: i === 1 ? 11 : 3 }));
    expect(signalsFrom(days).hoursOnFeetYesterday).toBe(11);
  });

  test('a long session of sport yesterday is a big one', () => {
    const days = run(10, (i) => ({ sportMin: i === 8 ? 95 : null }));
    expect(signalsFrom(days).bigSportYesterday).toBe(true);
    const small = run(10, (i) => ({ sportMin: i === 8 ? 40 : null }));
    expect(signalsFrom(small).bigSportYesterday).toBe(false);
  });

  test('a week of shorter steps against the usual reads as shorter', () => {
    const days = run(28, (i) => ({ stepLengthCm: i < 21 ? 70 + (i % 3) : 60 }));
    const signals = signalsFrom(days);
    expect(signals.stepLengthTrend).toBe('shorter');
    expect(signals.stepLengthBaseline).not.toBeNull();
  });

  test('step length needs two weeks before it has a usual', () => {
    expect(signalsFrom(run(10, () => ({ stepLengthCm: 70 }))).stepLengthTrend).toBeNull();
  });

  test('today inputs carry the week of sleep, the limit and the workout', () => {
    const inputs = todayHealthInputs({ ...NO_SIGNALS, sleepShort: true, onFeetThreshold: 8, bigSportYesterday: true });
    expect(inputs.sleepShort).toBe(true);
    expect(inputs.onFeetThreshold).toBe(8);
    expect(inputs.bigWorkoutYesterday).toBe(true);
  });
});

describe('what Walkito says about yesterday', () => {
  const today = '2026-10-30';

  test('nothing from a cache that is not today', () => {
    expect(dayStory({ ...NO_SIGNALS, asOf: '2026-10-29', stepsYesterday: 9000 }, today)).toBeNull();
  });

  test('a big run outranks the step count', () => {
    const story = dayStory(
      { ...NO_SIGNALS, asOf: today, bigRunYesterday: true, longestRunYesterdayKm: 14, stepsYesterday: 20000, stepsBaseline: 8000 },
      today,
    );
    expect(story?.id).toBe('big-run');
  });

  test('past the personal limit on foot', () => {
    const story = dayStory({ ...NO_SIGNALS, asOf: today, hoursOnFeetYesterday: 9, onFeetThreshold: 8 }, today);
    expect(story).toEqual({ id: 'on-feet', hours: 9, limit: 8 });
  });

  test('step length back to usual only after it was shorter', () => {
    const signals = { ...NO_SIGNALS, asOf: today, stepLengthTrend: 'stable' as const };
    expect(dayStory(signals, today, true)?.id).toBe('stride-back');
    expect(dayStory(signals, today, false)).toBeNull();
  });

  test('an ordinary day is said plainly', () => {
    expect(dayStory({ ...NO_SIGNALS, asOf: today, stepsYesterday: 7000, stepsBaseline: 7500 }, today)?.id).toBe('yesterday');
  });

  test('the why sheet draws only what Health supplied', () => {
    const rows = whyRows({ ...NO_SIGNALS, stepsYesterday: 7000, stepsBaseline: 8000, sleepLastNightMin: 400 });
    expect(rows.map((r) => r.id)).toEqual(['steps', 'sleep']);
  });
});

describe('patterns', () => {
  const nextDate = (date: string) => {
    const [y, m, d] = date.split('-').map(Number);
    const next = new Date(y, m - 1, d + 1);
    return `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, '0')}-${String(next.getDate()).padStart(2, '0')}`;
  };

  test('short nights before sorer mornings, when both sides are big enough', () => {
    const days = run(20, (i) => ({ sleepMin: i % 2 === 0 ? 330 : 480 }));
    const pain = new Map(days.map((d, i) => [d.date, i % 2 === 0 ? 5 : 2]));
    const { found } = patternsFrom({ days, painOn: (d) => pain.get(d) ?? null, nextDate, onFeetThreshold: null });
    expect(found.find((p) => p.id === 'short-sleep')).toEqual({ id: 'short-sleep', gap: 3 });
  });

  test('no pattern from too few days', () => {
    const days = run(5, (i) => ({ sleepMin: i % 2 === 0 ? 330 : 480 }));
    const { found } = patternsFrom({ days, painOn: () => 4, nextDate, onFeetThreshold: null });
    expect(found).toEqual([]);
  });

  test('a gap under a point is not a pattern', () => {
    const days = run(20, (i) => ({ sleepMin: i % 2 === 0 ? 330 : 480 }));
    const pain = new Map(days.map((d, i) => [d.date, i % 2 === 0 ? 3.5 : 3]));
    const { found } = patternsFrom({ days, painOn: (d) => pain.get(d) ?? null, nextDate, onFeetThreshold: null });
    expect(found.some((p) => p.id === 'short-sleep')).toBe(false);
  });
});

describe('shoes', () => {
  test('kilometres since the pair was bought, older days filled at the average', () => {
    const days = run(10, () => ({ distanceKm: 5 }));
    expect(shoeKm(days, '2026-10-21', '2026-10-30')).toBe(50);
    // Ten days before the oldest on file, at 5 km a day.
    expect(shoeKm(days, '2026-10-11', '2026-10-30')).toBe(100);
  });

  test('no distance at all is no answer', () => {
    expect(shoeKm(run(5, () => ({})), '2026-10-01', '2026-10-30')).toBeNull();
  });

  test('states by kilometres', () => {
    expect(shoeState(200)).toBe('fresh');
    expect(shoeState(600)).toBe('soon');
    expect(shoeState(900)).toBe('due');
  });
});

import { onFeetCheckBlocked, onFeetStreak } from '../src/entities/notifications/model/on-feet-check';

describe('four hours on your feet', () => {
  const HOUR = 3_600_000;
  const day = new Date(2026, 9, 30, 0, 0, 0).getTime();
  /** Today's hours from midnight, with `steps` per hour. */
  const hours = (steps: (number | null)[], stood: number[] = []) =>
    steps.map((s, i) => ({ start: day + i * HOUR, steps: s, stood: stood.includes(i) }));
  const delivery = { sentByKind: {}, unopenedStreak: 0 } as never;

  test('a run of complete hours, the hour in progress counted once it is there', () => {
    const h = hours([0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 400, 300, 280, 50]);
    // 13:20, the hour in progress not yet at the mark: four complete hours.
    expect(onFeetStreak(h, day + 13 * HOUR + 20 * 60_000)).toBe(4);
    const later = hours([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 300, 280, 260]);
    expect(onFeetStreak(later, day + 13 * HOUR + 40 * 60_000)).toBe(4);
  });

  test('a quiet hour breaks the run', () => {
    const h = hours([0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 100, 300, 280, 0]);
    expect(onFeetStreak(h, day + 13 * HOUR + 30 * 60_000)).toBe(2);
  });

  test('watch stand hours count with few steps', () => {
    const h = hours([0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 30, 20, 10, 0], [9, 10, 11, 12]);
    expect(onFeetStreak(h, day + 13 * HOUR + 10 * 60_000)).toBe(4);
  });

  test('once a day, not early, not in quiet hours, not right after the step check-in', () => {
    const h = hours([0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 400, 300, 280, 50]);
    const now = day + 13 * HOUR + 20 * 60_000;
    const base = { hours: h, dateKey: '2026-10-30', minuteOfDay: 13 * 60 + 20, now, delivery, stepCheckAt: null };
    expect(onFeetCheckBlocked(base)).toBeNull();
    expect(onFeetCheckBlocked({ ...base, delivery: { sentByKind: { 'on-feet': ['2026-10-30'] }, unopenedStreak: 0 } as never })).toBe('already-sent');
    expect(onFeetCheckBlocked({ ...base, stepCheckAt: now - 30 * 60_000 })).toBe('just-asked');
    expect(onFeetCheckBlocked({ ...base, minuteOfDay: 22 * 60 })).toBe('quiet-hours');
  });
});
