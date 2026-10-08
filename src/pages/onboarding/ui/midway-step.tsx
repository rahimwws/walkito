import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, ReduceMotion } from 'react-native-reanimated';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

import { LottieMascot } from './lottie-mascot';

const EASE = Easing.bezier(0.23, 1, 0.32, 1).factory();

/**
 * Halfway: what the flow has learned, read back as a short list.
 *
 * Here because a run of questions with nothing said back reads as a form. The
 * rows are the person's own answers, so the screen proves it was listening and
 * tells them the end is near, in that order.
 */
export function MidwayStep({ title, body, rows }: { title: string; body: string; rows: readonly string[] }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Animated.View entering={FadeInDown.duration(380).easing(EASE).reduceMotion(ReduceMotion.System)} style={styles.art}>
        <LottieMascot size={150} />
      </Animated.View>
      <Animated.Text
        entering={FadeIn.delay(120).duration(300).reduceMotion(ReduceMotion.System)}
        style={[styles.title, { color: colors.foreground }]}>
        {title}
      </Animated.Text>
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        {rows.map((row, i) => (
          <Animated.View
            key={row}
            entering={FadeInDown.delay(220 + i * 110).duration(320).easing(EASE).reduceMotion(ReduceMotion.System)}
            style={styles.row}>
            <View style={[styles.dot, { backgroundColor: PRIMARY }]} />
            <Text style={[styles.rowText, { color: colors.foreground }]}>{row}</Text>
          </Animated.View>
        ))}
      </View>
      <Animated.Text
        entering={FadeIn.delay(300 + rows.length * 110).duration(320).reduceMotion(ReduceMotion.System)}
        style={[styles.body, { color: meter.caption }]}>
        {body}
      </Animated.Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  content: { flexGrow: 1, justifyContent: 'center', paddingBottom: 16, gap: 16 },
  art: { alignSelf: 'center' },
  title: { ...fonts.heavy(28, -0.7), lineHeight: 33, textAlign: 'center' },
  card: { borderRadius: 22, borderCurve: 'continuous', paddingVertical: 8, paddingHorizontal: 18 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  rowText: { ...fonts.semibold(16), lineHeight: 21, flex: 1 },
  body: { ...fonts.regular(16), lineHeight: 22, textAlign: 'center' },
});
