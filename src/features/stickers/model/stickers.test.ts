import { describe, expect, test } from 'bun:test';

import { historyFrom, type HistorySource } from './history';
import {
  EMPTY_HISTORY,
  STICKERS,
  arrivalFor,
  cameBack,
  nextSessionSticker,
  sessionsAtUsualTime,
  stickersEarned,
  type StickerHistory,
} from './stickers';

const START = Date.UTC(2026, 0, 1);
const DAY_MS = 86_400_000;

/** `YYYY-MM-DD` of plan day `n`, day 1 being the first of January. */
function dateOf(n: number): string {
  return new Date(START + (n - 1) * DAY_MS).toISOString().slice(0, 10);
}

function dayOf(date: string): number {
  return Math.round((Date.parse(date) - START) / DAY_MS) + 1;
}

/**
 * A month on the plan written as a string, one character per day: `c` a
 * check-in alone, `s` a check-in and a session, `t` a check-in and a test,
 * `r` a rest day the plan gave with a check-in, `.` nothing.
 */
function month(pattern: string, pain: number): HistorySource {
  const logs: HistorySource['logs'][number][] = [];
  const sessions: HistorySource['sessions'][number][] = [];
  const rest = new Set<number>();
  [...pattern].forEach((mark, index) => {
    const day = index + 1;
    if (mark === '.') return;
    logs.push({
      dayNumber: day,
      painMorning: pain,
      painEntries: [{ score: pain, at: START + index * DAY_MS }],
      sessionCompleted: mark === 's',
      libraryDone: false,
    });
    if (mark === 's') sessions.push({ date: dateOf(day), source: 'plan', startedAt: START + index * DAY_MS + 8 * 3_600_000 });
    if (mark === 't') sessions.push({ date: dateOf(day), source: 'test', startedAt: START + index * DAY_MS });
    if (mark === 'r') rest.add(day);
  });
  return {
    today: pattern.length,
    logs,
    sessions,
    testsOnFile: 0,
    dayOf,
    minuteOf: (at) => Math.round(((at - START) % DAY_MS) / 60_000),
    restOn: (day) => rest.has(day),
    streak: { longest: pattern.replace(/^\.+/, '').split('.')[0]?.length ?? 0, total: pattern.replace(/\./g, '').length },
  };
}

describe('the album', () => {
  test('has twenty stickers, each once', () => {
    expect(STICKERS).toHaveLength(20);
    expect(new Set(STICKERS.map((sticker) => sticker.id)).size).toBe(20);
  });

  test('is empty for an empty history', () => {
    expect(stickersEarned(EMPTY_HISTORY)).toEqual([]);
  });

  test('earns the same stickers for a morning of 0 as for a morning of 10', () => {
    //                 1234567890
    const pattern = 'cscrstcsrc.cssc';
    const calm = stickersEarned(historyFrom(month(pattern, 0)));
    const sore = stickersEarned(historyFrom(month(pattern, 10)));
    expect(calm.length).toBeGreaterThan(0);
    expect(sore).toEqual(calm);
  });

  test('builds the same history whatever the scores were', () => {
    const pattern = 'csrcst..sc';
    expect(historyFrom(month(pattern, 10))).toEqual(historyFrom(month(pattern, 0)));
  });

  test('counts a test day whatever it measured', () => {
    const history = historyFrom(month('ct', 3));
    expect(history.testsDone).toBe(1);
    expect(stickersEarned(history)).toContain('first-test');
  });

  test('counts a rest day kept, not a rest day trained on', () => {
    const kept = historyFrom(month('r', 0));
    expect(kept.restDaysKept).toBe(1);
    expect(stickersEarned(kept)).toContain('first-rest');

    const trained = month('s', 0);
    const onRest = historyFrom({ ...trained, restOn: () => true });
    expect(onRest.restDaysKept).toBe(0);
  });

  test('gives nothing for a second session on the same day', () => {
    const once = month('s', 0);
    const twice: HistorySource = {
      ...once,
      sessions: [...once.sessions, { date: dateOf(1), source: 'plan', startedAt: START + 20 * 3_600_000 }],
    };
    expect(historyFrom(twice)).toEqual(historyFrom(once));
  });

  test('reads nothing after today', () => {
    const source = month('cc', 0);
    const ahead: HistorySource = {
      ...source,
      logs: [...source.logs, { dayNumber: 3, painMorning: 0, sessionCompleted: true, libraryDone: false }],
    };
    expect(historyFrom(ahead)).toEqual(historyFrom(source));
  });
});

describe('coming back', () => {
  test('is two of three days after four or more with nothing', () => {
    expect(cameBack([1, 2, 7, 8])).toBe(true);
    expect(cameBack([1, 2, 7, 9])).toBe(true);
  });

  test('is not a short gap, or one day back', () => {
    expect(cameBack([1, 2, 6, 7])).toBe(false);
    expect(cameBack([1, 2, 7])).toBe(false);
    expect(cameBack([1, 2, 7, 10])).toBe(false);
  });

  test('needs a start before the pause', () => {
    expect(cameBack([7, 8])).toBe(false);
  });
});

describe('the usual time', () => {
  test('counts sessions near the middle of their starts', () => {
    expect(sessionsAtUsualTime([480, 490, 470, 500, 485])).toBe(5);
  });

  test('is nothing before five sessions', () => {
    expect(sessionsAtUsualTime([480, 480, 480, 480])).toBe(0);
  });

  test('leaves out a session far from it', () => {
    expect(sessionsAtUsualTime([480, 490, 470, 500, 1200])).toBe(4);
  });
});

describe('an arrival', () => {
  const earned = stickersEarned({ ...EMPTY_HISTORY, checkInDays: [1], sessionDays: [1] } satisfies StickerHistory);

  test('is the latest unseen sticker', () => {
    expect(arrivalFor(earned, new Set(), null, '2026-01-02')).toBe('first-session');
  });

  test('is nothing once everything has been seen', () => {
    expect(arrivalFor(earned, new Set(earned), null, '2026-01-02')).toBeNull();
  });

  test('comes once a day at most', () => {
    expect(arrivalFor(earned, new Set(), '2026-01-02', '2026-01-02')).toBeNull();
  });
});

describe('the next session sticker', () => {
  const after = (days: number): StickerHistory => ({
    ...EMPTY_HISTORY,
    sessionDays: Array.from({ length: days }, (_, i) => i + 1),
  });
  const next = (days: number) => {
    const history = after(days);
    return nextSessionSticker(history, new Set(stickersEarned(history)));
  };

  test('is the first session before any', () => {
    expect(next(0)).toMatchObject({ sticker: { id: 'first-session' }, have: 0, need: 1 });
  });

  test('counts toward five after the first', () => {
    expect(next(3)).toMatchObject({ sticker: { id: 'sessions-5' }, have: 3, need: 5 });
  });

  test('moves on once a sticker is in', () => {
    expect(next(5)).toMatchObject({ sticker: { id: 'sessions-10' }, have: 5, need: 10 });
  });

  test('is nothing once fifty are in', () => {
    expect(next(50)).toBeNull();
  });

  test('follows the album when it holds more than the history shows', () => {
    const history = after(2);
    const kept = new Set([...stickersEarned(history), 'sessions-5' as const]);
    expect(nextSessionSticker(history, kept)).toMatchObject({ sticker: { id: 'sessions-10' }, have: 2, need: 10 });
  });
});
