import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Byline, UpdatedLine } from '@/components/Byline';
import { Evidence } from '@/components/Evidence';
import { Cite } from '@/components/Cite';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { ScreenshotSlot } from '@/components/ScreenshotSlot';
import { Prose } from '@/components/Prose';
import { CITE } from '@/lib/citations';
import { HEEL_PAIN_EN } from '@/lib/guides/en';
import { CHROME } from '@/lib/i18n';
import { articleSchema, faqSchema } from '@/lib/schema';
import { IN_SESSION_STOP, PAGE_UPDATED, PAIN_GOAL_MAX, PROGRAM, SITE_NAME, SITE_URL } from '@/lib/site';

const [MIN_A, MIN_B, MIN_C] = PROGRAM.sessionMinutes;
const [DAYS_A, DAYS_B, DAYS_C] = PROGRAM.daysPerWeek;
const { archHoldSeconds, calfRaises, balanceSeconds, gapPercent } = PROGRAM.goals;

/**
 * Heel pain from running.
 *
 * This was the home page until the site widened from runners to everyone with
 * heel and foot pain. It keeps the runner query a page built for it, now as an
 * article in the writing guide's order: the runner's moment, rest or run, the
 * next morning, the exercises, how the plan adapts, questions, when to see a
 * clinician, then the plan.
 *
 * Every medical fact here is one the plantar fasciitis guide (`HEEL_PAIN_EN`)
 * or the evidence page already carries with a source. The adaptation table is
 * read from `src/entities/program/model/plan/today.ts` (`FLARE_PAIN` 7 with
 * `FLARE_MINUTES` 3, `SPIKE_OVER_AVERAGE` 3, `HEAVY_DAY_RATIO` 1.4 over the
 * 28-day step average, `SHORT_SLEEP_HOURS` 6, in that order, first match
 * wins; `IN_SESSION_STOP` 6 steps the next `STEP_DOWN_SESSIONS` 2 back).
 * Change the plan, check the table.
 *
 * English only for now: no hreflang alternates until a Russian and Spanish
 * version exist, because an alternate that points at a page which is not a
 * translation of this one is worse than none.
 */
const TITLE = 'Heel Pain from Running: Rest or Keep Running?';
const DESCRIPTION =
  'Heel pain from running? When to change the load instead of stopping, what the next morning tells you, stress fracture signs, and a plan that adapts.';
const PATH = '/heel-pain-runners/';

export const metadata: Metadata = {
  // Absolute: the root template would append " | Walkito" a second time.
  title: { absolute: `${TITLE} | ${SITE_NAME}` },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: PATH,
    type: 'article',
  },
};

/** First published with the site's move away from a runners-only home page. */
const PUBLISHED = '2026-09-28';

/** Every study the page prints, for the Article schema and the byline count. */
const RUNNERS_CITES = [
  CITE.guideline,
  CITE.rathleff,
  CITE.achillesGuideline,
  CITE.alfredson,
  CITE.silbernagel,
  CITE.beyer,
  CITE.mtssReview,
  CITE.fatPadReview,
  CITE.posteriorTibialReview,
  CITE.buist,
  CITE.nielsen,
  CITE.malisoux,
];

const ARTICLE = articleSchema({
  headline: TITLE,
  description: DESCRIPTION,
  path: PATH,
  lang: 'en',
  published: PUBLISHED,
  updated: PAGE_UPDATED.runners,
  cites: RUNNERS_CITES,
});

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Heel pain from running', item: `${SITE_URL}${PATH}` },
  ],
};

/** This morning's signals and what each does to today's session, in the order `adjustToday` checks them. */
const ADAPT: readonly (readonly [string, string])[] = [
  ['Morning pain of 7/10 or more', `A ${MIN_A}-minute session of seated work, with nothing that loads the plantar fascia`],
  ['Morning pain 3 or more points above your average for the last 7 mornings', 'Each exercise steps down to an easier level'],
  ['Yesterday’s steps more than 1.4 times your 28-day average, on a strength day', 'The strength session becomes a lighter recovery session'],
  ['Less than 6 hours of sleep', 'Each exercise steps down to an easier level'],
];

/** Plain text on purpose: the page prints these as they are, and `faqSchema` gets the same words. */
const FAQ = [
  {
    q: 'Can I keep running with plantar fasciitis?',
    a: 'You don’t have to stop everything. Change the load instead. The 2023 heel pain guideline recommends learning to adjust the load on your feet, graded E, which means it comes from theory, not trials. Run shorter, less often or easier, and keep stretching every day. If running hurts sharply or the pain keeps getting worse, see a clinician.',
  },
  {
    q: 'Why does my heel hurt the morning after a run?',
    a: 'Heel pain on the first steps after sleep is the pattern most often linked to plantar fasciitis. The usual explanation is that the tissue under the foot stiffens at rest, then gets loaded suddenly by those first steps. If your first steps are clearly worse the morning after a run, that run was more than the heel could take.',
  },
  {
    q: 'Could heel pain from running be a stress fracture?',
    a: 'Heel pain from running can be a stress fracture. Pain that builds during runs after you added mileage, or pain when you squeeze the sides of the heel, can both be signs of one. The 2023 guideline names stress fractures among the other causes of heel pain. Walkito can’t tell them apart, so stop and see a clinician first.',
  },
];

export default function HeelPainRunners() {
  const c = CHROME.en;
  return (
    <>
      <JsonLd data={ARTICLE} />
      <JsonLd data={BREADCRUMBS} />
      <JsonLd data={faqSchema(FAQ)} />
      <Masthead />

      <Prose>
        <section className="shell hero">
          <h1>
            Heel pain
            <span>from running?</span>
          </h1>
          <Byline lang="en" cites={RUNNERS_CITES} main={CITE.guideline} />
          <p>
            Your heel hurts on the first steps the morning after a run. It eases
            once you get moving, then comes back after you sit for a while. You
            don’t have to stop everything. The 2023 heel pain guideline advises
            changing the load on your feet. Walkito builds that into a plan of
            calf strength, stretching and balance work, in sessions of {MIN_A},{' '}
            {MIN_B} or {MIN_C} minutes that adapt to how each morning feels.
          </p>
          <AppStoreBadge campaign="runners-hero" anchor />

          <div className="shot">
            <ScreenshotSlot
              src="/app/01-plan-goal.webp"
              label="Walkito: your plan with a pain-free running goal, step 2 of 4, stronger arch"
              priority
            />
          </div>
        </section>

        <article className="shell prose">
          <section id="plantar-fasciitis">
            <h2>Is heel pain after running plantar fasciitis?</h2>
            <p>
              Heel pain on the first steps in the morning, or after you sit for a
              while, is the pattern most often linked to plantar fasciitis. That
              is pain from the plantar fascia, the band of tissue under the foot.
              The 2023 clinical guideline for heel pain calls plantar fasciitis
              the most commonly recognized cause of heel pain under the foot.
            </p>
            <p>
              Plantar fasciitis is not the only cause. The same guideline names
              stress fractures among the other causes of heel pain, and only a
              clinician can say what is behind yours.
            </p>
            <blockquote>
              <p>
                “Plantar heel pain is an umbrella term that may represent a number
                of different diagnoses.”
              </p>
              <footer>2023 clinical practice guideline on heel pain, JOSPT</footer>
            </blockquote>
            <p>
              That is why this page also covers the Achilles tendon, the shin, the
              heel fat pad and the inside of the ankle.
            </p>
            <Cite index={CITE.guideline} />
          </section>

          <section id="rest-or-run">
            <h2>Should you rest or keep running with heel pain?</h2>
            <p>
              If heel pain flares when you run, change the load instead of
              stopping everything. The 2023 guideline recommends learning how to
              adjust the load on your feet at work, in sport and in daily life.
              That advice is graded E, which means it rests on theory, not
              trials. So there is no trial-tested rule for how much to cut back.
            </p>
            <p>
              For example, changing the load can mean shorter runs, fewer runs in
              a week or easier ones. Keep the plantar fascia and calf stretches every day,
              and cut back whatever makes the heel worse. On a bad morning, keep
              the stretches and drop the heel raises for the day.
            </p>
            <Cite index={CITE.guideline} />
          </section>

          <section id="next-morning">
            <h2>What does the next morning tell you after a run?</h2>
            <p>
              The morning after a run tells you whether that run was more than
              your heel could take. Morning pain is the clearest sign of how your
              foot coped with the day before. If your first steps are clearly
              worse after a run, make the next one lighter.
            </p>
            <p>
              Walkito asks about your morning pain every day for the same reason.
              You log it in one tap on a scale from 0 to 10, and that score
              decides how much today’s session asks of you. The first goal for
              heel pain is a better morning: pain at {PAIN_GOAL_MAX}/10 or less
              for {PROGRAM.painFreeDays} days in a row.
            </p>
          </section>

          <section id="exercises">
            <h2>Which exercises help heel pain from running?</h2>
            <p>
              Stretching and calf strength work are the exercises with the most
              evidence for plantar fasciitis. The 2023 guideline gives plantar
              fascia and calf stretching its top grade, A, and resistance and
              strength training a B.
            </p>
            <p>
              In a trial of 48 people, all wearing shoe inserts, slow heavy heel
              raises with a towel under the toes eased pain and improved daily
              function faster than stretching alone. By twelve months, both
              groups were even. Strength work brought the improvement forward. It
              did not make it bigger. The guideline supports doing both.
            </p>
            <p>
              The doses, how often to do each one and what each should feel like
              are in{' '}
              <a href="/plantar-fasciitis-exercises/">the plantar fasciitis exercises guide</a>.
              The study-by-study reasoning is on{' '}
              <a href="/science/">the evidence page</a>.
            </p>
            <Cite index={CITE.guideline} />
            <Cite index={CITE.rathleff} />
          </section>

          <section id="how-walkito-adapts">
            <h2>How does Walkito adapt to yesterday’s run?</h2>
            <p>
              Walkito adapts each session to yesterday’s load and this morning’s
              heel, so a hard day lowers the load without stopping the plan. If
              you connect Apple Health, Walkito reads your steps and sleep. If
              your phone or watch counts your run’s steps, a long run adds to
              that day’s total. The Health data stays on your
              phone. Each morning, the first row below that matches sets today’s
              session.
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">This morning</th>
                    <th scope="col">What today’s session does</th>
                  </tr>
                </thead>
                <tbody>
                  {ADAPT.map(([when, what]) => (
                    <tr key={when}>
                      <td>{when}</td>
                      <td>{what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              During a session, pain of {IN_SESSION_STOP}/10 or more ends it, and
              the next two sessions step down a level. A bad day lowers the load.
              It doesn’t stop the plan.
            </p>
          </section>

          <section id="achilles-pain">
            <h2>Could it be the Achilles tendon instead?</h2>
            <p>
              Achilles pain sits higher than plantar fasciitis: either where the
              tendon meets the back of the heel bone, or a few centimeters above
              it, in the tendon itself. The 2024 clinical guideline on Achilles
              tendon pain names pain that comes with loading the tendon, like
              running, hopping or stairs, as the main sign. If pressing the back
              of your heel or the tendon above it hurts more than pressing the
              arch, that points away from plantar fasciitis.
            </p>
            <p>
              Where it hurts changes the next step. Pain in the middle of the
              tendon, a few centimeters above the heel, usually starts with calf
              loading. Pain right where the tendon attaches is handled more
              carefully: a deep stretch at the bottom of a heel drop can irritate
              that spot, so the work usually starts from flat ground instead of
              off a step. Walkito’s calf stretches and heel raises are built for
              the plantar fascia and the calf, not for pain at the attachment. If
              yours sits right on the back of the heel bone, have a clinician
              check it before you load it hard.
            </p>
            <Evidence level="strong">
              Several controlled trials agree that loading the calf helps
              mid-tendon Achilles pain.
            </Evidence>
            <p>
              In a small 1998 trial, 15 recreational athletes with long-standing
              Achilles pain did heavy eccentric calf raises (lowering slowly under
              load) twice a day for 12 weeks. All 15 were back to running at
              their earlier level. A 2007 trial of 38 people found that staying
              active during rehab, as long as pain stayed within an agreed limit,
              did as well as stopping running and jumping first. A 2015 trial of
              58 people compared heavy slow strength work three times a week with
              the eccentric routine.
            </p>
            <blockquote>
              <p>
                “Both traditional ECC and HSR yield positive, equally good,
                lasting clinical results in patients with Achilles tendinopathy.”
              </p>
              <footer>Beyer and colleagues, American Journal of Sports Medicine, 2015</footer>
            </blockquote>
            <p>
              None of these trials used Walkito. They are the reason calf loading
              is the usual first step for this kind of pain. What seems to matter
              most is loading the calf steadily for weeks, not which exact routine
              you pick.
            </p>
            <Cite index={CITE.achillesGuideline} />
            <Cite index={CITE.alfredson} />
            <Cite index={CITE.silbernagel} />
            <Cite index={CITE.beyer} />
          </section>

          <section id="shin-splints">
            <h2>What about pain along the shin?</h2>
            <p>
              Shin splints, or medial tibial stress syndrome, is pain along the
              inner edge of the shin bone, usually spread over several inches
              rather than one sore spot. It isn’t the plantar fascia: the bone and the tissue around it react to repeated
              running load. A 2020 review of novice and recreational runners
              found the clearest links were in how runners move, such as more hip
              rotation and a foot that rolls inward more than usual.
            </p>
            <Evidence level="early">
              The 2020 review found only 11 studies worth including, most of them
              small. Only one was a randomized trial, and it tested shockwave
              therapy, not exercise.
            </Evidence>
            <p>
              Arch-support inserts helped foot pressure and pain in some of those
              studies, but the authors wrote that “more research is needed to
              confirm these results.” What usually helps in practice is the load:
              cut the running that set it off, then build back slowly once
              walking and easy jogging are pain-free.
            </p>
            <p>
              One sore spot you can point to with a finger, rather than pain
              along a stretch of bone, can be a stress fracture. That needs a
              clinician, not more running. Walkito has no shin-specific program.
              If you mark the shin as sore, it gives ankle mobility work, which
              can sit next to that recovery but does not replace running less.
            </p>
            <Cite index={CITE.mtssReview} />
          </section>

          <section id="fat-pad">
            <h2>Could it be the fat pad under your heel?</h2>
            <p>
              The heel fat pad is the cushion under the heel bone. Pain from it,
              called heel fat pad syndrome, can feel like plantar fasciitis, but
              it tends to sit in the middle of the heel rather than toward the
              arch. The 2023 heel pain guideline names it as one of the causes
              that fall under “plantar heel pain.”
            </p>
            <Evidence level="early">
              A 2022 review found 7 usable studies, mostly small observational
              ones, and no trials of exercise for this condition.
            </Evidence>
            <p>
              The review’s own conclusion is that current advice for heel fat pad
              syndrome is “mostly anecdotal.” Telling it apart from plantar
              fasciitis usually takes an exam, and sometimes an ultrasound of the
              pad’s thickness. That is something a clinician does, not something
              you can check at home. The exercises on this page were not tested
              for fat pad pain.
            </p>
            <Cite index={CITE.guideline} />
            <Cite index={CITE.fatPadReview} />
          </section>

          <section id="posterior-tibial-tendon">
            <h2>What if the pain is on the inside of the ankle?</h2>
            <p>
              Pain below and behind the inner ankle bone points to the posterior
              tibial tendon, the tendon that helps hold up your arch. It is a
              different structure from the plantar fascia, but the two are linked:
              a tendon that is not doing its job can let the arch drop and change
              how the fascia is loaded.
            </p>
            <Evidence level="early">
              A 2018 systematic review found “preliminary evidence” that exercise
              helps, and few high-quality trials.
            </Evidence>
            <p>
              The trials in that review used strength work for the muscle behind
              this tendon, calf and ankle stretches, and balance work, often with
              an arch-support insert. Walkito’s band turn-in trains that same
              muscle, and its ankle and balance work overlaps with what the review
              covered. If the inside of your ankle is swollen, or one arch looks
              flatter than it did a year ago, see a clinician first. Missed early,
              this can lead to a flat foot that stays flat.
            </p>
            <Cite index={CITE.posteriorTibialReview} />
          </section>


          <section id="training-load">
            <h2>Does the 10% rule prevent running injuries?</h2>
            <p>
              The 10% rule says to add no more than 10% to your weekly distance
              from one week to the next. No trial has shown that it lowers injury
              risk. A 2008 trial put 532 new runners on either a 13-week program
              built on the 10% rule or a faster 8-week program. Injuries were
              almost identical: 20.8% in the slower group and 20.3% in the faster
              one.
            </p>
            <Evidence level="unsupported">
              One randomized trial tested the 10% rule directly and found no
              difference.
            </Evidence>
            <p>
              Sudden jumps are a better thing to watch than any exact percentage.
              A 2014 study followed 874 new runners with GPS watches for a year.
              Runners who added more than 30% over two weeks had more
              distance-related injuries than those who stayed under 10%, though
              the result fell just short of statistical significance. Those who
              added 10 to 30% did not clearly do worse.
            </p>
            <Evidence level="early">
              Avoid big, sudden jumps in distance. One cohort study points that
              way, and the result was borderline.
            </Evidence>
            <p>
              Walkito does not plan your running. It does watch for spikes: if
              yesterday’s steps were more than 1.4 times your 28-day average on a
              strength day, that session turns into a lighter recovery session.
            </p>
            <Cite index={CITE.buist} />
            <Cite index={CITE.nielsen} />
          </section>

          <section id="shoe-replacement">
            <h2>When should you replace your running shoes?</h2>
            <p>
              The usual advice is every 300 to 500 miles. That number is an
              estimate of when cushioning wears down, not a result from a study
              that counted injuries against shoe age. If you don’t track miles, a
              flattened midsole or a sole worn down on one side tells you the same
              thing.
            </p>
            <Evidence level="early">
              The 300 to 500 mile range is a common rule of thumb, not a trial
              result.
            </Evidence>
            <p>
              Switching between two pairs has more behind it. A 2015 study
              followed 264 runners for 22 weeks. Those who ran in more than one
              pair had about a 39% lower injury risk than those who used one
              pair. That is an observed link, not proof that the second pair
              caused the difference. The authors’ explanation is that different
              shoes spread the load a little differently from run to run.
            </p>
            <Evidence level="early">
              One observational study of 264 runners, not a randomized trial.
            </Evidence>
            <p>
              None of this means buying more shoes than you can afford. One pair,
              replaced when the cushioning visibly flattens, is a fine default. If
              you already own two pairs you like, take turns with them.
            </p>
            <Cite index={CITE.malisoux} />
          </section>

          <section className="faq" id="faq">
            <h2>Questions runners ask</h2>
            {FAQ.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>

          <section id="see-a-clinician">
            <h2>When should a runner see a clinician about heel pain?</h2>
            <p>
              A runner should see a clinician before running on if the pain
              builds during runs after adding mileage, or if squeezing the sides
              of the heel hurts. Both can be signs of a stress fracture. Sharp
              pain when you run, or pain that gets worse week after week, needs a
              clinician too. So does heel or shin pain that wakes you at night:
              pain at rest points more toward a stress fracture than toward
              plantar fasciitis, Achilles pain or shin splints.
            </p>
            <h3>{HEEL_PAIN_EN.redFlags.h2}</h3>
            <ul>
              {HEEL_PAIN_EN.redFlags.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          <section id="plan">
            <h2>Doing it as a plan</h2>
            <p>
              You don’t have to work out the order, the doses or when to move on.
              Walkito builds a plan one week at a time around one goal you can
              measure. For heel pain, the first goal is morning pain at{' '}
              {PAIN_GOAL_MAX}/10 or less for {PROGRAM.painFreeDays} days in a
              row. The others are a {archHoldSeconds}-second arch hold,{' '}
              {calfRaises} single-leg calf raises, {balanceSeconds} seconds of
              single-leg balance, and left and right within {gapPercent}% of each
              other. A goal you reach moves to maintaining at a lower dose, and
              the next one takes its place.
            </p>
            <p>
              You pick {DAYS_A}, {DAYS_B} or {DAYS_C} days a week and sessions of{' '}
              {MIN_A}, {MIN_B} or {MIN_C} minutes. Every {PROGRAM.testEveryDays}{' '}
              days (then every {PROGRAM.testEveryDaysAfterGoal} once your first
              goal is reached), {PROGRAM.retestTests} tests in about{' '}
              {PROGRAM.retestMinutes} minutes check calf raises to failure, an
              arch hold and single-leg balance on both sides. Progress is
              measured, not guessed from how the week felt.{' '}
              <a href="/program/">How the plan works</a>.
            </p>

            <UpdatedLine lang="en" updated={PAGE_UPDATED.runners} />
            <p className="notice">{c.notice}</p>

            <p className="cta-line">Start with {MIN_A} minutes a day.</p>
            <AppStoreBadge campaign="runners-bottom" />
          </section>
        </article>
      </Prose>

      <Footer />
    </>
  );
}
