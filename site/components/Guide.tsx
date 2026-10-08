import { Fragment } from 'react';

import { AppCallout } from '@/components/AppCallout';
import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Byline, UpdatedLine } from '@/components/Byline';
import { Evidence } from '@/components/Evidence';
import { EmailSignup } from '@/components/EmailSignup';
import { printableForGuide } from '@/lib/printables';
import { Footer } from '@/components/Footer';
import { Cite } from '@/components/Cite';
import { ExerciseMedia } from '@/components/ExerciseMedia';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { FaqRows, Prose, typeset } from '@/components/Prose';
import { guidePath, languagesOf, relatedGuides, type Guide as GuideData } from '@/lib/guides';
import { isTranslatedPage } from '@/lib/i18n';
import type { GuideTable } from '@/lib/guides/types';
import { CHROME, CUSTOM_PAGES, TRANSLATED, customHref } from '@/lib/i18n';
import { articleSchema, faqSchema } from '@/lib/schema';
import { videoSchema, imageSchema } from '@/lib/video';
import { AnatomyFigure } from '@/components/AnatomyFigure';
import { anatomySchema } from '@/lib/anatomy';
import { SITE_URL } from '@/lib/site';

const HOME_CRUMB = { en: 'Home', ru: 'Главная', es: 'Inicio', pt: 'Início', fr: 'Accueil', it: 'Home', de: 'Start' } as const;
const EXERCISE_LIST_HEADING = {
  en: 'Exercises on this page',
  ru: 'Упражнения на этой странице',
  es: 'Ejercicios de esta página',
  pt: 'Exercícios nesta página',
  fr: 'Exercices de cette page',
  it: 'Esercizi in questa pagina',
  de: 'Übungen auf dieser Seite',
} as const;
const KEY_FACT_LABEL = {
  en: 'Key finding',
  ru: 'Главное из исследований',
  es: 'Dato clave',
  pt: 'Dado-chave',
  fr: 'À retenir',
  it: 'Dato chiave',
  de: 'Kernaussage',
} as const;
/** The section chip over a guide's title: what kind of page it is. */
const KIND_LABEL = {
  guide: { en: 'Guide', ru: 'Гайд', es: 'Guía', pt: 'Guia', fr: 'Guide', it: 'Guida', de: 'Ratgeber' },
  exercise: { en: 'Exercise', ru: 'Упражнение', es: 'Ejercicio', pt: 'Exercício', fr: 'Exercice', it: 'Esercizio', de: 'Übung' },
  test: { en: 'Test', ru: 'Тест', es: 'Test', pt: 'Teste', fr: 'Test', it: 'Test', de: 'Test' },
} as const;
const LIBRARY_CRUMB = {
  en: 'Exercise library',
  ru: 'Библиотека упражнений',
  es: 'Biblioteca de ejercicios',
  pt: 'Biblioteca de exercícios',
  fr: "Bibliothèque d'exercices",
  it: 'Libreria di esercizi',
  de: 'Übungsbibliothek',
} as const;

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
/** The anchor of an exercise card, linked from the list at the top. */
function exerciseId(name: string): string {
  return `ex-${slug(name)}`;
}

/** A first paragraph ending in a colon introduces the list that follows, so
 * the figure goes after the list instead of between them. */
function figureAtEnd(section: { paragraphs?: readonly string[] }): boolean {
  return section.paragraphs?.[0]?.trimEnd().endsWith(':') ?? false;
}

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

  // The exercises on the page as one numbered list near the top, each linking
  // to its card: the summary a reader scans first, and the shape Google uses
  // for "... exercises" featured snippets. Built from the same data as the
  // cards, so it can never disagree with them. Only on guides with three or
  // more different exercises; not on single-exercise pages or the test page.
  const exerciseList = (() => {
    if (guide.page.startsWith('ex') || guide.page === 'calfRaiseTest') return [];
    const seen = new Set<string>();
    return guide.sections
      .flatMap((s) => s.exercises ?? [])
      .filter((e) => (seen.has(e.name) ? false : (seen.add(e.name), true)));
  })();
  // Doses only when every one is short ("2 holds of 30 seconds, each leg"):
  // a list where some lines are full sentences stops being scannable, so
  // those pages show the names alone.
  const listDoses = exerciseList.every((e) => (e.dose ?? '').length > 0 && e.dose.length <= 48);
  const firstExerciseId = new Set<string>();
  // English only: the sheets are in English.
  const printable = guide.lang === 'en' ? printableForGuide(guidePath(guide)) : undefined;

  // Exercise pages sit under the exercise library, so their trail has the
  // library in the middle: Home > Exercise library > Calf raises.
  const inLibrary = guide.page.startsWith('ex');
  const trail = [
    { name: HOME_CRUMB[guide.lang], item: `${SITE_URL}${TRANSLATED.home[guide.lang]}` },
    ...(inLibrary ? [{ name: LIBRARY_CRUMB[guide.lang], item: `${SITE_URL}${customHref('exercises', guide.lang)}` }] : []),
    { name: guide.crumb, item: url },
  ];
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })),
  };

  return (
    <>
      <JsonLd data={article} />
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema(guide.faq)} />
      {videoSchema(guide.sections.flatMap((s) => s.exercises ?? []), guide.lang, guide.published).map((v) => (
        <JsonLd key={v.contentUrl} data={v} />
      ))}
      {/* Stills render only in sections laid out as exercise cards (the ones
          with "feel" lines), so only those are described as images. */}
      {imageSchema(
        guide.sections.filter((s) => s.exercises?.some((e) => e.feel != null)).flatMap((s) => s.exercises ?? []),
        guide.lang,
        url,
      ).map((img) => (
        <JsonLd key={img.contentUrl} data={img} />
      ))}
      {guide.sections.flatMap((s) => (s.figure ? [s.figure] : [])).map((fig) => {
        const img = anatomySchema(fig, guide.lang, url);
        return <JsonLd key={img.contentUrl} data={img} />;
      })}
      <Masthead lang={guide.lang} />

      <Prose
        className="shell prose"
        kicker={{
          label: KIND_LABEL[inLibrary ? 'exercise' : guide.page === 'calfRaiseTest' ? 'test' : 'guide'][guide.lang],
          lang: guide.lang,
        }}
      >
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

        {exerciseList.length >= 3 && (
          <aside className="exercise-list" aria-label={EXERCISE_LIST_HEADING[guide.lang]}>
            <h2>{EXERCISE_LIST_HEADING[guide.lang]}</h2>
            <ol>
              {exerciseList.map((e) => (
                <li key={e.name}>
                  <a href={`#${exerciseId(e.name)}`}>{e.name}</a>
                  {listDoses && <span className="dose">{e.dose}</span>}
                </li>
              ))}
            </ol>
          </aside>
        )}

        <AppCallout campaign={`${guide.campaign}-top`} lang={guide.lang} />

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
        {printable && (
          <>
            <p className="printable-box">
              <strong>Printable version:</strong> these exercises on a free {printable.pages}-page PDF with a week log.{' '}
              <a href={`/downloads/${printable.slug}.pdf`} download>
                Download the PDF
              </a>
              {' '}or see <a href="/printable-exercise-sheets/">all printable sheets</a>.
            </p>
            <EmailSignup lang="en" source="guide" page={guidePath(guide)} />
          </>
        )}

        {guide.sections.map((section) => (
          <section key={section.h2} id={slug(section.h2)}>
            <h2>{section.h2}</h2>
            {section.keyFact && (
              <p className="key-fact">
                <strong>{KEY_FACT_LABEL[guide.lang]}</strong>
                <Inline text={section.keyFact} />
              </p>
            )}
            {section.paragraphs?.map((p, i) => (
              <Fragment key={p}>
                <p>
                  <Inline text={p} />
                </p>
                {i === 0 && section.figure && !figureAtEnd(section) && (
                  <AnatomyFigure lang={guide.lang} {...section.figure} />
                )}
              </Fragment>
            ))}
            {!section.paragraphs?.length && section.figure && (
              <AnatomyFigure lang={guide.lang} {...section.figure} />
            )}
            {section.table && <Table table={section.table} />}
            {section.after?.map((p) => (
              <p key={p}>
                <Inline text={p} />
              </p>
            ))}
            {section.exercises?.some((e) => e.feel != null) ? (
              section.exercises.map((e) => (
                // An exercise without a clip is text only: no empty box.
                <div key={e.name} className={e.media ? 'exercise-detail' : 'exercise-detail exercise-text'}>
                  {e.media && <ExerciseMedia id={e.media} alt={e.alt ? `${e.name}. ${e.alt}` : e.name} caption={e.caption} />}
                  <div>
                    <h3 id={firstExerciseId.has(e.name) ? undefined : (firstExerciseId.add(e.name), exerciseId(e.name))}>{e.name}</h3>
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
                    <h3 id={firstExerciseId.has(e.name) ? undefined : (firstExerciseId.add(e.name), exerciseId(e.name))}>{e.name}</h3>
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
            {section.figure && figureAtEnd(section) && <AnatomyFigure lang={guide.lang} {...section.figure} />}
            {section.sourceNote && (
              <p className="cite">
                <Inline text={section.sourceNote} />
              </p>
            )}
            {section.cites?.map((i) => <Cite key={i} index={i} />)}
          </section>
        ))}

        {/* As the home page's questions: one open at a time, the first open. */}
        <section className="faq" id="faq">
          <h2>{c.faqHeading}</h2>
          <FaqRows
            name="guide-faq"
            items={guide.faq.map((item) => ({
              q: item.q,
              a: (
                <p>
                  <Inline text={item.a} />
                </p>
              ),
            }))}
          />
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

      <Footer
        lang={guide.lang}
        page={isTranslatedPage(guide.page) ? guide.page : undefined}
        languages={languagesOf(guide)}
      />
    </>
  );
}
