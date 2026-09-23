/**
 * The parts of the Health pipeline that were wrong, pinned down.
 *
 * Each block here corresponds to a defect the old pipeline shipped with: sleep
 * from two sources counted twice, Whoop and Garmin nights dropped entirely, a
 * gap in the stored days shifting "yesterday" back by one, and signals frozen
 * at their first computation after midnight. The HealthKit reads themselves
 * need a device; everything they feed into does not.
 */

import { beforeEach, describe, expect, test } from 'bun:test';

import {
  contiguous,
  healthCache,
  mergeDays,
  recomputeSignals,
  resetHealthCache,
} from '@/entities/health/model/cache';
import { STEP_CHECK_MARK, type DailyMetric } from '@/entities/health/model/metrics';
import { dayKey, foldSleep, unionOf } from '@/entities/health/model/sleep';
import { EMPTY_DELIVERY, QUIET_FROM_MINUTES } from '@/entities/notifications/model/limits';
import {
  STEP_CHECK,
  STEP_CHECK_EARLIEST,
  stepCheckBlocked,
  type StepCheckInput,
} from '@/entities/notifications/model/steps-check';
import { kv } from '@/shared/lib/storage';

const BLANK: Omit<DailyMetric, 'date'> = {
  steps: null,
  asymmetryPct: null,
  walkingSpeed: null,
  sleepMin: null,
  wakeMin: null,
  restingHR: null,
  flights: null,
  longestRunKm: null,
  hoursOnFeet: null,
};

function day(date: string, fields: Partial<DailyMetric> = {}): DailyMetric {
  return { ...BLANK, date, ...fields };
}

/** Local time, so the day keys come out the same in every timezone. */
function at(y: number, m: number, d: number, h: number, min = 0): Date {
  return new Date(y, m - 1, d, h, min);
}

beforeEach(() => {
  kv.clearAll();
  resetHealthCache();
});

describe('sleep', () => {
  test('two sources recording the same night count once', () => {
    const watch = { value: 3, startDate: at(2026, 3, 1, 23), endDate: at(2026, 3, 2, 7) };
    const phone = { value: 1, startDate: at(2026, 3, 1, 23, 30), endDate: at(2026, 3, 2, 6, 30) };
    const { sleep } = foldSleep([watch, phone], '2026-03-02');
    expect(sleep.get('2026-03-02')).toBe(8 * 60);
  });

  test('"asleep, unspecified" counts — it is all Whoop and Garmin write', () => {
    const whoop = { value: 1, startDate: at(2026, 3, 1, 23), endDate: at(2026, 3, 2, 6) };
    expect(foldSleep([whoop], '2026-03-02').sleep.get('2026-03-02')).toBe(7 * 60);
  });

  test('in bed and awake are not sleep', () => {
    const inBed = { value: 0, startDate: at(2026, 3, 1, 22), endDate: at(2026, 3, 2, 8) };
    const awake = { value: 2, startDate: at(2026, 3, 2, 3), endDate: at(2026, 3, 2, 4) };
    expect(foldSleep([inBed, awake], '2026-03-02').sleep.size).toBe(0);
  });

  test('stages arriving in pieces add up to the night, not the last piece', () => {
    const stages = [
      { value: 3, startDate: at(2026, 3, 1, 23), endDate: at(2026, 3, 2, 1) },
      { value: 4, startDate: at(2026, 3, 2, 1), endDate: at(2026, 3, 2, 3) },
      { value: 2, startDate: at(2026, 3, 2, 3), endDate: at(2026, 3, 2, 3, 20) },
      { value: 5, startDate: at(2026, 3, 2, 3, 20), endDate: at(2026, 3, 2, 6, 20) },
    ];
    const { sleep, wake } = foldSleep(stages, '2026-03-02');
    expect(sleep.get('2026-03-02')).toBe(7 * 60);
    expect(wake.get('2026-03-02')).toBe(6 * 60 + 20);
  });

  test('an afternoon nap is sleep but not a wake time', () => {
    const night = { value: 3, startDate: at(2026, 3, 1, 23), endDate: at(2026, 3, 2, 7) };
    const nap = { value: 3, startDate: at(2026, 3, 2, 14), endDate: at(2026, 3, 2, 15) };
    const { sleep, wake } = foldSleep([night, nap], '2026-03-02');
    expect(sleep.get('2026-03-02')).toBe(9 * 60);
    expect(wake.get('2026-03-02')).toBe(7 * 60);
  });

  test('a night ending before the window is left out rather than half-counted', () => {
    const early = { value: 3, startDate: at(2026, 3, 1, 1), endDate: at(2026, 3, 1, 7) };
    expect(foldSleep([early], '2026-03-02').sleep.size).toBe(0);
  });

  test('unionOf merges overlaps and keeps gaps', () => {
    expect(
      unionOf([
        { start: 5, end: 10 },
        { start: 0, end: 6 },
        { start: 12, end: 14 },
      ]),
    ).toEqual([
      { start: 0, end: 10 },
      { start: 12, end: 14 },
    ]);
  });

  test('day keys are local days', () => {
    expect(dayKey(at(2026, 3, 2, 0, 5))).toBe('2026-03-02');
    expect(dayKey(at(2026, 3, 2, 23, 55))).toBe('2026-03-02');
  });
});

describe('the stored days', () => {
  test('a gap is filled so yesterday stays yesterday', () => {
    const out = contiguous(
      [day('2026-03-01', { steps: 5000 }), day('2026-03-03', { steps: 7000 })],
      '2026-03-04',
    );
    expect(out.map((d) => d.date)).toEqual([
      '2026-03-01',
      '2026-03-02',
      '2026-03-03',
      '2026-03-04',
    ]);
    expect(out[1].steps).toBeNull();
    expect(out[3].steps).toBeNull();
  });

  test('with no steps yet today, yesterday is the day before today', () => {
    mergeDays([day('2026-03-02', { steps: 9000 })]);
    const signals = recomputeSignals('2026-03-03');
    expect(signals.stepsYesterday).toBe(9000);
    expect(signals.stepsToday).toBeNull();
    expect(signals.asOf).toBe('2026-03-03');
  });

  test('a later read replaces the day rather than the last read winning a partial total', () => {
    mergeDays([day('2026-03-03', { steps: 4000, walkingSpeed: 1.3 })]);
    mergeDays([day('2026-03-03', { steps: 11000 })]);
    const stored = healthCache().days.find((d) => d.date === '2026-03-03');
    expect(stored?.steps).toBe(11000);
    // A field another query owns is left alone.
    expect(stored?.walkingSpeed).toBe(1.3);
  });

  test('signals follow the day as it goes, not the first read after midnight', () => {
    mergeDays([day('2026-03-03', { steps: 300 })]);
    expect(recomputeSignals('2026-03-03').stepsToday).toBe(300);
    mergeDays([day('2026-03-03', { steps: 10400 })]);
    expect(recomputeSignals('2026-03-03').stepsToday).toBe(10400);
  });

  test('"was elevated" rolls forward once a day, not on every recompute', () => {
    const history = Array.from({ length: 30 }, (_, i) =>
      day(dayKey(new Date(2026, 1, 1 + i)), {
        asymmetryPct: i >= 25 ? 12 : 2,
      }),
    );
    mergeDays(history);
    const last = history[history.length - 1].date;
    const first = recomputeSignals(last);
    expect(first.asymmetryElevatedDays).toBeGreaterThan(0);
    // Same day again: yesterday's answer is unchanged, so still "not was".
    recomputeSignals(last);
    expect(healthCache().wasElevated).toBe(false);
    // The next day inherits today's run.
    recomputeSignals(dayKey(new Date(2026, 1, 31)));
    expect(healthCache().wasElevated).toBe(true);
  });
});

describe('the step check-in', () => {
  const base: StepCheckInput = {
    stepsToday: STEP_CHECK_MARK + 400,
    mark: STEP_CHECK_MARK,
    dateKey: '2026-03-03',
    minuteOfDay: 15 * 60,
    now: at(2026, 3, 3, 15).getTime(),
    delivery: EMPTY_DELIVERY,
    lastCheckInAt: null,
  };

  test('past the mark in the afternoon, it goes', () => {
    expect(stepCheckBlocked(base)).toBeNull();
  });

  test('even when the morning nudge already went out today', () => {
    const morning = { ...EMPTY_DELIVERY, sentOn: ['2026-03-03'], sentByKind: { session: ['2026-03-03'] } };
    expect(stepCheckBlocked({ ...base, delivery: morning })).toBeNull();
  });

  test('under the mark, or unknown, it does not', () => {
    expect(stepCheckBlocked({ ...base, stepsToday: STEP_CHECK_MARK - 1 })).toBe('under-mark');
    expect(stepCheckBlocked({ ...base, stepsToday: null })).toBe('under-mark');
  });

  test('once a day', () => {
    const sent = { ...EMPTY_DELIVERY, sentByKind: { [STEP_CHECK]: ['2026-03-03'] } };
    expect(stepCheckBlocked({ ...base, delivery: sent })).toBe('already-sent');
  });

  test('not too early, never in quiet hours', () => {
    expect(stepCheckBlocked({ ...base, minuteOfDay: STEP_CHECK_EARLIEST - 1 })).toBe('too-early');
    expect(stepCheckBlocked({ ...base, minuteOfDay: QUIET_FROM_MINUTES })).toBe('quiet-hours');
  });

  test('not to someone who has stopped opening them', () => {
    expect(stepCheckBlocked({ ...base, delivery: { ...EMPTY_DELIVERY, unopenedStreak: 3 } })).toBe(
      'backed-off',
    );
  });

  test('not when the foot was checked in on an hour ago', () => {
    expect(stepCheckBlocked({ ...base, lastCheckInAt: base.now - 3_600_000 })).toBe('checked-in');
    // A morning check-in is not an answer to an afternoon's walking.
    expect(stepCheckBlocked({ ...base, lastCheckInAt: base.now - 6 * 3_600_000 })).toBeNull();
  });
});
