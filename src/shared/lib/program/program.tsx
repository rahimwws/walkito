import { createContext, use, useCallback, useMemo, type ReactNode } from 'react';
import {
  Easing,
  ReduceMotion,
  useSharedValue,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

/**
 * How long the whole gesture takes, and on what curve.
 *
 * One duration and one easing for every part of it — the slab rising, the sheet
 * arriving under it, the header swapping, the tab bar leaving. Anything moving
 * on its own timing would break the illusion that these are one object being
 * pulled up rather than four animations that happen to start together.
 */
export const PROGRAM_MS = 460;
export const PROGRAM_EASING = Easing.bezier(0.23, 1, 0.32, 1);

type ProgramValue = {
  /** 0 closed, 1 open. Every piece of the transition reads this. */
  progress: SharedValue<number>;
  /**
   * 0 the day list in its sheet, 1 one session filling the screen.
   *
   * A second axis rather than a longer first one. The two motions are not one
   * gesture continued: the first is a sheet pulled up over the home screen and
   * is drag-dismissable, the second is a push into a page dismissed by a back
   * button. Folded into one number, a downward flick on the session screen
   * would close the entire program.
   */
  detail: SharedValue<number>;
  /**
   * How far the day list is scrolled.
   *
   * The sheet is drag-dismissable from anywhere on its face, which stopped
   * being harmless once the face held a scrolling list: a flick back up to
   * re-read the first day would otherwise throw the whole program away. The
   * pan reads this and refuses to start unless the list is at its top.
   */
  scrollTop: SharedValue<number>;
  open: () => void;
  close: () => void;
  toggle: () => void;
  openDetail: () => void;
  closeDetail: () => void;
};

const ProgramContext = createContext<ProgramValue | null>(null);

/**
 * The one place the program transition lives.
 *
 * A shared value rather than React state, and deliberately: the header, the
 * slab, the sheet and the tab bar all move off the same number, and pushing it
 * through state would re-render four subtrees on every frame of a transition
 * that is meant to be the smoothest thing in the app.
 */
export function ProgramProvider({ children }: { children: ReactNode }) {
  const progress = useSharedValue(0);
  const detail = useSharedValue(0);
  const scrollTop = useSharedValue(0);

  const spring = useCallback((target: SharedValue<number>, value: number) => {
    target.value = withTiming(value, {
      duration: PROGRAM_MS,
      easing: PROGRAM_EASING,
      reduceMotion: ReduceMotion.System,
    });
  }, []);

  const value = useMemo<ProgramValue>(() => {
    const to = (next: number) => spring(progress, next);
    /**
     * Closing the sheet resets the detail axis without animating it.
     *
     * The sheet is on its way off screen, so a 460ms slide back to the list
     * behind it is work nobody sees — but leaving it at 1 means the next open
     * comes up already on a session, which is not where the user left off in
     * any sense they would recognise.
     */
    const shut = () => {
      to(0);
      detail.value = 0;
      // `scrollTop` is deliberately NOT reset here. Zeroing it without moving
      // the list made the shared value lie: the pan asks it whether the list is
      // at its top before claiming a downward drag, so a program closed while
      // scrolled reopened claiming to be at the top — and the first pull down,
      // the natural way to get back to day one, dismissed the whole thing
      // instead of scrolling. Only something that actually scrolls the list may
      // write to it; the page does that on close.
    };
    return {
      progress,
      detail,
      scrollTop,
      open: () => to(1),
      close: shut,
      // Read on the JS thread, so it needs the current value rather than a
      // worklet: `.value` is safe here because a tap is not a frame loop.
      toggle: () => (progress.value > 0.5 ? shut() : to(1)),
      openDetail: () => spring(detail, 1),
      closeDetail: () => spring(detail, 0),
    };
  }, [progress, detail, scrollTop, spring]);

  return <ProgramContext.Provider value={value}>{children}</ProgramContext.Provider>;
}

/** Null outside the provider, so screens that never open the program — the
 * onboarding flow, for one — can share components with those that do. */
export function useProgram(): ProgramValue | null {
  return use(ProgramContext);
}
