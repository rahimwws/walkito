import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, ReduceMotion } from 'react-native-reanimated';

import { TRIAL_REMINDER_DAYS } from '@/features/home-offer';
import { colors as tokens, fonts, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button } from '@/shared/ui/button';

import { FootCheckResult } from './foot-check-result';

/**
 * The screen before the plans, for somebody the plans will offer a free
 * trial: her own Foot Check, then the week is free and the three things that
 * make it safe. Then the plans, with the price.
 *
 * It used to be two screens, the second a whole page about the reminder
 * ("We'll remind you 2 days before your trial ends", an alarm clock, how to
 * cancel). A page about cancelling, before she has agreed to
 * anything, primes the fear it answers; the reminder is now one line on this
 * screen and one row in the plans' timeline ("Day 5: We remind you").
 *
 * Every promise here is one the app keeps: the store itself says this
 * customer gets the trial before the screen is shown (`trialDays`), and the
 * reminder is laid when the trial is bought (`remindBeforeTrialEnds`).
 */

const STAGGER_MS = 90;

const rise = (i: number) =>
  FadeInDown.delay(180 + STAGGER_MS * i)
    .duration(380)
    .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
    .reduceMotion(ReduceMotion.System);

export type TrialGiftProps = {
  /** First name, or empty. */
  name: string;
  /** The trial's length in days. */
  days: number;
};

/** Her result, then the week is free and the three things that make it safe. */
export function TrialGift({ name, days }: TrialGiftProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const t = useT();

  const promises = [
    t('offer.plans.noPaymentToday'),
    t('offer.trial.promiseRemind', { count: TRIAL_REMINDER_DAYS }),
    Platform.OS === 'android' ? t('offer.trial.promiseCancelAndroid') : t('offer.trial.promiseCancel'),
  ];

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
      <Animated.View entering={FadeIn.delay(80).duration(320).reduceMotion(ReduceMotion.System)}>
        <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
          {name !== '' ? t('offer.trial.giftTitleNamed', { name, count: days }) : t('offer.trial.giftTitle', { count: days })}
        </Text>
      </Animated.View>

      <Animated.View entering={rise(0)}>
        <FootCheckResult />
      </Animated.View>

      <View style={[styles.promises, { backgroundColor: colors.card }]}>
        {promises.map((promise, i) => (
          <Animated.View key={promise} entering={rise(i + 1)} style={styles.promise}>
            <View style={[styles.tick, { backgroundColor: tokens.ink }]}>
              <HugeiconsIcon icon={Tick02Icon} size={16} color={tokens.onInk} strokeWidth={3} />
            </View>
            <Text style={[styles.promiseText, { color: colors.foreground }]} maxFontSizeMultiplier={1.4}>
              {promise}
            </Text>
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  );
}

/** The button at the foot of the screen: it says what the tap is for. */
export function TrialNext({ onPress }: { onPress: () => void }) {
  const t = useT();
  return <Button label={t('offer.trial.giftCta')} onPress={onPress} />;
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  page: { flexGrow: 1, justifyContent: 'center', gap: 22, paddingVertical: 12 },
  title: { ...fonts.heavy(32, -0.9), lineHeight: 36, textAlign: 'center' },
  promises: {
    borderRadius: 24,
    borderCurve: 'continuous',
    paddingVertical: 18,
    paddingHorizontal: 18,
    gap: 16,
  },
  promise: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  tick: { width: 26, height: 26, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  promiseText: { flex: 1, ...fonts.bold(17, -0.2), lineHeight: 22 },
});
