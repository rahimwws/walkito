import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Byline } from '@/components/Byline';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { ScreenshotSlot } from '@/components/ScreenshotSlot';
import { CHROME } from '@/lib/i18n';
import { articleSchema } from '@/lib/schema';
import { IN_SESSION_STOP, PAGE_UPDATED, PAIN_GOAL_MAX, PROGRAM, SITE_NAME, SITE_URL } from '@/lib/site';

const [MIN_A, MIN_B, MIN_C] = PROGRAM.sessionMinutes;
const { archHoldSeconds, calfRaises, balanceSeconds, gapPercent } = PROGRAM.goals;

/**
 * Heel pain from running.
 *
 * This was the home page until the site widened from runners to everyone with
 * heel and foot pain. The intro and the three "How it works" cards are the
 * runner home page's, in the version Rahym rewrote for the weekly plan, so the
 * runner query keeps a page built for it.
 *
 * English only for now: no hreflang alternates until a Russian and Spanish
 * version exist, because an alternate that points at a page which is not a
 * translation of this one is worse than none.
 */
const TITLE = 'Heel Pain from Running: An Exercise Plan That Adapts';
const DESCRIPTION = `Heel pain from running? An exercise plan for runners, built one week at a time around a goal: calf strength, stretching and balance work in sessions of ${MIN_A}, ${MIN_B} or ${MIN_C} minutes, softer on bad mornings.`;
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

const ARTICLE = articleSchema({
  headline: TITLE,
  description: DESCRIPTION,
  path: PATH,
  lang: 'en',
  published: PUBLISHED,
  updated: PAGE_UPDATED.runners,
  cites: [],
});

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Heel pain from running', item: `${SITE_URL}${PATH}` },
  ],
};

const HOW = [
  {
    title: 'A week at a time, around one goal',
    text: `Each week centres on a goal you can measure: morning heel pain at ${PAIN_GOAL_MAX}/10 or less for ${PROGRAM.painFreeDays} days running, a ${archHoldSeconds}-second arch hold, ${calfRaises} single-leg calf raises, ${balanceSeconds} seconds of single-leg balance, or left and right within ${gapPercent}% of each other. Reach one and it moves to maintaining while the next takes its place.`,
    href: '/program/',
    link: 'How the plan works',
  },
  {
    title: `${MIN_A}, ${MIN_B} or ${MIN_C} minutes, set by the morning`,
    text: `Log this morning’s heel pain in one tap. A painful morning, a big step count yesterday or a short night makes today’s session shorter or gentler; pain of ${IN_SESSION_STOP}/10 or more during a session ends it and steps the next two back. A bad day lowers the load rather than stopping the plan.`,
    href: '/science/',
    link: 'Read the evidence',
  },
  {
    title: `A test every ${PROGRAM.testEveryDays} days, then every ${PROGRAM.testEveryDaysAfterGoal}`,
    text: `${PROGRAM.retestTests} physical tests in about ${PROGRAM.retestMinutes} minutes: calf raises to failure, an arch hold, single-leg balance on both sides. Every ${PROGRAM.testEveryDays} days until your first goal is reached, then every ${PROGRAM.testEveryDaysAfterGoal}. Progress is measured, not guessed from how the week felt.`,
    href: '/program/',
    link: 'What the tests measure',
  },
];

export default function HeelPainRunners() {
  const c = CHROME.en;
  return (
    <>
      <JsonLd data={ARTICLE} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead />

      <main>
        <section className="shell hero">
          <h1>
            Heel pain
            <span>from running?</span>
          </h1>
          <Byline lang="en" updated={PAGE_UPDATED.runners} />
          <p>
            Walkito is an exercise plan for runners with heel and foot pain,
            built one week at a time around a goal you can measure: calf
            strength, stretching and balance work in sessions of {MIN_A}, {MIN_B}{' '}
            or {MIN_C} minutes. Each morning the day adapts to how your heel
            feels, and when a goal is reached the next one takes its place.
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

        <section className="shell proof">
          <h2>How it works</h2>
          <div className="quotes">
            {HOW.map((item) => (
              <figure key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={item.href}>{item.link}&nbsp;→</a>
              </figure>
            ))}
          </div>
          <p className="notice">{c.notice}</p>
          <AppStoreBadge campaign="runners-bottom" />
        </section>
      </main>

      <Footer />
    </>
  );
}
