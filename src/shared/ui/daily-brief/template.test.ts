import { describe, expect, test } from 'bun:test';

import { buildBrief, pickVariant, type BriefSegment } from './template';

/** Reads a built line back as plain text, so a test can assert on the sentence
 * rather than on six token objects. */
function say(tokens: readonly { text: string; tail?: string }[]): string {
  return tokens.map((token) => `${token.text}${token.tail ?? ''}`).join(' ');
}

describe('buildBrief', () => {
  /**
   * The `on-feet` line, which the survey identified as the worst structural
   * case in the file: six tokens, two numbers, three grammar fragments, and
   * the English word order welded into the sequence.
   *
   * The three arrangements below are what the old inline-array code could not
   * express. English hangs a relative clause off the end; Russian fronts the
   * limit clause and closes on the adjective; Spanish uses a different number
   * of segments entirely. Same params, same renderer, three real sentences.
   */
  const params = { hours: 'hour 9', limit: '7', limitRu: '7' };

  test('English keeps its own order', () => {
    const en: readonly BriefSegment[] = [
      { k: 'frame', text: 'you are at' },
      { k: 'metric', icon: 'feet', text: '{hours}' },
      { k: 'frame', text: 'of standing. The last two times you passed' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tail: ',', tone: 'warn' },
      { k: 'frame', text: 'the next morning was' },
      { k: 'metric', icon: 'warn', text: 'rough.', tone: 'warn' },
    ];
    expect(say(buildBrief(en, params, { capitalise: false }))).toBe(
      'you are at hour 9 of standing. The last two times you passed 7, the next morning was rough.',
    );
  });

  test('Russian reorders the array, not the words inside a fragment', () => {
    const ru: readonly BriefSegment[] = [
      { k: 'frame', text: 'вы на ногах уже' },
      { k: 'metric', icon: 'feet', text: '{hours}' },
      { k: 'frame', text: '. Оба раза, когда вы переходили за' },
      { k: 'metric', icon: 'threshold', text: '{limitRu}', tail: ',', tone: 'warn' },
      { k: 'frame', text: 'следующее утро было' },
      { k: 'metric', icon: 'warn', text: 'тяжёлым.', tone: 'warn' },
    ];
    expect(say(buildBrief(ru, params, { capitalise: false }))).toContain('переходили за 7,');
  });

  /** Spanish needs five segments where English needs six — the clause English
   * splits across two frames is one clause here. A fixed token count would
   * have forced an unnatural break. */
  test('a language may use a different number of segments', () => {
    const es: readonly BriefSegment[] = [
      { k: 'frame', text: 'llevas' },
      { k: 'metric', icon: 'feet', text: '{hours}' },
      { k: 'frame', text: 'de pie. Las dos veces que pasaste de' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tail: ',', tone: 'warn' },
      { k: 'frame', text: 'la mañana siguiente fue dura.' },
    ];
    const built = buildBrief(es, params, { capitalise: false });
    expect(built).toHaveLength(5);
    expect(say(built)).toBe(
      'llevas hour 9 de pie. Las dos veces que pasaste de 7, la mañana siguiente fue dura.',
    );
  });
});

describe('capitalisation', () => {
  const segments: readonly BriefSegment[] = [{ k: 'frame', text: 'today is a rest day.' }];

  /** With a name in front the sentence continues after a vocative comma, so it
   * stays lowercase. Holds in all three languages. */
  test('left alone when a name leads the line', () => {
    expect(buildBrief(segments, {}, { capitalise: false })[0].text).toBe('today is a rest day.');
  });

  test('restored when there is no name', () => {
    expect(buildBrief(segments, {}, { capitalise: true })[0].text).toBe('Today is a rest day.');
  });

  /** Only the first segment. A capital in the middle of a sentence is the bug
   * this guards against. */
  test('applies to the opening segment only', () => {
    const two: readonly BriefSegment[] = [
      { k: 'frame', text: 'day' },
      { k: 'frame', text: 'nine of the plan.' },
    ];
    const built = buildBrief(two, {}, { capitalise: true });
    expect(built[0].text).toBe('Day');
    expect(built[1].text).toBe('nine of the plan.');
  });

  /** Cyrillic has cases too, and `toUpperCase` handles it. */
  test('works on Cyrillic', () => {
    expect(buildBrief([{ k: 'frame', text: 'сегодня отдых.' }], {}, { capitalise: true })[0].text)
      .toBe('Сегодня отдых.');
  });
});

describe('params', () => {
  test('fills placeholders from finished phrases', () => {
    const segments: readonly BriefSegment[] = [{ k: 'value', text: '{days} in a row' }];
    // Pre-rendered by the catalogue, plural already agreed — the template only
    // decides where it sits.
    expect(buildBrief(segments, { days: '3 дня' }, { capitalise: false })[0].text).toBe(
      '3 дня in a row',
    );
  });

  test('leaves an unknown placeholder visible', () => {
    const segments: readonly BriefSegment[] = [{ k: 'frame', text: 'down {drop} this month' }];
    expect(buildBrief(segments, {}, { capitalise: false })[0].text).toBe(
      'down {drop} this month',
    );
  });
});

describe('pickVariant', () => {
  const a: readonly BriefSegment[] = [{ k: 'frame', text: 'a' }];
  const b: readonly BriefSegment[] = [{ k: 'frame', text: 'b' }];

  test('rotates', () => {
    const variants = [a, b];
    expect(pickVariant(variants, 0)).toBe(a);
    expect(pickVariant(variants, 1)).toBe(b);
    expect(pickVariant(variants, 2)).toBe(a);
  });

  /**
   * The reason rotation moved out of the copy layer. The old code fixed the
   * modulus at three because every English state happened to have three
   * phrasings; a language with two would have indexed past the end and
   * returned undefined.
   */
  test('a locale may ship fewer variants than English', () => {
    expect(pickVariant([a], 7)).toBe(a);
    expect(pickVariant([a, b], 7)).toBe(b);
  });

  test('survives a negative index rather than returning undefined', () => {
    expect(pickVariant([a, b], -1)).toBe(b);
  });

  test('an empty variant list yields an empty line, not a crash', () => {
    expect(pickVariant([], 3)).toEqual([]);
  });
});
