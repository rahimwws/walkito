import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Image, Platform, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, ReduceMotion } from 'react-native-reanimated';

import { TRIAL_REMINDER_DAYS } from '@/features/home-offer';
import { filled, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { giftRig, reminderRig } from '@/shared/ui/mascot';

import { GoldText } from './glow';
import { IntroMascot } from './intro-mascot';

/**
 * The two screens before the plans, for somebody the plans will offer a free
 * trial: the week is free, and a reminder comes before it ends. Then the
 * plans, with the price.
 *
 * In place of "how your plan starts" and "what you get every day"
 * (`offer-intro.tsx`), which everybody else still sees. Those two said
 * nothing about the week being free; the word first appeared on the plans,
 * beside the year's price, and of the first twenty people a Meta ad brought
 * there (mostly women over 55), none started the trial. What that reader
 * wants to know before a price is whether she pays today, whether she will be
 * told before she does, and how she gets out. One screen each for the first
 * two, and the third on both.
 *
 * Every promise here is one the app keeps: the store itself says this
 * customer gets the trial before either screen is shown (`trialDays`), and
 * the reminder is laid when the trial is bought (`remindBeforeTrialEnds`).
 */

/** The app's own icon at notification size, as the onboarding's banner uses. */
const APP_ICON = require('@assets/icon-small.webp');

/** Walkito, centred over each screen's words. */
const HERO = 190;
const HERO_SHORT = 140;
/** Below this window height he is the smaller size. */
const SHORT_WINDOW = 700;

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

/** Step one: the week is free, and the three things that make it safe. */
export function TrialGift({ name, days }: TrialGiftProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const t = useT();
  const { height } = useWindowDimensions();

  const promises = [
    t('offer.plans.noPaymentToday'),
    t('offer.trial.promiseRemind', { count: TRIAL_REMINDER_DAYS }),
    Platform.OS === 'android' ? t('offer.trial.promiseCancelAndroid') : t('offer.trial.promiseCancel'),
  ];

  return (
    <View style={styles.page}>
      <View style={styles.hero}>
        <IntroMascot rig={giftRig} shot="present" size={height < SHORT_WINDOW ? HERO_SHORT : HERO} surface={colors.background} />
      </View>

      <Animated.View entering={FadeIn.delay(80).duration(320).reduceMotion(ReduceMotion.System)} style={styles.head}>
        <GoldText style={styles.eyebrow}>{t('offer.trial.eyebrow')}</GoldText>
        <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
          {name !== '' ? t('offer.trial.giftTitleNamed', { name, count: days }) : t('offer.trial.giftTitle', { count: days })}
        </Text>
      </Animated.View>

      <View style={[styles.promises, { backgroundColor: colors.card }]}>
        {promises.map((promise, i) => (
          <Animated.View key={promise} entering={rise(i)} style={styles.promise}>
            <View style={[styles.tick, { backgroundColor: filled[scheme].primary.face }]}>
              <HugeiconsIcon icon={Tick02Icon} size={16} color={filled[scheme].primary.label} strokeWidth={3} />
            </View>
            <Text style={[styles.promiseText, { color: colors.foreground }]} maxFontSizeMultiplier={1.4}>
              {promise}
            </Text>
          </Animated.View>
        ))}
      </View>
    </View>
  );
}

export type TrialReminderProps = {
  days: number;
  /** The store's yearly price, as the reminder itself will quote it. */
  price: string;
};

/**
 * Step two: the reminder, shown as the notification it will be.
 *
 * The banner's words are the real ones (`trialEndingMessage` reads the same
 * two keys), so what is promised here is what arrives on the day.
 */
export function TrialReminder({ days, price }: TrialReminderProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const { height } = useWindowDimensions();

  return (
    <View style={styles.page}>
      <Animated.View entering={FadeIn.delay(80).duration(320).reduceMotion(ReduceMotion.System)}>
        <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
          {t('offer.trial.remindTitle', { count: TRIAL_REMINDER_DAYS })}
        </Text>
      </Animated.View>

      <Animated.View entering={rise(0)} style={[styles.banner, { backgroundColor: colors.card }]}>
        <Image source={APP_ICON} style={styles.appIcon} />
        <View style={styles.bannerCopy}>
          <View style={styles.bannerTop}>
            <Text style={[styles.bannerApp, { color: colors.foreground }]} numberOfLines={1}>
              {t('homeOffer.push.trialEndsTitle', { count: TRIAL_REMINDER_DAYS })}
            </Text>
            <Text style={[styles.bannerWhen, { color: meter.unit }]}>
              {t('offer.trial.dayTitle', { day: days - TRIAL_REMINDER_DAYS })}
            </Text>
          </View>
          <Text style={[styles.bannerBody, { color: meter.caption }]} numberOfLines={4}>
            {t('homeOffer.push.trialEndsBody', { price })}
          </Text>
        </View>
      </Animated.View>

      <View style={styles.hero}>
        <IntroMascot rig={reminderRig} shot="present" size={height < SHORT_WINDOW ? HERO_SHORT : HERO} surface={colors.background} />
      </View>

      <Animated.View entering={rise(2)}>
        <Text style={[styles.how, { color: meter.caption }]} maxFontSizeMultiplier={1.4}>
          {Platform.OS === 'android' ? t('offer.trial.cancelHowAndroid') : t('offer.trial.cancelHow')}
        </Text>
      </Animated.View>
    </View>
  );
}

/** The button at the foot of the two screens. Step one's says what the tap
 * is for. */
export function TrialNext({ first, onPress }: { first: boolean; onPress: () => void }) {
  const t = useT();
  return <Button3D label={t(first ? 'offer.trial.giftCta' : 'offer.continue')} onPress={onPress} size="xl" docked />;
}

const styles = StyleSheet.create({
  page: { flex: 1, gap: 22 },
  hero: { flex: 1, minHeight: HERO_SHORT, alignItems: 'center', justifyContent: 'center' },
  head: { alignItems: 'center', gap: 10 },
  eyebrow: { alignSelf: 'center' },
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
  banner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 14,
    borderRadius: 22,
    borderCurve: 'continuous',
  },
  appIcon: { width: 38, height: 38, borderRadius: 11, borderCurve: 'continuous' },
  bannerCopy: { flex: 1, gap: 3 },
  bannerTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 },
  bannerApp: { flex: 1, ...fonts.semibold(15) },
  bannerWhen: fonts.regular(13),
  bannerBody: { ...fonts.regular(14), lineHeight: 19 },
  how: { ...fonts.medium(15), lineHeight: 21, textAlign: 'center' },
});
