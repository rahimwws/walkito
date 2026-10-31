import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeInDown,
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
} from 'react-native-reanimated';

import { accents, fonts, meterColors, palette, raised, type AccentName } from '@/shared/config';
import { readableOn } from '@/shared/lib/color';
import { settle } from '@/shared/lib/motion';
import { useColorScheme } from '@/shared/lib/theme';
import { Card3D } from '@/shared/ui/card-3d';
import type { FluentName } from '@/shared/ui/fluent-icon';
import { useSplashRevealed } from '@/shared/ui/splash';

import { GoldText } from './glow';
import { IntroTile } from './intro-tile';

/** One step of the plan's start: its emoji and accent, when, what, a few words. */
export type IntroRailStep = { art: FluentName; tone: AccentName; when: string; title: string; body: string };

/** A step's tile, and the ledge under it. */
const TILE = 52;
const TILE_LIP = 4;
/** Between two steps, which the link runs through. */
const ROW_GAP = 22;
/** The link from one tile down to the next: its width, and the air it leaves
 * at each end so it never touches a tile. */
const LINK = 4;
const LINK_AIR = 6;
/** The links fill one after another, once the steps have risen into place. */
const FILL_START_MS = 520;
const FILL_STEP_MS = 460;
const FILL_MS = 420;
const STAGGER_MS = 80;

const rise = (i: number) =>
  FadeInDown.delay(STAGGER_MS * i)
    .duration(360)
    .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
    .reduceMotion(ReduceMotion.System);

/**
 * How the plan starts, as a short path on a raised card: each step's emoji on
 * a tile tinted its colour, and a link down to the next that fills once, top
 * to bottom, as the card arrives. It plays once and stops; under Reduce
 * Motion every link is already full.
 */
export function IntroRail({ title, steps }: { title: string; steps: readonly IntroRailStep[] }) {
  return (
    <Card3D material="solid" size="lg" padding={18} contentStyle={styles.card}>
      <GoldText style={styles.title}>{title}</GoldText>
      <View style={styles.rail}>
        {steps.map((step, i) => (
          <RailRow key={step.title} step={step} index={i} nextTone={steps[i + 1]?.tone ?? null} />
        ))}
      </View>
    </Card3D>
  );
}

function RailRow({ step, index, nextTone }: { step: IntroRailStep; index: number; nextTone: AccentName | null }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const reduced = useReducedMotion();
  const revealed = useSplashRevealed();
  const tone = accents[scheme][step.tone].fill;

  const fill = useSharedValue(reduced ? 1 : 0);
  const started = useRef(false);
  useEffect(() => {
    if (nextTone == null || started.current) return;
    if (reduced) {
      started.current = true;
      fill.value = 1;
      return;
    }
    // The paywall can be the first screen at launch: the path fills once it
    // can be seen.
    if (!revealed) return;
    started.current = true;
    fill.value = withDelay(FILL_START_MS + index * FILL_STEP_MS, settle(1, FILL_MS));
  }, [nextTone, reduced, revealed, index, fill]);
  const grow = useAnimatedStyle(() => ({ transform: [{ scaleY: fill.value }] }));

  return (
    <Animated.View entering={rise(index + 1)} style={styles.row}>
      {nextTone != null && (
        <View pointerEvents="none" style={[styles.link, { backgroundColor: meter.track }]}>
          <Animated.View
            style={[
              styles.linkFill,
              {
                experimental_backgroundImage: `linear-gradient(180deg, ${tone} 0%, ${accents[scheme][nextTone].fill} 100%)`,
              },
              grow,
            ]}
          />
        </View>
      )}
      <IntroTile art={step.art} tone={step.tone} size={TILE} />
      <View style={styles.copy}>
        <Text style={[styles.when, { color: readableOn(tone, raised[scheme].surface) }]} numberOfLines={1}>
          {step.when}
        </Text>
        <Text style={[styles.rowTitle, { color: palette[scheme].foreground }]} numberOfLines={2}>
          {step.title}
        </Text>
        <Text style={[styles.body, { color: meter.caption }]} numberOfLines={2}>
          {step.body}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: { gap: 18 },
  title: { alignSelf: 'center' },
  rail: { gap: ROW_GAP },
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 14 },
  /** Under the tile, through the gap, to just above the next tile: the row may
   * be taller than its tile when the title wraps, so it is measured from the
   * row's own bottom. */
  link: {
    position: 'absolute',
    left: (TILE - LINK) / 2,
    top: TILE + TILE_LIP + LINK_AIR,
    bottom: -(ROW_GAP - LINK_AIR),
    width: LINK,
    borderRadius: LINK / 2,
    overflow: 'hidden',
  },
  linkFill: { flex: 1, transformOrigin: 'center top' },
  copy: { flex: 1, gap: 1, paddingTop: 1 },
  when: { ...fonts.heavy(11, 0.6), textTransform: 'uppercase' },
  rowTitle: { ...fonts.heavy(17, -0.3), lineHeight: 21 },
  body: { ...fonts.semibold(14), lineHeight: 18 },
});
