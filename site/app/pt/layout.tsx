import type { Metadata } from 'next';

import { HOME_META } from '@/components/Home';
import { RootDocument } from '@/components/RootDocument';
import { anton } from '@/lib/font-anton';
import { OG_LOCALE } from '@/lib/i18n';
import { smartBannerContent, SITE_NAME, SITE_URL } from '@/lib/site';

import '../globals.css';

export { viewport } from '@/components/RootDocument';

/**
 * The Portuguese root. See the note on `app/(en)/layout.tsx` for why each
 * language is its own root layout. Robots and icons are the English root's,
 * restated: metadata does not inherit across root layouts.
 */
export const metadata: Metadata = {
  // Safari's Smart App Banner, as on the English root.
  ...(smartBannerContent('smart-banner-pt') ? { other: { 'apple-itunes-app': smartBannerContent('smart-banner-pt')! } } : {}),
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_META.pt.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_META.pt.description,
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
  openGraph: { siteName: SITE_NAME, locale: OG_LOCALE.pt, images: ['/share/en.jpg'] },
  twitter: { card: 'summary_large_image', images: ['/share/en.jpg'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="pt" fontClass={anton.variable}>{children}</RootDocument>;
}
