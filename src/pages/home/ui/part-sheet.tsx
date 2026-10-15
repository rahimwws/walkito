import { BlurView } from 'expo-blur';
import { useEffect, useState, type ReactNode } from 'react';
import { Modal, Platform, Pressable, StyleSheet, Text, View, type LayoutChangeEvent } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { grouped } from '../model/brief';
import {
  BAND_KEYS,
  READINESS_WEIGHTS,
  readinessBand,
  type ReadinessDetails,
  type ReadinessFocus,
  type ReadinessPartKey,
} from '../model/readiness';
import { healthCache } from '@/entities/health';
import { currentDay, painOn } from '@/entities/program';
import { accents, fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { useLanguage, useT, type Translate } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { ReplayMask } from '@/shared/ui/replay-mask';

/**
 * One small bottom sheet per part of "Legs ready today", and a tinier one for
 * the score. Only as tall as what it holds.
 *
 * A part's sheet, after Noom's metric sheet and Gentler Streak: the icon, the
 * part's name and when it is from, the real value large (pain out of 10, the
 * hours slept, yesterday's steps), a bar split into zones with a marker at
 * today's value, the last seven days as tiny bars, one line saying what share
 * of the score it is, and Done. A part not known yet says so, and how to get
 * it, with no bar.
 *
 * Zones are tinted from `accents`, which say *which* zone, never how good it
 * is: nothing here is red, and "Sore" is a place on the scale like "Calm".
 *
 * Dismissed by Done, a tap outside, or a drag down. Masked from recordings:
 * every figure here is pain, sleep or steps.
 */

/** As the streak sheet: a card floating over Home, not a slab. */
const RADIUS = 36;
const DOCK_PAD = 10;
const PAD = 20;
const BLUR = 24;
const IN_MS = 320;
const OUT_MS = 220;
/** A drag past this, or a flick faster than `FLICK`, closes the sheet. */
const DRAG_CLOSE = 80;
const FLICK = 900;

export type PartSheetProps = {
  visible: boolean;
  /** Which sheet: a part, or the score. Kept while closing, for the exit. */
  focus: ReadinessFocus | null;
  onClose: () => void;
  score: number | null;
  details: ReadinessDetails;
};

export function PartSheet({ visible, focus, onClose, score, details }: PartSheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();
  const reduceMotion = useReducedMotion();

  /** Mounted apart from `visible`, so the exit has something to play on. */
  const [mounted, setMounted] = useState(false);
  const progress = useSharedValue(0);
  const drag = useSharedValue(0);
  /** The sheet's own height, so it slides in from exactly below the screen. */
  const height = useSharedValue(480);

  useEffect(() => {
    // Reduce Motion: the sheet fades in place instead of sliding, so the
    // fade itself is never skipped.
    const timing = { reduceMotion: ReduceMotion.Never };
    if (visible) {
      setMounted(true);
      drag.value = 0;
      const frame = requestAnimationFrame(() => {
        progress.value = withTiming(1, { ...timing, duration: IN_MS, easing: Easing.out(Easing.cubic) });
      });
      return () => cancelAnimationFrame(frame);
    }
    progress.value = withTiming(0, { ...timing, duration: OUT_MS, easing: Easing.in(Easing.cubic) }, (finished) => {
      if (finished) runOnJS(setMounted)(false);
    });
    return undefined;
  }, [visible, progress, drag]);

  const backdrop = useAnimatedStyle(() => ({ opacity: progress.value }));
  const sheet = useAnimatedStyle(() =>
    reduceMotion
      ? { opacity: progress.value, transform: [{ translateY: drag.value }] }
      : { transform: [{ translateY: (1 - progress.value) * height.value + drag.value }] },
  );

  const pull = Gesture.Pan()
    .activeOffsetY(6)
    .onUpdate((e) => {
      drag.value = Math.max(0, e.translationY);
    })
    .onEnd((e) => {
      if (e.translationY > DRAG_CLOSE || e.velocityY > FLICK) {
        runOnJS(onClose)();
      } else {
        drag.value = withTiming(0, { duration: 180, easing: Easing.out(Easing.cubic) });
      }
    });

  const onLayout = (e: LayoutChangeEvent) => {
    height.value = e.nativeEvent.layout.height;
  };

  if (!mounted || focus == null) return null;

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={onClose}>
      {/* A Modal is outside the app's own gesture root, so it brings one. */}
      <GestureHandlerRootView style={styles.fill}>
        <Animated.View style={[styles.fill, backdrop]} pointerEvents="none">
          <BlurView tint={scheme === 'dark' ? 'dark' : 'light'} intensity={BLUR} style={styles.fill} />
          <View style={[styles.fill, styles.wash]} />
        </Animated.View>

        <Pressable accessibilityRole="button" accessibilityLabel={t('common.close')} style={styles.fill} onPress={onClose} />

        <View
          style={[styles.dock, { paddingTop: insets.top + 12, paddingBottom: Math.max(insets.bottom, 16) }]}
          pointerEvents="box-none">
          <GestureDetector gesture={pull}>
            <Animated.View
              onLayout={onLayout}
              style={[styles.sheet, { backgroundColor: colors.card }, sheet]}>
              <View style={[styles.grabber, { backgroundColor: meter.track }]} />
              <ReplayMask>
                {focus === 'score' ? (
                  <ScoreBody score={score} details={details} />
                ) : (
                  <PartBody part={focus} details={details} />
                )}
              </ReplayMask>
              <PrimaryButton label={t('common.done')} onPress={onClose} style={styles.cta} />
              <Text style={[styles.footer, { color: meter.caption }]}>{t('home.readinessInfo.footer')}</Text>
            </Animated.View>
          </GestureDetector>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
}

// ── What each part shows ───────────────────────────────────────────────────

type Zone = { from: number; to: number; label: string; accent: AccentName };

type PartView = {
  icon: FluentName;
  accent: AccentName;
  title: string;
  when: string;
  /** The value as read, or null when the part is not known. */
  value: ReactNode | null;
  valueA11y: string;
  /** How to get it, when not known; otherwise the share of the score. */
  line: string;
  zones?: Zone[];
  /** Where today sits, in the zones' units. */
  at?: number;
  tick?: { at: number; label: string };
  week?: { values: (number | null)[]; max: number; guide?: number };
};

const askHealth = (ios: string, android: string) => (Platform.OS === 'android' ? android : ios);

const DAY_MS = 24 * 60 * 60 * 1000;

/** A local calendar day as the health cache keys it, `YYYY-MM-DD`. */
function dayKey(date: Date): string {
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

/** Seven values, oldest first, the last one `endsDaysAgo` days back. */
function lastSeven<T>(endsDaysAgo: number, read: (daysAgo: number) => T): T[] {
  return Array.from({ length: 7 }, (_, i) => read(endsDaysAgo + 6 - i));
}

function healthByDay(): Map<string, { steps: number | null; sleepMin: number | null }> {
  return new Map(healthCache().days.map((day) => [day.date, day]));
}

function healthOn(days: ReturnType<typeof healthByDay>, daysAgo: number) {
  // Noon, so a daylight-saving night never lands on the wrong date.
  const noon = new Date();
  noon.setHours(12, 0, 0, 0);
  return days.get(dayKey(new Date(noon.getTime() - daysAgo * DAY_MS)));
}

/** At least two days known, or the chart is only a stub. */
const worthAChart = (values: (number | null)[]) => values.filter((v) => v != null).length >= 2;

function painText(t: Translate, pain: number): string {
  return pain === 0 ? t('home.readinessInfo.painNone') : `${pain}/10`;
}

function sleepText(t: Translate, minutes: number): string {
  const total = Math.round(minutes);
  return t('home.readinessInfo.sleepValue', { hours: Math.floor(total / 60), minutes: total % 60 });
}

function stepsText(t: Translate, steps: number, language: ReturnType<typeof useLanguage>): string {
  const count = Math.round(steps);
  return t('home.readinessInfo.stepsValue', { count, steps: grouped(count, language) });
}

function usePartView(part: ReadinessPartKey, details: ReadinessDetails): PartView {
  const t = useT();
  const language = useLanguage();
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const big = (text: string) => (
    <Text style={[styles.value, { color: meter.ink }]} numberOfLines={1} adjustsFontSizeToFit>
      {text}
    </Text>
  );

  if (part === 'pain') {
    const pain = details.pain == null ? null : Math.round(details.pain);
    const values = lastSeven(0, (ago) => painOn(currentDay() - ago));
    const zones: Zone[] = [
      { from: 0, to: 3.5, label: t('home.readinessInfo.painCalm'), accent: 'teal' },
      { from: 3.5, to: 6.5, label: t('home.readinessInfo.painAchy'), accent: 'amber' },
      { from: 6.5, to: 10, label: t('home.readinessInfo.painSore'), accent: 'violet' },
    ];
    return {
      icon: 'heart',
      accent: 'orange',
      title: t('home.readinessInfo.painTitle'),
      when: t('home.readinessInfo.painWhen'),
      value:
        pain == null ? null : pain === 0 ? (
          big(painText(t, 0))
        ) : (
          <View style={styles.numberRow}>
            <Text style={[styles.value, styles.tabular, { color: meter.ink }]}>{pain}</Text>
            <Text style={[styles.unit, { color: meter.unit }]}>/10</Text>
          </View>
        ),
      valueA11y: pain == null ? '' : pain === 0 ? t('home.readinessInfo.painNone') : t('home.readinessInfo.painValueA11y', { value: pain }),
      line: pain == null ? t('home.readinessInfo.painAsk') : t('home.readinessInfo.painLine'),
      zones: pain == null ? undefined : zones,
      at: pain ?? undefined,
      week: worthAChart(values) ? { values, max: 10 } : undefined,
    };
  }

  if (part === 'sleep') {
    const minutes = details.sleepMinutes != null && details.sleepMinutes > 0 ? details.sleepMinutes : null;
    const days = healthByDay();
    const values = lastSeven(0, (ago) => healthOn(days, ago)?.sleepMin ?? null);
    const most = Math.max(0, ...values.map((v) => v ?? 0));
    return {
      icon: 'moon',
      accent: 'violet',
      title: t('home.readinessInfo.sleepTitle'),
      when: t('home.readinessInfo.sleepWhen'),
      value: minutes == null ? null : big(sleepText(t, minutes)),
      valueA11y: minutes == null ? '' : sleepText(t, minutes),
      line:
        minutes == null
          ? askHealth(t('home.readinessInfo.sleepAskIos'), t('home.readinessInfo.sleepAskAndroid'))
          : t('home.readinessInfo.sleepLine'),
      zones:
        minutes == null
          ? undefined
          : [
              { from: 4, to: 6, label: t('home.readinessInfo.sleepShort'), accent: 'amber' },
              { from: 6, to: 7, label: t('home.readinessInfo.sleepOk'), accent: 'blue' },
              { from: 7, to: 8, label: t('home.readinessInfo.sleepGood'), accent: 'teal' },
              { from: 8, to: 10, label: t('home.readinessInfo.sleepFull'), accent: 'violet' },
            ],
      at: minutes == null ? undefined : minutes / 60,
      week: worthAChart(values) ? { values, max: Math.max(most, 8 * 60), guide: 8 * 60 } : undefined,
    };
  }

  const yesterday = details.stepsYesterday == null ? null : Math.round(details.stepsYesterday);
  const usual = details.stepsUsual != null && details.stepsUsual > 0 ? details.stepsUsual : null;
  const days = healthByDay();
  const values = lastSeven(1, (ago) => healthOn(days, ago)?.steps ?? null);
  const most = Math.max(0, ...values.map((v) => v ?? 0));
  // The usual to the nearest hundred: a mean of 28 days to the step is a
  // precision it does not have.
  const usualShown = usual == null ? null : grouped(Math.round(usual / 100) * 100, language);
  return {
    icon: 'foot',
    accent: 'teal',
    title: t('home.readinessInfo.stepsTitle'),
    when: t('home.readinessInfo.stepsWhen'),
    value: yesterday == null ? null : big(stepsText(t, yesterday, language)),
    valueA11y: yesterday == null ? '' : stepsText(t, yesterday, language),
    line:
      yesterday == null
        ? askHealth(t('home.readinessInfo.stepsAskIos'), t('home.readinessInfo.stepsAskAndroid'))
        : usual == null
          ? t('home.readinessInfo.stepsNoUsual')
          : t('home.readinessInfo.stepsLine'),
    zones:
      yesterday == null || usual == null
        ? undefined
        : [
            { from: 0, to: 0.7, label: t('home.readinessInfo.stepsLight'), accent: 'blue' },
            { from: 0.7, to: 1.1, label: t('home.readinessInfo.stepsUsualZone'), accent: 'teal' },
            { from: 1.1, to: 1.6, label: t('home.readinessInfo.stepsBig'), accent: 'amber' },
            { from: 1.6, to: 2.2, label: t('home.readinessInfo.stepsVeryBig'), accent: 'violet' },
          ],
    at: yesterday == null || usual == null ? undefined : yesterday / usual,
    tick: usualShown == null ? undefined : { at: 1, label: t('home.readinessInfo.stepsUsual', { usual: usualShown }) },
    week: worthAChart(values) ? { values, max: Math.max(most, usual ?? 0), guide: usual ?? undefined } : undefined,
  };
}

function PartBody({ part, details }: { part: ReadinessPartKey; details: ReadinessDetails }) {
  const t = useT();
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const view = usePartView(part, details);
  const accent = accents[scheme][view.accent];
  const zone = view.zones != null && view.at != null ? zoneAt(view.zones, view.at) : null;

  const a11y =
    view.value == null
      ? t('home.readinessInfo.unknownA11y', { title: view.title, line: view.line })
      : zone != null
        ? t('home.readinessInfo.valueA11y', { title: view.title, when: view.when, value: view.valueA11y, zone: zone.label })
        : t('home.readinessInfo.valueNoZoneA11y', { title: view.title, when: view.when, value: view.valueA11y });

  return (
    <View style={styles.body}>
      <View accessible accessibilityRole="header" accessibilityLabel={a11y} style={styles.head}>
        <View style={[styles.iconTile, { backgroundColor: accent.track }]}>
          <FluentIcon name={view.icon} size={32} />
        </View>
        <Text style={[styles.title, { color: meter.ink }]}>{view.title}</Text>
        <Text style={[styles.when, { color: meter.caption }]}>{view.when}</Text>
        <View style={styles.valueBox}>
          {view.value ?? (
            <Text style={[styles.unknown, { color: meter.caption }]}>{t('home.readinessInfo.unknown')}</Text>
          )}
        </View>
      </View>

      {view.zones != null && view.at != null && (
        <ZoneBar zones={view.zones} at={view.at} tick={view.tick} />
      )}

      {view.week != null && <WeekBars {...view.week} accent={view.accent} />}

      <Text style={[styles.line, { color: meter.label }]} importantForAccessibility={view.value == null ? 'no' : 'auto'}>
        {view.line}
      </Text>
    </View>
  );
}

function zoneAt(zones: Zone[], at: number): Zone {
  return zones.find((zone) => at < zone.to) ?? zones[zones.length - 1];
}

// ── The range bar ─────────────────────────────────────────────────────────

const BAR_H = 10;
const BAR_GAP = 3;
const MARKER = 18;
const TICK_LABEL_W = 140;

/** The part's range in zones, today's zone filled, a marker at today's value
 * and, for steps, a tick at their usual. Decorative to a screen reader: the
 * header already says the value and its zone. */
function ZoneBar({ zones, at, tick }: { zones: Zone[]; at: number; tick?: { at: number; label: string } }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const card = palette[scheme].card;
  const [width, setWidth] = useState(0);
  const active = zoneAt(zones, at);

  const lo = zones[0].from;
  const hi = zones[zones.length - 1].to;
  /** x of a value on the bar, with the gaps between zones taken into account. */
  const xOf = (value: number) => {
    const v = Math.min(hi, Math.max(lo, value));
    const inner = width - BAR_GAP * (zones.length - 1);
    let x = 0;
    for (const zone of zones) {
      const w = ((zone.to - zone.from) / (hi - lo)) * inner;
      if (v <= zone.to || zone === zones[zones.length - 1]) return x + ((v - zone.from) / (zone.to - zone.from)) * w;
      x += w + BAR_GAP;
    }
    return x;
  };

  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[styles.zones, tick != null && styles.zonesWithTick]}
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
      {tick != null && width > 0 && (
        <Text
          style={[
            styles.tickLabel,
            { color: meter.label, left: Math.min(width - TICK_LABEL_W, Math.max(0, xOf(tick.at) - TICK_LABEL_W / 2)) },
          ]}
          numberOfLines={1}>
          {tick.label}
        </Text>
      )}
      <View style={styles.barRow}>
        {zones.map((zone) => {
          const tint = accents[scheme][zone.accent];
          return (
            <View
              key={zone.label}
              style={[styles.zone, { flex: zone.to - zone.from, backgroundColor: zone === active ? tint.fill : tint.track }]}
            />
          );
        })}
        {width > 0 && tick != null && (
          <View style={[styles.tick, { left: xOf(tick.at) - 1, backgroundColor: meter.ink }]} />
        )}
        {width > 0 && (
          <View
            style={[
              styles.marker,
              { left: xOf(at) - MARKER / 2, backgroundColor: meter.ink, borderColor: card },
            ]}
          />
        )}
      </View>
      <View style={styles.labelRow}>
        {zones.map((zone) => (
          <Text
            key={zone.label}
            numberOfLines={1}
            adjustsFontSizeToFit
            style={[
              zone === active ? styles.zoneLabelOn : styles.zoneLabel,
              { flex: zone.to - zone.from, color: zone === active ? meter.ink : meter.caption },
            ]}>
            {zone.label}
          </Text>
        ))}
      </View>
    </View>
  );
}

// ── The last seven days ───────────────────────────────────────────────────

const WEEK_H = 40;

/** Seven tiny bars, oldest first, the latest in the part's accent and the
 * rest softer; a day with nothing logged is a stub. A faint line marks the
 * full mark (8 h) or their usual day. */
function WeekBars({
  values,
  max,
  guide,
  accent,
}: {
  values: (number | null)[];
  max: number;
  guide?: number;
  accent: AccentName;
}) {
  const t = useT();
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const tint = accents[scheme][accent];
  const top = max > 0 ? max : 1;
  return (
    <View accessible accessibilityLabel={t('home.readinessInfo.week')} style={styles.week}>
      <Text style={[styles.weekLabel, { color: meter.label }]}>{t('home.readinessInfo.week')}</Text>
      <View style={styles.weekBars}>
        {guide != null && guide > 0 && (
          <View style={[styles.guide, { bottom: (Math.min(guide, top) / top) * WEEK_H, backgroundColor: meter.track }]} />
        )}
        {values.map((value, i) => {
          const last = i === values.length - 1;
          return (
            <View key={i} style={styles.weekColumn}>
              {value == null ? (
                <View style={[styles.stub, { backgroundColor: meter.track }]} />
              ) : (
                <View
                  style={[
                    styles.weekBar,
                    {
                      height: Math.max(4, (Math.min(value, top) / top) * WEEK_H),
                      backgroundColor: last ? tint.fill : tint.track,
                    },
                  ]}
                />
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}

// ── The score ─────────────────────────────────────────────────────────────

const HALF = '½';
const QUARTER = '¼';

/** The score, its band word, and the three parts with their values and how
 * much of the score each is. Nothing else. */
function ScoreBody({ score, details }: { score: number | null; details: ReadinessDetails }) {
  const t = useT();
  const language = useLanguage();
  const scheme = useColorScheme();
  const meter = meterColors[scheme];

  const sleep = details.sleepMinutes != null && details.sleepMinutes > 0 ? details.sleepMinutes : null;
  const rows: { key: ReadinessPartKey; icon: FluentName; accent: AccentName; title: string; value: string | null }[] = [
    {
      key: 'pain',
      icon: 'heart',
      accent: 'orange',
      title: t('home.readinessInfo.painTitle'),
      value: details.pain == null ? null : painText(t, Math.round(details.pain)),
    },
    {
      key: 'sleep',
      icon: 'moon',
      accent: 'violet',
      title: t('home.readinessInfo.sleepTitle'),
      value: sleep == null ? null : sleepText(t, sleep),
    },
    {
      key: 'steps',
      icon: 'foot',
      accent: 'teal',
      title: t('home.readinessInfo.stepsTitle'),
      value: details.stepsYesterday == null ? null : stepsText(t, details.stepsYesterday, language),
    },
  ];

  return (
    <View style={styles.body}>
      {score == null ? (
        <Text style={[styles.empty, { color: meter.label }]}>{t('home.readiness.empty')}</Text>
      ) : (
        <View
          accessible
          accessibilityRole="header"
          accessibilityLabel={t('home.readiness.scoreA11y', { score, band: t(BAND_KEYS[readinessBand(score)]) })}
          style={styles.head}>
          <View style={styles.numberRow}>
            <Text style={[styles.score, styles.tabular, { color: meter.ink }]}>{score}</Text>
            <Text style={[styles.unit, { color: meter.unit }]}>/100</Text>
          </View>
          <Text style={[styles.band, { color: meter.ink }]}>{t(BAND_KEYS[readinessBand(score)])}</Text>
        </View>
      )}

      <View>
        {rows.map((row) => {
          const half = READINESS_WEIGHTS[row.key] >= 0.5;
          const weight = half ? t('home.readinessInfo.weightHalf') : t('home.readinessInfo.weightQuarter');
          return (
            <View
              key={row.key}
              accessible
              accessibilityLabel={t('home.readinessInfo.rowA11y', {
                title: row.title,
                value: row.value ?? t('home.readinessInfo.unknown'),
                weight,
              })}
              style={[styles.row, { borderColor: meter.divider }]}>
              <View style={[styles.rowIcon, { backgroundColor: accents[scheme][row.accent].track }]}>
                <FluentIcon name={row.icon} size={18} />
              </View>
              <Text style={[styles.rowTitle, { color: meter.ink }]} numberOfLines={1}>
                {row.title}
              </Text>
              <Text
                style={[row.value == null ? styles.rowUnknown : styles.rowValue, { color: row.value == null ? meter.caption : meter.ink }]}
                numberOfLines={1}>
                {row.value ?? t('home.readinessInfo.unknown')}
              </Text>
              <View style={[styles.weight, { backgroundColor: meter.iconTile }]}>
                <Text style={[styles.weightText, { color: meter.label }]}>{half ? HALF : QUARTER}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  wash: {
    backgroundColor: 'rgba(0,0,0,0.18)',
  },
  dock: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    paddingHorizontal: DOCK_PAD,
  },
  sheet: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    paddingHorizontal: PAD,
    paddingBottom: 16,
    overflow: 'hidden',
  },
  grabber: { alignSelf: 'center', width: 40, height: 5, borderRadius: 3, marginTop: 8 },
  body: {
    paddingTop: 16,
    gap: 18,
  },
  head: {
    alignItems: 'center',
  },
  iconTile: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: fonts.bold(18, -0.3),
  when: {
    ...fonts.medium(14),
    marginTop: 1,
  },
  valueBox: {
    marginTop: 8,
    minHeight: 50,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  value: {
    ...fonts.heavy(40, -1.2),
    textAlign: 'center',
  },
  unknown: {
    ...fonts.heavy(28, -0.6),
    textAlign: 'center',
  },
  numberRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  tabular: {
    fontVariant: ['tabular-nums'],
  },
  unit: {
    ...fonts.bold(18),
    marginLeft: 3,
  },
  zones: {
    gap: 8,
  },
  zonesWithTick: {
    paddingTop: 22,
  },
  barRow: {
    flexDirection: 'row',
    gap: BAR_GAP,
    height: MARKER,
    alignItems: 'center',
  },
  zone: {
    height: BAR_H,
    borderRadius: BAR_H / 2,
  },
  marker: {
    position: 'absolute',
    top: 0,
    width: MARKER,
    height: MARKER,
    borderRadius: MARKER / 2,
    borderWidth: 3,
  },
  tick: {
    position: 'absolute',
    top: -4,
    width: 2,
    height: MARKER + 8,
    borderRadius: 1,
    opacity: 0.35,
  },
  tickLabel: {
    ...fonts.semibold(12),
    position: 'absolute',
    top: 0,
    width: TICK_LABEL_W,
    textAlign: 'center',
  },
  labelRow: {
    flexDirection: 'row',
    gap: BAR_GAP,
  },
  zoneLabel: {
    ...fonts.medium(12),
    textAlign: 'center',
  },
  zoneLabelOn: {
    ...fonts.bold(12),
    textAlign: 'center',
  },
  week: {
    gap: 8,
  },
  weekLabel: fonts.semibold(12),
  weekBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: WEEK_H,
    gap: 8,
  },
  weekColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  weekBar: {
    width: '100%',
    maxWidth: 22,
    borderRadius: 5,
    borderCurve: 'continuous',
  },
  stub: {
    width: 6,
    height: 4,
    borderRadius: 2,
  },
  guide: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
  },
  line: {
    ...fonts.medium(15),
    lineHeight: 21,
    textAlign: 'center',
  },
  score: fonts.heavy(52, -1.4),
  band: {
    ...fonts.bold(18, -0.3),
    marginTop: -2,
  },
  empty: {
    ...fonts.semibold(16),
    lineHeight: 22,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowTitle: {
    ...fonts.semibold(15),
    flex: 1,
  },
  rowValue: fonts.bold(15),
  rowUnknown: fonts.semibold(14),
  weight: {
    minWidth: 30,
    height: 24,
    borderRadius: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weightText: fonts.bold(14),
  cta: {
    marginTop: 22,
  },
  footer: {
    ...fonts.medium(12),
    textAlign: 'center',
    marginTop: 10,
  },
});
