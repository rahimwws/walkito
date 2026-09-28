import type { Metadata } from 'next';

import { RootDocument } from '@/components/RootDocument';
import { alternatesFor } from '@/lib/i18n';
import { APPLE_APP_ID, PROGRAM, SITE_NAME, SITE_URL } from '@/lib/site';

import '../globals.css';

/** "3, 5 or 10" — a list of options as a sentence says it. */
const or = (xs: readonly number[]) => `${xs.slice(0, -1).join(', ')} or ${xs[xs.length - 1]}`;

// The plan has no fixed length — it is built one week at a time around a goal —
// so neither the title nor the description may count weeks. Numbers come from
// `PROGRAM`, which is read out of the app.
const DESCRIPTION = `Exercises for heel and foot pain in runners, built one week at a time around a goal: ${or(PROGRAM.sessionMinutes)} minutes a session, softer on bad mornings.`;
const SOCIAL_TITLE = 'Heel pain from running? A plan that adapts every week | Walkito';
const SOCIAL_DESCRIPTION = `Calf strength, stretching and balance work, ${or(PROGRAM.sessionMinutes)} minutes a session, built one week at a time and softer on bad mornings.`;

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
    default: 'Heel Pain Exercises for Runners — a Plan That Adapts | Walkito',
    // Every page supplies its own unique half; this appends the brand.
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
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
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
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
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
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
