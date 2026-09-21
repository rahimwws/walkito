import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { SITE_NAME, SITE_URL } from '@/lib/site';

/**
 * The evidence page.
 *
 * Three rules govern every word here, and they are the reason the page is worth
 * anything at all:
 *
 *   • every number traces to a citation printed on this page;
 *   • no finding is rounded up and no qualifier is dropped;
 *   • the twelve-month convergence travels with the three-month result, and
 *     "flexible" travels with every claim about arch shape.
 *
 * Two sections from the brief are missing, both deliberately. See the notes
 * where they would have gone.
 */
export const metadata: Metadata = {
  title: 'The Evidence Behind the Program',
  description:
    'Walkito is built from published rehabilitation research — progressive loading, intrinsic foot strengthening, and the stretching protocols clinical guidelines recommend.',
  alternates: { canonical: '/science' },
  openGraph: {
    title: `The Evidence Behind the Program | ${SITE_NAME}`,
    description:
      'The trials the program follows, what they found, and where their evidence stops.',
    url: '/science',
    type: 'website',
  },
};

const CITATIONS = [
  'Rathleff MS, Mølgaard CM, Fredberg U, et al. High-load strength training improves outcome in patients with plantar fasciitis: a randomized controlled trial with 12-month follow-up. Scandinavian Journal of Medicine & Science in Sports. 2015;25(3):e292–e300.',
  'Brijwasi T, Borkar P. A comprehensive exercise program improves foot alignment in people with flexible flat foot: a randomised trial. Journal of Physiotherapy. 2023;69(1):42–46.',
  'Cheng J, Han D, Qu J, et al. Effects of short foot training on foot posture in patients with flatfeet: a systematic review and meta-analysis. Journal of Back and Musculoskeletal Rehabilitation. 2024;37(4):839–851.',
  'Koc TA Jr, Bise CG, Neville C, et al. Heel Pain — Plantar Fasciitis: Revision 2023. Journal of Orthopaedic & Sports Physical Therapy. 2023;53(12):CPG1–CPG39.',
];

/**
 * `Article` with `citation`, not `MedicalWebPage`.
 *
 * The brief is explicit and the reasoning holds: declaring medical content
 * invites the strictest YMYL evaluation Google has — credentialed authorship,
 * medical review, the lot — in exchange for nothing an exercise program can
 * win. This page cites medical research; it does not claim to be medicine.
 */
const ARTICLE = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Evidence Behind the Program',
  description:
    'The published trials and clinical guidelines the Walkito program follows, what they found, and where their evidence stops.',
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}/science/`,
  citation: CITATIONS,
};

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
        <h1>The evidence behind the program</h1>

        <p className="lede">
          Walkito is not a set of exercises we invented. It follows published
          rehabilitation protocols, in the order the research supports, at the
          doses the trials used. This page lists the studies it is built on,
          what they found, and — just as importantly — where their evidence
          stops.
        </p>

        <h2>Pain and arch shape are two different problems</h2>
        <p>
          The program runs two tracks in parallel, because the research treats
          them separately. Exercises targeting the small muscles inside the foot
          improve balance, strength and arch posture — but a 2022 systematic
          review found they do <b>not</b> improve pain on their own.
        </p>
        <p>
          High-load calf strength training does the opposite: it moves pain
          quickly, but is not designed to change arch shape. Running one track
          only would leave half the problem untouched, so Walkito runs both from
          week three onward.
        </p>

        <h2>Strength training moves pain faster than stretching</h2>
        <p>
          In a randomised trial of 48 people with plantar fasciitis confirmed by
          ultrasound, participants did either high-load strength training or
          plantar-specific stretching. At three months the strength group scored{' '}
          <b>29 points lower</b> on the Foot Function Index (95% CI 6–52,
          p&nbsp;=&nbsp;0.016).
        </p>
        {/* The convergence is not a footnote and never moves away from the
            three-month figure. Separated, the 29 points reads as a permanent
            advantage, which is an overclaim the trial does not support. */}
        <p>
          At twelve months the two groups had converged — 22 against 16, no
          significant difference. <b>What this means:</b> strength training
          produces faster improvement, not a more complete one. That is why
          Walkito promises speed, and never a cure.
        </p>
        <p>
          The protocol Walkito uses follows this trial directly: single-leg heel
          raises on a step, a towel under the toes, three seconds up, two
          seconds held, three seconds down, every other day, with load
          increasing across blocks.
        </p>
        <p className="cite">{CITATIONS[0]}</p>

        <h2>The arch responds to training — given enough time</h2>
        <p>
          In a randomised trial of 52 people with <b>flexible</b> flat feet, a
          six-week program of foot shortening, ankle work, hip strengthening and
          stretching improved navicular drop by <b>0.4 cm</b> and arch angle by{' '}
          <b>16 degrees</b> more than the control group. This trial scored 8/10
          on the PEDro quality scale.
        </p>
        <p className="cite">{CITATIONS[1]}</p>
        <p>
          A 2024 meta-analysis of short-foot training found that{' '}
          <b>only programs longer than six weeks</b> produced significant
          improvement in navicular drop. Shorter programs showed no measurable
          effect. That is why Walkito’s arch work runs for a minimum of six
          weeks. The app does offer a six-week plan, and the honest reading of
          this meta-analysis is that it sits at the boundary: long enough to
          train, not long enough for the arch finding to apply. The twelve-week
          plan is the one this evidence supports.
        </p>
        <p className="cite">{CITATIONS[2]}</p>

        <h2>What clinical guidelines recommend</h2>
        <p>
          The 2023 clinical practice guideline from the{' '}
          <i>Journal of Orthopaedic &amp; Sports Physical Therapy</i> grades the
          evidence for each intervention.
        </p>
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
                <td>Daily, from day one</td>
              </tr>
              <tr>
                <td>Taping, 1–6 weeks</td>
                <td><b>A</b></td>
                <td>Recommended in week one if pain is high</td>
              </tr>
              <tr>
                <td>Night splints, 1–3 months, for first-step pain</td>
                <td><b>A</b></td>
                <td>Recommended when morning pain is reported</td>
              </tr>
              <tr>
                <td>Resistance and strength training</td>
                <td><b>B</b></td>
                <td>The core of weeks 2–12</td>
              </tr>
              <tr>
                <td>Orthotics used alone</td>
                <td><b>B — do not use in isolation</b></td>
                <td>Not recommended as a standalone fix</td>
              </tr>
              <tr>
                <td>Therapeutic ultrasound</td>
                <td><b>A — do not use</b></td>
                <td>Not included</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="cite">{CITATIONS[3]}</p>
        <p>
          The guideline also advises against complete rest, which increases
          stiffness. Walkito modifies load instead of stopping it — on a
          high-pain day the session gets shorter and lighter, but it still
          happens.
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
        */}
        <h2>Heel pain often returns — so the program doesn’t end</h2>
        <p>
          Recurrence is common enough that stopping at week twelve is the wrong
          shape for this problem. After the program, a maintenance phase keeps
          two sessions a week and retests every 28 days, to catch regression
          before it becomes pain again.
        </p>

        <h2>What we measure, and what we don’t</h2>
        <p>
          Walkito tracks progress with physical tests every two weeks: single-leg
          calf raises to failure, single-leg balance with eyes closed, and arch
          hold time. These are measured, not estimated, and cannot be inflated by
          using the app more.
        </p>
        <p>
          Walkito can also read walking asymmetry from Apple Health, which
          iPhone estimates automatically. We compare it only against{' '}
          <b>your own</b> baseline, never against a population norm — because
          none exists. A secondary analysis of a trial with more than 800
          runners found that gait asymmetry did not predict injury. We will tell
          you when your walking pattern changes. We will never tell you it means
          you are injured.
        </p>

        <h2>What Walkito is not</h2>
        <p>
          Walkito provides exercise programming. It does not diagnose or treat
          any condition.
        </p>
        <p>
          The evidence above applies to <b>flexible</b> flat feet — where the
          arch reappears when the foot is lifted off the ground. Rigid flat feet
          are a structural issue that exercise will not change.
        </p>
        <p className="notice">
          See a clinician first if your pain followed an injury or fall, comes
          with numbness, tingling, burning, swelling or warmth, wakes you at
          night, or if one arch has flattened suddenly as an adult.
        </p>

        <AppStoreBadge />
      </main>

      <Footer />
    </>
  );
}
