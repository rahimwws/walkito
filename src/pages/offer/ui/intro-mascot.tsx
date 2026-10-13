import { useIsFocused } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import Animated, { FadeInDown, ReduceMotion } from 'react-native-reanimated';

import { Mascot, type MascotHandle, type MascotRig, type MascotShot } from '@/shared/ui/mascot';
import { useSplashRevealed } from '@/shared/ui/splash';

/** He comes up into place, then makes his move. */
const SHOT_DELAY_MS = 450;

/**
 * The mascot on an intro step, alive: he comes up, plays `shot` once, then
 * breathes while the step is on screen.
 *
 * Paused whenever he cannot be seen: under the splash (the paywall can be the
 * first screen at launch, so he keeps his move until it has gone), while the
 * route is not focused, and while the app is in the background. He unmounts
 * with his step, so nothing runs behind the next one. Reduce Motion gets the
 * still art, which `Mascot` draws by itself, and the move is skipped.
 *
 * Decorative: the step's words say everything, so he is hidden from screen
 * readers.
 */
export function IntroMascot({
  rig,
  shot,
  size,
  surface,
  mirrored = false,
}: {
  rig: MascotRig;
  shot: MascotShot;
  size: number;
  /** What he stands on, for his outline in the dark. */
  surface: string;
  mirrored?: boolean;
}) {
  const mascot = useRef<MascotHandle>(null);
  const revealed = useSplashRevealed();
  const focused = useIsFocused();
  const active = useAppActive();
  const live = revealed && focused && active;

  const played = useRef(false);
  useEffect(() => {
    if (played.current || !live) return undefined;
    const timer = setTimeout(() => {
      played.current = true;
      mascot.current?.play(shot);
    }, SHOT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [live, shot]);

  return (
    <Animated.View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      entering={FadeInDown.duration(420).reduceMotion(ReduceMotion.System)}
      style={{ width: size, height: size }}>
      <Mascot ref={mascot} rig={rig} size={size} surface={surface} mirrored={mirrored} paused={!live} />
    </Animated.View>
  );
}

/** Whether the app is in front: he stops breathing behind it. */
function useAppActive(): boolean {
  const [active, setActive] = useState(AppState.currentState === 'active');
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (next) => setActive(next === 'active'));
    return () => subscription.remove();
  }, []);
  return active;
}
