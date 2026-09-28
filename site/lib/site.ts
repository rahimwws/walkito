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

/**
 * The programme's own numbers, read out of the app rather than retyped.
 *
 * `BLOCKS_12_WEEK` is `buildBlocks(6)` and `BLOCK_LENGTH` is 14, so the plan is
 * 84 days. Session minutes come from `MINUTES_BY_KIND` (3–7) and the
 * maintenance day (8). Retests are `RETEST_TESTS` and `RETEST_MINUTES`.
 *
 * Verified against `src/entities/program/model/` on 20 September 2026. If the
 * plan changes, these are wrong and nothing will fail to say so — the app and
 * this site are separate builds. Checking them is part of changing the plan.
 */
export const PROGRAM = {
  weeks: 12,
  days: 84,
  blocks: 6,
  blockDays: 14,
  sessionMinutesMin: 3,
  sessionMinutesMax: 8,
  retestTests: 3,
  retestMinutes: 4,
} as const;

/** Where the App Store listing will live. Null until it exists — a button
 * pointing at a guessed URL is worse than one that scrolls.
 *
 * The app's Apple ID is 6813076846 (`ascAppId` in `eas.json`), so once the
 * listing is public this becomes `https://apps.apple.com/app/id6813076846`.
 * `apps.apple.com` 404s on it until then. */
export const APP_STORE_URL: string | null = null;

/**
 * The provider token from App Store Connect → App Analytics → Campaigns.
 *
 * This is how the site counts conversions without a tracker. A link carrying
 * `pt` and `ct` shows up in App Analytics as a campaign, with impressions,
 * downloads and proceeds per `ct` — so each button on the site names itself and
 * the store reports which page sent the install. No cookie, no SDK, and the
 * privacy page stays true as written.
 */
export const APP_STORE_PROVIDER_TOKEN: string | null = null;

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

/** The numeric id for the iOS Smart App Banner, once there is a listing. */
export const APPLE_APP_ID: string | null = null;

export const SUPPORT_EMAIL = 'hello@walkito.site';

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
