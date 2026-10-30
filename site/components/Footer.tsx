import Image from 'next/image';
import Link from 'next/link';

import './footer.css';
import './footer-fix.css';
import { BackToTop } from '@/components/BackToTop';
import { LangPicker } from '@/components/LangPicker';
import { AppStoreBadge } from '@/components/AppStoreBadge';

import { SocialLinks } from '@/components/SocialLinks';
import { CHROME, CUSTOM_PAGES, NEW_ARTICLE_PATHS, isFullLang, EN_ONLY, ES_ARTICLES, RU_ARTICLES, LANG_NAMES, LANGS, TRANSLATED, type EnglishPage, type Lang, type TranslatedPage } from '@/lib/i18n';
import { ARTICLES_NEW, hasSpanish, hasRussian } from '@/lib/guides';
import { GROUP_HEADING, NAV_LABEL, NAV_LABEL_ES, NAV_LABEL_RU, type GuideKey } from '@/lib/nav';

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
function hrefFor(key: GuideKey, lang: Lang): string | null {
  if (key === 'runners') return isFullLang(lang) ? CUSTOM_PAGES.runners[lang] : null;
  if (key in TRANSLATED) return TRANSLATED[key as TranslatedPage][lang];
  if (lang === 'en') return EN_ONLY[key as EnglishPage];
  if (lang === 'es' && hasSpanish(key as EnglishPage)) return ES_ARTICLES[key as EnglishPage];
  if (lang === 'ru' && hasRussian(key as EnglishPage)) return RU_ARTICLES[key as EnglishPage];
  if (!isFullLang(lang) && ARTICLES_NEW[lang][key as EnglishPage]) return NEW_ARTICLE_PATHS[lang][key as EnglishPage] ?? null;
  return null;
}

/** Past this many links a column sets in two, so a long list does not run
 * three times the height of its neighbours. */
const SPLIT_AT = 9;

function Column({ heading, links }: { heading: string; links: { href: string; label: string }[] }) {
  if (links.length === 0) return null;
  const split = links.length > SPLIT_AT;
  // <details open>: every link is in the page for readers and crawlers alike.
  // On a phone the script at the end of the footer folds the sections, so the
  // footer is a short list of headings instead of sixty links.
  return (
    // suppressHydrationWarning: on a phone the inline script below closes the
    // sections before React hydrates, so the attribute differs on purpose.
    <details className={split ? 'ft-col ft-col-wide' : 'ft-col'} open suppressHydrationWarning>
      <summary className="ft-heading">{heading}</summary>
      <ul className={split ? 'ft-list ft-split' : 'ft-list'}>
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
  en: 'Walkito is an iPhone and Android app with exercises for heel pain, plantar fasciitis and flat feet: sessions of 3, 5 or 10 minutes, on 3, 5 or 7 days a week you choose, built on clinical guidelines.',
  es: 'Walkito es una app para iPhone y Android con ejercicios para el dolor de talón, la fascitis plantar y el pie plano: sesiones de 3, 5 o 10 minutos, los 3, 5 o 7 días a la semana que tú elijas, basada en guías clínicas.',
  ru: 'Приложение Walkito для iPhone и Android с упражнениями при боли в пятке, плантарном фасциите и плоскостопии: занятия по 3, 5 или 10 минут, 3, 5 или 7 дней в неделю на ваш выбор, на основе клинических рекомендаций.',
  pt: 'O Walkito é um app para iPhone e Android com exercícios para dor no calcanhar, fascite plantar e pé chato: sessões de 3, 5 ou 10 minutos, em 3, 5 ou 7 dias por semana, à sua escolha, baseado em diretrizes clínicas.',
  fr: "Walkito est une application pour iPhone et Android avec des exercices pour la douleur au talon, la fasciite plantaire et les pieds plats\u00A0: des séances de 3, 5 ou 10\u00A0minutes, 3, 5 ou 7\u00A0jours par semaine au choix, fondée sur les recommandations cliniques.",
  it: 'Walkito è un’app per iPhone e Android con esercizi per il dolore al tallone, la fascite plantare e i piedi piatti: sessioni da 3, 5 o 10 minuti, 3, 5 o 7 giorni a settimana a tua scelta, basata sulle linee guida cliniche.',
  de: 'Walkito ist eine App für iPhone und Android mit Übungen bei Fersenschmerzen, Plantarfasziitis und Plattfuß: Einheiten von 3, 5 oder 10\u00A0Minuten, an 3, 5 oder 7 Tagen pro Woche nach deiner Wahl, auf Grundlage klinischer Leitlinien.',
};

/** Folds the footer sections on a phone, before first paint of the footer. */
const FOLD_ON_PHONE = `if(matchMedia("(max-width: 760px)").matches){document.querySelectorAll(".ft details[open]").forEach(function(d){d.removeAttribute("open")})}`;

const FOOT_MAP_LINK = { en: 'Where does your foot hurt?', es: '¿Dónde te duele el pie?', ru: 'Где болит стопа?' } as const;

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
    { href: TRANSLATED.about[lang], label: c.navAbout },
    { href: TRANSLATED.support[lang], label: c.navSupport },
    { href: TRANSLATED.privacy[lang], label: c.navPrivacy },
    { href: TRANSLATED.terms[lang], label: c.navTerms },
  ];

  // The "where does it hurt" map exists in the three full languages only.
  const footMap =
    lang === 'en' || lang === 'es' || lang === 'ru'
      ? [{ href: CUSTOM_PAGES.footMap[lang], label: FOOT_MAP_LINK[lang] }]
      : [];

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
            { href: '/ru/test-podema-na-noski/', label: 'Тест подъёма на носки' },
            { href: CUSTOM_PAGES.printables.ru, label: 'Листы для печати (PDF)' },
          ]
        : []),
  ];

  return (
    <footer className="ft">
      <div className="ft-stage" aria-hidden>
        <div className="ft-mark">Walkito</div>
      </div>

      <div className="ft-base">
        <div className="ft-glow" aria-hidden />
        {/* A sibling of the panel, not a child: the panel's backdrop-filter
            would make it the backdrop root, and the half of the button above
            the panel's edge would then blur nothing. */}
        <BackToTop lang={lang} className="ft-top" />

        <div className="ft-panel">
          <div className="ft-brand">
            <div className="ft-brand-text">
              <Link className="ft-logo" href={TRANSLATED.home[lang]}>
                <Image src="/icon-96.webp" alt="" width={40} height={40} />
                Walkito
              </Link>
              <p>{TAGLINE[lang]}</p>
            </div>
            <div className="ft-brand-actions">
              <SocialLinks lang={lang} />
              <AppStoreBadge campaign={lang === 'en' ? 'footer-badge' : `footer-badge-${lang}`} lang={lang} />
            </div>
          </div>

          <nav aria-label={c.guidesHeading} className="ft-cols">
            {/* About 15 links (2026-10-29): the main guides and tools, then the
                company pages. The footer used to carry 69 links, so every page
                on the site lent weight to every weak page; the rest are reached
                from the guides themselves and the menu. */}
            <Column
              heading={h.exercises}
              links={[
                ...group(['hubPlantarFasciitis', 'heelPain', 'hubFlatFeet', 'flatFeet', 'morningHeelPain', 'ankleMobility', 'standing']),
                ...(lang === 'en' ? group(['bestInsoles']) : []),
                ...footMap,
                ...extras.slice(0, 2),
              ]}
            />
            <Column heading={h.walkito} links={walkito} />
          </nav>
          <script dangerouslySetInnerHTML={{ __html: FOLD_ON_PHONE }} />

          <div className="ft-bottom">
            <div className="ft-meta">
              <p className="ft-copy">© {new Date().getFullYear()} Walkito</p>
              {switcher && (
                <LangPicker
                  label={c.language}
                  current={LANG_NAMES[lang]}
                  options={LANGS.filter((l) => switcher[l]).map((l) => ({
                    lang: l,
                    name: LANG_NAMES[l],
                    href: switcher[l]!,
                    current: l === lang,
                  }))}
                />
              )}
            </div>
            <p className="ft-notice">{c.notice}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
