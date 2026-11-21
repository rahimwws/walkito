import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';

import { useProgram } from '@/shared/lib/program';

import { ProgramPage } from './program-page';

/**
 * The plan as a tab. The page was built to arrive over Home and reads the
 * program axis to know it is on screen, so the tab raises the axis while it
 * has focus and drops it when it loses it, which also ends a session left by
 * switching tabs the way closing the old overlay did.
 */
export function PlanTabPage() {
  const program = useProgram();
  useFocusEffect(
    useCallback(() => {
      program?.show();
      return () => program?.hide();
    }, [program]),
  );
  return <ProgramPage />;
}
