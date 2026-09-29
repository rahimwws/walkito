import { Platform, TurboModuleRegistry } from 'react-native';

import { signInWithApple, type AppleSignIn } from './apple-auth';
import { accountFor } from './account';

/**
 * Sign in with Google — Android's account, the way Apple is iOS's.
 *
 * Google's ID token goes to Supabase through `accountFor`, exactly as Apple's
 * does, so an Android user's plan belongs to a real account and comes back on a
 * new phone. The same verdicts as `signInWithApple`, so callers treat the two
 * the same.
 *
 * Needs `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID` — the *Web* OAuth client, which is
 * the audience Supabase checks the token against — and an Android OAuth client
 * registered with the app's package name and signing SHA-1. Without the id, or
 * in a binary built before the module was linked, it reports `unavailable` and
 * the caller lets the user through, as it does for Apple on a simulator.
 */
const WEB_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID;

type GoogleModule = typeof import('@react-native-google-signin/google-signin');

let configured = false;

function google(): GoogleModule | null {
  // The package's own import throws when its native half is missing, so it is
  // only required once the module is known to be in the binary.
  if (TurboModuleRegistry.get('RNGoogleSignin') == null) return null;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const module = require('@react-native-google-signin/google-signin') as GoogleModule;
  if (!configured) {
    module.GoogleSignin.configure({ webClientId: WEB_CLIENT_ID });
    configured = true;
  }
  return module;
}

export async function signInWithGoogle(): Promise<AppleSignIn> {
  if (Platform.OS !== 'android' || WEB_CLIENT_ID == null || WEB_CLIENT_ID.length === 0) {
    return { status: 'unavailable' };
  }
  const module = google();
  if (module == null) return { status: 'unavailable' };
  const { GoogleSignin, statusCodes } = module;

  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const response = await GoogleSignin.signIn();
    if (response.type === 'cancelled') return { status: 'cancelled' };
    const user = response.data.user;

    const account = await accountFor('google', response.data.idToken);
    if (account.error != null) return { status: 'failed', error: account.error, stage: 'server' };

    const fullName = [user.givenName, user.familyName].filter(Boolean).join(' ') || user.name;
    return {
      status: 'signed-in',
      userId: account.userId ?? user.id,
      email: user.email ?? null,
      fullName: fullName != null && fullName.length > 0 ? fullName : null,
    };
  } catch (error) {
    const code = (error as { code?: string }).code;
    if (code === statusCodes.SIGN_IN_CANCELLED || code === statusCodes.IN_PROGRESS) return { status: 'cancelled' };
    // No Play Services — a de-Googled phone. Nothing the user can fix here.
    if (code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) return { status: 'unavailable' };
    return { status: 'failed', error, stage: 'provider' };
  }
}

/**
 * The platform's own sign-in: Apple on iOS, Google on Android. What the intro
 * screen and Settings call, so neither needs to know which.
 */
export async function signInWithPlatform(): Promise<AppleSignIn> {
  return Platform.OS === 'android' ? signInWithGoogle() : signInWithApple();
}
