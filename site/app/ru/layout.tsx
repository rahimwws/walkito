import type { Metadata } from 'next';

import { RootDocument } from '@/components/RootDocument';
import { SITE_NAME, SITE_URL } from '@/lib/site';

import '../globals.css';

export { viewport } from '@/components/RootDocument';

/**
 * The Russian root. See the note on `app/(en)/layout.tsx` for why each
 * language is its own root layout. Robots and icons are the English root's,
 * restated: metadata does not inherit across root layouts.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Упражнения при боли в пятке и плоскостопии для бегунов | Walkito',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Программа упражнений на 12 недель при боли в пятке и стопе у бегунов: 3–8 минут в день, ретест каждые две недели и план, который сбавляет нагрузку в плохие утра.',
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
  openGraph: { siteName: SITE_NAME, locale: 'ru_RU', images: ['/opengraph-image'] },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="ru">{children}</RootDocument>;
}
