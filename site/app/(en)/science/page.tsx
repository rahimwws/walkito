import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Byline } from '@/components/Byline';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Cite } from '@/components/Cite';
import { articleSchema } from '@/lib/schema';
import { PAGE_UPDATED, PROGRAM, SITE_NAME, SITE_URL } from '@/lib/site';

/**
 * The evidence page.
 *
 * Three rules govern every word here, and they are the reason the page is worth
 * anything at all:
 *
 *   • every number traces to a citation printed on this page;
 *   • no finding is rounded up and no qualifier is dropped;
 *   • the twelve-month convergence travels with the three-month result, every
 *     claim about arch shape says which feet it was measured on, and the
 *     meta-analysis's six-week figure travels with its overall null result.
 *
 * Two sections from the brief are missing, both deliberately. See the notes
 * where they would have gone.
 */

// One title and one description, used by the metadata and the Article schema
// alike: a headline in schema that differs from the page's own title is two
// answers to "what is this page".
const TITLE = 'Heel Pain Research: Strength vs Stretching, 2023 Guideline';
const DESCRIPTION =
  'What trials found on strength vs stretching for plantar fasciitis and exercise for flexible flat feet, and what the 2023 heel pain guideline recommends.';

export const metadata: Metadata = {
  // The supporting page for the home page's query: it answers the question
  // people ask on the way to choosing a plan — does exercise help, and which.
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/science' },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: '/science',
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-21',
    modifiedTime: PAGE_UPDATED.science,
    images: ['/opengraph-image'],
  },
};


/**
 * `Article` with `citation`, not `MedicalWebPage`.
 *
 * The brief is explicit and the reasoning holds: declaring medical content
 * invites the strictest YMYL evaluation Google has — credentialed authorship,
 * medical review, the lot — in exchange for nothing an exercise program can
 * win. This page cites medical research; it does not claim to be medicine.
 */
const ARTICLE = articleSchema({
  headline: TITLE,
  description: DESCRIPTION,
  path: '/science/',
  lang: 'en',
  published: '2026-09-21',
  updated: PAGE_UPDATED.science,
  cites: [0, 1, 2, 3],
});

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Evidence', item: `${SITE_URL}/science/` },
  ],
};

export default function Science() {
  return (
    <>
      <JsonLd data={ARTICLE} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead />

      <main className="shell prose">
        <h1>Heel pain research: strength vs stretching, and the 2023 guideline</h1>
        <Byline lang="en" updated={PAGE_UPDATED.science} />

        {/* Answer first: the passage an AI answer lifts is the first one that
            answers the query on its own, so the finding leads and the page's
            description of itself follows. */}
        <p className="lede">
          For heel pain from plantar fasciitis, the 2023 clinical guideline
          grades stretching A and strength training B, and a randomised trial
          found high-load strength work improved pain and function faster than
          stretching, though the two groups had converged by twelve months.
          For flexible flat feet, a six-week combined exercise program changed
          arch measures in one randomised trial; for short-foot training alone,
          a meta-analysis found no significant effect overall and an
          improvement only in programs longer than six weeks. This page lists
          the studies Walkito is built on, what they found and where their
          evidence stops.
        </p>

        <h2>Pain and arch shape are two different problems</h2>
        <p>
          The research measures them separately. The strength trial below was
          scored on the Foot Function Index (pain and function). The arch
          trials were scored on navicular drop and arch angle, which measure
          the shape of the arch, not pain.
        </p>
        <p>
          So a result for one is not evidence for the other: the arch findings
          do not show that arch training relieves pain, and calf strength work
          is not designed to change arch shape. Walkito works on both as
          separate goals (pain-free mornings, and a{' '}
          {PROGRAM.goals.archHoldSeconds}-second arch hold), with up to three
          goals active at once and pain first when there is pain. The arch goal
          is meant for flexible flat feet, and the app does not check which
          kind you have: if your arch stays flat even off the ground, leave it
          aside and see a clinician. How the goals share a week is on{' '}
          <a href="/program/">the plan page</a>.
        </p>

        <h2>Strength training moves pain faster than stretching</h2>
        <p>
          In a randomised trial of 48 people with plantar fasciitis confirmed by
          ultrasound, participants all wore shoe inserts and did either
          high-load strength training every other day or daily
          plantar-specific stretching. At three months the strength group scored{' '}
          <b>29 points lower</b> on the Foot Function Index (95% CI 6–52,
          p&nbsp;=&nbsp;0.016).
        </p>
        {/* The convergence is not a footnote and never moves away from the
            three-month figure. Separated, the 29 points reads as a permanent
            advantage, which is an overclaim the trial does not support. */}
        <p>
          At twelve months the two groups had converged: 22 against 16, no
          significant difference. <b>What this means:</b> strength training
          produces faster improvement, not a more complete one. That is the
          only claim Walkito makes for strength work (sooner, not more), and it
          never promises a cure.
        </p>
        <p>
          The heel raise Walkito uses follows this trial: single-leg, on a step,
          a towel under the toes, three seconds up, two seconds held, three
          seconds down, every other day. It sits near the top of the app’s calf
          progression, so it is reached one level at a time, and never in the
          first week, which keeps load off the plantar fascia. The exercise and
          its starting dose are in{' '}
          <a href="/plantar-fasciitis-exercises/">
            plantar fasciitis exercises and stretches
          </a>
          .
        </p>
        <Cite index={0} />

        <h2>The arch responds to training, given enough time</h2>
        <p>
          In a randomised trial of 52 people with <b>flexible</b> flat feet, a
          six-week program of foot shortening, ankle work, hip strengthening and
          stretching improved navicular drop by <b>0.4 cm</b> and arch angle by{' '}
          <b>16 degrees</b> more than the control group.
        </p>
        <Cite index={1} />
        <p>
          A 2024 meta-analysis of short-foot training found{' '}
          <b>no significant difference overall</b> in navicular drop or foot
          posture index compared with controls. Only in the subgroup of{' '}
          <b>programs longer than six weeks</b> did navicular drop improve
          significantly, and the authors conclude that larger samples are
          needed. It pooled studies of flat feet in general, and most did not
          make clear whether participants had symptoms. That is one reason
          Walkito’s plan has no end date: the arch goal stays in the plan until
          it is reached, rather than stopping on a date that could fall short of
          the point where this evidence applies.
          The exercises and their starting doses are in{' '}
          <a href="/flat-feet-exercises/">flat feet exercises</a>.
        </p>
        <Cite index={2} />

        <h2>What clinical guidelines recommend</h2>
        <p>
          The 2023 clinical practice guideline from the{' '}
          <i>Journal of Orthopaedic &amp; Sports Physical Therapy</i> grades the
          evidence for each intervention.
        </p>
        {/* The right-hand column says what the app actually does, checked
            against the app. Taping and night splints were once listed as
            "recommended" here; nothing in the app recommends either, so the
            column now says so rather than borrowing the guideline's grade. */}
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Intervention</th>
                <th>Grade</th>
                <th>In Walkito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Plantar fascia and calf stretching</td>
                <td><b>A</b></td>
                <td>In the plan from week one</td>
              </tr>
              <tr>
                <td>Manual therapy to the joints and soft tissue of the lower limb</td>
                <td><b>A</b></td>
                <td>Not part of the app</td>
              </tr>
              <tr>
                <td>Taping alongside other physical therapy, for short-term (up to 6 weeks) improvement in pain and function</td>
                <td><b>A</b></td>
                <td>Not part of the app</td>
              </tr>
              <tr>
                <td>Night splints, 1–3 months, for people who consistently have pain on their first steps in the morning</td>
                <td><b>A</b></td>
                <td>Not part of the app</td>
              </tr>
              <tr>
                <td>Resistance and strength training</td>
                <td><b>B</b></td>
                <td>The core of the plan, one level at a time</td>
              </tr>
              <tr>
                <td>Orthotics used alone, for short-term pain relief</td>
                <td><b>B: do not use in isolation</b></td>
                <td>Not recommended on their own</td>
              </tr>
              <tr>
                <td>Orthotics combined with other treatment</td>
                <td><b>C</b></td>
                <td>Not part of the app</td>
              </tr>
              <tr>
                <td>Therapeutic ultrasound added to stretching</td>
                <td><b>A: do not use</b></td>
                <td>Not included</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Cite index={3} />
        <p>
          On load, the guideline’s advice is education on strategies to modify
          weight-bearing load at work, in sport and in daily life, graded E,
          meaning it is based on theoretical rather than trial evidence. Walkito
          changes the load rather than stopping: on a high-pain morning the
          session gets shorter and lighter, but it still happens. What that
          means if you run is in{' '}
          <a href="/plantar-fasciitis-exercises/">the heel pain guide</a>.
        </p>

        {/*
          Two sections from the brief are missing.

          "Order matters" claimed that training the intrinsic foot muscles
          before the extrinsic ones produces better results, and that
          extrinsic-only programs are associated with intrinsic deterioration.
          The brief flagged it as uncited and said to find the paper or drop the
          section. A search surfaced the intrinsic-training reviews but none
          supporting either half of that claim, so it is dropped.

          The recurrence cohort — 174 people, 80.5% at one year, 52.9%
          reporting a recurrence — carried figures with no citation block, while
          every other number on this page has one. The brief's own rule is that
          every number traces to a citation printed here. The rationale it
          supports survives below without the numbers.

          The same rule removed two later sentences: a "2022 systematic review"
          saying intrinsic foot training does not improve pain, and a trial of
          "more than 800 runners" on gait asymmetry. Neither had a citation on
          this page.
        */}
        <h2>Heel pain can come back, so the plan doesn’t end</h2>
        <p>
          Heel pain can return after it eases, so Walkito’s plan has no fixed
          length and no last week at which the exercises simply stop. It is built one week at a time around a focus goal. A goal
          that is reached moves to maintaining (it keeps a place in the plan at
          a lower dose), and the next goal takes its place. Tests continue every{' '}
          {PROGRAM.testEveryDaysAfterGoal} days once the first goal is reached,
          so a slide in the numbers shows up rather than being guessed at. None
          of this promises the pain will not return.
        </p>

        <h2>What we measure, and what we don’t</h2>
        <p>
          Walkito tracks progress with {PROGRAM.retestTests} physical tests in
          about {PROGRAM.retestMinutes} minutes: single-leg calf raises to
          failure, arch hold time and single-leg balance. They come every{' '}
          {PROGRAM.testEveryDays} days until the first goal is reached, then
          every {PROGRAM.testEveryDaysAfterGoal}. These are measured, not
          estimated, and cannot be inflated by using the app more.
        </p>
        <p>
          Walkito can also read walking asymmetry from Apple Health, which
          iPhone estimates automatically. We compare it only against{' '}
          <b>your own</b> baseline, never against a population norm. We will
          tell you when your walking pattern changes. We will never tell you it
          means you are injured.
        </p>

        <h2>What Walkito is not</h2>
        <p>
          Walkito provides exercise programming. It does not diagnose or treat
          any condition, and it does not replace a clinician. How these pages
          are written and checked is on <a href="/about/">the About page</a>;
          questions about the app itself are answered in{' '}
          <a href="/faq/">the FAQ</a>.
        </p>
        <p>
          The randomised arch trial above was run on <b>flexible</b> flat feet,
          where the arch reappears when the foot is lifted off the ground; the
          meta-analysis pooled studies of flat feet in general. Rigid flat feet
          are a structural issue that exercise will not change.
        </p>
        <p className="notice">
          See a clinician first if your pain followed an injury or fall, comes
          with numbness, tingling, burning, swelling or warmth, wakes you at
          night, is sharp or getting worse, hurts when you squeeze the heel, or
          if one arch has flattened suddenly as an adult. The full list is in{' '}
          <a href="/plantar-fasciitis-exercises/">the heel pain guide</a>.
        </p>

        <AppStoreBadge campaign="science" />
      </main>

      <Footer />
    </>
  );
}
