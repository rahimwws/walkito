import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Byline } from '@/components/Byline';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { ScreenshotSlot } from '@/components/ScreenshotSlot';
import { Prose } from '@/components/Prose';
import { CHROME } from '@/lib/i18n';
import { articleSchema } from '@/lib/schema';
import { IN_SESSION_STOP, PAGE_UPDATED, PAIN_GOAL_MAX, PROGRAM, SITE_NAME, SITE_URL } from '@/lib/site';

/**
 * How the plan works.
 *
 * There is no fixed length any more, and this page must never say there is.
 * The app builds one week at a time around a focus goal
 * (`src/entities/program/model/plan/week.ts`); a reached goal moves to
 * maintaining and the next takes its place (`goals.ts`). This page used to
 * describe a fixed-length program of six blocks of fourteen days, and every
 * sentence of that is now wrong.
 *
 * Numbers come from `PROGRAM`, `PAIN_GOAL_MAX` and `IN_SESSION_STOP` in
 * `lib/site.ts`, which are read out of the app. The morning rules are the
 * exception: 7/10 for a flare day, three minutes of seated work and stepping
 * two sessions back are `FLARE_PAIN`, `FLARE_MINUTES` and `STEP_DOWN_SESSIONS`
 * in `plan/today.ts`. The spike, heavy-day and short-sleep thresholds, and the
 * pain-to-strength switch in `pickFocus`, are left as words on purpose: they
 * are tuning, and a page that quotes tuning goes stale the day it changes.
 *
 * Equipment is the onboarding step in `src/pages/onboarding/model/steps.ts`.
 * The three tests and the derived left/right gap are `RETEST_TESTS` and
 * `symmetryPct` in `src/entities/program/model/`.
 */

/** "3, 5 or 7": a list of options as a sentence says it. */
const or = (xs: readonly number[]) => `${xs.slice(0, -1).join(', ')} or ${xs[xs.length - 1]}`;

const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

const TITLE = 'Heel Pain Exercise Plan That Adapts Every Week';
const DESCRIPTION = `How Walkito builds a heel pain exercise plan: measured goals, ${DAYS} days a week, ${MINUTES} minute sessions, and a short test every ${PROGRAM.testEveryDays} days.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/program' },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: '/program',
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-09-21',
    modifiedTime: PAGE_UPDATED.program,
    images: ['/opengraph-image'],
  },
};

/**
 * `Article`, not `HowTo` and not `MedicalWebPage`.
 *
 * The old `HowTo` carried `totalTime: P84D`, a length the plan no longer has,
 * and its steps described a fixed sequence the app no longer runs. An adaptive
 * plan is described, not stepped through. `MedicalWebPage` stays out for the
 * reason the evidence page gives: this is exercise programming, and declaring
 * medical content invites the strictest review there is in exchange for
 * nothing an exercise app can win.
 */
const ARTICLE = articleSchema({
  headline: TITLE,
  description: DESCRIPTION,
  path: '/program/',
  lang: 'en',
  published: '2026-09-21',
  updated: PAGE_UPDATED.program,
  cites: [],
});

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Program', item: `${SITE_URL}/program/` },
  ],
};

export default function Program() {
  const c = CHROME.en;
  return (
    <>
      <JsonLd data={ARTICLE} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead />

      <Prose className="shell prose">
        <h1>A heel pain exercise plan that adapts every week</h1>
        <Byline lang="en" updated={PAGE_UPDATED.program} />

        {/*
          Answer first. AI engines lift the first self-contained passage that
          answers the query, and a page that opens by explaining anatomy gets
          its third paragraph quoted or nothing at all.
        */}
        <p className="lede">
          Walkito builds your heel pain exercise plan one week at a time, around
          goals you can measure. Each morning it adjusts the day to how your
          foot feels. A short test every {PROGRAM.testEveryDays} days shows what
          is changing. The plan has no fixed length: when you reach a goal, the
          next one takes its place.
        </p>
        <p>
          Heel pain can change from one morning to the next, and a fixed list
          of exercises can’t tell a good morning from a bad one. So the plan
          listens to your check-ins and your test results, and changes with
          them.
        </p>

        <h2>How does Walkito build my plan?</h2>
        <p>
          Walkito builds your plan in five steps. Each one has its own section
          below.
        </p>
        <ol>
          <li>
            You say what you are working toward, and Walkito sets up to three
            measured goals, with pain first if something hurts.
          </li>
          <li>
            You pick {DAYS} days a week and sessions of {MINUTES} minutes.
            Walkito plans one week at a time.
          </li>
          <li>Each morning, a quick check-in adjusts that day’s session.</li>
          <li>
            Every {PROGRAM.testEveryDays} days, a test of about{' '}
            {PROGRAM.retestMinutes} minutes measures your progress. After your
            first goal, it comes every {PROGRAM.testEveryDaysAfterGoal} days.
          </li>
          <li>
            When you reach a goal, it drops to a lower dose so you keep it, and
            the next goal starts.
          </li>
        </ol>

        <h2>What goals does Walkito work toward?</h2>
        <p>
          Walkito works toward five goals, and each one is a number you can
          test, not a feeling.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Goal</th>
                <th scope="col">Target</th>
                <th scope="col">How it is measured</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Pain-free mornings</th>
                <td>
                  Morning pain at or under {PAIN_GOAL_MAX}/10 for{' '}
                  {PROGRAM.painFreeDays} days in a row
                </td>
                <td>Your morning check-in</td>
              </tr>
              <tr>
                <th scope="row">Arch hold</th>
                <td>{PROGRAM.goals.archHoldSeconds} seconds</td>
                <td>The test</td>
              </tr>
              <tr>
                <th scope="row">Calf raises</th>
                <td>{PROGRAM.goals.calfRaises} single-leg calf raises</td>
                <td>The test</td>
              </tr>
              <tr>
                <th scope="row">Balance</th>
                <td>{PROGRAM.goals.balanceSeconds} seconds on one leg</td>
                <td>The test</td>
              </tr>
              <tr>
                <th scope="row">Left/right difference</th>
                <td>Under {PROGRAM.goals.gapPercent}% between your two sides</td>
                <td>Worked out from your calf raises</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="exercise-detail">
          <ScreenshotSlot
            src="/app/01-plan-goal.webp"
            label="Walkito: the goal card, step 2 of 4 toward pain-free running, above today’s session"
            size="sm"
          />
          <div>
            <p>
              Setup asks what you are working toward, such as running without
              pain, stronger legs or steadier ankles. Walkito turns your answer
              into measured goals, in an order that suits it. You start with at
              most three. If something hurts, pain-free mornings always comes
              first.
            </p>
            <p>
              Each week, one goal is the focus, usually the one furthest from
              its target. Once your morning pain has come down a good way, the
              focus can move on to a strength goal while the pain keeps
              settling.
            </p>
          </div>
        </div>
        <p>
          The arch goal is meant for flexible flat feet, where the arch comes
          back when the foot is off the ground. Walkito doesn’t check which kind
          you have. If your arch stays flat even off the ground, leave the arch
          goal aside and see a clinician. Training can’t change a foot whose
          shape is structural.
        </p>

        <h2>How many days a week, and how long are the sessions?</h2>
        <p>
          You choose {DAYS} training days a week and sessions of {MINUTES}{' '}
          minutes. The default is {PROGRAM.defaultMinutes} minutes, and you can
          change it on any day. Each session has 2 to 4 exercises. The exercise
          for your focus goal comes first and is never cut, not even in a{' '}
          {PROGRAM.sessionMinutes[0]}-minute session. The others fill the time
          around it.
        </p>
        <div className="exercise-detail">
          <ScreenshotSlot
            src="/app/05-week.webp"
            label="Walkito: this week’s plan, Monday to Sunday with rest days, and next week"
            size="sm"
          />
          <div>
            <p>
              Strength days never fall back to back. With five or seven days,
              mobility, balance and recovery sessions sit between them. The
              days without a session are planned rest, and planned rest never
              breaks your streak.
            </p>
            <p>
              Walkito builds each new week from how the last one went: your
              morning pain, and whether sessions felt easy or hard.
            </p>
          </div>
        </div>

        <h2>What equipment do I need?</h2>
        <p>
          You can start the plan with no equipment at all. During setup,
          Walkito asks what you have at home: a step or stairs, a resistance
          band, a towel, a pillow or a massage ball. Exercises that need
          something you don’t have are left out of your plan, and the week is
          built from the rest. You can pick as many items as you have, or none
          of them.
        </p>

        <h2>Does the plan get harder over time?</h2>
        <p>
          The plan gets harder slowly, one level at a time, and only when your
          foot is ready. Exercises sit on chains, such as calf, arch, balance
          and hip, from level 1 to level 5. The chain for your focus goal moves
          up one level after the last two sessions with that exercise felt
          easy, and only if your morning pain did not rise that week. A hard
          session, or a week when morning pain went up, steps it back a level.
        </p>
        <p>
          The first week settles you in. It uses nothing above level 2 and
          nothing that loads the plantar fascia, the band of tissue under your
          foot that runs from the heel to the toes. Loaded work, like the towel
          heel raise in{' '}
          <a href="/plantar-fasciitis-exercises/">the heel pain guide</a>,
          comes later. While pain is your focus goal, calf work on strength
          days stays at level 1 or 2.
        </p>

        <h2>What happens on a bad morning?</h2>
        <p>
          On a bad morning, Walkito makes that day’s session lighter. The week
          says what each day is for. Your morning check-in decides how much of
          it your foot can take today:
        </p>
        <ul>
          <li>
            A high-pain morning (7/10 or more) turns the day into about three
            minutes of seated work that keeps load off the plantar fascia.
          </li>
          <li>
            A morning well above your recent average steps each exercise back a
            level.
          </li>
          <li>
            A big day on your feet yesterday, well above your usual step count,
            turns a strength session into a lighter recovery one.
          </li>
          <li>A short night’s sleep steps the session back a level.</li>
          <li>
            Pain of {IN_SESSION_STOP}/10 or more during a session ends it, and
            the next two sessions step back.
          </li>
        </ul>
        <div className="exercise-detail">
          <ScreenshotSlot
            src="/app/02b-checkin-sheet.webp"
            label="Walkito: the morning check-in, pain 7 out of 10 at the heel, above the usual range"
            size="sm"
          />
          <div>
            <p>
              Steps and sleep come from Apple Health, if you allow it. That data
              stays on your phone.
            </p>
            <p>
              A good morning never speeds the plan up. A day only steps back,
              then returns to normal. Progress happens from week to week, not on
              one lucky morning.
            </p>
          </div>
        </div>

        <h2>How often does Walkito test my progress?</h2>
        <p>
          Walkito tests your progress every {PROGRAM.testEveryDays} days until
          you reach your first goal, then every{' '}
          {PROGRAM.testEveryDaysAfterGoal} days. Each test has{' '}
          {PROGRAM.retestTests} parts and takes about{' '}
          {PROGRAM.retestMinutes} minutes:
        </p>
        <ul>
          <li>calf raises on each leg, as many as you can do</li>
          <li>an arch hold</li>
          <li>balance on one leg</li>
        </ul>
        <p>
          The difference between your left and right side is worked out from
          the calf raises, so there is no fourth test. A goal counts as reached
          on these numbers, or on your morning pain log for the pain goal. A
          streak of sessions never counts on its own.
        </p>

        <h2>What happens when I reach a goal?</h2>
        <p>
          When you reach a goal, it moves to maintaining, and the next goal
          takes its place. A maintained goal keeps a spot in your plan at a
          lower dose: one level down, on some strength days. That way you keep
          what you built. The plan has no last week and no finish screen. It
          changes what it works on instead of ending.
        </p>
        <p>
          Heel pain can come back. Keeping the work that helped, at a lower
          dose, seemed better to the Walkito team than dropping it the week it
          stops hurting. That is a design choice, not a research finding.
        </p>

        <h2>What is the plan based on?</h2>
        <p>
          The plan is based on the exercises and research in the Walkito
          guides. The exercises and their starting doses are in{' '}
          <a href="/plantar-fasciitis-exercises/">
            plantar fasciitis exercises and stretches
          </a>{' '}
          and <a href="/flat-feet-exercises/">flat feet exercises</a>. The
          trials and the 2023 clinical guideline behind them are on{' '}
          <a href="/science/">the evidence page</a>. It explains why strength
          work comes with stretching, and how long arch work took to show in
          the research. Practical questions are answered in{' '}
          <a href="/faq/">the FAQ</a>.
        </p>

        <h2>Starting the plan</h2>
        <p>
          You don’t have to work out the order, the doses or when to move up.
          Walkito does that one week at a time, and the test every{' '}
          {PROGRAM.testEveryDays} days shows you what is changing.
        </p>

        {/* Required on every page that mentions symptoms. Not a disclaimer
            bolted on at the bottom: it is part of what the product is. */}
        <p className="notice">{c.notice}</p>

        <p className="cta-line">Start with {PROGRAM.sessionMinutes[0]} minutes a day.</p>
        <AppStoreBadge campaign="program" />
      </Prose>

      <Footer />
    </>
  );
}
