import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import * as Haptics from 'expo-haptics';
import { useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, View, type LayoutChangeEvent } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  ReduceMotion,
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import Svg, { Circle, Path } from 'react-native-svg';

import {
  LEG_ASPECT,
  LEG_VIEW,
  LegMap,
  ZONE_CENTRES,
  ZONE_LABEL_KEYS,
  type LegZone,
} from '@/entities/leg-zone';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { AnimatedNumber } from '@/shared/ui/animated-number';

import { OUTLOOK_STOPS, STRENGTHENED, zoneGain } from '../model/outlook';
import { MonthPicker } from './month-picker';

/** Held back until the heading has typed, so the first month does not turn
 * while the eye is still on the question. */
const FIRST_STOP_MS = 1100;
/** Between months on the autoplay. Long enough for the numbers to roll and be
 * read; short enough that the screen has told its story in about five seconds. */
const STOP_MS = 1500;
/** How long a change of month takes to wash over the leg. */
const HEAL_MS = 900;
const EASE = Easing.bezier(0.23, 1, 0.32, 1);
/** When each callout's glass starts to form, after the leader has reached it. */
const CARD_DELAY_MS = 520;
const CARD_STAGGER_MS = 130;

const CARD_W = 98;
const CARD_H = 60;
/** The leg's share of the stage's height. Short of all of it so the cards at
 * the two edges sit beside the zones they point at rather than on them. */
const LEG_SCALE = 0.9;
/** Kept between two callouts on the same side. */
const CARD_GAP = 8;

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export type OutlookStepProps = {
  /** The zones they marked on the pain step. Empty when nothing hurts. */
  zones: readonly LegZone[];
  /** The switcher's labels: "Today", "Month 1"… */
  months: readonly string[];
};

type Callout = {
  zone: LegZone;
  /** The zone's centre, in the stage's own points. */
  point: { x: number; y: number };
  side: 'left' | 'right';
  /** The card's top edge, after stacking. */
  top: number;
};

/**
 * The payoff for the pain question: the same leg, three months on.
 *
 * The months are the system's segmented control, and the screen plays them by
 * itself on arrival — today, one, two, three — so the story is told without a
 * tap and can then be scrubbed by hand. Each step does two things at once, on
 * one shared value so they can never drift apart: the marked zones wash from
 * red through amber to green, and a callout pinned to each zone rolls its
 * figure to that month's number.
 *
 * Built on liquid glass: the switcher is native, and each callout is a glass
 * pane that forms over the leg — the system's own materialise, not a fade we
 * drew. Nothing here springs. A bounce on a screen about a leg that hurts reads
 * as the drawing being flippant about it, so every move is a timing curve that
 * settles once.
 *
 * The figures are typical courses, grouped by the tissue that sets the pace
 * (see `outlook.ts`), and the footnote says so. A tendon trails a muscle at
 * every stop because that is how tendons heal, and a screen that showed every
 * zone improving in lockstep would be showing an animation, not a prognosis.
 */
export function OutlookStep({ zones, months }: OutlookStepProps) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();

  const painless = zones.length === 0;
  const shown = painless ? STRENGTHENED : zones;
  const red = accents[scheme].red.fill;
  const green = meter.positive;

  const [stop, setStop] = useState(0);
  /** Cleared the moment the user touches the control: the autoplay is an
   * introduction, and it must not take the screen back from them. */
  const autoplay = useRef(true);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let next = 1; next < OUTLOOK_STOPS; next += 1) {
      timers.push(
        setTimeout(
          () => {
            if (!autoplay.current) return;
            Haptics.selectionAsync();
            setStop(next);
          },
          FIRST_STOP_MS + (next - 1) * STOP_MS,
        ),
      );
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  /** 0 today, 1 at month three. The leg, the dots and the pulses all read it. */
  const heal = useSharedValue(0);
  useEffect(() => {
    heal.value = withTiming(stop / (OUTLOOK_STOPS - 1), {
      duration: HEAL_MS,
      easing: EASE,
      reduceMotion: ReduceMotion.System,
    });
  }, [stop, heal]);

  /**
   * A healthy leg has nothing red to start from: its zones are marked in the
   * healed colour from the outset, so "today" shows the muscles the plan will
   * work on rather than an injury they do not have.
   */
  const fullHeal = useSharedValue(1);
  const tint = painless ? fullHeal : heal;

  const [stage, setStage] = useState({ width: 0, height: 0 });
  const onStage = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setStage({ width, height });
  };

  const callouts = useMemo(() => placeCallouts(shown, stage), [shown, stage]);
  const leg = legFrame(stage);

  return (
    <View style={styles.wrap}>
      <MonthPicker
        labels={months}
        selected={stop}
        onChange={(next) => {
          autoplay.current = false;
          Haptics.selectionAsync();
          setStop(next);
        }}
      />

      <View style={styles.stage} onLayout={onStage}>
        {stage.height > 0 && (
          <>
            <View style={[styles.leg, leg]}>
              <LegMap selected={shown} healProgress={tint} healedColor={green} />
            </View>

            {/* Leaders and pulses in one layer over the leg, under the cards. */}
            <Svg style={StyleSheet.absoluteFill} pointerEvents="none">
              {callouts.map((callout, i) => (
                <Leader
                  key={callout.zone}
                  callout={callout}
                  stageWidth={stage.width}
                  index={i}
                  heal={tint}
                  from={red}
                  to={green}
                  line={meter.label}
                />
              ))}
            </Svg>

            {callouts.map((callout, i) => (
              <CalloutCard
                key={callout.zone}
                callout={callout}
                stageWidth={stage.width}
                index={i}
                label={t(ZONE_LABEL_KEYS[callout.zone])}
                value={zoneGain(callout.zone, stop, painless)}
                caption={
                  painless ? t('onboarding.outlook.stronger') : t('onboarding.outlook.lessPain')
                }
                heal={tint}
                from={red}
                to={green}
                started={stop > 0}
              />
            ))}
          </>
        )}
      </View>


      <Text style={[styles.footnote, { color: meter.unit }]}>{t('onboarding.outlook.footnote')}</Text>
    </View>
  );
}

/** Where the leg sits in the stage: centred, and a little short of its height. */
function legFrame(stage: { width: number; height: number }) {
  const height = stage.height * LEG_SCALE;
  const width = height * LEG_ASPECT;
  return { width, height, left: (stage.width - width) / 2, top: (stage.height - height) / 2 };
}

/**
 * Where each callout goes.
 *
 * Zones behind the shin put their card on the left, zones in front of it on
 * the right, so a leader never has to cross the leg. Cards on the same side are
 * then stacked in the order their zones sit, pushed apart where they would
 * overlap and kept inside the stage.
 */
function placeCallouts(
  zones: readonly LegZone[],
  stage: { width: number; height: number },
): Callout[] {
  if (stage.height === 0) return [];
  const leg = legFrame(stage);
  const scale = leg.height / LEG_VIEW.height;

  const placed: Callout[] = zones
    .map((zone) => {
      const centre = ZONE_CENTRES[zone] ?? ZONE_CENTRES.inner_ankle ?? { x: 186, y: 400 };
      const point = {
        x: leg.left + (centre.x - LEG_VIEW.x) * scale,
        y: leg.top + (centre.y - LEG_VIEW.y) * scale,
      };
      const side: Callout['side'] = centre.x < 150 ? 'left' : 'right';
      return { zone, point, side, top: point.y - CARD_H / 2 };
    })
    .sort((a, b) => a.point.y - b.point.y);

  for (const side of ['left', 'right'] as const) {
    const column = placed.filter((c) => c.side === side);
    let floor = 0;
    for (const callout of column) {
      callout.top = Math.max(callout.top, floor);
      floor = callout.top + CARD_H + CARD_GAP;
    }
    // Anything pushed off the bottom walks back up, taking the ones above it
    // only as far as they have to go.
    let ceiling = stage.height - CARD_H;
    for (const callout of [...column].reverse()) {
      callout.top = Math.min(callout.top, ceiling);
      ceiling = callout.top - CARD_H - CARD_GAP;
    }
  }
  return placed;
}

/** The line from a zone to its card, drawn on rather than shown, and a ring
 * that breathes on the zone itself. */
function Leader({
  callout,
  stageWidth,
  index,
  heal,
  from,
  to,
  line,
}: {
  callout: Callout;
  stageWidth: number;
  index: number;
  heal: Readonly<SharedValue<number>>;
  from: string;
  to: string;
  line: string;
}) {
  const edgeX = callout.side === 'left' ? CARD_W : stageWidth - CARD_W;
  const edgeY = callout.top + CARD_H / 2;
  const { x, y } = callout.point;
  // An elbow: out of the zone at an angle, then level into the card, so
  // several leaders on one side read as a set rather than a fan.
  const elbowX = x + (edgeX - x) * 0.45;
  const d = `M${x} ${y}L${elbowX} ${edgeY}L${edgeX} ${edgeY}`;
  const length = Math.hypot(elbowX - x, edgeY - y) + Math.abs(edgeX - elbowX);

  const drawn = useSharedValue(0);
  const pulse = useSharedValue(0);
  useEffect(() => {
    drawn.value = withDelay(
      250 + index * 120,
      withTiming(1, { duration: 520, easing: EASE, reduceMotion: ReduceMotion.System }),
    );
    pulse.value = withDelay(
      600 + index * 200,
      withRepeat(
        withTiming(1, {
          duration: 1600,
          easing: Easing.out(Easing.quad),
          reduceMotion: ReduceMotion.System,
        }),
        -1,
        false,
      ),
    );
  }, [drawn, pulse, index]);

  const lineProps = useAnimatedProps(() => ({
    strokeDashoffset: length * (1 - drawn.value),
  }));
  const ringProps = useAnimatedProps(() => ({
    r: 5 + pulse.value * 14,
    strokeOpacity: 0.7 * (1 - pulse.value),
    stroke: interpolateColor(heal.value, [0, 1], [from, to], 'HSV'),
  }));
  const dotProps = useAnimatedProps(() => ({
    fill: interpolateColor(heal.value, [0, 1], [from, to], 'HSV'),
    opacity: drawn.value,
  }));

  return (
    <>
      <AnimatedPath
        d={d}
        fill="none"
        stroke={line}
        strokeWidth={1.25}
        strokeDasharray={[length, length]}
        animatedProps={lineProps}
      />
      <AnimatedCircle cx={x} cy={y} fill="none" strokeWidth={2} animatedProps={ringProps} />
      <AnimatedCircle
        cx={x}
        cy={y}
        r={4.5}
        stroke="#FFFFFF"
        strokeWidth={1.5}
        animatedProps={dotProps}
      />
    </>
  );
}

function CalloutCard({
  callout,
  stageWidth,
  index,
  label,
  value,
  caption,
  heal,
  from,
  to,
  started,
}: {
  callout: Callout;
  stageWidth: number;
  index: number;
  label: string;
  value: number;
  caption: string;
  heal: Readonly<SharedValue<number>>;
  from: string;
  to: string;
  /** False on "today", when there is no change to report yet. */
  started: boolean;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const glass = isLiquidGlassAvailable();

  /**
   * Mounted as no glass, then switched to regular with `animate` — which is
   * the system forming the pane, the same way a toolbar's glass arrives.
   * Staggered so the callouts land one after another, each once its leader
   * has been drawn to it.
   */
  const [formed, setFormed] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setFormed(true), CARD_DELAY_MS + index * CARD_STAGGER_MS);
    return () => clearTimeout(timer);
  }, [index]);

  /** Through HSV rather than RGB: red to green in RGB passes through mud, in
   * HSV it passes through amber, which is what recovery looks like. */
  const dotStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(heal.value, [0, 1], [from, to], 'HSV'),
  }));

  const frame = {
    top: callout.top,
    left: callout.side === 'left' ? 0 : stageWidth - CARD_W,
  };

  return (
    <View style={[styles.card, frame]}>
      {/* Glass as an absolute sibling, never a parent: nested glass renders
          empty on iOS 26, and the text has to be free to fade in over it. */}
      {glass ? (
        <GlassView
          glassEffectStyle={{ style: formed ? 'regular' : 'none', animate: true, animationDuration: 0.6 }}
          tintColor={scheme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.35)'}
          style={[StyleSheet.absoluteFill, styles.cardShape]}
        />
      ) : (
        formed && (
          <Animated.View
            entering={FadeIn.duration(360).easing(EASE.factory()).reduceMotion(ReduceMotion.System)}
            style={[
              StyleSheet.absoluteFill,
              styles.cardShape,
              { backgroundColor: meter.solidFallback, borderColor: meter.track, borderWidth: 1 },
            ]}
          />
        )
      )}

      {formed && (
        <Animated.View
          entering={FadeIn.delay(120)
            .duration(360)
            .easing(EASE.factory())
            .reduceMotion(ReduceMotion.System)}
          style={styles.cardBody}>
          <View style={styles.cardHead}>
            <Animated.View style={[styles.cardDot, dotStyle]} />
            <Text style={[styles.cardLabel, { color: meter.caption }]} numberOfLines={1}>
              {label}
            </Text>
          </View>
          <View style={styles.cardValue}>
            <AnimatedNumber
              text={`${value}%`}
              value={value}
              color={started ? meter.positive : colors.foreground}
              fontSize={20}
              fontFamily={fonts.heavy}
              weight="heavy"
              duration={0.6}
            />
          </View>
          <Text style={[styles.cardCaption, { color: meter.caption }]} numberOfLines={1}>
            {caption}
          </Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    marginTop: 18,
  },
  stage: {
    flex: 1,
    minHeight: 240,
    marginTop: 16,
  },
  leg: {
    position: 'absolute',
  },
  card: {
    position: 'absolute',
    width: CARD_W,
    height: CARD_H,
  },
  cardShape: {
    borderRadius: 18,
    borderCurve: 'continuous',
  },
  cardBody: {
    flex: 1,
    paddingHorizontal: 11,
    paddingVertical: 7,
    justifyContent: 'space-between',
  },
  cardHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  cardDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  cardLabel: {
    flexShrink: 1,
    fontSize: 11,
    fontFamily: fonts.semibold,
    letterSpacing: -0.1,
  },
  cardValue: {
    alignItems: 'flex-start',
    marginVertical: -2,
  },
  cardCaption: {
    fontSize: 10.5,
    fontFamily: fonts.medium,
  },
  footnote: {
    marginTop: 8,
    fontSize: 11,
    lineHeight: 15,
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
});
