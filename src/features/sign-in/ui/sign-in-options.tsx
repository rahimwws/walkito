import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fonts, meterColors, palette, primaryButton } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

import type { AuthFailure, EmailCodeMode } from '@/entities/session';

import { useAccountSignIn, type SignInOutcome } from '../model/use-account-sign-in';
import { EmailSignInSheet, type EmailSheetPreview } from './email-sign-in-sheet';
import { PlatformLogo } from './platform-logo';

export type SignInOptionsProps = {
  /** Signed in, by either door. `email` is set for the email door, and
   * `created` when its code made the anonymous account theirs. */
  onSignedIn: (via: { outcome: SignInOutcome; email?: string; created?: boolean }) => void;
  /** What the email door does: `create` on the screen after the first
   * purchase, `sign-in` (the default) for someone coming back. */
  emailMode?: EmailCodeMode;
  /**
   * The platform's sheet ended without an account: closed, not on this phone,
   * or failed. Without this, a cancel stays and `unavailable` counts as signed
   * in (the intro, where a dev simulator has no Apple sheet). With it, the
   * caller decides what each one does.
   */
  onNoAccount?: (outcome: Exclude<SignInOutcome, 'signed-in'>) => void;
  /** A failure that was not the person's, by either door. */
  onFailure?: (failure: Exclude<AuthFailure, 'user'>) => void;
  /** Shows the platform's own button. Off when it is not on this phone
   * (Google without Play Services), so email leads. */
  platform?: boolean;
  /** On a night sky (the save screen): light text and a white button,
   * whatever the appearance. */
  night?: boolean;
  /** Development only: the email sheet open on a stage. */
  preview?: EmailSheetPreview | null;
  /** Something is over the host while this is true: the email sheet, or the
   * platform's own sheet while it is asked. A host with something moving
   * under them (the save screen's mascot) holds it still. */
  onCovered?: (covered: boolean) => void;
};

/**
 * The two doors into an account, as a pair: the platform's own button, and
 * under it email. Shared by the intro's "already have an account" sheet and
 * the screen that saves a new plan.
 */
export function SignInOptions({
  onSignedIn,
  emailMode = 'sign-in',
  onNoAccount,
  onFailure,
  platform = true,
  night = false,
  preview,
  onCovered,
}: SignInOptionsProps) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();
  const { signIn, busy, failed } = useAccountSignIn();
  const [email, setEmail] = useState(false);
  /** An email sign-in waiting for its sheet to leave before the host hears of
   * it. The host may close a modal under this one (the intro's "Sign in"
   * sheet); doing that while this sheet was still dismissing left its native
   * host on screen on iPadOS 27, swallowing every touch. */
  const pendingEmail = useRef<{ email: string; created: boolean } | null>(null);
  useEffect(() => {
    if (__DEV__) setEmail(preview != null);
  }, [preview]);

  // Told when it changes, through a ref: a host's callback is often a new
  // function every render, and keyed on it this would run on every one.
  const covered = email || busy;
  const coveredRef = useRef(onCovered);
  coveredRef.current = onCovered;
  useEffect(() => {
    coveredRef.current?.(covered);
  }, [covered]);

  const signInWithPlatform = async () => {
    const outcome = await signIn();
    if (outcome === 'signed-in') {
      onSignedIn({ outcome });
      return;
    }
    if (onNoAccount != null) {
      if (outcome === 'failed') onFailure?.('server');
      onNoAccount(outcome);
      return;
    }
    // A cancel leaves them where they were; a failure is said under the button.
    if (outcome === 'unavailable') onSignedIn({ outcome });
  };

  const openEmail = () => {
    Haptics.selectionAsync();
    setEmail(true);
  };

  // White on the night sky in either appearance; the app's own otherwise.
  const tint = night ? { fill: '#FFFFFF', label: primaryButton.dark.label } : undefined;
  const logo = (tint ?? primaryButton[scheme]).label;
  const emailLabel = emailMode === 'create' ? t('setup.save.email') : t('onboarding.signIn.email');

  return (
    <View style={styles.options}>
      {platform && (
        <PrimaryButton
          label={Platform.OS === 'android' ? t('onboarding.signIn.google') : t('onboarding.signIn.apple')}
          leading={<PlatformLogo color={logo} />}
          onPress={signInWithPlatform}
          disabled={busy}
          tint={tint}
        />
      )}
      {platform && failed && (
        <Text style={[styles.failed, { color: night ? 'rgba(255,255,255,0.75)' : meter.label }]}>
          {t('onboarding.intro.signInFailed')}
        </Text>
      )}
      {/* Email is the second door: words, not a second button. Only when it is
          the only door (Google not on the phone) does it take the button. */}
      {platform ? (
        <Pressable
          accessibilityRole="button"
          disabled={busy}
          onPress={openEmail}
          hitSlop={8}
          style={({ pressed }) => [styles.alt, pressed && { opacity: 0.6 }]}>
          <Text style={[styles.altLabel, { color: night ? 'rgba(255,255,255,0.78)' : meter.caption }]}>
            {emailLabel}
          </Text>
        </Pressable>
      ) : (
        <PrimaryButton label={emailLabel} onPress={openEmail} disabled={busy} tint={tint} />
      )}
      <EmailSignInSheet
        visible={email}
        preview={preview}
        mode={emailMode}
        onClose={() => setEmail(false)}
        onFailure={onFailure}
        onSignedIn={(address, created) => {
          pendingEmail.current = { email: address, created };
          setEmail(false);
        }}
        onHidden={() => {
          const done = pendingEmail.current;
          pendingEmail.current = null;
          if (done != null) onSignedIn({ outcome: 'signed-in', email: done.email, created: done.created });
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
