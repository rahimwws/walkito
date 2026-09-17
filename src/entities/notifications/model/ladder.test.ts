import { describe, expect, test } from 'bun:test';

import { EMPTY_DELIVERY, recordSent, type DeliveryState } from './limits';
import { candidates, decide, type DaySignals } from './ladder';

const WAKE = 7 * 60 + 45;

/** A plain training day with nothing else true of it. */
function base(overrides: Partial<DaySignals> = {}): DaySignals {
  return {
    dateKey: '2026-03-10',
    dayNumber: 17,
    wakeAt: WAKE,
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

function kindsFor(signals: DaySignals, state: DeliveryState = EMPTY_DELIVERY): string[] {
  return candidates(signals, state).map((c) => c.kind);
}

describe('the ladder picks one thing', () => {
  test('an ordinary training day is a session nudge', () => {
    const decision = decide(base(), EMPTY_DELIVERY);
    expect(decision).toEqual({
      send: true,
      candidate: { kind: 'session', priority: 7, at: WAKE },
    });
  });

  /** Rest days get nothing. This is the line most reminder apps cross. */
  test('a rest day says nothing at all', () => {
    const decision = decide(base({ hasSession: false }), EMPTY_DELIVERY);
    expect(decision).toEqual({ send: false, reason: 'nothing-to-say' });
  });

  test('a flare outranks the session nudge on the same morning', () => {
    const signals = base({ painYesterday: 8 });
    expect(kindsFor(signals)).toEqual(['flare', 'session']);
    expect(decide(signals, EMPTY_DELIVERY)).toMatchObject({
      send: true,
      candidate: { kind: 'flare' },
    });
  });

  test('pain of six is not a flare', () => {
    expect(kindsFor(base({ painYesterday: 6 }))).toEqual(['session']);
  });

  /** Zero is a logged morning, not a missing one, and must not read as either
   * a flare or an absence. */
  test('a logged zero is not a flare', () => {
    expect(kindsFor(base({ painYesterday: 0 }))).toEqual(['session']);
  });

  test('the whole ladder resolves to exactly one message', () => {
    const signals = base({
      painYesterday: 9,
      stepRatio: 1.8,
      loadAdjusted: true,
      asymmetryDays: 5,
      painRecently: true,
      isRetest: true,
      opensBlock: 'Strengthen',
      planChanged: true,
    });
    // `session` rides along because this is still a training day — the point
    // is that seven true things resolve to exactly one message.
    expect(kindsFor(signals)).toEqual([
      'flare', 'load', 'gait', 'retest', 'block', 'plan', 'session',
    ]);
    expect(decide(signals, EMPTY_DELIVERY)).toMatchObject({
      send: true,
      candidate: { kind: 'flare' },
    });
  });
});

describe('load warning', () => {
  test('fires on a big day the engine acted on', () => {
    expect(kindsFor(base({ stepRatio: 1.6, loadAdjusted: true }))).toContain('load');
  });

  /** A warning with no consequence is noise — and worse, it tells someone
   * their walk hurt them and then asks for the same session anyway. */
  test('stays quiet when the engine changed nothing', () => {
    expect(kindsFor(base({ stepRatio: 1.6, loadAdjusted: false }))).not.toContain('load');
  });

  test('1.4 exactly is not over the line', () => {
    expect(kindsFor(base({ stepRatio: 1.4, loadAdjusted: true }))).not.toContain('load');
  });
});

describe('gait change', () => {
  const gait = base({ asymmetryDays: 3, painRecently: true });

  test('three days plus recent pain fires it, in the evening', () => {
    expect(candidates(gait, EMPTY_DELIVERY).find((c) => c.kind === 'gait')?.at).toBe(18 * 60);
  });

  /** Asymmetry alone is too noisy — one day with a bag on one shoulder must
   * never be enough. */
  test('asymmetry on its own is not enough', () => {
    expect(kindsFor(base({ asymmetryDays: 5 }))).not.toContain('gait');
  });

  test('a step spike opens the gate instead of pain', () => {
    expect(kindsFor(base({ asymmetryDays: 4, stepRatio: 1.7 }))).toContain('gait');
  });

  test('two days is not three', () => {
    expect(kindsFor(base({ asymmetryDays: 2, painRecently: true }))).not.toContain('gait');
  });

  test('once a fortnight at most', () => {
    const sent = recordSent(EMPTY_DELIVERY, 'gait', '2026-03-01');
    // Nine days later: still inside the cooldown.
    expect(kindsFor({ ...gait, dateKey: '2026-03-10' }, sent)).not.toContain('gait');
    // Fifteen days later: allowed again.
    expect(kindsFor({ ...gait, dateKey: '2026-03-16' }, sent)).toContain('gait');
  });
});

describe('evening check-in', () => {
  const quiet = base({ painLoggedToday: false, openedAppToday: false });

  test('fires when the day went unlogged', () => {
    expect(kindsFor(quiet)).toContain('checkin');
  });

  test('not on a day the user already came in', () => {
    expect(kindsFor({ ...quiet, openedAppToday: true })).not.toContain('checkin');
  });

  test('not once the pain is already logged', () => {
    expect(kindsFor({ ...quiet, painLoggedToday: true })).not.toContain('checkin');
  });

  test('three a week and no more', () => {
    let state = EMPTY_DELIVERY;
    for (const d of ['2026-03-05', '2026-03-06', '2026-03-07']) {
      state = recordSent(state, 'checkin', d);
    }
    expect(kindsFor(quiet, state)).not.toContain('checkin');
  });
});

describe('streak protection', () => {
  // No session today, so the only things owed are the two evening rows — which
  // is what makes the ordering between them observable.
  const owed = base({
    hasSession: false,
    streak: 12,
    painLoggedToday: false,
    openedAppToday: false,
  });

  test('fires at nine, and only then', () => {
    expect(candidates(owed, EMPTY_DELIVERY).find((c) => c.kind === 'streak')?.at).toBe(21 * 60);
  });

  /** Below five there is no stake, and inventing one is exactly the guilt the
   * onboarding promise rules out. */
  test('a four-day streak is not worth protecting', () => {
    expect(kindsFor({ ...owed, streak: 4 })).not.toContain('streak');
  });

  test('not when the day is already logged', () => {
    expect(kindsFor({ ...owed, painLoggedToday: true })).not.toContain('streak');
  });

  test('not when a freeze is already covering the week', () => {
    expect(kindsFor({ ...owed, freezeUsedThisWeek: true })).not.toContain('streak');
  });

  test('twice a week and no more', () => {
    let state = EMPTY_DELIVERY;
    state = recordSent(state, 'streak', '2026-03-08');
    state = recordSent(state, 'streak', '2026-03-09');
    expect(kindsFor(owed, state)).not.toContain('streak');
  });

  /** It sits below the check-in, so a user owed both gets asked how the foot
   * was rather than reminded what they stand to lose. */
  test('the check-in outranks it', () => {
    expect(decide(owed, EMPTY_DELIVERY)).toMatchObject({
      send: true,
      candidate: { kind: 'checkin' },
    });
  });
});

describe('win-back', () => {
  test('exactly three days, ten days and thirty', () => {
    for (const away of [3, 10, 30]) {
      expect(kindsFor(base({ daysAway: away, hasSession: false }))).toContain('winback');
    }
  });

  test('and nothing on the days between', () => {
    for (const away of [2, 4, 9, 11, 29, 31, 60]) {
      expect(kindsFor(base({ daysAway: away, hasSession: false }))).not.toContain('winback');
    }
  });
});

describe('the caps still bind the ladder', () => {
  test('a day that already spoke stays quiet', () => {
    const state = recordSent(EMPTY_DELIVERY, 'session', '2026-03-10');
    expect(decide(base({ painYesterday: 9 }), state)).toEqual({
      send: false,
      reason: 'already-sent-today',
    });
  });

  /**
   * The evening rows fall inside quiet hours only past 21:30, so the streak
   * row at 21:00 is the last thing that can be said in a day. Pushed later it
   * would be refused outright rather than moved.
   */
  test('a full week drops the reminder but keeps the flare', () => {
    let state: DeliveryState = EMPTY_DELIVERY;
    for (const d of ['2026-03-05', '2026-03-06', '2026-03-07', '2026-03-08', '2026-03-09']) {
      state = recordSent(state, 'session', d);
    }
    expect(decide(base(), state)).toEqual({ send: false, reason: 'week-full-for-reminders' });
    expect(decide(base({ painYesterday: 8 }), state)).toMatchObject({
      send: true,
      candidate: { kind: 'flare' },
    });
  });

  /**
   * The ladder keeps walking rather than giving up on the top row. A week full
   * of reminders refuses the session nudge, but the gait message below it is
   * essential and still goes — picking only the highest candidate and testing
   * that one would have silenced the whole day.
   */
  test('a blocked top row does not silence the rows beneath it', () => {
    let state: DeliveryState = EMPTY_DELIVERY;
    for (const d of ['2026-03-05', '2026-03-06', '2026-03-07', '2026-03-08', '2026-03-09']) {
      state = recordSent(state, 'session', d);
    }
    const signals = base({ asymmetryDays: 4, painRecently: true });
    // `block` is priority 5 and refused; `gait` is 3 and allowed.
    const decision = decide({ ...signals, opensBlock: 'Load' }, state);
    expect(decision).toMatchObject({ send: true, candidate: { kind: 'gait' } });
  });
});
