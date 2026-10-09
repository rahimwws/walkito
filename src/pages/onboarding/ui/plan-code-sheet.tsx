import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { redeemPlanCode } from '@/features/plan-code';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import type { PlanCodeParams } from '@/shared/lib/plan-code';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

/** `WK-` and six characters, typed with or without the dash. */
const MIN_LENGTH = 6;
const MAX_LENGTH = 12;
/** Long enough for the confirmation to be read before the sheet goes. */
const CONFIRM_MS = 900;

/**
 * "Got a code from ChatGPT or Claude?" — from under the intro's button.
 *
 * The same sheet as the paywall's invite code (`pages/offer/ui/code-sheet.tsx`),
 * for a different code: the plan code an assistant hands out. A valid one
 * answers the questions the assistant already asked; anything else says so
 * inline and leaves the field open.
 */
export function PlanCodeSheet({
  visible,
  onClose,
  onRedeemed,
}: {
  visible: boolean;
  onClose: () => void;
  onRedeemed: (params: PlanCodeParams) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();
  const input = useRef<TextInput>(null);

  const [value, setValue] = useState('');
  const [note, setNote] = useState<string | null>(null);
  const [good, setGood] = useState(false);

  useEffect(() => {
    if (!visible) return;
    setNote(null);
    setGood(false);
    const timer = setTimeout(() => input.current?.focus(), 300);
    return () => clearTimeout(timer);
  }, [visible]);

  const ready = value.trim().length >= MIN_LENGTH && !good;

  const apply = () => {
    if (!ready) return;
    const params = redeemPlanCode(value);
    if (params == null) {
      setGood(false);
      setNote(t('aiCode.invalid'));
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      return;
    }
    setGood(true);
    setNote(t('aiCode.applied'));
    onRedeemed(params);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setTimeout(onClose, CONFIRM_MS);
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose} statusBarTranslucent>
      <KeyboardAvoidingView behavior="padding" style={styles.fill}>
        <Pressable accessibilityRole="button" accessibilityLabel={t('common.close')} style={styles.scrim} onPress={onClose} />
        <View style={[styles.sheet, { backgroundColor: colors.card, paddingBottom: Math.max(insets.bottom, 16) + 8 }]}>
          <Text style={[styles.title, { color: colors.foreground }]}>{t('aiCode.sheetTitle')}</Text>
          <Text style={[styles.blurb, { color: meter.caption }]}>{t('aiCode.sheetBlurb')}</Text>
          <TextInput
            ref={input}
            value={value}
            onChangeText={(next) => {
              setValue(next.toUpperCase());
              setNote(null);
            }}
            onSubmitEditing={apply}
            placeholder={t('aiCode.placeholder')}
            placeholderTextColor={meter.unit}
            selectionColor={accents[scheme].orange.fill}
            autoCapitalize="characters"
            autoCorrect={false}
            autoComplete="off"
            spellCheck={false}
            returnKeyType="done"
            maxLength={MAX_LENGTH}
            style={[styles.input, { color: colors.foreground }]}
          />
          <Text
            accessibilityLiveRegion="polite"
            style={[styles.note, { color: note == null ? 'transparent' : good ? accents[scheme].teal.fill : meter.caption }]}>
            {note ?? ' '}
          </Text>
          <PrimaryButton label={t('aiCode.apply')} disabled={!ready} onPress={apply} />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
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
  blurb: { ...fonts.regular(16), lineHeight: 22, textAlign: 'center' },
  input: { ...fonts.heavy(34, 4), textAlign: 'center', marginTop: 6 },
  note: { ...fonts.medium(14), textAlign: 'center', minHeight: 20 },
});
