import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Byline, UpdatedLine } from '@/components/Byline';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Cite } from '@/components/Cite';
import { Prose } from '@/components/Prose';
import { CHROME, alternatesCustomEnEs } from '@/lib/i18n';
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
 * Study jargon (index names, confidence intervals, p-values, navicular drop in
 * cm, arch angle in degrees) lives in the `cite` source lines right under the
 * claim it backs, so the main text reads plainly and the figures stay checkable.
 *
 * Two sections from the brief are missing, both deliberately. See the notes
 * where they would have gone.
 */

// One title and one description, used by the metadata and the Article schema
// alike: a headline in schema that differs from the page's own title is two
// answers to "what is this page".
const TITLE = 'Heel Pain Research: Strength vs Stretching';
const DESCRIPTION =
  'What trials found on strength vs stretching for plantar fasciitis and exercise for flexible flat feet, and what the 2023 heel pain guideline recommends.';

export const metadata: Metadata = {
  // The supporting page for the home page's query: it answers the question
  // people ask on the way to choosing a plan (does exercise help, and which).
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesCustomEnEs('science', 'en'),
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
 * invites the strictest YMYL evaluation Google has (credentialed authorship,
 * medical review, the lot) in exchange for nothing an exercise program can
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

// Headings once, so the contents list and the sections cannot drift apart.
const H = {
  twoProblems: { id: 'two-problems', h2: 'Are heel pain and flat arches the same problem?' },
  strength: { id: 'strength-vs-stretching', h2: 'Is strength training better than stretching for plantar fasciitis?' },
  arch: { id: 'arch', h2: 'Can exercise change a flat arch?' },
  guideline: { id: 'guideline', h2: 'What does the 2023 guideline recommend for plantar fasciitis?' },
  comeBack: { id: 'come-back', h2: 'Can heel pain come back after it eases?' },
  measure: { id: 'what-walkito-measures', h2: 'What Walkito measures, and what it doesn’t' },
  isNot: { id: 'what-walkito-is-not', h2: 'What Walkito is not' },
  clinician: { id: 'see-a-clinician', h2: 'See a clinician first if' },
} as const;

// The guideline's grades, row for row as in HEEL_PAIN_EN (lib/guides/en.ts),
// each checked against the 2023 guideline's summary of recommendations. The
// last column says what the app actually does, checked against the app: taping
// and night splints were once listed as "recommended" here, but nothing in the
// app recommends either, so the column says so rather than borrowing a grade.
const GRADES: readonly [option: string, grade: string, inWalkito: string][] = [
  ['Plantar fascia and calf stretching', 'A', 'In the plan from week one'],
  ['Manual therapy (hands-on work on the joints and soft tissue of the leg and foot), from a clinician', 'A', 'Not part of Walkito'],
  ['Taping alongside other physical therapy, for better pain and function over up to 6 weeks', 'A', 'Not part of Walkito'],
  ['Night splints for 1 to 3 months, if your first steps each morning keep hurting', 'A', 'Not part of Walkito'],
  ['Resistance and strength training', 'B', 'The core of the plan, one level at a time'],
  ['Low-level laser therapy and dry needling, from a clinician', 'B', 'Not part of Walkito'],
  ['Orthotics on their own, for short-term pain relief', 'B against', 'Not recommended on their own'],
  ['Orthotics combined with other care', 'C', 'Not part of Walkito'],
  ['Therapeutic ultrasound added to stretching', 'A against', 'Not included'],
];

export default function Science() {
  const c = CHROME.en;
  return (
    <>
      <JsonLd data={ARTICLE} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead />

      <Prose className="shell prose">
        <h1>Heel pain research: strength vs stretching, and the 2023 guideline</h1>
        <Byline lang="en" cites={[0, 1, 2, 3]} main={3} />

        <p className="lede">
          This page lists the studies Walkito is built on, what they found,
          and where their evidence stops. There are four: a trial on heel pain,
          a trial and a review on flat feet, and the 2023 clinical guideline
          for heel pain.
        </p>
        {/* Answer first: the passage an AI answer lifts is the first one that
            answers the query on its own, so the findings follow straight on,
            each with its size, timeframe and which feet. */}
        <p>
          For heel pain from plantar fasciitis, the 2023 guideline gives
          stretching its top grade, A, and strength training a B. In a trial of
          48 people, heavy heel raises eased pain faster than stretching, and by
          twelve months both groups were even. For <b>flexible</b> flat feet,
          one trial of 52 people found that six weeks of exercise changed the
          shape of the arch. A 2024 review of short-foot training found no
          significant difference overall, and one arch measure improved only in
          programs longer than six weeks.
        </p>

        <nav className="toc" aria-label={c.contents}>
          <h2>{c.contents}</h2>
          <ol>
            {Object.values(H).map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.h2}</a>
              </li>
            ))}
          </ol>
        </nav>

        <h2 id={H.twoProblems.id}>{H.twoProblems.h2}</h2>
        <p>
          Heel pain and the shape of the arch are two different problems, and
          the research measures them in different ways. The heel pain trial
          below scored pain and daily function. The arch studies measured the
          shape of the arch, not pain.
        </p>
        <p className="cite">
          The heel pain trial was scored on the Foot Function Index. The arch
          studies were scored on navicular drop and arch angle, two measures of
          arch shape.
        </p>
        <p>
          So a result for one is not proof for the other. The arch studies do
          not show that arch training eases pain. Calf strength work is not
          meant to change the shape of the arch. Walkito works on both as
          separate goals: pain-free mornings, and a{' '}
          {PROGRAM.goals.archHoldSeconds}-second arch hold. Up to three goals
          can be active at once, and pain comes first when you have pain.
        </p>
        <p>
          The arch goal is meant for flexible flat feet, where the arch comes
          back when the foot is off the ground. Walkito does not check which
          kind you have. If your arch stays flat even off the ground, leave the
          arch goal aside and see a clinician. How the goals share a week is on{' '}
          <a href="/program/">the plan page</a>.
        </p>

        <h2 id={H.strength.id}>{H.strength.h2}</h2>
        <p>
          For plantar fasciitis, strength training brought relief sooner than
          stretching, and by twelve months the two were even. In a trial of 48
          people with plantar fasciitis confirmed by ultrasound, everyone wore
          shoe inserts. One group did heavy heel raises every other day. The
          other group stretched the plantar fascia every day. At three months,
          the strength group was clearly ahead on pain and daily function. At
          twelve months, the two groups were even.
        </p>
        {/* The convergence is not a footnote and never moves away from the
            three-month figure. Separated, the 29 points reads as a permanent
            advantage, which is an overclaim the trial does not support. */}
        <p className="cite">
          Scored on the Foot Function Index (pain and function): 29 points lower
          in the strength group at three months (95% CI 6-52,
          p&nbsp;=&nbsp;0.016), and 22 against 16 at twelve months, not a
          significant difference.
        </p>
        <Cite index={0} />
        <p>
          So strength work brings the improvement forward. It does not make it
          bigger. That is the only claim Walkito makes for strength work:
          sooner, not more. It never promises a cure.
        </p>
        <p>
          The heel raise in Walkito follows this trial. You stand on one leg on
          a step, with a towel under your toes. You take three seconds to rise,
          hold for two, and take three to lower, on strength days, three a
          week, never two in a row. It sits near
          the top of Walkito’s calf exercises, which get harder one level at a
          time. It never comes in the first week, which keeps load off the
          plantar fascia at the start. The exercise and its starting dose are
          in{' '}
          <a href="/plantar-fasciitis-exercises/">
            plantar fasciitis exercises and stretches
          </a>
          .
        </p>

        <h2 id={H.arch.id}>{H.arch.h2}</h2>
        <p>
          Exercise can change the shape of a <b>flexible</b> flat arch, and the
          evidence says to give it six weeks or more. In a trial of 52 people
          with flexible flat feet, a six-week program improved the arch more
          than in the control group. The program mixed short-foot training
          (pulling the ball of the foot toward the heel so the arch lifts),
          ankle work, hip strengthening and stretching.
        </p>
        <p className="cite">
          Navicular drop improved by 0.4 cm and arch angle by 16 degrees more
          than in the control group.
        </p>
        <Cite index={1} />
        <p>
          A 2024 review combined the studies of short-foot training. It found{' '}
          <b>no significant difference overall</b> compared with control
          groups. One arch measure improved only in programs{' '}
          <b>longer than six weeks</b>, and the authors say larger studies are
          needed. The review pooled studies of flat feet in general, and most
          did not make clear whether people had symptoms.
        </p>
        <p className="cite">
          Meta-analysis outcomes: navicular drop and Foot Posture Index, neither
          significantly different from control overall. Navicular drop improved
          significantly only in the subgroup of programs longer than six weeks.
        </p>
        <Cite index={2} />
        <p>
          That is one reason Walkito’s plan has no end date. The arch goal stays
          in the plan until you reach it, instead of stopping on a date that
          might come before the point where this evidence applies. The
          exercises and their starting doses are in{' '}
          <a href="/flat-feet-exercises/">flat feet exercises</a>.
        </p>

        <h2 id={H.guideline.id}>{H.guideline.h2}</h2>
        <p>
          The 2023 clinical guideline for plantar fasciitis grades each option
          by the strength of its evidence, and A is the top grade. The guideline
          was published in the{' '}
          <i>Journal of Orthopaedic &amp; Sports Physical Therapy</i>. A grade
          marked “against” means the guideline advises not to use that option.
          The last column says what Walkito does with each one.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Option</th>
                <th>Grade</th>
                <th>In Walkito</th>
              </tr>
            </thead>
            <tbody>
              {GRADES.map(([option, grade, inWalkito]) => (
                <tr key={option}>
                  <th scope="row">{option}</th>
                  <td>
                    <b>{grade}</b>
                  </td>
                  <td>{inWalkito}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Cite index={3} />
        <p>
          For load, the same guideline advises learning how to change the load
          on your feet at work, in sport and in daily life. That advice is
          graded E, which means it rests on theory, not trials. Walkito changes
          the load instead of stopping. On a high-pain morning the session gets
          shorter and lighter, but it still happens. What that means if you run
          is in <a href="/plantar-fasciitis-exercises/">the heel pain guide</a>.
        </p>

        {/*
          Two sections from the brief are missing.

          "Order matters" claimed that training the intrinsic foot muscles
          before the extrinsic ones produces better results, and that
          extrinsic-only programs are associated with intrinsic deterioration.
          The brief flagged it as uncited and said to find the paper or drop the
          section. A search surfaced the intrinsic-training reviews but none
          supporting either half of that claim, so it is dropped.

          The recurrence cohort (174 people, 80.5% at one year, 52.9%
          reporting a recurrence) carried figures with no citation block, while
          every other number on this page has one. The brief's own rule is that
          every number traces to a citation printed here. The rationale it
          supports survives below without the numbers.

          The same rule removed two later sentences: a "2022 systematic review"
          saying intrinsic foot training does not improve pain, and a trial of
          "more than 800 runners" on gait asymmetry. Neither had a citation on
          this page.
        */}
        <h2 id={H.comeBack.id}>{H.comeBack.h2}</h2>
        <p>
          Heel pain can come back after it eases, so Walkito’s plan has no fixed
          length and no last week where the exercises stop. The plan is built
          one week at a time around a focus goal. When you reach a goal, it
          moves to maintaining: it keeps a place in the plan at a lower dose,
          and the next goal takes its place. Tests continue every{' '}
          {PROGRAM.testEveryDaysAfterGoal} days after the first goal is reached,
          so a slide in the numbers shows up instead of being guessed at. None
          of this promises the pain will not come back.
        </p>

        <h2 id={H.measure.id}>{H.measure.h2}</h2>
        <p>
          Walkito tracks progress with {PROGRAM.retestTests} physical tests that
          take about {PROGRAM.retestMinutes} minutes: single-leg calf raises
          until you can’t do another, how long you can hold the arch, and
          single-leg balance. The tests come every {PROGRAM.testEveryDays} days
          until you reach your first goal, then every{' '}
          {PROGRAM.testEveryDaysAfterGoal}. They are measured, not estimated, and
          using the app more cannot push them up.
        </p>
        <p>
          Walkito can also read walking asymmetry from Apple Health: the
          percentage of time your steps with one foot are faster or slower than
          your steps with the other foot. iPhone estimates it on its
          own. Walkito compares it only with <b>your own</b> starting point,
          never with other people’s numbers. It will tell you when your walking
          pattern changes. It will never tell you that the change means you are
          injured.
        </p>

        <h2 id={H.isNot.id}>{H.isNot.h2}</h2>
        <p>
          Walkito is an exercise program. It does not diagnose or treat any
          condition, and it does not replace a clinician. How these pages are
          written and checked is on <a href="/about/">the About page</a>.
          Questions about the app itself are answered in{' '}
          <a href="/faq/">the FAQ</a>.
        </p>
        <p>
          The arch trial above was run on <b>flexible</b> flat feet, where the
          arch comes back when the foot is lifted off the ground. The 2024
          review pooled studies of flat feet in general. Rigid flat feet are a
          structural problem that exercise will not change.
        </p>

        <h2 id={H.clinician.id}>{H.clinician.h2}</h2>
        <ul>
          <li>your pain followed an injury or a fall</li>
          <li>it comes with numbness, tingling, burning, swelling or warmth</li>
          <li>it wakes you at night</li>
          <li>it is sharp or getting worse</li>
          <li>squeezing the heel hurts</li>
          <li>one arch has flattened suddenly as an adult</li>
        </ul>
        <p>
          The full list is in{' '}
          <a href="/plantar-fasciitis-exercises/">the heel pain guide</a>.
        </p>

        <AppStoreBadge campaign="science" />
        <UpdatedLine lang="en" updated={PAGE_UPDATED.science} />
      </Prose>

      <Footer languages={{ en: '/science/', es: '/es/evidencia/', ru: '/ru/issledovaniya/' }} />
    </>
  );
}
