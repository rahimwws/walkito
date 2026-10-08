import { setPerson } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';
import { supabase } from '@/shared/lib/supabase';

/**
 * Access granted by account rather than bought: the store review demo account,
 * the founders' (`supabase/migrations/0013_comp_access.sql`), and whoever typed
 * an access code on the paywall (`0016_access_codes.sql`).
 *
 * An access code is used on the paywall, before any sign-in, so the account it
 * unlocks is usually the anonymous one. That account is read like any other.
 * Setup after the unlock offers to save it to Apple or Google, which is what
 * keeps the access on a new phone.
 *
 * A purchase belongs to RevenueCat's customer, which is the phone, so a grant
 * made there reaches one device. This one follows the account: read after
 * every sign-in and at launch, cached so the gate is right on the first frame
 * of the next launch, and cleared when the session is gone.
 *
 * `entitled()` is the purchase or this (`store.ts`). Nothing is charged and
 * nothing is recorded as a purchase.
 */

const KEY = 'purchase/comp-until';
/** The `comp_access.reason`s that are us rather than customers. */
const INTERNAL = new Set(['founder', 'store review']);
/** Stored for a grant with no end. */
const FOREVER = 0;

function read(): number | null {
  const value = kv.getNumber(KEY);
  return typeof value === 'number' ? value : null;
}

let until: number | null = read();
const listeners = new Set<() => void>();

/**
 * Development only: "bought" on a simulator, where StoreKit has no purchase
 * flow, so the screens after the first purchase can be walked through. Kept
 * on disk so a reload does not drop back to the paywall. Never read in a
 * release build.
 */
const DEV_KEY = 'purchase/dev-granted';
let devGranted = __DEV__ && kv.getBoolean(DEV_KEY) === true;

export function grantDevAccess(): void {
  if (!__DEV__ || devGranted) return;
  devGranted = true;
  kv.set(DEV_KEY, true);
  for (const listener of listeners) listener();
}

export function compAccess(now: number = Date.now()): boolean {
  if (devGranted) return true;
  return until != null && (until === FOREVER || until > now);
}

export function subscribeComp(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function set(next: number | null): void {
  if (next === until) return;
  const before = compAccess();
  until = next;
  if (next == null) kv.remove(KEY);
  else kv.set(KEY, next);
  if (compAccess() !== before) for (const listener of listeners) listener();
}

/** Asks the server for this account's grant. A failed read keeps the cache. */
export async function refreshCompAccess(): Promise<void> {
  const client = supabase;
  if (client == null) return;
  try {
    const { data: session } = await client.auth.getSession();
    const user = session.session?.user;
    if (user == null) {
      set(null);
      return;
    }
    const { data, error } = await client.from('comp_access').select('until, reason').eq('user_id', user.id).maybeSingle();
    if (error != null) return;
    // A founder or the store reviewer is not a customer: PostHog's test-account
    // filter drops people marked `is_internal`, whatever build they run. Someone
    // given an access code is a real user and stays in the numbers.
    if (user.is_anonymous !== true) setPerson({ is_internal: data != null && INTERNAL.has(String(data.reason)) });
    if (data == null) set(null);
    else set(data.until == null ? FOREVER : Date.parse(data.until as string));
  } catch {
    // Offline: the cached answer stands.
  }
}

let started = false;

/** At launch, once: read now, and again whenever the account changes. */
export function startCompAccess(): void {
  if (started) return;
  started = true;
  void refreshCompAccess();
  supabase?.auth.onAuthStateChange((event) => {
    // Deferred: supabase-js holds its auth lock while this callback runs, and
    // a session read from inside it waits on that lock forever.
    if (event === 'SIGNED_IN' || event === 'SIGNED_OUT' || event === 'USER_UPDATED') {
      setTimeout(() => void refreshCompAccess(), 0);
    }
  });
}
