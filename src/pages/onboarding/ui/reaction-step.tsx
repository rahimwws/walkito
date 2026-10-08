import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, ReduceMotion } from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { LottieMascot } from './lottie-mascot';

const EASE = Easing.bezier(0.23, 1, 0.32, 1).factory();

export type ReactionStepProps = {
  title: string;
  body: string;
  onNext: () => void;
};

/**
 * The flow answering back: the mascot, moving, one heading, one short line.
 *
 * The whole screen is the button, the way the references do it — a reaction
 * is something you read and move past, and a primary button under it would
 * make it look like another question. "Tap to continue" says so at the foot.
 */
export function ReactionStep({ title, body, onNext }: ReactionStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${title} ${body}`}
      accessibilityHint={t('onboarding.react.tap')}
      onPress={() => {
        Haptics.selectionAsync();
        onNext();
      }}
      style={styles.fill}>
      <View style={styles.middle}>
        <Animated.View entering={FadeInDown.duration(420).easing(EASE).reduceMotion(ReduceMotion.System)}>
          <LottieMascot size={220} />
        </Animated.View>
        <Animated.Text
          entering={FadeIn.delay(160).duration(320).reduceMotion(ReduceMotion.System)}
          style={[styles.title, { color: colors.foreground }]}>
          {title}
        </Animated.Text>
        <Animated.Text
          entering={FadeIn.delay(300).duration(320).reduceMotion(ReduceMotion.System)}
          style={[styles.body, { color: meter.caption }]}>
          {body}
        </Animated.Text>
      </View>
      <Animated.View entering={FadeIn.delay(700).duration(400).reduceMotion(ReduceMotion.System)}>
        <Text style={[styles.hint, { color: meter.unit }]}>{t('onboarding.react.tap')}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    paddingBottom: 28,
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    paddingHorizontal: 8,
  },
  title: {
    ...fonts.heavy(28, -0.7),
    lineHeight: 33,
    textAlign: 'center',
    marginTop: 10,
  },
  body: {
    ...fonts.regular(17),
    lineHeight: 24,
    textAlign: 'center',
  },
  hint: {
    ...fonts.semibold(13, 0.6),
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
