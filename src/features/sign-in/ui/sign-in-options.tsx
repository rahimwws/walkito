import * as Haptics from 'expo-haptics';
import { useNavigation } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fonts, primaryButton, target } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useSheetHandlers, useSheetRoute } from '@/shared/lib/sheet-route';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { SheetScreen } from '@/shared/ui/sheet';

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
   * under them holds it still. */
  onCovered?: (covered: boolean) => void;
  /** The host is inside a React Native modal (the pass checkout): the email
   * door opens as its own solid sheet, since a route would open under it. */
  inline?: boolean;
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
  inline = false,
}: SignInOptionsProps) {
  const scheme = useColorScheme();
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
        <Text style={[styles.failed, night && { color: 'rgba(255,255,255,0.75)' }]}>
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
          <Text style={[styles.altLabel, night && { color: 'rgba(255,255,255,0.78)' }]}>
            {emailLabel}
          </Text>
        </Pressable>
      ) : (
        <PrimaryButton label={emailLabel} onPress={openEmail} disabled={busy} tint={tint} />
      )}
      <EmailSignInSheet
        visible={email}
        preview={preview}
        inline={inline}
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

const SIGN_IN_ROUTE = 'sign-in';

type SignInSheetHandlers = { onSignedIn: SignInOptionsProps['onSignedIn'] };

/**
 * "Already have an account?": the native form sheet route `/sign-in` over the
 * intro, for somebody coming back. Signing in links nothing new: the
 * anonymous account from first launch gives way to theirs (`accountFor`).
 * This keeps the intro's `visible` / `onClose` API and opens the route.
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
  useSheetRoute<SignInSheetHandlers>(SIGN_IN_ROUTE, visible, '/sign-in', { onSignedIn }, onClose);
  return null;
}

export function SignInSheetScreen() {
  const handlers = useSheetHandlers<SignInSheetHandlers>(SIGN_IN_ROUTE);
  const navigation = useNavigation();
  const t = useT();

  return (
    <SheetScreen title={t('onboarding.signIn.title')} onClose={() => navigation.goBack()}>
      <Text style={styles.blurb}>{t('onboarding.signIn.blurb')}</Text>
      <SignInOptions
        onSignedIn={(via) => {
          const host = handlers();
          if (host == null) navigation.goBack();
          else host.onSignedIn(via);
        }}
      />
    </SheetScreen>
  );
}

const styles = StyleSheet.create({
  options: { gap: 4 },
  failed: { ...fonts.medium(17), color: colors.text2, textAlign: 'center', marginTop: 8 },
  alt: { alignItems: 'center', justifyContent: 'center', minHeight: target.min, marginTop: 8 },
  altLabel: { ...fonts.semibold(17), color: colors.accent, textAlign: 'center' },
  blurb: { ...fonts.regular(19), color: colors.text2 },
});
