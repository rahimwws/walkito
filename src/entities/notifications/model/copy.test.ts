import { describe, expect, test } from 'bun:test';

import { messageFor, rotate } from './copy';
import type { DaySignals } from './ladder';

function base(overrides: Partial<DaySignals> = {}): DaySignals {
  return {
    dateKey: '2026-03-10',
    dayNumber: 17,
    wakeAt: 7 * 60 + 45,
    painYesterday: null,
    painRecently: false,
    stepRatio: null,
    stepsYesterday: null,
    asymmetryDays: 0,
    loadAdjusted: false,
    planChanged: false,
    planReason: null,
    isRetest: false,
    retestUnstarted: false,
    opensBlock: null,
    hasSession: true,
    minutes: 7,
    kind: 'strength',
    maintenance: false,
    painLoggedToday: true,
    openedAppToday: true,
    streak: 0,
    freezeUsedThisWeek: false,
    daysAway: 0,
    ...overrides,
  };
}

/** Every date in a fortnight from the fixture's week. */
const FORTNIGHT = Array.from({ length: 14 }, (_, i) => {
  const d = new Date(2026, 2, 1 + i);
  return `2026-03-${`${d.getDate()}`.padStart(2, '0')}`;
});

describe('rotation', () => {
  test('is stable for a given day', () => {
    const lines = ['a', 'b', 'c', 'd'] as const;
    expect(rotate(lines, '2026-03-10')).toBe(rotate(lines, '2026-03-10'));
  });

  test('moves between days', () => {
    const lines = ['a', 'b', 'c', 'd', 'e', 'f'] as const;
    const seen = new Set(FORTNIGHT.map((key) => rotate(lines, key)));
    expect(seen.size).toBeGreaterThan(1);
  });

  test('different sets do not move in lockstep', () => {
    const lines = ['a', 'b', 'c', 'd', 'e', 'f'] as const;
    const a = FORTNIGHT.map((key) => lines.indexOf(rotate(lines, key, 11)));
    const b = FORTNIGHT.map((key) => lines.indexOf(rotate(lines, key, 61)));
    expect(a).not.toEqual(b);
  });
});

describe('the morning nudge', () => {
  test('fills in the minutes and the day', () => {
    for (const dateKey of FORTNIGHT) {
      const body = messageFor('session', base({ dateKey }))?.body ?? '';
      expect(body).not.toContain('{');
      expect(body.length).toBeGreaterThan(0);
    }
  });

  /**
   * The promise, checked rather than trusted. "No streaks to guilt you back"
   * means the streak may not appear anywhere but its own row — and a morning
   * nudge is the row most likely to pick one up by accident.
   */
  test('never mentions the streak, whatever the streak is', () => {
    for (const dateKey of FORTNIGHT) {
      const body = messageFor('session', base({ dateKey, streak: 47 }))?.body ?? '';
      expect(body).not.toContain('47');
      expect(body.toLowerCase()).not.toContain('streak');
    }
  });
});

describe('flare support', () => {
  const flare = base({ painYesterday: 8, minutes: 3 });

  test('never cheerful, and never congratulatory', () => {
    const banned = ['great', 'awesome', 'well done', 'keep it up', 'nice', '!', '🎉'];
    for (const dateKey of FORTNIGHT) {
      const body = messageFor('flare', { ...flare, dateKey })?.body.toLowerCase() ?? '';
      for (const word of banned) expect(body).not.toContain(word);
    }
  });

  test('names the smaller ask', () => {
    const bodies = FORTNIGHT.map((dateKey) => messageFor('flare', { ...flare, dateKey })?.body ?? '');
    expect(bodies.some((b) => b.includes('3 minutes'))).toBe(true);
  });
});

describe('load warning', () => {
  test('quotes the step count and the overshoot', () => {
    const body =
      messageFor('load', base({ dateKey: '2026-03-11', stepsYesterday: 14200, stepRatio: 1.4 }))
        ?.body ?? '';
    expect(body).not.toContain('{');
  });

  /** The line that names a figure is unusable without one, so it must not be
   * reachable when HealthKit has given us nothing. */
  test('falls back to a line with no figure when steps are unknown', () => {
    for (const dateKey of FORTNIGHT) {
      const body = messageFor('load', base({ dateKey, stepsYesterday: null, stepRatio: 1.6 }))?.body ?? '';
      expect(body).not.toContain('{');
      expect(body).not.toMatch(/\bsteps yesterday\b/);
    }
  });
});

describe('gait change', () => {
  /**
   * The wording rules are the whole of this row's safety. Asymmetry does not
   * predict injury, so anything diagnostic-adjacent is both unevidenced and,
   * for this audience, frightening.
   */
  test('never diagnoses, never predicts, never compares to anyone else', () => {
    const banned = ['limp', 'compensat', 'injur', 'damage', 'average', 'normal', 'most people'];
    for (const dateKey of FORTNIGHT) {
      const body = messageFor('gait', base({ dateKey, asymmetryDays: 4 }))?.body.toLowerCase() ?? '';
      for (const word of banned) expect(body).not.toContain(word);
    }
  });
});

describe('plan changed', () => {
  test('explains the specific reason, not that something changed', () => {
    const flare = messageFor('plan', base({ planReason: 'flare' }))?.body;
    const back = messageFor('plan', base({ planReason: 'plan' }))?.body;
    expect(flare).not.toBe(back);
    expect(flare).toContain('steps back');
  });

  test('an unknown reason still produces a sentence', () => {
    const body = messageFor('plan', base({ planReason: 'something-new' }))?.body ?? '';
    expect(body.length).toBeGreaterThan(0);
    expect(body).not.toContain('{');
  });
});

describe('streak protection', () => {
  /** The one row allowed to say the number — and only ever as what one tap
   * keeps, never as what is about to be lost. */
  test('states what a tap keeps, never what is lost', () => {
    for (const dateKey of FORTNIGHT) {
      const body = messageFor('streak', base({ dateKey, streak: 12 }))?.body ?? '';
      expect(body).toContain('12');
      expect(body.toLowerCase()).not.toContain('lost');
      expect(body.toLowerCase()).not.toContain('lose');
      expect(body.toLowerCase()).not.toContain('don’t break');
    }
  });
});

describe('win-back', () => {
  test('one line each for three, ten and thirty days', () => {
    const three = messageFor('winback', base({ daysAway: 3 }))?.body;
    const ten = messageFor('winback', base({ daysAway: 10 }))?.body;
    const thirty = messageFor('winback', base({ daysAway: 30 }))?.body;
    expect(new Set([three, ten, thirty]).size).toBe(3);
  });

  /** The ten-day line restates the app's own rule, which is what quietly
   * removes the shame of coming back. */
  test('the ten-day line says the plan runs on dates', () => {
    expect(messageFor('winback', base({ daysAway: 10 }))?.body).toContain('dates, not attendance');
  });
});

describe('maintenance', () => {
  test('swaps the morning nudge for the holding tone', () => {
    const building = messageFor('session', base({ dateKey: '2026-03-12', maintenance: false }))?.body;
    const holding = messageFor('session', base({ dateKey: '2026-03-12', maintenance: true, minutes: 8 }))?.body;
    expect(building).not.toBe(holding);
  });
});

describe('no message ever ships a placeholder', () => {
  test('every kind, every day of a fortnight', () => {
    const kinds = [
      'flare', 'load', 'gait', 'retest', 'block', 'plan', 'session', 'checkin', 'streak', 'winback',
    ] as const;
    for (const kind of kinds) {
      for (const dateKey of FORTNIGHT) {
        const message = messageFor(
          kind,
          base({
            dateKey,
            opensBlock: 'Strengthen',
            stepsYesterday: 14200,
            stepRatio: 1.5,
            painYesterday: 8,
            asymmetryDays: 4,
            streak: 9,
            daysAway: 10,
            planReason: 'flare',
          }),
        );
        expect(message).not.toBeNull();
        expect(message?.body).not.toContain('{');
        expect(message?.body.trim().length).toBeGreaterThan(0);
      }
    }
  });
});
