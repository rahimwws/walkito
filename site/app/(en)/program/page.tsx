import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Byline } from '@/components/Byline';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { CHROME } from '@/lib/i18n';
import { articleSchema } from '@/lib/schema';
import { PAGE_UPDATED, PROGRAM, SITE_NAME, SITE_URL } from '@/lib/site';

/**
 * How the plan works.
 *
 * There is no fixed length any more, and this page must never say there is.
 * The app builds one week at a time around a focus goal
 * (`src/entities/program/model/plan/week.ts`); a reached goal moves to
 * maintaining and the next takes its place (`goals.ts`). This page used to be
 * "The 12-week program" — six blocks of fourteen days — and every sentence of
 * that is now wrong.
 *
 * Numbers come from `PROGRAM` in `lib/site.ts`, which is read out of the app.
 * The morning rules are the exception: 7/10 for a flare day, three minutes of
 * seated work, 6/10 in a session ending it and stepping two sessions back are
 * `FLARE_PAIN`, `FLARE_MINUTES`, `IN_SESSION_STOP` and `STEP_DOWN_SESSIONS` in
 * `plan/today.ts`. The spike, heavy-day and short-sleep thresholds are left as
 * words on purpose — they are tuning, and a page that quotes tuning goes stale
 * the day it changes.
 */

/** "3, 5 or 7" — a list of options as a sentence says it. */
const or = (xs: readonly number[]) => `${xs.slice(0, -1).join(', ')} or ${xs[xs.length - 1]}`;

const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

const TITLE = 'Heel Pain Exercise Plan That Adapts Every Week';
const DESCRIPTION = `A heel pain exercise plan built weekly around a goal: ${DAYS} days a week, ${MINUTES} minutes, tests every ${PROGRAM.testEveryDays} days, then every ${PROGRAM.testEveryDaysAfterGoal} after the first goal.`;

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
 * The old `HowTo` carried `totalTime: P84D` — a length the plan no longer has —
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

      <main className="shell prose">
        <h1>A heel pain exercise plan that adapts every week</h1>
        <Byline lang="en" updated={PAGE_UPDATED.program} />

        {/*
          Answer first. AI engines lift the first self-contained passage that
          answers the query, and a page that opens by explaining anatomy gets
          its third paragraph quoted or nothing at all.
        */}
        <p className="lede">
          Walkito has no fixed length. It builds your plan one week at a time
          around one focus goal, adjusts each day to how your morning went, and
          retests you every {PROGRAM.testEveryDays} days until your first goal
          is reached, then every {PROGRAM.testEveryDaysAfterGoal}. When a goal
          is reached it moves to maintaining and the next goal takes its place,
          so the plan keeps going for as long as you use it.
        </p>

        <h2>Five goals, each one measured</h2>
        <p>Every goal is a number you can test, not a feeling:</p>
        <ul>
          <li>
            <b>Pain-free mornings:</b> morning pain at or under 1/10 for{' '}
            {PROGRAM.painFreeDays} days running.
          </li>
          <li>
            <b>Arch hold:</b> holding the arch for {PROGRAM.goals.archHoldSeconds}{' '}
            seconds.
          </li>
          <li>
            <b>Calf raises:</b> {PROGRAM.goals.calfRaises} single-leg calf
            raises.
          </li>
          <li>
            <b>Balance:</b> {PROGRAM.goals.balanceSeconds} seconds standing on
            one leg.
          </li>
          <li>
            <b>Left/right difference:</b> under {PROGRAM.goals.gapPercent}%
            between your two sides.
          </li>
        </ul>
        <p>
          You start with at most three, pain first if you have pain. The arch
          goal is for flexible flat feet, and the app does not check which kind
          you have: if your arch stays flat even off the ground, leave the arch
          goal aside and see a clinician, because training cannot change a foot
          whose shape is structural. Each week one of your goals is the focus,
          usually the one furthest from its target.
        </p>

        <h2>How a week is built</h2>
        <p>
          You choose {DAYS} training days a week and sessions of {MINUTES}{' '}
          minutes ({PROGRAM.defaultMinutes} by default, and you can change it
          on any day). Each session is 2 to 4 exercises. The exercise for the
          focus goal comes first and is never cut, not even in a{' '}
          {PROGRAM.sessionMinutes[0]}-minute session; the others fill the time
          around it.
        </p>
        <p>
          Strength days never fall back to back. With five or seven days,
          mobility, balance and recovery sessions sit between them. The days
          without a session are rest the plan assigns, and a prescribed rest
          day never breaks your streak.
        </p>
        <p>
          Exercises sit on chains (calf, arch, balance, hip and mobility) at
          levels 1 to 5. The focus goal’s chain moves up one level at a time,
          only after sessions that felt easy and never in a week when your
          morning pain rose; a hard week steps it back.
        </p>

        <h2>Week one settles in</h2>
        <p>
          The first week loads nothing onto the plantar fascia and uses nothing
          above level 2. It is there to get the foot moving, not to push.
          Loaded work, like the towel heel raise in{' '}
          <a href="/plantar-fasciitis-exercises/">the heel pain guide</a>,
          comes later, one level at a time.
        </p>

        <h2>Each morning adjusts the day</h2>
        <p>
          The week says what each day is for. Your morning check-in decides how
          much of it the foot can take today:
        </p>
        <ul>
          <li>
            A high-pain morning (7/10 or more) turns the day into about three
            minutes of seated work that keeps load off the fascia.
          </li>
          <li>
            A morning well above your recent average steps each exercise back a
            level.
          </li>
          <li>
            A big day on your feet yesterday, well above your usual step count,
            turns a strength session into a lighter recovery one.
          </li>
          <li>
            A short night, when Apple Health has your sleep, steps the session
            back.
          </li>
          <li>
            Pain of 6/10 or more during a session ends it, and the next two
            sessions step back.
          </li>
        </ul>
        <p>
          A good morning never speeds the plan up. Days only step back and then
          return; progress happens week to week, not on one lucky morning.
        </p>

        <h2>
          Tests: every {PROGRAM.testEveryDays} days, then every{' '}
          {PROGRAM.testEveryDaysAfterGoal}
        </h2>
        <p>
          {PROGRAM.retestTests} measurements in about {PROGRAM.retestMinutes}{' '}
          minutes: calf raises to failure on each leg, an arch hold, and
          single-leg balance. The difference between your left and right side
          is worked out from the calf raises, so there is no fourth test. Tests
          come every {PROGRAM.testEveryDays} days until your first goal is
          reached, then every {PROGRAM.testEveryDaysAfterGoal}. A goal is
          reached on these numbers and on your morning pain log, never on a
          streak.
        </p>

        <h2>When a goal is reached</h2>
        <p>
          It moves to maintaining. A maintained goal keeps a place in the plan
          at a lower dose (one level down, on some strength days), so what you
          built is not lost, and the next goal takes its place. There is no
          last week and no finish screen: the plan changes what it works on
          rather than ending. Heel pain can come back, and our reasoning (a
          design choice, not a research finding) is that keeping the work
          that helped, at a lower dose, is better than dropping it the week it
          stops hurting.
        </p>

        <h2>What it is built on</h2>
        <p>
          The exercises and their starting doses are in{' '}
          <a href="/plantar-fasciitis-exercises/">
            plantar fasciitis exercises and stretches
          </a>{' '}
          and <a href="/flat-feet-exercises/">flat feet exercises</a>. The
          trials and the 2023 clinical guideline behind them (why strength work
          comes with stretching, and how long arch work took to show in the
          research) are on <a href="/science/">the evidence page</a>. Practical questions
          are answered in <a href="/faq/">the FAQ</a>.
        </p>

        {/* Required on every page that mentions symptoms. Not a disclaimer
            bolted on at the bottom — it is part of what the product is. */}
        <p className="notice">{c.notice}</p>

        <AppStoreBadge campaign="program" />
      </main>

      <Footer />
    </>
  );
}
