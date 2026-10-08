import Link from 'next/link';
import { GlobeIcon } from '@phosphor-icons/react/dist/ssr/Globe';

import './footer.css';
import { BackToTop } from '@/components/BackToTop';
import { SocialLinks } from '@/components/SocialLinks';
import { CHROME, EN_ONLY, ES_ARTICLES, LANG_NAMES, LANGS, TRANSLATED, type EnglishPage, type Lang, type TranslatedPage } from '@/lib/i18n';
import { hasSpanish } from '@/lib/guides';
import { playHref, storeHref } from '@/lib/site';
import { GROUP_HEADING, NAV_GROUPS, NAV_LABEL, NAV_LABEL_ES, type GuideKey } from '@/lib/nav';

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
 *
 * The look (`footer.css`): the page ends on the app's dark surface, with the
 * name set across the whole width and a glass panel rising over its lower
 * half, lit from behind in the icon's blues. The wordmark is decoration and is
 * hidden from assistive tech; the name is read once, in the copyright line.
 */
const FOOTER_APP: Record<Lang, { ios: string; android: string }> = {
  en: { ios: 'Walkito on the App Store', android: 'Walkito on Google Play' },
  ru: { ios: 'Walkito в App Store', android: 'Walkito в Google Play' },
  es: { ios: 'Walkito en el App Store', android: 'Walkito en Google Play' },
};

function hrefFor(key: GuideKey, lang: Lang): string | null {
  if (key === 'runners') return lang === 'en' ? '/heel-pain-runners/' : null;
  if (key in TRANSLATED) return TRANSLATED[key as TranslatedPage][lang];
  if (lang === 'en') return EN_ONLY[key as EnglishPage];
  if (lang === 'es' && hasSpanish(key as EnglishPage)) return ES_ARTICLES[key as EnglishPage];
  return null;
}

/** Past this many links a column sets in two, so Spanish's exercise library
 * does not run three times the height of its neighbours. */
const SPLIT_AT = 9;

function Column({ heading, links }: { heading: string; links: { href: string; label: string }[] }) {
  if (links.length === 0) return null;
  const split = links.length > SPLIT_AT;
  return (
    <div className={split ? 'ft-col ft-col-wide' : 'ft-col'}>
      <p className="ft-heading">{heading}</p>
      <ul className={split ? 'ft-list ft-split' : 'ft-list'}>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
              : NAV_LABEL[key];
      return label ? [{ href, label }] : [];
    });

  const walkito = [
    ...(lang === 'en'
      ? [
          { href: '/program/', label: 'How the plan works' },
          { href: '/science/', label: 'Evidence' },
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
          <nav aria-label={c.guidesHeading} className="ft-cols">
            <Column
              heading={h.exercises}
              links={[
                ...group(NAV_GROUPS.exercises),
                ...(lang === 'en'
                  ? [
                      { href: '/exercises/', label: 'Exercise library' },
                      { href: '/calf-raise-test/', label: 'Calf raise test' },
                      { href: '/printable-exercise-sheets/', label: 'Printable sheets (PDF)' },
                    ]
                  : []),
              ]}
            />
            <Column heading={h.pain} links={group(NAV_GROUPS.pain)} />
            {lang !== 'ru' && (
              <div className="ft-col ft-stack">
                <Column heading={h.work} links={group(NAV_GROUPS.work)} />
                <Column heading={h.compare} links={group(NAV_GROUPS.compare)} />
              </div>
            )}
            {/* Spanish has no library index page, so its exercise pages are
                listed here; English links to /exercises/ instead. */}
            {lang === 'es' && <Column heading={h.library} links={group(NAV_GROUPS.library)} />}
            <Column heading={h.walkito} links={walkito} />
          </nav>

          <div className="ft-bottom">
            <div className="ft-meta">
              <p className="ft-copy">© {new Date().getFullYear()} Walkito</p>
              <SocialLinks lang={lang} />
              {switcher && (
                <nav aria-label={c.language} className="ft-langs">
                  <GlobeIcon className="ft-globe" size={18} weight="fill" aria-hidden />
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
            <p className="ft-notice">{c.notice}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
