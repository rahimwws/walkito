import type { Metadata } from 'next';

import { NEW_ARTICLE_PATHS, isFullLang, type NewLang } from '@/lib/i18n';
import { EN_ONLY, ES_ARTICLES, RU_ARTICLES, OG_LOCALE, TRANSLATED, alternatesArticle, alternatesFor, indexedLanguages, isTranslatedPage, type EnglishPage, type Lang } from '@/lib/i18n';
import { shareCard } from '@/lib/share';
import type { AnatomyId } from '@/lib/anatomy';
import { CARD_RATIOS, type CardRatio } from '@/lib/card-shapes';
import { SITE_NAME, pageTitle, smartBannerContent, type AppScreen } from '@/lib/site';

import { NAV_GROUPS, TOPICS, TOPIC_APP, TOPIC_HUB, groupOf, isExercisePage, topicOf, type GuideKey } from '@/lib/nav';

import { ARTICLES_EN } from './articles-en';
import { ARTICLES_ES } from './articles-es';
import { ARTICLES_RU } from './articles-ru';
import { ARTICLES_NEW } from './articles-new';
import { FLAT_FEET_EN, HEEL_PAIN_EN } from './en';
import { FLAT_FEET_ES, HEEL_PAIN_ES } from './es';
import { FLAT_FEET_RU, HEEL_PAIN_RU } from './ru';
import { FLAT_FEET_PT, HEEL_PAIN_PT } from './pt';
import { FLAT_FEET_FR, HEEL_PAIN_FR } from './fr';
import { FLAT_FEET_IT, HEEL_PAIN_IT } from './it';
import { FLAT_FEET_DE, HEEL_PAIN_DE } from './de';
import type { Guide } from './types';

export type { Guide } from './types';

export const GUIDES = {
  flatFeet: { en: FLAT_FEET_EN, ru: FLAT_FEET_RU, es: FLAT_FEET_ES, pt: FLAT_FEET_PT, fr: FLAT_FEET_FR, it: FLAT_FEET_IT, de: FLAT_FEET_DE },
  heelPain: { en: HEEL_PAIN_EN, ru: HEEL_PAIN_RU, es: HEEL_PAIN_ES, pt: HEEL_PAIN_PT, fr: HEEL_PAIN_FR, it: HEEL_PAIN_IT, de: HEEL_PAIN_DE },
} as const;

/** English-only articles, keyed by page. */
export { ARTICLES_EN };

/** Spanish versions of English-only articles, keyed by page. */
export { ARTICLES_ES };

/** Russian versions of English-only articles, keyed by page. */
export { ARTICLES_RU };

/** Portuguese, French, Italian and German versions of English articles. */
export { ARTICLES_NEW };

/** Does this English article have a version in this newer language? */
export function hasNew(page: EnglishPage, lang: NewLang): boolean {
  return ARTICLES_NEW[lang][page] != null;
}

/** Does this English-only article have a Spanish version? */
export function hasSpanish(page: EnglishPage): boolean {
  return ARTICLES_ES[page] != null;
}

/** Does this English-only article have a Russian version? */
export function hasRussian(page: EnglishPage): boolean {
  return ARTICLES_RU[page] != null;
}

/** Every language version of a guide's page, for hreflang and the footer
 * switcher: all three for a translated page, en + whichever of es/ru exist
 * for an English article, nothing for an English-only one. */
export function languagesOf(guide: Guide): Partial<Record<Lang, string>> | null {
  if (isTranslatedPage(guide.page)) return TRANSLATED[guide.page];
  const es = hasSpanish(guide.page);
  const ru = hasRussian(guide.page);
  const langs: Partial<Record<Lang, string>> = { en: EN_ONLY[guide.page] };
  if (es) langs.es = ES_ARTICLES[guide.page];
  if (ru) langs.ru = RU_ARTICLES[guide.page];
  for (const l of ['pt', 'fr', 'it', 'de'] as const) {
    if (hasNew(guide.page, l)) langs[l] = NEW_ARTICLE_PATHS[l][guide.page]!;
  }
  return Object.keys(langs).length > 1 ? langs : null;
}

/** Where a guide lives, translated or not. */
export function guidePath(guide: Guide): string {
  if (isTranslatedPage(guide.page)) return TRANSLATED[guide.page][guide.lang];
  if (guide.lang === 'es') return ES_ARTICLES[guide.page];
  if (guide.lang === 'ru') return RU_ARTICLES[guide.page];
  if (!isFullLang(guide.lang)) return NEW_ARTICLE_PATHS[guide.lang][guide.page]!;
  return EN_ONLY[guide.page];
}

/** Every guide that gets share images of its own: English, Spanish and
 * Russian, the indexed languages (K5). */
export function cardGuides(): Guide[] {
  const main = Object.values(GUIDES).flatMap((g) => [g.en, g.es, g.ru]);
  const rest = [ARTICLES_EN, ARTICLES_ES, ARTICLES_RU].flatMap((m) =>
    Object.values(m).filter((g): g is Guide => g != null),
  );
  return [...main, ...rest];
}

/** The picture for a guide's share image: its first anatomy drawing, else a
 * still of its first exercise clip, else none (the card shows the mascot). */
export function guidePicture(guide: Guide): { kind: 'anatomy'; id: AnatomyId } | { kind: 'still'; id: string } | null {
  const figure = guide.sections.find((s) => s.figure)?.figure?.id;
  if (figure) return { kind: 'anatomy', id: figure };
  const clip = guide.sections.flatMap((s) => s.exercises ?? []).find((e) => e.media && !e.mediaIsStandIn)?.media;
  return clip ? { kind: 'still', id: clip } : null;
}

/** The file name of a guide's share image, without the shape:
 * /es/ejercicios-fascitis-plantar/ becomes es-ejercicios-fascitis-plantar. */
export function cardSlug(guide: Guide): string {
  return guidePath(guide).replace(/^\/|\/$/g, '').replace(/\//g, '-');
}

/** A guide's share image in one shape, or the language card where the guide
 * has none of its own (pt, fr, it, de). */
export function guideCard(guide: Guide, ratio: CardRatio = '16x9'): string {
  return guide.lang === 'en' || guide.lang === 'es' || guide.lang === 'ru'
    ? `/share/g/${cardSlug(guide)}-${ratio}.jpg`
    : shareCard(guide.lang);
}

/** All three shapes, for an Article's image list. */
export function guideCards(guide: Guide): string[] {
  const own = guideCard(guide);
  return own.startsWith('/share/g/') ? CARD_RATIOS.map((r) => guideCard(guide, r)) : [own];
}

/** Every guide in one language: the two main guides, then the articles. */
function guidesIn(lang: Lang): Guide[] {
  const main = (Object.keys(GUIDES) as (keyof typeof GUIDES)[]).map((page) => GUIDES[page][lang]);
  const articles: readonly (Guide | undefined)[] =
    lang === 'en'
      ? Object.values(ARTICLES_EN)
      : lang === 'es'
        ? Object.values(ARTICLES_ES)
        : lang === 'ru'
          ? Object.values(ARTICLES_RU)
          : Object.values(ARTICLES_NEW[lang as NewLang]);
  return [...main, ...articles.filter((g): g is Guide => g != null)];
}

/** How many places after `from` the key `to` sits in a list, wrapping round;
 * 0 when either is not in it. */
function stepsAfter(order: readonly GuideKey[], from: GuideKey, to: GuideKey): number {
  const at = order.indexOf(from);
  const i = order.indexOf(to);
  return i < 0 || at < 0 ? 0 : (i - at + order.length) % order.length;
}

/**
 * Up to five guides to read next, in the same language, by condition
 * (`TOPICS` in `lib/nav.ts`): first the pages on the same condition and of the
 * same kind, then the rest of the condition, then its overview, then the
 * other pages, the two main guides first. A list of every page on the site is
 * a list nobody reads.
 *
 * Within the topic a page is offered the pages that come after it in the
 * topic's order, wrapping round: every page is then offered by its
 * neighbours, instead of the first five of a long topic taking every slot and
 * the rest getting none. A guide's own `related` list goes first, where it
 * has one.
 */
export function relatedGuides(guide: Guide, max = 5): Guide[] {
  const all = guidesIn(guide.lang).filter((g) => g.page !== guide.page);
  const own: GuideKey = guide.page;
  const group = groupOf(own);
  const topic = topicOf(own);

  const named = (guide.related ?? []).flatMap((page) => all.filter((g) => g.page === page)).slice(0, max);

  const tier = (g: Guide) => {
    const sameGroup = group != null && groupOf(g.page) === group;
    if (topic) {
      if (topicOf(g.page) === topic) return sameGroup ? 0 : 1;
      if (g.page === TOPIC_HUB[topic]) return 2;
    } else if (sameGroup) return 0;
    if (g.page === 'heelPain' || g.page === 'flatFeet') return 3;
    return groupOf(g.page) === 'compare' || groupOf(g.page) === 'library' ? 5 : 4;
  };
  // Neighbours by the group's order within the group, by the topic's order in
  // the rest of the topic. An exercise page comes after the topic's other
  // pages there: the exercise cards on a guide already link their own pages.
  const place = (g: Guide, t: number) =>
    t === 0 && group
      ? stepsAfter(NAV_GROUPS[group], own, g.page)
      : t === 1 && topic
        ? (isExercisePage(g.page) && !isExercisePage(own) ? TOPICS[topic].length : 0) + stepsAfter(TOPICS[topic], own, g.page)
        : 0;
  const ranked = all
    .filter((g) => !named.includes(g))
    .map((g, i) => {
      const t = tier(g);
      return { g, i, t, at: place(g, t) };
    })
    .sort((x, y) => x.t - y.t || x.at - y.at || x.i - y.i);

  // Comparisons and exercise pages come in long groups that would take every
  // slot and cut those pages off from the condition they are about. There: 3
  // of the group (on a comparison, the topic's app guide always among them),
  // then the rest of the condition.
  let order = ranked.map((x) => x.g);
  if (group === 'compare' || group === 'library') {
    const same = ranked.filter((x) => x.t === 0).map((x) => x.g);
    const near = same.slice(0, 3);
    const appGuide = group === 'compare' && topic ? same.find((g) => g.page === TOPIC_APP[topic]) : undefined;
    if (appGuide && !near.includes(appGuide)) near[near.length - 1] = appGuide;
    order = [...near, ...order.filter((g) => !same.includes(g)), ...same.filter((g) => !near.includes(g))];
  }
  const picked = [...named, ...order].slice(0, max);

  // The other pages on a condition end with its app comparison: the next step
  // for a reader who has the exercises and wants a plan (plan B.11, reader
  // stages). The exercise pages lead back to the condition instead.
  const app = topic && group !== 'compare' && group !== 'library' ? all.find((g) => g.page === TOPIC_APP[topic]) : undefined;
  if (app && !picked.includes(app) && picked.length === max && named.length < max) picked[max - 1] = app;
  return picked;
}

/** The exercise library page that shows each clip, per language: built from
 * the `media` of the exercise pages, whose clips do not overlap. */
const LIBRARY_BY_CLIP = new Map<Lang, Map<string, Guide>>();

/** The library page for an exercise card's clip, in the card's language. */
export function libraryPageFor(media: string, lang: Lang): Guide | undefined {
  let clips = LIBRARY_BY_CLIP.get(lang);
  if (!clips) {
    clips = new Map();
    for (const g of guidesIn(lang)) {
      if (!isExercisePage(g.page)) continue;
      for (const e of g.sections.flatMap((s) => s.exercises ?? [])) {
        if (e.media && !e.mediaIsStandIn && !clips.has(e.media)) clips.set(e.media, g);
      }
    }
    LIBRARY_BY_CLIP.set(lang, clips);
  }
  return clips.get(media);
}

/** A guide's metadata: title, description, canonical and hreflang together, so
 * no page can ship one without the others. */
/** Which app screen a guide's Smart App Banner opens for people who already
 * have the app: the in-app calf raise test from the test page, the morning
 * routine from the morning heel pain page, today's session from the rest. */
function bannerScreen(guide: Guide): AppScreen {
  if (guide.page === 'calfRaiseTest') return 'test';
  if (guide.page === 'morningHeelPain') return 'library/morning';
  return 'today';
}

export function guideMetadata(guide: Guide): Metadata {
  const url = guidePath(guide);
  const banner = smartBannerContent(guide.lang === 'en' ? 'smart-banner' : `smart-banner-${guide.lang}`, bannerScreen(guide));
  return {
    // Stated per page: a page-level `other` replaces the layout's.
    ...(banner ? { other: { 'apple-itunes-app': banner } } : {}),
    title: pageTitle(guide.title),
    description: guide.description,
    alternates: isTranslatedPage(guide.page)
      ? alternatesFor(guide.page, guide.lang)
      : languagesOf(guide)
        ? { canonical: url, languages: indexedLanguages({ ...languagesOf(guide)!, 'x-default': EN_ONLY[guide.page] }) }
        : { canonical: url },
    openGraph: {
      title: `${guide.title} | ${SITE_NAME}`,
      description: guide.description,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE[guide.lang],
      type: 'article',
      publishedTime: guide.published,
      modifiedTime: guide.updated,
      // Stated rather than inherited: a page-level `openGraph` replaces the
      // layout's whole object. English, Spanish and Russian guides have a card
      // of their own (lib/article-card.tsx); the rest share the language card.
      images: [guideCard(guide).startsWith('/share/g/') ? { url: guideCard(guide), width: 1200, height: 675 } : guideCard(guide)],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${guide.title} | ${SITE_NAME}`,
      description: guide.description,
      images: [guideCard(guide)],
    },
  };
}


/** A guide by its page key, in one language (main guides first, then articles). */
export function guideFor(page: string, lang: Lang): Guide | undefined {
  const main = (GUIDES as Record<string, Partial<Record<Lang, Guide>>>)[page]?.[lang];
  if (main) return main;
  const articles =
    lang === 'en' ? ARTICLES_EN : lang === 'es' ? ARTICLES_ES : lang === 'ru' ? ARTICLES_RU : ARTICLES_NEW[lang as NewLang];
  return (articles as unknown as Record<string, Guide | undefined>)[page];
}
