import * as AppleAuthentication from 'expo-apple-authentication';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

import { accountFor } from './account';

/**
 * Sign in with Apple — a real account, and the name and address that come with it.
 *
 * Apple's identity token is handed to Supabase, which makes it an account the
 * plan's history belongs to. That is what brings the history back on a new
 * phone or after a reinstall: signing in with the same Apple ID lands on the
 * same user, and the plan sync restores from it.
 *
 * On a device that was already using the app anonymously, the Apple identity is
 * *linked* to that user rather than replacing it, so the user id — and every
 * row already sent under it — stays. When the Apple ID already has an account
 * (a reinstall, a second phone), linking is refused and the device signs in to
 * that account instead; the device's own plan is local-first and goes up under
 * the new id on the next push.
 *
 * Name and email are asked for because both are used — the name greets the
 * user, the email is what support answers on — and each arrives **only on the
 * very first authorisation** for an Apple ID; every later sign-in returns nulls,
 * so they are written to local storage there and then or lost.
 *
 * Returns a verdict rather than throwing. Apple reports a user tapping "Cancel"
 * as an *error* (`ERR_REQUEST_CANCELED`), which it is not; everything else that
 * goes wrong is a real failure, and the caller decides whether it blocks.
 */
export type AppleSignIn =
  | {
      status: 'signed-in';
      userId: string;
      email: string | null;
      fullName: string | null;
    }
  | { status: 'cancelled' }
  | { status: 'unavailable' }
  | { status: 'failed'; error: unknown; stage: 'provider' | 'server' };

export async function signInWithApple(): Promise<AppleSignIn> {
  // Android lands here. A simulator does **not**, which is worth saying because
  // the opposite was written here and is wrong: `isAvailableAsync` reports true
  // on any iOS 13+ simulator whether or not an Apple ID is attached, so a
  // simulator with none goes on to `signInAsync` and fails there. That failure
  // is not "unavailable" and must not be treated as one — it is why the intro
  // screen needs a second way in rather than a fall-through.
  if (Platform.OS !== 'ios' || !(await AppleAuthentication.isAvailableAsync())) {
    return { status: 'unavailable' };
  }

  // A dev build on a simulator skips the sheet entirely. Signing in there
  // needs an Apple ID attached to the simulator and still fails often enough to
  // block every run through onboarding. "Unavailable" is the verdict the intro
  // screen already lets through, so the flow advances without a name or email.
  // Release builds and real devices are unaffected.
  if (__DEV__ && !Device.isDevice) {
    return { status: 'unavailable' };
  }

  try {
    const credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
    });

    // Name and email arrive **only on the very first authorisation** for this
    // Apple ID and app. Every later sign-in returns nulls, so anything that
    // needs them has to persist them now rather than ask again.
    const name = credential.fullName;
    const fullName = [name?.givenName, name?.familyName].filter(Boolean).join(' ');

    const account = await accountFor('apple', credential.identityToken);
    if (account.error != null) return { status: 'failed', error: account.error, stage: 'server' };

    return {
      status: 'signed-in',
      userId: account.userId ?? credential.user,
      email: credential.email ?? null,
      fullName: fullName.length > 0 ? fullName : null,
    };
  } catch (error) {
    if ((error as { code?: string }).code === 'ERR_REQUEST_CANCELED') {
      return { status: 'cancelled' };
    }
    return { status: 'failed', error, stage: 'provider' };
  }
}
