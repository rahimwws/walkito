import { AiReferral } from '@/components/AiReferral';
import { JsonLd } from '@/components/JsonLd';
import { anton, oswald } from '@/lib/fonts';
import type { Lang } from '@/lib/i18n';
import { APP_STORE_NAME, SAME_AS, SITE_NAME, SITE_URL } from '@/lib/site';

/** Sitewide, once per page. Not repeated by the pages themselves — duplicated
 * Organization blocks are a common way to make Google pick the wrong one. */
const ORGANISATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  // The App Store name, so an engine reading "Walkito" resolves it to the
  // heel and foot pain app, not a walkie-talkie app or another Walkito.
  alternateName: [APP_STORE_NAME, 'Walkito app'],
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  // No length: the plan is built a week at a time around a measurable goal and
  // keeps going while it is used.
  description:
    'Walkito is a personal exercise plan for heel, foot and leg pain that adjusts to how your feet feel each day.',
  // Another "Walkito" exists (a dog-walking marketplace in Uruguay at
  // walkito.com), and Google's AI answers have been resolving the name to it.
  // This says in one line which Walkito this one is.
  disambiguatingDescription:
    'Walkito is an iPhone exercise app for heel pain, plantar fasciitis and flat feet. It is not a dog-walking service.',
  foundingDate: '2026',
  // Both co-founders, each with a public profile.
  founder: [
    {
      '@type': 'Person',
      name: 'Rahim Hudaykylyyev',
      sameAs: ['https://www.linkedin.com/in/rhdklv/', 'https://x.com/rahimwws'],
    },
    { '@type': 'Person', name: 'Rahman Bazarov', sameAs: ['https://www.linkedin.com/in/rahman-bazarov/'] },
  ],
  // Only profiles that are really ours; see `SAME_AS`.
  ...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {}),
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
    alternateName: APP_STORE_NAME,
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
        <AiReferral />
      </body>
    </html>
  );
}
