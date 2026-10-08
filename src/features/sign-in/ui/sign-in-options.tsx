import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { useAccountSignIn, type SignInOutcome } from '../model/use-account-sign-in';
import { EmailSignInSheet } from './email-sign-in-sheet';

export type SignInOptionsProps = {
  /** Signed in, by either door. `email` is set for the email door. */
  onSignedIn: (via: { outcome: SignInOutcome; email?: string }) => void;
};

/**
 * The two doors into an account, as a pair: the platform's own button, and
 * under it the email one App Store review needs. Shared by the intro's
 * "already have an account" sheet and the screen that saves a new plan.
 */
export function SignInOptions({ onSignedIn }: SignInOptionsProps) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();
  const { signIn, busy, failed } = useAccountSignIn();
  const [email, setEmail] = useState(false);

  const platform = async () => {
    const outcome = await signIn();
    // A cancel leaves them where they were; a failure is said under the button.
    if (outcome === 'signed-in' || outcome === 'unavailable') onSignedIn({ outcome });
  };

  return (
    <View style={styles.options}>
      <PrimaryButton
        label={Platform.OS === 'android' ? t('onboarding.signIn.google') : t('onboarding.signIn.apple')}
        onPress={platform}
        disabled={busy}
      />
      {failed && <Text style={[styles.failed, { color: meter.label }]}>{t('onboarding.intro.signInFailed')}</Text>}
      <Pressable
        accessibilityRole="button"
        disabled={busy}
        onPress={() => {
          Haptics.selectionAsync();
          setEmail(true);
        }}
        style={({ pressed }) => [styles.alt, pressed && { opacity: 0.6 }]}>
        <Text style={[styles.altLabel, { color: meter.caption }]}>{t('onboarding.signIn.email')}</Text>
      </Pressable>
      <EmailSignInSheet
        visible={email}
        onClose={() => setEmail(false)}
        onSignedIn={(address) => {
          setEmail(false);
          onSignedIn({ outcome: 'signed-in', email: address });
        }}
      />
    </View>
  );
}

/**
 * "Already have an account?" — a sheet over the intro for somebody coming
 * back. Signing in links nothing new: the anonymous account from first launch
 * gives way to theirs (`accountFor`).
 */
export function SignInSheet({
  visible,
  onClose,
  onSignedIn,
}: {
  visible: boolean;
  onClose: () => void;
  onSignedIn: SignInOptionsProps['onSignedIn'];
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose} statusBarTranslucent>
      <Pressable accessibilityRole="button" accessibilityLabel={t('common.close')} style={styles.scrim} onPress={onClose} />
      <View style={[styles.sheet, { backgroundColor: colors.card, paddingBottom: Math.max(insets.bottom, 16) + 8 }]}>
        <Text style={[styles.title, { color: colors.foreground }]}>{t('onboarding.signIn.title')}</Text>
        <Text style={[styles.blurb, { color: meter.caption }]}>{t('onboarding.signIn.blurb')}</Text>
        <SignInOptions onSignedIn={onSignedIn} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  options: { gap: 4 },
  failed: { ...fonts.medium(14), textAlign: 'center', marginTop: 8 },
  alt: { alignItems: 'center', paddingTop: 14, paddingBottom: 4 },
  altLabel: fonts.medium(15, -0.2),
  scrim: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' },
  sheet: {
    paddingTop: 26,
    paddingHorizontal: 22,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderCurve: 'continuous',
    gap: 10,
  },
  title: { ...fonts.heavy(26, -0.6), textAlign: 'center' },
  blurb: { ...fonts.regular(16), lineHeight: 22, textAlign: 'center', marginBottom: 10 },
});
