import { describe, expect, test } from 'bun:test';

import { EXERCISES_BY_ID } from '../src/entities/program/model/exercises';
import {
  FREE_PROTOCOL,
  PROTOCOLS,
  PROTOCOLS_ADVANCE_PROGRAM,
  protocolById,
  protocolSeconds,
} from '../src/entities/protocols/model/protocols';
import {
  FLARE_PAIN,
  RUN_WINDOW_MS,
  recommendProtocol,
  type NowFacts,
} from '../src/entities/protocols/model/recommend';
import { CLIPS } from '../src/widgets/session-player/config/clip-manifest';

/**
 * The five protocols, and what must stay true about them.
 *
 * The spec's own constraint was that this feature adds no exercises, no clips
 * and no colours — so the first thing worth testing is that it did not. The
 * rest is about the flare protocol, which is the one offered to somebody whose
 * foot already hurts and therefore the one where a plausible-looking edit does
 * the most damage.
 */

describe('built from what already exists', () => {
  const steps = PROTOCOLS.flatMap((protocol) => protocol.steps);

  test('the fixtures these assertions rely on actually loaded', () => {
    // Every check below is a `filter(...).toEqual([])`, which passes just as
    // happily when the catalogue is empty as when it is correct. This is the
    // one that fails if a module quietly did not load under bun.
    expect(PROTOCOLS.length).toBe(5);
    expect(steps.length).toBeGreaterThan(10);
    expect(Object.keys(EXERCISES_BY_ID).length).toBeGreaterThan(10);
    expect(Object.keys(CLIPS).length).toBeGreaterThan(10);
  });

  test('every exercise is in the catalogue', () => {
    const unknown = steps.filter((step) => EXERCISES_BY_ID[step.exerciseId] == null);
    expect(unknown.map((s) => s.exerciseId)).toEqual([]);
  });

  test('every exercise has a clip already in the bucket', () => {
    // No new footage. An exercise without one would put a protocol on screen
    // with a title and a blank frame where the demonstration should be.
    const silent = steps.filter((step) => CLIPS[step.exerciseId] == null);
    expect(silent.map((s) => s.exerciseId)).toEqual([]);
  });

  test('every step has a positive length', () => {
    // The player divides by this. A zero would take the playhead to infinity.
    expect(steps.filter((step) => step.seconds <= 0)).toEqual([]);
  });
});

/**
 * The flare protocol loads nothing.
 *
 * Adding a heel raise here would be an easy and plausible edit — they are the
 * most effective exercise in the catalogue — and the worst one to hand somebody
 * mid-flare, because they are precisely the two moves that load the fascia.
 */
describe('hurts right now', () => {
  const flare = protocolById('flare');

  test('contains nothing that loads the fascia', () => {
    const loading = flare.steps.filter(
      (step) => EXERCISES_BY_ID[step.exerciseId]?.loadsFascia === true,
    );
    expect(loading.map((s) => s.exerciseId)).toEqual([]);
  });

  test('contains nothing done standing', () => {
    const standing = flare.steps.filter(
      (step) => EXERCISES_BY_ID[step.exerciseId]?.position === 'standing',
    );
    expect(standing.map((s) => s.exerciseId)).toEqual([]);
  });

  test('is the one that is free', () => {
    expect(FREE_PROTOCOL).toBe('flare');
    expect(flare.free).toBe(true);
    const paid = PROTOCOLS.filter((p) => p.id !== 'flare');
    expect(paid.every((p) => !p.free)).toBe(true);
  });

  test('is seated', () => {
    expect(flare.position).toBe('seated');
  });
});

describe('what the cards claim', () => {
  test('the stated minutes match the steps, except the morning one', () => {
    for (const protocol of PROTOCOLS) {
      const actual = protocolSeconds(protocol) / 60;
      // Rounded because a protocol may run to a part-minute; the card never
      // shows a fraction.
      expect(Math.round(actual)).toBe(protocol.minutes);
    }
  });

  test('nothing advances the programme', () => {
    // A constant rather than behaviour, because the completion path runs
    // through the same player as a real session and wiring it to the same
    // "done" would tick off a day the user has not trained.
    expect(PROTOCOLS_ADVANCE_PROGRAM).toBe(false);
  });

  test('every protocol uses a colour the app already has', () => {
    const existing = ['blue', 'amber', 'orange', 'red', 'violet', 'teal'];
    const strangers = PROTOCOLS.filter((p) => !existing.includes(p.accent));
    expect(strangers.map((p) => p.accent)).toEqual([]);
  });
});

/**
 * Which one gets featured.
 *
 * First match wins, and the order is the design: pain beats routine, a run
 * that just finished beats the clock, the clock beats a default.
 */
describe('the right-now recommendation', () => {
  const NOON_TUESDAY = Date.parse('2026-09-22T12:00:00.000Z');

  const facts = (over: Partial<NowFacts> = {}): NowFacts => ({
    painToday: null,
    checkedInToday: false,
    lastRunEndedAt: null,
    hour: 12,
    weekday: 2,
    ...over,
  });

  test('pain at seven features the flare protocol', () => {
    expect(recommendProtocol(facts({ painToday: FLARE_PAIN }), NOON_TUESDAY)).toBe('flare');
  });

  test('pain at six does not', () => {
    expect(recommendProtocol(facts({ painToday: 6 }), NOON_TUESDAY)).not.toBe('flare');
  });

  test('a run half an hour ago features the cool-down', () => {
    const ended = NOON_TUESDAY - 30 * 60 * 1000;
    expect(recommendProtocol(facts({ lastRunEndedAt: ended }), NOON_TUESDAY)).toBe('post_run');
  });

  test('a run three hours ago does not', () => {
    const ended = NOON_TUESDAY - RUN_WINDOW_MS - 1;
    expect(recommendProtocol(facts({ lastRunEndedAt: ended }), NOON_TUESDAY)).not.toBe('post_run');
  });

  test('pain outranks a recent run', () => {
    const ended = NOON_TUESDAY - 10 * 60 * 1000;
    const now = facts({ painToday: 9, lastRunEndedAt: ended });
    expect(recommendProtocol(now, NOON_TUESDAY)).toBe('flare');
  });

  test('no workout permission is indistinguishable from no run, and prompts nothing', () => {
    // `lastRunEndedAt: null` covers both. The rule is skipped either way, which
    // is what keeps this tab from ever asking for HealthKit access.
    expect(recommendProtocol(facts({ lastRunEndedAt: null }), NOON_TUESDAY)).not.toBe('post_run');
  });

  test('early morning with no check-in features the morning protocol', () => {
    expect(recommendProtocol(facts({ hour: 7, checkedInToday: false }), NOON_TUESDAY)).toBe(
      'morning',
    );
  });

  test('early morning after a check-in does not — the first step is behind them', () => {
    expect(recommendProtocol(facts({ hour: 7, checkedInToday: true }), NOON_TUESDAY)).not.toBe(
      'morning',
    );
  });

  test('a weekday afternoon features the discreet one', () => {
    expect(recommendProtocol(facts({ hour: 14, weekday: 3 }), NOON_TUESDAY)).toBe('at_work');
  });

  test('the same hour at the weekend does not', () => {
    expect(recommendProtocol(facts({ hour: 14, weekday: 0 }), NOON_TUESDAY)).not.toBe('at_work');
  });

  test('otherwise, the warm-up', () => {
    expect(recommendProtocol(facts({ hour: 21, weekday: 3 }), NOON_TUESDAY)).toBe('pre_run');
  });

  test('a run timestamped in the future is ignored rather than treated as recent', () => {
    // A clock that moved, not a run that has not happened yet.
    const ended = NOON_TUESDAY + 60 * 60 * 1000;
    expect(recommendProtocol(facts({ lastRunEndedAt: ended }), NOON_TUESDAY)).not.toBe('post_run');
  });
});
