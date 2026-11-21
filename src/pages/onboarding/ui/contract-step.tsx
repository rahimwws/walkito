import { useEffect, useRef, useState } from 'react';
import { PanResponder, StyleSheet, Text, View, type LayoutChangeEvent } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

const PAD_HEIGHT = 168;
const RADIUS = 24;
const STROKE = 3.5;
/** Diameter of the round stamp. */
const STAMP = 132;

/** How long the landed stamp is held before the flow moves on: cutting on
 * the press reads as an interruption. */
const SEAL_HOLD_MS = 1400;

export type ContractStepProps = {
  name: string;
  /** True while a finger is down on the pad. The page freezes its ScrollView
   * for the duration — otherwise the scroll claims the drag and the stroke
   * never gets past a few points. */
  onDrawingChange: (drawing: boolean) => void;
  /** 0 → 1 as the stamp comes down. Owned by the page so the CTA can start it. */
  stamp: SharedValue<number>;
  /** True once the button has been pressed: the stamp lands, a beat passes,
   * and only then is the flow allowed to move on. */
  sealing: boolean;
  /** Fired once the stamp has landed and been held. The page advances on
   * this, not on the button press. */
  onSealed: () => void;
};

/**
 * The commitment contract.
 *
 * The promise is the point, and the signature is theatre on purpose: nothing
 * is sent anywhere and nothing is stored. It is offered, never required: the
 * button under it agrees with or without ink, and the stamp lands either way.
 * As a gate it cost a fifth of the people who reached it.
 *
 * Said plainly under the pad, because implying a drawing is a legal signature
 * would be a lie.
 */
export function ContractStep({
  name,
  onDrawingChange,
  stamp,
  sealing,
  onSealed,
}: ContractStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const hasGlass = isLiquidGlassAvailable();
  const t = useT();

  const sealed = useRef(onSealed);
  sealed.current = onSealed;

  useEffect(() => {
    if (!sealing) return undefined;
    const id = setTimeout(() => sealed.current(), SEAL_HOLD_MS);
    return () => clearTimeout(id);
  }, [sealing]);

  const [paths, setPaths] = useState<string[]>([]);
  const [current, setCurrent] = useState('');
  const [size, setSize] = useState({ width: 0, height: PAD_HEIGHT });

  const onLayout = (e: LayoutChangeEvent) => setSize(e.nativeEvent.layout);

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
        setCurrent((d) => `${d} L ${locationX.toFixed(1)} ${locationY.toFixed(1)}`);
      },
      onPanResponderRelease: () => {
        setCurrent((d) => {
          if (d.length > 0) setPaths((prev) => [...prev, d]);
          return '';
        });
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
          <Text style={[styles.hint, { color: meter.unit }]}>
            {t('onboarding.contract.hint')}
          </Text>
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
              <Text style={[styles.stampTop, { color: PRIMARY }]}>
                {t('onboarding.contract.stampTop')}
              </Text>
              <Text style={[styles.stampText, { color: PRIMARY }]}>
                {t('onboarding.contract.stampText')}
              </Text>
              <View style={[styles.stampRule, { backgroundColor: PRIMARY }]} />
              {/* Two rows, and which half of the phrase each holds is the
                  language's decision — English leads with the qualifier,
                  Russian and Spanish with the noun. */}
              <Text style={[styles.stampBottom, { color: PRIMARY }]}>
                {t('onboarding.contract.stampLine1')}
              </Text>
              <Text style={[styles.stampBottom, { color: PRIMARY }]}>
                {t('onboarding.contract.stampLine2')}
              </Text>
            </View>
          </Animated.View>
        </Animated.View>
      </View>

      {/* Two whole sentences rather than a prefix glued onto a shared tail:
          "{name}, your " only works in front of an English possessive. */}
      <Text style={[styles.note, { color: meter.unit }]}>
        {name.length > 0
          ? t('onboarding.contract.noteNamed', { name })
          : t('onboarding.contract.note')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, paddingTop: 4 },
  list: { gap: 12 },
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  item: { flex: 1, ...fonts.regular(15), lineHeight: 21 },
  pad: {
    height: PAD_HEIGHT,
    marginTop: 18,
    justifyContent: 'center',
  },
  padShape: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
  },
  hint: { alignSelf: 'center', ...fonts.regular(15) },
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
  stampTop: fonts.bold(9.5, 1.6),
  stampText: fonts.heavy(18, 0.4),
  stampRule: { width: 42, height: 1.5, marginVertical: 3 },
  stampBottom: fonts.semibold(9, 1.1),
  note: { marginTop: 10, ...fonts.regular(12), textAlign: 'center' },
});
