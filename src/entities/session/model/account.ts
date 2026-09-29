import { forgetIdentity, supabase } from '@/shared/lib/supabase';

/**
 * The Supabase account for a provider's identity token — Apple on iOS, Google
 * on Android: linked to the anonymous user when there is one, signed in to
 * directly otherwise. A build with no backend has no account to make and
 * succeeds with none.
 *
 * Linking keeps the user id, and every row already sent under it. When the
 * identity already has an account (a reinstall, a second phone), or manual
 * linking is off on the project, linking is refused and the device signs in to
 * that account instead; the plan is local-first and goes up under the new id
 * on the next push.
 */
export async function accountFor(
  provider: 'apple' | 'google',
  token: string | null,
): Promise<{ userId: string | null; error: unknown }> {
  const client = supabase;
  if (client == null) return { userId: null, error: null };
  if (token == null) return { userId: null, error: new Error(`${provider} returned no identity token`) };

  const { data: current } = await client.auth.getSession();
  if (current.session?.user.is_anonymous === true) {
    const linked = await client.auth.linkIdentity({ provider, token });
    if (linked.error == null) {
      forgetIdentity();
      return { userId: linked.data.user?.id ?? current.session.user.id, error: null };
    }
  }

  const { data, error } = await client.auth.signInWithIdToken({ provider, token });
  if (error != null) {
    if (__DEV__) console.warn(`[auth] ${provider} sign-in to Supabase failed: code=${error.code ?? 'none'} ${error.message}`);
    return { userId: null, error };
  }
  // A different user than the cached anonymous one — see `forgetIdentity`.
  forgetIdentity();
  return { userId: data.user?.id ?? null, error: null };
}
