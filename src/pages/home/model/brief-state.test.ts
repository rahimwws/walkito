/**
 * The state ladder, without a word of copy in sight.
 *
 * `tests/health-signals.test.ts` already covers the ordering — that a pain
 * report outranks every sensor, and that the cheerful rungs are gated rather
 * than merely ordered. What is asserted here is what the split between this
 * file and `brief.ts` is *for*: the quiet rotation is a set of states rather
 * than one state the copy re-dispatches on, and the two figures the sentences
 * quote are computed where the windows they come from are defined.
 */

import { beforeEach, describe, expect, test } from 'bun:test';

import { NO_SIGNALS, type HealthSignals } from '@/entities/health/model/metrics';
import { kv } from '@/shared/lib/storage';

import {
  BRIEF_STATES,
  PAIN_MID,
  bigStepDay,
  briefState,
  meanPain,
  quietTopic,
  readBrief,
  type BriefInput,
} from './brief-state';

/**
 * Every test file in the suite shares one in-memory store, so a file that logs
 * pain moves the week mean this one reads.
 *
 * These tests passed alone and failed in the full run for exactly that reason:
 * the jump came back as 4 rather than 6, because another fixture had left a
 * two-point baseline behind. Asserting "the week's mean is zero" only holds if
 * this file owns the store, so it takes it.
 */
beforeEach(() => {
  kv.clearAll();
});

const READY: HealthSignals = { ...NO_SIGNALS, availability: 'ready' };

const BASE: BriefInput = {
  name: '',
  cursor: 20,
  todayPain: 1,
  doneToday: false,
  streak: 5,
  health: READY,
};

describe('the state vocabulary', () => {
  test('has no duplicates', () => {
    expect(new Set(BRIEF_STATES).size).toBe(BRIEF_STATES.length);
  });

  /** The breadth is the feature. Five states meant most users saw the same
   * sentence for months, which is not a weak feature but an absent one. */
  test('is large enough to be worth rotating', () => {
    expect(BRIEF_STATES.length).toBeGreaterThanOrEqual(20);
  });
});

describe('the quiet rotation is flat', () => {
  /**
   * Six topics across six days, each one its own state.
   *
   * This is the shape the copy layer needed: one lookup, no second `switch`.
   * `quiet` used to be a single state that `brief.ts` then re-dispatched on by
   * calling `quietTopic` a second time — two files agreeing about the same
   * decision by coincidence.
   */
  test('six consecutive days give six different states', () => {
    const seen = new Set(
      Array.from({ length: 6 }, (_, i) => briefState({ ...BASE, cursor: 18 + i })),
    );
    expect(seen.size).toBe(6);
    for (const state of seen) expect(state).toStartWith('quiet-');
  });

  test('every state it can produce is one the catalogues know about', () => {
    for (let cursor = 18; cursor < 30; cursor += 1) {
      expect(BRIEF_STATES).toContain(briefState({ ...BASE, cursor }));
    }
  });

  /**
   * The live condition that used to sit in the copy file.
   *
   * `bigStepDay` is a reading of health data, and reading health data to
   * decide which sentence to say is this file's job. The same cursor gives two
   * different states depending on it, which is precisely why it could not stay
   * downstream of the state.
   */
  test('a big day on foot and a light one are different states', () => {
    const loadDay = { ...BASE, cursor: 20 };
    const heavy: HealthSignals = { ...READY, stepsRatio: 3, stepsYesterday: 14_231 };

    expect(quietTopic(20)).toBe('load');
    expect(briefState(loadDay)).toBe('quiet-load-light');
    expect(briefState({ ...loadDay, health: heavy })).toBe('quiet-load-big');
  });

  test('bigStepDay stays a neutral observation, never a state of its own', () => {
    expect(bigStepDay({ ...READY, stepsRatio: 3 })).toBe(true);
    expect(bigStepDay({ ...READY, stepsRatio: 1 })).toBe(false);
    // Null is the normal case for a user who granted nothing.
    expect(bigStepDay(READY)).toBe(false);
  });
});

describe('the figures the sentences quote', () => {
  /**
   * Computed here, beside the windows they come from.
   *
   * `brief.ts` used to call `meanPain` a second time to derive these, which is
   * one comparison window defined in two files — a change to the window could
   * move the state without moving the number its own sentence prints.
   */
  test('a jump is the distance above the person’s own week', () => {
    // 6, not 9: the ladder tests pain >= FLARE (7) before it tests a spike, so
    // a 9 lands in 'flare' and never reaches the state this case names.
    const today = 6;
    const reading = readBrief({ ...BASE, cursor: 40, todayPain: today });
    expect(reading.state).toBe('pain-spike');

    // Checked against `meanPain` rather than against a fixed number. The point
    // of this test is that the figure comes from the window that selected the
    // state, so comparing it to that window is the assertion — and unlike a
    // literal it does not depend on the store being empty, which in a suite
    // that shares one in-memory backend it is not.
    const week = meanPain(40 - 7, 40, 40);
    expect(week).not.toBeNull();
    expect(reading.jump).toBe(Math.round(today - (week ?? 0)));
  });

  /** With no honest window to compare against, the figure falls back to the
   * smallest change the app will call a change at all. */
  test('both figures fall back to the minimal difference', () => {
    const reading = readBrief({ ...BASE, cursor: 2, todayPain: 8 });
    expect(reading.state).toBe('flare');
    expect(reading.jump).toBe(PAIN_MID);
    expect(reading.drop).toBe(PAIN_MID);
  });

  test('briefState is readBrief without the figures', () => {
    const input = { ...BASE, todayPain: 8 };
    expect(briefState(input)).toBe(readBrief(input).state);
  });

  /** Every state carries both, so the copy layer never has to ask whether a
   * figure is there before reaching for it. */
  test('a reading always carries both figures', () => {
    for (let cursor = 0; cursor < 30; cursor += 1) {
      const reading = readBrief({ ...BASE, cursor });
      expect(Number.isFinite(reading.jump)).toBe(true);
      expect(Number.isFinite(reading.drop)).toBe(true);
    }
  });
});
