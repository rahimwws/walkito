import * as AppleAuthentication from 'expo-apple-authentication';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { firstName, setProfileEmail, setProfileName } from '@/entities/profile';
import { signInWithPlatform } from '@/entities/session';
import { fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { isAnonymousSession } from '@/shared/lib/supabase';
import { useColorScheme } from '@/shared/lib/theme';

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
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
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
    return <Text style={[styles.done, { color: meter.caption }]}>{t('settings.account.signedIn')}</Text>;
  }

  return (
    <View style={[styles.group, { backgroundColor: meter.track }]}>
      <Text style={[styles.title, { color: colors.foreground }]}>{t('settings.account.saveTitle')}</Text>
      <Text style={[styles.body, { color: meter.caption }]}>{t(Platform.OS === 'android' ? 'settings.account.saveBodyGoogle' : 'settings.account.saveBody')}</Text>
      {Platform.OS === 'ios' ? (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
          buttonStyle={
            scheme === 'dark'
              ? AppleAuthentication.AppleAuthenticationButtonStyle.WHITE
              : AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
          }
          cornerRadius={14}
          style={styles.button}
          onPress={signIn}
        />
      ) : (
        <Pressable
          accessibilityRole="button"
          onPress={signIn}
          style={({ pressed }) => [styles.button, styles.google, { backgroundColor: colors.foreground }, pressed && { opacity: 0.7 }]}>
          <Text style={[styles.googleLabel, { color: colors.background }]}>{t('onboarding.intro.ctaGoogle')}</Text>
        </Pressable>
      )}
      {failed && <Text style={[styles.body, { color: meter.caption }]}>{t('onboarding.intro.signInFailed')}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    borderRadius: 20,
    borderCurve: 'continuous',
    padding: 16,
    gap: 10,
    marginTop: 24,
  },
  title: {
    fontSize: 17,
    fontFamily: fonts.bold,
  },
  body: {
    fontSize: 15,
    lineHeight: 21,
    fontFamily: fonts.medium,
  },
  button: {
    height: 48,
    marginTop: 4,
  },
  google: {
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleLabel: {
    fontSize: 17,
    fontFamily: fonts.semibold,
  },
  done: {
    fontSize: 13,
    fontFamily: fonts.medium,
    textAlign: 'center',
    marginTop: 8,
  },
});
