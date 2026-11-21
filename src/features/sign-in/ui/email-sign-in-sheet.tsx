import * as Haptics from 'expo-haptics';
import { useNavigation } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Modal, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
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
import { CHROME_MAX_FONT_SCALE, colors, fonts, radius, space, target } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useSheetHandlers, useSheetRoute } from '@/shared/lib/sheet-route';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { SheetScreen } from '@/shared/ui/sheet';

/**
 * The email door into an account: an address, then the code mailed to it.
 *
 * Two modes. `create`, after the first purchase: the code makes the anonymous
 * account from first launch this person's own, or, for an address that already
 * has an account, signs in to it (and says so). `sign-in`, from "Already have
 * an account": a code for the account the address has, and "Use a password
 * instead" for App Store review, whose account has no mailbox to take a code.
 *
 * Drawn as the native form sheet route `/email-sign-in`. Where the door sits
 * inside a React Native modal (the pass checkout, in the cancel flow's and the
 * offers' modals) a route would open under that modal, so there it is a plain
 * solid bottom sheet of its own (`inline`). Closing it always works and goes
 * back to the screen under it, which keeps its other door.
 */

const ROUTE = 'email-sign-in';
/** Supabase sends one auth email a minute per address. */
const RESEND_AFTER_S = 60;

type Stage = 'address' | 'code' | 'password';

/** Development only: open on a stage with a made-up address, nothing sent,
 * so each one can be looked at on the simulator (the setup page's
 * `?authPreview=`). */
export type EmailSheetPreview = { stage: Stage; email: string; existing?: boolean };

/** How long after the inline modal closes before `onHidden` on Android, where
 * there is no `onDismiss`: the slide finishing. */
const HIDDEN_SETTLE_MS = 320;

type FormProps = {
  /** `create` after the first purchase; `sign-in` for someone coming back. */
  mode: EmailCodeMode;
  onSignedIn: (email: string, created: boolean) => void;
  onFailure?: (failure: Exclude<AuthFailure, 'user'>) => void;
  preview?: EmailSheetPreview | null;
  onClose: () => void;
  /** A request is out: closing waits for it. */
  onBusy?: (busy: boolean) => void;
};

type Props = {
  visible: boolean;
  onClose: () => void;
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
   * The sheet is gone from the screen. A host that closes something under
   * this sheet when it signs in (the intro's "Sign in" sheet) waits for this:
   * closing both at once left this one's native host on screen on iPadOS 27,
   * invisible and taking every touch (App Review, 1.0.3 (37)).
   */
  onHidden?: () => void;
  /** Drawn as its own solid sheet rather than the route, for a host that is
   * itself inside a React Native modal. */
  inline?: boolean;
};

type Handlers = Pick<FormProps, 'mode' | 'onSignedIn' | 'onFailure' | 'preview'>;

export function EmailSignInSheet({
  visible,
  onClose,
  mode = 'sign-in',
  onSignedIn,
  onFailure,
  preview,
  onHidden,
  inline = false,
}: Props) {
  const handlers: Handlers = { mode, onSignedIn, onFailure, preview };
  useSheetRoute<Handlers>(ROUTE, visible && !inline, '/email-sign-in', handlers, () => {
    onClose();
    onHidden?.();
  });
  if (!inline) return null;
  return (
    <InlineSheet visible={visible} onClose={onClose} onHidden={onHidden}>
      <EmailSignInForm {...handlers} onClose={onClose} />
    </InlineSheet>
  );
}

/** The route's screen. Opened without a host it signs in and closes. */
export function EmailSignInScreen() {
  const handlers = useSheetHandlers<Handlers>(ROUTE);
  const navigation = useNavigation();
  const [busy, setBusy] = useState(false);
  const host = handlers();

  useEffect(() => {
    navigation.setOptions({ gestureEnabled: !busy });
  }, [busy, navigation]);

  return (
    <SheetScreen>
      <EmailSignInForm
        mode={host?.mode ?? 'sign-in'}
        preview={host?.preview}
        onFailure={(failure) => handlers()?.onFailure?.(failure)}
        onSignedIn={(email, created) => {
          const current = handlers();
          if (current == null) navigation.goBack();
          else current.onSignedIn(email, created);
        }}
        onClose={() => navigation.goBack()}
        onBusy={setBusy}
      />
    </SheetScreen>
  );
}

function InlineSheet({
  visible,
  onClose,
  onHidden,
  children,
}: {
  visible: boolean;
  onClose: () => void;
  onHidden?: () => void;
  children: React.ReactNode;
}) {
  const insets = useSafeAreaInsets();
  const t = useT();
  const hiddenRef = useRef(onHidden);
  hiddenRef.current = onHidden;
  const wasVisible = useRef(false);

  useEffect(() => {
    if (visible) {
      wasVisible.current = true;
      return undefined;
    }
    if (!wasVisible.current || Platform.OS === 'ios') return undefined;
    wasVisible.current = false;
    const timer = setTimeout(() => hiddenRef.current?.(), HIDDEN_SETTLE_MS);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      statusBarTranslucent
      onRequestClose={onClose}
      onDismiss={() => {
        if (!wasVisible.current) return;
        wasVisible.current = false;
        hiddenRef.current?.();
      }}>
      <KeyboardAvoidingView behavior="padding" style={styles.inlineRoot}>
        <Pressable accessibilityRole="button" accessibilityLabel={t('common.close')} style={styles.scrim} onPress={onClose} />
        <View style={[styles.inlineCard, { paddingBottom: Math.max(insets.bottom, 16) + 8 }]}>{children}</View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

function EmailSignInForm({ mode, onSignedIn, onFailure, preview, onClose, onBusy }: FormProps) {
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
   * keeps one minute between codes per account. */
  const [wait, setWait] = useState(0);

  const busyRef = useRef(onBusy);
  busyRef.current = onBusy;
  useEffect(() => {
    busyRef.current?.(busy);
  }, [busy]);

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
    onClose();
  };

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
  const field = styles.field;

  return (
    <View style={styles.form}>
      <View style={styles.head}>
        <Text style={styles.title} accessibilityRole="header">
          {title}
        </Text>
        <Pressable accessibilityRole="button" onPress={dismiss} hitSlop={8} style={styles.close}>
          <Text style={styles.closeLabel} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
            {t('common.close')}
          </Text>
        </Pressable>
      </View>

      <Text style={styles.blurb}>{blurb}</Text>

      {/* An address that already had an account: the code signs in to
          it rather than making a new one. Said, not discovered later. */}
      {stage === 'code' && mode === 'create' && sent?.mode === 'sign-in' && (
        <Text style={styles.existing}>{t('onboarding.email.existing')}</Text>
      )}

      {stage !== 'code' && (
        <TextInput
          style={field}
          value={email}
          onChangeText={setEmail}
          placeholder={t('onboarding.email.address')}
          placeholderTextColor={colors.text3}
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
          placeholderTextColor={colors.text3}
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
          placeholderTextColor={colors.text3}
          textContentType="oneTimeCode"
          autoComplete="one-time-code"
          keyboardType="number-pad"
          maxLength={EMAIL_CODE_LENGTH}
          editable={!busy}
          autoFocus
        />
      )}

      {notice != null ? <Text style={styles.notice}>{notice}</Text> : null}

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
  );
}

function Link({ label, onPress, disabled }: { label: string; onPress: () => void; disabled?: boolean }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
      hitSlop={4}
      style={({ pressed }) => [styles.link, pressed && { opacity: 0.6 }]}>
      <Text style={[styles.linkText, disabled && styles.linkDisabled]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inlineRoot: { flex: 1, justifyContent: 'flex-end' },
  scrim: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.3)' },
  inlineCard: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderCurve: 'continuous',
    paddingHorizontal: space.screen,
    paddingTop: 24,
  },
  form: { gap: 14 },
  head: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  title: { ...fonts.bold(28, -0.4), color: colors.text, flex: 1 },
  close: { minHeight: target.min, minWidth: target.min, justifyContent: 'center', alignItems: 'flex-end', marginTop: -10 },
  closeLabel: { ...fonts.semibold(17), color: colors.accent },
  blurb: { ...fonts.regular(19), color: colors.text2 },
  existing: { ...fonts.medium(17), color: colors.text },
  field: {
    minHeight: 56,
    borderRadius: radius.button,
    borderCurve: 'continuous',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.surface2,
    color: colors.text,
    ...fonts.regular(19),
  },
  notice: { ...fonts.medium(17), color: colors.warn },
  cta: { marginTop: 4 },
  codeField: { ...fonts.bold(26, 6), textAlign: 'center' },
  links: { alignItems: 'center', gap: 2 },
  link: { minHeight: target.min, justifyContent: 'center', paddingHorizontal: 8 },
  linkText: { ...fonts.semibold(17), color: colors.accent, textAlign: 'center' },
  linkDisabled: { color: colors.text3 },
});
