import { useEffect, useRef, useState } from 'react';
import { Modal, StyleSheet } from 'react-native';
import Animated, { Easing, ReduceMotion, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { PaywallWall } from '@/pages/offer';
import { palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

const IN_MS = 520;
/** Raised by a tap, it waits a beat: whatever the tap was on (a sheet, the
 * plan) may still be going, and one modal presenting while another is still
 * up does not show on iOS. A launch onto it (the development preview) has
 * nothing to wait for and presents at once. */
const PRESENT_AFTER_MS = 360;

/**
 * The plans over Home, for somebody who said "Not now" on the paywall and is
 * looking around: raised by a tap on something locked (`askForPlans`), never
 * on its own. The same plans at the same prices (`PaywallWall`), carrying on
 * from the day they have done.
 *
 * Nothing else is offered here: no second price and no deadline. An offer
 * that appears because the first was turned down is what App Review rejects
 * under Guideline 5.6, and a countdown is not a reason anybody trusts.
 *
 * Still a hard paywall: nothing locked opens without buying. "Not now", the
 * close and Android's back put the plans down (`onClose`) and leave them where
 * they were. Buying or restoring makes `entitled` true, the root stops
 * rendering this and Home is theirs. A modal rather than a route, so Home
 * stays mounted under it and is there the moment the purchase lands.
 */
export function OfferWall({ visible, onClose }: { visible: boolean; onClose: () => void }) {
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
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={onClose}>
      <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: palette[scheme].background }, fade]}>
        <PaywallWall onClose={onClose} />
      </Animated.View>
    </Modal>
  );
}
