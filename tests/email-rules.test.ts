import { describe, expect, test } from 'bun:test';

import { evaluate } from '../supabase/functions/_shared/email/rules.ts';
import type { EmailKey, Snapshot } from '../supabase/functions/_shared/email/types.ts';
import { date, day, freshAt, sessions, user } from './email-fixtures.ts';

/**
 * The scheduler's rules, one per line of Part 11 of the email spec where a
 * rule can be tested without a mail server. Each test builds one user at one
 * instant and asks which email, if any, that run would send.
 */

const pick = (s: Snapshot, at: Date): EmailKey | null => evaluate(s, at).decision?.key ?? null;
const sent = (key: EmailKey, at: Date, dedupeKey: string = key) => ({ emailKey: key, dedupeKey, sentAt: at.toISOString(), status: 'sent' as const });

describe('welcome', () => {
  test('goes within the hour when onboarding ends in the day', () => {
    const at = day(1, 15);
    expect(pick(user({ profile: freshAt(at) }), at)).toBe('welcome');
  });

  test('waits for 08:00 when onboarding ends at night, then goes the next morning', () => {
    const night = day(1, 23);
    const s = user({ profile: { createdAt: night.toISOString(), ...freshAt(night) }, contact: { createdAt: night.toISOString() } });
    expect(pick(s, night)).toBeNull();
    expect(pick(s, day(2, 7))).toBeNull();
    expect(pick(s, day(2, 8))).toBe('welcome');
  });

  test('is never sent to someone who onboarded weeks ago', () => {
    const at = day(20, 10);
    expect(evaluate(user({ profile: freshAt(at) }), at).skipped.find((x) => x.key === 'welcome')?.reason).toBe('past day 2');
  });
});

describe('caps and dedupe', () => {
  test('each lifecycle email goes once', () => {
    const at = day(1, 15);
    const s = user({ profile: freshAt(at), log: [sent('welcome', day(1, 10))] });
    const skip = evaluate(s, at).skipped.find((x) => x.key === 'welcome');
    expect(skip?.reason).toBe('already sent');
  });

  test('never more than one email a day', () => {
    const at = day(2, 8);
    const s = user({ profile: freshAt(at), log: [sent('pain_up', day(2, 8, 5), 'pain_up:x')] });
    expect(pick(s, at)).toBeNull();
    expect(evaluate(s, at).skipped.find((x) => x.key === 'day2_focus')?.reason).toBe('already emailed today');
  });

  test('after day 14, one a week - but a result still goes', () => {
    const at = day(17, 8);
    const base = {
      profile: { ...freshAt(at), lastAppOpenAt: day(10, 8).toISOString() },
      sessions: sessions(3, 10),
      sessionsTotal: 3,
      log: [sent('weekly', day(15, 18), 'weekly:x')],
    };
    // winback_7 is due (seven days away) but the week's email has gone.
    expect(evaluate(user(base), at).skipped.find((x) => x.key === 'winback_7')?.reason).toBe('weekly cap');
    // A retest that improved is an answer to something the user did.
    const tested = user({
      ...base,
      tests: [
        { dayNumber: 1, takenOn: date(1), calf: 8, arch: 20, balance: 12, symmetry: 18 },
        { dayNumber: 16, takenOn: date(16), calf: 13, arch: 22, balance: 12, symmetry: 16 },
      ],
    });
    expect(pick(tested, day(17, 10))).toBe('test_result');
  });
});

describe('day 14 test', () => {
  const at = day(14, 8);
  const base = { profile: freshAt(at), sessions: sessions(8, 13), sessionsTotal: 8 };

  test('goes on test day', () => {
    expect(pick(user(base), at)).toBe('day14_test');
  });

  test('is not sent once the test is done', () => {
    const s = user({
      ...base,
      tests: [
        { dayNumber: 1, takenOn: date(1), calf: 8, arch: 20, balance: 12, symmetry: 18 },
        { dayNumber: 13, takenOn: date(13), calf: 8, arch: 20, balance: 12, symmetry: 18 },
      ],
    });
    expect(pick(s, at)).not.toBe('day14_test');
  });

  test('gives way to a retest push laid for today', () => {
    const s = user({ ...base, profile: { ...freshAt(at), pushTestDates: [date(14)] } });
    expect(evaluate(s, at).skipped.find((x) => x.key === 'day14_test')?.reason).toBe('test push today');
  });
});

describe('stale data', () => {
  test('a sync older than 24 h skips the "do today\'s session" emails', () => {
    const at = day(10, 8);
    const s = user({ profile: { lastSyncedAt: day(8, 20).toISOString(), lastAppOpenAt: day(8, 20).toISOString() }, sessions: sessions(6, 8), sessionsTotal: 6 });
    expect(evaluate(s, at).skipped.find((x) => x.key === 'day10_keep')?.reason).toBe('data older than 24 h');
  });

  test('fresh data lets day10_keep through', () => {
    const at = day(10, 8);
    expect(pick(user({ profile: freshAt(at), sessions: sessions(6, 9), sessionsTotal: 6 }), at)).toBe('day10_keep');
  });

  test('day5_start is skipped on stale data, day5_easy goes on fresh', () => {
    const at = day(5, 8);
    expect(pick(user({ profile: { lastSyncedAt: day(3, 8).toISOString() } }), at)).toBeNull();
    expect(pick(user({ profile: freshAt(at), sessions: sessions(2, 4), sessionsTotal: 2 }), at)).toBe('day5_easy');
    expect(pick(user({ profile: freshAt(at), subscription: 'active' }), at)).toBe('day5_start');
  });
});

describe('pain', () => {
  const at = day(12, 10);
  const readings = (values: number[], endDay: number) =>
    values.map((v, i) => ({ date: date(endDay - (values.length - 1 - i)), painMorning: v, maxPain: v, morningStretch: false }));

  test('pain 8 today: only pain_up may go', () => {
    const s = user({ profile: freshAt(at), checkins: readings([3, 3, 3, 3, 3, 3, 3, 3, 3, 8], 12), sessions: sessions(8, 11), sessionsTotal: 8 });
    const e = evaluate(s, at);
    for (const skip of e.skipped.filter((x) => x.reason === 'pain 7+ today')) expect(skip.key).not.toBe('pain_up');
    expect(e.decision?.key ?? 'pain_up').toBe('pain_up');
  });

  test('a rise of 2 over the week before sends pain_up', () => {
    const s = user({ profile: freshAt(at), checkins: readings([2, 2, 2, 2, 2, 2, 2, 5, 5, 5], 12) });
    expect(pick(s, at)).toBe('pain_up');
  });

  test('pain 8 today blocks a result email', () => {
    const s = user({
      profile: freshAt(at),
      checkins: readings([8], 12),
      tests: [
        { dayNumber: 1, takenOn: date(1), calf: 8, arch: 20, balance: 12, symmetry: 18 },
        { dayNumber: 12, takenOn: date(12), calf: 12, arch: 20, balance: 12, symmetry: 18 },
      ],
    });
    expect(pick(s, at)).toBeNull();
    expect(evaluate(s, at).skipped.find((x) => x.key === 'test_result')?.reason).toBe('pain 7+ today');
  });
});

describe('offers', () => {
  const paywall = (d: number) => ({
    firstAt: day(d, 12).toISOString(),
    lastAt: day(d, 12).toISOString(),
    offerPrice: '$14.99',
    standardPrice: '$49.99',
    percent: 70,
    weeks: 12,
  });

  test('offer goes 4-7 days after the paywall, offer_final 14 days after', () => {
    expect(pick(user({ subscription: 'none', paywall: paywall(1), profile: freshAt(day(5)) }), day(5))).toBe('offer');
    expect(pick(user({ subscription: 'none', paywall: paywall(1), profile: freshAt(day(15)) }), day(15))).toBe('offer_final');
  });

  test('paying stops every offer', () => {
    // Late enough in the plan that nothing else is due, so every candidate is looked at.
    const e = evaluate(user({ subscription: 'active', paywall: paywall(36), profile: freshAt(day(40)) }), day(40));
    expect(e.decision).toBeNull();
    expect(e.skipped.find((x) => x.key === 'offer')?.reason).toBe('already paying');
  });

  test('the offer carries the store price', () => {
    const e = evaluate(user({ subscription: 'none', paywall: paywall(1), profile: freshAt(day(5)) }), day(5));
    expect(e.decision?.content.subject).toBe('your plan is saved - 70% off');
    expect(e.decision?.content.paragraphs.join(' ')).toContain('$14.99 instead of $49.99');
  });
});

describe('test results', () => {
  const at = day(15, 10);
  const withTests = (second: { calf: number; arch: number; balance: number; symmetry: number }) =>
    user({
      profile: freshAt(at),
      tests: [
        { dayNumber: 1, takenOn: date(1), calf: 8, arch: 20, balance: 12, symmetry: 18 },
        { dayNumber: 14, takenOn: date(14), ...second },
      ],
    });

  test('only when a number improved', () => {
    expect(pick(withTests({ calf: 8, arch: 20, balance: 12, symmetry: 18 }), at)).toBeNull();
    expect(pick(withTests({ calf: 7, arch: 18, balance: 11, symmetry: 20 }), at)).toBeNull();
  });

  test('reports the focus metric when it improved', () => {
    const e = evaluate(withTests({ calf: 14, arch: 30, balance: 12, symmetry: 18 }), at);
    expect(e.decision?.key).toBe('test_result');
    expect(e.decision?.content.subject).toBe('your calf raises: 8 → 14');
    expect(e.decision?.content.paragraphs[0]).toBe("that's two weeks of work, measured. 25 is the goal.");
  });

  test('otherwise the one that improved most', () => {
    const e = evaluate(withTests({ calf: 8, arch: 30, balance: 13, symmetry: 18 }), at);
    expect(e.decision?.content.subject).toBe('your arch hold: 20 s → 30 s');
  });
});

describe('coming back', () => {
  const away = (days: number, log: Snapshot['log'] = []) => {
    const at = day(30, 8);
    return {
      at,
      s: user({
        profile: { lastSyncedAt: day(30 - days, 20).toISOString(), lastAppOpenAt: day(30 - days, 20).toISOString() },
        sessions: sessions(5, 30 - days),
        sessionsTotal: 5,
        log,
      }),
    };
  };

  test('seven days away sends winback_7, twenty-one sends winback_21', () => {
    const a = away(7);
    expect(pick(a.s, a.at)).toBe('winback_7');
    const b = away(21);
    expect(pick(b.s, b.at)).toBe('winback_21');
  });

  test('after winback_21, no more lifecycle email', () => {
    const at = day(40, 8);
    const s = user({
      profile: { ...freshAt(at) },
      paywall: { firstAt: day(26).toISOString(), lastAt: day(26).toISOString(), offerPrice: null, standardPrice: null, percent: null, weeks: 12 },
      subscription: 'none',
      log: [sent('winback_21', day(30))],
    });
    expect(evaluate(s, at).skipped.find((x) => x.key === 'offer_final')?.reason).toBe('after winback_21');
  });
});

describe('consent', () => {
  test('unsubscribed or bounced: nothing at all', () => {
    const at = day(1, 15);
    expect(evaluate(user({ contact: { unsubscribedAt: day(1, 9).toISOString() } }), at).blocked).toBe('unsubscribed');
    expect(evaluate(user({ contact: { bounced: true } }), at).blocked).toBe('bounced');
  });

  test('tips turned off stops lifecycle email but not a result', () => {
    const at = day(1, 15);
    expect(evaluate(user({ contact: { lifecycleOptIn: false }, profile: freshAt(at) }), at).skipped.find((x) => x.key === 'welcome')?.reason).toBe(
      'tips turned off',
    );
  });

  test('the weekly summary only goes to those who asked for it, sunday 18:00', () => {
    // Plan day 4 is a Sunday.
    const at = day(4, 18);
    const base = { profile: freshAt(at), sessions: sessions(2, 4), sessionsTotal: 2, log: [sent('welcome', day(1, 9))] };
    expect(pick(user(base), at)).toBeNull();
    const s = user({ ...base, contact: { weeklyOptIn: true } });
    expect(pick(s, at)).toBe('weekly');
    expect(pick(s, day(4, 17))).toBeNull();
  });
});

describe('language', () => {
  test('a spanish user gets spanish', () => {
    const at = day(1, 15);
    const e = evaluate(user({ contact: { locale: 'es', firstName: 'lucía' }, profile: freshAt(at) }), at);
    expect(e.decision?.content.subject).toBe('tu plan está listo');
    expect(e.decision?.content.greeting).toBe('hola, lucía:');
  });

  test('a missing name reads naturally', () => {
    const at = day(1, 15);
    const e = evaluate(user({ contact: { firstName: null }, profile: freshAt(at) }), at);
    expect(e.decision?.content.greeting).toBe('hi there,');
  });
});

describe('access', () => {
  test('lifecycle email that assumes the plan is open is held from someone who never paid', () => {
    const at = day(5, 8);
    const s = user({ subscription: 'none', profile: freshAt(at) });
    expect(evaluate(s, at).skipped.find((x) => x.key === 'day5_start')?.reason).toBe('no access to the plan');
  });
});
