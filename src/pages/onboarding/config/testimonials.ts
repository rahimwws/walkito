/**
 * The three reviews on the social-proof screen.
 *
 * Written as fragments rather than paragraphs: the screen is read in a glance
 * between two taps, and a long quote is a quote nobody finishes. Each one
 * names a *different* thing the app did — pain gone, confidence back, a return
 * to distance — so three cards read as three people rather than one claim
 * repeated three times.
 *
 * `lead` is the emphasised clause. Splitting the quote here rather than
 * marking it up in the component keeps the copy in one place and means the
 * card never has to parse anything.
 */
export type Testimonial = {
  /** Opens the quote, in normal weight. */
  before: string;
  /** The clause that carries the claim, set bold. */
  lead: string;
  /** Closes the quote, in normal weight. */
  after: string;
  name: string;
  /** Shown under the name — who they are, not a job title. */
  detail: string;
};

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    before: 'Six months of shin pain, and I ran a',
    lead: 'pain-free 10k',
    after: ' eight weeks in.',
    name: 'Marta K.',
    detail: 'Running 4 years',
  },
  {
    before: 'It found my',
    lead: 'calves, not my knees.',
    after: ' The strength work finally made sense.',
    name: 'Daniel R.',
    detail: 'Half marathon, 1:38',
  },
  {
    before: 'Back from an Achilles injury',
    lead: 'without losing the distance',
    after: ' I’d already built.',
    name: 'Priya S.',
    detail: 'Marathon in training',
  },
];
