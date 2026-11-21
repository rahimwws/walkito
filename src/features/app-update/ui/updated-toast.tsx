import { useCallback, useEffect, useRef, useState } from 'react';
import { AccessibilityInfo, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { scheduleOnRN } from 'react-native-worklets';

import { colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { settle } from '@/shared/lib/motion';

/** On screen this long before it leaves by itself. */
const HOLD_MS = 2500;

const motion = ReduceMotion.System;

type UpdatedToastProps = {
  visible: boolean;
  /** It has gone — by its timer or by a tap. */
  onHidden: () => void;
};

/**
 * "Walkito is up to date", once, on the first screen after the restart.
 *
 * Small, at the top, gone on its own: it is news, not a question.
 *
 * Not a Modal. It floats over the root stack and lets touches through
 * everywhere but itself, so the first screen is usable the moment it appears.
 */
export function UpdatedToast({ visible, onHidden }: UpdatedToastProps) {
  const insets = useSafeAreaInsets();
  const reduceMotion = useReducedMotion();
  const t = useT();

  const [mounted, setMounted] = useState(false);
  const leaving = useRef(false);
  const hidden = useRef(onHidden);
  hidden.current = onHidden;

  const show = useSharedValue(0);

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
    if (reduceMotion) {
      show.value = withTiming(1, { duration: 220, reduceMotion: ReduceMotion.Never });
    } else {
      show.value = settle(1, 380, motion);
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

  if (!mounted) return null;

  return (
    <View style={[styles.layer, { top: insets.top + 6 }]} pointerEvents="box-none">
      <Animated.View
        style={[
          styles.pill,
          { backgroundColor: colors.surface, borderColor: colors.separator },
          pillStyle,
        ]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('update.appliedNote')}
          accessibilityLiveRegion="polite"
          onPress={leave}
          hitSlop={8}
          style={styles.row}>
          <Text style={[styles.text, { color: colors.text }]} numberOfLines={1}>
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
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  text: {
    ...fonts.semibold(17),
    flexShrink: 1,
  },
});
