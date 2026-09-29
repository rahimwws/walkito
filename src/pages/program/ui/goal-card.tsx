import { BlurView } from 'expo-blur';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import { useEffect, type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, ReduceMotion, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';

import type { OutcomeView } from '../model/plan-view';

/**
 * The big goal, said once — on glass.
 *
 * A pane of the system's Liquid Glass (a blur on older iOS). On it, what the
 * person came for, with the one word that matters set as a chip — "Tennis
 * [pain-free]" — then the step being worked in their own numbers, and a line
 * across every step to the goal, one share each, marked where one ends.
 */
export function GoalCard({ view, tone }: { view: OutcomeView; tone: { fill: string; track: string } }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();


  const content = (
    <>
      <Text style={[styles.eyebrow, { color: meter.caption }]}>{t('pages.plan.goalEyebrow')}</Text>
      <View style={styles.headline} accessible accessibilityRole="header">
        {words(view.headline.before).map((word, i) => (
          <Text key={`b${i}`} style={[styles.word, { color: colors.foreground }]}>
            {word}
          </Text>
        ))}
        {view.headline.lead.length > 0 && (
          <View style={[styles.lead, { backgroundColor: tone.track }]}>
            <Text style={[styles.word, { color: tone.fill }]}>{view.headline.lead}</Text>
          </View>
        )}
        {words(view.headline.after).map((word, i) => (
          <Text key={`a${i}`} style={[styles.word, { color: colors.foreground }]}>
            {word}
          </Text>
        ))}
      </View>
      <Text style={[styles.detail, { color: meter.caption }]}>{view.detail}</Text>
      <ProgressLine value={view.fill} steps={view.total} tone={tone} />
      <View style={styles.values}>
        <Text style={[styles.value, styles.step, { color: colors.foreground }]} numberOfLines={2}>
          {view.step}
        </Text>
        {view.now.length > 0 && <Text style={[styles.value, { color: tone.fill }]}>{view.now}</Text>}
      </View>
    </>
  );

  return (
    // Hidden from session recordings: the goal's current value is a pain
    // count or a test result.
    <View style={styles.wrap} {...REPLAY_MASK}>
      <Pane>{content}</Pane>
    </View>
  );
}

/** Words to lay out one by one, so the chip can wrap among them. */
function words(text: string): string[] {
  return text.split(' ').filter((word) => word.length > 0);
}

/**
 * The goal's line: a track marked where each step ends, a fill with a gloss
 * along its top, and a marker at the current value that glows in the step's
 * colour — the one point on the line that is "you, now".
 */
function ProgressLine({ value, steps, tone }: { value: number; steps: number; tone: { fill: string; track: string } }) {
  const ticks = Array.from({ length: Math.max(0, steps - 1) }, (_, i) => (i + 1) / steps);
  const fill = useSharedValue(0);
  useEffect(() => {
    fill.value = withTiming(Math.max(0, Math.min(1, value)), {
      duration: 800,
      easing: Easing.out(Easing.cubic),
      reduceMotion: ReduceMotion.System,
    });
  }, [value, fill]);
  const bar = useAnimatedStyle(() => ({ width: `${Math.max(fill.value, 0.04) * 100}%` }));
  /** The marker rides the end of the fill. */
  const knob = useAnimatedStyle(() => ({ left: `${Math.max(fill.value, 0.04) * 100}%` }));

  return (
    <View style={styles.line}>
      <View style={styles.track}>
        <Animated.View style={[styles.fill, { backgroundColor: tone.fill }, bar]}>
          <View style={styles.gloss} />
        </Animated.View>
        {ticks.map((at) => (
          <View key={at} style={[styles.tick, { left: `${at * 100}%` }]} />
        ))}
      </View>
      <Animated.View style={[styles.knob, { backgroundColor: tone.fill, shadowColor: tone.fill }, knob]}>
        <View style={styles.knobCore} />
      </Animated.View>
    </View>
  );
}

/** Liquid Glass where the system has it, a blur where it does not. */
function Pane({ children }: { children: ReactNode }) {
  if (isLiquidGlassAvailable()) {
    return (
      <GlassView glassEffectStyle="regular" style={styles.card}>
        {children}
      </GlassView>
    );
  }
  return (
    <View style={[styles.card, styles.fallback]}>
      <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'relative',
  },
  card: {
    borderRadius: 28,
    borderCurve: 'continuous',
    padding: 20,
    gap: 8,
    overflow: 'hidden',
  },
  fallback: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.18)',
  },
  eyebrow: {
    fontSize: 12,
    fontFamily: fonts.bold,
    letterSpacing: 0.6,
  },
  headline: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    columnGap: 7,
    rowGap: 4,
  },
  word: {
    fontSize: 26,
    lineHeight: 34,
    fontFamily: fonts.heavy,
    letterSpacing: -0.7,
  },
  lead: {
    paddingHorizontal: 10,
    borderRadius: 12,
    borderCurve: 'continuous',
  },
  detail: {
    fontSize: 15,
    lineHeight: 21,
    fontFamily: fonts.medium,
  },
  line: {
    height: 24,
    justifyContent: 'center',
    marginTop: 12,
  },
  track: {
    height: 12,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.09)',
  },
  tick: {
    position: 'absolute',
    top: 3,
    bottom: 3,
    width: 2,
    marginLeft: -1,
    borderRadius: 1,
    backgroundColor: 'rgba(255,255,255,0.22)',
  },
  fill: {
    height: '100%',
    borderRadius: 6,
    overflow: 'hidden',
  },
  /** The fill's top edge catching the light. */
  gloss: {
    position: 'absolute',
    top: 2,
    left: 6,
    right: 6,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
  knob: {
    position: 'absolute',
    width: 22,
    height: 22,
    marginLeft: -11,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.9,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
  },
  knobCore: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  values: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
    marginTop: 4,
  },
  step: {
    flex: 1,
  },
  value: {
    fontSize: 15,
    fontFamily: fonts.bold,
  },
});
