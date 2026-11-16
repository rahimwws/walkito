import { describe, expect, test } from 'bun:test';

import { LANGUAGES } from '@/shared/lib/i18n';

import {
  DAY_ONE_AFTER_DAYS,
  DAY_ONE_REMINDERS,
  NO_DAY_ONE,
  dayOneMessage,
  dayOneTimes,
  settleDayOne,
  type DayOneState,
} from './day-one';
import { QUIET_FROM_MINUTES } from './limits';

const DAY_MS = 86_400_000;

/** A Monday afternoon: she met the paywall and put the phone down. */
const LEFT = new Date(2026, 10, 16, 15, 20).getTime();
/** Her reminder, set in the onboarding: quarter to eight. */
const MORNING = 7 * 60 + 45;

const at = (ms: number) => {
  const d = new Date(ms);
  return { day: d.getDate(), minutes: d.getHours() * 60 + d.getMinutes() };
};

describe('when the Day 1 reminders go out', () => {
  test('the morning after she left, then two days on, at her own time', () => {
    const [first, second] = dayOneTimes(0, LEFT, MORNING);
    expect(at(first)).toEqual({ day: 17, minutes: MORNING });
    expect(at(second)).toEqual({ day: 19, minutes: MORNING });
  });

  test('never the day she leaves, however early she left', () => {
    const early = new Date(2026, 10, 16, 6, 0).getTime();
    const [first] = dayOneTimes(0, early, MORNING);
    expect(at(first).day).toBe(17);
    expect(first - early).toBeGreaterThan(DAY_MS);
  });

  test('two at most, and none once both have gone out', () => {
    expect(DAY_ONE_REMINDERS).toBe(2);
    expect(DAY_ONE_AFTER_DAYS.length).toBe(DAY_ONE_REMINDERS);
    expect(dayOneTimes(0, LEFT, MORNING)).toHaveLength(2);
    expect(dayOneTimes(1, LEFT, MORNING)).toHaveLength(1);
    expect(dayOneTimes(2, LEFT, MORNING)).toEqual([]);
    expect(dayOneTimes(5, LEFT, MORNING)).toEqual([]);
  });

  test('the one left over after the first takes the later place', () => {
    const [only] = dayOneTimes(1, LEFT, MORNING);
    expect(at(only)).toEqual({ day: 19, minutes: MORNING });
  });

  test('a reminder set for late evening is held before the quiet hours', () => {
    const [first] = dayOneTimes(0, LEFT, 23 * 60);
    expect(at(first).minutes).toBe(QUIET_FROM_MINUTES - 30);
    expect(at(first).minutes).toBeLessThan(QUIET_FROM_MINUTES);
  });
});

describe('what has gone out', () => {
  const laid: DayOneState = { sent: 0, pending: dayOneTimes(0, LEFT, MORNING) };

  test('opened before the first: nothing went out, nothing is left waiting', () => {
    expect(settleDayOne(laid, LEFT + 60_000)).toEqual(NO_DAY_ONE);
  });

  test('opened between the two: one went out, and only one more may follow', () => {
    const back = settleDayOne(laid, laid.pending[0] + 3_600_000);
    expect(back).toEqual({ sent: 1, pending: [] });
    expect(dayOneTimes(back.sent, laid.pending[0] + 3_600_000, MORNING)).toHaveLength(1);
  });

  test('opened after both: that was all of them, for good', () => {
    const back = settleDayOne(laid, laid.pending[1] + 1);
    expect(back).toEqual({ sent: 2, pending: [] });
    expect(dayOneTimes(back.sent, laid.pending[1] + DAY_MS, MORNING)).toEqual([]);
  });

  test('leaving and coming back any number of times never makes a third', () => {
    let state = NO_DAY_ONE;
    let now = LEFT;
    let delivered = 0;
    for (let visit = 0; visit < 12; visit += 1) {
      // She leaves: what is still owed is laid.
      state = { sent: state.sent, pending: dayOneTimes(state.sent, now, MORNING) };
      // Sometimes she is back within the hour, sometimes days later.
      now += visit % 2 === 0 ? 3_600_000 : 4 * DAY_MS;
      delivered += state.pending.filter((due) => due <= now).length;
      state = settleDayOne(state, now);
    }
    expect(delivered).toBe(2);
    expect(state.sent).toBe(2);
  });
});

describe('what the Day 1 reminders say', () => {
  test('the English reads as written, with and without a name', () => {
    expect(dayOneMessage(1, 'Maria', 'en')).toEqual({ title: 'Your plan is ready, Maria', body: 'Day 1 takes 2 minutes.' });
    expect(dayOneMessage(1, null, 'en')).toEqual({ title: 'Your plan is ready', body: 'Day 1 takes 2 minutes.' });
    expect(dayOneMessage(2, 'Maria', 'en').title).toBe('Maria, Day 1 is here when you want it');
    expect(dayOneMessage(2, '  ', 'en').title).toBe('Day 1 is here when you want it');
  });

  test('every language has all four lines, whole, with the name where it is known', () => {
    for (const language of LANGUAGES) {
      for (const which of [1, 2] as const) {
        const named = dayOneMessage(which, 'Maria', language);
        const plain = dayOneMessage(which, undefined, language);
        for (const line of [named.title, named.body, plain.title, plain.body]) {
          expect(line.trim().length).toBeGreaterThan(0);
          expect(line).not.toMatch(/[{}]/);
        }
        expect(named.title).toContain('Maria');
        expect(plain.title).not.toContain('Maria');
        expect(plain.title).not.toMatch(/^[\s,]|,\s*$/);
      }
    }
  });

  test('no price, no deadline, no promise about her feet, in any language', () => {
    // What a reminder that points at a free session has no business saying:
    // money and discounts, hurry, and anything that claims a result.
    const never =
      /%|\$|€|£|₽|R\$|free|gratis|gratuit|kostenlos|бесплатн|discount|descuento|desconto|réduction|rabatt|sconto|скидк|offer|oferta|offre|angebot|offerta|last chance|hurry|expire|ends|only today|cure|heal|fix|relie|pain|dolor|dor\b|douleur|schmerz|dolore|боль|!/i;
    for (const language of LANGUAGES) {
      for (const which of [1, 2] as const) {
        const { title, body } = dayOneMessage(which, null, language);
        expect(`${language}: ${title}`).not.toMatch(never);
        expect(`${language}: ${body}`).not.toMatch(never);
      }
    }
  });

  test('the two are not the same message twice', () => {
    for (const language of LANGUAGES) {
      expect(dayOneMessage(1, null, language).title).not.toBe(dayOneMessage(2, null, language).title);
    }
  });
});
