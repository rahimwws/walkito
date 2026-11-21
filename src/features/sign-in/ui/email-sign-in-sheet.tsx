import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
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

import {
  EMAIL_CODE_LENGTH,
  confirmEmailCode,
  resendEmailCode,
  sendEmailCode,
  signInWithEmail,
  type AuthFailure,
  type EmailCodeMode,
  type EmailSignIn,
} from '@/entities/session';
import { track } from '@/shared/lib/analytics';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

/**
 * The email door into an account: an address, then the code mailed to it.
 *
 * Two modes. `create`, after the first purchase: the code makes the anonymous
 * account from first launch this person's own, or, for an address that already
 * has an account, signs in to it (and says so). `sign-in`, from "Already have
 * an account": a code for the account the address has, and "Use a password
 * instead" for App Store review, whose account has no mailbox to take a code.
 *
 * A bottom sheet rather than a full-screen modal, matching `StreakSheet` — two
 * fields and a button do not deserve the whole display. The mount is owned
 * here rather than driven off `visible` for the reason spelled out in that
 * component: a modal torn down the instant the flag clears leaves nothing for
 * the exit to play on. Closing it always works and goes back to the screen
 * under it, which keeps its other door.
 */

const BLUR = 28;
const IN_MS = 340;
const OUT_MS = 220;
const RISE = 44;
const RADIUS = 28;
/** Supabase sends one auth email a minute per address. */
const RESEND_AFTER_S = 60;

type Stage = 'address' | 'code' | 'password';

/** Development only: open on a stage with a made-up address, nothing sent,
 * so each one can be looked at on the simulator (the setup page's
 * `?authPreview=`). */
export type EmailSheetPreview = { stage: Stage; email: string; existing?: boolean };

/** How long after the modal unmounts before `onHidden`: the native dismissal
 * finishing. */
const HIDDEN_SETTLE_MS = 80;

type Props = {
  visible: boolean;
  onClose: () => void;
  /** `create` after the first purchase; `sign-in` for someone coming back. */
  mode?: EmailCodeMode;
  /** Signed in. The address is handed back so the profile can be greeted by
   * it and support has somewhere to reply; `created` when the code made the
   * anonymous account theirs. */
  onSignedIn: (email: string, created: boolean) => void;
  /** A failure that was not the person's: no network, mail not sent, a
   * server down. The screen under the sheet may then offer a way on. */
  onFailure?: (failure: Exclude<AuthFailure, 'user'>) => void;
  preview?: EmailSheetPreview | null;
  /**
   * The sheet's own modal is gone from the screen. A host that closes
   * something under this sheet when it signs in (the intro's "Sign in"
   * sheet) waits for this: closing both modals at once left this one's
   * native host on screen on iPadOS 27, invisible and taking every touch
   * (App Review, 1.0.3 (37)).
   */
  onHidden?: () => void;
};

export function EmailSignInSheet({ visible, onClose, mode = 'sign-in', onSignedIn, onFailure, preview, onHidden }: Props) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const accent = accents[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  const [stage, setStage] = useState<Stage>('address');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  /** Where the code went and what it does: set once one is sent. */
  const [sent, setSent] = useState<{ email: string; mode: EmailCodeMode } | null>(null);
  const [busy, setBusy] = useState(false);
  /** One request at a time, whatever the render saw: the code field submits
   * itself on its last digit, and autofill can deliver that twice. */
  const inFlight = useRef(false);
  const [notice, setNotice] = useState<string | null>(null);
  /** Seconds until another code may be asked for, for any address: Supabase
   * keeps one minute between codes per account, and a different address on the
   * same anonymous account waits it out too. Kept across stages and closes. */
  const [wait, setWait] = useState(0);

  const [mounted, setMounted] = useState(false);
  /** 0 away, 1 arrived. One number drives the blur and the card, so they cannot
   * arrive or leave at different times.
   *
   * Named `progress` rather than `t`, which is the translator in every file
   * that renders text — see `StreakSheet`, where the same rename happened. */
  const progress = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      // A frame late: the modal has to exist before the transition starts, or
      // the first frames play against nothing.
      const frame = requestAnimationFrame(() => {
        progress.value = withTiming(1, {
          duration: IN_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        });
      });
      return () => cancelAnimationFrame(frame);
    }

    progress.value = withTiming(
      0,
      { duration: OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System },
      (finished) => {
        if (finished) runOnJS(setMounted)(false);
      },
    );
    return undefined;
  }, [visible, progress]);

  // Told once the modal has left, a beat after the unmount so UIKit has
  // finished dismissing it before anything beneath is touched.
  const wasMounted = useRef(false);
  const hiddenRef = useRef(onHidden);
  hiddenRef.current = onHidden;
  useEffect(() => {
    if (mounted) {
      wasMounted.current = true;
      return undefined;
    }
    if (!wasMounted.current) return undefined;
    wasMounted.current = false;
    const timer = setTimeout(() => hiddenRef.current?.(), HIDDEN_SETTLE_MS);
    return () => clearTimeout(timer);
  }, [mounted]);

  useEffect(() => {
    if (!__DEV__ || preview == null) return;
    setStage(preview.stage);
    setEmail(preview.email);
    setSent(preview.stage === 'code' ? { email: preview.email, mode: preview.existing ? 'sign-in' : mode } : null);
    setWait(preview.stage === 'code' ? 42 : 0);
    setNotice(null);
  }, [preview, mode]);

  // The minute between codes, on every stage.
  useEffect(() => {
    if (wait <= 0) return undefined;
    const timer = setTimeout(() => setWait((left) => left - 1), 1000);
    return () => clearTimeout(timer);
  }, [wait]);

  /** Runs one request, never two at once. */
  const once = async (request: () => Promise<void>) => {
    if (inFlight.current) return;
    inFlight.current = true;
    setNotice(null);
    setBusy(true);
    try {
      await request();
    } finally {
      inFlight.current = false;
      setBusy(false);
    }
  };

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

  const backdrop = useAnimatedStyle(() => ({ opacity: progress.value }));
  const dock = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: (1 - progress.value) * RISE + keyboard.height.value }],
  }));

  const fail = (message: string, failure: AuthFailure, stageName: 'code' | 'server') => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    setNotice(message);
    track('sign_in_failed', { method: 'email', stage: stageName, failure });
    if (failure !== 'user') onFailure?.(failure);
  };

  const finish = (result: Extract<EmailSignIn, { status: 'signed-in' }>) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setStage('address');
    setCode('');
    setPassword('');
    setSent(null);
    onSignedIn(result.email, result.created);
  };

  const send = () => {
    if (email.trim().length === 0) return;
    // The address a code already went to, inside the minute: back to that code
    // rather than asking again and being refused.
    if (sent != null && wait > 0 && email.trim().toLowerCase() === sent.email) {
      setNotice(null);
      setStage('code');
      return;
    }
    if (wait > 0) return;
    void once(async () => {
      const result = await sendEmailCode(email, mode);
      if (result.status === 'failed') {
        fail(result.message, result.failure, 'code');
        return;
      }
      track('sign_in_code_sent', { resend: false, existing: result.mode === 'sign-in' && mode === 'create' });
      setSent({ email: result.email, mode: result.mode });
      setCode('');
      setWait(RESEND_AFTER_S);
      setStage('code');
    });
  };

  const resend = () => {
    if (sent == null || wait > 0) return;
    void once(async () => {
      const result = await resendEmailCode(sent.email, sent.mode);
      if (result.status === 'failed') {
        fail(result.message, result.failure, 'code');
        return;
      }
      track('sign_in_code_sent', { resend: true, existing: result.mode === 'sign-in' && mode === 'create' });
      // A resend can find the address taken since: it then signs in.
      setSent({ email: result.email, mode: result.mode });
      setWait(RESEND_AFTER_S);
    });
  };

  const verify = (typed: string) => {
    if (sent == null || typed.length < EMAIL_CODE_LENGTH) return;
    void once(async () => {
      const result = await confirmEmailCode(sent.email, typed, sent.mode);
      if (result.status === 'failed') {
        fail(result.message, result.failure, 'code');
        return;
      }
      finish(result);
    });
  };

  const signInWithPassword = () => {
    if (email.trim().length === 0 || password.length === 0) return;
    void once(async () => {
      const result = await signInWithEmail(email, password);
      if (result.status === 'failed') {
        fail(result.message, result.failure, 'server');
        return;
      }
      finish(result);
    });
  };

  const dismiss = () => {
    if (busy) return;
    setNotice(null);
    setPassword('');
    setCode('');
    setStage('address');
    onClose();
  };

  if (!mounted) return null;

  const title =
    stage === 'code'
      ? t('onboarding.email.codeTitle')
      : mode === 'create' && stage === 'address'
        ? t('onboarding.email.createTitle')
        : t('onboarding.email.title');
  const blurb =
    stage === 'code' && sent != null
      ? t('onboarding.email.codeBlurb', { email: sent.email })
      : stage === 'password'
        ? t('onboarding.email.blurb')
        : mode === 'create'
          ? t('onboarding.email.createBlurb')
          : t('onboarding.email.signInBlurb');
  const field = [styles.field, { backgroundColor: colors.background, color: meter.ink }];

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={dismiss}>
      {/* Driven by hand rather than by `entering`/`exiting` builders: an
          entering builder that fails to run strands its subject at opacity 0,
          and an exiting builder cannot run inside a modal whose visibility is
          what removed it. */}
      <View style={styles.fill}>
        <Animated.View style={[styles.fill, backdrop]} pointerEvents="none">
          <BlurView tint={scheme === 'dark' ? 'dark' : 'light'} intensity={BLUR} style={styles.fill} />
          <View style={[styles.fill, styles.wash]} />
        </Animated.View>

        {/* Tapping away closes it, back to the screen under it and its other
            door. */}
        <Pressable accessibilityRole="button" accessibilityLabel={t('common.close')} style={styles.fill} onPress={dismiss} />

        <Animated.View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }, dock]} pointerEvents="box-none">
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <View style={styles.head}>
              <Text style={[styles.title, { color: colors.foreground }]}>{title}</Text>
              <Pressable accessibilityRole="button" accessibilityLabel={t('common.close')} onPress={dismiss} hitSlop={12}>
                <Text style={[styles.close, { color: meter.caption }]}>{t('common.close')}</Text>
              </Pressable>
            </View>

            <Text style={[styles.blurb, { color: meter.caption }]}>{blurb}</Text>

            {/* An address that already had an account: the code signs in to
                it rather than making a new one. Said, not discovered later. */}
            {stage === 'code' && mode === 'create' && sent?.mode === 'sign-in' && (
              <Text style={[styles.blurb, { color: meter.label }]}>{t('onboarding.email.existing')}</Text>
            )}

            {stage !== 'code' && (
              <TextInput
                style={field}
                value={email}
                onChangeText={setEmail}
                placeholder={t('onboarding.email.address')}
                placeholderTextColor={meter.unit}
                // `username` rather than `emailAddress`, so a password manager
                // offers the pair and not just the address.
                textContentType={stage === 'password' ? 'username' : 'emailAddress'}
                autoComplete="email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                editable={!busy}
                autoFocus
                returnKeyType={stage === 'password' ? 'next' : 'send'}
                onSubmitEditing={stage === 'address' ? send : undefined}
              />
            )}

            {stage === 'password' && (
              <TextInput
                style={field}
                value={password}
                onChangeText={setPassword}
                placeholder={t('onboarding.email.password')}
                placeholderTextColor={meter.unit}
                textContentType="password"
                autoComplete="current-password"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                editable={!busy}
                returnKeyType="go"
                onSubmitEditing={signInWithPassword}
              />
            )}

            {stage === 'code' && (
              <TextInput
                // The digits spaced wide; the placeholder set like any other.
                style={[field, code.length > 0 && styles.codeField]}
                value={code}
                onChangeText={(next) => {
                  const digits = next.replace(/\D/g, '').slice(0, EMAIL_CODE_LENGTH);
                  setCode(digits);
                  // Filled in, by hand or from the keyboard's suggestion: checked
                  // at once, no extra tap.
                  if (digits.length === EMAIL_CODE_LENGTH) verify(digits);
                }}
                placeholder={t('onboarding.email.code')}
                placeholderTextColor={meter.unit}
                textContentType="oneTimeCode"
                autoComplete="one-time-code"
                keyboardType="number-pad"
                maxLength={EMAIL_CODE_LENGTH}
                editable={!busy}
                autoFocus
              />
            )}

            {notice != null ? <Text style={[styles.notice, { color: accent.amber.fill }]}>{notice}</Text> : null}

            <View style={styles.cta}>
              {stage === 'address' && (
                <PrimaryButton
                  label={
                    busy
                      ? t('onboarding.email.sending')
                      : wait > 0 && email.trim().toLowerCase() !== sent?.email
                        ? t('onboarding.email.resendIn', { seconds: wait })
                        : t('onboarding.email.sendCode')
                  }
                  onPress={send}
                  disabled={busy || email.trim().length === 0 || (wait > 0 && email.trim().toLowerCase() !== sent?.email)}
                />
              )}
              {stage === 'code' && (
                <PrimaryButton
                  label={busy ? t('onboarding.email.verifying') : t('onboarding.email.verify')}
                  onPress={() => verify(code)}
                  disabled={busy || code.length < EMAIL_CODE_LENGTH}
                />
              )}
              {stage === 'password' && (
                <PrimaryButton
                  label={busy ? t('onboarding.email.submitting') : t('onboarding.email.submit')}
                  onPress={signInWithPassword}
                  disabled={busy || email.trim().length === 0 || password.length === 0}
                />
              )}
            </View>

            {stage === 'code' && (
              <View style={styles.links}>
                <Link
                  label={wait > 0 ? t('onboarding.email.resendIn', { seconds: wait }) : t('onboarding.email.resend')}
                  disabled={busy || wait > 0}
                  onPress={resend}
                />
                <Link
                  label={t('onboarding.email.changeAddress')}
                  disabled={busy}
                  onPress={() => {
                    setNotice(null);
                    setCode('');
                    setStage('address');
                  }}
                />
              </View>
            )}
            {/* The review account has no mailbox: its way in is a password.
                Only for someone coming back, never on the screen that makes a
                new account. */}
            {mode === 'sign-in' && stage !== 'code' && (
              <View style={styles.links}>
                <Link
                  label={stage === 'password' ? t('onboarding.email.useCode') : t('onboarding.email.usePassword')}
                  disabled={busy}
                  onPress={() => {
                    setNotice(null);
                    setStage(stage === 'password' ? 'address' : 'password');
                  }}
                />
              </View>
            )}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

function Link({ label, onPress, disabled }: { label: string; onPress: () => void; disabled?: boolean }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
      hitSlop={8}
      style={({ pressed }) => [styles.link, pressed && { opacity: 0.6 }]}>
      <Text style={[styles.linkText, { color: disabled ? meter.unit : meter.caption }]}>{label}</Text>
    </Pressable>
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
  title: fonts.heavy(24, -0.6),
  close: fonts.medium(16),
  blurb: { ...fonts.medium(14, -0.2), marginBottom: 2 },
  field: {
    borderRadius: 14,
    borderCurve: 'continuous',
    paddingHorizontal: 16,
    paddingVertical: 14,
    ...fonts.medium(16),
  },
  notice: fonts.medium(14, -0.1),
  cta: { marginTop: 4 },
  codeField: { ...fonts.bold(24, 6), textAlign: 'center' },
  links: { alignItems: 'center', gap: 2 },
  link: { paddingVertical: 8 },
  linkText: fonts.medium(15, -0.2),
});
