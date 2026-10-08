import type { Metadata } from 'next';

import { HOME_META } from '@/components/Home';
import { RootDocument } from '@/components/RootDocument';
import { oswald } from '@/lib/font-oswald';
import { OG_LOCALE } from '@/lib/i18n';
import { smartBannerContent, SITE_NAME, SITE_URL } from '@/lib/site';

import '../globals.css';

export { viewport } from '@/components/RootDocument';

/**
 * The Russian root. See the note on `app/(en)/layout.tsx` for why each
 * language is its own root layout. Robots and icons are the English root's,
 * restated: metadata does not inherit across root layouts.
 */
export const metadata: Metadata = {
  // Safari's Smart App Banner, as on the English root.
  ...(smartBannerContent('smart-banner-ru') ? { other: { 'apple-itunes-app': smartBannerContent('smart-banner-ru')! } } : {}),
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_META.ru.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_META.ru.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: { icon: '/favicon.png', apple: '/apple-touch-icon.png' },
  // The English card: `next/og` renders its default face, which has no
  // Cyrillic, so a translated card would ship as boxes. The English one is
  // honest about what the app is in any language.
  openGraph: { siteName: SITE_NAME, locale: OG_LOCALE.ru, images: ['/ru/opengraph-image'] },
  twitter: { card: 'summary_large_image', images: ['/ru/opengraph-image'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="ru" fontClass={oswald.variable}>{children}</RootDocument>;
}
