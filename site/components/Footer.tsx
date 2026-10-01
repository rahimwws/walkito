import Link from 'next/link';

import { CHROME, LANG_NAMES, LANGS, TRANSLATED, type Lang, type TranslatedPage } from '@/lib/i18n';
import { SocialLinks } from '@/components/SocialLinks';

/**
 * The footer, on every page in every language.
 *
 * Two jobs beyond the legal links. The guides are linked from here so every
 * page on the site passes a link to them — they are the pages built to rank,
 * and a page nothing links to is a page a crawler treats as unimportant. And on
 * a translated page it carries the language switcher, pointing at the same page
 * in each language rather than at each home page.
 *
 * Plain `<a>` for the switcher, not `Link`: each language is its own root
 * layout, so the jump is a full load either way, and saying so keeps Next from
 * prefetching two whole documents per page.
 */
export function Footer({ lang = 'en', page }: { lang?: Lang; page?: TranslatedPage }) {
  const c = CHROME[lang];
  return (
    <footer className="footer">
      <div className="shell">
        <p>© {new Date().getFullYear()} Walkito</p>
        <nav aria-label={c.guidesHeading}>
          <Link href={TRANSLATED.flatFeet[lang]}>{c.navFlatFeet}</Link>
          <Link href={TRANSLATED.heelPain[lang]}>{c.navHeelPain}</Link>
          <Link href={TRANSLATED.about[lang]}>{c.navAbout}</Link>
          <Link href={TRANSLATED.support[lang]}>{c.navSupport}</Link>
          <Link href={TRANSLATED.privacy[lang]}>{c.navPrivacy}</Link>
          <Link href={TRANSLATED.terms[lang]}>{c.navTerms}</Link>
        </nav>
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
    </footer>
  );
}
