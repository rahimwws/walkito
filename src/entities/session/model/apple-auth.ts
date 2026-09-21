import * as AppleAuthentication from 'expo-apple-authentication';
import { Platform } from 'react-native';

/**
 * Sign in with Apple — for a name and an address, and nothing else.
 *
 * No session is created. The identity token is not requested of Supabase, there
 * is no account on any server, and nothing here can be recovered on another
 * phone. Both scopes are asked for because both are used: the name greets the
 * user, the email is what support answers on, and each arrives **only on the
 * very first authorisation** for an Apple ID — every sign-in after that returns
 * nulls, so they are written to local storage there and then or lost.
 *
 * Deliberately this small. A real account would mean an Apple provider, manual
 * identity linking and email confirmation configured on the backend, and none
 * of those buy anything the app currently does: the programme, the pain log and
 * the streak all live on the device.
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
    });

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
    };
  } catch (error) {
    if ((error as { code?: string }).code === 'ERR_REQUEST_CANCELED') {
      return { status: 'cancelled' };
    }
    return { status: 'failed', error };
  }
}
