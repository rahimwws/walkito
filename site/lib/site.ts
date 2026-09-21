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
 * pointing at a guessed URL is worse than one that scrolls. */
export const APP_STORE_URL: string | null = null;

/** The numeric id for the iOS Smart App Banner, once there is a listing. */
export const APPLE_APP_ID: string | null = null;

export const SUPPORT_EMAIL = 'hello@walkito.app';

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
export const INDEXNOW_KEY = '';
