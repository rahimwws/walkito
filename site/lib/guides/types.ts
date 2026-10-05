import type { EvidenceLevel } from '@/components/Evidence';
import type { Lang, EnglishPage, TranslatedPage } from '@/lib/i18n';

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
  /** Sets, reps, holds, as the reader would say it. */
  dose: string;
  how: string;
  /** Optional, for guides that show the exercises as a table: how often, what
   * the exercise should feel like, and when to stop. */
  often?: string;
  feel?: string;
  stop?: string;
  /** Label for the image slot beside the exercise, until a frame from the
   * app's exercise video fills it. */
  image?: string;
  /** The app's exercise id whose clip shows this exercise
   * (`public/exercises/<id>.*`, made by `scripts/exercise-media.mjs`). When
   * set, it replaces the placeholder. */
  media?: string;
  /** How strong the research behind this exercise is, and why in one line.
   * Levels as defined in the About page section "How we research". */
  evidence?: { level: EvidenceLevel; why: string };
  /** One line under the clip. */
  caption?: string;
  /** What the still shows, for screen readers. */
  alt?: string;
};

/** A real HTML table: doses, grades. Cells take the same inline marks. */
export type GuideTable = {
  caption?: string;
  head: readonly string[];
  rows: readonly (readonly string[])[];
};

export type GuideSection = {
  h2: string;
  paragraphs?: readonly string[];
  exercises?: readonly GuideExercise[];
  bullets?: readonly string[];
  table?: GuideTable;
  /** Paragraphs printed after the table, for text that reads the table. */
  after?: readonly string[];
  /** Study detail kept out of the running text (scales, intervals, p-values),
   * printed with the section's sources. */
  sourceNote?: string;
  /** Indices into `CITATIONS`, printed under the section. */
  cites?: readonly number[];
};

/** One question from a guide's closing FAQ. */
export type GuideQuestion = {
  /** Worded the way people type it into a search box or ask an assistant. */
  q: string;
  /** Indices into `CITATIONS` behind this answer, linked in its text. They
   * count toward the byline and the Article citations. */
  cites?: readonly number[];
  /**
   * A self-contained answer, 40–60 words, with the answer in its first
   * sentence. This is the passage an AI answer or a snippet lifts, so it must
   * read correctly with nothing around it — no "as above", no "see below".
   * Supports the same inline marks as the rest of the guide.
   */
  a: string;
};

export type Guide = {
  lang: Lang;
  page: TranslatedPage | EnglishPage;
  /**
   * When this page's content last really changed, `YYYY-MM-DD`. Feeds the
   * visible "Updated" line, the Article dates and the sitemap. Bump it only
   * with a real edit.
   */
  updated: string;
  /** The citation the byline names as the page's main source (an index into
   * `CITATIONS`). Left out, the byline only counts studies. */
  mainSource?: number;
  /** First published, `YYYY-MM-DD`. Never changes. */
  published: string;
  /** `<title>`, before the brand suffix the layout adds. */
  title: string;
  description: string;
  h1: string;
  lede: string;
  /** Paragraphs after the lede, when the opening needs more than one. */
  intro?: readonly string[];
  /** Show a table of contents under the key points. */
  toc?: boolean;
  /**
   * "Key points": three to five one-line facts shown right under the lede.
   * Each stands alone and carries its own number or qualifier, so a reader who
   * stops here — or an assistant quoting one line — still has it right.
   */
  takeaways: readonly string[];
  sections: readonly GuideSection[];
  /** Four to six questions people actually ask, answered on their own. Also
   * emitted as FAQPage structured data. */
  faq: readonly GuideQuestion[];
  /** When to see a clinician instead. Always present, always last before the
   * program block. */
  redFlags: { h2: string; bullets: readonly string[] };
  program: {
    h2: string;
    text: string;
    /** More paragraphs, and a short line said just before the App Store button. */
    more?: readonly string[];
    cta?: string;
  };
  /** Breadcrumb label for the guide itself. */
  crumb: string;
  campaign: string;
};
