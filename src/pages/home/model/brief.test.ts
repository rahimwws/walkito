/**
 * The morning line, in three languages.
 *
 * What this guards is the seam between the state ladder and the copy. The
 * central test is exhaustive rather than a spot check: every phrasing of every
 * state in every language is built against a real parameter bag, so a template
 * asking for a placeholder the builder does not supply fails here rather than
 * rendering "{drop}" to a user. The loop is over `BRIEF_STATES`, which means a
 * state added to the ladder and forgotten in a catalogue fails too.
 *
 * Runs under bun with no renderer. `brief.ts` takes its segment helpers from
 * `shared/ui/daily-brief/template`, which is type-only against the component,
 * so nothing in this module graph reaches React Native — the state the old
 * inline token building left this file unable to be in.
 */

import { describe, expect, test } from 'bun:test';

import { NO_SIGNALS, type HealthSignals } from '@/entities/health/model/metrics';
import { LANGUAGES, translatorFor, type Language } from '@/shared/lib/i18n';
import { BRIEF_EN } from '@/shared/lib/i18n/catalogue/en/home';
import { BRIEF_ES } from '@/shared/lib/i18n/catalogue/es/home';
import { BRIEF_RU } from '@/shared/lib/i18n/catalogue/ru/home';
import { buildBrief, type BriefSegment } from '@/shared/ui/daily-brief/template';

import { BRIEF_STATES, readBrief, type BriefInput, type BriefState } from './brief-state';
import { briefParams, briefTokens } from './brief';

/** Reads a built line back as a sentence, so a test can assert on the words
 * rather than on six token objects. */
function say(tokens: readonly { text: string; tail?: string }[]): string {
  return tokens.map((token) => `${token.text}${token.tail ?? ''}`).join(' ');
}

const TABLES: Record<Language, Record<string, readonly (readonly BriefSegment[])[]>> = {
  en: BRIEF_EN,
  ru: BRIEF_RU,
  es: BRIEF_ES,
};

/** A phone that has granted everything and had time to learn. Without it the
 * ladder answers "no-data" to most inputs, which is correct and unhelpful. */
const READY: HealthSignals = { ...NO_SIGNALS, availability: 'ready' };

/** The same phone, with a figure in every field a sentence can quote. */
const FULL: HealthSignals = {
  ...READY,
  asymmetryToday: 7.4,
  asymmetryBaseline: 4.2,
  stepsYesterday: 14_231,
  flightsYesterday: 18,
  longestRunYesterdayKm: 12.4,
  sleepMeanMin: 380,
};

const BASE: BriefInput = {
  name: '',
  cursor: 20,
  todayPain: 1,
  doneToday: false,
  streak: 5,
  health: READY,
  hoursOnFeet: 9,
  onFeetThreshold: 7,
};

describe('coverage', () => {
  /** Every state has somewhere to be said from, in every language. */
  for (const language of LANGUAGES) {
    test(`${language} has at least one phrasing of every state`, () => {
      for (const state of BRIEF_STATES) {
        const variants = TABLES[language][state];
        expect(Array.isArray(variants), `${language} has no entry for ${state}`).toBe(true);
        expect(variants.length, `${language} ${state} has no phrasings`).toBeGreaterThan(0);
      }
    });
  }

  /** And nothing beyond it. A mistyped state key would sit in the catalogue
   * unreachable — the type check cannot see it, because extra properties pass
   * through a variable assignment. */
  for (const language of LANGUAGES) {
    test(`${language} has no phrasings for a state that does not exist`, () => {
      expect(Object.keys(TABLES[language]).sort()).toEqual([...BRIEF_STATES].sort());
    });
  }
});

describe('every phrasing of every state renders', () => {
  // Two bags: one where the phone supplied everything, one where it supplied
  // nothing. The second is the common case for a user who declined Health, and
  // it has to produce a sentence rather than the word "null".
  const bags = [
    { label: 'with data', input: { ...BASE, health: FULL } },
    { label: 'with nothing', input: { ...BASE, health: NO_SIGNALS, hoursOnFeet: null } },
  ] as const;

  for (const language of LANGUAGES) {
    for (const bag of bags) {
      test(`${language}, ${bag.label}`, () => {
        const params = briefParams(
          bag.input,
          readBrief(bag.input),
          translatorFor(language),
          language,
        );

        for (const state of BRIEF_STATES) {
          const variants = TABLES[language][state];
          variants.forEach((segments, index) => {
            const where = `${language} ${state}[${index}]`;
            const line = say(buildBrief(segments, params, { capitalise: true }));

            expect(line.trim().length, `${where} is empty`).toBeGreaterThan(0);
            // The failure this catches: a template asking for a param the
            // builder does not supply, rendered verbatim to a user.
            expect(line, `${where} left a placeholder unfilled`).not.toContain('{');
            expect(line, `${where} printed an undefined`).not.toContain('undefined');
          });
        }
      });
    }
  }
});

describe('the ladder reaches the copy', () => {
  /** A handful of states driven end to end, so the lookup itself is exercised
   * and not only the templates. */
  const CASES: readonly { state: BriefState; input: BriefInput }[] = [
    { state: 'flare', input: { ...BASE, todayPain: 8 } },
    // Below FLARE (7) on purpose: the ladder tests pain >= 7 first, so a 9
    // here reaches 'flare' and this case never exercised the state it names.
    { state: 'pain-spike', input: { ...BASE, cursor: 40, todayPain: 6 } },
    { state: 'retest', input: { ...BASE, cursor: 13, hoursOnFeet: null } },
    { state: 'checkpoint-recap', input: { ...BASE, cursor: 28, hoursOnFeet: null } },
    { state: 'first-week', input: { ...BASE, cursor: 3, hoursOnFeet: null } },
    {
      state: 'big-run',
      input: { ...BASE, health: { ...FULL, bigRunYesterday: true } },
    },
    { state: 'stairs', input: { ...BASE, health: { ...FULL, flightsRatio: 4 } } },
    { state: 'on-feet', input: BASE },
    { state: 'poor-sleep', input: { ...BASE, hoursOnFeet: null, health: { ...FULL, sleepShort: true } } },
    {
      state: 'resting-hr',
      input: { ...BASE, hoursOnFeet: null, health: { ...READY, restingHRElevated: true } },
    },
    {
      state: 'slower-walk',
      input: { ...BASE, hoursOnFeet: null, health: { ...READY, walkingSpeedTrend: 'slower' } },
    },
    {
      state: 'gait-change',
      input: {
        ...BASE,
        hoursOnFeet: null,
        health: { ...FULL, asymmetryElevatedDays: 5, asymmetryDeltaPP: 3 },
      },
    },
    { state: 'done', input: { ...BASE, hoursOnFeet: null, doneToday: true } },
    { state: 'returning', input: { ...BASE, hoursOnFeet: null, daysAway: 6 } },
    {
      state: 'walk-back',
      input: { ...BASE, hoursOnFeet: null, health: { ...READY, walkingSpeedJustRecovered: true } },
    },
    {
      state: 'gait-recovered',
      input: {
        ...BASE,
        hoursOnFeet: null,
        health: { ...FULL, asymmetryJustNormalised: true },
      },
    },
    {
      state: 'no-data',
      input: { ...BASE, hoursOnFeet: null, health: { ...NO_SIGNALS, availability: 'none' } },
    },
    {
      state: 'learning',
      input: { ...BASE, hoursOnFeet: null, health: { ...NO_SIGNALS, availability: 'learning' } },
    },
    { state: 'quiet-session', input: { ...BASE, cursor: 18, hoursOnFeet: null } },
    { state: 'quiet-progress', input: { ...BASE, cursor: 19, hoursOnFeet: null } },
    {
      state: 'quiet-load-big',
      input: { ...BASE, cursor: 20, hoursOnFeet: null, health: { ...FULL, stepsRatio: 3 } },
    },
    { state: 'quiet-load-light', input: { ...BASE, cursor: 20, hoursOnFeet: null } },
    { state: 'quiet-shoes', input: { ...BASE, cursor: 21, hoursOnFeet: null } },
    { state: 'quiet-cadence', input: { ...BASE, cursor: 22, hoursOnFeet: null } },
    { state: 'quiet-horizon', input: { ...BASE, cursor: 23, hoursOnFeet: null } },
  ];

  for (const { state, input } of CASES) {
    test(`${state}`, () => {
      expect(readBrief(input).state).toBe(state);
      for (const language of LANGUAGES) {
        const line = say(briefTokens(input, language));
        expect(line.trim().length).toBeGreaterThan(0);
        expect(line).not.toContain('{');
      }
    });
  }
});

describe('the sentence opens correctly', () => {
  const flare: BriefInput = { ...BASE, todayPain: 8, cursor: 18 };

  /** With a name, the line starts on the name and the sentence continues after
   * the vocative comma — so it stays lowercase. */
  test('a name leads the line and is not capitalised over', () => {
    const tokens = briefTokens({ ...flare, name: 'Sam' }, 'en');
    expect(tokens[0]).toMatchObject({ kind: 'value', text: 'Sam', tail: ',' });
    expect(tokens[1].text).toBe('today is');
  });

  /** Without one, `buildBrief` restores the capital the templates are authored
   * without. Holds in all three languages. */
  for (const language of LANGUAGES) {
    test(`${language} capitalises the opening word when there is no name`, () => {
      const first = briefTokens(flare, language)[0].text;
      expect(first[0]).toBe(first[0].toLocaleUpperCase());
    });
  }

  /**
   * Capitalisation runs after substitution, which is the property that lets a
   * line open on a placeholder. `quiet-progress` opens on `{dayOfPlan}`.
   */
  test('a line opening on a placeholder still gets its capital', () => {
    const input = { ...BASE, cursor: 19, hoursOnFeet: null };
    expect(say(briefTokens(input, 'en'))).toStartWith('Day ');
    expect(say(briefTokens(input, 'ru'))).toStartWith('День ');
    expect(say(briefTokens(input, 'es'))).toStartWith('Día ');
  });
});

describe('plural agreement', () => {
  const done = (streak: number, language: Language) =>
    say(briefTokens({ ...BASE, cursor: 18, hoursOnFeet: null, doneToday: true, streak }, language));

  /** The three bugs this design exists to make impossible, at the counts that
   * used to expose them. */
  test('a first-ever session does not say "1 days in a row"', () => {
    expect(done(1, 'en')).toContain('1 day in a row');
    expect(done(1, 'en')).not.toContain('1 days');
  });

  test('a single flight does not say "1 flights"', () => {
    const line = say(
      briefTokens(
        {
          ...BASE,
          cursor: 18,
          hoursOnFeet: null,
          health: { ...READY, flightsRatio: 4, flightsYesterday: 1 },
        },
        'en',
      ),
    );
    expect(line).toContain('1 flight ');
    expect(line).not.toContain('1 flights');
  });

  test('the move count is printed once, not twice', () => {
    const line = say(briefTokens({ ...BASE, cursor: 3, hoursOnFeet: null }, 'en'));
    expect(line).not.toMatch(/\b(\d+) \1\b/);
  });

  /**
   * Russian, which is the whole reason the counts are rendered by the
   * catalogue rather than interpolated into a template.
   *
   * `done` is tested before `first-week`, so a first-ever session lands here
   * with a streak of one — and 11 takes the same form as 5 rather than the
   * form its last digit suggests.
   */
  test('Russian agrees a streak at 1, 3, 5, 11, 21 and 22', () => {
    expect(done(1, 'ru')).toContain('1 день подряд');
    expect(done(3, 'ru')).toContain('3 дня подряд');
    expect(done(5, 'ru')).toContain('5 дней подряд');
    expect(done(11, 'ru')).toContain('11 дней подряд');
    expect(done(21, 'ru')).toContain('21 день подряд');
    expect(done(22, 'ru')).toContain('22 дня подряд');
  });

  test('Spanish agrees a streak at 1 and 3', () => {
    expect(done(1, 'es')).toContain('1 día seguido');
    expect(done(3, 'es')).toContain('3 días seguidos');
  });

  /** The first-session case end to end: day one, nothing logged, Russian. */
  test('the first session reads correctly in Russian', () => {
    const line = say(
      briefTokens(
        { ...BASE, cursor: 0, hoursOnFeet: null, doneToday: true, streak: 1 },
        'ru',
      ),
    );
    expect(line).toContain('1 день подряд');
    expect(line[0]).toBe(line[0].toLocaleUpperCase());
  });
});

describe('numbers follow the language', () => {
  /** The old formatters hardcoded `en-US`: a comma for thousands and a point
   * for the decimal, printed to every reader. */
  test('thousands are grouped the way each language groups them', () => {
    const input = {
      ...BASE,
      cursor: 20,
      hoursOnFeet: null,
      health: { ...FULL, stepsRatio: 3 },
    };
    expect(say(briefTokens(input, 'en'))).toContain('14,231');
    // A non-breaking space, which is what CLDR specifies for Russian grouping
    // and what the formatter emits — a plain space here would let "14 231"
    // wrap across two lines mid-number.
    expect(say(briefTokens(input, 'ru'))).toContain('14 231');
    expect(say(briefTokens(input, 'es'))).toContain('14.231');
  });

  test('the decimal mark follows the language', () => {
    // Cursor 19 selects the phrasing that quotes the distance in all three.
    const input = {
      ...BASE,
      cursor: 19,
      hoursOnFeet: null,
      health: { ...FULL, bigRunYesterday: true },
    };
    expect(say(briefTokens(input, 'en'))).toContain('12.4 km');
    expect(say(briefTokens(input, 'ru'))).toContain('12,4 км');
    expect(say(briefTokens(input, 'es'))).toContain('12,4 km');
  });

  test('a duration spells its own units', () => {
    const input = {
      ...BASE,
      cursor: 18,
      hoursOnFeet: null,
      health: { ...FULL, sleepShort: true },
    };
    expect(say(briefTokens(input, 'en'))).toContain('6h 20m');
    expect(say(briefTokens(input, 'ru'))).toContain('6 ч 20 мин');
    expect(say(briefTokens(input, 'es'))).toContain('6 h 20 min');
  });

  /** A figure the phone never supplied is a dash, not "null" and not a zero
   * the app invented. */
  test('a missing figure is a dash', () => {
    const input = {
      ...BASE,
      cursor: 19,
      hoursOnFeet: null,
      health: { ...READY, bigRunYesterday: true },
    };
    expect(say(briefTokens(input, 'en'))).toContain('—');
  });
});

describe('variant rotation', () => {
  /**
   * The reason rotation moved out of the copy layer. The modulus used to be
   * fixed at three because every English state happened to have three
   * phrasings; a language with two would have indexed past the end and
   * returned undefined.
   */
  test('a locale may ship fewer phrasings than English', () => {
    expect(BRIEF_EN['walk-back'].length).toBe(3);
    expect(BRIEF_RU['walk-back'].length).toBe(2);
    expect(BRIEF_ES['gait-recovered'].length).toBe(2);
  });

  test('the short list still rotates, and never runs off the end', () => {
    const lines = new Set(
      Array.from({ length: 8 }, (_, i) =>
        say(
          briefTokens(
            {
              ...BASE,
              cursor: 18 + i,
              hoursOnFeet: null,
              health: { ...READY, walkingSpeedJustRecovered: true },
            },
            'ru',
          ),
        ),
      ),
    );
    expect(lines.size).toBe(2);
    for (const line of lines) expect(line.length).toBeGreaterThan(0);
  });

  test('the line is stable within a day and changes across days', () => {
    const at = (cursor: number) => say(briefTokens({ ...BASE, cursor, todayPain: 8 }, 'en'));
    expect(at(20)).toBe(at(20));
    expect(new Set([at(20), at(21), at(22)]).size).toBe(3);
  });
});

describe('clinical honesty', () => {
  /**
   * Every health-derived line compares the person to themselves. These are the
   * words that would mean the app had inferred a condition from a metric Apple
   * itself labels *estimated*.
   */
  const FORBIDDEN: Record<Language, readonly string[]> = {
    en: ['limping', 'compensating', 'abnormal', 'too high', 'diagnos'],
    ru: ['хрома', 'компенсир', 'патолог', 'диагноз'],
    es: ['cojea', 'cojera', 'compensando', 'anormal', 'patológic', 'diagnóstic'],
  };

  const HEALTH_STATES: readonly BriefState[] = [
    'gait-change',
    'slower-walk',
    'on-feet',
    'resting-hr',
    'poor-sleep',
    'walk-back',
    'gait-recovered',
    'quiet-load-big',
  ];

  for (const language of LANGUAGES) {
    test(`${language} never names a condition`, () => {
      const params = briefParams(BASE, readBrief(BASE), translatorFor(language), language);
      for (const state of HEALTH_STATES) {
        for (const segments of TABLES[language][state]) {
          const line = say(
            buildBrief(segments, params, { capitalise: true }),
          ).toLocaleLowerCase();
          for (const word of FORBIDDEN[language]) {
            expect(line.includes(word), `${language} ${state} says "${word}"`).toBe(false);
          }
        }
      }
    });
  }

  /** The one line that cites a finding keeps its hedge in translation —
   * "about half", not "half". */
  test('the research line stays hedged', () => {
    const at = (language: Language) => {
      const params = briefParams(BASE, readBrief(BASE), translatorFor(language), language);
      return say(buildBrief(TABLES[language]['checkpoint-recap'][1], params, { capitalise: true }));
    };
    expect(at('en')).toContain('about');
    expect(at('ru')).toContain('около');
    expect(at('es')).toContain('alrededor de');
  });
});
