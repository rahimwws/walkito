import { useState } from 'react';
import { runOnJS, useAnimatedReaction } from 'react-native-reanimated';

import { useProgram } from './program';

/**
 * Whether the plan overlay is up over the tabs.
 *
 * The overlay is not a route, so the tab under it stays focused and
 * `useIsFocused` keeps saying true while the plan covers every point of the
 * screen. A mascot on a tab (Home, Progress) reads this as well, so it holds
 * still under the plan and saves its one move for when its tab is looked at
 * again.
 *
 * Read off the shared value the overlay moves on, past the same sliver the
 * overlay itself counts as up (`blocking` in `app/layouts/program-overlay`),
 * and called from the small component that needs it, so the plan's coming and
 * going re-renders a mascot rather than the page. False outside the provider.
 */
export function usePlanOver(): boolean {
  const program = useProgram();
  const progress = program?.progress;
  const [over, setOver] = useState(false);
  useAnimatedReaction(
    () => (progress == null ? false : progress.value > 0.02),
    (now, was) => {
      if (now !== was) runOnJS(setOver)(now);
    },
    [progress],
  );
  return over;
}
