import type { Lang, TranslatedPage } from '@/lib/i18n';

/**
 * A guide: one page built to answer one search query in one language.
 *
 * Data rather than JSX so the six pages share one layout and one schema
 * builder, and so the text of each can be read top to bottom as the article it
 * is. The rules every guide follows are the evidence page's rules:
 *
 *   • the first paragraph answers the query on its own — it is the passage a
 *     snippet or an AI answer lifts;
 *   • every figure traces to a citation in `lib/citations.ts`, with its
 *     qualifier attached (the twelve-month convergence travels with the
 *     three-month result; "flexible" travels with every arch claim);
 *   • doses are the app's own starting doses, read from
 *     `src/entities/program/model/exercises.ts`, and say so;
 *   • no word promising a cure, in any language.
 *
 * Inline text supports two marks and nothing else: `**bold**` and
 * `[label](/path/)`. Enough for emphasis and internal links, too little to
 * turn a guide into a second markup language.
 */
export type GuideExercise = {
  name: string;
  /** Sets, reps, holds — as the reader would say it. */
  dose: string;
  how: string;
};

export type GuideSection = {
  h2: string;
  paragraphs?: readonly string[];
  exercises?: readonly GuideExercise[];
  bullets?: readonly string[];
  /** Indices into `CITATIONS`, printed under the section. */
  cites?: readonly number[];
};

export type Guide = {
  lang: Lang;
  page: TranslatedPage;
  /** `<title>`, before the brand suffix the layout adds. */
  title: string;
  description: string;
  h1: string;
  lede: string;
  sections: readonly GuideSection[];
  /** When to see a clinician instead. Always present, always last before the
   * program block. */
  redFlags: { h2: string; bullets: readonly string[] };
  program: { h2: string; text: string };
  /** Breadcrumb label for the guide itself. */
  crumb: string;
  campaign: string;
};
