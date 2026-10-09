import { useEffect } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, FadeOut, ReduceMotion } from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useColorScheme } from '@/shared/lib/theme';

import { LottieMascot } from './lottie-mascot';

const EASE = Easing.bezier(0.23, 1, 0.32, 1).factory();

/**
 * The small answer under the options: the mascot and one line, arriving once
 * something is picked.
 *
 * The same moving mascot as every other reaction in the flow. Nothing moves
 * the options above it: the line takes its own room under the list.
 */
export function InlineReaction({
  id,
  text,
  sub,
  style,
}: {
  id: string;
  text: string;
  /** A second, quieter line. */
  sub?: string;
  style?: StyleProp<ViewStyle>;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];

  useEffect(() => {
    track('onboarding_reaction_viewed', { reaction: id, full: false });
  }, [id]);

  return (
    <Animated.View
      accessibilityLiveRegion="polite"
      entering={FadeInDown.duration(360).easing(EASE).reduceMotion(ReduceMotion.System)}
      exiting={FadeOut.duration(140).reduceMotion(ReduceMotion.System)}
      style={[styles.row, { backgroundColor: colors.card }, style]}>
      <View style={styles.art}>
        <LottieMascot size={52} />
      </View>
      {/* Keyed on the reaction, so a new answer swaps the line while the
          mascot beside it keeps playing rather than starting over. */}
      <Animated.View
        key={id}
        entering={FadeIn.duration(220).reduceMotion(ReduceMotion.System)}
        style={styles.copy}>
        <Text style={[styles.text, { color: colors.foreground }]}>{text}</Text>
        {sub != null && <Text style={[styles.sub, { color: meterColors[scheme].caption }]}>{sub}</Text>}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 14,
    paddingVertical: 10,
    paddingLeft: 8,
    paddingRight: 16,
    borderRadius: 18,
    borderCurve: 'continuous',
  },
  art: { width: 52, alignItems: 'center' },
  copy: { flex: 1 },
  text: {
    ...fonts.semibold(15),
    lineHeight: 20,
  },
  sub: {
    ...fonts.medium(13),
    lineHeight: 18,
    marginTop: 2,
  },
});
