import type { Metadata } from 'next';

import { RootDocument } from '@/components/RootDocument';
import { PROGRAM, SITE_NAME, SITE_URL } from '@/lib/site';

import '../globals.css';

export { viewport } from '@/components/RootDocument';

/** `3, 5 o 10` — the session options as a Spanish list, as the guides say it. */
const MINUTES = `${PROGRAM.sessionMinutes.slice(0, -1).join(', ')} o ${PROGRAM.sessionMinutes[PROGRAM.sessionMinutes.length - 1]}`;

/**
 * The Spanish root. See the note on `app/(en)/layout.tsx` for why each
 * language is its own root layout. Robots and icons are the English root's,
 * restated: metadata does not inherit across root layouts.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ejercicios de talón y pie plano para corredores | Walkito',
    template: `%s | ${SITE_NAME}`,
  },
  // No length: the plan is built a week at a time and has no end, so the
  // description sells what it does, with the numbers read from `PROGRAM`.
  description: `Ejercicios para el dolor de talón y el pie plano en corredores: sesiones de ${MINUTES} minutos y un plan que se arma cada semana y se ajusta a tu dolor.`,
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
  openGraph: { siteName: SITE_NAME, locale: 'es_ES', images: ['/opengraph-image'] },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="es">{children}</RootDocument>;
}
