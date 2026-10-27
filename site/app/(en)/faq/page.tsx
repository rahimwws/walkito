import type { Metadata } from 'next';
import { Fragment } from 'react';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Byline, UpdatedLine } from '@/components/Byline';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Cite } from '@/components/Cite';
import { Masthead } from '@/components/Masthead';
import { FaqRows, Prose, typeset } from '@/components/Prose';
import { FAQ, FAQ_GROUPS } from '@/lib/faq';
import { CHROME, alternatesCustomEnEs } from '@/lib/i18n';
import { faqSchema } from '@/lib/schema';
import { PAGE_UPDATED, SITE_NAME, SITE_URL } from '@/lib/site';

const TITLE = 'Walkito FAQ: Price, Platforms, Sessions, Privacy';
const DESCRIPTION =
  'Is Walkito free, iPhone or Android, which languages, how long sessions are, how often to train, pain and safety, your data, cancelling, and walkito.com.';

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
    images: ['/share/en.jpg'],
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
  '@id': `${SITE_URL}/faq/#breadcrumb`,
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
      <Masthead current="faq" />

      <Prose className="shell prose" kicker={{ label: c.navQuestions, lang: 'en', num: String(FAQ.length) }}>
        <h1>Walkito FAQ: questions and answers</h1>
        <Byline lang="en" />

        <p className="lede">
          Straight answers to the questions people ask about the Walkito app:
          what it costs, which phones and languages it comes in, how long
          sessions take and how often you train, what it does when pain flares,
          what happens to your data and how to cancel. Each answer stands on
          its own. Who makes Walkito and how the guides are written and checked
          is on <a href="/about/">the About page</a>.
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

        {/* The home page's question rows, one block per group. Each answer
            is still a self-contained block in the HTML (search engines,
            assistants and find-in-page all read it, and find-in-page opens
            it). The first of each group starts open, and the rows are not
            exclusive, so several answers can be read side by side. */}
        {FAQ_GROUPS.map((group) => (
          <section key={group.id} id={group.id}>
            <h2>{group.h2}</h2>
            <FaqRows
              items={group.entries.map((entry) => ({
                q: entry.q,
                a: (
                  <>
                    {entry.a.split('\n\n').map((para) => (
                      <p key={para}>
                        <Inline text={para} />
                      </p>
                    ))}
                    {entry.source && (
                      <p className="cite">
                        <Inline text={entry.source} />
                      </p>
                    )}
                    {entry.cites?.map((i) => <Cite key={i} index={i} />)}
                  </>
                ),
              }))}
            />
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
