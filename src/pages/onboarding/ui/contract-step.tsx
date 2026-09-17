import LottieView from 'lottie-react-native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PanResponder, StyleSheet, Text, View, type LayoutChangeEvent } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

const PAD_HEIGHT = 168;
const RADIUS = 24;
const STROKE = 3.5;
/** Diameter of the round stamp. */
const STAMP = 132;

const CEREMONY = require('@assets/lottie/contract.json');
/**
 * Where the ceremony actually starts.
 *
 * Measured off the file: frames 1–60 barely move — a couple of units of change
 * per frame against 25–31 later on — so the opening two and a half seconds
 * read as something already half-done rather than as a beginning. The still
 * held before signing is frame 60, and playback runs from there.
 */
const CEREMONY_FRAMES = 121;
const CEREMONY_FROM = 60;
const CEREMONY_FPS = 24;

const AnimatedLottie = Animated.createAnimatedComponent(LottieView);

/** Long enough to read as ink, short enough that a stray tap is not a
 * signature. Below this the Continue button stays disabled. */
const MIN_POINTS = 12;

export type ContractStepProps = {
  name: string;
  /** Whether anything has been drawn. The page's button reads this. */
  onSignedChange: (signed: boolean) => void;
  /** True while a finger is down on the pad. The page freezes its ScrollView
   * for the duration — otherwise the scroll claims the drag and the stroke
   * never gets past a few points. */
  onDrawingChange: (drawing: boolean) => void;
  /** 0 → 1 as the stamp comes down. Owned by the page so the CTA can start it. */
  stamp: SharedValue<number>;
  /** True once the button has been pressed: the stamp lands, then the
   * animation plays out, and only then is the flow allowed to move on. */
  sealing: boolean;
  /** Fired when the whole ceremony — stamp, animation, and a beat after it —
   * has finished. The page advances on this, not on the button press. */
  onSealed: () => void;
};

/**
 * The commitment contract.
 *
 * A signature is the point, and it is theatre on purpose: nothing is sent
 * anywhere and nothing is stored. What it buys is a moment where the person
 * has to physically do something to agree, which is a far stronger commitment
 * than a checkbox — the same reason paper contracts are still signed by hand.
 *
 * Said plainly under the pad, because implying a drawing is a legal signature
 * would be a lie.
 */
export function ContractStep({
  name,
  onSignedChange,
  onDrawingChange,
  stamp,
  sealing,
  onSealed,
}: ContractStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const hasGlass = isLiquidGlassAvailable();

  const sealed = useRef(onSealed);
  sealed.current = onSealed;

  /**
   * The frame, as a fraction. Held rather than played.
   *
   * `autoPlay={false}` plus a plain `progress` number did not hold it — the
   * view started itself the moment the screen appeared, which is the one thing
   * this must not do. Driving the frame from a shared value is the same
   * arrangement the welcome mascot uses and leaves nothing able to start it
   * but this component.
   */
  const frame = useSharedValue(CEREMONY_FROM / CEREMONY_FRAMES);
  const ceremonyProps = useAnimatedProps(() => ({ progress: frame.value }));

  const finish = useCallback(() => {
    // A beat after the last frame; cutting on it reads as an interruption.
    setTimeout(() => sealed.current(), 1000);
  }, []);

  useEffect(() => {
    if (!sealing) return;
    frame.value = withTiming(
      1,
      {
        duration: ((CEREMONY_FRAMES - CEREMONY_FROM) / CEREMONY_FPS) * 1000,
        easing: Easing.linear,
        reduceMotion: ReduceMotion.System,
      },
      (done) => {
        'worklet';
        if (done) runOnJS(finish)();
      },
    );
  }, [sealing, frame, finish]);

  const [paths, setPaths] = useState<string[]>([]);
  const [current, setCurrent] = useState('');
  const [size, setSize] = useState({ width: 0, height: PAD_HEIGHT });
  const points = useRef(0);

  const onLayout = (e: LayoutChangeEvent) => setSize(e.nativeEvent.layout);

  const report = useCallback(
    (n: number) => onSignedChange(n >= MIN_POINTS),
    [onSignedChange],
  );

  // PanResponder rather than a gesture handler: this needs the raw touch
  // stream and nothing else — no pan/tap disambiguation, no worklet, and it
  // must not fight the page's own gestures for the same finger.
  const drawing = useRef(onDrawingChange);
  drawing.current = onDrawingChange;

  const responder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      // Claim the touch before the enclosing ScrollView can read it as a pan.
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: (e) => {
        drawing.current(true);
        const { locationX, locationY } = e.nativeEvent;
        setCurrent(`M ${locationX.toFixed(1)} ${locationY.toFixed(1)}`);
      },
      onPanResponderMove: (e) => {
        const { locationX, locationY } = e.nativeEvent;
        points.current += 1;
        setCurrent((d) => `${d} L ${locationX.toFixed(1)} ${locationY.toFixed(1)}`);
      },
      onPanResponderRelease: () => {
        setCurrent((d) => {
          if (d.length > 0) setPaths((prev) => [...prev, d]);
          return '';
        });
        report(points.current);
        drawing.current(false);
      },
      onPanResponderTerminate: () => {
        drawing.current(false);
      },
    }),
  ).current;

  const clear = () => {
    setPaths([]);
    setCurrent('');
    points.current = 0;
    onSignedChange(false);
  };

  const hasInk = paths.length > 0 || current.length > 0;

  // Comes down fast and overshoots nothing — a stamp lands, it does not bounce.
  const stampStyle = useAnimatedStyle(() => ({
    opacity: stamp.value === 0 ? 0 : 1,
    transform: [
      { rotate: '-14deg' },
      { scale: 2.4 - stamp.value * 1.4 },
    ],
  }));
  const stampInk = useAnimatedStyle(() => ({ opacity: stamp.value }));

  return (
    <View style={styles.wrap}>

      <View style={styles.stage}>
        <AnimatedLottie
          source={CEREMONY}
          style={styles.ceremony}
          resizeMode="contain"
          autoPlay={false}
          loop={false}
          animatedProps={ceremonyProps}
        />
      </View>


      <View onLayout={onLayout} style={styles.pad} {...responder.panHandlers}>
        {/* Glass as an absolute sibling, never a parent — nested glass renders
            empty on iOS 26. */}
        {hasGlass ? (
          <GlassView
            glassEffectStyle="regular"
            // Regular glass over a near-black page is all but invisible: the
            // pad read as empty space and there was nothing to aim at. The
            // tint and rim are what make it a surface you can see to sign on.
            tintColor={scheme === 'dark' ? 'rgba(255,255,255,0.10)' : 'rgba(17,17,20,0.05)'}
            style={[
              StyleSheet.absoluteFill,
              styles.padShape,
              { borderWidth: 1, borderColor: meter.track },
            ]}
          />
        ) : (
          <View
            style={[
              StyleSheet.absoluteFill,
              styles.padShape,
              { backgroundColor: colors.card, borderColor: meter.track, borderWidth: 1 },
            ]}
          />
        )}
        {!hasInk && (
          <Text style={[styles.hint, { color: meter.unit }]}>Sign here</Text>
        )}
        <Svg width={size.width} height={size.height} style={StyleSheet.absoluteFill}>
          {[...paths, current].filter(Boolean).map((d, i) => (
            <Path
              key={i}
              d={d}
              stroke={PRIMARY}
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          ))}
        </Svg>

        {hasInk && (
          <Text onPress={clear} style={[styles.clear, { color: meter.unit }]}>
            ✕
          </Text>
        )}

        {/* Lands over the signature once the button is pressed. Round and
            double-ruled, the way a rubber stamp actually is — a rectangle read
            as a badge rather than as something pressed onto the page. */}
        <Animated.View pointerEvents="none" style={[styles.stampWrap, stampStyle]}>
          <Animated.View style={[styles.stamp, { borderColor: PRIMARY }, stampInk]}>
            <View style={[styles.stampRing, { borderColor: PRIMARY }]}>
              <Text style={[styles.stampTop, { color: PRIMARY }]}>★ WALKITO ★</Text>
              <Text style={[styles.stampText, { color: PRIMARY }]}>COMMITTED</Text>
              <View style={[styles.stampRule, { backgroundColor: PRIMARY }]} />
              <Text style={[styles.stampBottom, { color: PRIMARY }]}>PAIN-FREE</Text>
              <Text style={[styles.stampBottom, { color: PRIMARY }]}>RUNNING</Text>
            </View>
          </Animated.View>
        </Animated.View>
      </View>

      <Text style={[styles.note, { color: meter.unit }]}>
        {name.length > 0 ? `${name}, your ` : 'Your '}signature stays on this device.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, paddingTop: 4 },
  list: { gap: 12 },
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  item: { flex: 1, fontSize: 15, lineHeight: 21, fontFamily: fonts.regular },
  // Pulled up under the heading and given real size — this is the screen's
  // subject, not an illustration beside it.
  // Fixed height and clipped, so scaling the character up inside it enlarges
  // him without the block growing and pushing the pad off the screen again.
  stage: {
    height: 208,
    marginTop: -6,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  ceremony: { width: '100%', height: 208, transform: [{ scale: 1.42 }] },
  pad: {
    height: PAD_HEIGHT,
    marginTop: 18,
    justifyContent: 'center',
  },
  padShape: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
  },
  hint: { alignSelf: 'center', fontSize: 15, fontFamily: fonts.regular },
  clear: { position: 'absolute', top: 10, right: 14, fontSize: 17, padding: 4 },
  // Sits low and hangs past the pad's bottom edge, the way a stamp pressed
  // over a signature would overlap whatever is under it.
  stampWrap: { position: 'absolute', right: 14, bottom: 8 },
  stamp: {
    width: STAMP,
    height: STAMP,
    borderRadius: STAMP / 2,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stampRing: {
    width: STAMP - 14,
    height: STAMP - 14,
    borderRadius: (STAMP - 14) / 2,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
  },
  stampTop: { fontSize: 9.5, fontFamily: fonts.bold, letterSpacing: 1.6 },
  stampText: { fontSize: 18, fontFamily: fonts.heavy, letterSpacing: 0.4 },
  stampRule: { width: 42, height: 1.5, marginVertical: 3 },
  stampBottom: { fontSize: 9, fontFamily: fonts.semibold, letterSpacing: 1.1 },
  note: { marginTop: 10, fontSize: 12, fontFamily: fonts.regular, textAlign: 'center' },
});
