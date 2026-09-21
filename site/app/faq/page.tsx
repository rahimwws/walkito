import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { FAQ } from '@/lib/faq';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Questions',
  description:
    'How long the program runs, what happens when you miss days, which Apple Health permissions it asks for, and how the streak counts.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: `Questions | ${SITE_NAME}`,
    description:
      'Session length, missed days, Apple Health permissions, notifications and the streak — answered.',
    url: '/faq',
    type: 'website',
  },
};

/**
 * `FAQPage`, built from the same array the page renders.
 *
 * The brief calls this the highest-value block on the site, and the reason is
 * structural rather than magical: a question with a self-contained answer is
 * already the shape an AI answer lifts, so there is nothing to summarise and
 * nothing to get wrong.
 *
 * Generated rather than hand-written so the schema and the visible text cannot
 * disagree — a block that answers differently from the page it sits on is worse
 * than no block, because it is the version the machine reads.
 */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((entry) => ({
    '@type': 'Question',
    name: entry.q,
    acceptedAnswer: { '@type': 'Answer', text: entry.a },
  })),
};

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Questions', item: `${SITE_URL}/faq/` },
  ],
};

export default function Faq() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead />

      <main className="shell prose">
        <h1>Questions</h1>

        <p className="lede">
          What the program asks of you, what it does with what you log, and what
          it will never do. Every answer here describes the app rather than the
          condition.
        </p>

        {/* Real headings rather than a details/summary accordion. Collapsed
            content is still in the HTML, but an answer behind a click is an
            answer a person has to hunt for — and the whole point of this page is
            that each one can be read on its own. */}
        <div className="faq">
          {FAQ.map((entry) => (
            <section key={entry.q}>
              <h2>{entry.q}</h2>
              <p>{entry.a}</p>
            </section>
          ))}
        </div>

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
