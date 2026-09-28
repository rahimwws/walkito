import type { Metadata } from 'next';

import { RootDocument } from '@/components/RootDocument';
import { PROGRAM, SITE_NAME, SITE_URL } from '@/lib/site';

import '../globals.css';

export { viewport } from '@/components/RootDocument';

/** «3, 5 или 10 минут»: the noun agrees with the last number, so reread the
 * sentence if `PROGRAM.sessionMinutes` changes. */
const [MIN_A, MIN_B, MIN_C] = PROGRAM.sessionMinutes;
const SESSIONS = `${MIN_A}, ${MIN_B} или ${MIN_C}`;

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
  // No plan length: the plan is built a week at a time and has no last week.
  description: `Упражнения при боли в пятке, пяточной шпоре и плоскостопии для бегунов: план, который строится по одной неделе вокруг вашей цели, и тренировки по ${SESSIONS} минут.`,
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
