import Image from 'next/image';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { PROGRAM, SITE_NAME } from '@/lib/site';

/**
 * The app itself, as schema.
 *
 * No `offers` and no `aggregateRating`, both deliberately. The price in the
 * brief was a number nobody checked against the store, and a rating block with
 * no ratings behind it is a manual-action risk rather than a shortcut — these
 * go in when there is a listing and real reviews to point at.
 */
const APP = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS',
  description: `A ${PROGRAM.weeks}-week exercise program for heel and foot pain in runners.`,
  featureList: [
    `Daily sessions of ${PROGRAM.sessionMinutesMin} to ${PROGRAM.sessionMinutesMax} minutes`,
    'Plan adapts to logged pain and daily load',
    `Retest assessments every ${PROGRAM.blockDays} days`,
  ],
};

/**
 * The app's own three, verbatim.
 *
 * `lead` is the clause the quote turns on, and it carries the same emphasis
 * treatment the onboarding gives it: the ink is on the fact and the rest
 * carries the grammar. Copied from `src/pages/onboarding/config/testimonials.ts`
 * rather than rewritten — a landing page that puts stronger words in a user's
 * mouth than the app does is the first thing to break trust in both.
 */
const QUOTES = [
  {
    before: 'Six months of shin pain, and I ran a ',
    lead: 'pain-free 10k',
    after: ' eight weeks in.',
    name: 'Marta K.',
    detail: 'Running 4 years',
  },
  {
    before: 'It found my ',
    lead: 'calves, not my knees.',
    after: ' The strength work finally made sense.',
    name: 'Daniel R.',
    detail: 'Half marathon, 1:38',
  },
  {
    before: 'Back from an Achilles injury ',
    lead: 'without losing the distance',
    after: ' I’d already built.',
    name: 'Priya S.',
    detail: 'Marathon in training',
  },
] as const;

export default function Home() {
  return (
    <>
      <JsonLd data={APP} />
      <Masthead />

      <main>
        <section className="shell hero">
          {/*
            Every word here is the app's own, lifted from the onboarding rather
            than written for marketing. The constraint is the product's own
            rule: no word implying diagnosis or cure — "screening, program,
            exercises, never treatment" — and a page promising what the app
            refuses to promise is where a user's trust in it starts to go.
          */}
          <h1>
            Run without
            <span>second-guessing</span>
          </h1>

          <p>
            A daily plan that changes when your legs do. Five to seven minutes,
            written for you rather than for runners in general — and it steps
            back on the mornings you need it to.
          </p>

          <AppStoreBadge />

          <div className="shot">
            <Image
              src="/app-home.png"
              alt="Walkito on iPhone: the week as seven flames, today's check-in, and the day's tasks."
              width={360}
              height={735}
              priority
            />
          </div>
        </section>

        <section className="shell proof">
          <h2>What it changed</h2>

          <div className="quotes">
            {QUOTES.map((quote) => (
              <figure key={quote.name}>
                <blockquote>
                  {quote.before}
                  <b>{quote.lead}</b>
                  {quote.after}
                </blockquote>
                <figcaption>
                  <b>{quote.name}</b>
                  {quote.detail}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
