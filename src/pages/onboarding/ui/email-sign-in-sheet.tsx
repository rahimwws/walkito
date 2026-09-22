import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { signInWithEmail } from '@/entities/session';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

/**
 * The second door into the app: an address and a password.
 *
 * Here for App Store review. "Continue with Apple" is the front door and stays
 * the one this screen leads with, but it is not a door a reviewer can always
 * open — a rig with no Apple ID attached, or a simulator, fails the
 * authorisation outright, and with only one way in that failure ends the
 * review. It is also the only way to hand over working credentials, which Apple
 * asks for whenever part of an app sits behind a sign-in.
 *
 * A `Modal` rather than a route: the onboarding stack is a one-way flow with
 * its own progress bar and its own button, and threading a step into it that
 * only some users ever see would complicate every index in that flow for a
 * screen most people never open. Nothing is presented over this, so the nesting
 * problem that broke the session player does not apply.
 */
type Props = {
  visible: boolean;
  onClose: () => void;
  /** Signed in. The address is handed back so the profile can be greeted by it
   * and support has somewhere to reply. */
  onSignedIn: (email: string) => void;
};

export function EmailSignInSheet({ visible, onClose, onSignedIn }: Props) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const accent = accents[scheme];
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const ready = email.trim().length > 0 && password.length > 0 && !busy;

  const submit = async () => {
    if (!ready) return;
    setNotice(null);
    setBusy(true);
    const result = await signInWithEmail(email, password);
    setBusy(false);

    if (result.status === 'signed-in') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      onSignedIn(result.email);
      return;
    }

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    if (result.status === 'invalid') {
      // One message for both halves. Saying which of the two was right tells
      // anybody trying addresses which ones have accounts.
      setNotice('That email and password don’t match.');
      return;
    }
    if (result.status === 'unavailable') {
      setNotice('This build has no account server. Use Continue with Apple.');
      return;
    }
    setNotice(result.message);
  };

  const dismiss = () => {
    if (busy) return;
    setNotice(null);
    setPassword('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={[styles.host, { backgroundColor: colors.background }]}>
        <View style={[styles.head, { paddingTop: 20 }]}>
          <Text style={[styles.title, { color: meter.ink }]}>Sign in</Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close"
            onPress={dismiss}
            hitSlop={12}>
            <Text style={[styles.close, { color: meter.caption }]}>Close</Text>
          </Pressable>
        </View>

        <Text style={[styles.blurb, { color: meter.caption }]}>
          Use the email and password for your account.
        </Text>

        <TextInput
          style={[styles.field, { backgroundColor: colors.card, color: meter.ink }]}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor={meter.unit}
          // `username` rather than `emailAddress` so the password manager offers
          // the pair, not just the address.
          textContentType="username"
          autoComplete="email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          editable={!busy}
          returnKeyType="next"
        />
        <TextInput
          style={[styles.field, { backgroundColor: colors.card, color: meter.ink }]}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor={meter.unit}
          textContentType="password"
          autoComplete="current-password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          editable={!busy}
          returnKeyType="go"
          onSubmitEditing={() => void submit()}
        />

        {notice != null ? (
          <Text style={[styles.notice, { color: accent.amber.fill }]}>{notice}</Text>
        ) : null}

        <View style={[styles.foot, { paddingBottom: Math.max(insets.bottom, 16) }]}>
          <PrimaryButton
            label={busy ? 'Signing in…' : 'Sign in'}
            onPress={() => void submit()}
            disabled={!ready}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  host: { flex: 1, paddingHorizontal: 24, gap: 12 },
  head: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontSize: 26, fontFamily: fonts.heavy, letterSpacing: -0.6 },
  close: { fontSize: 16, fontFamily: fonts.medium },
  blurb: { fontSize: 15, fontFamily: fonts.medium, letterSpacing: -0.2, marginBottom: 4 },
  field: {
    borderRadius: 14,
    borderCurve: 'continuous',
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: 16,
    fontFamily: fonts.medium,
  },
  notice: { fontSize: 14, fontFamily: fonts.medium, letterSpacing: -0.1 },
  foot: { marginTop: 'auto' },
});
