import { Fragment } from 'react';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { Cite } from '@/components/Cite';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { GUIDES, type Guide as GuideData } from '@/lib/guides';
import { CHROME, TRANSLATED } from '@/lib/i18n';
import { articleSchema, faqSchema, formatDate } from '@/lib/schema';
import { SITE_URL } from '@/lib/site';

const HOME_CRUMB = { en: 'Home', ru: 'Главная', es: 'Inicio' } as const;

/**
 * `**bold**` and `[label](/path/)`, and nothing else.
 *
 * Deliberately tiny: the guides are data so six pages share one layout, and a
 * real markdown dependency would make them a second content system to keep
 * honest. Links are internal by construction — every href in the guides is a
 * path on this site.
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

/**
 * One guide page.
 *
 * `Article` with `citation`, not `MedicalWebPage`, for the reason the evidence
 * page gives: this is exercise programming that cites research, not medical
 * content, and claiming the latter invites the strictest review Google has in
 * exchange for nothing.
 *
 * Exercises are an ordered list with the dose set apart from the instruction,
 * because the dose is what a reader comes back to check mid-set.
 */
export function Guide({ guide }: { guide: GuideData }) {
  const c = CHROME[guide.lang];
  const url = `${SITE_URL}${TRANSLATED[guide.page][guide.lang]}`;
  const cited = [...new Set(guide.sections.flatMap((s) => s.cites ?? []))].sort();

  const article = articleSchema({
    headline: guide.title,
    description: guide.description,
    path: TRANSLATED[guide.page][guide.lang],
    lang: guide.lang,
    published: guide.published,
    updated: guide.updated,
    cites: cited,
  });

  // The other guides in the same language. Linked from the body of the page,
  // not only the footer: a link a reader can see in context is one a crawler
  // weighs as a real recommendation.
  const related = (Object.keys(GUIDES) as (keyof typeof GUIDES)[])
    .filter((page) => page !== guide.page)
    .map((page) => GUIDES[page][guide.lang]);

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: HOME_CRUMB[guide.lang],
        item: `${SITE_URL}${TRANSLATED.home[guide.lang]}`,
      },
      { '@type': 'ListItem', position: 2, name: guide.crumb, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={article} />
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema(guide.faq)} />
      <Masthead lang={guide.lang} />

      <main className="shell prose">
        <h1>{guide.h1}</h1>
        <p className="byline">
          <a href={TRANSLATED.about[guide.lang]}>{c.byline}</a>
          {' · '}
          {c.updated} <time dateTime={guide.updated}>{formatDate(guide.updated, guide.lang)}</time>
        </p>
        <p className="lede">
          <Inline text={guide.lede} />
        </p>

        {/* Key points: the summary a skimmer reads instead of the page, and
            the lines an assistant is most likely to quote. */}
        <aside className="takeaways" aria-label={c.keyPoints}>
          <h2>{c.keyPoints}</h2>
          <ul>
            {guide.takeaways.map((t) => (
              <li key={t}>
                <Inline text={t} />
              </li>
            ))}
          </ul>
        </aside>

        {guide.sections.map((section) => (
          <section key={section.h2}>
            <h2>{section.h2}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p}>
                <Inline text={p} />
              </p>
            ))}
            {section.exercises && (
              <ol className="exercises">
                {section.exercises.map((e) => (
                  <li key={e.name}>
                    <h3>{e.name}</h3>
                    <p className="dose">{e.dose}</p>
                    <p>{e.how}</p>
                  </li>
                ))}
              </ol>
            )}
            {section.bullets && (
              <ul>
                {section.bullets.map((b) => (
                  <li key={b}>
                    <Inline text={b} />
                  </li>
                ))}
              </ul>
            )}
            {section.cites?.map((i) => <Cite key={i} index={i} />)}
          </section>
        ))}

        <section className="faq">
          <h2>{c.faqHeading}</h2>
          {guide.faq.map((item) => (
            <div key={item.q}>
              <h3>{item.q}</h3>
              <p>
                <Inline text={item.a} />
              </p>
            </div>
          ))}
        </section>
        <h2>{guide.redFlags.h2}</h2>
        <ul>
          {guide.redFlags.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <h2>{guide.program.h2}</h2>
        <p>
          <Inline text={guide.program.text} />
        </p>

        <p className="notice">{c.notice}</p>

        <AppStoreBadge campaign={guide.campaign} lang={guide.lang} />

        <nav className="related" aria-label={c.relatedHeading}>
          <h2>{c.relatedHeading}</h2>
          <ul>
            {related.map((g) => (
              <li key={g.page}>
                <a href={TRANSLATED[g.page][g.lang]}>{g.h1}</a>
                <span>{g.description}</span>
              </li>
            ))}
          </ul>
        </nav>
      </main>

      <Footer lang={guide.lang} page={guide.page} />
    </>
  );
}
