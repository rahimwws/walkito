import type { EnglishPage, TranslatedPage } from '@/lib/i18n';

/**
 * The clinician who reviews the guides, and which pages she has reviewed.
 *
 * Null until every field is real. A reviewer is shown only on a page listed in
 * `reviewed`, with the date she checked it: a name on a page she never read
 * would be the one claim a health site cannot afford. Her profile lives in the
 * About page section `#reviewer`; the page's JSON-LD carries her as
 * `reviewedBy` with `lastReviewed` on a `WebPage` node beside the Article
 * (lib/schema.ts, articleSchema), the type schema.org gives both.
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

export const REVIEWER: Reviewer | null = {
  name: 'Dr. Carla Shayman',
  credentials: 'PT, DPT, OCS',
  affiliation: 'Doctor of Physical Therapy, board-certified orthopedic clinical specialist',
  photo: '/team/carla-shayman.webp',
  // Her own words (Upwork message, 2026-10-30), with her written OK to use them.
  bio: 'Dr. Carla Shayman is a doctor of physical therapy who treats patients across the lifespan with a specialization in orthopedics. She combines evidence based treatment with a patient-centered approach to deliver individualized care.',
  sameAs: ['https://www.linkedin.com/in/carla-shayman-pt-dpt-ocs-cscs-6170a0197'],
  // The two English guides she read in full (Upwork contract, Oct 30, 2026).
  reviewed: { heelPain: '2026-10-30', flatFeet: '2026-10-30' },
};

/** She read the English pages: the translations do not carry her name. */
export function reviewFor(page: string, lang = 'en'): { reviewer: Reviewer; date: string } | null {
  if (!REVIEWER || lang !== 'en') return null;
  const date = REVIEWER.reviewed[page as keyof Reviewer['reviewed']];
  return date ? { reviewer: REVIEWER, date } : null;
}
