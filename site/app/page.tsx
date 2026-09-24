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
 * What the page shows in place of reviews.
 *
 * There were three quotes here, copied from the onboarding. They were written
 * by us — `testimonials.ts` says so — and there is no listing yet, so there are
 * no users to have said them. On a health product a made-up review is an FTC
 * problem as well as a trust one, and the page already refuses a rating block
 * for the same reason. Real reviews go back in once the store has some.
 *
 * Until then the page shows what can be checked: three mechanisms, each with
 * the page that proves it. Every number comes from `PROGRAM`.
 */
const HOW = [
  {
    title: 'It steps back on bad mornings',
    text: 'Log this morning’s heel pain in one tap. A high number shortens the session and drops a level; a long day on your feet takes the loaded work out. It never speeds up on a good day.',
    href: '/program/',
    link: 'How the plan adapts',
  },
  {
    title: `A retest every ${PROGRAM.blockDays} days`,
    text: `${PROGRAM.retestTests} physical tests in ${PROGRAM.retestMinutes} minutes — calf raises to failure, an arch hold, single-leg balance on both sides. Progress is measured, not guessed from how the week felt.`,
    href: '/program/',
    link: 'What the retests measure',
  },
  {
    title: 'Built from the trials',
    text: 'High-load calf strength and plantar-specific stretching, at the doses the published trials used and in the order the 2023 clinical guideline for heel pain recommends.',
    href: '/science/',
    link: 'Read the evidence',
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
          {/*
            The headline names the problem the way people search for it. The
            old one — "Run without second-guessing" — was the best line on the
            page and matched no query anyone types, so the page ranked for
            nothing. The paragraph under it answers the query in its first
            sentence, which is the passage a search snippet or an AI answer
            lifts.
          */}
          <h1>
            Heel pain
            <span>from running?</span>
          </h1>
          <p>
            Walkito is a {PROGRAM.weeks}-week exercise program for heel and foot
            pain in runners: {PROGRAM.sessionMinutesMin} to{' '}
            {PROGRAM.sessionMinutesMax} minutes a day of calf strength,
            stretching and balance work, a retest every {PROGRAM.blockDays} days,
            and a plan that steps back on the mornings your heel says it should.
          </p>
          <AppStoreBadge campaign="home-hero" anchor />

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
          <h2>How it works</h2>
          <div className="quotes">
            {HOW.map((item) => (
              <figure key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={item.href}>{item.link} →</a>
              </figure>
            ))}
          </div>
          <p className="notice">
            Walkito is an exercise program. It does not diagnose and does not
            treat. If pain is sharp, getting worse, or stopping you sleeping,
            see a clinician.
          </p>
          <AppStoreBadge campaign="home-bottom" />
        </section>
      </main>

      <Footer />
    </>
  );
}
