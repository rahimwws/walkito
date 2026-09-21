import * as AppleAuthentication from 'expo-apple-authentication';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { setProfileName } from '@/entities/profile';
import {
  claimWithEmail,
  sendPasswordReset,
  signInWithAppleToSupabase,
  signInWithEmail,
  useAuth,
} from '@/entities/session';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

/** Whether the form is claiming this device's account or recovering one made
 * elsewhere. The two take the same fields and mean opposite things, so the
 * screen says which rather than leaving it to be inferred from a button. */
type Mode = 'claim' | 'signin';

/**
 * Signing in, which this app does not require and now offers.
 *
 * Nothing here gates the product. Every screen worked without an account before
 * this existed and still does — the programme, the pain log and the streak are
 * local. What an account buys is getting them back on another phone, and being
 * reachable if the invite you sent is redeemed.
 *
 * Both methods, because Apple requires it: an app offering a third-party login
 * must offer Sign in with Apple beside it. They are not equivalent here, and
 * the screen does not pretend they are — see the note on the email path.
 */
export function AuthPage() {
  const router = useRouter();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const auth = useAuth();

  const [mode, setMode] = useState<Mode>('claim');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const canSubmit = email.trim().length > 3 && password.length >= 6 && !busy;

  const done = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    if (router.canGoBack()) router.back();
  };

  const submit = async () => {
    if (!canSubmit) return;
    setBusy(true);
    setNotice(null);
    const address = email.trim();
    // Claiming converts this device's anonymous account in place, which is what
    // keeps the referral code attached to it. Signing in replaces the session
    // with one from elsewhere, which is a different thing and says so.
    const result =
      mode === 'claim'
        ? await claimWithEmail(address, password)
        : await signInWithEmail(address, password);
    setBusy(false);

    if (result.status === 'ok') return done();
    if (result.status === 'unavailable') {
      setNotice('Accounts are not available in this build.');
      return;
    }
    if (result.status === 'failed') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setNotice(result.message);
    }
  };

  const withApple = async () => {
    if (busy) return;
    setBusy(true);
    setNotice(null);
    const result = await signInWithAppleToSupabase();
    setBusy(false);

    if (result.status === 'cancelled') return;
    if (result.status === 'ok') {
      // Apple hands the name back only on the very first authorisation, so it
      // is written down here or never.
      if (result.fullName != null) setProfileName(result.fullName);
      return done();
    }
    if (result.status === 'unavailable') {
      setNotice('Sign in with Apple is not available on this device.');
      return;
    }
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    setNotice(result.message);
  };

  const reset = async () => {
    if (email.trim().length < 4) {
      setNotice('Enter your email address first.');
      return;
    }
    setBusy(true);
    const result = await sendPasswordReset(email.trim());
    setBusy(false);
    setNotice(
      result.status === 'ok'
        ? 'Check your email for a reset link.'
        : 'Could not send the reset email.',
    );
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={[styles.screen, { paddingTop: insets.top + 20 }]}>
      <Text style={[styles.title, { color: colors.foreground }]}>
        {mode === 'claim' ? 'Keep your progress' : 'Welcome back'}
      </Text>
      <Text style={[styles.blurb, { color: meter.caption }]}>
        {mode === 'claim'
          ? 'An account moves your plan to a new phone. Everything works without one.'
          : 'Sign in to the account you made on another device.'}
      </Text>

      {auth.status === 'signed-in' && (
        <Text style={[styles.blurb, { color: meter.positive }]}>
          Already signed in as {auth.email ?? 'your account'}.
        </Text>
      )}

      <View style={[styles.field, { backgroundColor: meter.track }]}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor={meter.unit}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          style={[styles.input, { color: colors.foreground }]}
        />
      </View>

      <View style={[styles.field, { backgroundColor: meter.track }]}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor={meter.unit}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          // `newPassword` on the claim path so the keychain offers to generate
          // and store one, rather than suggesting an existing password for an
          // account that does not exist yet.
          textContentType={mode === 'claim' ? 'newPassword' : 'password'}
          style={[styles.input, { color: colors.foreground }]}
        />
      </View>

      {notice != null && (
        <Text style={[styles.notice, { color: accents[scheme].red.fill }]}>{notice}</Text>
      )}

      <Pressable onPress={() => void reset()} hitSlop={8} style={styles.linkRow}>
        <Text style={[styles.link, { color: meter.caption }]}>Forgot password?</Text>
      </Pressable>

      <View style={styles.spacer} />

      {/* Both at the bottom, where the thumb is, and Apple's above ours.
          Apple's guidance is that where a third-party login is offered, Sign in
          with Apple is offered at least as prominently. */}
      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        {Platform.OS === 'ios' && (
          <AppleAuthentication.AppleAuthenticationButton
            buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
            // Always the white button: the app is dark-only, so the black
            // variant would disappear into the background it sits on.
            buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
            cornerRadius={28}
            style={styles.apple}
            onPress={() => void withApple()}
          />
        )}

        <PrimaryButton
          label={busy ? 'Working…' : mode === 'claim' ? 'Create account' : 'Sign in'}
          disabled={!canSubmit}
          onPress={() => void submit()}
        />

        <Pressable
          onPress={() => {
            Haptics.selectionAsync();
            setNotice(null);
            setMode(mode === 'claim' ? 'signin' : 'claim');
          }}
          hitSlop={8}
          style={styles.linkRow}>
          <Text style={[styles.link, { color: colors.foreground }]}>
            {mode === 'claim' ? 'I already have an account' : 'Create one instead'}
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, paddingHorizontal: 20 },
  title: { fontSize: 32, fontFamily: fonts.heavy, letterSpacing: -0.9 },
  blurb: { fontSize: 15, lineHeight: 21, fontFamily: fonts.regular, marginTop: 6 },
  field: {
    borderRadius: 18,
    borderCurve: 'continuous',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  input: { fontSize: 17, fontFamily: fonts.medium, paddingVertical: 15 },
  notice: { fontSize: 14, lineHeight: 19, fontFamily: fonts.medium, marginTop: 10 },
  linkRow: { alignSelf: 'center', paddingVertical: 12 },
  link: { fontSize: 15, fontFamily: fonts.semibold },
  spacer: { flex: 1 },
  dock: { gap: 10 },
  apple: { height: 56 },
});
