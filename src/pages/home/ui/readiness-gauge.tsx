import * as Haptics from 'expo-haptics';
import { useIsFocused } from 'expo-router';
import { useEffect, useState, type ComponentRef, type ReactNode, type Ref } from 'react';
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
import type { TodayReason } from '@/entities/program';
import type { DayStory } from '../model/day-story';
import { storyLine } from './day-story-text';
import { PartSheet } from './part-sheet';
import { WhySheet } from './why-sheet';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';

/**
 * "Legs ready today": one line on how the legs and feet are this morning
 * (`legState`: only the body, never the plan or a test), then the score, the
 * band word and the three parts under it. Each part opens its own small sheet
 * (`PartSheet`): the real value, where it sits in its range, the last seven
 * days. The score opens a tinier one with the three parts and their weights.
 *
 * Colour says which part, never how good it is. Every motion runs once per
 * focus, nothing loops while Home is hidden, and Reduce Motion gets everything
 * in place at once.
 */

const MOTION_MS = 900;

export type ReadinessGaugeProps = {
  score: number | null;
  parts: ReadinessParts;
  /** What the parts were made from, for the sheet that explains them. */
  details: ReadinessDetails;
  /** How the legs are this morning, for the line above the score. */
  leg: LegState;
  /** What Health says about yesterday (`dayStory`), said in that line when
   * the morning's pain has nothing stronger to say. */
  story?: DayStory | null;
  /** What today's plan did about it (`AdjustedDay.reason`), for the line's
   * second sentence. */
  planReason?: TodayReason;
  /** Marks the line and the score for the Home tour's first stop. */
  stageRef?: Ref<ComponentRef<typeof View>>;
};

export function ReadinessGauge(props: ReadinessGaugeProps) {
  return <Stage {...props} />;
}

// ── Shared pieces ──────────────────────────────────────────────────────────

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

/** Pain states that outrank anything Health says: what the person told us
 * this morning is always the first thing the line answers. */
const PAIN_SAYS: readonly LegStateId[] = ['sore', 'calmer', 'tender'];

function Stage({ score, parts, details, leg, story = null, planReason = null, stageRef }: ReadinessGaugeProps) {
  const t = useT();
  const language = useLanguage();
  const [whyOpen, setWhyOpen] = useState(false);
  const say =
    story != null && !PAIN_SAYS.includes(leg.id) ? storyLine(t, story, language, planReason) : t(LEG_KEYS[leg.id]);
  const scheme = useColorScheme();
  const ink = meterColors[scheme];
  const items = useParts(parts);
  const info = useInfoSheet();
  return (
    <View>
      <View ref={stageRef} collapsable={false}>
        <Rise>
          <Text style={[styles.say, styles.centredText, { color: ink.ink }]}>{say}</Text>
        </Rise>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={
            score == null
              ? t('home.readiness.empty')
              : t('home.readiness.scoreA11y', { score, band: t(BAND_KEYS[readinessBand(score)]) })
          }
          accessibilityHint={t('home.readiness.partHint')}
          onPress={() => info.open('score')}
          style={({ pressed }) => [styles.centred, styles.score, pressed && styles.pressed]}>
          {score == null ? (
            <EmptyAsk centred />
          ) : (
            <>
              <Score score={score} size={60} />
              <BandWord score={score} centred />
            </>
          )}
        </Pressable>
      </View>
      <Rise delay={150}>
        <PartPills parts={items} onOpen={info.open} />
      </Rise>
      {/* What today's plan was built from, shown rather than claimed. */}
      <Pressable
        accessibilityRole="button"
        onPress={() => {
          void Haptics.selectionAsync();
          track('why_plan_opened');
          setWhyOpen(true);
        }}
        hitSlop={8}
        style={({ pressed }) => [styles.whyLink, pressed && styles.pressed]}>
        <Text style={[styles.whyText, { color: accents[scheme].violet.fill }]}>{t('home.why.link')}</Text>
      </Pressable>
      <WhySheet visible={whyOpen} onClose={() => setWhyOpen(false)} />
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
  whyLink: {
    alignSelf: 'center',
    marginTop: 14,
    paddingVertical: 4,
  },
  whyText: fonts.semibold(15, -0.1),
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
  say: {
    ...fonts.bold(16, -0.2),
    lineHeight: 22,
  },
  score: {
    marginTop: 12,
  },
  pressed: { opacity: 0.6 },
  pills: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginTop: 14 },
  pill: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, height: 34, borderRadius: 17 },
});
