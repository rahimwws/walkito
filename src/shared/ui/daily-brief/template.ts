import type { BriefIcon, BriefToken, BriefTone } from './daily-brief';

/**
 * A brief sentence, as data a translator can rearrange.
 *
 * **The problem this solves.** `DailyBrief` lays its tokens out as a wrapping
 * row of sibling `<Text>` nodes, so the array order *is* the word order — there
 * is no reordering layer and no index. The old code built those arrays inline:
 *
 * ```ts
 * line(frame(open('you are at')),
 *      metric('feet', `hour ${hours}`),
 *      frame('of standing. The last two times you passed'),
 *      metric('threshold', String(limit), { tail: ',', tone: 'warn' }),
 *      frame('the next morning was'),
 *      metric('warn', 'rough.', { tone: 'warn' }))
 * ```
 *
 * Six tokens, two numbers, three grammar fragments, and the English word order
 * welded into the sequence. Russian puts the limit clause first and the verb
 * last; Spanish keeps neither arrangement. No substitution into those six
 * fragments reaches either sentence — the array itself has to change.
 *
 * So a sentence is stored as an ordered `BriefSegment[]` **per language**, and
 * each language's file is free to use a different number of segments in a
 * different order with the icons attached to different words. `buildBrief`
 * turns one into the `BriefToken[]` the renderer already accepts, which is why
 * `DailyBrief` itself needed no change at all.
 *
 * **Numbers arrive pre-rendered.** A segment's `text` interpolates
 * `{placeholders}` whose values are finished noun phrases produced by the
 * catalogue — "3 дня", not "3" and "дня". That keeps grammatical agreement
 * inside the language that owns it: Russian's `few` form is chosen by
 * `pluralCategory` against the catalogue entry, and the template only decides
 * *where* the finished phrase sits.
 */

export type BriefSegment =
  /** Grey. Carries the grammar, never a fact. */
  | { k: 'frame'; text: string }
  /** Emphasised. Carries a fact, with no glyph. */
  | { k: 'value'; text: string; tail?: string; tone?: BriefTone }
  /** Emphasised, with a glyph glued to it — rendered unbreakable. */
  | { k: 'metric'; icon: BriefIcon; text: string; tail?: string; tone?: BriefTone };

/**
 * The phrasings one state can be said in.
 *
 * A locale may ship a different number of variants from English. Rotation is
 * `index % variants.length`, applied by the caller against *this* array's
 * length, so a language with two good phrasings is not forced to invent a
 * third — which is what would happen if the modulus were fixed at three by the
 * code, as it used to be.
 */
export type BriefVariants = readonly (readonly BriefSegment[])[];

/** Substitutes `{name}`. An unknown name is left visible rather than blanked,
 * matching `translate.ts` — a mistake should look like one in a screenshot. */
function fill(template: string, params: Readonly<Record<string, string>>): string {
  return template.replace(/\{(\w+)\}/g, (whole, key: string) =>
    Object.hasOwn(params, key) ? params[key] : whole,
  );
}

/**
 * One phrasing, rendered.
 *
 * `capitalise` restores the sentence's opening capital when there is no name to
 * lead with. Every template is authored lowercase-first for exactly this
 * reason, and the rule holds in all three languages — none of them capitalises
 * mid-sentence after a vocative comma.
 */
export function buildBrief(
  segments: readonly BriefSegment[],
  params: Readonly<Record<string, string>>,
  options: { capitalise: boolean },
): BriefToken[] {
  return segments.map((segment, index) => {
    let text = fill(segment.text, params);

    if (options.capitalise && index === 0) {
      text = text.charAt(0).toUpperCase() + text.slice(1);
    }

    // Built as literals rather than through the `frame`/`value`/`metric`
    // helpers, which live in the UI module and would pull React Native into
    // this file's module graph. `tests/setup.ts` explains why that matters:
    // the test runner cannot parse React Native, so a model file that reaches
    // for a component becomes untestable — which is exactly the state the old
    // inline token building left `brief.ts` in. The types are imported and
    // erased, so the shapes are still checked.
    if (segment.k === 'frame') return { kind: 'frame', text };
    if (segment.k === 'value') {
      return { kind: 'value', text, tail: segment.tail, tone: segment.tone };
    }
    return { kind: 'metric', icon: segment.icon, text, tail: segment.tail, tone: segment.tone };
  });
}

/** Rotates through a locale's own variants. Kept here rather than in the copy
 * files so every language rotates the same way. */
export function pickVariant(variants: BriefVariants, index: number): readonly BriefSegment[] {
  if (variants.length === 0) return [];
  return variants[((index % variants.length) + variants.length) % variants.length];
}
