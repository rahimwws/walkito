import { useEffect } from 'react';
import { AppState } from 'react-native';

import { rebuildProgram } from '@/entities/program';

/**
 * Keeps "today" in the plan current across midnight.
 *
 * The plan's day is derived from the start date and the clock, and it is
 * derived into a value every screen reads. An app left open overnight used to
 * wake on yesterday's day number — yesterday's session, yesterday's brief —
 * until it was killed. Rebuilding on the way back to the foreground costs an
 * array of at most 84 records.
 */
export function useProgramClock(): void {
  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') rebuildProgram();
    });
    return () => sub.remove();
  }, []);
}
