import { Fragment } from 'react';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Byline, UpdatedLine } from '@/components/Byline';
import { Evidence } from '@/components/Evidence';
import { Footer } from '@/components/Footer';
import { Cite } from '@/components/Cite';
import { ExerciseMedia } from '@/components/ExerciseMedia';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Prose, typeset } from '@/components/Prose';
import { guidePath, relatedGuides, type Guide as GuideData } from '@/lib/guides';
import { isTranslatedPage } from '@/lib/i18n';
import type { GuideTable } from '@/lib/guides/types';
import { CHROME, TRANSLATED } from '@/lib/i18n';
import { articleSchema, faqSchema } from '@/lib/schema';
import { videoSchema } from '@/lib/video';
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

/** A heading as an anchor: lower case, words joined by hyphens. */
function slug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

/** Doses and grades as a real table, so a reader can scan a column and a
 * crawler can read the rows. */
function Table({ table }: { table: GuideTable }) {
  return (
    <div className="table-wrap">
      <table>
        {table.caption && <caption>{table.caption}</caption>}
        <thead>
          <tr>
            {table.head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) =>
                i === 0 ? (
                  <th key={i} scope="row">
                    <Inline text={cell} />
                  </th>
                ) : (
                  <td key={i}>
                    <Inline text={cell} />
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
  const url = `${SITE_URL}${guidePath(guide)}`;
  const cited = [
    ...new Set([...guide.sections.flatMap((s) => s.cites ?? []), ...guide.faq.flatMap((q) => q.cites ?? [])]),
  ].sort((a, b) => a - b);

  const article = articleSchema({
    headline: guide.title,
    description: guide.description,
    path: guidePath(guide),
    lang: guide.lang,
    published: guide.published,
    updated: guide.updated,
    cites: cited,
    page: guide.page,
  });

  // The other guides in the same language. Linked from the body of the page,
  // not only the footer: a link a reader can see in context is one a crawler
  // weighs as a real recommendation.
  const related = relatedGuides(guide);

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
      {videoSchema(guide.sections.flatMap((s) => s.exercises ?? []), guide.lang, guide.published).map((v) => (
        <JsonLd key={v.contentUrl} data={v} />
      ))}
      <Masthead lang={guide.lang} />

      <Prose className="shell prose">
        <h1>{guide.h1}</h1>
        <Byline lang={guide.lang} cites={cited} main={guide.mainSource} page={guide.page} />
        <p className="lede">
          <Inline text={guide.lede} />
        </p>
        {guide.intro?.map((p) => (
          <p key={p}>
            <Inline text={p} />
          </p>
        ))}

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

        {guide.toc && (
          <nav className="toc" aria-label={c.contents}>
            <h2>{c.contents}</h2>
            <ol>
              {guide.sections.map((section) => (
                <li key={section.h2}>
                  <a href={`#${slug(section.h2)}`}>{section.h2}</a>
                </li>
              ))}
              <li>
                <a href="#faq">{c.faqHeading}</a>
              </li>
              <li>
                <a href="#see-a-clinician">{guide.redFlags.h2}</a>
              </li>
              <li>
                <a href="#plan">{guide.program.h2}</a>
              </li>
            </ol>
          </nav>
        )}

        {guide.sections.map((section) => (
          <section key={section.h2} id={slug(section.h2)}>
            <h2>{section.h2}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p}>
                <Inline text={p} />
              </p>
            ))}
            {section.table && <Table table={section.table} />}
            {section.exercises?.some((e) => e.feel != null) ? (
              section.exercises.map((e) => (
                // An exercise without a clip is text only: no empty box.
                <div key={e.name} className={e.media ? 'exercise-detail' : 'exercise-detail exercise-text'}>
                  {e.media && <ExerciseMedia id={e.media} alt={e.alt ?? e.name} caption={e.caption} />}
                  <div>
                    <h3>{e.name}</h3>
                    <p>
                      <Inline text={e.how} />
                    </p>
                    {e.evidence && (
                      <Evidence level={e.evidence.level} lang={guide.lang}>
                        {e.evidence.why}
                      </Evidence>
                    )}
                    {e.stop && (
                      <p className="stop">
                        <Inline text={e.stop} />
                      </p>
                    )}
                  </div>
                </div>
              ))
            ) : section.exercises && (
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
            {section.sourceNote && (
              <p className="cite">
                <Inline text={section.sourceNote} />
              </p>
            )}
            {section.cites?.map((i) => <Cite key={i} index={i} />)}
          </section>
        ))}

        <section className="faq" id="faq">
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
        <h2 id="see-a-clinician">{guide.redFlags.h2}</h2>
        <ul>
          {guide.redFlags.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <h2 id="plan">{guide.program.h2}</h2>
        <p>
          <Inline text={guide.program.text} />
        </p>
        {guide.program.more?.map((p) => (
          <p key={p}>
            <Inline text={p} />
          </p>
        ))}

        <UpdatedLine lang={guide.lang} updated={guide.updated} />
        <p className="notice">{c.notice}</p>

        {guide.program.cta && <p className="cta-line">{guide.program.cta}</p>}
        <AppStoreBadge campaign={guide.campaign} lang={guide.lang} />

        <nav className="related" aria-label={c.relatedHeading}>
          <h2>{c.relatedHeading}</h2>
          <ul>
            {related.map((g) => (
              <li key={g.page}>
                <a href={guidePath(g)}>{g.h1}</a>
                <span>{g.description}</span>
              </li>
            ))}
          </ul>
        </nav>
      </Prose>

      <Footer lang={guide.lang} page={isTranslatedPage(guide.page) ? guide.page : undefined} />
    </>
  );
}
