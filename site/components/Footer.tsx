import Link from 'next/link';

import { SocialLinks } from '@/components/SocialLinks';
import { CHROME, EN_ONLY, LANG_NAMES, LANGS, TRANSLATED, type EnglishPage, type Lang, type TranslatedPage } from '@/lib/i18n';
import { GROUP_HEADING, NAV_GROUPS, NAV_LABEL, type GuideKey } from '@/lib/nav';

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
  if (key === 'runners') return lang === 'en' ? '/heel-pain-runners/' : null;
  if (key in TRANSLATED) return TRANSLATED[key as TranslatedPage][lang];
  return lang === 'en' ? EN_ONLY[key as EnglishPage] : null;
}

function Column({ heading, links }: { heading: string; links: { href: string; label: string }[] }) {
  if (links.length === 0) return null;
  return (
    <div className="footer-col">
      <p className="footer-heading">{heading}</p>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ lang = 'en', page }: { lang?: Lang; page?: TranslatedPage }) {
  const c = CHROME[lang];
  const h = GROUP_HEADING[lang];
  const group = (keys: readonly GuideKey[]) =>
    keys.flatMap((key) => {
      const href = hrefFor(key, lang);
      if (!href) return [];
      const label =
        key === 'heelPain' && lang !== 'en' ? c.navHeelPain : key === 'flatFeet' && lang !== 'en' ? c.navFlatFeet : NAV_LABEL[key];
      return label ? [{ href, label }] : [];
    });

  const walkito = [
    ...(lang === 'en'
      ? [
          { href: '/program/', label: 'How the plan works' },
          { href: '/science/', label: 'Evidence' },
        ]
      : []),
    { href: TRANSLATED.about[lang], label: c.navAbout },
    { href: TRANSLATED.support[lang], label: c.navSupport },
    { href: TRANSLATED.privacy[lang], label: c.navPrivacy },
    { href: TRANSLATED.terms[lang], label: c.navTerms },
  ];

  return (
    <footer className="footer">
      <div className="shell">
        <nav aria-label={c.guidesHeading} className="footer-cols">
          <Column heading={h.exercises} links={group(NAV_GROUPS.exercises)} />
          <Column heading={h.pain} links={group(NAV_GROUPS.pain)} />
          {lang === 'en' && (
            <div className="footer-col footer-stack">
              <Column heading={h.work} links={group(NAV_GROUPS.work)} />
              <Column heading={h.compare} links={group(NAV_GROUPS.compare)} />
            </div>
          )}
          <Column heading={h.walkito} links={walkito} />
        </nav>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Walkito</p>
          <SocialLinks lang={lang} />
          {page && (
            <nav aria-label={c.language} className="langs">
              {LANGS.map((l) =>
                l === lang ? (
                  <span key={l} aria-current="page">
                    {LANG_NAMES[l]}
                  </span>
                ) : (
                  <a key={l} href={TRANSLATED[page][l]} hrefLang={l} lang={l}>
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
