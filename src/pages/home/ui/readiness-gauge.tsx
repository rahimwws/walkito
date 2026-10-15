import { BlurMask, Canvas, Circle } from '@shopify/react-native-skia';
import * as Haptics from 'expo-haptics';
import { useIsFocused } from 'expo-router';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

import { ACCESSORY_ART, type AccessoryId } from '../model/accessories';
import {
  BAND_KEYS,
  LEG_KEYS,
  readinessBand,
  type LegState,
  type LegStateId,
  type ReadinessDetails,
  type ReadinessFocus,
  type ReadinessPartKey,
  type ReadinessParts,
} from '../model/readiness';
import { devOpenReadinessInfo, useDevReadiness } from '../model/readiness-dev';
import { PartSheet } from './part-sheet';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import {
  Mascot,
  celebrateRig,
  heartRig,
  idleRig,
  thinkingRig,
  thumbsUpRig,
  walkingRig,
  type MascotHandle,
  type MascotRig,
  type MascotShot,
} from '@/shared/ui/mascot';

/**
 * "Legs ready today", told by Walkito: he stands on a soft aura and says how
 * the legs and feet are this morning in his speech bubble (`legState`: only
 * the body, never the plan or a test), with the score, the band word and the
 * three parts under him. Each part opens its own small sheet (`PartSheet`):
 * the real value, where it sits in its range, the last seven days. The score
 * opens a tinier one with the three parts and their weights.
 *
 * His pose and move follow what the bubble says. A tap is a little
 * reaction with a haptic and a "hi" line. Colour says which band or which part,
 * never how good it is. Every motion runs once per focus, nothing loops while
 * Home is hidden, and Reduce Motion gets everything in place at once.
 */

const MOTION_MS = 900;
const TAP_LINE_MS = 2600;

export type ReadinessGaugeProps = {
  score: number | null;
  parts: ReadinessParts;
  /** What the parts were made from, for the sheet that explains them. */
  details: ReadinessDetails;
  /** How the legs are this morning, for the bubble and his pose. */
  leg: LegState;
  /** What he wears, earned by the longest streak (`accessoriesFor`). */
  accessories?: readonly AccessoryId[];
  /** Marks Walkito and his bubble for the Home tour's first stop. */
  stageRef?: (view: View | null) => void;
};

export function ReadinessGauge(props: ReadinessGaugeProps) {
  return <Stage {...props} />;
}

// ── Shared pieces ──────────────────────────────────────────────────────────

type Pose = { rig: MascotRig; enter: MascotShot; tap: MascotShot };

/**
 * Walkito for each state of the legs. Soreness is met warmly (the heart),
 * never sadly; a big day yesterday walks; a short night stays idle; a good
 * morning is cheered; not checked in yet, he wonders.
 */
const POSE: Record<LegStateId, Pose> = {
  unknown: { rig: thinkingRig, enter: 'nod', tap: 'wave' },
  sore: { rig: heartRig, enter: 'nod', tap: 'happy' },
  tender: { rig: heartRig, enter: 'nod', tap: 'happy' },
  calmer: { rig: thumbsUpRig, enter: 'cheer', tap: 'celebrate' },
  worked: { rig: walkingRig, enter: 'nod', tap: 'wave' },
  tired: { rig: idleRig, enter: 'nod', tap: 'happy' },
  achy: { rig: heartRig, enter: 'nod', tap: 'happy' },
  fine: { rig: thumbsUpRig, enter: 'cheer', tap: 'celebrate' },
  fresh: { rig: celebrateRig, enter: 'celebrate', tap: 'cheer' },
};

/** Which accent the aura is tinted with. Never red, and none is "worse". */
const AURA: Record<LegStateId, 'violet' | 'teal' | 'blue' | 'amber' | 'orange'> = {
  unknown: 'violet',
  sore: 'teal',
  tender: 'teal',
  achy: 'teal',
  tired: 'blue',
  worked: 'blue',
  calmer: 'violet',
  fine: 'violet',
  fresh: 'amber',
};

/** 0 to 1 once per focus, after `delay`; 1 at once with Reduce Motion. */
function useFocusIn(delay = 0): SharedValue<number> {
  const focused = useIsFocused();
  const reduceMotion = useReducedMotion();
  const progress = useSharedValue(reduceMotion ? 1 : 0);
  useEffect(() => {
    if (!focused) return;
    if (reduceMotion) {
      progress.value = 1;
      return;
    }
    progress.value = 0;
    progress.value = withDelay(delay, withTiming(1, { duration: MOTION_MS, easing: Easing.out(Easing.cubic) }));
  }, [focused, reduceMotion, progress, delay]);
  return progress;
}

/** A fade and a short rise, once per focus. */
function Rise({ delay = 0, children, style }: { delay?: number; children: ReactNode; style?: object }) {
  const p = useFocusIn(delay);
  const animated = useAnimatedStyle(() => ({ opacity: p.value, transform: [{ translateY: (1 - p.value) * 8 }] }));
  return <Animated.View style={[style, animated]}>{children}</Animated.View>;
}

/**
 * Walkito for today: his pose from the state of the legs, his move a beat
 * after Home lands, and a reaction with a haptic on a tap. Returns the mascot
 * and whether the tap's "hi" is showing.
 */
function useWalkito(leg: LegStateId, size: number, surface: string) {
  const t = useT();
  const focused = useIsFocused();
  const reduceMotion = useReducedMotion();
  const mascot = useRef<MascotHandle>(null);
  const pose = POSE[leg];
  const [tapped, setTapped] = useState(false);
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!focused || reduceMotion) return undefined;
    const timer = setTimeout(() => mascot.current?.play(pose.enter), 380);
    return () => clearTimeout(timer);
  }, [focused, reduceMotion, pose.enter]);

  useEffect(() => () => {
    if (tapTimer.current) clearTimeout(tapTimer.current);
  }, []);

  const onPress = () => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    mascot.current?.play(pose.tap);
    setTapped(true);
    if (tapTimer.current) clearTimeout(tapTimer.current);
    tapTimer.current = setTimeout(() => setTapped(false), TAP_LINE_MS);
  };

  const node = (
    <View accessible accessibilityRole="button" accessibilityLabel={t('home.readiness.mascotHint')}>
      <Mascot
        ref={mascot}
        rig={pose.rig}
        size={size}
        surface={surface}
        paused={!focused}
        easterEgg={false}
        onPress={onPress}
      />
    </View>
  );
  return { node, tapped };
}

/** A soft round glow in the state's accent, fading in once per focus. */
function Aura({ size, leg }: { size: number; leg: LegStateId }) {
  const scheme = useColorScheme();
  const tint = accents[scheme][AURA[leg]].fill;
  const p = useFocusIn();
  const style = useAnimatedStyle(() => ({ opacity: p.value * (scheme === 'dark' ? 0.55 : 0.4), transform: [{ scale: 0.8 + p.value * 0.2 }] }));
  return (
    <Animated.View pointerEvents="none" style={[{ position: 'absolute', width: size, height: size }, style]}>
      <Canvas style={{ width: size, height: size }}>
        <Circle cx={size / 2} cy={size / 2} r={size * 0.22} color={tint}>
          <BlurMask blur={size * 0.08} style="normal" />
        </Circle>
      </Canvas>
    </Animated.View>
  );
}

/** The number and /100. */
function Score({ score, size }: { score: number; size: number }) {
  const ink = meterColors[useColorScheme()];
  return (
    <View style={styles.numberRow}>
      <Text style={[fonts.heavy(size, -1.5), styles.tabular, { color: ink.ink }]}>{score}</Text>
      <Text style={[styles.outOf, { color: ink.unit }]}>/100</Text>
    </View>
  );
}

function BandWord({ score, centred = false }: { score: number; centred?: boolean }) {
  const t = useT();
  const ink = meterColors[useColorScheme()];
  return (
    <Text style={[styles.bandWord, centred && styles.centredText, { color: ink.ink }]}>
      {t(BAND_KEYS[readinessBand(score)])}
    </Text>
  );
}

function EmptyAsk({ centred = false }: { centred?: boolean }) {
  const t = useT();
  const ink = meterColors[useColorScheme()];
  return (
    <Text style={[styles.empty, centred && styles.centredText, { color: ink.label }]}>{t('home.readiness.empty')}</Text>
  );
}

// ── The three parts ────────────────────────────────────────────────────────

type Part = {
  key: ReadinessPartKey;
  icon: FluentName;
  accent: 'orange' | 'violet' | 'teal';
  value: number | null;
  a11y: string;
};

function useParts(parts: ReadinessParts): Part[] {
  const t = useT();
  return [
    {
      key: 'pain',
      icon: 'heart',
      accent: 'orange',
      value: parts.pain,
      a11y: parts.pain == null ? t('home.readiness.partPainMissing') : t('home.readiness.partPain', { value: parts.pain }),
    },
    {
      key: 'sleep',
      icon: 'moon',
      accent: 'violet',
      value: parts.sleep,
      a11y: parts.sleep == null ? t('home.readiness.partSleepMissing') : t('home.readiness.partSleep', { value: parts.sleep }),
    },
    {
      key: 'steps',
      icon: 'foot',
      accent: 'teal',
      value: parts.steps,
      a11y: parts.steps == null ? t('home.readiness.partStepsMissing') : t('home.readiness.partSteps', { value: parts.steps }),
    },
  ];
}

function PartValue({ part, size }: { part: Part; size: number }) {
  const ink = meterColors[useColorScheme()];
  return <Text style={[fonts.heavy(size), styles.tabular, { color: ink.ink }]}>{part.value}</Text>;
}

/** The three parts as small round pills under the score: an icon and its
 * value, nothing else, centred. The labels are read out, not printed. Each
 * opens the sheet on its own part. */
function PartPills({ parts, onOpen }: { parts: Part[]; onOpen: (part: ReadinessPartKey) => void }) {
  const t = useT();
  const scheme = useColorScheme();
  return (
    <View style={styles.pills}>
      {parts.map((part) => (
        <Pressable
          key={part.key}
          accessibilityRole="button"
          accessibilityLabel={part.a11y}
          accessibilityHint={t('home.readiness.partHint')}
          hitSlop={6}
          onPress={() => onOpen(part.key)}
          style={({ pressed }) => [styles.pill, { backgroundColor: palette[scheme].card }, pressed && styles.pressed]}>
          <FluentIcon name={part.icon} size={16} />
          {part.value == null ? (
            <Text style={[fonts.heavy(15), { color: meterColors[scheme].caption }]}>–</Text>
          ) : (
            <PartValue part={part} size={15} />
          )}
        </Pressable>
      ))}
    </View>
  );
}

/**
 * Which part the sheet is open on, or null. Opening says so to analytics by
 * the part's name only. A dev link (`?readinessInfo=`) opens it untracked.
 */
function useInfoSheet() {
  const dev = useDevReadiness();
  const [focus, setFocus] = useState<ReadinessFocus | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!__DEV__ || dev.info == null) return;
    setFocus(dev.info);
    setVisible(true);
    devOpenReadinessInfo(null);
  }, [dev.info]);

  const open = (part: ReadinessFocus) => {
    void Haptics.selectionAsync();
    track('readiness_info_opened', { part });
    setFocus(part);
    setVisible(true);
  };
  return { focus, visible, open, close: () => setVisible(false) };
}

/** A speech bubble with a small tail at the bottom, towards Walkito. */
function Bubble({ children, style }: { children: ReactNode; style?: object }) {
  const scheme = useColorScheme();
  const fill = palette[scheme].card;
  return (
    <View style={style}>
      <View style={[styles.bubble, { backgroundColor: fill }]}>{children}</View>
      <View style={[styles.tail, styles.tailBottom, { backgroundColor: fill }]} />
    </View>
  );
}

const STAGE_MASCOT = 150;
const STAGE_AURA = 260;

/**
 * Where each accessory sits around him, in his own square: the shoe badge at
 * his feet on the left, the medal at his side, the trophy at his feet on the
 * right, the crown up by his shoulder. Small and a little tilted, so they read
 * as things he has rather than as icons on a row.
 */
const ACCESSORY_SIZE = 30;
const ACCESSORY_SPOT: Record<AccessoryId, object> = {
  shoe: { left: -30, bottom: 6, transform: [{ rotate: '-12deg' }] },
  medal: { left: -38, top: 54, transform: [{ rotate: '-6deg' }] },
  trophy: { right: -32, bottom: 4, transform: [{ rotate: '8deg' }] },
  crown: { right: -26, top: 28, transform: [{ rotate: '14deg' }] },
};

/** His accessories, landing one after another a beat after he does. Once per
 * focus, nothing loops; decorative, so screen readers pass over them. */
function Accessories({ ids }: { ids: readonly AccessoryId[] }) {
  return (
    <>
      {ids.map((id, i) => (
        <View key={id} pointerEvents="none" style={[styles.accessory, ACCESSORY_SPOT[id]]}>
          <Rise delay={700 + i * 90}>
            <FluentIcon name={ACCESSORY_ART[id]} size={ACCESSORY_SIZE} />
          </Rise>
        </View>
      ))}
    </>
  );
}

function Stage({ score, parts, details, leg, accessories = [], stageRef }: ReadinessGaugeProps) {
  const t = useT();
  const scheme = useColorScheme();
  const ink = meterColors[scheme];
  const walkito = useWalkito(leg.id, STAGE_MASCOT, palette[scheme].background);
  const items = useParts(parts);
  const info = useInfoSheet();
  return (
    <View>
      <View ref={stageRef} collapsable={false} style={styles.stage}>
        <Aura size={STAGE_AURA} leg={leg.id} />
        <Rise delay={500}>
          <Bubble style={styles.stageBubble}>
            <Text style={[styles.say, styles.centredText, { color: ink.ink }]}>
              {walkito.tapped ? t('home.readiness.sayTap') : t(LEG_KEYS[leg.id])}
            </Text>
          </Bubble>
        </Rise>
        <View style={styles.mascotBox}>
          {walkito.node}
          {accessories.length > 0 && <Accessories ids={accessories} />}
        </View>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={
          score == null
            ? t('home.readiness.empty')
            : t('home.readiness.scoreA11y', { score, band: t(BAND_KEYS[readinessBand(score)]) })
        }
        accessibilityHint={t('home.readiness.partHint')}
        onPress={() => info.open('score')}
        style={({ pressed }) => [styles.centred, pressed && styles.pressed]}>
        {score == null ? (
          <EmptyAsk centred />
        ) : (
          <>
            <Score score={score} size={60} />
            <BandWord score={score} centred />
          </>
        )}
      </Pressable>
      <Rise delay={150}>
        <PartPills parts={items} onOpen={info.open} />
      </Rise>
      <PartSheet
        visible={info.visible}
        focus={info.focus}
        onClose={info.close}
        score={score}
        details={details}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centred: {
    alignItems: 'center',
  },
  centredText: {
    textAlign: 'center',
  },
  tabular: {
    fontVariant: ['tabular-nums'],
  },
  numberRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  outOf: {
    ...fonts.bold(17),
    marginLeft: 4,
  },
  bandWord: {
    ...fonts.bold(19, -0.3),
    marginTop: -2,
  },
  empty: {
    ...fonts.semibold(16),
    lineHeight: 22,
    marginTop: 4,
  },
  // What Walkito says.
  say: {
    ...fonts.bold(16, -0.2),
    lineHeight: 22,
  },
  // Speech bubble
  bubble: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  tail: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 3,
    transform: [{ rotate: '45deg' }],
  },
  tailBottom: {
    bottom: -5,
    alignSelf: 'center',
  },
  stage: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: STAGE_AURA - 20,
    marginTop: 4,
  },
  // A set width: sized to its text, a long line ran past the edge instead
  // of wrapping.
  stageBubble: {
    marginBottom: 6,
    width: 300,
    maxWidth: '100%',
  },
  mascotBox: {
    width: STAGE_MASCOT,
    height: STAGE_MASCOT,
  },
  accessory: {
    position: 'absolute',
  },
  pressed: { opacity: 0.6 },
  pills: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginTop: 14 },
  pill: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, height: 34, borderRadius: 17 },
});
