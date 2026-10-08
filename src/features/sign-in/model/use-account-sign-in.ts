import * as Haptics from 'expo-haptics';
import { useCallback, useState } from 'react';
import { Platform } from 'react-native';

import { firstName, setProfileEmail, setProfileName } from '@/entities/profile';
import { signInWithPlatform } from '@/entities/session';
import { track } from '@/shared/lib/analytics';

/** Which account the platform button makes: Apple on iOS, Google on Android. */
export const SIGN_IN_METHOD = Platform.OS === 'android' ? 'google' : 'apple';

export type SignInOutcome = 'signed-in' | 'unavailable' | 'cancelled' | 'failed';

/**
 * The platform sign-in, with everything the two places that offer it need.
 *
 * Apple returns the name and the email only on the **very first**
 * authorisation for an Apple ID; every later sign-in is nulls. So both are
 * written down here or lost for good. Behind it the anonymous account made at
 * first launch is linked rather than replaced (`accountFor`), so the plan and
 * every row already sent stay with the person.
 *
 * A cancel says nothing — they know what they tapped. A genuine failure sets
 * `failed`, and the caller says so where the button is.
 */
export function useAccountSignIn() {
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

  const signIn = useCallback(async (): Promise<SignInOutcome> => {
    if (busy) return 'cancelled';
    setBusy(true);
    setFailed(false);
    try {
      const result = await signInWithPlatform();
      if (result.status === 'cancelled') return 'cancelled';
      if (result.status === 'failed') {
        track('sign_in_failed', { method: SIGN_IN_METHOD, stage: result.stage });
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        setFailed(true);
        return 'failed';
      }
      if (result.status === 'signed-in') {
        if (result.fullName != null) setProfileName(firstName(result.fullName));
        if (result.email != null) setProfileEmail(result.email, SIGN_IN_METHOD);
      }
      track('sign_in_completed', { method: SIGN_IN_METHOD, status: result.status });
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      return result.status;
    } finally {
      setBusy(false);
    }
  }, [busy]);

  return { signIn, busy, failed, clearFailed: () => setFailed(false) };
}
