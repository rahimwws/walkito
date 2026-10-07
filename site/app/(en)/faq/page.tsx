import type { Metadata } from 'next';
import { Fragment } from 'react';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Byline, UpdatedLine } from '@/components/Byline';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Cite } from '@/components/Cite';
import { Masthead } from '@/components/Masthead';
import { Prose, typeset } from '@/components/Prose';
import { FAQ, FAQ_GROUPS } from '@/lib/faq';
import { CHROME, alternatesCustomEnEs } from '@/lib/i18n';
import { faqSchema } from '@/lib/schema';
import { PAGE_UPDATED, SITE_NAME, SITE_URL } from '@/lib/site';

const TITLE = 'Heel Pain Exercise App: Questions and Answers';
const DESCRIPTION =
  'How the Walkito heel pain plan works: sessions, goals, tests, bad mornings, running, Apple Health, privacy and pricing, and what the research says.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesCustomEnEs('faq', 'en'),
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
 * `FAQPage`, built from the same entries the page renders, every group in page
 * order. The source lines under the clinical answers are not in it: the schema
 * carries the answer itself, word for word.
 *
 * The brief calls this the highest-value block on the site, and the reason is
 * structural rather than magical: a question with a self-contained answer is
 * already the shape an AI answer lifts, so there is nothing to summarise and
 * nothing to get wrong.
 *
 * Generated rather than hand-written so the schema and the visible text cannot
 * disagree. A block that answers differently from the page it sits on is worse
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
 * `**bold**` and `[label](/path/)`, and nothing else: the guides' two marks.
 * Answers link to the guide section that says more, and a link a reader can
 * see in context is one a crawler weighs as a real recommendation.
 */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return typeset(
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <b key={i}>{bold[1]}</b>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) return <a key={i} href={link[2]}>{link[1]}</a>;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>,
  );
}

export default function Faq() {
  const c = CHROME.en;
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead />

      <Prose className="shell prose">
        <h1>Heel pain exercise app: questions and answers</h1>
        <Byline lang="en" />

        <p className="lede">
          Walkito is an exercise plan for heel pain, arch pain and flexible flat
          feet. It has no fixed length. It builds one week at a time around a
          goal you can measure, and each day adapts to how your morning felt.
          Below is what Walkito asks of you, what it does with what you log,
          what the research found, and what it will never do.
        </p>

        <nav className="toc" aria-label={c.contents}>
          <h2>{c.contents}</h2>
          <ol>
            {FAQ_GROUPS.map((group) => (
              <li key={group.id}>
                <a href={`#${group.id}`}>{group.h2}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Real headings, not a details/summary accordion. Collapsed content
            is still in the HTML, but an answer behind a click is an answer a
            person has to hunt for, and the whole point of this page is that
            each one can be read on its own. */}
        {FAQ_GROUPS.map((group) => (
          <section key={group.id} id={group.id}>
            <h2>{group.h2}</h2>
            <div className="faq">
              {group.entries.map((entry) => (
                <section key={entry.q}>
                  <h3>{entry.q}</h3>
                  <p>
                    <Inline text={entry.a} />
                  </p>
                  {entry.source && (
                    <p className="cite">
                      <Inline text={entry.source} />
                    </p>
                  )}
                  {entry.cites?.map((i) => <Cite key={i} index={i} />)}
                </section>
              ))}
            </div>
          </section>
        ))}

        <p>
          The exercises themselves, with starting doses, are in{' '}
          <a href="/plantar-fasciitis-exercises/">
            plantar fasciitis exercises and stretches
          </a>{' '}
          and <a href="/flat-feet-exercises/">flat feet exercises</a>. The
          studies behind every figure above are on{' '}
          <a href="/science/">the evidence page</a>.
        </p>

        <UpdatedLine lang="en" updated={PAGE_UPDATED.faq} />
        <p className="notice">{c.notice}</p>

        <AppStoreBadge campaign="faq" />
      </Prose>

      <Footer languages={{ en: '/faq/', es: '/es/preguntas-frecuentes/', ru: '/ru/voprosy/' }} />
    </>
  );
}
