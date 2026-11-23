import * as AppleAuthentication from 'expo-apple-authentication';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { firstName, setProfileEmail, setProfileName } from '@/entities/profile';
import { signInWithPlatform } from '@/entities/session';
import { bitepal, colors, fonts, target } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { isAnonymousSession } from '@/shared/lib/supabase';

const METHOD = Platform.OS === 'android' ? 'google' : 'apple';

/**
 * Where someone still on the device's anonymous account can make it a real one —
 * with Apple on iOS, with Google on Android.
 *
 * New users sign in during onboarding; this is for everyone who came in before
 * that was required. Without an account a deleted app takes the history with it
 * — the Keychain usually keeps the anonymous key, but not always — so the offer
 * says what it is for: keeping the progress. Once signed in, it says so and
 * offers nothing.
 */
export function AccountRow({ onSignedIn }: { onSignedIn?: () => void }) {
  const t = useT();
  const [anonymous, setAnonymous] = useState<boolean | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    void isAnonymousSession().then((value) => {
      if (alive) setAnonymous(value);
    });
    return () => {
      alive = false;
    };
  }, []);

  const signIn = () => {
    setFailed(false);
    void signInWithPlatform().then((result) => {
      if (result.status === 'cancelled') return;
      if (result.status === 'failed') {
        track('sign_in_failed', { method: METHOD, stage: result.stage });
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        setFailed(true);
        return;
      }
      if (result.status === 'signed-in') {
        if (result.fullName != null) setProfileName(firstName(result.fullName));
        if (result.email != null) setProfileEmail(result.email, METHOD);
      }
      track('sign_in_completed', { method: METHOD, status: result.status });
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      void isAnonymousSession().then(setAnonymous);
      onSignedIn?.();
    });
  };

  if (anonymous == null) return null;

  if (!anonymous) {
    return <Text style={styles.done}>{t('settings.account.signedIn')}</Text>;
  }

  return (
    <View style={styles.group}>
      <Text style={styles.title}>{t('settings.account.saveTitle')}</Text>
      <Text style={styles.body}>{t(Platform.OS === 'android' ? 'settings.account.saveBodyGoogle' : 'settings.account.saveBody')}</Text>
      {Platform.OS === 'ios' ? (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={target.primary / 2}
          style={styles.button}
          onPress={signIn}
        />
      ) : (
        <Pressable
          accessibilityRole="button"
          onPress={signIn}
          style={({ pressed }) => [styles.button, styles.google, pressed && { opacity: 0.7 }]}>
          <Text style={styles.googleLabel}>{t('onboarding.intro.ctaGoogle')}</Text>
        </Pressable>
      )}
      {failed && <Text style={styles.body}>{t('onboarding.intro.signInFailed')}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    backgroundColor: bitepal.card,
    borderRadius: bitepal.cardRadius,
    borderCurve: 'continuous',
    padding: 20,
    gap: 10,
  },
  title: { ...fonts.heavy(22, -0.3), color: colors.text },
  body: { ...fonts.regular(17), color: colors.text2 },
  button: { height: target.primary, marginTop: 4 },
  google: {
    borderRadius: target.primary / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: bitepal.primary,
  },
  googleLabel: { ...fonts.bold(19), color: bitepal.onPrimary },
  done: { ...fonts.medium(17), color: colors.text3, textAlign: 'center' },
});
