import { CITATIONS, citationSchema } from '@/lib/citations';
import { TRANSLATED, type Lang } from '@/lib/i18n';
import { reviewFor } from '@/lib/reviewer';
import { SITE_NAME, SITE_URL } from '@/lib/site';

/** The author every article names: the research side of Walkito, whose rules
 * are the About page section `#how-we-research`. */
export const AUTHOR_NAME = 'Walkito Research';
export const HOW_WE_RESEARCH_ID = 'how-we-research';
export function howWeResearchHref(lang: Lang): string {
  return `${TRANSLATED.about[lang]}#${HOW_WE_RESEARCH_ID}`;
}

/**
 * Who stands behind the pages, as structured data.
 *
 * The organisation, with its About page as the place that says who writes the
 * content, how it is checked and what the app does not do. A named medical
 * reviewer goes here as `reviewedBy` the day there is a real one — and not a
 * day before: a reviewer in schema who never reviewed the page is a claim a
 * health site cannot afford to have caught.
 */
/**
 * The co-founder profile, kept for the About page's founders section. The
 * guides themselves are signed "Walkito Research" (decided with Rahman,
 * 2026-10-07): the trust comes from the cited sources and the How-we-research
 * rules, and from a clinician reviewer once there is one (`lib/reviewer.ts`).
 */
export const AUTHOR = {
  name: 'Rahim Hudaykylyyev',
  role: { en: 'co-founder of Walkito', ru: 'сооснователь Walkito', es: 'cofundador de Walkito' },
  sameAs: ['https://www.linkedin.com/in/rhdklv/', 'https://x.com/rahimwws', 'https://github.com/rahimwws'],
} as const;

export const FOUNDERS_ID = 'founders';
export function authorHref(lang: Lang): string {
  return `${TRANSLATED.about[lang]}#${FOUNDERS_ID}`;
}

export function authorFor(lang: Lang) {
  return {
    '@type': 'Organization',
    name: AUTHOR_NAME,
    url: `${SITE_URL}${howWeResearchHref(lang)}`,
    parentOrganization: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  };
}

/**
 * `Article` for a page that cites research: dates, author, publisher, and every
 * citation as a `ScholarlyArticle` with its DOI or PubMed link.
 *
 * `Article`, not `MedicalWebPage`: this is exercise programming that cites
 * research, not medical content, and declaring the latter invites the
 * strictest review Google has in exchange for nothing.
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
}) {
  const review = input.page ? reviewFor(input.page) : null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    inLanguage: input.lang,
    datePublished: input.published,
    dateModified: input.updated,
    author: authorFor(input.lang),
    publishingPrinciples: `${SITE_URL}${howWeResearchHref(input.lang)}`,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.png` },
    },
    mainEntityOfPage: `${SITE_URL}${input.path}`,
    image: `${SITE_URL}/opengraph-image`,
    citation: input.cites.map((i) => citationSchema(CITATIONS[i])),
    ...(review
      ? {
          reviewedBy: {
            '@type': 'Person',
            name: review.reviewer.name,
            description: review.reviewer.credentials,
            url: `${SITE_URL}${TRANSLATED.about[input.lang]}#reviewer`,
            ...(review.reviewer.sameAs.length ? { sameAs: review.reviewer.sameAs } : {}),
          },
          lastReviewed: review.date,
        }
      : {}),
  };
}

/** `FAQPage` from question/answer pairs. Inline marks are stripped: the answer
 * text in schema is plain. */
export function faqSchema(items: readonly { q: string; a: string }[]) {
  const plain = (text: string) =>
    text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
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
  const locale = { en: 'en-US', ru: 'ru-RU', es: 'es-ES' }[lang];
  return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${iso}T00:00:00Z`),
  );
}
