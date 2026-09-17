/**
 * What the Health integration has to survive.
 *
 * Everything here is pure. `signalsFrom` takes its whole world as an argument
 * and `briefState` takes its own, so none of these needs a device, a
 * permission, or a mock of HealthKit — which is exactly why the thresholds were
 * put in a file with no imports from the native module.
 *
 * The thresholds are the requirement. Several were deliberately raised after
 * the research: walking asymmetry now needs 7 percentage points across a 7-day
 * window rather than 3pp on 3 consecutive days, because the metric has no
 * published validity and its nearest cousin cannot resolve changes under about
 * 3.2pp at all. Tests that assert the *old*, looser behaviour would be tests
 * asserting a bug.
 */

import { describe, expect, test } from 'bun:test';

import {
  ELEVATED_PP,
  MIN_DAYS,
  NO_SIGNALS,
  baselineFor,
  onFeetThresholdFrom,
  signalsFrom,
  type DailyMetric,
} from '@/entities/health/model/metrics';
import { briefState } from '@/pages/home/model/brief-state';
import { quietTopic } from '@/pages/home/model/brief-state';

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

/** `n` days ending today, each built by the caller from its index. */
function days(n: number, build: (i: number) => Partial<DailyMetric>): DailyMetric[] {
  return Array.from({ length: n }, (_, i) => ({
    ...BLANK,
    // Sequential and unambiguous; the model only ever sorts on this.
    date: new Date(Date.UTC(2026, 0, 1 + i)).toISOString().slice(0, 10),
    ...build(i),
  }));
}

/** A settled history: 30 days of a 2% walk, 1.4 m/s and 8,000 steps. */
function steady(n = 30): DailyMetric[] {
  return days(n, () => ({ asymmetryPct: 2, walkingSpeed: 1.4, steps: 8000 }));
}

/** The last `k` days of an otherwise settled history, overridden. */
function ending(n: number, k: number, tail: Partial<DailyMetric>): DailyMetric[] {
  return days(n, (i) => ({
    asymmetryPct: 2,
    walkingSpeed: 1.4,
    steps: 8000,
    ...(i >= n - k ? tail : {}),
  }));
}

describe('availability', () => {
  test('a brief with no health data at all still resolves', () => {
    const state = briefState({
      name: 'Murat',
      cursor: 20,
      todayPain: 2,
      doneToday: false,
      streak: 3,
      daysInstalled: 20,
    });
    expect(state).not.toBe('gait-change');
    expect(typeof state).toBe('string');
  });

  // `none` and `denied` are the same observable state, by Apple's design — and
  // readiness now hangs on walking speed, not asymmetry, because speed is the
  // better-measured metric and the only one a bilateral user can have.
  test('no walking-speed samples reads as none', () => {
    expect(signalsFrom(days(20, () => ({ steps: 8000 }))).availability).toBe('none');
  });

  test('below the minimum sample days there is no baseline and no readiness', () => {
    const short = days(10, () => ({ walkingSpeed: 1.4 }));
    expect(baselineFor(short, 'walkingSpeed', MIN_DAYS.walkingSpeed)).toBeNull();
    expect(signalsFrom(short).availability).toBe('learning');
  });

  test('a full window is ready', () => {
    expect(signalsFrom(steady()).availability).toBe('ready');
  });

  // Partial grants are the normal case, not an edge one.
  test('steps only produces step signals and null gait signals', () => {
    const only = days(20, (i) => ({ steps: i === 19 ? 20000 : 8000 }));
    const s = signalsFrom(only);
    expect(s.stepsBaseline).not.toBeNull();
    expect(s.asymmetryBaseline).toBeNull();
    expect(s.walkingSpeedBaseline).toBeNull();
    expect(s.availability).toBe('none');
  });
});

describe('both heels', () => {
  // A symmetric problem cannot produce an asymmetric gait. Suppressed outright
  // rather than left to silently never fire.
  test('bilateral suppresses every asymmetry field', () => {
    const loud = ending(30, 7, { asymmetryPct: 12 });
    const one = signalsFrom(loud);
    const both = signalsFrom(loud, { bilateral: true });

    expect(one.asymmetryElevatedDays).toBeGreaterThan(0);
    expect(both.asymmetryElevatedDays).toBe(0);
    expect(both.asymmetryToday).toBeNull();
    expect(both.asymmetryBaseline).toBeNull();
    expect(both.asymmetryDeltaPP).toBeNull();
  });

  test('bilateral still gets walking speed, so the feature is not empty for them', () => {
    const slow = ending(30, 7, { walkingSpeed: 1.0 });
    const s = signalsFrom(slow, { bilateral: true });
    expect(s.walkingSpeedTrend).toBe('slower');
    expect(s.availability).toBe('ready');
  });

  test('a bilateral user never reaches the gait rung', () => {
    const loud = signalsFrom(ending(30, 7, { asymmetryPct: 12 }), { bilateral: true });
    const state = briefState({
      name: 'M',
      cursor: 20,
      todayPain: 1,
      doneToday: false,
      streak: 2,
      health: loud,
    });
    expect(state).not.toBe('gait-change');
  });
});

describe('thresholds', () => {
  // One walk carrying a bag on one shoulder must fire nothing.
  test('a single elevated day fires nothing', () => {
    const history = [...steady(29), { ...BLANK, date: '2026-01-30', asymmetryPct: 12 }];
    expect(signalsFrom(history).asymmetryElevatedDays).toBe(1);
  });

  // And the bar is now 7pp, not 3 — inside the old rule this would have fired.
  test('a 3.5pp jump is below the bar entirely', () => {
    const history = ending(30, 7, { asymmetryPct: 5.5 });
    expect(signalsFrom(history).asymmetryElevatedDays).toBe(0);
    expect(ELEVATED_PP).toBe(7);
  });

  test('seven loud days clear the window', () => {
    const s = signalsFrom(ending(30, 7, { asymmetryPct: 12 }));
    expect(s.asymmetryElevatedDays).toBeGreaterThanOrEqual(4);
    expect(s.asymmetryDeltaPP).toBeGreaterThanOrEqual(ELEVATED_PP);
  });

  test('settling back inside tolerance for two days reads as normalised', () => {
    const history = days(30, (i) => ({
      asymmetryPct: i >= 26 && i < 28 ? 12 : 2,
      walkingSpeed: 1.4,
    }));
    expect(signalsFrom(history, { wasElevated: true }).asymmetryJustNormalised).toBe(true);
  });

  test('normalised needs to have been elevated first', () => {
    expect(signalsFrom(steady()).asymmetryJustNormalised).toBe(false);
  });

  // Load is per-session now: one run longer than anything in four weeks.
  test('a run 20% past the four-week best is a big run', () => {
    const history = days(30, (i) => ({
      walkingSpeed: 1.4,
      longestRunKm: i === 28 ? 12 : i % 3 === 0 ? 8 : null,
    }));
    const s = signalsFrom(history);
    expect(s.runMax28Km).toBe(8);
    expect(s.bigRunYesterday).toBe(true);
  });

  test('a run matching the usual best is not', () => {
    const history = days(30, (i) => ({
      walkingSpeed: 1.4,
      longestRunKm: i === 28 ? 8 : i % 3 === 0 ? 8 : null,
    }));
    expect(signalsFrom(history).bigRunYesterday).toBe(false);
  });

  // Sleep is chronic, at seven hours, not one night under six.
  test('a week averaging under seven hours is short', () => {
    expect(signalsFrom(ending(30, 7, { sleepMin: 380 })).sleepShort).toBe(true);
  });

  test('one bad night inside a good week is not', () => {
    const history = days(30, (i) => ({ walkingSpeed: 1.4, sleepMin: i === 29 ? 300 : 460 }));
    expect(signalsFrom(history).sleepShort).toBe(false);
  });

  test('stairs spike is measured against the four-week mean', () => {
    const history = days(30, (i) => ({ walkingSpeed: 1.4, flights: i === 28 ? 30 : 8 }));
    const s = signalsFrom(history);
    expect(s.flightsRatio).toBeGreaterThan(1.5);
  });
});

describe('the ladder', () => {
  const base = { name: 'Murat', cursor: 20, doneToday: false, streak: 3, daysInstalled: 20 };

  const loudGait = {
    ...NO_SIGNALS,
    asymmetryElevatedDays: 5,
    asymmetryDeltaPP: 9,
    asymmetryToday: 11,
    asymmetryBaseline: 2,
    availability: 'ready' as const,
  };

  // The person always outranks the sensor.
  test('pain 8 outranks every health signal', () => {
    expect(briefState({ ...base, todayPain: 8, health: loudGait })).toBe('flare');
  });

  test('a two-point jump on the week is a spike, and beats the sensors', () => {
    const state = briefState({ ...base, todayPain: 6, health: loudGait });
    expect(state === 'pain-spike' || state === 'flare').toBe(true);
  });

  test('a big run outranks gait, because it is what actually happened', () => {
    const both = { ...loudGait, bigRunYesterday: true };
    expect(briefState({ ...base, todayPain: 1, health: both })).toBe('big-run');
  });

  test('walking speed outranks asymmetry', () => {
    const both = { ...loudGait, walkingSpeedTrend: 'slower' as const };
    expect(briefState({ ...base, todayPain: 1, health: both })).toBe('slower-walk');
  });

  test('a quiet morning with only asymmetry still reaches the gait rung', () => {
    expect(briefState({ ...base, todayPain: 1, health: loudGait })).toBe('gait-change');
  });

  test('a short week of sleep leans the day lighter', () => {
    const short = { ...NO_SIGNALS, sleepShort: true, sleepMeanMin: 380 };
    expect(briefState({ ...base, todayPain: 1, health: short })).toBe('poor-sleep');
  });

  test('the predictive on-feet line fires before the day has gone wrong', () => {
    const state = briefState({ ...base, todayPain: 1, hoursOnFeet: 6, onFeetThreshold: 7 });
    expect(state).toBe('on-feet');
  });

  test('four days away is a return, not an ordinary morning', () => {
    expect(briefState({ ...base, todayPain: 1, daysAway: 5 })).toBe('returning');
  });

  test('no data is not admitted to before the first week is out', () => {
    const blind = { ...NO_SIGNALS, availability: 'none' as const };
    expect(
      briefState({ ...base, cursor: 3, daysInstalled: 3, todayPain: 1, health: blind }),
    ).not.toBe('no-data');
  });

  test('after a week with nothing, it says so', () => {
    const blind = { ...NO_SIGNALS, availability: 'none' as const };
    expect(briefState({ ...base, todayPain: 1, health: blind })).toBe('no-data');
  });

  test('a user with data and nothing to report lands on the rotation', () => {
    const fine = { ...NO_SIGNALS, availability: 'ready' as const, walkingSpeedTrend: 'stable' as const };
    expect(briefState({ ...base, todayPain: 1, health: fine })).toBe('quiet');
  });
});

describe('variety', () => {
  // The founder's complaint, as an assertion: a user with no signals at all
  // must not see the same sentence every day.
  test('the quiet rotation covers six topics across a week', () => {
    const seen = new Set(Array.from({ length: 7 }, (_, i) => quietTopic(20 + i)));
    expect(seen.size).toBe(6);
  });

  test('the rotation is stable within a day', () => {
    expect(quietTopic(20)).toBe(quietTopic(20));
  });
});

describe('time on feet', () => {
  /** Twenty days: the long ones are followed by sore mornings, the short ones
   * are not. A threshold exists here and should be found. */
  const history = days(20, (i) => ({ walkingSpeed: 1.4, hoursOnFeet: i % 2 === 0 ? 9 : 5 }));
  const painAfter = (i: number) => (history[i]!.hoursOnFeet! >= 9 ? 5 : 2);

  test('finds the hour past which this person’s next mornings got worse', () => {
    const limit = onFeetThresholdFrom(history, painAfter);
    expect(limit).not.toBeNull();
    expect(limit!).toBeGreaterThan(5);
    expect(limit!).toBeLessThanOrEqual(9);
  });

  test('returns nothing when the next morning does not care', () => {
    expect(onFeetThresholdFrom(history, () => 3)).toBeNull();
  });

  // A made-up limit is worse than none: the line built on it fires every day.
  test('returns nothing without enough days on both sides', () => {
    const thin = days(6, () => ({ hoursOnFeet: 9 }));
    expect(onFeetThresholdFrom(thin, () => 6)).toBeNull();
  });

  test('signals expose it only when a pain history is supplied', () => {
    expect(signalsFrom(history).onFeetThreshold).toBeNull();
    expect(signalsFrom(history, { painNextMorning: painAfter }).onFeetThreshold).not.toBeNull();
  });
});

describe('runs', () => {
  test('the longest run of the day is what counts, not the daily total', () => {
    const history = days(30, (i) => ({
      walkingSpeed: 1.4,
      longestRunKm: i === 28 ? 15 : i % 4 === 0 ? 10 : null,
    }));
    const s = signalsFrom(history);
    expect(s.longestRunYesterdayKm).toBe(15);
    expect(s.runMax28Km).toBe(10);
    expect(s.bigRunYesterday).toBe(true);
  });
});
