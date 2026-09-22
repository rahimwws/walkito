import { describe, expect, test } from 'bun:test';

import { LANGUAGES, translatorFor, type Language } from '@/shared/lib/i18n';

import { messageFor, retestFollowUpBody, rotate } from './copy';
import type { DaySignals, NotificationKind } from './ladder';

/**
 * Every promise this file guards has to hold in three languages, and the two
 * ways of checking that pull in opposite directions.
 *
 * Anything *structural* — no placeholder survives, the number is present, a
 * figure-free fallback is reached — is asserted for every language, because
 * those are properties of the mechanism and a Russian user is owed them too.
 *
 * Anything that reads words asks for its language by name. `messageFor` now
 * takes a `Language`, so nothing here depends on what the device happens to
 * report: a test that said `toContain('steps back')` without saying *English*
 * would pass today, fail the moment the runner's locale changed, and never
 * have checked Russian at all. The banned-word lists are per language for the
 * same reason — "never cheerful after pain" is not a fact about the string
 * "great", and a Russian list of forbidden praise is the only way the rule
 * means anything in Russian.
 */

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

const ALL_KINDS = [
  'flare', 'load', 'gait', 'retest', 'block', 'plan', 'session', 'checkin', 'streak', 'winback',
] as const satisfies readonly NotificationKind[];

/** Every body a kind produces over a fortnight in one language. */
function bodies(kind: NotificationKind, language: Language, overrides: Partial<DaySignals> = {}) {
  return FORTNIGHT.map(
    (dateKey) => messageFor(kind, base({ dateKey, ...overrides }), language)?.body ?? '',
  );
}

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

  /**
   * The modulo is taken against the array handed in, never a constant, so a
   * set of any size stays in bounds. This is what would let one language ship
   * a different number of variants from another without the call site knowing.
   */
  test('stays inside a set of any size', () => {
    for (let size = 1; size <= 7; size += 1) {
      const lines = Array.from({ length: size }, (_, i) => i);
      for (const key of FORTNIGHT) expect(lines).toContain(rotate(lines, key, 11));
    }
  });
});

describe('every language gets a whole sentence', () => {
  /** The headline guarantee: no kind, on any day, in any language, ships a
   * `{placeholder}` or an empty body. */
  test('no placeholder and no blank, every kind, every day, every language', () => {
    for (const language of LANGUAGES) {
      for (const kind of ALL_KINDS) {
        for (const body of bodies(kind, language, {
          opensBlock: 'Strengthen',
          stepsYesterday: 14200,
          stepRatio: 1.5,
          painYesterday: 8,
          asymmetryDays: 4,
          streak: 9,
          daysAway: 10,
          planReason: 'flare',
        })) {
          expect(body, `${language} produced no body`).not.toBe('');
          expect(body, `${language}: ${body}`).not.toContain('{');
          expect(body.trim().length).toBeGreaterThan(0);
        }
      }
    }
  });

  /** The title is the product's name and is deliberately not translated. */
  test('the title is the app name in every language', () => {
    for (const language of LANGUAGES) {
      expect(messageFor('session', base(), language)?.title).toBe('Walkito');
    }
  });

  test('the words actually change with the language', () => {
    const [en, ru, es] = LANGUAGES.map((l) => messageFor('checkin', base(), l)?.body);
    expect(new Set([en, ru, es]).size).toBe(3);
  });

  test('the retest tail is translated too', () => {
    const tails = LANGUAGES.map((l) => retestFollowUpBody(l));
    expect(new Set(tails).size).toBe(3);
    for (const tail of tails) expect(tail.trim().length).toBeGreaterThan(0);
  });

  /** Rotation has to be visible in every catalogue — a language that answered
   * with one line all fortnight would have lost the variants. */
  test('each rotating kind says more than one thing in every language', () => {
    for (const language of LANGUAGES) {
      for (const kind of ['session', 'flare', 'retest', 'checkin'] as const) {
        expect(new Set(bodies(kind, language, { painYesterday: 8 })).size).toBeGreaterThan(1);
      }
    }
  });
});

describe('the morning nudge', () => {
  /**
   * The promise, checked rather than trusted. "No streaks to guilt you back"
   * means the streak may not appear anywhere but its own row — and a morning
   * nudge is the row most likely to pick one up by accident.
   */
  const STREAK_WORD: Record<Language, string> = { en: 'streak', ru: 'подряд', es: 'racha' };

  test('never mentions the streak, whatever the streak is', () => {
    for (const language of LANGUAGES) {
      for (const body of bodies('session', language, { streak: 47 })) {
        expect(body).not.toContain('47');
        expect(body.toLowerCase()).not.toContain(STREAK_WORD[language]);
      }
    }
  });

  test('names the minutes the day actually asks for', () => {
    for (const language of LANGUAGES) {
      expect(bodies('session', language, { minutes: 6 }).some((b) => b.includes('6'))).toBe(true);
    }
  });

  /** English, named: the day-number line reads as a whole sentence rather than
   * as three fragments glued together. */
  test('the English day line reads as written', () => {
    const t = translatorFor('en');
    expect(t('notifications.sessionDay', { day: 17, kind: t('notifications.kindStrength'), count: 7 }))
      .toBe('Day 17. Strength work. 7 minutes.');
  });

  /**
   * The kind arrives as an id from the program and is rendered from the
   * catalogue as a whole noun phrase — "Strength work" only parses in English,
   * and a day whose kind never resolved still has to say something.
   */
  test('every day kind has a label, the missing one included', () => {
    // Long enough a span that the rotation is certain to reach the day line.
    const span = Array.from({ length: 40 }, (_, i) => {
      const d = new Date(2026, 2, 1 + i);
      const m = `${d.getMonth() + 1}`.padStart(2, '0');
      return `2026-${m}-${`${d.getDate()}`.padStart(2, '0')}`;
    });

    for (const language of LANGUAGES) {
      for (const kind of ['strength', 'mobility', 'balance', 'recovery', null]) {
        const dayLine = span
          .map((dateKey) => messageFor('session', base({ dateKey, kind }), language)?.body ?? '')
          .find((body) => body.includes('17'));
        expect(dayLine, `${language} never reached the day line for ${kind}`).toBeDefined();
        expect(dayLine).not.toContain('{');
        // The id itself must never leak onto a lock screen.
        if (kind != null) expect(dayLine).not.toContain(kind);
      }
    }
  });
});

describe('flare support', () => {
  const flare = { painYesterday: 8, minutes: 3 };

  /**
   * Nothing cheerful after pain, in the language the user reads. Checking the
   * English list against a Russian body would have passed trivially and proved
   * nothing, which is why each language brings its own praise words.
   */
  const BANNED: Record<Language, readonly string[]> = {
    en: ['great', 'awesome', 'well done', 'keep it up', 'nice', 'you got this'],
    ru: ['отлично', 'молодец', 'супер', 'так держать', 'здорово', 'вы справитесь'],
    es: ['genial', 'bien hecho', 'sigue así', 'excelente', 'ánimo', 'tú puedes'],
  };
  /** Punctuation and emoji are banned everywhere: an exclamation mark is
   * cheerful in all three. */
  const BANNED_EVERYWHERE = ['!', '¡', '🎉', '💪', '🔥'];

  test('never cheerful, and never congratulatory', () => {
    for (const language of LANGUAGES) {
      for (const body of bodies('flare', language, flare)) {
        const lower = body.toLowerCase();
        for (const word of [...BANNED[language], ...BANNED_EVERYWHERE]) {
          expect(lower, `${language}: ${body}`).not.toContain(word);
        }
      }
    }
  });

  test('names the smaller ask', () => {
    for (const language of LANGUAGES) {
      expect(bodies('flare', language, flare).some((b) => b.includes('3'))).toBe(true);
    }
  });

  /** The Russian minute forms, which are the reason the catalogue is typed the
   * way it is: 3 takes `few`, 5 takes `many`, and a flat translation renders
   * "3 минут" on the morning after a flare. */
  test('Russian agrees the minutes with the number', () => {
    const t = translatorFor('ru');
    expect(t('notifications.flareRough', { count: 1 })).toContain('1 минута');
    expect(t('notifications.flareRough', { count: 3 })).toContain('3 минуты');
    expect(t('notifications.flareRough', { count: 5 })).toContain('5 минут');
  });
});

describe('load warning', () => {
  const heavy = { stepsYesterday: 14200, stepRatio: 1.4 };

  test('quotes the step count grouped for the language', () => {
    for (const language of LANGUAGES) {
      const grouped = (14200).toLocaleString(language);
      expect(bodies('load', language, heavy).some((b) => b.includes(grouped))).toBe(true);
    }
    // Not a vacuous check: the three languages group thousands differently.
    expect((14200).toLocaleString('en')).not.toBe((14200).toLocaleString('es'));
  });

  test('quotes the overshoot', () => {
    for (const language of LANGUAGES) {
      expect(bodies('load', language, { ...heavy, stepRatio: 1.6 }).some((b) => b.includes('60')))
        .toBe(true);
    }
  });

  /**
   * The line that names a figure is unusable without one, so it must not be
   * reachable when HealthKit has given us nothing. Asserted against the two
   * figure-free entries by identity rather than by hunting for English words,
   * which is both stronger and true in every language.
   */
  test('falls back to a line with no figure when steps are unknown', () => {
    for (const language of LANGUAGES) {
      const t = translatorFor(language);
      const figureFree = [t('notifications.loadBigDay'), t('notifications.loadBackOff')];
      for (const body of bodies('load', language, { stepsYesterday: null, stepRatio: 1.6 })) {
        expect(figureFree, `${language}: ${body}`).toContain(body);
      }
    }
  });
});

describe('gait change', () => {
  /**
   * The wording rules are the whole of this row's safety. Asymmetry does not
   * predict injury, so anything diagnostic-adjacent is both unevidenced and,
   * for this audience, frightening. One list per language, because the danger
   * is the claim and not the English word for it.
   */
  const BANNED: Record<Language, readonly string[]> = {
    en: ['limp', 'compensat', 'injur', 'damage', 'average', 'normal', 'most people'],
    ru: ['хром', 'компенс', 'травм', 'поврежд', 'средн', 'норм', 'большинств'],
    es: ['cojea', 'compens', 'lesión', 'lesion', 'daño', 'promedio', 'normal', 'la mayoría'],
  };

  test('never diagnoses, never predicts, never compares to anyone else', () => {
    for (const language of LANGUAGES) {
      for (const body of bodies('gait', language, { asymmetryDays: 4 })) {
        for (const word of BANNED[language]) {
          expect(body.toLowerCase(), `${language}: ${body}`).not.toContain(word);
        }
      }
    }
  });

  test('names the run of days it is talking about', () => {
    for (const language of LANGUAGES) {
      expect(bodies('gait', language, { asymmetryDays: 4 }).some((b) => b.includes('4'))).toBe(true);
    }
  });
});

describe('plan changed', () => {
  test('explains the specific reason, not that something changed', () => {
    for (const language of LANGUAGES) {
      const reasons = ['flare', 'spike', 'heavy-day', 'return', 'plan'];
      const said = reasons.map((planReason) => messageFor('plan', base({ planReason }), language)?.body);
      expect(new Set(said).size, `${language} reused a line`).toBe(reasons.length);
    }
  });

  /** English, named: the flare reason says which way the plan moved. */
  test('the English flare reason says the plan stepped back', () => {
    expect(messageFor('plan', base({ planReason: 'flare' }), 'en')?.body).toContain('steps back');
  });

  test('an unknown reason still produces a sentence', () => {
    for (const language of LANGUAGES) {
      const body = messageFor('plan', base({ planReason: 'something-new' }), language)?.body ?? '';
      expect(body.length).toBeGreaterThan(0);
      expect(body).not.toContain('{');
      // Falls through to the plain "load goes back up" line, not to nothing.
      expect(body).toBe(messageFor('plan', base({ planReason: 'plan' }), language)?.body ?? '');
    }
  });
});

describe('streak protection', () => {
  /** The one row allowed to say the number — and only ever as what one tap
   * keeps, never as what is about to be lost. */
  const BANNED: Record<Language, readonly string[]> = {
    en: ['lost', 'lose', 'don’t break', 'about to'],
    ru: ['потер', 'терят', 'сгор', 'прерв'],
    es: ['pierd', 'perder', 'se acaba', 'rompas'],
  };

  test('states what a tap keeps, never what is lost', () => {
    for (const language of LANGUAGES) {
      for (const body of bodies('streak', language, { streak: 12 })) {
        expect(body, `${language}: ${body}`).toContain('12');
        for (const word of BANNED[language]) {
          expect(body.toLowerCase(), `${language}: ${body}`).not.toContain(word);
        }
      }
    }
  });

  /** 21 and 22 come back to `one` and `few` after a fortnight of `many`, which
   * is exactly the range a protected streak lives in. */
  test('Russian agrees the day count with the number', () => {
    const t = translatorFor('ru');
    expect(t('notifications.streakTap', { count: 5 })).toBe('5 дней. Одно касание.');
    expect(t('notifications.streakTap', { count: 21 })).toBe('21 день. Одно касание.');
    expect(t('notifications.streakTap', { count: 22 })).toBe('22 дня. Одно касание.');
  });
});

describe('win-back', () => {
  test('one line each for three, ten and thirty days', () => {
    for (const language of LANGUAGES) {
      const said = [3, 10, 30].map(
        (daysAway) => messageFor('winback', base({ daysAway }), language)?.body,
      );
      expect(new Set(said).size, `${language} reused a line`).toBe(3);
    }
  });

  test('an unknown absence falls back to the last line', () => {
    for (const language of LANGUAGES) {
      expect(messageFor('winback', base({ daysAway: 99 }), language)?.body).toBe(
        messageFor('winback', base({ daysAway: 30 }), language)?.body,
      );
    }
  });

  /** The ten-day line restates the app's own rule, which is what quietly
   * removes the shame of coming back. Checked in each language against that
   * catalogue's own entry, so no language can quietly drop it. */
  test('the ten-day line is the one that says the plan runs on dates', () => {
    for (const language of LANGUAGES) {
      expect(messageFor('winback', base({ daysAway: 10 }), language)?.body).toBe(
        translatorFor(language)('notifications.winbackDay10', { day: 17 }),
      );
    }
    expect(messageFor('winback', base({ daysAway: 10 }), 'en')?.body).toContain(
      'dates, not attendance',
    );
  });
});

describe('maintenance', () => {
  test('swaps the morning nudge for the holding tone', () => {
    for (const language of LANGUAGES) {
      const building = messageFor('session', base({ dateKey: '2026-03-12' }), language)?.body;
      const holding = messageFor(
        'session',
        base({ dateKey: '2026-03-12', maintenance: true, minutes: 8 }),
        language,
      )?.body;
      expect(building, language).not.toBe(holding);
    }
  });
});

describe('the block row', () => {
  test('says nothing at all when no block opens', () => {
    for (const language of LANGUAGES) {
      expect(messageFor('block', base({ opensBlock: null }), language)).toBeNull();
    }
  });

  /** Block names come from `@/entities/program` and are not translated
   * anywhere yet, so they arrive in English in all three catalogues. Pinned so
   * that translating them later is a test failure rather than a surprise. */
  test('carries the block name through untranslated', () => {
    for (const language of LANGUAGES) {
      for (const body of bodies('block', language, { opensBlock: 'Strengthen' })) {
        expect(body, `${language}: ${body}`).toContain('Strengthen');
      }
    }
  });
});
