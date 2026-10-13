import { describe, expect, test } from 'bun:test';

import { PLAN_META } from '../src/entities/program/model/plan/catalogue-meta';
import { doseFor, doseSeconds } from '../src/entities/program/model/plan/dose';
import {
  REST_SEC,
  SWITCH_SEC,
  doseTimeline,
  timelineAt,
  timelineSeconds,
} from '../src/entities/program/model/plan/timeline';

/**
 * A dose, second by second: what the plan fits a day with and what the player
 * counts down are the same layout, with the sets, the reps, the rests and the
 * changes of foot in it.
 */

describe('the timeline', () => {
  test('a one-foot held move alternates feet inside each set and rests between sets', () => {
    const segments = doseTimeline({ sets: 2, reps: 6, holdSec: 5, perSide: true });
    expect(segments.map((s) => (s.kind === 'work' ? `work:${s.set}:${s.side}` : s.kind === 'switch' ? `switch:${s.to}` : `rest:${s.set}`))).toEqual([
      'work:1:right',
      'switch:left',
      'work:1:left',
      'rest:2',
      'work:2:right',
      'switch:left',
      'work:2:left',
    ]);
    // Six reps of a five-second hold and two seconds to let go, per set and foot.
    expect(segments[0].seconds).toBe(6 * 7);
    expect(timelineSeconds(segments)).toBe(4 * 42 + 2 * SWITCH_SEC + REST_SEC);
  });

  test('a held stretch done one foot at a time goes straight back to the right foot, no rest', () => {
    const segments = doseTimeline({ sets: 2, holdSec: 30, perSide: true });
    expect(segments.some((s) => s.kind === 'rest')).toBe(false);
    expect(segments.filter((s) => s.kind === 'switch').map((s) => (s.kind === 'switch' ? s.to : null))).toEqual(['left', 'right', 'left']);
    expect(timelineSeconds(segments)).toBe(4 * 30 + 3 * SWITCH_SEC);
  });

  test('a move on both feet has no foot and no change of foot', () => {
    const segments = doseTimeline({ sets: 3, reps: 10, perSide: false });
    expect(segments.filter((s) => s.kind === 'work').every((s) => s.kind === 'work' && s.side == null)).toBe(true);
    expect(segments.some((s) => s.kind === 'switch')).toBe(false);
    expect(segments.filter((s) => s.kind === 'rest')).toHaveLength(2);
  });

  test('the plan times a dose by the same layout the player runs', () => {
    for (const meta of PLAN_META) {
      for (const level of [1, 3, 5]) {
        const dose = doseFor(meta.id, level);
        expect(doseSeconds(dose)).toBe(timelineSeconds(doseTimeline(dose)));
      }
    }
  });
});

describe('reading a move', () => {
  const held = doseTimeline({ sets: 2, reps: 6, holdSec: 5, perSide: true });

  test('a held rep counts the hold down, then the letting go', () => {
    expect(timelineAt(held, 0)?.rep).toEqual({ rep: 1, reps: 6, phase: 'hold', secondsLeft: 5 });
    expect(timelineAt(held, 4.5)?.rep).toEqual({ rep: 1, reps: 6, phase: 'hold', secondsLeft: 1 });
    expect(timelineAt(held, 5)?.rep).toEqual({ rep: 1, reps: 6, phase: 'relax', secondsLeft: 2 });
    expect(timelineAt(held, 7)?.rep).toEqual({ rep: 2, reps: 6, phase: 'hold', secondsLeft: 5 });
  });

  test('the change of foot and the rest are segments of their own', () => {
    const atSwitch = timelineAt(held, 42);
    expect(atSwitch?.segment.kind).toBe('switch');
    expect(atSwitch?.secondsLeft).toBe(SWITCH_SEC);
    const atRest = timelineAt(held, 42 + SWITCH_SEC + 42);
    expect(atRest?.segment.kind).toBe('rest');
    expect(atRest?.segment.kind === 'rest' ? atRest.segment.set : null).toBe(2);
  });

  test('plain reps count down the set and say which rep', () => {
    const scrunch = doseTimeline({ sets: 2, reps: 10, repSec: 2, perSide: true });
    expect(timelineAt(scrunch, 0)?.rep).toEqual({ rep: 1, reps: 10, phase: 'rep', secondsLeft: 20 });
    expect(timelineAt(scrunch, 7)?.rep).toEqual({ rep: 4, reps: 10, phase: 'rep', secondsLeft: 13 });
  });

  test('a tempo rep is up, hold and down', () => {
    const raise = doseTimeline({ sets: 2, reps: 8, tempo: { up: 3, hold: 2, down: 3 }, perSide: true });
    expect(timelineAt(raise, 1)?.rep?.phase).toBe('up');
    expect(timelineAt(raise, 3.5)?.rep?.phase).toBe('hold');
    expect(timelineAt(raise, 6)?.rep?.phase).toBe('down');
    expect(timelineAt(raise, 8)?.rep?.rep).toBe(2);
  });

  test('past the end it is the last segment with nothing left', () => {
    const end = timelineSeconds(held);
    const reading = timelineAt(held, end + 10);
    expect(reading?.index).toBe(held.length - 1);
    expect(reading?.secondsLeft).toBe(0);
  });
});

describe('the doses', () => {
  test('a towel scrunch is quick pulls, not held ones, and under two minutes', () => {
    const dose = doseFor('towel_scrunch');
    expect(dose.holdSec).toBeUndefined();
    expect(doseSeconds(dose)).toBeLessThanOrEqual(120);
  });

  test('the toe work is done on both feet at once', () => {
    expect(doseFor('big_toe_lift').perSide).toBe(false);
    expect(doseFor('toe_spread').perSide).toBe(false);
  });

  test('no exercise at its own level runs past five minutes', () => {
    for (const meta of PLAN_META) {
      const dose = doseFor(meta.id);
      expect({ id: meta.id, seconds: doseSeconds(dose) <= 300 }).toEqual({ id: meta.id, seconds: true });
    }
  });

  test('the heel raise on a towel keeps its 3 · 2 · 3 tempo and the backpack at the top of the chain', () => {
    const dose = doseFor('heel_raise_towel');
    expect(dose.tempo).toEqual({ up: 3, hold: 2, down: 3 });
    expect(dose.addWeight).toBe(true);
  });
});
