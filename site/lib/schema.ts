import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { CITATIONS, citationSchema } from '@/lib/citations';
import type { GuideDataset } from '@/lib/guides/types';
import { TRANSLATED, type Lang } from '@/lib/i18n';
import { reviewFor, type Reviewer } from '@/lib/reviewer';
import { shareCard } from '@/lib/share';
import { ORG_REF, SITE_URL, isoDateTime } from '@/lib/site';

export const HOW_WE_RESEARCH_ID = 'how-we-research';
export function howWeResearchHref(lang: Lang): string {
  return `${TRANSLATED.about[lang]}#${HOW_WE_RESEARCH_ID}`;
}

/**
 * Who writes the guides: the two co-founders, by name. Decided by Rahim on
 * 2026-10-09, replacing the "Walkito Research" byline of 2026-10-07. Neither
 * is a clinician, and the pages say so; a clinician reviewer goes in
 * `lib/reviewer.ts` as `reviewedBy` the day there is a real one, not before.
 *
 * The Organization's `founder` list (components/RootDocument.tsx) is built
 * from this one, so the two cannot drift apart. Their bios are the About
 * page's founders section (`#founders`), which is where each byline links.
 * `slug` names each person's `@id` (`personId`).
 */
export const AUTHORS = [
  {
    slug: 'rahim-hudaykulyyev',
    name: 'Rahim Hudaykulyyev',
    sameAs: ['https://www.linkedin.com/in/rhdklv/', 'https://x.com/rahimwws', 'https://github.com/rahimwws'],
  },
  { slug: 'rahman-bazarov', name: 'Rahman Bazarov', sameAs: ['https://www.linkedin.com/in/rahman-bazarov/'] },
] as const;

/**
 * A person's `@id`: one per person in every language, so the author of a
 * Spanish guide and the founder in the Organization are the same node. An
 * identifier, not a link: it names the anchor each founder gets on /about/
 * once the page has one per person, and nothing has to resolve it before then.
 */
export function personId(slug: string): string {
  return `${SITE_URL}${TRANSLATED.about.en}#${slug}`;
}

export const AUTHOR_ROLE: Record<Lang, string> = {
  en: 'Co-founder of Walkito',
  ru: 'Сооснователь Walkito',
  es: 'Cofundador de Walkito',
  pt: 'Cofundador do Walkito',
  fr: 'Cofondateur de Walkito',
  it: 'Cofondatore di Walkito',
  de: 'Mitgründer von Walkito',
};

/** Both names for a byline: "Rahim Hudaykulyyev & Rahman Bazarov". */
export const AUTHOR_NAMES = AUTHORS.map((a) => a.name).join(' & ');

export const FOUNDERS_ID = 'founders';
export function authorHref(lang: Lang): string {
  return `${TRANSLATED.about[lang]}#${FOUNDERS_ID}`;
}

export function authorFor(lang: Lang) {
  return AUTHORS.map((a) => ({
    '@type': 'Person',
    '@id': personId(a.slug),
    name: a.name,
    jobTitle: AUTHOR_ROLE[lang],
    url: `${SITE_URL}${authorHref(lang)}`,
    sameAs: a.sameAs,
    worksFor: ORG_REF,
  }));
}

/** The authors by reference, where a node only needs to say who: `@id`, name and url. */
function authorRefs(lang: Lang) {
  return AUTHORS.map((a) => ({ '@type': 'Person', '@id': personId(a.slug), name: a.name, url: `${SITE_URL}${authorHref(lang)}` }));
}

/**
 * `Article` for a page that cites research: dates, author, publisher, and every
 * citation as a `ScholarlyArticle` with its DOI or PubMed link.
 *
 * `Article`, not `MedicalWebPage`: this is exercise programming that cites
 * research, not medical content, and declaring the latter invites the
 * strictest review Google has in exchange for nothing.
 *
 * A page a clinician has reviewed gets a second node, the page itself as a
 * plain `WebPage`, carrying `reviewedBy` and `lastReviewed`: schema.org puts
 * both on WebPage, not on Article. The two go out as one `@graph`, so every
 * caller still renders a single block.
 */
export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  lang: Lang;
  published: string;
  updated: string;
  cites: readonly number[];
  /** Page key, to add the reviewer when she has reviewed this page. */
  page?: string;
  /** The page's own share images (16:9, 4:3, 1:1); else the language card. */
  images?: readonly string[];
}) {
  const url = `${SITE_URL}${input.path}`;
  const article = {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: input.headline,
    description: input.description,
    inLanguage: input.lang,
    datePublished: isoDateTime(input.published),
    dateModified: isoDateTime(input.updated),
    author: authorFor(input.lang),
    publishingPrinciples: `${SITE_URL}${howWeResearchHref(input.lang)}`,
    publisher: ORG_REF,
    mainEntityOfPage: url,
    image: input.images?.length
      ? input.images.map((src) => `${SITE_URL}${src}`)
      : `${SITE_URL}${shareCard(input.lang)}`,
    citation: input.cites.map((i) => citationSchema(CITATIONS[i])),
  };
  const review = input.page ? reviewFor(input.page, input.lang ?? 'en') : null;
  if (!review) return { '@context': 'https://schema.org', ...article };
  return {
    '@context': 'https://schema.org',
    '@graph': [article, reviewedPage(url, input.lang, review)],
  };
}

/** The page as a `WebPage` with its review, for a page listed in `REVIEWER.reviewed`. */
function reviewedPage(url: string, lang: Lang, review: { reviewer: Reviewer; date: string }) {
  return {
    '@type': 'WebPage',
    '@id': url,
    url,
    inLanguage: lang,
    mainEntity: { '@id': `${url}#article` },
    reviewedBy: {
      '@type': 'Person',
      name: review.reviewer.name,
      description: review.reviewer.credentials,
      url: `${SITE_URL}${TRANSLATED.about[lang]}#reviewer`,
      ...(review.reviewer.sameAs.length ? { sameAs: review.reviewer.sameAs } : {}),
    },
    lastReviewed: review.date,
  };
}

/**
 * The columns of a data file in public/downloads/, read from its first line
 * at build time, so `variableMeasured` is the file's own header and cannot
 * drift from it. The first line must be that header: a file that starts with a
 * comment (as the three study files did until 2026-10-13) stops the build
 * rather than publishing the comment as column names.
 */
function csvColumns(file: string): string[] {
  const text = readFileSync(join(process.cwd(), 'public', 'downloads', file), 'utf8');
  const end = text.indexOf('\n');
  const header = (end < 0 ? text : text.slice(0, end)).replace(/\r$/, '');
  if (!header || header.startsWith('#')) {
    throw new Error(`public/downloads/${file} must start with its header row, not "${header.slice(0, 40)}"`);
  }
  return header.split(',');
}

/**
 * `Dataset` for an original study's data file, beside the study's Article, so
 * dataset search can list the file with who made it, when, how and where to
 * download it. `subjectOf` points at the Article that reports it.
 *
 * No `license` yet, on purpose: the founders have not chosen one. When they
 * do (CC BY 4.0 would match the "free to reuse with a citation" the pages
 * already say), it goes here and, in words, next to the download link.
 */
export function datasetSchema(input: { dataset: GuideDataset; path: string; lang: Lang; title: string; published: string }) {
  const { dataset } = input;
  const url = `${SITE_URL}${input.path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': `${url}#dataset`,
    name: dataset.name,
    description: dataset.description,
    url,
    inLanguage: input.lang,
    creator: [...authorRefs(input.lang), ORG_REF],
    // The data's own dates: the file's rows, not the page around them.
    datePublished: isoDateTime(input.published),
    dateModified: isoDateTime(dataset.updated),
    temporalCoverage: dataset.temporalCoverage,
    // `n` is the row number, not something measured.
    variableMeasured: csvColumns(dataset.file).filter((c) => c !== 'n'),
    measurementTechnique: dataset.measurementTechnique,
    isAccessibleForFree: true,
    distribution: [
      { '@type': 'DataDownload', encodingFormat: 'text/csv', contentUrl: `${SITE_URL}/downloads/${dataset.file}` },
    ],
    citation: dataset.cites.map((i) => citationSchema(CITATIONS[i])),
    subjectOf: { '@type': 'Article', '@id': `${url}#article`, headline: input.title, url },
  };
}

/** `FAQPage` from question/answer pairs. Inline marks are stripped: the answer
 * text in schema is plain, and paragraph breaks become spaces. */
export function faqSchema(items: readonly { q: string; a: string }[]) {
  const plain = (text: string) =>
    text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\n\n/g, ' ');
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: plain(item.q),
      acceptedAnswer: { '@type': 'Answer', text: plain(item.a) },
    })),
  };
}

/** A date as the page prints it, in the page's language. */
export function formatDate(iso: string, lang: Lang): string {
  const locale = { en: 'en-US', ru: 'ru-RU', es: 'es-ES', pt: 'pt-BR', fr: 'fr-FR', it: 'it-IT', de: 'de-DE' }[lang];
  const text = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${iso}T00:00:00Z`),
  );
  // Russian keeps the day with its month and the year's abbreviation with the
  // year, with no-break spaces, as the dates typed into the legal pages did.
  return lang === 'ru' ? text.replace(/^(\d+) /, '$1\u00A0').replace(/ г\.$/, '\u00A0г.') : text;
}
