import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { ScreenshotSlot } from '@/components/ScreenshotSlot';
import { CHROME } from '@/lib/i18n';
import { PROGRAM, SITE_NAME, SITE_URL } from '@/lib/site';

/**
 * Heel pain from running.
 *
 * This was the home page until the site widened from runners to everyone with
 * heel and foot pain. The intro and the three "How it works" cards moved here
 * unchanged in substance, so the runner query keeps a page built for it.
 *
 * English only for now: no hreflang alternates until a Russian and Spanish
 * version exist, because an alternate that points at a page which is not a
 * translation of this one is worse than none.
 */
const TITLE = 'Heel Pain from Running: A 12-Week Exercise Plan';
const DESCRIPTION = `Heel pain from running? A ${PROGRAM.weeks}-week exercise plan for runners: ${PROGRAM.sessionMinutesMin} to ${PROGRAM.sessionMinutesMax} minutes a day of calf strength, stretching and balance work that steps back on bad mornings.`;
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

const ARTICLE = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}${PATH}`,
};

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
    title: 'It steps back on bad mornings',
    text: 'Log this morning’s heel pain in one tap. A high number shortens the session and drops a level; a long day on your feet takes the loaded work out. It never speeds up on a good day.',
    href: '/program/',
    link: 'How the plan adapts',
  },
  {
    title: `A retest every ${PROGRAM.blockDays} days`,
    text: `${PROGRAM.retestTests} physical tests in ${PROGRAM.retestMinutes} minutes: calf raises to failure, an arch hold, single-leg balance on both sides. Progress is measured, not guessed from how the week felt.`,
    href: '/program/',
    link: 'What the retests measure',
  },
  {
    title: 'Built from the trials',
    text: 'High-load calf strength and plantar-specific stretching, at the doses the published trials used and in the order the 2023 clinical guideline for heel pain recommends.',
    href: '/science/',
    link: 'Read the evidence',
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
          <p>
            Walkito is a {PROGRAM.weeks}-week exercise program for runners with
            heel and foot pain: {PROGRAM.sessionMinutesMin} to{' '}
            {PROGRAM.sessionMinutesMax} minutes a day of calf strength,
            stretching and balance work, a retest every {PROGRAM.blockDays} days,
            and a plan that steps back on the mornings your heel says it should.
          </p>
          <AppStoreBadge campaign="runners-hero" anchor />

          {/* A placeholder until the new screenshots exist: app-home.png shows a
              real name. */}
          <div className="shot">
            <ScreenshotSlot label="Screenshot: today’s plan" />
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
