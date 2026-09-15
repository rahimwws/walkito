/**
 * The tempo arithmetic the session player counts down.
 *
 * Every assertion here is a second the user is actually looking at. "Three up,
 * two held, three down" is four boundaries per rep and thirty-six reps per
 * heel-raise move, so the interesting cases are all off-by-ones: the second a
 * phase ends, the rep a set ends on, and the moment there is nothing left.
 */

import { describe, expect, test } from 'bun:test';

import {
  doseSeconds,
  phaseAt,
  repSeconds,
  tempoSeconds,
} from '@/widgets/session-player/model/tempo';

/** What both heel-raise variants run at. */
const TEMPO = { up: 3, hold: 2, down: 3 };

/** Block 2's heel raise: three sets of twelve, at eight seconds a rep. */
const REPS = 12;
const SETS = 3;
const TOTAL = 8 * REPS * SETS;

describe('a rep', () => {
  test('is the three phases end to end', () => {
    expect(repSeconds(TEMPO)).toBe(8);
    expect(tempoSeconds(TEMPO, REPS, SETS)).toBe(TOTAL);
  });

  test('counts each phase down to one, then hands over', () => {
    const seen = Array.from({ length: 8 }, (_, second) => {
      const at = phaseAt(second, TEMPO, REPS, SETS);
      return `${at.phase}:${at.secondsLeft}`;
    });
    expect(seen).toEqual([
      'up:3',
      'up:2',
      'up:1',
      'hold:2',
      'hold:1',
      'down:3',
      'down:2',
      'down:1',
    ]);
  });

  test('holds a phase until its last second has actually gone', () => {
    expect(phaseAt(2.99, TEMPO, REPS, SETS)).toMatchObject({ phase: 'up', secondsLeft: 1 });
    expect(phaseAt(3, TEMPO, REPS, SETS)).toMatchObject({ phase: 'hold', secondsLeft: 2 });
    expect(phaseAt(4.99, TEMPO, REPS, SETS)).toMatchObject({ phase: 'hold', secondsLeft: 1 });
    expect(phaseAt(5, TEMPO, REPS, SETS)).toMatchObject({ phase: 'down', secondsLeft: 3 });
  });

  test('starts at the beginning however far before it you ask', () => {
    expect(phaseAt(-10, TEMPO, REPS, SETS)).toMatchObject({
      phase: 'up',
      secondsLeft: 3,
      rep: 1,
      set: 1,
    });
  });

  test('never shows zero while there is still a rep to do', () => {
    for (let second = 0; second < TOTAL; second += 1) {
      const at = phaseAt(second, TEMPO, REPS, SETS);
      expect(at.secondsLeft).toBeGreaterThan(0);
      expect(at.done).toBe(false);
    }
  });
});

describe('reps and sets', () => {
  test('the next rep starts the second the last one ends', () => {
    expect(phaseAt(7, TEMPO, REPS, SETS)).toMatchObject({ rep: 1, phase: 'down' });
    expect(phaseAt(8, TEMPO, REPS, SETS)).toMatchObject({ rep: 2, phase: 'up', secondsLeft: 3 });
  });

  test('the last rep of a set is the twelfth, not the thirteenth', () => {
    expect(phaseAt(8 * 11, TEMPO, REPS, SETS)).toMatchObject({ rep: 12, set: 1 });
    expect(phaseAt(8 * 12 - 1, TEMPO, REPS, SETS)).toMatchObject({ rep: 12, set: 1 });
  });

  test('the count restarts with the set', () => {
    expect(phaseAt(8 * 12, TEMPO, REPS, SETS)).toMatchObject({ rep: 1, set: 2, phase: 'up' });
    expect(phaseAt(8 * 24, TEMPO, REPS, SETS)).toMatchObject({ rep: 1, set: 3 });
    expect(phaseAt(8 * 35, TEMPO, REPS, SETS)).toMatchObject({ rep: 12, set: 3 });
  });
});

describe('the end of the dose', () => {
  test('the last second of the last rep is still work', () => {
    expect(phaseAt(TOTAL - 1, TEMPO, REPS, SETS)).toMatchObject({
      phase: 'down',
      secondsLeft: 1,
      rep: 12,
      set: 3,
      done: false,
    });
  });

  test('and the one after it is done, and stays done', () => {
    expect(phaseAt(TOTAL, TEMPO, REPS, SETS)).toEqual({
      phase: 'down',
      secondsLeft: 0,
      rep: 12,
      set: 3,
      done: true,
    });
    expect(phaseAt(TOTAL + 500, TEMPO, REPS, SETS)).toMatchObject({ done: true, secondsLeft: 0 });
  });
});

describe('a dose that cannot be counted', () => {
  test('a tempo with no seconds in it is done rather than divided by', () => {
    expect(phaseAt(0, { up: 0, hold: 0, down: 0 }, REPS, SETS)).toMatchObject({
      done: true,
      secondsLeft: 0,
    });
  });

  test('no reps, or no sets, is the same', () => {
    expect(phaseAt(0, TEMPO, 0, SETS).done).toBe(true);
    expect(phaseAt(0, TEMPO, REPS, 0).done).toBe(true);
  });

  test('a negative phase shortens the rep instead of reversing it', () => {
    // Six seconds a rep, not the nought a straight sum would give.
    expect(repSeconds({ up: 3, hold: -2, down: 3 })).toBe(6);
    expect(phaseAt(3, { up: 3, hold: -2, down: 3 }, 2, 1)).toMatchObject({
      phase: 'down',
      secondsLeft: 3,
    });
  });

  test('a phase given no time is skipped', () => {
    expect(phaseAt(3, { up: 3, hold: 0, down: 3 }, 2, 1)).toMatchObject({
      phase: 'down',
      secondsLeft: 3,
    });
  });
});

describe('how long a whole move takes', () => {
  test('a tempo move is its reps times its sets', () => {
    expect(doseSeconds({ sets: SETS, reps: REPS, tempo: TEMPO })).toBe(TOTAL);
    // Block 4: five sets of eight, still eight seconds a rep.
    expect(doseSeconds({ sets: 5, reps: 8, tempo: TEMPO })).toBe(320);
  });

  test('a held move is its hold times its sets', () => {
    // Three thirty-second calf stretches.
    expect(doseSeconds({ sets: 3, holdSec: 30 })).toBe(90);
  });

  test('a held move counted in reps multiplies both', () => {
    // Short foot: three sets of ten five-second holds.
    expect(doseSeconds({ sets: 3, reps: 10, holdSec: 5 })).toBe(150);
  });

  test('counted work with no hold and no tempo has no length to give', () => {
    // Fifteen ankle rocks is a real dose that says nothing about seconds; the
    // player has to fall back to its own default rather than be handed one.
    expect(doseSeconds({ sets: 2, reps: 15 })).toBeNull();
    expect(doseSeconds({ sets: 0, holdSec: 30 })).toBeNull();
    expect(doseSeconds(null)).toBeNull();
    expect(doseSeconds(undefined)).toBeNull();
  });
});
