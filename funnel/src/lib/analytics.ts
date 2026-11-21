import type { PostHog } from 'posthog-js';

import { env } from '../config';
import { getState } from '../state';
import { accessToken, currentUser } from './account';
import { eventPair, matchOf, storeMatch, storedMatch, waitFor, type Match, type MetaEvent } from './meta-match';

/**
 * Every funnel event, declared once. Names and properties say that something
 * happened, never what she told us: no age, no focus, no safety answer, no
 * rating, and not which reaction card an answer showed her. Health data never
 * leaves the quiz for analytics.
 */
type Events = {
  funnel_landed: { source: string | null; campaign: string | null; webview: string | null };
  step_viewed: { step: string };
  /** She hid or closed the page: which screen she was on and for how many seconds. Nothing she answered. */
  screen_left: { step: string; seconds: number };
  step_completed: { step: string };
  /** The guess after "When do you notice it most?": whether she said "Yes, that's it". Never which guess it was: that follows a health answer. */
  guess_answered: { hit: boolean };
  tryit_started: Record<string, never>;
  tryit_finished: { stopped_early: boolean };
  tryit_skipped: Record<string, never>;
  plan_viewed: Record<string, never>;
  wake_time_set: Record<string, never>;
  first_step_routine_shown: Record<string, never>;
  email_submitted: Record<string, never>;
  email_code_failed: { reason: string };
  email_verified: { existing: boolean };
  email_saved: { existing: boolean };
  google_shown: Record<string, never>;
  google_failed: { reason: string };
  google_verified: { existing: boolean };
  price_viewed: Record<string, never>;
  plan_selected: { plan: string };
  consent_given: { kind: string };
  checkout_opened: { plan: string };
  checkout_closed: { plan: string };
  checkout_failed: { plan: string; code: string };
  held_back: { reason: string };
  purchase_completed: { plan: string };
  access_confirmed: { waited_s: number };
  session1_started: Record<string, never>;
  session1_completed: Record<string, never>;
  reminder_chosen: { time: string; channel: string };
  app_link_tapped: { from: string };
  account_viewed: Record<string, never>;
  cancel_viewed: Record<string, never>;
  cancel_chosen: { choice: string };
  cancel_status: { status: string; matched_by: string };
  checkout_needs_sign_in: Record<string, never>;
  /**
   * The one-time offer ($29.99 first year), shown once, only after she answers
   * "The price". Until v6 (Nov 18, 2026) it was also a gift box when she closed
   * checkout or left the price page (`checkout_closed`, `leave`), which she
   * could decline (`exit_gift_declined`): those stop on that date.
   */
  exit_gift_shown: { offer: string; trigger: 'held_back' };
  offer_checkout_opened: { offer: string };
  exit_gift_purchased: { offer: string };
  offer_closed: { offer: string };
  offer_failed: { offer: string; code: string };
  plan_email_requested: Record<string, never>;
  upgrade_shown: Record<string, never>;
  upgrade_switched: Record<string, never>;
  upgrade_declined: Record<string, never>;
  upgrade_failed: { code: string };
};

let ph: PostHog | null = null;
const queue: Array<(p: PostHog) => void> = [];

function withPostHog(run: (p: PostHog) => void): void {
  if (ph != null) run(ph);
  else queue.push(run);
}

export function startAnalytics(): void {
  if (env.posthogKey === '') return;
  void import('posthog-js').then(({ default: posthog }) => {
    posthog.init(env.posthogKey, {
      api_host: env.posthogHost,
      person_profiles: 'identified_only',
      capture_pageview: false,
      capture_pageleave: false,
      autocapture: false,
      disable_session_recording: true,
      disable_surveys: true,
      persistence: 'localStorage+cookie',
    });
    posthog.register({
      funnel: 'web-v1',
      // The quiz's order and look. Step charts split where it changes: v6 from Nov 18, 2026; v7 (two new steps, /s/39 and /s/41) after it; v8 (screen 1: buttons first, Ad 2's move, View content on the first answer).
      design: 'v8',
      app_variant: import.meta.env.DEV ? 'development' : 'web',
      // The ad she tapped (its `utm_content`), on every event from `funnel_landed` on, so a step chart splits by ad. An ad's id is not health data.
      ad: getState().utm?.utm_content ?? null,
      price_variant: getState().variant,
    });
    ph = posthog;
    for (const run of queue.splice(0)) run(posthog);
  });
}

export function track<E extends keyof Events>(event: E, ...props: Events[E] extends Record<string, never> ? [] : [Events[E]]): void {
  withPostHog((p) => p.capture(event, props[0] ?? {}));
}

// ---------------------------------------------------------------------------
// Seconds on a screen before she leaves. When the page is hidden (she closes
// the tab, goes back to Facebook, or switches app) we send the screen and the
// seconds since it was shown, as a beacon so it survives the page closing.
// If she comes back and leaves again, the later one is the real exit.
// ---------------------------------------------------------------------------

let shown: { step: string; at: number } | null = null;

export function markScreen(step: string): void {
  shown = { step, at: performance.now() };
}

let sentAt: number | null = null;

function screenLeft(): void {
  // Closing a page fires both "hidden" and "pagehide": send once per leave.
  if (shown == null || sentAt === shown.at) return;
  sentAt = shown.at;
  const seconds = Math.round((performance.now() - shown.at) / 100) / 10;
  const props = { step: shown.step, seconds };
  withPostHog((p) => p.capture('screen_left', props, { transport: 'sendBeacon' }));
}

if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') screenLeft();
    else sentAt = null;
  });
  addEventListener('pagehide', screenLeft);
}

/** The Supabase user id, which is also the RevenueCat app user id, as the app does. With her email, Meta's pixel gets the two hashes it may match her by. */
export function identify(userId: string, email?: string): void {
  withPostHog((p) => p.identify(userId, email != null ? { email } : undefined));
  if (email != null) void matchPixel(userId, email);
}

// ---------------------------------------------------------------------------
// Meta: Pixel in the browser and the same event through our own server, with
// one event id so Meta counts it once. Four events only. Once she has given
// her email (the email step, never before), both also carry two SHA-256
// hashes Meta may match her by: her email and our account id. The pixel is
// handed the hashes, never the address; the server finds both from her token
// and hashes them itself. No answer, nothing about her feet. Nothing loads
// without a pixel id.
// ---------------------------------------------------------------------------

type Fbq = ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown; disablePushState?: boolean };

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

function cookie(name: string): string | undefined {
  return document.cookie
    .split('; ')
    .find((c) => c.startsWith(name + '='))
    ?.slice(name.length + 1);
}

/** fbc from the ad click, kept for 90 days as Meta's own pixel would. */
function rememberClick(): void {
  const fbclid = new URLSearchParams(location.search).get('fbclid');
  if (fbclid == null || cookie('_fbc') != null) return;
  const value = `fb.1.${Date.now()}.${fbclid}`;
  document.cookie = `_fbc=${value}; max-age=${90 * 86400}; path=/; samesite=lax; secure`;
}

/** The two hashes the pixel holds, once she has given her email. */
let matched: Match | null = null;

export function startPixel(): void {
  if (env.pixelId === '') return;
  rememberClick();
  const n: Fbq = function (...args: unknown[]) {
    if (n.callMethod != null) (n.callMethod as (...a: unknown[]) => void)(...args);
    else n.queue!.push(args);
  } as Fbq;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];
  // The pixel sends a PageView of its own on every step of the quiz (each is
  // a history entry), with no event id for the server's copy to pair with.
  n.disablePushState = true;
  window.fbq = n;
  window._fbq = n;
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);
  // No automatic button and form scraping: the quiz is health-adjacent.
  window.fbq('set', 'autoConfig', false, env.pixelId);
  // She gave her email on an earlier visit: the pixel starts with her two hashes.
  matched = storedMatch();
  if (matched != null) window.fbq('init', env.pixelId, matched);
  else window.fbq('init', env.pixelId);
  // An email given before the hashes were kept: they are made from her account now.
  const email = getState().verified === true ? getState().email : undefined;
  if (matched == null && email != null) {
    void currentUser()
      .then((user) => (user != null ? matchPixel(user.id, email) : undefined))
      .catch(() => undefined);
  }
}

/**
 * Her email and our account id, hashed here with SubtleCrypto, kept for the
 * next visit and handed to the pixel. A second `init` for the same pixel is
 * how it takes them part-way through a visit. From then on the server's copy
 * of each event goes with her token (`meta`), and carries the same two.
 */
async function matchPixel(userId: string, email: string): Promise<void> {
  const match = await matchOf(userId, email);
  if (match == null) return;
  storeMatch(match);
  if (env.pixelId === '' || window.fbq == null) return;
  if (matched?.em === match.em && matched.external_id === match.external_id) return;
  matched = match;
  window.fbq('init', env.pixelId, match);
}

/** Her own token, for `meta-capi` to look her up by. Only once the pixel has her hashes too. */
async function tokenForServer(): Promise<string | null> {
  if (matched == null) return null;
  return accessToken().catch(() => null);
}

/** The pixel's `_fbp` cookie is there, or 2 s have passed without it (a blocked pixel). One wait a page load. */
let browserIdReady: Promise<void> | null = null;

export function meta(event: MetaEvent, eventId: string, value?: { value: number; currency: string }): void {
  if (env.pixelId === '' || window.fbq == null) return;
  // The page as it is now: the server's copy may leave a moment later.
  const pair = eventPair(event, eventId, location.origin + location.pathname, value);
  window.fbq(...pair.pixel);
  if (event === 'Purchase' || env.supabaseUrl === '') return;
  browserIdReady ??= waitFor(() => cookie('_fbp') != null, 2000);
  void Promise.all([tokenForServer(), browserIdReady]).then(([token]) =>
    fetch(`${env.supabaseUrl}/functions/v1/meta-capi`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', apikey: env.supabaseAnonKey, ...(token != null ? { authorization: `Bearer ${token}` } : {}) },
      body: JSON.stringify({ ...pair.server, fbp: cookie('_fbp'), fbc: cookie('_fbc') }),
      keepalive: true,
    }).catch(() => undefined),
  );
}

/** In-app browsers, for analytics and for the "open in Safari" fallback. */
export function webview(): string | null {
  const ua = navigator.userAgent;
  if (/FBAN|FBAV|FB_IAB/.test(ua)) return 'facebook';
  if (/Instagram/.test(ua)) return 'instagram';
  if (/TikTok|musical_ly/.test(ua)) return 'tiktok';
  return null;
}
