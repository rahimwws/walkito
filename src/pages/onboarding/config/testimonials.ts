import type { Translate } from '@/shared/lib/i18n';

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
 *
 * **The split is per language, and has to be.** English bolds "pain-free 10k"
 * in the middle of the first quote; Russian's natural word order puts the same
 * claim at the end of the sentence, so its `after` is a full stop and nothing
 * else. Each catalogue therefore holds its own three parts, with two rules: the
 * `lead` must be a contiguous run of that language's sentence, and the
 * whitespace convention below must hold.
 *
 * Whitespace: the card writes a space between `before` and `lead`, and the
 * space in front of `after` is baked into the catalogue string.
 */
export type Testimonial = {
  /** Opens the quote, in normal weight. */
  before: string;
  /** The clause that carries the claim, set bold. */
  lead: string;
  /** Closes the quote, in normal weight. */
  after: string;
  name: string;
};

/** How many cards the social screen pages through. A constant rather than
 * `testimonials(t).length`, because the page needs the count before it has a
 * translator to build the list with. */
export const TESTIMONIAL_COUNT = 3;

export function testimonials(t: Translate): readonly Testimonial[] {
  return [
    {
      before: t('onboarding.testimonial1.before'),
      lead: t('onboarding.testimonial1.lead'),
      after: t('onboarding.testimonial1.after'),
      name: t('onboarding.testimonial1.name'),
    },
    {
      before: t('onboarding.testimonial2.before'),
      lead: t('onboarding.testimonial2.lead'),
      after: t('onboarding.testimonial2.after'),
      name: t('onboarding.testimonial2.name'),
    },
    {
      before: t('onboarding.testimonial3.before'),
      lead: t('onboarding.testimonial3.lead'),
      after: t('onboarding.testimonial3.after'),
      name: t('onboarding.testimonial3.name'),
    },
  ];
}
