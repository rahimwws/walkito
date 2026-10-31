import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { requestNotificationAccess } from '@/entities/notifications';
import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { Mascot, type MascotHandle } from '@/shared/ui/mascot';
import { settle } from '@/shared/lib/motion';

import { rigFor } from './coach-rigs';

/** The app's own icon, so the mock banner is the real thing at notification
 * size rather than an illustration of one. The 150 px copy, not `icon.png`:
 * that one is app.json's 1254 px source for the home-screen icon, and a
 * require of it shipped its 1.1 MB again inside the bundle to draw 38 pt. */
const APP_ICON = require('@assets/icon-small.webp');

/** The mock banner drops in after this long, over this long. */
const BANNER_DELAY_MS = 260;
const BANNER_DROP_MS = 480;
/** When the banner has landed, from the screen's arrival: the coach pokes at
 * it then (the page times his move from this). */
export const BANNER_LANDS_MS = BANNER_DELAY_MS + BANNER_DROP_MS;

/** Walkito with his alarm clock and bell, under the banner. */
const HERO = 200;
const HERO_SHORT = 150;
/** Below this window height he is the smaller size. */
const SHORT_WINDOW = 700;
/** The CTA reaches 16pt from the screen's edges rather than the page's 24. */
const CTA_BLEED = 8;

export type NotifyStepProps = {
  name: string;
  /** Null until the sheet has been answered; false means declined, which is a
   * perfectly good outcome the flow has to carry on from. */
  granted: boolean | null;
  onAnswered: (granted: boolean) => void;
  onNext: () => void;
  /** Room the coach takes in the top-right corner, kept clear by the heading. */
  speakerInset?: number;
};

/**
 * The notification ask.
 *
 * iOS gives an app exactly one chance to show the system dialog, so this
 * screen exists to make sure that chance is spent on someone who already knows
 * what they will get. Less said, more shown: the heading, the banner they will
 * get, and Walkito holding up his alarm clock and bell as it lands. The three
 * promises it used to list under the banner were reading nobody did.
 *
 * The banner is a mock, not a screenshot: it drops in the way a real one does,
 * holds, then settles. Showing the thing being asked for is the whole
 * argument, and a static picture of a notification reads as an illustration
 * where a moving one reads as a preview.
 *
 * He is this step's own (`coachEnter` has him as the hero here, so the coach
 * in the corner stands aside): he shows the clock as the banner lands, and a
 * yes and a no get the same nod, since allowing is not a win. Silent.
 */
export function NotifyStep({ name, granted, onAnswered, onNext, speakerInset = 0 }: NotifyStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();

  const [busy, setBusy] = useState(false);
  const answered = granted != null;

  const mascot = useRef<MascotHandle>(null);
  useEffect(() => {
    const timer = setTimeout(() => mascot.current?.play('present'), BANNER_LANDS_MS);
    return () => clearTimeout(timer);
  }, []);

  const ask = async () => {
    if (busy || answered) return;
    setBusy(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const result = await requestNotificationAccess();
    setBusy(false);
    // A no is a fine answer, so it gets a light tap rather than the warning
    // buzz of something gone wrong.
    if (result) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    else Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    mascot.current?.play('nod');
    onAnswered(result);
  };

  return (
    <View style={styles.wrap}>
      <View style={{ paddingRight: speakerInset }}>
        <Text style={[styles.title, { color: colors.foreground }]}>
          {name.trim().length > 0
            ? t('onboarding.notify.askNamed', { name: name.trim() })
            : t('onboarding.notify.ask')}
        </Text>
      </View>

      <Banner />

      <View style={styles.hero}>
        <Mascot
          ref={mascot}
          rig={rigFor('reminder')}
          size={height < SHORT_WINDOW ? HERO_SHORT : HERO}
          surface={colors.background}
        />
      </View>

      <View style={[styles.actions, { marginBottom: Math.max(insets.bottom, 16) }]}>
        {/* "Continue", and no "Not now": the same rule App Review applied to
            the Health ask (guideline 5.1.1(iv)) holds for every permission.
            The screen explains, the first press always opens the system
            dialog, and whatever is answered there the same button carries on. */}
        <Button3D
          label={busy ? t('onboarding.notify.opening') : t('onboarding.cta.continue')}
          onPress={answered ? onNext : ask}
          loading={busy}
          size="xl"
          docked
          style={styles.cta}
        />
        {/* What the notifications are for, offers included, said before the
            system asks: an offer push needs this consent (guideline 4.5.4). */}
        {granted !== false && (
          <Text style={[styles.consent, { color: meter.unit }]}>{t('onboarding.notify.consent')}</Text>
        )}
        {granted === false && (
          <Text style={[styles.skipText, { color: meter.unit, textAlign: 'center' }]}>
            {t('onboarding.notify.declined')}
          </Text>
        )}
      </View>
    </View>
  );
}

/**
 * A notification, arriving the way one does.
 *
 * Drops from above with a little overshoot, then breathes once — enough motion
 * to read as a live thing landing on the screen rather than as a card in a
 * layout, and not so much that it becomes a toy.
 */
function Banner() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const drop = useSharedValue(0);
  const pulse = useSharedValue(0);

  useEffect(() => {
    drop.value = withDelay(BANNER_DELAY_MS, settle(1, BANNER_DROP_MS));
    pulse.value = withDelay(
      1200,
      withSequence(
        withTiming(1, { duration: 260, easing: Easing.out(Easing.quad), reduceMotion: ReduceMotion.System }),
        withTiming(0, { duration: 420, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.System }),
      ),
    );
  }, [drop, pulse]);

  const style = useAnimatedStyle(() => ({
    opacity: Math.min(drop.value * 1.8, 1),
    transform: [
      { translateY: (1 - drop.value) * -46 },
      { scale: 0.94 + drop.value * 0.06 + pulse.value * 0.02 },
    ],
  }));

  return (
    <Animated.View style={[styles.banner, { backgroundColor: colors.card }, style]}>
      {/* The real icon, not a letter in a box. The whole point of the mock is
          that it looks like the thing the user will actually see on their lock
          screen, and a stand-in glyph is the one detail that gives it away. */}
      <Image source={APP_ICON} style={styles.appIcon} />
      <View style={styles.bannerCopy}>
        <View style={styles.bannerTop}>
          <Text style={[styles.bannerTitle, { color: colors.foreground }]}>
            {t('onboarding.notify.bannerApp')}
          </Text>
          <Text style={[styles.bannerTime, { color: meter.unit }]}>
            {t('onboarding.notify.bannerTime')}
          </Text>
        </View>
        <Text style={[styles.bannerBody, { color: meter.caption }]} numberOfLines={2}>
          {t('onboarding.notify.bannerBody')}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    paddingTop: 8,
  },
  title: {
    ...fonts.bold(28, -0.7),
    lineHeight: 34,
  },
  banner: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderRadius: 22,
    borderCurve: 'continuous',
  },
  appIcon: {
    width: 38,
    height: 38,
    borderRadius: 11,
    borderCurve: 'continuous',
  },
  bannerCopy: {
    flex: 1,
    gap: 2,
  },
  bannerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerTitle: fonts.semibold(15),
  bannerTime: fonts.regular(13),
  bannerBody: {
    ...fonts.regular(14),
    lineHeight: 19,
  },
  /** The room between the banner and the button, with him in the middle of it. */
  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // Headroom for his moves: nothing here clips, but the banner is above.
    paddingTop: 12,
  },
  actions: {
    paddingTop: 16,
    gap: 14,
  },
  cta: {
    marginHorizontal: -CTA_BLEED,
  },
  skipText: fonts.semibold(15),
  consent: { ...fonts.medium(13), lineHeight: 17, textAlign: 'center' },
});
