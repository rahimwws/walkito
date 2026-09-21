import { useSyncExternalStore } from 'react';

import { hasBackend, supabase } from '@/shared/lib/supabase';

import { signInWithApple } from './apple-auth';

/**
 * Who the app is signed in as.
 *
 * Three states, and the middle one is the app's normal condition: everybody has
 * an identity from first launch, but almost nobody has *claimed* it. Anonymous
 * is not signed-out — it owns the referral code and the push token — it simply
 * cannot be recovered on another device.
 */
export type AuthState =
  | { status: 'unavailable' }
  | { status: 'anonymous' }
  | { status: 'signed-in'; email: string | null; provider: 'apple' | 'email' };

export type AuthResult =
  | { status: 'ok' }
  | { status: 'cancelled' }
  | { status: 'unavailable' }
  | { status: 'failed'; message: string };

let state: AuthState = hasBackend ? { status: 'anonymous' } : { status: 'unavailable' };
const listeners = new Set<() => void>();

function publish(next: AuthState): void {
  state = next;
  listeners.forEach((fire) => fire());
}

/** Reads the session and works out which of the three states it is. */
function readState(user: { email?: string | null; app_metadata?: { provider?: string } } | null): AuthState {
  if (!hasBackend) return { status: 'unavailable' };
  if (user == null) return { status: 'anonymous' };
  const provider = user.app_metadata?.provider;
  // An anonymous user's provider is literally `anonymous`; anything else means
  // somebody claimed the account.
  if (provider == null || provider === 'anonymous') return { status: 'anonymous' };
  return { status: 'signed-in', email: user.email ?? null, provider: provider === 'apple' ? 'apple' : 'email' };
}

/**
 * Track the session for the life of the app.
 *
 * Called once from the root. `onAuthStateChange` fires for the restore on
 * launch as well as for every later sign-in, so there is no separate initial
 * read to keep in step with it.
 */
export function startAuth(): () => void {
  const client = supabase;
  if (client == null) return () => {};
  const { data } = client.auth.onAuthStateChange((_event, session) => {
    publish(readState(session?.user ?? null));
  });
  return () => data.subscription.unsubscribe();
}

export function authState(): AuthState {
  return state;
}

export function useAuth(): AuthState {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    authState,
    authState,
  );
}

function fail(error: { message?: string } | null, fallback: string): AuthResult {
  return { status: 'failed', message: error?.message ?? fallback };
}

/**
 * Claim this device's anonymous account with an email and password.
 *
 * `updateUser` rather than `signUp`, and that is the whole point of doing it
 * this way: it converts the account **in place**, so the user id does not
 * change and the referral code, the redemption and the push token all stay
 * attached to it. `signUp` would mint a second account and strand the first —
 * a code the user may already have given to a friend, pointing at a row nobody
 * can reach.
 *
 * Supabase requires manual linking to be enabled on the project for this, and
 * will send a confirmation mail if the project asks for one. Both are dashboard
 * settings rather than anything the client can arrange.
 */
export async function claimWithEmail(email: string, password: string): Promise<AuthResult> {
  const client = supabase;
  if (client == null) return { status: 'unavailable' };

  const { data, error } = await client.auth.updateUser({ email, password });
  if (error != null) return fail(error, 'That didn’t work. Check the address and try again.');
  publish(readState(data.user));
  return { status: 'ok' };
}

/** Sign in to an account claimed on another device. */
export async function signInWithEmail(email: string, password: string): Promise<AuthResult> {
  const client = supabase;
  if (client == null) return { status: 'unavailable' };

  const { data, error } = await client.auth.signInWithPassword({ email, password });
  if (error != null) return fail(error, 'Wrong email or password.');
  publish(readState(data.user));
  return { status: 'ok' };
}

export async function sendPasswordReset(email: string): Promise<AuthResult> {
  const client = supabase;
  if (client == null) return { status: 'unavailable' };
  const { error } = await client.auth.resetPasswordForEmail(email);
  if (error != null) return fail(error, 'Could not send the reset email.');
  return { status: 'ok' };
}

/**
 * Sign in with Apple, for real this time.
 *
 * The identity token goes to Supabase, which verifies Apple's signature and
 * issues a session. Before this the button collected a credential, kept the
 * name for a greeting and dropped the token on the floor — nothing was signed
 * in, and the app was asking Apple for an email it never used.
 *
 * **This replaces the session rather than converting it.** `signInWithIdToken`
 * has no in-place variant, so the anonymous account this device had is left
 * behind along with any referral code on it. Accepted rather than hidden: the
 * alternative is a server-side transfer with a one-time token, which is real
 * machinery for a case — a shared code, then an Apple sign-in, then a
 * redemption — that has not happened yet. `claimWithEmail` does keep the
 * account, which is the path the app offers first.
 */
export async function signInWithAppleToSupabase(): Promise<
  AuthResult & { fullName?: string | null }
> {
  const client = supabase;
  if (client == null) return { status: 'unavailable' };

  const credential = await signInWithApple();
  if (credential.status === 'cancelled') return { status: 'cancelled' };
  if (credential.status === 'unavailable') return { status: 'unavailable' };
  if (credential.status === 'failed') {
    return { status: 'failed', message: 'Apple could not sign you in.' };
  }

  const { data, error } = await client.auth.signInWithIdToken({
    provider: 'apple',
    token: credential.identityToken,
  });
  if (error != null) return fail(error, 'Apple signed you in, but we could not.');

  publish(readState(data.user));
  // Apple returns the name only on the very first authorisation, so it is
  // handed back for the caller to persist rather than asked for again.
  return { status: 'ok', fullName: credential.fullName };
}

/**
 * Sign out, and take the anonymous account with it.
 *
 * A signed-out app is not a blank one: the programme, the pain log and the
 * streak live in local storage and are none of the server's business. What goes
 * is the session. The next call that needs an identity mints a fresh anonymous
 * one, exactly as a first launch would.
 */
export async function signOut(): Promise<AuthResult> {
  const client = supabase;
  if (client == null) return { status: 'unavailable' };
  const { error } = await client.auth.signOut();
  if (error != null) return fail(error, 'Could not sign out.');
  publish({ status: 'anonymous' });
  return { status: 'ok' };
}
