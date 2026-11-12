import { useEffect, useRef, useState } from 'react';
import { Modal, StyleSheet } from 'react-native';
import Animated, { Easing, ReduceMotion, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { PaywallWall } from '@/pages/offer';
import { palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

const IN_MS = 520;
/** Raised by the tour's last tap, it waits for the tour: the last stop fades
 * out (220 ms) and only then takes its modal down, and one modal presenting
 * while another is still up does not show on iOS. A launch onto the wall has
 * nothing to wait for and presents at once, as it always did. */
const PRESENT_AFTER_MS = 360;

/**
 * The plans after the free first run (the "Day 1" session and the Home tour),
 * for somebody who said "Not now" on the paywall: the same plans at the same
 * prices (`PaywallWall`), carrying on from the day they have done.
 *
 * Nothing else is offered here: no second price and no deadline. An offer
 * that appears because the first was turned down is what App Review rejects
 * under Guideline 5.6, and a countdown is not a reason anybody trusts.
 *
 * A hard wall, as the paywall is: no close, and Android's back does nothing.
 * Buying or restoring makes `entitled` true, the root stops rendering this and
 * Home is theirs; leaving the app is the other way out, and it comes back on
 * the next launch. A modal rather than a route, so Home stays mounted under
 * it and is there the moment the purchase lands.
 */
export function OfferWall({ visible }: { visible: boolean }) {
  const scheme = useColorScheme();
  const [mounted, setMounted] = useState(visible);
  const progress = useSharedValue(0);
  /** Up from the first frame: a launch onto the wall, not the tour's end. */
  const atLaunch = useRef(visible);

  useEffect(() => {
    if (!visible) {
      atLaunch.current = false;
      setMounted(false);
      progress.value = 0;
      return undefined;
    }
    let frame = 0;
    const present = () => {
      setMounted(true);
      frame = requestAnimationFrame(() => {
        progress.value = withTiming(1, {
          duration: IN_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        });
      });
    };
    const wait = atLaunch.current ? 0 : PRESENT_AFTER_MS;
    atLaunch.current = false;
    if (wait === 0) {
      present();
      return () => cancelAnimationFrame(frame);
    }
    const timer = setTimeout(present, wait);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [visible, progress]);

  const fade = useAnimatedStyle(() => ({ opacity: progress.value }));

  if (!mounted) return null;

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={() => undefined}>
      <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: palette[scheme].background }, fade]}>
        <PaywallWall />
      </Animated.View>
    </Modal>
  );
}
