import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  REFERRAL_CODE_LENGTH,
  REFERRAL_DISCOUNT_PERCENT,
  normalise,
  redeem,
  type RedeemResult,
} from '@/entities/referral';
import { compAccess, refreshCompAccess } from '@/entities/purchase';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

/** Every one of these is an ordinary thing a person can do, so none is
 * phrased as an error the user caused. */
const MESSAGE: Readonly<Record<Exclude<RedeemResult, 'ok'>, Key>> = {
  unknown: 'onboarding.referral.unknown',
  own: 'onboarding.referral.own',
  already: 'onboarding.referral.already',
  unavailable: 'onboarding.referral.unavailable',
  failed: 'onboarding.referral.failed',
};

/** Long enough for the confirmation to be read before the sheet goes. */
const CONFIRM_MS = 900;

/**
 * "Have a code?" — the invite code, from under the plans.
 *
 * The same field takes an access code, which opens the app outright
 * (`supabase/migrations/0016_access_codes.sql`).
 *
 * A code that works refreshes the referral status, which turns this paywall
 * into the invited one with the store's discounted price; the sheet only has
 * to say so and get out of the way.
 */
export function CodeSheet({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();
  const input = useRef<TextInput>(null);

  const [value, setValue] = useState('');
  const [note, setNote] = useState<string | null>(null);
  const [good, setGood] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!visible) return;
    setNote(null);
    setGood(false);
    const timer = setTimeout(() => input.current?.focus(), 300);
    return () => clearTimeout(timer);
  }, [visible]);

  const apply = async () => {
    if (busy || value.length !== REFERRAL_CODE_LENGTH) return;
    setBusy(true);
    const result = await redeem(value);
    setBusy(false);
    if (result !== 'ok') {
      setGood(false);
      setNote(t(MESSAGE[result]));
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      return;
    }
    // An access code answers `ok` too, and unlocks the app instead of the
    // invite price. The account's access says which it was; once it is in,
    // the root guard takes the paywall away by itself.
    const before = compAccess();
    await refreshCompAccess();
    const unlocked = !before && compAccess();
    setGood(true);
    setNote(
      unlocked
        ? t('onboarding.referral.unlocked')
        : t('onboarding.referral.applied', { percent: REFERRAL_DISCOUNT_PERCENT }),
    );
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setTimeout(onClose, CONFIRM_MS);
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose} statusBarTranslucent>
      <KeyboardAvoidingView behavior="padding" style={styles.fill}>
        <Pressable accessibilityRole="button" accessibilityLabel={t('common.close')} style={styles.scrim} onPress={onClose} />
        <View style={[styles.sheet, { backgroundColor: colors.card, paddingBottom: Math.max(insets.bottom, 16) + 8 }]}>
          <Text style={[styles.title, { color: colors.foreground }]}>{t('onboarding.referral.title')}</Text>
          <Text style={[styles.blurb, { color: meter.caption }]}>
            {t('onboarding.referral.blurb', { percent: REFERRAL_DISCOUNT_PERCENT })}
          </Text>
          <TextInput
            ref={input}
            value={value}
            onChangeText={(next) => {
              setValue(normalise(next));
              setNote(null);
            }}
            onSubmitEditing={() => void apply()}
            placeholder={'-'.repeat(REFERRAL_CODE_LENGTH)}
            placeholderTextColor={meter.unit}
            selectionColor={accents[scheme].orange.fill}
            autoCapitalize="characters"
            autoCorrect={false}
            autoComplete="off"
            spellCheck={false}
            returnKeyType="done"
            maxLength={REFERRAL_CODE_LENGTH}
            style={[styles.input, { color: colors.foreground }]}
          />
          <Text style={[styles.note, { color: note == null ? 'transparent' : good ? accents[scheme].teal.fill : meter.caption }]}>
            {note ?? ' '}
          </Text>
          <PrimaryButton
            label={busy ? t('onboarding.cta.checking') : t('onboarding.cta.applyCode')}
            disabled={busy || value.length !== REFERRAL_CODE_LENGTH}
            onPress={() => void apply()}
          />
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
  input: { ...fonts.heavy(40, 10), textAlign: 'center', marginLeft: 10, marginTop: 6 },
  note: { ...fonts.medium(14), textAlign: 'center', minHeight: 20 },
});
