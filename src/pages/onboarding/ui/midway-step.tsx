import * as Haptics from 'expo-haptics';
import { useEffect, useRef, type ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions } from 'react-native';
import Animated, { FadeIn, ReduceMotion } from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import {
  Mascot,
  celebrateRig,
  playMascotSound,
  preloadMascotSounds,
  type MascotHandle,
} from '@/shared/ui/mascot';

import { PassportFirstStamp, STAMP_INK } from './foot-passport';

/** He moves once the screen has slid in and the stamp has landed. */
const ENTER_MS = 420;
/** From the start of `celebrate` to the moment he leaves the ground, where its
 * own sound cue sits (`shared/ui/mascot/mascot.tsx`). The cheer and the tap
 * go off there. */
const LEAP_MS = 140;
/** The stamp's width: most of a narrow phone, never a poster on a wide one. */
const STAMP_MIN = 200;
const STAMP_MAX = 250;
const STAMP_SHARE = 0.62;

export type MidwayStepProps = {
  title: string;
  /** What he says, printed on the stamp: `onboarding.coach.midway`, the name
   * already in. */
  line: string;
  /**
   * Whether this visit is the one that celebrates. The page passes true once
   * a run: back from an edit, or back from the next screen, he only nods,
   * so the cheer is heard once however often the passport is opened.
   */
  celebrate: boolean;
  /** The facts so far (`PassportCard`), under the stamp. */
  children: ReactNode;
};

/**
 * Halfway: the Foot Passport, open on its first stamp.
 *
 * Here because a run of questions with nothing said back reads as a form. The
 * stamp marks the halfway point (cream paper, a coral panel, Walkito large on
 * it, "Halfway there" and No. 001), and under it is everything so far, in
 * their own answers, any of it a tap away from being changed: the screen
 * proves it was listening and lets them put it right before the plan is built
 * on it.
 *
 * The figure on the stamp is the live mascot in the stamp's inks, and he marks
 * the halfway point himself: their effort, never anything on the card, so it
 * is the same jump whatever the card says.
 */
export function MidwayStep({ title, line, celebrate, children }: MidwayStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const { width } = useWindowDimensions();
  const stampWidth = Math.round(Math.min(Math.max(width * STAMP_SHARE, STAMP_MIN), STAMP_MAX));

  const mascot = useRef<MascotHandle>(null);
  // Read once: the page may mark the celebration spent while this is still
  // up, and that must not turn the jump in flight into a nod.
  const first = useRef(celebrate);
  useEffect(() => {
    const cheering = first.current;
    if (cheering) preloadMascotSounds(['cheer', 'boing']);
    const timers = [
      setTimeout(() => mascot.current?.play(cheering ? 'celebrate' : 'nod'), ENTER_MS),
    ];
    if (cheering) {
      timers.push(
        setTimeout(() => {
          playMascotSound('cheer');
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }, ENTER_MS + LEAP_MS),
      );
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Animated.Text
        entering={FadeIn.duration(300).reduceMotion(ReduceMotion.System)}
        accessibilityRole="header"
        style={[styles.title, { color: colors.foreground }]}>
        {title}
      </Animated.Text>
      <PassportFirstStamp
        width={stampWidth}
        title={line}
        number={1}
        art={(size) => (
          <Mascot
            ref={mascot}
            rig={celebrateRig}
            size={size}
            paper={STAMP_INK.figure}
            ink={STAMP_INK.outline}
          />
        )}
      />
      <Text style={[styles.firstStamp, { color: meter.label }]}>{t('onboarding.passport.firstStamp')}</Text>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  content: { flexGrow: 1, justifyContent: 'center', paddingTop: 8, paddingBottom: 16, gap: 16 },
  title: { ...fonts.heavy(28, -0.7), lineHeight: 33 },
  /** Under the stamp, as the line under a stamp in an album is. */
  firstStamp: { ...fonts.bold(15, -0.1), textAlign: 'center', marginTop: -4 },
});
