import { useEffect, useRef, useState } from 'react';
import { runOnJS, useAnimatedReaction } from 'react-native-reanimated';

import { PROGRAM_MS, useProgram } from '@/shared/lib/program';
import { Mascot, sleepingRig, type MascotHandle, type MascotRig, type MascotShot } from '@/shared/ui/mascot';

/**
 * Whether the plan's list is what is on screen: the overlay up, and no session
 * pushed over it.
 *
 * The plan stays mounted under every tab with the overlay hidden, so a mascot
 * on it would otherwise breathe for a screen nobody has opened. Read off the
 * values the overlay moves on, in the small component that needs it, so the
 * plan's coming and going re-renders a mascot and not the page (as
 * `usePlanShown` does for the countdown in `rest-button.tsx`). The goal's
 * stations read it too, to rise into place the first time they are seen.
 */
export function useListInView(): boolean {
  const program = useProgram();
  const progress = program?.progress;
  const detail = program?.detail;
  // Outside the provider there is no overlay to be hidden behind.
  const [inView, setInView] = useState(program == null);
  useAnimatedReaction(
    () => (progress == null || detail == null ? true : progress.value > 0.01 && detail.value < 0.5),
    (now, was) => {
      if (now !== was) runOnJS(setInView)(now);
    },
    [progress, detail],
  );
  return inView;
}

export type TodayMascotProps = {
  rig: MascotRig;
  size: number;
  /** What it stands on: in the dark its outline is drawn in it. */
  surface: string;
  /** A sheet is over it, or it is leaving with one. */
  covered?: boolean;
  /**
   * The one move it makes, the first time it is seen with nothing over it.
   * None on a flare day or a rest day's sleeper beyond its nod: nothing on
   * those days celebrates.
   */
  shot?: MascotShot;
  /** Drawn facing the other way: a pointer at the right edge points back in. */
  mirrored?: boolean;
};

/**
 * The one mascot on the plan screen: on today's card, or once the day is done
 * on the card that leads it (`TodayDoneCard`).
 *
 * Breathes only while the plan is open with nothing over it: the overlay stays
 * mounted under every tab, and a loop there would run for a screen nobody is
 * looking at. Its move plays once per mount, once whatever brought it into
 * view has landed (the plan rises over `PROGRAM_MS`, a sheet over less). The
 * host keys it by pose, so the card turning from a session into a finished
 * day is a new mascot with its own one move. Reduce Motion is the mascot's
 * own business: it draws the still art and plays nothing.
 */
export function TodayMascot({ rig, size, surface, covered = false, shot, mirrored = false }: TodayMascotProps) {
  const inView = useListInView();
  const still = covered || !inView;
  const mascot = useRef<MascotHandle>(null);
  const played = useRef(false);

  useEffect(() => {
    if (played.current || still || shot == null) return undefined;
    const timer = setTimeout(() => {
      played.current = true;
      mascot.current?.play(shot);
    }, PROGRAM_MS);
    return () => clearTimeout(timer);
  }, [still, shot]);

  return <Mascot ref={mascot} rig={rig} size={size} surface={surface} paused={still} mirrored={mirrored} />;
}

/**
 * The mascot asleep, on a rest day.
 *
 * Only for a planned rest: never a test day, never a relief or recovery
 * session, which are days with something to do. Asleep rather than mid-move,
 * so it says what a rest day is for rather than turning it into another thing
 * to perform. One sleepy nod the first time it is seen, then only its slow
 * breath, and that only while the plan is open with nothing over it.
 */
export function RestMascot({
  size,
  surface,
  covered = false,
}: {
  size: number;
  /** What it lies on: in the dark its outline is drawn in it. */
  surface: string;
  /** A sheet is over it, or it is leaving with one. */
  covered?: boolean;
}) {
  return <TodayMascot rig={sleepingRig} size={size} surface={surface} covered={covered} shot="nod" />;
}
