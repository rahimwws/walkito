import { JsonLd } from '@/components/JsonLd';
import { anton, oswald } from '@/lib/fonts';
import type { Lang } from '@/lib/i18n';
import { SITE_NAME, SITE_URL } from '@/lib/site';

/** Sitewide, once per page. Not repeated by the pages themselves — duplicated
 * Organization blocks are a common way to make Google pick the wrong one. */
const ORGANISATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description:
    'A 12-week exercise program for heel and foot pain in runners, built from published rehabilitation protocols.',
};

/**
 * `WebSite`, alongside `Organization`.
 *
 * The pair is what lets an engine treat "Walkito" as one named thing with a
 * home rather than as a word that appears on some pages. No `SearchAction`:
 * the sitelinks search box it used to drive is gone, and declaring a search
 * endpoint a static site does not have would be a claim with nothing behind it.
 */
function website(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: lang,
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  };
}

export const viewport = {
  themeColor: '#8b5cf6',
};

/**
 * `<html>` and `<body>`, shared by the three root layouts.
 *
 * Russian gets its own display face because Anton has no Cyrillic; see
 * `lib/fonts.ts`.
 */
export function RootDocument({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const display = lang === 'ru' ? oswald : anton;
  return (
    <html lang={lang} className={display.variable}>
      <body>
        <JsonLd data={ORGANISATION} />
        <JsonLd data={website(lang)} />
        {/* The wash behind the hero. Two soft violet pools rather than a
            gradient bar, so the colour reads as light in the room instead of a
            banner stuck to the top of the page. */}
        <div className="wash" aria-hidden />
        {children}
      </body>
    </html>
  );
}
