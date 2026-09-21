import * as AppleAuthentication from 'expo-apple-authentication';
import { Platform } from 'react-native';

/**
 * Sign in with Apple.
 *
 * Deliberately returns a verdict rather than throwing. Apple reports a user
 * tapping "Cancel" on its own sheet as an *error* (`ERR_REQUEST_CANCELED`),
 * which it is not — it is the most ordinary thing a person can do on that
 * sheet, and treating it as a failure would put an error in front of someone
 * who simply changed their mind. Everything else that goes wrong is a real
 * failure, and the caller decides whether it should block the flow.
 */
export type AppleSignIn =
  | {
      status: 'signed-in';
      userId: string;
      email: string | null;
      fullName: string | null;
      /**
       * The signed JWT, which is the only part of this a server can trust.
       *
       * It used to be discarded. The button asked Apple for FULL_NAME and
       * EMAIL, kept the name for a greeting and threw the credential away — so
       * nothing was ever signed in, and the app was requesting Apple ID data it
       * had no use for. That is the shape of a review conversation you lose.
       */
      identityToken: string;
    }
  | { status: 'cancelled' }
  | { status: 'unavailable' }
  | { status: 'failed'; error: unknown };

export async function signInWithApple(): Promise<AppleSignIn> {
  // Android and the simulator without a signed-in Apple ID both land here.
  if (Platform.OS !== 'ios' || !(await AppleAuthentication.isAvailableAsync())) {
    return { status: 'unavailable' };
  }

  try {
    const credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
      // No nonce. Supabase's own Expo example omits it, and the reason it is
      // safe to here is that the token never leaves the device between Apple's
      // SDK and our process — there is no redirect for it to be replayed
      // through. Adding one means hashing for Apple and sending the raw value
      // to Supabase; getting that pair the wrong way round fails every sign-in,
      // and it is not verifiable from here.
    });

    if (credential.identityToken == null) {
      // Apple signed the user in but returned no token. Nothing can be
      // established from that, so it is a failure rather than a sign-in —
      // reporting success here would leave the app believing in a session that
      // does not exist.
      return { status: 'failed', error: new Error('Apple returned no identity token') };
    }

    // Name and email arrive **only on the very first authorisation** for this
    // Apple ID and app. Every later sign-in returns nulls, so anything that
    // needs them has to persist them now rather than ask again.
    const name = credential.fullName;
    const fullName = [name?.givenName, name?.familyName].filter(Boolean).join(' ');

    return {
      status: 'signed-in',
      userId: credential.user,
      email: credential.email ?? null,
      fullName: fullName.length > 0 ? fullName : null,
      identityToken: credential.identityToken,
    };
  } catch (error) {
    if ((error as { code?: string }).code === 'ERR_REQUEST_CANCELED') {
      return { status: 'cancelled' };
    }
    return { status: 'failed', error };
  }
}
