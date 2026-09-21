import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { PROGRAM, SITE_NAME, SITE_URL } from '@/lib/site';

/**
 * What the twelve weeks contain.
 *
 * Every number on this page came out of `src/entities/program/model/` rather
 * than out of the brief: the plan is `buildBlocks(6)` at `BLOCK_LENGTH` 14, so
 * 84 days; session lengths are `MINUTES_BY_KIND` plus the maintenance day;
 * retests are `RETEST_TESTS` and `RETEST_MINUTES`. Checking rather than
 * retyping is not pedantry — Home was shipping "day 1 of 56" against an 84-day
 * plan until this page made someone look.
 */
export const metadata: Metadata = {
  title: 'The 12-Week Program',
  description:
    'Six blocks of fourteen days. Sessions of three to eight minutes, a retest every two weeks, and a plan that steps back on the days your pain says it should.',
  alternates: { canonical: '/program' },
  openGraph: {
    title: `The 12-Week Program | ${SITE_NAME}`,
    description:
      'Six blocks of fourteen days, sessions of three to eight minutes, and a retest every two weeks.',
    url: '/program',
    type: 'website',
  },
};

/**
 * `HowTo`, not `MedicalWebPage`.
 *
 * Deliberate, and the reasoning is worth keeping: the app is exercise
 * programming, not medical content. Declaring `MedicalWebPage` invites the
 * strictest YMYL evaluation Google has — credentialed authorship, medical
 * review, the lot — in exchange for nothing an exercise app can win.
 */
const HOW_TO = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'The Walkito 12-week program',
  description:
    'A twelve-week exercise program for heel and foot pain in runners, run in six blocks of fourteen days.',
  totalTime: 'P84D',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Log this morning’s pain',
      text: 'One tap before the day starts. The number decides what the session is, and a day you log without training still counts.',
    },
    {
      '@type': 'HowToStep',
      name: 'Do the session',
      text: 'Three to eight minutes. Strength days carry the load, mobility and balance days sit between them, and one day in seven is prescribed rest.',
    },
    {
      '@type': 'HowToStep',
      name: 'Retest every fourteen days',
      text: 'Three measurements, four minutes: calf endurance, arch hold and single-leg balance. Nothing else moves your level.',
    },
  ],
};

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Program', item: `${SITE_URL}/program/` },
  ],
};

export default function Program() {
  return (
    <>
      <JsonLd data={HOW_TO} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead />

      <main className="shell prose">
        <h1>The 12-week program</h1>

        {/*
          Answer first. AI engines lift the first self-contained passage that
          answers the query, and a page that opens by explaining anatomy gets
          its third paragraph quoted or nothing at all.
        */}
        <p className="lede">
          {PROGRAM.weeks} weeks, {PROGRAM.blocks} blocks of {PROGRAM.blockDays}{' '}
          days, and a session of {PROGRAM.sessionMinutesMin} to{' '}
          {PROGRAM.sessionMinutesMax} minutes on the days that have one. Every{' '}
          {PROGRAM.blockDays} days the plan stops and measures you with{' '}
          {PROGRAM.retestTests} physical tests rather than asking how you feel.
        </p>

        <h2>What a week looks like</h2>
        <p>
          Three strength days carry the load. Mobility and balance days sit
          between them, and one day in seven is rest the plan assigns rather
          than rest you take — a prescribed rest day counts as showing up, and
          never breaks a streak.
        </p>

        <h2>It changes when you do</h2>
        <p>
          The morning pain you log decides the session. Report a bad morning and
          the plan steps back a level and gets shorter — three minutes, sitting
          down — instead of asking for the same work. Report a long day on your
          feet and the loaded work comes out. The plan never accelerates on a
          good day; it only walks back and then returns.
        </p>

        <h2>Retests, every {PROGRAM.blockDays} days</h2>
        <p>
          {PROGRAM.retestTests} measurements, {PROGRAM.retestMinutes} minutes:
          calf raises to failure, an arch hold, and single-leg balance timed on
          both sides. The gap between your two sides is the figure worth
          watching. Nothing else moves a level — not a streak, and not how the
          sessions felt.
        </p>

        <h2>After the twelve weeks</h2>
        <p>
          The program does not end so much as change job. Maintenance runs two
          sessions a week with a checkpoint every four weeks, because the thing
          that undoes this is stopping once it stops hurting.
        </p>

        {/* Required on every page that mentions symptoms. Not a disclaimer
            bolted on at the bottom — it is part of what the product is. */}
        <p className="notice">
          Walkito is a screening and exercise program. It does not diagnose and
          does not treat. If pain is sharp, getting worse, or stopping you
          sleeping, see a clinician.
        </p>

        <AppStoreBadge />
      </main>

      <Footer />
    </>
  );
}
