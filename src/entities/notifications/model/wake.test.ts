import { beforeEach, describe, expect, test } from 'bun:test';

import { MIN_DAYS, signalsFrom, type DailyMetric } from '@/entities/health/model/metrics';
import { kv } from '@/shared/lib/storage';

import { DEFAULT_WAKE_MINUTES, observeWake, resetWakeMinutes, setWakeMinutes, wakeMinutes } from './wake';

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

/** `n` days of nights that ended at the given minutes past midnight. */
function nights(wakes: readonly (number | null)[]): DailyMetric[] {
  return wakes.map((wakeMin, i) => {
    const d = new Date(2026, 2, 1 + i);
    const m = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate()}`.padStart(2, '0');
    return { ...BLANK, date: `${d.getFullYear()}-${m}-${day}`, wakeMin };
  });
}

beforeEach(() => {
  resetWakeMinutes();
});

describe('the observed wake time', () => {
  test('is null until there are enough nights to be a habit', () => {
    const few = signalsFrom(nights(Array(MIN_DAYS.wakeMin - 1).fill(7 * 60)));
    expect(few.wakeMinutes).toBeNull();
  });

  test('appears once the run is long enough', () => {
    const enough = signalsFrom(nights(Array(MIN_DAYS.wakeMin).fill(7 * 60)));
    expect(enough.wakeMinutes).toBe(7 * 60);
  });

  /**
   * The reason this is a median and not the mean the spec's wording suggests.
   * One airport start would drag a mean by twenty minutes and move every
   * morning notification for a month.
   */
  test('one very early start does not move it', () => {
    const usual = Array(MIN_DAYS.wakeMin).fill(7 * 60);
    const withFlight = [...usual.slice(0, -1), 4 * 60];
    const steady = signalsFrom(nights(usual)).wakeMinutes;
    const disturbed = signalsFrom(nights(withFlight)).wakeMinutes;
    expect(disturbed).toBe(steady);
  });

  test('a genuine shift in habit does move it', () => {
    const early = signalsFrom(nights(Array(28).fill(6 * 60))).wakeMinutes;
    const late = signalsFrom(nights(Array(28).fill(9 * 60))).wakeMinutes;
    expect(early).toBe(6 * 60);
    expect(late).toBe(9 * 60);
  });

  test('nights with no reading are skipped rather than counted as zero', () => {
    const patchy = [...Array(MIN_DAYS.wakeMin).fill(7 * 60), null, null];
    expect(signalsFrom(nights(patchy)).wakeMinutes).toBe(7 * 60);
  });
});

describe('what the scheduler actually uses', () => {
  test('falls back to half past seven with nothing to go on', () => {
    expect(wakeMinutes()).toBe(DEFAULT_WAKE_MINUTES);
  });

  test('an explicit answer wins outright', () => {
    setWakeMinutes(6 * 60 + 15);
    expect(wakeMinutes()).toBe(6 * 60 + 15);
  });

  /** A 3am nudge loses the permission permanently, and no confidence in a
   * median is worth that. */
  test('clamps anything absurd, from any source', () => {
    setWakeMinutes(3 * 60);
    expect(wakeMinutes()).toBe(5 * 60);
    resetWakeMinutes();
    setWakeMinutes(14 * 60);
    expect(wakeMinutes()).toBe(11 * 60);
  });

  test('takes up a median handed over by the health pipeline', () => {
    observeWake(6 * 60 + 50);
    expect(wakeMinutes()).toBe(6 * 60 + 50);
  });

  /** A quiet week must not move the alarm. The reading is taken up weekly at
   * most, however often the median underneath it changes. */
  test('a fresh median does not move the alarm mid-week', () => {
    observeWake(6 * 60 + 50);
    const first = wakeMinutes(new Date(2026, 2, 10).getTime());
    observeWake(9 * 60);
    expect(wakeMinutes(new Date(2026, 2, 12).getTime())).toBe(first);
  });

  test('and is taken up once the week is out', () => {
    observeWake(6 * 60 + 50);
    wakeMinutes(new Date(2026, 2, 10).getTime());
    observeWake(9 * 60);
    expect(wakeMinutes(new Date(2026, 2, 20).getTime())).toBe(9 * 60);
  });

  test('a cached observation is reused inside the week', () => {
    kv.set('notify/wake-observed', 6 * 60 + 40);
    kv.set('notify/wake-observed-on', '2026-03-10');
    // Three days later: still fresh, still the same answer.
    expect(wakeMinutes(new Date(2026, 2, 13).getTime())).toBe(6 * 60 + 40);
  });

  /**
   * A quiet week must not snap the alarm back to the default. The observation
   * is held until a new one replaces it.
   */
  test('a stale cache is kept when there is nothing to replace it with', () => {
    kv.set('notify/wake-observed', 6 * 60 + 40);
    kv.set('notify/wake-observed-on', '2026-01-01');
    expect(wakeMinutes(new Date(2026, 2, 13).getTime())).toBe(6 * 60 + 40);
  });
});
