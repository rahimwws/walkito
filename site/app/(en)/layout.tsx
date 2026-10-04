import type { Metadata } from 'next';

import { RootDocument } from '@/components/RootDocument';
import { alternatesFor } from '@/lib/i18n';
import { smartBannerContent, SITE_NAME, SITE_URL } from '@/lib/site';

import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // The home page's title is this default, so it carries the query the
    // page is built for rather than the tagline.
    default: 'Walkito: Heel Pain & Flat Feet Exercise App',
    // Every page supplies its own unique half; this appends the brand.
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Walkito is a personal exercise plan for heel, foot and leg pain that adjusts to how your feet feel each day.',
  alternates: alternatesFor('home', 'en'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Left at their defaults these truncate the snippet and shrink the
      // thumbnail, which is a quiet loss most sites never notice.
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Walkito: Heel Pain & Flat Feet Exercise App',
    description: 'Walkito is a personal exercise plan for heel, foot and leg pain that adjusts to how your feet feel each day.',
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_US',
    // Named explicitly. The card is drawn by `app/opengraph-image.tsx`, which
    // sits outside the language groups so all three roots can share it — and
    // from there Next no longer attaches it on its own.
    images: ['/opengraph-image'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walkito: Heel Pain & Flat Feet Exercise App',
    description: 'Walkito is a personal exercise plan for heel, foot and leg pain that adjusts to how your feet feel each day.',
    images: ['/opengraph-image'],
  },
  // Safari's Smart App Banner: `<meta name="apple-itunes-app">`, which shows
  // "Get" to someone without the app and "Open" to someone with it. Omitted
  // while there was no listing; a banner pointing at a guessed id is a dead
  // strip on every iPhone that loads the page.
  ...(smartBannerContent('smart-banner') ? { other: { 'apple-itunes-app': smartBannerContent('smart-banner')! } } : {}),
};

export { viewport } from '@/components/RootDocument';

/**
 * The English root.
 *
 * One of three root layouts — `(en)`, `ru` and `es` — because `<html lang>` can
 * only be set by a root layout, and a Russian page served as `lang="en"` is
 * read aloud with English phonetics by every screen reader. Crossing between
 * them is a full page load, which is what a language change should be anyway.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
