import type { Lang } from '@/lib/i18n';

/**
 * The About page: who is behind the site, how its content is written and
 * checked, and what the app does not do.
 *
 * It exists for trust, on a health topic where trust is most of the ranking:
 * every guide's byline links here. Nothing on it may be invented. No
 * biography that has not been given to us, no reviewer who has not reviewed,
 * no credentials nobody holds. When a clinician does review the guides, their
 * name, credentials and what they checked go here and into `lib/schema.ts`.
 */
export type AboutSection = {
  h2: string;
  /** Anchor for links into this section, e.g. the byline's "How we research". */
  id?: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

export type About = {
  lang: Lang;
  title: string;
  description: string;
  h1: string;
  lede: string;
  sections: readonly AboutSection[];
};
