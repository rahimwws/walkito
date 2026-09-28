import type { Metadata } from 'next';

import { RootDocument } from '@/components/RootDocument';
import { alternatesFor } from '@/lib/i18n';
import { APPLE_APP_ID, SITE_NAME, SITE_URL } from '@/lib/site';

import '../globals.css';

/**
 * `metadataBase` first, because everything downstream depends on it.
 *
 * Without it every relative URL in metadata stays relative: Open Graph images
 * break in every scraper that will not guess a host, and canonicals can come
 * out invalid. It is also the one line that decides which domain the whole
 * site's SEO accrues to, which is why the host lives in `lib/site.ts` and not
 * inline here.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // The home page's title is this default, so it carries the query the
    // page is built for rather than the tagline.
    default: 'Heel Pain Exercises for Runners — a 12-Week Program | Walkito',
    // Every page supplies its own unique half; this appends the brand.
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'A 12-week exercise program for heel and foot pain in runners: 3 to 8 minutes a day, a retest every two weeks, and a plan that steps back on bad mornings.',
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
    title: 'Heel pain from running? A 12-week program | Walkito',
    description: 'Calf strength, stretching and balance work, 3 to 8 minutes a day, that steps back on bad mornings.',
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
    title: 'Heel pain from running? A 12-week program | Walkito',
    description: 'Calf strength, stretching and balance work, 3 to 8 minutes a day, that steps back on bad mornings.',
    images: ['/opengraph-image'],
  },
  // iOS shows a native install strip when this is present. Omitted until there
  // is a listing: a banner pointing at a guessed id is a dead strip on every
  // iPhone that loads the page.
  ...(APPLE_APP_ID != null ? { appleWebApp: { capable: false } } : {}),
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
