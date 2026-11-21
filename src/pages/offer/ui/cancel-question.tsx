import * as Haptics from 'expo-haptics';
import { Modal, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, fonts, radius, space } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { kv } from '@/shared/lib/storage';

/**
 * The answers, by their analytics values (never renamed: each is a series in
 * `purchase_cancel_reason`). `password` and `ask` were added for this
 * audience: an Apple ID password she does not have to hand, or a purchase she
 * talks over with somebody first, are reasons a sheet gets closed that the
 * first five did not cover.
 */
export type CancelReason = 'subscription' | 'price' | 'charge' | 'try' | 'password' | 'ask' | 'other';

const REASONS: readonly { reason: CancelReason; label: Key }[] = [
  { reason: 'subscription', label: 'offer.cancel.subscription' },
  { reason: 'price', label: 'offer.cancel.price' },
  { reason: 'charge', label: 'offer.cancel.charge' },
  { reason: 'try', label: 'offer.cancel.try' },
  { reason: 'password', label: Platform.OS === 'android' ? 'offer.cancel.passwordAndroid' : 'offer.cancel.password' },
  { reason: 'ask', label: 'offer.cancel.ask' },
  { reason: 'other', label: 'offer.cancel.other' },
];

const ASKED_KEY = 'purchase/cancel-asked';

/**
 * Whether the question is still to be asked, and from this call on it is not.
 * Once per person: asked after every closed sheet it would be the app arguing
 * with a decision.
 */
export function takeCancelQuestion(): boolean {
  if (kv.getBoolean(ASKED_KEY) === true) return false;
  kv.set(ASKED_KEY, true);
  return true;
}

export function devForgetCancelQuestion(): void {
  if (__DEV__) kv.remove(ASKED_KEY);
}

/**
 * "No charge was made. What stopped you?", after the store's sheet was closed
 * without buying.
 *
 * The first line is the one that matters to somebody who has just seen a
 * payment sheet and backed out of it: nothing was taken. The question under
 * it is the only way to learn why the sheet was closed, which the store never
 * says. An answer is recorded and the sheet goes; it changes no price and
 * offers nothing new (Guideline 5.6), and tapping away is an answer too. For
 * "It costs too much" the paywall under it points back to a cheaper way in it
 * was already showing (`OfferPage`), and that is all.
 *
 * A plain solid bottom sheet, not a form sheet route: the paywall it rises
 * over is also drawn inside the offer wall's React Native modal, and a route
 * would open under that modal.
 */
export function CancelQuestion({
  visible,
  onAnswer,
}: {
  visible: boolean;
  /** `null`: closed without an answer. */
  onAnswer: (reason: CancelReason | null) => void;
}) {
  const insets = useSafeAreaInsets();
  const t = useT();

  return (
    <Modal transparent animationType="slide" visible={visible} statusBarTranslucent onRequestClose={() => onAnswer(null)}>
      <View style={styles.root}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('common.close')}
          style={styles.scrim}
          onPress={() => onAnswer(null)}
        />
        <View style={[styles.card, { paddingBottom: Math.max(insets.bottom, 16) + 8 }]}>
          <View style={styles.grabber} />
          <ScrollView contentContainerStyle={styles.content} bounces={false}>
            <View style={styles.head} accessible accessibilityRole="header">
              <Text style={styles.title}>{t('offer.cancel.title')}</Text>
              <Text style={styles.question}>{t('offer.cancel.question')}</Text>
            </View>
            {REASONS.map(({ reason, label }) => (
              <Pressable
                key={reason}
                accessibilityRole="button"
                onPress={() => {
                  void Haptics.selectionAsync();
                  onAnswer(reason);
                }}
                style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
                <Text style={styles.rowLabel}>{t(label)}</Text>
              </Pressable>
            ))}
            <Pressable
              accessibilityRole="button"
              onPress={() => onAnswer(null)}
              style={({ pressed }) => [styles.close, pressed && styles.pressed]}>
              <Text style={styles.closeLabel}>{t('common.close')}</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'flex-end' },
  scrim: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.3)' },
  card: {
    maxHeight: '90%',
    backgroundColor: colors.surface,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderCurve: 'continuous',
  },
  grabber: { alignSelf: 'center', width: 36, height: 5, borderRadius: 3, backgroundColor: colors.separator, marginTop: 8 },
  content: { paddingHorizontal: space.screen, paddingTop: 16, gap: 10 },
  head: { gap: 6, paddingBottom: 8 },
  title: { ...fonts.bold(28, -0.4), color: colors.text },
  question: { ...fonts.regular(19), color: colors.text2 },
  // 56pt tall at least: these are read and tapped by people in their sixties.
  row: {
    minHeight: 56,
    borderRadius: radius.button,
    borderCurve: 'continuous',
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: colors.surface2,
  },
  rowLabel: { ...fonts.semibold(19), color: colors.text },
  close: { minHeight: 56, alignItems: 'center', justifyContent: 'center' },
  closeLabel: { ...fonts.semibold(17), color: colors.accent },
  pressed: { opacity: 0.6 },
});
