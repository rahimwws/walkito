import { kv } from '@/shared/lib/storage';
import { supabase } from '@/shared/lib/supabase';

/**
 * Access granted by account rather than bought: the store review demo account
 * and the founders' (`supabase/migrations/0013_comp_access.sql`).
 *
 * A purchase belongs to RevenueCat's customer, which is the phone, so a grant
 * made there reaches one device. This one follows the account: read after
 * every sign-in and at launch, cached so the gate is right on the first frame
 * of the next launch, and cleared when the session is anonymous or gone.
 *
 * `entitled()` is the purchase or this (`store.ts`). Nothing is charged and
 * nothing is recorded as a purchase.
 */

const KEY = 'purchase/comp-until';
/** Stored for a grant with no end. */
const FOREVER = 0;

function read(): number | null {
  const value = kv.getNumber(KEY);
  return typeof value === 'number' ? value : null;
}

let until: number | null = read();
const listeners = new Set<() => void>();

export function compAccess(now: number = Date.now()): boolean {
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
    if (user == null || user.is_anonymous === true) {
      set(null);
      return;
    }
    const { data, error } = await client.from('comp_access').select('until').eq('user_id', user.id).maybeSingle();
    if (error != null) return;
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
