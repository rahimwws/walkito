import { buildBrief, type BriefSegment } from './template';

/**
 * The parity checks for brief sentences, which `parity.test.ts` cannot make.
 *
 * That test walks the merged catalogue and knows how to read a `SourceEntry` —
 * a string, or a plural of strings. A brief sentence is neither: it is an
 * ordered `BriefSegment[]` whose placeholders are spread across several
 * segments, so it sits outside that walk by necessity. Without something like
 * this, a Russian sentence that drops `{days}` renders a line with the number
 * silently missing, and nothing fails.
 *
 * **Deliberately not exported from `index.ts`.** Metro does not tree-shake, so
 * everything the barrel names ships in the bundle. Tests import this by path.
 */

const PLACEHOLDER = /\{(\w+)\}/g;

/** Every placeholder named anywhere in a sentence, across all its segments. */
export function placeholdersOf(segments: readonly BriefSegment[]): Set<string> {
  const found = new Set<string>();
  for (const segment of segments) {
    for (const match of segment.text.matchAll(PLACEHOLDER)) found.add(match[1]);
  }
  return found;
}

export type ParityProblem = {
  sentence: string;
  language: string;
  /** What is wrong, phrased so the failure message needs no interpretation. */
  detail: string;
};

/**
 * Compares every language's sentences against English.
 *
 * Returns problems rather than throwing, so a caller can assert on the whole
 * list at once and a developer sees every mistake in one run instead of
 * fixing them one failure at a time.
 */
export function segmentParityProblems(tables: {
  en: Readonly<Record<string, readonly BriefSegment[]>>;
  [language: string]: Readonly<Record<string, readonly BriefSegment[]>>;
}): ParityProblem[] {
  const problems: ParityProblem[] = [];
  const { en } = tables;

  for (const [language, table] of Object.entries(tables)) {
    if (language === 'en') continue;

    for (const sentence of Object.keys(en)) {
      const expected = placeholdersOf(en[sentence]);
      const segments = table[sentence];

      if (segments == null) {
        problems.push({ sentence, language, detail: 'sentence is missing entirely' });
        continue;
      }
      if (segments.length === 0) {
        problems.push({ sentence, language, detail: 'sentence has no segments' });
        continue;
      }

      const actual = placeholdersOf(segments);
      for (const name of expected) {
        if (!actual.has(name)) {
          problems.push({
            sentence,
            language,
            detail: `missing {${name}} — the line would render without it`,
          });
        }
      }
      for (const name of actual) {
        if (!expected.has(name)) {
          problems.push({
            sentence,
            language,
            detail: `uses {${name}}, which English does not have — it will render as literal text`,
          });
        }
      }

      for (const [index, segment] of segments.entries()) {
        if (segment.text.trim().length === 0) {
          problems.push({ sentence, language, detail: `segment ${index} is empty` });
        }
      }
    }

    for (const sentence of Object.keys(table)) {
      if (!(sentence in en)) {
        problems.push({ sentence, language, detail: 'sentence has no English original' });
      }
    }
  }

  return problems;
}

/**
 * Builds every sentence with a params bag covering English's placeholders, and
 * reports any that still contain a `{token}` afterwards.
 *
 * This is the end-to-end check: parity above compares names, and this proves
 * the names actually resolve — catching a typo that agrees across languages
 * and so passes a pure comparison.
 */
export function unresolvedAfterBuild(tables: {
  en: Readonly<Record<string, readonly BriefSegment[]>>;
  [language: string]: Readonly<Record<string, readonly BriefSegment[]>>;
}): ParityProblem[] {
  const problems: ParityProblem[] = [];

  for (const [language, table] of Object.entries(tables)) {
    for (const [sentence, segments] of Object.entries(table)) {
      const params = Object.fromEntries(
        Array.from(placeholdersOf(tables.en[sentence] ?? segments), (name) => [name, 'X']),
      );
      for (const token of buildBrief(segments, params, { capitalise: false })) {
        const leftover = token.text.match(PLACEHOLDER);
        if (leftover != null) {
          problems.push({
            sentence,
            language,
            detail: `left ${leftover.join(', ')} unresolved after building`,
          });
        }
      }
    }
  }

  return problems;
}
