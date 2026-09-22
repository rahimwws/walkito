import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { signInWithEmail } from '@/entities/session';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

/**
 * The second door into the app: an address and a password.
 *
 * Here for App Store review. "Continue with Apple" is the front door and stays
 * the one the intro screen leads with, but it is not a door a reviewer can
 * always open — a rig with no Apple ID attached, or a simulator, fails the
 * authorisation outright, and with only one way in that failure ends the
 * review. It is also the only way to hand over working credentials, which Apple
 * asks for whenever part of an app sits behind a sign-in.
 *
 * A bottom sheet rather than a full-screen modal, matching `StreakSheet` — two
 * fields and a button do not deserve the whole display, and taking it implies
 * the user has gone somewhere rather than been asked something. The mount is
 * owned here rather than driven off `visible` for the reason spelled out in
 * that component: a modal torn down the instant the flag clears leaves nothing
 * for the exit to play on.
 */

const BLUR = 28;
const IN_MS = 340;
const OUT_MS = 220;
const RISE = 44;
const RADIUS = 28;

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

  const [mounted, setMounted] = useState(false);
  /** 0 away, 1 arrived. One number drives the blur and the card, so they cannot
   * arrive or leave at different times. */
  const t = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      // A frame late: the modal has to exist before the transition starts, or
      // the first frames play against nothing.
      const frame = requestAnimationFrame(() => {
        t.value = withTiming(1, {
          duration: IN_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        });
      });
      return () => cancelAnimationFrame(frame);
    }

    t.value = withTiming(
      0,
      { duration: OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System },
      (finished) => {
        if (finished) runOnJS(setMounted)(false);
      },
    );
    return undefined;
  }, [visible, t]);

  /**
   * How far the keyboard has pushed in, as a shared value.
   *
   * `KeyboardAvoidingView` cannot do this job here. It works by growing its own
   * padding, and the card below is positioned absolutely against the bottom
   * edge — absolute children do not move for a parent's padding, so the sheet
   * stayed exactly where it was and the keyboard covered it completely.
   * Translating the dock is what actually moves it.
   *
   * `height` is already negative while the keyboard is up, which is why it adds
   * to the rise rather than subtracting from it.
   */
  const keyboard = useReanimatedKeyboardAnimation();

  const backdrop = useAnimatedStyle(() => ({ opacity: t.value }));
  const dock = useAnimatedStyle(() => ({
    opacity: t.value,
    transform: [{ translateY: (1 - t.value) * RISE + keyboard.height.value }],
  }));

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
    setNotice(result.message);
  };

  const dismiss = () => {
    if (busy) return;
    setNotice(null);
    setPassword('');
    onClose();
  };

  if (!mounted) return null;

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={dismiss}>
      {/* Driven by hand rather than by `entering`/`exiting` builders: an
          entering builder that fails to run strands its subject at opacity 0,
          and an exiting builder cannot run inside a modal whose visibility is
          what removed it. */}
      <View style={styles.fill}>
        <Animated.View style={[styles.fill, backdrop]} pointerEvents="none">
          <BlurView
            tint={scheme === 'dark' ? 'dark' : 'light'}
            intensity={BLUR}
            style={styles.fill}
          />
          <View style={[styles.fill, styles.wash]} />
        </Animated.View>

        {/* Tapping away closes it. Signing in is optional — Apple is the way
            most people come in — so trapping anyone here would be wrong. */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Close"
          style={styles.fill}
          onPress={dismiss}
        />

        <Animated.View
          style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }, dock]}
          pointerEvents="box-none">
            <View style={[styles.card, { backgroundColor: colors.card }]}>
              <View style={styles.head}>
                <Text style={[styles.title, { color: colors.foreground }]}>Sign in</Text>
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
                style={[styles.field, { backgroundColor: colors.background, color: meter.ink }]}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                placeholderTextColor={meter.unit}
                // `username` rather than `emailAddress`, so a password manager
                // offers the pair and not just the address.
                textContentType="username"
                autoComplete="email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                editable={!busy}
                returnKeyType="next"
              />
              <TextInput
                style={[styles.field, { backgroundColor: colors.background, color: meter.ink }]}
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

              <View style={styles.cta}>
                <PrimaryButton
                  label={busy ? 'Signing in…' : 'Sign in'}
                  onPress={() => void submit()}
                  disabled={!ready}
                />
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  /** A trace of ink over the blur — blur alone leaves a bright page bright. */
  wash: { backgroundColor: 'rgba(0,0,0,0.18)' },
  dock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 14,
  },
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 18,
    gap: 10,
  },
  head: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontSize: 24, fontFamily: fonts.heavy, letterSpacing: -0.6 },
  close: { fontSize: 16, fontFamily: fonts.medium },
  blurb: { fontSize: 14, fontFamily: fonts.medium, letterSpacing: -0.2, marginBottom: 2 },
  field: {
    borderRadius: 14,
    borderCurve: 'continuous',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    fontFamily: fonts.medium,
  },
  notice: { fontSize: 14, fontFamily: fonts.medium, letterSpacing: -0.1 },
  cta: { marginTop: 4 },
});
