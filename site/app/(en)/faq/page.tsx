import type { Metadata } from 'next';
import { Fragment } from 'react';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { FAQ } from '@/lib/faq';
import { CHROME } from '@/lib/i18n';
import { faqSchema, formatDate } from '@/lib/schema';
import { PAGE_UPDATED, SITE_NAME, SITE_URL } from '@/lib/site';

const TITLE = 'Heel Pain & Plantar Fasciitis Exercise Program — FAQ';
const DESCRIPTION =
  'How Walkito’s heel pain exercise plan works — goals, sessions, tests, bad mornings, running, Apple Health and privacy — and what the research says.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/faq' },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: '/faq',
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: ['/opengraph-image'],
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
 * than no block, because it is the version the machine reads. `faqSchema`
 * strips the inline link marks, so the schema carries the same words as plain
 * text.
 */
const FAQ_SCHEMA = faqSchema(FAQ);

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Questions', item: `${SITE_URL}/faq/` },
  ],
};

/**
 * `**bold**` and `[label](/path/)`, and nothing else — the guides' two marks.
 * Answers link to the guide section that says more, and a link a reader can
 * see in context is one a crawler weighs as a real recommendation.
 */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <b key={i}>{bold[1]}</b>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) return <a key={i} href={link[2]}>{link[1]}</a>;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

export default function Faq() {
  const c = CHROME.en;
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead />

      <main className="shell prose">
        <h1>Heel pain exercise program: questions and answers</h1>
        <p className="byline">
          <a href="/about/">{c.byline}</a> · {c.updated}{' '}
          <time dateTime={PAGE_UPDATED.faq}>{formatDate(PAGE_UPDATED.faq, 'en')}</time>
        </p>

        <p className="lede">
          Walkito is an exercise plan for heel pain, arch pain and flexible flat
          feet with no fixed length: it builds one week at a time around a
          measured goal and adapts each day to your morning. Below is what it
          asks of you, what it does with what you log, what the research behind
          it found, and what it will never do.
        </p>

        {/* Real headings rather than a details/summary accordion. Collapsed
            content is still in the HTML, but an answer behind a click is an
            answer a person has to hunt for — and the whole point of this page is
            that each one can be read on its own. */}
        <div className="faq">
          {FAQ.map((entry) => (
            <section key={entry.q}>
              <h2>{entry.q}</h2>
              <p>
                <Inline text={entry.a} />
              </p>
            </section>
          ))}
        </div>

        <p>
          The exercises themselves, with starting doses, are in{' '}
          <a href="/plantar-fasciitis-exercises/">
            plantar fasciitis exercises and stretches
          </a>{' '}
          and <a href="/flat-feet-exercises/">flat feet exercises</a>; the
          studies behind every figure above are on{' '}
          <a href="/science/">the evidence page</a>.
        </p>

        <p className="notice">{c.notice}</p>

        <AppStoreBadge campaign="faq" />
      </main>

      <Footer />
    </>
  );
}
