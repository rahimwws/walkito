import Image from 'next/image';
import Link from 'next/link';

import { AppStoreBadge } from '@/components/AppStoreBadge';

import { SocialLinks } from '@/components/SocialLinks';
import { CHROME, CUSTOM_PAGES, NEW_ARTICLE_PATHS, isFullLang, EN_ONLY, ES_ARTICLES, RU_ARTICLES, LANG_NAMES, LANGS, TRANSLATED, type EnglishPage, type Lang, type TranslatedPage } from '@/lib/i18n';
import { ARTICLES_NEW, hasSpanish, hasRussian } from '@/lib/guides';
import { playHref, storeHref } from '@/lib/site';
import { GROUP_HEADING, NAV_GROUPS, NAV_LABEL, NAV_LABEL_ES, NAV_LABEL_RU, type GuideKey } from '@/lib/nav';

/**
 * The footer, on every page in every language.
 *
 * Two jobs beyond the legal links. The guides are linked from here so every
 * page on the site passes a link to them: they are the pages built to rank,
 * and a page nothing links to is a page a crawler treats as unimportant. And on
 * a translated page it carries the language switcher, pointing at the same page
 * in each language rather than at each home page.
 *
 * The guides sit in labelled columns (`lib/nav.ts`), so a reader scans four
 * short lists instead of one long row. Russian and Spanish show only the pages
 * that exist in their language.
 *
 * Plain `<a>` for the switcher, not `Link`: each language is its own root
 * layout, so the jump is a full load either way, and saying so keeps Next from
 * prefetching two whole documents per page.
 */
const FOOTER_APP: Record<Lang, { ios: string; android: string }> = {
  en: { ios: 'Walkito on the App Store', android: 'Walkito on Google Play' },
  ru: { ios: 'Walkito в App Store', android: 'Walkito в Google Play' },
  es: { ios: 'Walkito en el App Store', android: 'Walkito en Google Play' },
  pt: { ios: 'Walkito na App Store', android: 'Walkito no Google Play' },
  fr: { ios: "Walkito sur l'App Store", android: 'Walkito sur Google Play' },
  it: { ios: "Walkito sull'App Store", android: 'Walkito su Google Play' },
  de: { ios: 'Walkito im App Store', android: 'Walkito bei Google Play' },
};

function hrefFor(key: GuideKey, lang: Lang): string | null {
  if (key === 'runners') return isFullLang(lang) ? CUSTOM_PAGES.runners[lang] : null;
  if (key in TRANSLATED) return TRANSLATED[key as TranslatedPage][lang];
  if (lang === 'en') return EN_ONLY[key as EnglishPage];
  if (lang === 'es' && hasSpanish(key as EnglishPage)) return ES_ARTICLES[key as EnglishPage];
  if (lang === 'ru' && hasRussian(key as EnglishPage)) return RU_ARTICLES[key as EnglishPage];
  if (!isFullLang(lang) && ARTICLES_NEW[lang][key as EnglishPage]) return NEW_ARTICLE_PATHS[lang][key as EnglishPage] ?? null;
  return null;
}

function Column({ heading, links }: { heading: string; links: { href: string; label: string }[] }) {
  if (links.length === 0) return null;
  // <details open>: every link is in the page for readers and crawlers alike.
  // On a phone the script at the end of the footer folds the sections, so the
  // footer is a short list of headings instead of sixty links.
  return (
    <details className="footer-col" open>
      <summary className="footer-heading">{heading}</summary>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

const TAGLINE: Record<Lang, string> = {
  en: 'Daily exercise plans for heel, foot and leg pain, built on clinical guidelines.',
  es: 'Planes diarios de ejercicios para el dolor de talón, pie y pierna, basados en guías clínicas.',
  ru: 'Ежедневные планы упражнений при боли в пятке, стопе и ногах на основе клинических рекомендаций.',
  pt: 'Planos diários de exercícios para dor no calcanhar, no pé e na perna, baseados em diretrizes clínicas.',
  fr: "Des programmes d'exercices quotidiens pour la douleur au talon, au pied et à la jambe, fondés sur les recommandations cliniques.",
  it: 'Piani di esercizi quotidiani per il dolore a tallone, piede e gamba, basati sulle linee guida cliniche.',
  de: 'Tägliche Übungspläne bei Fersen-, Fuß- und Beinschmerzen, auf Grundlage klinischer Leitlinien.',
};

/** Folds the footer sections on a phone, before first paint of the footer. */
const FOLD_ON_PHONE = `if(matchMedia("(max-width: 760px)").matches){document.querySelectorAll(".footer details[open]").forEach(function(d){d.removeAttribute("open")})}`;

export function Footer({
  lang = 'en',
  page,
  languages,
}: {
  lang?: Lang;
  page?: TranslatedPage;
  /** The page in each language it exists in, for pages outside `TRANSLATED`
   * (an English article with a Spanish version). */
  languages?: Partial<Record<Lang, string>> | null;
}) {
  const switcher: Partial<Record<Lang, string>> | null = page ? TRANSLATED[page] : (languages ?? null);
  const c = CHROME[lang];
  const h = GROUP_HEADING[lang];
  const group = (keys: readonly GuideKey[]) =>
    keys.flatMap((key) => {
      const href = hrefFor(key, lang);
      if (!href) return [];
      const label =
        key === 'heelPain' && lang !== 'en'
          ? c.navHeelPain
          : key === 'flatFeet' && lang !== 'en'
            ? c.navFlatFeet
            : lang === 'es'
              ? NAV_LABEL_ES[key]
              : lang === 'ru'
                ? NAV_LABEL_RU[key]
                : lang === 'en'
                  ? NAV_LABEL[key]
                  : ARTICLES_NEW[lang][key as EnglishPage]?.crumb;
      return label ? [{ href, label }] : [];
    });

  const walkito = [
    ...(lang === 'en'
      ? [
          { href: '/program/', label: 'How the plan works' },
          { href: '/science/', label: 'Evidence' },
        ]
      : lang === 'es'
      ? [
          { href: CUSTOM_PAGES.program.es, label: 'Cómo funciona el plan' },
          { href: CUSTOM_PAGES.science.es, label: 'Evidencia' },
        ]
      : lang === 'ru'
      ? [
          { href: CUSTOM_PAGES.program.ru, label: 'Как работает план' },
          { href: CUSTOM_PAGES.science.ru, label: 'Исследования' },
        ]
      : []),
    // The app itself, on every page: the one link the whole site exists for.
    ...[storeHref(lang === 'en' ? 'footer' : `footer-${lang}`)].flatMap((href) =>
      href ? [{ href, label: FOOTER_APP[lang].ios }] : [],
    ),
    ...[playHref(lang === 'en' ? 'footer' : `footer-${lang}`)].flatMap((href) =>
      href ? [{ href, label: FOOTER_APP[lang].android }] : [],
    ),
    { href: TRANSLATED.about[lang], label: c.navAbout },
    { href: TRANSLATED.support[lang], label: c.navSupport },
    { href: TRANSLATED.privacy[lang], label: c.navPrivacy },
    { href: TRANSLATED.terms[lang], label: c.navTerms },
  ];

  const extras = [
      ...(lang === 'en'
        ? [
            { href: '/exercises/', label: 'Exercise library' },
            { href: '/calf-raise-test/', label: 'Calf raise test' },
            { href: '/printable-exercise-sheets/', label: 'Printable sheets (PDF)' },
          ]
        : lang === 'es'
        ? [
            { href: CUSTOM_PAGES.exercises.es, label: 'Biblioteca de ejercicios' },
            { href: '/es/test-de-elevacion-de-talon/', label: 'Test de elevación de talón' },
            { href: CUSTOM_PAGES.printables.es, label: 'Hojas imprimibles (PDF)' },
          ]
        : lang === 'ru'
        ? [
            { href: CUSTOM_PAGES.exercises.ru, label: 'Библиотека упражнений' },
            { href: CUSTOM_PAGES.printables.ru, label: 'Листы для печати (PDF)' },
          ]
        : []),
  ];

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-panel">
          <div className="footer-brand">
            <div className="footer-brand-text">
              <Link className="footer-logo" href={TRANSLATED.home[lang]}>
                <Image src="/icon-96.webp" alt="" width={40} height={40} />
                Walkito
              </Link>
              <p>{TAGLINE[lang]}</p>
            </div>
            <div className="footer-brand-actions">
              <SocialLinks lang={lang} />
              <AppStoreBadge campaign={lang === 'en' ? 'footer-badge' : `footer-badge-${lang}`} lang={lang} />
            </div>
          </div>
          <nav aria-label={c.guidesHeading} className="footer-cols">
            <Column heading={h.exercises} links={[...group(NAV_GROUPS.exercises), ...extras]} />
            <Column
              heading={h.heel}
              links={group(['hubPlantarFasciitis', 'morningHeelPain', 'pfDuration', 'runners', ...NAV_GROUPS.heel])}
            />
            <Column heading={h.pain} links={group(['hubFlatFeet', 'ballOfFoot', ...NAV_GROUPS.foot])} />
            <div className="footer-stack">
              <Column heading={h.work} links={group(NAV_GROUPS.work)} />
              <Column heading={h.compare} links={group(NAV_GROUPS.compare)} />
            </div>
            <Column heading={h.walkito} links={walkito} />
          </nav>
          <script dangerouslySetInnerHTML={{ __html: FOLD_ON_PHONE }} />
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Walkito</p>
          {switcher && (
            <nav aria-label={c.language} className="langs">
              {LANGS.filter((l) => switcher[l]).map((l) =>
                l === lang ? (
                  <span key={l} aria-current="page">
                    {LANG_NAMES[l]}
                  </span>
                ) : (
                  <a key={l} href={switcher[l]} hrefLang={l} lang={l}>
                    {LANG_NAMES[l]}
                  </a>
                ),
              )}
            </nav>
          )}
        </div>
      </div>
    </footer>
  );
}
