import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Pattern,
  Rect,
  Stop,
} from 'react-native-svg';

import { accents, fonts, meterColors, palette, primaryButton } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

export const PAIN_MIN = 0;
export const PAIN_MAX = 10;

/**
 * The wedge, in points.
 *
 * It is a wedge and not a bar because the shape is carrying the same
 * information as the colour: nothing at the left, everything at the right. A
 * flat track says "pick a position on a line"; this says "pick how much", and
 * the hand understands it before the number is read.
 */
const TRACK_HEIGHT = 96;
const WEDGE_MIN = 15;
const WEDGE_MAX = 74;
const KNOB = 30;

/**
 * How far every corner of the wedge is rounded.
 *
 * Applied by stroking the polygon with its own gradient at `ROUND * 2` and a
 * round join, rather than by writing arcs into the path. The stroke grows the
 * shape by exactly `ROUND` on every side and rounds all four corners on the
 * way, so one number gives the thin end its cap and the thick end its curve —
 * and the geometry underneath stays four readable points instead of eight arc
 * commands nobody can adjust later. The polygon is inset by the same amount so
 * the finished shape lands where the untouched one would have.
 */
const ROUND = 7;
/** Room on both sides so the knob at 0 and at 10 is fully on screen. */
const PAD = KNOB / 2 + 2;
/** Half the widest the chip gets ("WITHIN USUAL RANGE" at 12pt heavy), which is
 * both the anchor's width and what it has to keep clear of each margin. */
const BADGE_HALF = 90;

/**
 * Calm to hot, in five stops.
 *
 * These are the app's own accent hues rather than a borrowed spectrum: teal,
 * blue, amber, orange, red, in that order, which is the ramp the rest of the
 * product already reads left to right. It stops at red rather than running on
 * into violet — the reference is rating effort, where past-maximum is its own
 * category, and this is rating pain, where there is nothing above the worst it
 * has been.
 */
export type Scheme = 'light' | 'dark';

type RampStop = { at: number; color: string };

/** Read from `accents` rather than written out here: the hexes were copied from
 * the dark scheme, which meant the light scheme painted its wedge in dark-mode
 * accents — brighter than anything else on a white page. */
function ramp(scheme: Scheme): readonly RampStop[] {
  const hue = accents[scheme];
  return [
    { at: 0, color: hue.teal.fill },
    { at: 0.3, color: hue.blue.fill },
    { at: 0.55, color: hue.amber.fill },
    { at: 0.78, color: hue.orange.fill },
    { at: 1, color: hue.red.fill },
  ];
}

/** Blend the ramp at 0–1. Used for the knob, the badge and the Save button, so
 * all three are literally the colour under the finger. */
export function painColor(score: number, scheme: Scheme): string {
  const stops = ramp(scheme);
  const t = Math.min(Math.max((score - PAIN_MIN) / (PAIN_MAX - PAIN_MIN), 0), 1);
  let lower = stops[0];
  let upper = stops[stops.length - 1];
  for (let i = 0; i < stops.length - 1; i += 1) {
    if (t >= stops[i].at && t <= stops[i + 1].at) {
      lower = stops[i];
      upper = stops[i + 1];
      break;
    }
  }
  const span = upper.at - lower.at;
  const k = span === 0 ? 0 : (t - lower.at) / span;
  const mix = (a: string, b: string, i: number) => {
    const pa = parseInt(a.slice(1 + i * 2, 3 + i * 2), 16);
    const pb = parseInt(b.slice(1 + i * 2, 3 + i * 2), 16);
    return Math.round(pa + (pb - pa) * k);
  };
  const [r, g, bl] = [0, 1, 2].map((i) => mix(lower.color, upper.color, i));
  return `rgb(${r}, ${g}, ${bl})`;
}

/**
 * What each score means, in the user's own terms.
 *
 * Written as what the pain *stops you doing*, not as an adjective. "Moderate"
 * is a word from a clinical form and everyone reads it differently; "you are
 * working around it" is a test a person can actually apply to their morning,
 * which is what makes two people's 5 mean roughly the same thing.
 */
const BANDS = [
  { upTo: 0, label: 'Nothing', blurb: 'No pain to report today.' },
  { upTo: 2, label: 'Barely there', blurb: 'You would forget it if nobody asked.' },
  { upTo: 4, label: 'Noticeable', blurb: 'You feel it, but it changes nothing you do.' },
  { upTo: 6, label: 'Sore', blurb: 'You are working around it without thinking.' },
  { upTo: 8, label: 'Hurts', blurb: 'It is deciding things for you now.' },
  { upTo: 10, label: 'Severe', blurb: 'Standing on it is the problem, not running.' },
] as const;

export function painBand(score: number) {
  return BANDS.find((band) => score <= band.upTo) ?? BANDS[BANDS.length - 1];
}

export type PainScaleProps = {
  score: number;
  onChange: (next: number) => void;
  /** What this person's days normally look like, low and high. The hatched
   * stretch on the track, and what "above usual" is measured against. */
  usual: { low: number; high: number };
};

/**
 * The pain dial.
 *
 * One gesture for a number that decides what tomorrow's session is, so it is
 * built to be answered in a second and honestly: the finger lands anywhere on
 * the wedge and the value follows it, the number rolls, and the colour under
 * the thumb is the same colour the Save button takes. Nothing has to be aimed
 * at, and nothing is a small target.
 */
export function PainScale({ score, onChange, usual }: PainScaleProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const [width, setWidth] = useState(0);
  const span = Math.max(width - PAD * 2, 1);

  /** 0–1 along the track. Driven by the finger on the UI thread; the integer it
   * settles on is pushed to React only when it actually changes. */
  const at = useSharedValue((score - PAIN_MIN) / (PAIN_MAX - PAIN_MIN));

  // Taps and flings land the knob with a spring; a drag writes `at` directly,
  // so this only runs when the two disagree — which is exactly when the value
  // was changed by something other than the finger already holding it.
  useAnimatedReaction(
    () => Math.round(at.value * PAIN_MAX),
    (next, previous) => {
      if (previous != null && next !== previous) {
        runOnJS(onChange)(next);
        runOnJS(Haptics.selectionAsync)();
      }
    },
  );

  const settle = (x: number) => {
    'worklet';
    const raw = Math.min(Math.max((x - PAD) / span, 0), 1);
    // Snapped to whole points on release. A pain score is an integer — leaving
    // the knob between two of them would imply a precision the question does
    // not have.
    at.value = withSpring(Math.round(raw * PAIN_MAX) / PAIN_MAX, {
      damping: 18,
      stiffness: 220,
    });
  };

  /**
   * One point up or down, for VoiceOver's swipe on an adjustable.
   *
   * Writes `at` directly rather than springing to it: the reaction above turns
   * that into the same `onChange` and the same selection tick a finger would
   * have produced, so there is one path out of this control however the value
   * was reached. A spring would be the honest match for a tap — but this
   * spring overshoots by more than half a point, and an assistive adjustment
   * that momentarily announces the wrong number is worse than one that does
   * not animate.
   */
  const nudge = (by: number) => {
    const next = Math.min(Math.max(score + by, PAIN_MIN), PAIN_MAX);
    if (next === score) return;
    at.value = (next - PAIN_MIN) / (PAIN_MAX - PAIN_MIN);
  };

  const pan = Gesture.Pan()
    .minDistance(0)
    .onBegin((event) => {
      'worklet';
      at.value = Math.min(Math.max((event.x - PAD) / span, 0), 1);
    })
    .onUpdate((event) => {
      'worklet';
      at.value = Math.min(Math.max((event.x - PAD) / span, 0), 1);
    })
    .onEnd((event) => {
      'worklet';
      settle(event.x);
    });

  const knob = useAnimatedStyle(() => ({
    transform: [{ translateX: PAD + at.value * span - KNOB / 2 }],
  }));

  /**
   * The badge rides the knob, so it always points at the value it describes —
   * but stops short of either edge.
   *
   * Unclamped it walks off the screen at the top of the scale, which is exactly
   * where it is guaranteed to be showing: "above usual" is true for every score
   * over their high-water mark, and 10 sits hard against the right margin.
   */
  const badge = useAnimatedStyle(() => {
    const x = PAD + at.value * span;
    // Offset by half the anchor's own width, because the anchor is a real box
    // centred on the value rather than a zero-width point. It has to be: a flex
    // child inside a zero-width parent is offered zero space, so the label
    // measured to nothing and the chip rendered as an invisible sliver.
    return {
      transform: [
        { translateX: Math.min(Math.max(x, BADGE_HALF), width - BADGE_HALF) - BADGE_HALF },
      ],
    };
  });

  const tone = painColor(score, scheme);
  const above = score > usual.high;
  const below = score < usual.low;

  // Fractions of the track, so every mark lands on the same points the knob does.
  const xAt = (value: number) => PAD + (value / PAIN_MAX) * span;
  const usualFrom = xAt(usual.low);
  const usualTo = xAt(usual.high);
  const here = xAt(score);

  const cy = TRACK_HEIGHT / 2;
  /** The wedge's own height at a fraction along it — what the ticks are sized
   * against, so they stay inside the shape at both ends. */
  const wedgeAt = (t: number) => WEDGE_MIN + (WEDGE_MAX - WEDGE_MIN) * t;

  return (
    <View style={styles.root}>
      {/* Always present, never blinking in and out. A chip that appears only
          when you cross a line makes the ordinary day look like the state with
          nothing to say about it — and it moves the whole track down the screen
          on the frame it arrives. Three states, one shape: above, below, and
          the day that is simply normal. */}
      <View style={styles.badgeRow}>
        <Animated.View style={[styles.badgeAnchor, badge]}>
          <View
            style={[
              styles.badge,
              {
                backgroundColor: above ? tone : below ? meter.positive : meter.track,
              },
            ]}>
            <Text
              numberOfLines={1}
              // Said once, in sentence case. The chip is set in caps for the
              // eye; read out, caps are what makes a screen reader spell.
              accessibilityLabel={
                above
                  ? 'Above your usual range'
                  : below
                    ? 'Below your usual range'
                    : 'Within your usual range'
              }
              style={[
                styles.badgeText,
                // Ink on a coloured chip, never white. Every stop on this
                // ramp is a light hue — white tops out near 3:1 on the red end
                // and falls under 2:1 through the amber middle, while ink
                // clears 6:1 the whole way across.
                { color: above || below ? primaryButton.dark.label : meter.caption },
              ]}>
              {above ? 'ABOVE USUAL RANGE' : below ? 'BELOW USUAL RANGE' : 'WITHIN USUAL RANGE'}
            </Text>
          </View>
        </Animated.View>
      </View>

      <GestureDetector gesture={pan}>
        <View
          // The primary input of the check-in, and until now a bare `View`: no
          // role, no value, and a pan gesture no assistive technology can
          // drive. `adjustable` is the one role that gives VoiceOver the
          // increment/decrement swipe, and the actions below are what it calls.
          accessible
          accessibilityRole="adjustable"
          accessibilityLabel="Pain today"
          // `now`/`min`/`max` for the range itself; `text` because iOS speaks
          // the three of them as a percentage, and "50%" is not what a 5 on a
          // pain scale means.
          accessibilityValue={{
            min: PAIN_MIN,
            max: PAIN_MAX,
            now: score,
            text: `${score} out of ${PAIN_MAX}, ${painBand(score).label.toLowerCase()}`,
          }}
          accessibilityActions={[
            { name: 'increment', label: 'More pain' },
            { name: 'decrement', label: 'Less pain' },
          ]}
          onAccessibilityAction={(event) => {
            if (event.nativeEvent.actionName === 'increment') nudge(1);
            if (event.nativeEvent.actionName === 'decrement') nudge(-1);
          }}
          style={styles.track}
          onLayout={(event) => setWidth(event.nativeEvent.layout.width)}>
          {width > 0 && (
            <Svg width={width} height={TRACK_HEIGHT}>
              <Defs>
                <LinearGradient id="wedge" x1="0" y1="0" x2="1" y2="0">
                  {ramp(scheme).map((stop) => (
                    <Stop key={stop.at} offset={stop.at} stopColor={stop.color} />
                  ))}
                </LinearGradient>
                {/* Hatching rather than a filled band: a solid block over a
                    gradient reads as a different colour, and the one thing
                    these markers must not do is change what the score
                    underneath them looks like. */}
                {/* The diagonal is drawn into the tile, not applied to it.
                    `patternTransform` is stored but never concatenated for
                    patterns on iOS in react-native-svg 15 — it is honoured for
                    gradients only — so a rotated bar inside an axis-aligned
                    cell gets clipped to that cell and comes out as a sparse
                    grid of triangles instead of hatching. Three strokes tile
                    seamlessly: the cell's own diagonal, plus the two corner
                    pieces that continue it into the neighbouring tiles. */}
                <Pattern id="hatch" patternUnits="userSpaceOnUse" width={8} height={8}>
                  <Path
                    d="M 0 8 L 8 0 M -1 1 L 1 -1 M 7 9 L 9 7"
                    stroke={colors.foreground}
                    strokeWidth={3}
                    opacity={0.16}
                  />
                </Pattern>
                {/* The same weave in the colour of the answer, for the stretch
                    between the usual range and where the finger actually is.
                    That gap is the whole point of the marker — not "you are
                    outside your range" but "you are this far outside it". */}
                <Pattern id="hatchTone" patternUnits="userSpaceOnUse" width={8} height={8}>
                  <Path
                    d="M 0 8 L 8 0 M -1 1 L 1 -1 M 7 9 L 9 7"
                    stroke={tone}
                    strokeWidth={3}
                    opacity={0.85}
                  />
                </Pattern>
              </Defs>

              {/* Everything the usual range does not cover, hatched. The clear
                  stretch in the middle is the ordinary day; it reads as the
                  default precisely because nothing has been drawn on it. */}
              <Rect x={0} y={0} width={Math.max(usualFrom, 0)} height={TRACK_HEIGHT} fill="url(#hatch)" />
              <Rect
                x={usualTo}
                y={0}
                width={Math.max(width - usualTo, 0)}
                height={TRACK_HEIGHT}
                fill="url(#hatch)"
              />

              {(above || below) && (
                <Rect
                  x={Math.min(here, above ? usualTo : usualFrom)}
                  y={0}
                  width={Math.abs(here - (above ? usualTo : usualFrom))}
                  height={TRACK_HEIGHT}
                  fill="url(#hatchTone)"
                />
              )}

              {/* Where the ordinary day begins and ends. Keyed by which edge it
                  is, not by where it sits: the two collapse onto the same
                  coordinate whenever the usual range is a single value, and a
                  key of `x` then names both marks the same thing. */}
              {([['from', usualFrom], ['to', usualTo]] as const).map(([edge, x]) => (
                <Rect
                  key={edge}
                  x={x - 1}
                  y={0}
                  width={2}
                  height={TRACK_HEIGHT}
                  fill={colors.foreground}
                  opacity={0.28}
                />
              ))}

              {/* Nothing at the left, everything at the right. Both edges taper
                  from the same centre line so the wedge grows about its middle
                  rather than sitting on a baseline. Stroked with its own fill to
                  round every corner — see ROUND. */}
              <Path
                d={[
                  `M ${PAD + ROUND} ${cy - (WEDGE_MIN - ROUND * 2) / 2}`,
                  `L ${width - PAD - ROUND} ${cy - (WEDGE_MAX - ROUND * 2) / 2}`,
                  `L ${width - PAD - ROUND} ${cy + (WEDGE_MAX - ROUND * 2) / 2}`,
                  `L ${PAD + ROUND} ${cy + (WEDGE_MIN - ROUND * 2) / 2}`,
                  'Z',
                ].join(' ')}
                fill="url(#wedge)"
                stroke="url(#wedge)"
                strokeWidth={ROUND * 2}
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              {/* Notches, one per point, sized against the wedge so they stay
                  inside it as it swells. They are what turn a smooth ramp back
                  into a scale you can count along. */}
              {Array.from({ length: PAIN_MAX - 1 }, (_, i) => i + 1).map((n) => {
                const h = wedgeAt(n / PAIN_MAX) * 0.42;
                return (
                  <Rect
                    key={n}
                    x={xAt(n) - 1}
                    y={cy - h / 2}
                    width={2}
                    height={h}
                    rx={1}
                    fill="#FFFFFF"
                    opacity={0.34}
                  />
                );
              })}
            </Svg>
          )}

          {/* A playhead, not just a handle. The line through it is what makes
              the knob point at a place on the scale rather than float over it —
              without it the eye has to guess which part of a 30pt disc is the
              value. */}
          <Animated.View style={[styles.knobWrap, knob]}>
            <View style={[styles.knobLine, { backgroundColor: colors.foreground }]} />
            <View
              style={[styles.knob, { borderColor: colors.foreground, backgroundColor: tone }]}
            />
          </Animated.View>
        </View>
      </GestureDetector>

      {/* Sits under the hatching it names, not at the margin — a label for a
          stretch of the track has to point at that stretch. Clamped so a usual
          range up at the hot end cannot push it off the right edge. */}
      <View
        style={[
          styles.legend,
          { marginLeft: Math.min(usualFrom, Math.max(width - 152, 0)) },
        ]}>
        <Text
          accessibilityLabel={`Usual range, ${usual.low} to ${usual.high}`}
          style={[styles.legendText, { color: meter.label }]}>
          USUAL RANGE {usual.low}–{usual.high}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignSelf: 'stretch',
  },
  /** Holds the badge's height whether or not one is showing, so arriving at a
   * score above the usual range does not shove the track down the screen. */
  badgeRow: {
    height: 30,
  },
  /** A real box, twice the chip's half-width, centred on the value by the
   * translate above. Not a zero-width point: Yoga offers a child no space
   * inside a zero-width parent, so the label collapsed and the chip never
   * appeared at all. */
  badgeAnchor: {
    position: 'absolute',
    left: 0,
    width: BADGE_HALF * 2,
    alignItems: 'center',
  },
  badge: {
    paddingHorizontal: 11,
    paddingVertical: 5,
    borderRadius: 20,
    borderCurve: 'continuous',
  },
  badgeText: {
    fontSize: 12,
    fontFamily: fonts.heavy,
    letterSpacing: 0.4,
  },
  track: {
    height: TRACK_HEIGHT,
    justifyContent: 'center',
  },
  knobWrap: {
    position: 'absolute',
    left: 0,
    width: KNOB,
    height: TRACK_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  knobLine: {
    position: 'absolute',
    width: 2,
    height: WEDGE_MAX + 14,
    borderRadius: 1,
  },
  knob: {
    width: KNOB,
    height: KNOB,
    borderRadius: KNOB / 2,
    borderWidth: 4,
  },
  legend: {
    marginTop: 2,
  },
  legendText: {
    fontSize: 12,
    fontFamily: fonts.bold,
    letterSpacing: 0.6,
  },
});
