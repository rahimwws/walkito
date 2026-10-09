import Mail01Icon from '@hugeicons/core-free-icons/Mail01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import Animated, { Easing, FadeInDown, ReduceMotion } from 'react-native-reanimated';

import { setProfileEmail } from '@/entities/profile';
import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

/** Enough of an address to send to: something, an @, a dot after it. */
const LOOKS_LIKE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * "Send your plan to your email?" — once the plan is paid for.
 *
 * Optional, and skipped for anyone whose address came with Apple or Google
 * sign-in. The address is stored on the phone and beside the anonymous
 * account on the server (`setProfileEmail` → `save_email_contact`), which is
 * what lets the welcome and the first fortnight's emails reach a person who
 * never made an account. Asked after the purchase rather than before the
 * paywall: before it, every field is a reason to stop.
 */
export function EmailStep({ onDone }: { onDone: () => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const [value, setValue] = useState('');
  const valid = LOOKS_LIKE_EMAIL.test(value.trim());

  const send = () => {
    if (!valid) return;
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setProfileEmail(value.trim(), 'onboarding');
    track('setup_email_saved');
    onDone();
  };

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={0} style={styles.root}>
      <View style={styles.top}>
        <Animated.View
          entering={FadeInDown.duration(380).easing(Easing.bezier(0.23, 1, 0.32, 1).factory()).reduceMotion(ReduceMotion.System)}
          style={[styles.badge, { backgroundColor: 'rgba(139,92,246,0.18)' }]}>
          <HugeiconsIcon icon={Mail01Icon} size={26} color={PRIMARY} strokeWidth={2} />
        </Animated.View>
        <Text style={[styles.title, { color: colors.foreground }]}>{t('setup.email.title')}</Text>
        <View style={[styles.field, { backgroundColor: colors.card, borderColor: valid ? PRIMARY : 'transparent' }]}>
          <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={t('setup.email.placeholder')}
            placeholderTextColor={meter.unit}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="send"
            onSubmitEditing={send}
            style={[styles.input, { color: colors.foreground }]}
          />
        </View>
        <Text style={[styles.note, { color: meter.caption }]}>{t('setup.email.note')}</Text>
      </View>

      <View style={styles.bar}>
        <PrimaryButton label={t('setup.email.send')} disabled={!valid} onPress={send} />
        <Pressable
          accessibilityRole="button"
          onPress={() => {
            Haptics.selectionAsync();
            track('setup_email_skipped');
            onDone();
          }}
          hitSlop={8}
          style={({ pressed }) => [styles.later, pressed && { opacity: 0.6 }]}>
          <Text style={[styles.laterText, { color: meter.caption }]}>{t('setup.save.later')}</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  top: { flex: 1, justifyContent: 'center', gap: 14 },
  badge: {
    width: 56,
    height: 56,
    borderRadius: 18,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { ...fonts.heavy(28, -0.7), lineHeight: 33 },
  field: {
    height: 58,
    borderRadius: 18,
    borderCurve: 'continuous',
    borderWidth: 1.5,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  input: { ...fonts.semibold(18, -0.2), height: 58 },
  note: { ...fonts.medium(14), lineHeight: 19 },
  bar: { paddingTop: 12, gap: 4 },
  later: { alignItems: 'center', paddingTop: 12, paddingBottom: 4 },
  laterText: fonts.semibold(15, -0.2),
});
