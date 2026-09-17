import 'react-native-url-polyfill/auto';

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

import { kv } from '@/shared/lib/storage';

/**
 * The backend, or nothing at all.
 *
 * Read from `EXPO_PUBLIC_*` rather than a config file so a build without a
 * project simply has no backend, instead of shipping someone else's. Both are
 * inlined at build time; the anon key is public by design and is safe in a
 * bundle, which is exactly why every write in `0001_referrals.sql` goes through
 * a `security definer` function rather than a table policy.
 */
const URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Supabase's session store, backed by the app's own.
 *
 * Its interface is async and MMKV is synchronous, so the values are simply
 * wrapped — there is nothing to await, and pretending otherwise would add a
 * tick to every auth call for no benefit.
 */
const storage = {
  getItem: async (key: string) => kv.getString(key) ?? null,
  setItem: async (key: string, value: string) => {
    kv.set(key, value);
  },
  removeItem: async (key: string) => {
    kv.remove(key);
  },
};

/**
 * The client, or null where the project was never configured.
 *
 * Null rather than a stub that throws, for the reason `purchase.ts` gives about
 * its own seam: a feature with no backend should be absent, not broken. Every
 * caller in `entities/referral` checks for it and reports `unavailable`, and
 * the screens treat that as "this build has no invites" rather than as an
 * error the user caused.
 */
export const supabase: SupabaseClient | null =
  URL != null && URL.length > 0 && ANON_KEY != null && ANON_KEY.length > 0
    ? createClient(URL, ANON_KEY, {
        auth: {
          storage,
          // The session has to survive a cold start: the user's code and their
          // redemption are attached to it, and a new identity on every launch
          // would hand them a new code every launch.
          persistSession: true,
          autoRefreshToken: true,
          // No deep-link auth callbacks in this app; nothing to parse.
          detectSessionInUrl: false,
        },
      })
    : null;

/** Whether this build has a backend at all. */
export const hasBackend = supabase != null;

/**
 * Signs in anonymously, once, and hands back the user id.
 *
 * Anonymous rather than email or social, because an invite code is not worth an
 * account — but it still needs a stable identity the server can trust, which is
 * the one thing a device-generated id cannot give. Requires anonymous sign-ins
 * to be enabled on the project.
 *
 * The promise is cached rather than the result: two screens asking at once
 * should produce one sign-in, not two identities racing to be stored.
 */
let signingIn: Promise<string | null> | null = null;

export function currentUserId(): Promise<string | null> {
  if (supabase == null) return Promise.resolve(null);
  if (signingIn != null) return signingIn;

  signingIn = (async () => {
    const client = supabase;
    if (client == null) return null;

    const { data } = await client.auth.getSession();
    if (data.session?.user.id != null) return data.session.user.id;

    const { data: created, error } = await client.auth.signInAnonymously();
    if (error != null) {
      console.warn('[supabase] anonymous sign-in failed', error.message);
      // Cleared so the next caller retries rather than inheriting one bad
      // network moment for the lifetime of the process.
      signingIn = null;
      return null;
    }
    return created.user?.id ?? null;
  })();

  return signingIn;
}
