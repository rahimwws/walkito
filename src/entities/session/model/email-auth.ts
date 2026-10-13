import { isAuthRetryableFetchError } from '@supabase/supabase-js';

import { getLanguage, translatorFor } from '@/shared/lib/i18n';
import { currentUserId, forgetIdentity, supabase } from '@/shared/lib/supabase';

/**
 * Email as a way into an account, two ways.
 *
 * **A code in an email**, the way people use. `sendEmailCode` mails one and
 * `confirmEmailCode` takes it back. For someone new it makes the anonymous
 * account from first launch their own (`create`): the address is added to it
 * and confirmed, so the user id, and every row already synced under it, stay
 * the same. For an address that already has an account it signs in to that one
 * instead (`sign-in`): someone coming back. Codes need the project to send
 * mail to anyone, which is custom SMTP (Supabase → Authentication → Emails),
 * and templates that print `{{ .Token }}`.
 *
 * **An address and a password**, `signInWithEmail`, for App Store review.
 * Apple asks for working credentials when a reviewer cannot otherwise see the
 * whole app; the review account's address has no mailbox, so it cannot take a
 * code. It is a real sign-in, not a back door: an ordinary Supabase account,
 * with no hardcoded pair in the bundle and no branch for one address.
 */

/** Digits in an emailed code: Supabase → Authentication → Email → Email OTP
 * Length. The copy never says the number, so changing it there and here is
 * the whole change. */
export const EMAIL_CODE_LENGTH = 6;

/** What a code does once typed: make the anonymous account this person's own,
 * or sign in to the account the address already has. */
export type EmailCodeMode = 'create' | 'sign-in';

/**
 * Why something failed: the person can fix it (`user`: a typo, a wrong code),
 * or they cannot (`offline`, `server`: no network, mail not sent). A screen
 * that offers no way past sign-in offers one for the second kind, so nobody
 * who paid is stuck behind a server.
 */
export type AuthFailure = 'user' | 'offline' | 'server';

export type EmailSignIn =
  | { status: 'signed-in'; userId: string; email: string; created: boolean }
  /** Anything that went wrong, already phrased for the user. */
  | { status: 'failed'; message: string; failure: AuthFailure };

export type EmailCodeSent =
  | { status: 'sent'; email: string; mode: EmailCodeMode }
  | { status: 'failed'; message: string; failure: AuthFailure };

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
    case 'otp_expired':
      return t('auth.badCode');
    case 'over_email_send_rate_limit':
      return t('auth.codeRateLimited');
    case 'email_address_not_authorized':
      // The project's own mailer, which sends only to its team: custom SMTP
      // is not set up.
      return t('auth.emailUndeliverable');
    case 'otp_disabled':
      // A sign-in code for an address with no account, which `shouldCreateUser:
      // false` refuses rather than making one.
      return t('auth.noAccountForEmail');
    default:
      // The server's own words. Better than a generic line for the cases not
      // listed above, which are rare enough that guessing at them would be
      // inventing explanations.
      return message;
  }
}

/** GoTrue's per-address wait ("…you can only request this after 42
 * seconds"), as against the project's hourly cap ("email rate limit
 * exceeded"). Both come back as `over_email_send_rate_limit`. */
const WAIT_A_MINUTE = /after \d+ seconds?/i;

/**
 * Which kind of failure an auth error is. The per-address minute between
 * codes is the person's to wait out, not a server failure: classing it as one
 * would offer a way past a required sign-in to anyone who asked twice.
 */
function failureOf(error: unknown): AuthFailure {
  if (isAuthRetryableFetchError(error) || error instanceof TimedOut) return 'offline';
  const status = (error as { status?: unknown } | null)?.status;
  if (typeof status === 'number' && (status >= 500 || status === 0)) return 'server';
  const code = (error as { code?: unknown } | null)?.code;
  const message = error instanceof Error ? error.message : '';
  if (code === 'over_email_send_rate_limit') return WAIT_A_MINUTE.test(message) ? 'user' : 'server';
  if (code === 'email_address_not_authorized') return 'server';
  return 'user';
}

/** A request that took too long: treated as no network, so the screen stops
 * waiting and, where signing in is required, offers its way on. */
class TimedOut extends Error {}

const REQUEST_TIMEOUT_MS = 20_000;

/** Gives up on a request after a while. The request itself may still finish;
 * what stops is the screen waiting on it. */
function withTimeout<T>(request: Promise<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new TimedOut('timed out')), REQUEST_TIMEOUT_MS);
    request.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error: unknown) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}

function failed(error: unknown): { status: 'failed'; message: string; failure: AuthFailure } {
  const failure = failureOf(error);
  const t = translatorFor(getLanguage());
  if (failure === 'offline') return { status: 'failed', message: t('auth.unreachable'), failure };
  const code = (error as { code?: string } | null)?.code;
  const message = error instanceof Error ? error.message : t('auth.generic');
  if (__DEV__) console.warn(`[auth] email code failed: code=${code ?? 'none'} message=${message}`);
  return { status: 'failed', message: explain(code, message), failure };
}

const ADDRESS = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Mails a code. `prefer` is what the screen is for: `create` after the first
 * purchase, `sign-in` from "Already have an account". A `create` for an
 * address that already has an account becomes a `sign-in`, and the answer says
 * which one was sent, so the screen can say so.
 */
export async function sendEmailCode(email: string, prefer: EmailCodeMode): Promise<EmailCodeSent> {
  const t = translatorFor(getLanguage());
  const client = supabase;
  if (client == null) return { status: 'failed', message: t('auth.noServer'), failure: 'server' };

  const address = email.trim().toLowerCase();
  if (!ADDRESS.test(address)) return { status: 'failed', message: t('auth.badEmail'), failure: 'user' };

  try {
    if (prefer === 'create') {
      // The anonymous account from first launch, made now if launch was
      // offline. Adding an address to it mails a code to that address; the
      // account stays anonymous until the code comes back.
      await withTimeout(currentUserId());
      const { data } = await withTimeout(client.auth.getSession());
      const user = data.session?.user;
      // Still no account at all: the server could not be reached to make
      // one. Not the person's doing, so it is said as a server failure.
      if (user == null) return { status: 'failed', message: t('auth.unreachable'), failure: 'server' };
      if (user.is_anonymous === true) {
        const { error } = await withTimeout(client.auth.updateUser({ email: address }));
        if (error == null) return { status: 'sent', email: address, mode: 'create' };
        if (error.code !== 'email_exists') return failed(error);
        // The address has an account: someone coming back. Sign in to it.
      }
    }
    const { error } = await withTimeout(
      client.auth.signInWithOtp({ email: address, options: { shouldCreateUser: false } }),
    );
    if (error != null) return failed(error);
    return { status: 'sent', email: address, mode: 'sign-in' };
  } catch (error) {
    return failed(error);
  }
}

/**
 * Mails a new code. The same request as the first, not Supabase's `resend`:
 * that finds the user by their current address, which an anonymous account
 * does not have yet (the new one waits in `email_change`), so it answered OK
 * and sent nothing. Supabase allows one a minute per address.
 */
export function resendEmailCode(email: string, mode: EmailCodeMode): Promise<EmailCodeSent> {
  return sendEmailCode(email, mode);
}

/**
 * The code, back. `create` confirms the address on the anonymous account,
 * which then stops being anonymous and keeps its id; `sign-in` replaces the
 * session with the account the address belongs to.
 */
export async function confirmEmailCode(email: string, code: string, mode: EmailCodeMode): Promise<EmailSignIn> {
  const t = translatorFor(getLanguage());
  const client = supabase;
  if (client == null) return { status: 'failed', message: t('auth.noServer'), failure: 'server' };
  try {
    const { data, error } = await withTimeout(
      client.auth.verifyOtp({
        email,
        token: code.trim(),
        type: mode === 'create' ? 'email_change' : 'email',
      }),
    );
    if (error != null) return failed(error);
    const user = data.user ?? data.session?.user ?? null;
    if (user == null) return { status: 'failed', message: t('auth.noAccount'), failure: 'server' };
    // A different user on a sign-in, the same one with a new token on a
    // create: either way nothing may keep addressing the cached identity.
    forgetIdentity();
    return { status: 'signed-in', userId: user.id, email: user.email ?? email, created: mode === 'create' };
  } catch (error) {
    return failed(error);
  }
}

export async function signInWithEmail(email: string, password: string): Promise<EmailSignIn> {
  const client = supabase;
  if (client == null) {
    return { status: 'failed', message: translatorFor(getLanguage())('auth.noServer'), failure: 'server' };
  }

  const address = email.trim();
  if (address.length === 0 || password.length === 0) {
    return { status: 'failed', message: translatorFor(getLanguage())('auth.missingFields'), failure: 'user' };
  }

  try {
    const { data, error } = await withTimeout(
      client.auth.signInWithPassword({
        email: address,
        password,
      }),
    );

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
      return { status: 'failed', message: explain(error.code, error.message), failure: failureOf(error) };
    }

    const user = data.user;
    if (user == null) {
      return { status: 'failed', message: translatorFor(getLanguage())('auth.noAccount'), failure: 'server' };
    }

    // The anonymous identity this app signs in with on first launch has just
    // been replaced by a real one. Anything still holding the cached promise
    // would go on addressing the anonymous user — see `forgetIdentity`.
    forgetIdentity();

    return { status: 'signed-in', userId: user.id, email: user.email ?? address, created: false };
  } catch (error) {
    return failed(error);
  }
}
