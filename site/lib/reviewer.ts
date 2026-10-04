import type { EnglishPage, TranslatedPage } from '@/lib/i18n';

/**
 * The clinician who reviews the guides, and which pages she has reviewed.
 *
 * Null until every field is real. A reviewer is shown only on a page listed in
 * `reviewed`, with the date she checked it: a name on a page she never read
 * would be the one claim a health site cannot afford. Her profile lives in the
 * About page section `#reviewer`; the Article JSON-LD carries her as
 * `reviewedBy` with `lastReviewed`.
 */
export type Reviewer = {
  /** As she wants it printed, e.g. "Dr. Gulbek Atayeva". */
  name: string;
  /** Short credential line, e.g. "MD, sports medicine physician". */
  credentials: string;
  /** Where she works and where, e.g. "Ashgabat, Turkmenistan". */
  affiliation: string;
  /** Square photo in /public, e.g. "/team/gulbek.webp". */
  photo?: string;
  /** Two or three sentences for the About page. */
  bio: string;
  /** Public profiles that confirm who she is (LinkedIn, clinic page). */
  sameAs: readonly string[];
  /** Page key -> the date she reviewed it, `YYYY-MM-DD`. */
  reviewed: Partial<Record<TranslatedPage | EnglishPage | 'runners' | 'science', string>>;
};

export const REVIEWER: Reviewer | null = null;

export function reviewFor(page: string): { reviewer: Reviewer; date: string } | null {
  if (!REVIEWER) return null;
  const date = REVIEWER.reviewed[page as keyof Reviewer['reviewed']];
  return date ? { reviewer: REVIEWER, date } : null;
}
