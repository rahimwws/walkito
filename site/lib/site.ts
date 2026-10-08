/**
 * The facts every page and every machine-readable file is built from.
 *
 * One place, because these leak into canonicals, the sitemap, robots.txt,
 * JSON-LD and llms.txt at once — and a domain that is right in four of those
 * and wrong in the fifth is the kind of mistake nobody notices until the wrong
 * URL is the one indexed.
 *
 * The spec this was built from hardcodes `walkito.com` throughout. That domain
 * is not ours — it resolves to Vercel and belongs to someone else — so building
 * to the letter would have pointed every canonical and every sitemap entry at a
 * stranger's site. `walkito.site` is the domain that was actually bought.
 */
export const SITE_URL = 'https://walkito.site';

export const SITE_NAME = 'Walkito';

/** The app's name on the App Store, word for word. Used beside the short
 * brand so search engines tie "Walkito" to this app. */
export const APP_STORE_NAME = 'Walkito: Heel Pain & Flat Feet';

/**
 * The plan's own numbers, read out of the app rather than retyped.
 *
 * There is no fixed length any more. The app builds one week at a time around
 * a focus goal (`src/entities/program/model/plan/week.ts`), a reached goal
 * moves to maintaining and the next takes its place (`goals.ts`: "There is no
 * end to the plan"), so the site must never give the plan a length in weeks.
 * Walkito is sold as two auto-renewing subscriptions, yearly and weekly. That
 * is billing, not the programme, and the site quotes no prices.
 *
 * - Sessions: `SessionMinutes = 3 | 5 | 10`, default 5 (`store.ts`).
 * - Days a week: `WEEK_SHAPES` for 3, 5 or 7 days.
 * - Tests: `TEST_EVERY_DAYS` 14, then `TEST_EVERY_DAYS_AFTER_GOAL` 28 once the
 *   first goal is reached; a test is `RETEST_TESTS` measurements in about
 *   `RETEST_MINUTES` minutes.
 * - Week one "settles in": nothing that loads the fascia, nothing above level 2.
 * - Goals (`GOAL_SPECS`): morning pain ≤ 1/10 for 14 days running; arch hold
 *   60 s; 25 single-leg calf raises; 30 s single-leg balance; left/right gap
 *   under 10 %.
 *
 * Verified against `src/entities/program/model/plan/` on 28 September 2026. The
 * app and this site are separate builds: if the plan changes, these are wrong
 * and nothing fails to say so. Checking them is part of changing the plan.
 */
export const PROGRAM = {
  sessionMinutes: [3, 5, 10],
  defaultMinutes: 5,
  daysPerWeek: [3, 5, 7],
  testEveryDays: 14,
  testEveryDaysAfterGoal: 28,
  retestTests: 3,
  retestMinutes: 4,
  painFreeDays: 14,
  goals: {
    archHoldSeconds: 60,
    calfRaises: 25,
    balanceSeconds: 30,
    gapPercent: 10,
  },
} as const;

/**
 * The two pain thresholds the copy quotes, on the app's 0-10 scale.
 *
 * Read from the app: a morning counts towards the pain goal at `<= 1`
 * (`src/entities/program/model/plan/goals.ts`), and in-session pain at
 * `IN_SESSION_STOP` ends the session (`today.ts`). Same caveat as `PROGRAM`:
 * change the plan, check these.
 */
export const PAIN_GOAL_MAX = 1;
export const IN_SESSION_STOP = 6;

/**
 * When each page's content last really changed, `YYYY-MM-DD`.
 *
 * Feeds the sitemap's `lastmod`, the Article dates and the visible "Updated"
 * line. Change a date only with a real edit to that page: a sitemap whose dates
 * move on every build gets its dates ignored, and a visible date bumped without
 * a change is a small lie a reader can catch.
 *
 * Guides keep their own date in their data (`lib/guides/*.ts`).
 */
export const PAGE_UPDATED = {
  home: '2026-10-04',
  runners: '2026-10-03',
  program: '2026-09-28',
  science: '2026-09-28',
  faq: '2026-10-01',
  about: '2026-10-03',
  support: '2026-10-01',
  privacy: '2026-10-07',
  terms: '2026-10-01',
} as const;

/** The App Store listing, live since 1.0.1 passed review (2 October 2026).
 *
 * The bare `id` form, without a country or a slug: apps.apple.com sends every
 * visitor to their own storefront, so one link serves the English, Russian and
 * Spanish pages alike. The app is not sold in Russia, where the store says so. */
export const APP_STORE_URL: string | null = 'https://apps.apple.com/app/id6813076846';

/**
 * The provider token from App Store Connect → App Analytics → Campaigns.
 *
 * This is how the site counts conversions without a tracker. A link carrying
 * `pt` and `ct` shows up in App Analytics as a campaign, with impressions,
 * downloads and proceeds per `ct` — so each button on the site names itself and
 * the store reports which page sent the install. No cookie, no SDK, and the
 * privacy page stays true as written.
 */
export const APP_STORE_PROVIDER_TOKEN: string | null = '126870927';

/**
 * Where a download button points, named by the place it sits.
 *
 * Null before launch: there is nothing to download, and a pill that reads "Get
 * the app" and scrolls to itself is the page promising what it cannot do. Every
 * button still carries its campaign name, so launch is one constant here rather
 * than a hunt through the pages.
 */
export function storeHref(campaign: string): string | null {
  if (!APP_STORE_URL) return null;
  if (!APP_STORE_PROVIDER_TOKEN) return APP_STORE_URL;
  const url = new URL(APP_STORE_URL);
  url.searchParams.set('pt', APP_STORE_PROVIDER_TOKEN);
  url.searchParams.set('ct', campaign);
  url.searchParams.set('mt', '8');
  return url.toString();
}

/**
 * The Google Play listing, null until the Android build is live in production.
 *
 * The Android app (`com.walkito.app`) was submitted to Play review on
 * 30 September 2026 with managed publishing on, so the listing 404s until it
 * is published. The day it is, set this and every app call-out and badge on
 * the site gains a Google Play link next to the App Store one. A link to a
 * listing that 404s would be worse than no link.
 */
export const PLAY_STORE_URL: string | null = null;

/** The Play link for one placement, tagged so Play Console's acquisition
 * report can tell placements apart (`utm_source=walkito.site`). */
export function playHref(campaign: string): string | null {
  if (!PLAY_STORE_URL) return null;
  const url = new URL(PLAY_STORE_URL);
  url.searchParams.set('referrer', `utm_source=walkito.site&utm_medium=web&utm_campaign=${campaign}`);
  return url.toString();
}

/** The numeric id for the iOS Smart App Banner: Safari's own "Open / Get" strip. */
export const APPLE_APP_ID: string | null = '6813076846';

/**
 * The Smart App Banner's meta content, with campaign tokens so installs from
 * the banner show up in App Store Connect > Analytics > Campaigns as
 * `smart-banner` (`-ru`, `-es`). Apple: add the campaign and provider tokens
 * when implementing a Smart App Banner; the format is
 * `affiliate-data=pt=<provider>&ct=<campaign>`. Without a token it is the plain
 * banner.
 */
export function smartBannerContent(campaign: string, open: AppScreen = 'today'): string | null {
  if (!APPLE_APP_ID) return null;
  const argument = `app-argument=${appLink(open, campaign)}`;
  if (!APP_STORE_PROVIDER_TOKEN) return `app-id=${APPLE_APP_ID}, ${argument}`;
  return `app-id=${APPLE_APP_ID}, affiliate-data=pt=${APP_STORE_PROVIDER_TOKEN}&ct=${campaign}, ${argument}`;
}

/**
 * The screens the app opens from a link (`src/pages/open/model/route.ts` in
 * the app). Smart App Banner's "Open" button, for people who already have the
 * app, hands this to the app instead of opening it cold on Home.
 */
export type AppScreen = 'today' | 'test' | 'library/morning';

/**
 * `walkito:///?open=<screen>` rather than the /open/ universal link: it is
 * the shape the app rewrites before routing (`src/pages/open/model/intent.ts`),
 * and a build from before the /open route opens it as Home with a query it
 * ignores instead of an "Unmatched Route" screen. Same reason the site's
 * /open/ page hands over in this shape.
 */
export function appLink(open: AppScreen, campaign: string): string {
  return `walkito:///?open=${open}&src=${campaign}`;
}

export const SUPPORT_EMAIL = 'hello@walkito.site';

/**
 * The site-subscribe edge function URL, for the email signup form.
 *
 * JWT verification is disabled for this function (config.toml), so no anon
 * key is needed. The function only accepts POST from https://walkito.site.
 */
export const SITE_SUBSCRIBE_URL = 'https://illpzsrzfpllovwslmdx.supabase.co/functions/v1/site-subscribe';

/** Social profiles, linked from the footer and the founders' note. A profile
 * with an empty URL is left out everywhere rather than pointing at a guess. */
export const TIKTOK_URL = 'https://www.tiktok.com/@walkito.app';
export const INSTAGRAM_URL = 'https://www.instagram.com/walkito.app/';

/**
 * The Organization's `sameAs`: every profile that is really ours. The App Store
 * listing joins by itself the day `APP_STORE_URL` is set.
 */
/** Other profiles that are really Walkito's: the Substack publication and the
 * Strava club. Directory listings (AlternativeTo, SaaSHub) join once approved. */
// Rahim's personal newsletter: not a Walkito profile, so not in SAME_AS.
export const SUBSTACK_URL = 'https://rahimwws.substack.com';
export const STRAVA_CLUB_URL = 'https://www.strava.com/clubs/walkito';
export const YOUTUBE_URL = 'https://www.youtube.com/@walkitoapp';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/walkito-app';
export const CRUNCHBASE_URL = 'https://www.crunchbase.com/organization/walkito';

export const SAME_AS: readonly string[] = [TIKTOK_URL, INSTAGRAM_URL, APP_STORE_URL, YOUTUBE_URL, LINKEDIN_URL, CRUNCHBASE_URL, STRAVA_CLUB_URL].filter(
  (url): url is string => url != null && url !== '',
);

/**
 * IndexNow.
 *
 * Bing indexes a submitted URL in hours rather than weeks, and ChatGPT's live
 * search starts from Bing's index — which is the whole reason the brief calls
 * this the most-skipped high-leverage move on the list.
 *
 * The key is not a secret. Ownership is proved by the file of the same name
 * being reachable at the site root, so it is checked in deliberately: a key
 * held only in someone's shell history is a key nobody can re-submit with.
 */
export const INDEXNOW_KEY = 'b12b80b67ebf6ee0111493fef69eb7de';
