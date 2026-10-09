import { useCallback, useEffect, useRef, useState } from 'react';
import { AccessibilityInfo, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { scheduleOnRN } from 'react-native-worklets';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { settle } from '@/shared/lib/motion';

import { MASCOT_STILL } from '../config/mascot';

/** On screen this long before it leaves by itself. */
const HOLD_MS = 2500;
/** The mascot's box; the still has air around him, so it is drawn a little
 * larger than the row and pulled in with negative margins. */
const FACE = 46;

const motion = ReduceMotion.System;

type UpdatedToastProps = {
  visible: boolean;
  /** It has gone — by its timer or by a tap. */
  onHidden: () => void;
};

/**
 * "Walkito is up to date", once, on the first screen after the restart.
 *
 * The same mascot, in the same pose, that the reload screen just faded out —
 * so the restart reads as one gesture that ends here, rather than as the app
 * having quit. Small, at the top, gone on its own: it is news, not a question.
 *
 * Not a Modal. It floats over the root stack and lets touches through
 * everywhere but itself, so the first screen is usable the moment it appears.
 */
export function UpdatedToast({ visible, onHidden }: UpdatedToastProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const reduceMotion = useReducedMotion();
  const t = useT();

  const [mounted, setMounted] = useState(false);
  const leaving = useRef(false);
  const hidden = useRef(onHidden);
  hidden.current = onHidden;

  const show = useSharedValue(0);
  const pop = useSharedValue(0);

  useEffect(() => {
    if (visible) setMounted(true);
  }, [visible]);

  const finish = useCallback(() => {
    leaving.current = false;
    setMounted(false);
    hidden.current();
  }, []);

  const leave = useCallback(() => {
    if (leaving.current) return;
    leaving.current = true;
    const done = (finished?: boolean) => {
      'worklet';
      if (finished) scheduleOnRN(finish);
    };
    if (reduceMotion) {
      show.value = withTiming(0, { duration: 200, reduceMotion: ReduceMotion.Never }, done);
      return;
    }
    show.value = withTiming(
      0,
      { duration: 260, easing: Easing.in(Easing.cubic), reduceMotion: motion },
      done,
    );
  }, [reduceMotion, show, finish]);

  useEffect(() => {
    if (!mounted) return undefined;
    leaving.current = false;
    show.value = 0;
    pop.value = 0;
    if (reduceMotion) {
      show.value = withTiming(1, { duration: 220, reduceMotion: ReduceMotion.Never });
      pop.value = 1;
    } else {
      show.value = settle(1, 380, motion);
      // He lands a beat after the pill.
      pop.value = withDelay(120, settle(1, 420, motion));
    }
    AccessibilityInfo.announceForAccessibility(t('update.appliedNote'));
    const id = setTimeout(leave, HOLD_MS);
    return () => clearTimeout(id);
    // Once per appearance; `t` and `leave` do not start a new one.
  }, [mounted]);

  const pillStyle = useAnimatedStyle(() => {
    if (reduceMotion) return { opacity: show.value };
    return {
      opacity: Math.min(1, show.value * 2),
      transform: [
        { translateY: (1 - show.value) * -(insets.top + 72) },
        { scale: 0.92 + 0.08 * show.value },
      ],
    };
  });

  const faceStyle = useAnimatedStyle(() => ({
    transform: [{ scale: 0.4 + 0.6 * pop.value }, { rotate: `${(1 - pop.value) * -14}deg` }],
  }));

  if (!mounted) return null;

  return (
    <View style={[styles.layer, { top: insets.top + 6 }]} pointerEvents="box-none">
      <Animated.View
        style={[
          styles.pill,
          { backgroundColor: colors.card, borderColor: meter.divider },
          pillStyle,
        ]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('update.appliedNote')}
          accessibilityLiveRegion="polite"
          onPress={leave}
          hitSlop={8}
          style={styles.row}>
          <Animated.Image
            source={MASCOT_STILL}
            style={[styles.face, faceStyle]}
            resizeMode="contain"
            fadeDuration={0}
          />
          <Text style={[styles.text, { color: colors.foreground }]} numberOfLines={1}>
            {t('update.appliedNote')}
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  layer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  pill: {
    borderRadius: 28,
    borderCurve: 'continuous',
    borderWidth: StyleSheet.hairlineWidth,
    maxWidth: '92%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingLeft: 8,
    paddingRight: 20,
    gap: 6,
  },
  face: {
    width: FACE,
    height: FACE,
    marginVertical: -4,
  },
  text: {
    ...fonts.semibold(16, -0.2),
    flexShrink: 1,
  },
});
