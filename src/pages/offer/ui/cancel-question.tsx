import * as Haptics from 'expo-haptics';
import { useNavigation } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Modal, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { useSheetHandlers, useSheetRoute } from '@/shared/lib/sheet-route';
import { kv } from '@/shared/lib/storage';
import { useColorScheme } from '@/shared/lib/theme';
import { SheetScreen } from '@/shared/ui/sheet';

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

const ROUTE = 'cancel-question';

type Handlers = { answer: (reason: CancelReason) => void };

type Props = {
  visible: boolean;
  /** `null`: closed without an answer. */
  onAnswer: (reason: CancelReason | null) => void;
  /** The host is itself a React Native modal (the plans over Home,
   * `OfferWall`). A native sheet route pushed from inside one dismisses it,
   * so there the question keeps a modal of its own, on the solid card. */
  inModal?: boolean;
};

/**
 * "No charge was made. What stopped you?", after the store's sheet was closed
 * without buying.
 *
 * The first line is the one that matters to somebody who has just seen a
 * payment sheet and backed out of it: nothing was taken. The question under
 * it is the only way to learn why the sheet was closed, which the store never
 * says. An answer is recorded and the sheet goes; it changes no price and
 * offers nothing new (Guideline 5.6), and closing it is an answer too. For
 * "It costs too much" the paywall under it points back to a cheaper way in it
 * was already showing (`OfferPage`), and that is all.
 *
 * The native form sheet route `/sheet/cancel-question`
 * (`CancelQuestionScreen`), answered once it has gone; inside a modal host,
 * a modal of its own (`inModal`).
 */
export function CancelQuestion({ inModal = false, ...props }: Props) {
  return inModal ? <CancelQuestionModal {...props} /> : <CancelQuestionRoute {...props} />;
}

function CancelQuestionRoute({ visible, onAnswer }: Omit<Props, 'inModal'>) {
  const answer = useRef<CancelReason | null>(null);
  useSheetRoute<Handlers>(
    ROUTE,
    visible,
    '/sheet/cancel-question',
    {
      answer: (reason) => {
        answer.current = reason;
      },
    },
    (closedByHost) => {
      const reason = answer.current;
      answer.current = null;
      if (!closedByHost) onAnswer(reason);
    },
  );
  return null;
}

export function CancelQuestionScreen() {
  const handlers = useSheetHandlers<Handlers>(ROUTE);
  const navigation = useNavigation();
  return (
    <SheetScreen>
      <Question
        onAnswer={(reason) => {
          handlers()?.answer(reason);
          navigation.goBack();
        }}
      />
    </SheetScreen>
  );
}

/** The title, the question and the answers, whichever sheet holds them. */
function Question({ onAnswer }: { onAnswer: (reason: CancelReason) => void }) {
  const meter = meterColors[useColorScheme()];
  const t = useT();
  return (
    <View style={styles.question}>
      <View style={styles.head} accessible accessibilityRole="header">
        <Text style={[styles.title, { color: meter.ink }]} maxFontSizeMultiplier={1.3}>
          {t('offer.cancel.title')}
        </Text>
        <Text style={[styles.ask, { color: meter.label }]} maxFontSizeMultiplier={1.3}>
          {t('offer.cancel.question')}
        </Text>
      </View>
      <View style={styles.rows}>
        {REASONS.map(({ reason, label }) => (
          <Pressable
            key={reason}
            accessibilityRole="button"
            onPress={() => {
              void Haptics.selectionAsync();
              onAnswer(reason);
            }}
            style={({ pressed }) => [styles.row, { backgroundColor: meter.iconTile }, pressed && styles.pressed]}>
            <Text style={[styles.rowLabel, { color: meter.ink }]} maxFontSizeMultiplier={1.3}>
              {t(label)}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const IN_MS = 340;
const OUT_MS = 220;
const RISE = 44;

/** The question in a modal of its own, for a host that is a modal (`inModal`):
 * the solid card over a dimmed screen. Mounted apart from `visible`, so the
 * exit has something to play on: see `StreakSheet`, whose transition this
 * is. */
function CancelQuestionModal({ visible, onAnswer }: Omit<Props, 'inModal'>) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  const [mounted, setMounted] = useState(false);
  const progress = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      setMounted(true);
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

  const backdrop = useAnimatedStyle(() => ({ opacity: progress.value }));
  const dock = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: (1 - progress.value) * RISE }],
  }));

  if (!mounted) return null;

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={() => onAnswer(null)}>
      <View style={StyleSheet.absoluteFill}>
        <Animated.View style={[StyleSheet.absoluteFill, styles.scrim, backdrop]} pointerEvents="none" />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('common.close')}
          style={StyleSheet.absoluteFill}
          onPress={() => onAnswer(null)}
        />
        <Animated.View
          style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }, dock]}
          pointerEvents="box-none">
          <ScrollView
            style={[styles.card, { backgroundColor: colors.card }]}
            contentContainerStyle={styles.cardBody}
            bounces={false}
            showsVerticalScrollIndicator={false}>
            <Question onAnswer={onAnswer} />
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scrim: { backgroundColor: 'rgba(0,0,0,0.4)' },
  dock: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', paddingHorizontal: 10 },
  card: { borderRadius: 36, borderCurve: 'continuous', flexGrow: 0, maxHeight: '85%' },
  cardBody: { padding: 16 },
  question: { gap: 8 },
  rows: { gap: 8 },
  head: { alignItems: 'center', gap: 4, paddingTop: 10, paddingBottom: 12, paddingHorizontal: 8 },
  title: { ...fonts.heavy(24, -0.5), textAlign: 'center' },
  ask: { ...fonts.semibold(17), textAlign: 'center' },
  // 56pt tall at least: these are read and tapped by people in their sixties.
  row: { minHeight: 56, borderRadius: 18, borderCurve: 'continuous', justifyContent: 'center', paddingHorizontal: 18, paddingVertical: 12 },
  rowLabel: fonts.semibold(17),
  pressed: { opacity: 0.6 },
});
