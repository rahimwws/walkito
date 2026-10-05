/**
 * The printable exercise sheets in /public/downloads, made from the guides'
 * own exercise data (doses, steps, stop rules, evidence labels) so the paper
 * version never disagrees with the page. Regenerate with
 * `scripts/printables/README.md` when a guide's exercises change.
 */
export type Printable = {
  slug: string;
  title: string;
  /** What is on the sheet, one line. */
  blurb: string;
  /** The guide it comes from. */
  guide: string;
  pages: number;
};

export const PRINTABLES: readonly Printable[] = [
  {
    slug: 'walkito-plantar-fasciitis-exercises',
    title: 'Plantar fasciitis exercises (PDF)',
    blurb: '8 stretches and calf strength exercises with doses, a week log and when to see a clinician.',
    guide: '/plantar-fasciitis-exercises/',
    pages: 2,
  },
  {
    slug: 'walkito-flat-feet-exercises',
    title: 'Flat feet exercises (PDF)',
    blurb: '10 arch, toe and hip exercises with doses, a week log and when to see a clinician.',
    guide: '/flat-feet-exercises/',
    pages: 3,
  },
  {
    slug: 'walkito-standing-all-day-exercises',
    title: 'Exercises for feet that hurt from standing (PDF)',
    blurb: '7 short exercises for long shifts, with doses, a week log and when to see a clinician.',
    guide: '/feet-hurt-standing-all-day/',
    pages: 2,
  },
];

export function printableForGuide(path: string): Printable | undefined {
  return PRINTABLES.find((p) => p.guide === path);
}
