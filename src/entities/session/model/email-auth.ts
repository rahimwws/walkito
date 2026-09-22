import { getLanguage, translatorFor } from '@/shared/lib/i18n';
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
  /** Anything that went wrong, already phrased for the user. One shape rather
   * than a union of causes: the sheet shows the message and has no branch that
   * behaves differently, and the distinctions that matter are in the wording. */
  | { status: 'failed'; message: string };

/**
 * What to tell the user, per Supabase auth error code.
 *
 * This started as "any 400 means the credentials are wrong", which was wrong
 * and actively unhelpful: an account that exists but has never been confirmed
 * also fails with a 400, and telling that person their password does not match
 * sends them to reset a password that was fine. The codes below are the ones
 * that are actually reachable from a sign-in.
 *
 * `invalid_credentials` deliberately does not say which half was wrong — that
 * would tell anybody trying addresses which ones have accounts.
 */
function explain(code: string | undefined, message: string): string {
  // Resolved per call, not at module scope: these strings are produced outside
  // React where no hook can run, and a translator captured at import time would
  // pin the language to whatever it was on first launch.
  const t = translatorFor(getLanguage());

  switch (code) {
    case 'invalid_credentials':
      return t('auth.invalidCredentials');
    case 'email_not_confirmed':
      // The likeliest failure for an account made by hand in the Supabase
      // dashboard: "Auto Confirm User" is off by default, and an unconfirmed
      // account cannot sign in at all.
      return t('auth.notConfirmed');
    case 'user_banned':
      return t('auth.banned');
    case 'email_provider_disabled':
    case 'provider_disabled':
      return t('auth.providerDisabled');
    case 'over_request_rate_limit':
      return t('auth.rateLimited');
    case 'validation_failed':
    case 'email_address_invalid':
      return t('auth.badEmail');
    default:
      // The server's own words. Better than a generic line for the cases not
      // listed above, which are rare enough that guessing at them would be
      // inventing explanations.
      return message;
  }
}

export async function signInWithEmail(email: string, password: string): Promise<EmailSignIn> {
  const client = supabase;
  if (client == null) {
    return { status: 'failed', message: translatorFor(getLanguage())('auth.noServer') };
  }

  const address = email.trim();
  if (address.length === 0 || password.length === 0) {
    return { status: 'failed', message: translatorFor(getLanguage())('auth.missingFields') };
  }

  try {
    const { data, error } = await client.auth.signInWithPassword({
      email: address,
      password,
    });

    if (error != null) {
      // The real code, in development only. The user-facing message is
      // deliberately vague for some of these, and debugging a sign-in against a
      // vague message is what made this hard to diagnose the first time.
      if (__DEV__) {
        console.warn(
          `[auth] sign-in failed: code=${error.code ?? 'none'} status=${error.status ?? 'none'} ` +
            `message=${error.message}`,
        );
      }
      return { status: 'failed', message: explain(error.code, error.message) };
    }

    const user = data.user;
    if (user == null) {
      return { status: 'failed', message: translatorFor(getLanguage())('auth.noAccount') };
    }

    // The anonymous identity this app signs in with on first launch has just
    // been replaced by a real one. Anything still holding the cached promise
    // would go on addressing the anonymous user — see `forgetIdentity`.
    forgetIdentity();

    return { status: 'signed-in', userId: user.id, email: user.email ?? address };
  } catch (error) {
    return {
      status: 'failed',
      message:
        error instanceof Error ? error.message : translatorFor(getLanguage())('auth.generic'),
    };
  }
}
