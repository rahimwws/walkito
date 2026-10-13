import '@/app/pages.css';

import { AiReferral } from '@/components/AiReferral';
import { JsonLd } from '@/components/JsonLd';
import { TRANSLATED, type Lang } from '@/lib/i18n';
import { AUTHORS, personId } from '@/lib/schema';
import { APP_STORE_NAME, ORG_ID, ORG_REF, SAME_AS, SITE_NAME, SITE_URL, SUPPORT_EMAIL, WEBSITE_ID } from '@/lib/site';

/** Sitewide, once per page, and the only full Organization on it. Not
 * repeated by the pages themselves — duplicated Organization blocks are a
 * common way to make Google pick the wrong one. Every other node names
 * Walkito by its `@id` (`ORG_REF`). */
const ORGANISATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  // The App Store name, so an engine reading "Walkito" resolves it to the
  // heel and foot pain app, not a walkie-talkie app or another Walkito.
  alternateName: [APP_STORE_NAME, 'Walkito app'],
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  email: SUPPORT_EMAIL,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: SUPPORT_EMAIL,
    url: `${SITE_URL}${TRANSLATED.support.en}`,
  },
  // No length: the plan is built a week at a time around a measurable goal and
  // keeps going while it is used.
  description:
    'Walkito is an exercise plan for heel pain, plantar fasciitis and flat feet that adjusts to how your feet feel each morning.',
  // Another "Walkito" exists (a dog-walking marketplace in Uruguay at
  // walkito.com), and Google's AI answers have been resolving the name to it.
  // This says in one line which Walkito this one is.
  disambiguatingDescription:
    'Walkito is an iPhone and Android exercise app for heel pain, plantar fasciitis and flat feet. It is not a dog-walking service.',
  foundingDate: '2026',
  // Both co-founders, each with a public profile: the guides' authors
  // (lib/schema.ts), the same nodes by `@id`.
  founder: AUTHORS.map((a) => ({ '@type': 'Person', '@id': personId(a.slug), name: a.name, sameAs: a.sameAs })),
  // Only profiles that are really ours; see `SAME_AS`.
  ...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {}),
};

/**
 * Spanish pages carry the one-line disambiguation in Spanish too: ChatGPT,
 * asked "qué es Walkito", was answering with the Uruguayan dog-walking service
 * at walkito.com. Every other language keeps the English line.
 */
const DISAMBIGUATION_ES =
  'Walkito (walkito.site) es una app de ejercicios para iPhone y Android para el dolor de talón, la fascitis plantar y el pie plano. No tiene relación con walkito.com, un servicio de paseo de perros de Uruguay.';

function organisation(lang: Lang) {
  return lang === 'es' ? { ...ORGANISATION, disambiguatingDescription: DISAMBIGUATION_ES } : ORGANISATION;
}

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
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    alternateName: APP_STORE_NAME,
    url: SITE_URL,
    inLanguage: lang,
    publisher: ORG_REF,
  };
}

export const viewport = {
  themeColor: '#8b5cf6',
};

/**
 * `<html>` and `<body>`, shared by the three root layouts.
 *
 * Russian gets its own display face because Anton has no Cyrillic; see
 * `lib/font-anton.ts` and `lib/font-oswald.ts`.
 */
export function RootDocument({
  lang,
  fontClass,
  children,
}: {
  lang: Lang;
  /** The display face's CSS variable class. Each root layout imports only its
   * own face, so a page preloads one font file instead of both families. */
  fontClass: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className={fontClass}>
      <body>
        <JsonLd data={organisation(lang)} />
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
