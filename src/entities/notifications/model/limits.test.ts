import { describe, expect, test } from 'bun:test';

import {
  BACKOFF_PER_WEEK,
  EMPTY_DELIVERY,
  MAX_PER_WEEK,
  blockedReason,
  daysSinceKind,
  forget,
  inBackoff,
  pauseStatus,
  recordOpened,
  recordSent,
  sentInWeek,
  sentOfKindInWeek,
  weeklyAllowance,
  type DeliveryState,
} from './limits';

const DAY_MS = 86_400_000;

/** `2026-03-01` plus n days, so the fixtures read as a real calendar. */
function day(n: number): string {
  const d = new Date(2026, 2, 1 + n);
  const m = `${d.getMonth() + 1}`.padStart(2, '0');
  const dd = `${d.getDate()}`.padStart(2, '0');
  return `${d.getFullYear()}-${m}-${dd}`;
}

/** Mid-morning, comfortably inside the allowed window. */
const MORNING = 7 * 60 + 45;
const EVENING = 20 * 60;
const LATE = 22 * 60;

function sentDays(...days: string[]): DeliveryState {
  return { ...EMPTY_DELIVERY, sentOn: days };
}

describe('daily ceiling', () => {
  test('nothing is blocked on a clean day', () => {
    expect(blockedReason(EMPTY_DELIVERY, day(0), 7, MORNING)).toBeNull();
  });

  test('a second message on the same day is refused', () => {
    const state = sentDays(day(0));
    expect(blockedReason(state, day(0), 7, MORNING)).toBe('already-sent-today');
  });

  /** Even the most important one. Two in a day is a hard stop in the spec. */
  test('the daily ceiling binds the essential rows too', () => {
    const state = sentDays(day(0));
    expect(blockedReason(state, day(0), 1, MORNING)).toBe('already-sent-today');
  });

  test('the next day is clear again', () => {
    const state = sentDays(day(0));
    expect(blockedReason(state, day(1), 7, MORNING)).toBeNull();
  });
});

describe('quiet hours', () => {
  test('21:30 is already quiet', () => {
    expect(blockedReason(EMPTY_DELIVERY, day(0), 1, 21 * 60 + 30)).toBe('quiet-hours');
  });

  test('21:29 is not', () => {
    expect(blockedReason(EMPTY_DELIVERY, day(0), 1, 21 * 60 + 29)).toBeNull();
  });

  test('quiet hours outrank even a flare', () => {
    expect(blockedReason(EMPTY_DELIVERY, day(0), 1, LATE)).toBe('quiet-hours');
  });
});

describe('weekly ceiling', () => {
  const full = sentDays(day(0), day(1), day(2), day(3), day(4));

  test('five in seven days fills the week', () => {
    expect(sentInWeek(full, day(5))).toBe(MAX_PER_WEEK);
  });

  test('a reminder is refused once the week is full', () => {
    expect(blockedReason(full, day(5), 7, MORNING)).toBe('week-full-for-reminders');
  });

  /**
   * The one place the ceiling bends. Flare, load, gait and retest carry
   * information no other app has, and a full week of reminders must not be
   * what stops the message that arrives the morning after a flare.
   */
  test('the first four priorities still pass a full week', () => {
    for (const priority of [1, 2, 3, 4]) {
      expect(blockedReason(full, day(5), priority, MORNING)).toBeNull();
    }
  });

  test('the fifth priority does not', () => {
    expect(blockedReason(full, day(5), 5, MORNING)).toBe('week-full-for-reminders');
  });

  test('the window rolls — day seven frees the first slot', () => {
    expect(sentInWeek(full, day(7))).toBe(4);
    expect(blockedReason(full, day(7), 7, MORNING)).toBeNull();
  });
});

describe('backoff after three unopened', () => {
  const ignored: DeliveryState = { ...EMPTY_DELIVERY, unopenedStreak: 3 };

  test('three in a row shrinks the week', () => {
    expect(inBackoff(ignored)).toBe(true);
    expect(weeklyAllowance(ignored)).toBe(BACKOFF_PER_WEEK);
  });

  test('two is not enough to shrink it', () => {
    const state = { ...EMPTY_DELIVERY, unopenedStreak: 2 };
    expect(inBackoff(state)).toBe(false);
    expect(weeklyAllowance(state)).toBe(MAX_PER_WEEK);
  });

  test('a shrunken week refuses the third reminder', () => {
    const state: DeliveryState = { ...ignored, sentOn: [day(0), day(1)] };
    expect(blockedReason(state, day(2), 7, MORNING)).toBe('week-full-for-reminders');
  });

  test('a shrunken week still lets a flare through', () => {
    const state: DeliveryState = { ...ignored, sentOn: [day(0), day(1)] };
    expect(blockedReason(state, day(2), 1, MORNING)).toBeNull();
  });

  test('opening the app clears it', () => {
    expect(inBackoff(recordOpened(ignored))).toBe(false);
  });
});

describe('pause after seven unopened', () => {
  const ignored: DeliveryState = { ...EMPTY_DELIVERY, unopenedStreak: 7 };

  test('seven in a row stops everything', () => {
    expect(pauseStatus(ignored, day(0))).toBe('paused');
    expect(blockedReason(ignored, day(0), 1, MORNING)).toBe('paused');
  });

  test('still paused on day twenty-nine', () => {
    const state: DeliveryState = { ...ignored, pausedOn: day(0) };
    expect(pauseStatus(state, day(29))).toBe('paused');
  });

  test('day thirty earns exactly one re-entry', () => {
    const state: DeliveryState = { ...ignored, pausedOn: day(0) };
    expect(pauseStatus(state, day(30))).toBe('reentry');
    expect(blockedReason(state, day(30), 10, MORNING)).toBeNull();
  });

  test('and after that, silence', () => {
    const state: DeliveryState = { ...ignored, pausedOn: day(0), reentrySent: true };
    expect(pauseStatus(state, day(31))).toBe('silent');
    expect(blockedReason(state, day(31), 1, MORNING)).toBe('silent');
  });

  /** Re-entry is still not allowed to arrive at half past ten at night. */
  test('re-entry still respects quiet hours', () => {
    const state: DeliveryState = { ...ignored, pausedOn: day(0) };
    expect(blockedReason(state, day(30), 10, LATE)).toBe('quiet-hours');
  });

  test('opening the app anywhere in the pause resumes normal service', () => {
    const state: DeliveryState = { ...ignored, pausedOn: day(0) };
    const back = recordOpened(state);
    expect(pauseStatus(back, day(5))).toBe('running');
    expect(blockedReason(back, day(5), 7, MORNING)).toBeNull();
  });
});

describe('recording', () => {
  test('sending counts against the day, the week and the kind', () => {
    const state = recordSent(EMPTY_DELIVERY, 'session', day(0));
    expect(sentInWeek(state, day(0))).toBe(1);
    expect(sentOfKindInWeek(state, 'session', day(0))).toBe(1);
    expect(sentOfKindInWeek(state, 'checkin', day(0))).toBe(0);
    expect(blockedReason(state, day(0), 1, MORNING)).toBe('already-sent-today');
  });

  test('an unanswered message raises the unopened streak', () => {
    let state = EMPTY_DELIVERY;
    for (let i = 0; i < 3; i += 1) state = recordSent(state, 'session', day(i));
    expect(state.unopenedStreak).toBe(3);
    expect(inBackoff(state)).toBe(true);
  });

  test('the seventh stamps the pause date', () => {
    let state = EMPTY_DELIVERY;
    for (let i = 0; i < 7; i += 1) state = recordSent(state, 'session', day(i));
    expect(state.unopenedStreak).toBe(7);
    expect(state.pausedOn).toBe(day(6));
  });

  test('days since a kind, for the per-type caps', () => {
    const state = recordSent(EMPTY_DELIVERY, 'gait', day(0));
    expect(daysSinceKind(state, 'gait', day(13))).toBe(13);
    expect(daysSinceKind(state, 'gait', day(0))).toBe(0);
    expect(daysSinceKind(state, 'load', day(0))).toBeNull();
  });
});

describe('forget', () => {
  test('drops history past the window and keeps the rest', () => {
    let state = recordSent(EMPTY_DELIVERY, 'session', day(0));
    state = recordSent(state, 'session', day(40));
    const trimmed = forget(state, day(50), 45);
    expect(trimmed.sentOn).toEqual([day(40)]);
    expect(trimmed.sentByKind.session).toEqual([day(40)]);
  });

  test('a kind with nothing left is removed entirely', () => {
    const state = recordSent(EMPTY_DELIVERY, 'gait', day(0));
    expect(forget(state, day(90), 45).sentByKind.gait).toBeUndefined();
  });
});

describe('the promise, end to end', () => {
  /**
   * Reminders are what the weekly ceiling is for.
   *
   * The spec contradicts itself here and this test records how it was settled.
   * Its HARD LIMITS table says "maximum per week: 5" flat, while the delivery
   * caps below it say `sentThisWeek >= 5 → only priority 1–4 may send` — which
   * only means anything if 1–4 are allowed past the five. The second is the
   * more specific statement and matches the document's own argument that rows
   * 1–3 are "the reason the permission is worth asking for", so the ceiling is
   * read as binding on reminders rather than on everything.
   *
   * What still holds absolutely is one per day, which bounds even a week of
   * flares at seven.
   */
  test('reminders never exceed five in a week', () => {
    let state = EMPTY_DELIVERY;
    for (let i = 0; i < 14; i += 1) {
      const on = day(i);
      // A reminder, tried twice a day, every day.
      for (const minute of [MORNING, EVENING]) {
        if (blockedReason(state, on, 7, minute) == null) state = recordSent(state, 'session', on);
      }
      state = recordOpened(state);
    }
    for (let i = 0; i < 14; i += 1) {
      expect(sentInWeek(state, day(i))).toBeLessThanOrEqual(MAX_PER_WEEK);
    }
  });

  test('essentials may pass a full week, but never twice in a day', () => {
    let state = EMPTY_DELIVERY;
    let delivered = 0;
    for (let i = 0; i < 14; i += 1) {
      const on = day(i);
      for (const minute of [MORNING, EVENING]) {
        if (blockedReason(state, on, 1, minute) == null) {
          state = recordSent(state, 'flare', on);
          delivered += 1;
        }
      }
      state = recordOpened(state);
    }
    // Fourteen days, one each at most — the daily ceiling is what bounds this,
    // and it is the limit the spec states without qualification.
    expect(delivered).toBe(14);
    for (let i = 0; i < 14; i += 1) {
      expect(state.sentOn.filter((key) => key === day(i)).length).toBe(1);
    }
  });

  test('a user who never opens anything is silenced within a fortnight', () => {
    let state = EMPTY_DELIVERY;
    let delivered = 0;
    for (let i = 0; i < 60; i += 1) {
      const on = day(i);
      if (blockedReason(state, on, 1, MORNING) == null) {
        state = recordSent(state, 'flare', on);
        delivered += 1;
      }
    }
    // Seven ignored, then a month of nothing, then exactly one re-entry.
    expect(delivered).toBe(8);
    expect(pauseStatus(state, day(59))).toBe('silent');
  });
});
