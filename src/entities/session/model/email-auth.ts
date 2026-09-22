import { forgetIdentity, supabase } from '@/shared/lib/supabase';

/**
 * Signing in with an email address and a password.
 *
 * This exists for App Store review. Apple asks for working credentials when a
 * reviewer cannot otherwise see the whole app, and "Continue with Apple" is not
 * something a reviewer can always complete — their rig may have no Apple ID
 * attached, and on a simulator the authorisation sheet fails outright. Without
 * a second door a failed sign-in is the end of the review.
 *
 * It is a real sign-in, not a back door. The credentials are an ordinary
 * Supabase account; there is no hardcoded pair in the bundle and no branch that
 * treats one address differently, because a bypass that ships is a bypass
 * anybody can find in the JavaScript.
 *
 * Sign-in only — no sign-up. The app creates accounts anonymously on first
 * launch and asks nobody to register, so an address that does not exist is a
 * typo rather than an invitation to make one.
 */
export type EmailSignIn =
  | { status: 'signed-in'; userId: string; email: string }
  /** Wrong address or wrong password. Deliberately not distinguished — saying
   * which of the two was right tells an attacker which addresses have accounts. */
  | { status: 'invalid' }
  /** No backend in this build. */
  | { status: 'unavailable' }
  | { status: 'failed'; message: string };

export async function signInWithEmail(email: string, password: string): Promise<EmailSignIn> {
  const client = supabase;
  if (client == null) return { status: 'unavailable' };

  const address = email.trim();
  if (address.length === 0 || password.length === 0) return { status: 'invalid' };

  try {
    const { data, error } = await client.auth.signInWithPassword({
      email: address,
      password,
    });

    if (error != null) {
      // Supabase reports bad credentials as a 400. Anything else — a project
      // that is down, a network that is not there — is not the user getting it
      // wrong, and telling them their password is bad would send them to reset
      // a password that works.
      if (error.status === 400) return { status: 'invalid' };
      return { status: 'failed', message: error.message };
    }

    const user = data.user;
    if (user == null) return { status: 'failed', message: 'No account came back.' };

    // The anonymous identity this app signs in with on first launch has just
    // been replaced by a real one. Anything still holding the cached promise
    // would go on addressing the anonymous user — see `forgetIdentity`.
    forgetIdentity();

    return { status: 'signed-in', userId: user.id, email: user.email ?? address };
  } catch (error) {
    return {
      status: 'failed',
      message: error instanceof Error ? error.message : 'That didn’t go through.',
    };
  }
}
