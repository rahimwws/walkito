import { useEffect } from 'react';
import { AppState } from 'react-native';

import { buildUpcomingWeek, ensureGoals, refreshGoals, retestResults } from '@/entities/program';
import { painAreasOf } from '@/entities/leg-zone';
import { getIntake } from '@/entities/profile';

/** Complaints that are the plantar fascia's: heel and arch pain. */
const PLANTAR = ['heel', 'foot'];
/** Runner answers that mean the feet carry real weekly load. */
const LOADS_FEET = ['regular', 'racing', 'serious'];

/**
 * The weekly plan's goals: written once from what onboarding learned, then
 * kept current on every return to the app.
 *
 * Here, in the app layer, because the facts come from the profile and the
 * goals live with the program — two slices of one layer, which may not import
 * each other. This is the one place that is allowed to see both.
 */
export function usePlanGoals(onboarded: boolean): void {
  useEffect(() => {
    if (!onboarded) return;
    const intake = getIntake();
    // Onboarding stores complaints, the Settings map stores zones; both read as complaints here.
    const areas = painAreasOf(intake?.pain ?? []);
    const first = retestResults()[0];
    ensureGoals({
      painReported: areas.length > 0,
      footType: 'unknown',
      plantarPain: areas.some((area) => PLANTAR.includes(area)),
      loadsFeet: intake?.runner != null && LOADS_FEET.includes(intake.runner),
      firstGapPct: first?.symmetryPct ?? null,
      goal: intake?.goal ?? null,
      sport: intake?.sport ?? null,
      areas,
    });
    refreshGoals();
    buildUpcomingWeek();
    const sub = AppState.addEventListener('change', (state) => {
      if (state !== 'active') return;
      refreshGoals();
      buildUpcomingWeek();
    });
    return () => sub.remove();
  }, [onboarded]);
}
