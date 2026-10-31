import { useSyncExternalStore } from 'react';
import { AppState } from 'react-native';

import { track } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';
import { supabase } from '@/shared/lib/supabase';

import { grantDevAccess, revokeDevAccess } from './comp';

/**
 * The 3-month pass, as the server counts it.
 *
 * A pass is one payment for 90 days, sold through RevenueCat but attached to no
 * entitlement on purpose: RevenueCat would hold a one-time product as owned for
 * ever. So the days are counted on our server, by the `revenuecat-webhook`
 * function at the purchase and by `pass-sync` when the app asks
 * (`supabase/migrations/0017_three_month_pass.sql`), and written on the
 * account's `profiles` row, which only the server may write. This file reads
 * them back:
 *
 *   access = the store's own access OR pass_starts_at <= now < pass_expires_at
 *
 * A pass bought while something else still runs starts when that ends, so
 * `startsAt` can be in the future: the days are queued, not lost.
 *
 * The same pattern as `comp.ts`: read at launch, after every sign-in and on
 * every return to the foreground, cached on the device so the gate is right on
 * the first frame of the next launch, and cleared when the account signs out.
 * A failed read keeps the cache: a train is not evidence that a pass ended.
 * Between a purchase and the server's answer the store's own record dates the
 * pass (`passEnd` in `access.ts`), so access never waits on this.
 *
 * It also carries the two facts the cancel flow's budget offer is decided by
 * (the last pass bought, the last retention price used) and `review_mode`,
 * which the server sets on the App Review account so the offers made only to
 * subscribers can be found by somebody who holds no subscription.
 */

/** The server's pass, for this account, in epoch ms. Every field can be null. */
export type PassWindow = {
  /** When the days begin: the purchase, or the end of whatever was running
   * when it was bought (a subscription, an earlier pass). */
  readonly startsAt: number | null;
  /** When the days end. */
  readonly expiresAt: number | null;
  /** The latest pass purchase. */
  readonly boughtAt: number | null;
  /** When the retention price (the cancel flow's budget offer) was last used. */
  readonly retentionOfferUsedAt: number | null;
};

type PassState = PassWindow & {
  /** The App Review account: the offers for subscribers are always shown. */
  readonly reviewMode: boolean;
};

const KEY = 'purchase/pass-window';
/** The `expiresAt` already reported as `pass_expired`, so each window is reported once. */
const EXPIRED_SEEN_KEY = 'purchase/pass-expired-seen';
/** Development only: review mode switched on locally (`?previewReviewMode`). */
const DEV_REVIEW_KEY = 'dev/review-mode';
/** Development only: a pretend pass, from buying a sample pass plan. */
const DEV_PASS_KEY = 'dev/pass-window';

const DAY_MS = 24 * 60 * 60 * 1000;
/** A pass is 90 days, as the server grants it. */
const PASS_DAYS = 90;
/** How often the server is asked while a purchase waits for its days. */
const POLL_MS = 1500;
/** The longest a timer can wait: setTimeout's 32-bit limit, about 24.8 days. */
const MAX_TIMER_MS = 2 ** 31 - 1;

const EMPTY: PassState = {
  startsAt: null,
  expiresAt: null,
  boughtAt: null,
  retentionOfferUsedAt: null,
  reviewMode: false,
};

/** A timestamp as the server writes it (ISO 8601) or as it is cached (ms). */
function stamp(value: unknown): number | null {
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;
  if (typeof value !== 'string' || value === '') return null;
  const ms = Date.parse(value);
  return Number.isFinite(ms) ? ms : null;
}

function parse(raw: string | undefined): Record<string, unknown> | null {
  if (raw == null) return null;
  try {
    const value: unknown = JSON.parse(raw);
    return typeof value === 'object' && value != null ? (value as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

function readCache(): PassState {
  const saved = parse(kv.getString(KEY));
  if (saved == null) return EMPTY;
  return {
    startsAt: stamp(saved.startsAt),
    expiresAt: stamp(saved.expiresAt),
    boughtAt: stamp(saved.boughtAt),
    retentionOfferUsedAt: stamp(saved.retentionOfferUsedAt),
    reviewMode: saved.reviewMode === true,
  };
}

/** Development only: the pretend pass, if one was bought with sample prices. */
function readDevPass(): { startsAt: number; expiresAt: number } | null {
  if (!__DEV__) return null;
  const saved = parse(kv.getString(DEV_PASS_KEY));
  const startsAt = stamp(saved?.startsAt);
  const expiresAt = stamp(saved?.expiresAt);
  return startsAt != null && expiresAt != null ? { startsAt, expiresAt } : null;
}

/** What the server last said. */
let server: PassState = readCache();
let devPass = readDevPass();
/** Development only: the pretend pass is a preview (`devPreviewPass`) and
 * stands over the server's window even when that one ends later. */
let devForced = false;
let devReview = __DEV__ && kv.getBoolean(DEV_REVIEW_KEY) === true;

/** The server's answer with the development overrides on top: what every
 * reader sees. One object until something changes, so a hook re-renders only
 * on a real change. */
function merge(): PassState {
  if (!__DEV__) return server;
  let next = server;
  if (devPass != null && (devForced || devPass.expiresAt > (server.expiresAt ?? 0))) {
    next = {
      ...next,
      startsAt: devPass.startsAt,
      expiresAt: devPass.expiresAt,
      boughtAt: Math.max(devPass.startsAt, server.boughtAt ?? 0),
    };
  }
  if (devReview && !next.reviewMode) next = { ...next, reviewMode: true };
  return next;
}

let snapshot: PassState = merge();
const listeners = new Set<() => void>();
/** `passAccess()` as the readers were last told it, so a return to the app
 * tells them only when it has changed. */
let emittedAccess = passAccess();

function emit(): void {
  emittedAccess = passAccess();
  for (const listener of listeners) listener();
}

export function subscribePass(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** The pass window, right now. */
export function passWindow(): PassWindow {
  return snapshot;
}

/** Whether a pass opens the app at `now`: started, and not yet over. */
export function passAccess(now: number = Date.now()): boolean {
  const { startsAt, expiresAt } = snapshot;
  return startsAt != null && expiresAt != null && startsAt <= now && now < expiresAt;
}

/** Whether a pass was ever bought on this account, running or not: with
 * nothing running, the difference between the expiry screen and the paywall. */
export function passEverBought(): boolean {
  return snapshot.boughtAt != null || snapshot.expiresAt != null;
}

/** When the server's pass ends, or null with none. */
export function passServerEnd(): Date | null {
  return snapshot.expiresAt != null ? new Date(snapshot.expiresAt) : null;
}

/** Whether this is the App Review account (`profiles.review_mode`). */
export function reviewMode(): boolean {
  return snapshot.reviewMode;
}

export function usePassWindow(): PassWindow {
  return useSyncExternalStore(subscribePass, passWindow, () => EMPTY);
}

export function useReviewMode(): boolean {
  return useSyncExternalStore(subscribePass, reviewMode, () => false);
}

function same(a: PassState, b: PassState): boolean {
  return (
    a.startsAt === b.startsAt &&
    a.expiresAt === b.expiresAt &&
    a.boughtAt === b.boughtAt &&
    a.retentionOfferUsedAt === b.retentionOfferUsedAt &&
    a.reviewMode === b.reviewMode
  );
}

/** Takes the server's answer: cached, timers moved, readers told. */
function store(next: PassState): void {
  if (same(next, server)) return;
  server = next;
  if (same(next, EMPTY)) kv.remove(KEY);
  else kv.set(KEY, JSON.stringify(next));
  changed();
}

function changed(): void {
  const next = merge();
  if (!same(next, snapshot)) snapshot = next;
  scheduleBoundary();
  noteEnded();
  emit();
}

let boundary: ReturnType<typeof setTimeout> | null = null;

/**
 * Tells the readers when the window starts or ends with the app open, so
 * access arrives (or goes) at that moment rather than at the next launch.
 * Timers do not run in the background; coming back to the front re-reads.
 */
function scheduleBoundary(now: number = Date.now()): void {
  if (boundary != null) clearTimeout(boundary);
  boundary = null;
  const { startsAt, expiresAt } = snapshot;
  const next = startsAt != null && startsAt > now ? startsAt : expiresAt != null && expiresAt > now ? expiresAt : null;
  if (next == null || next - now > MAX_TIMER_MS) return;
  boundary = setTimeout(() => {
    boundary = null;
    noteEnded();
    emit();
    scheduleBoundary();
  }, next - now + 50);
}

/** `pass_expired`, once for each window seen to have ended. */
function noteEnded(now: number = Date.now()): void {
  const end = snapshot.expiresAt;
  if (end == null || end > now) return;
  if (kv.getNumber(EXPIRED_SEEN_KEY) === end) return;
  kv.set(EXPIRED_SEEN_KEY, end);
  track('pass_expired');
}

/** A `profiles` row's five columns (null: the account has no row yet). */
function fromRow(row: Record<string, unknown> | null): PassState {
  if (row == null) return EMPTY;
  return {
    startsAt: stamp(row.pass_starts_at),
    expiresAt: stamp(row.pass_expires_at),
    boughtAt: stamp(row.pass_bought_at),
    retentionOfferUsedAt: stamp(row.retention_offer_used_at),
    reviewMode: row.review_mode === true,
  };
}

/** `pass-sync`'s answer. */
function fromAnswer(answer: Record<string, unknown>): PassState {
  return {
    startsAt: stamp(answer.passStartsAt),
    expiresAt: stamp(answer.passExpiresAt),
    boughtAt: stamp(answer.passBoughtAt),
    retentionOfferUsedAt: stamp(answer.retentionOfferUsedAt),
    reviewMode: answer.reviewMode === true,
  };
}

/**
 * Reads this account's pass from its `profiles` row. With no session (a
 * launch offline, before the token has refreshed) the cache stands; signing
 * out clears it (`startPass`). An error keeps the cache too.
 *
 * Resolves true once the row was read (an account with no row yet included),
 * which tells the readers if the window changed; false with no session or on
 * any error, when what `passWindow()` holds is the last answer, not this one.
 * Never rejects.
 */
export async function refreshPass(): Promise<boolean> {
  const client = supabase;
  if (client == null) return false;
  try {
    const { data: session } = await client.auth.getSession();
    const user = session.session?.user;
    if (user == null) return false;
    const { data, error } = await client
      .from('profiles')
      .select('pass_starts_at, pass_expires_at, pass_bought_at, retention_offer_used_at, review_mode')
      .eq('user_id', user.id)
      .maybeSingle();
    if (error != null) return false;
    store(fromRow(data as Record<string, unknown> | null));
    return true;
  } catch {
    // Offline: the cached answer stands.
    return false;
  }
}

/**
 * Asks the server to grant any pass this account bought that it has not
 * granted yet, and stores the window it answers with. After a purchase (the
 * webhook may not have landed), after Restore Purchases, and after signing in
 * on another phone. `rcAppUserId` is RevenueCat's id for this phone, which the
 * server links to the account before it looks; it only ever grants what
 * RevenueCat's own record holds.
 *
 * Resolves to the window, or null when the server could not be asked (no
 * session, offline, an error), which leaves the cache as it was.
 */
export async function syncPassFromServer(rcAppUserId?: string | null): Promise<PassWindow | null> {
  const client = supabase;
  if (client == null) return null;
  try {
    const { data: session } = await client.auth.getSession();
    if (session.session == null) return null;
    const { data, error } = await client.functions.invoke('pass-sync', {
      body: rcAppUserId != null && rcAppUserId !== '' ? { rcAppUserId } : {},
    });
    if (error != null || data == null) return null;
    const answer = (typeof data === 'string' ? parse(data) : data) as Record<string, unknown> | null;
    if (answer == null || answer.ok !== true) return null;
    store(fromAnswer(answer));
    return passWindow();
  } catch {
    return null;
  }
}

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Waits for a pass just bought to reach the account: asks `pass-sync` every
 * ~1.5 s until the window ends later than `previousExpiresAt` (the end before
 * the purchase, null with no pass before), for `timeoutMs` at most.
 *
 * Resolves to the new window, or null on the timeout. A timeout is not a
 * failure: the store's own record already opens the app (`passEnd`), and the
 * next refresh (a launch, a return to the app) catches the server up.
 */
export async function awaitPassGrant(
  previousExpiresAt: number | null,
  timeoutMs: number = 10_000,
  rcAppUserId?: string | null,
): Promise<PassWindow | null> {
  const moved = () => {
    const end = snapshot.expiresAt;
    return end != null && (previousExpiresAt == null || end > previousExpiresAt);
  };
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    if (moved()) return passWindow();
    const left = deadline - Date.now();
    if (left <= 0) return null;
    // A request slower than what is left is not waited for past the deadline.
    await Promise.race([syncPassFromServer(rcAppUserId), wait(left)]);
    if (moved()) return passWindow();
    const after = deadline - Date.now();
    if (after <= 0) return null;
    await wait(Math.min(POLL_MS, after));
  }
}

let started = false;

/**
 * At launch, once (beside `startCompAccess`): read now, after every sign-in,
 * sign-out and change of account, and on every return to the foreground.
 */
export function startPass(): void {
  if (started) return;
  started = true;
  scheduleBoundary();
  noteEnded();
  void refreshPass();
  supabase?.auth.onAuthStateChange((event) => {
    // Deferred: supabase-js holds its auth lock while this callback runs, and
    // a session read from inside it waits on that lock forever.
    if (event === 'SIGNED_OUT') setTimeout(() => store(EMPTY), 0);
    else if (event === 'SIGNED_IN' || event === 'USER_UPDATED') setTimeout(() => void refreshPass(), 0);
  });
  AppState.addEventListener('change', (next) => {
    if (next !== 'active') return;
    // A start or an end that passed while the app was away. The readers are
    // told only if that changed access: every listener (the gate, the expiry
    // reminder) runs on each emit, and most returns change nothing. A new
    // window from the server is told by `refreshPass` itself.
    scheduleBoundary();
    noteEnded();
    if (passAccess() !== emittedAccess) emit();
    void refreshPass();
  });
}

/**
 * Development only (`?previewReviewMode`, `=off`): review mode on this phone,
 * as the server sets it on the App Review account. Never read in a release
 * build.
 */
export function devSetReviewMode(on: boolean): void {
  if (!__DEV__) return;
  devReview = on;
  if (on) kv.set(DEV_REVIEW_KEY, true);
  else kv.remove(DEV_REVIEW_KEY);
  changed();
}

/**
 * Development only: a pass "bought" with sample prices (`?samplePrices`),
 * 90 days from now or from the end of the pass running, as the server would
 * grant it. No store and no server are reached.
 */
export function devGrantPass(now: number = Date.now()): void {
  if (!__DEV__) return;
  const startsAt = Math.max(now, snapshot.expiresAt ?? 0);
  devPass = { startsAt: passAccess(now) ? (snapshot.startsAt ?? now) : startsAt, expiresAt: startsAt + PASS_DAYS * DAY_MS };
  kv.set(DEV_PASS_KEY, JSON.stringify(devPass));
  changed();
}

/**
 * Development only (`?previewPass=ending|ended|off`): a pretend pass that ends
 * in five days (Home's card), one that ended yesterday (the expiry screen), or
 * none. The first two take the pretend purchase away, as the pass is then the
 * only access (it would outlast the pass and hide the card); `off` gives it
 * back. The pretend window stands over the server's, whatever that holds.
 */
export function devPreviewPass(stage: 'ending' | 'ended' | 'off', now: number = Date.now()): void {
  if (!__DEV__) return;
  if (stage === 'off') {
    devPass = null;
    devForced = false;
    kv.remove(DEV_PASS_KEY);
    grantDevAccess();
  } else {
    const expiresAt = stage === 'ending' ? now + 5 * DAY_MS : now - DAY_MS;
    devPass = { startsAt: expiresAt - PASS_DAYS * DAY_MS, expiresAt };
    devForced = true;
    kv.set(DEV_PASS_KEY, JSON.stringify(devPass));
    revokeDevAccess();
  }
  changed();
}
