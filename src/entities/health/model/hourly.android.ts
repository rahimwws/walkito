/**
 * Android has no reading for this: Health Connect cannot be read in the
 * background without a permission the app does not ask for, and the
 * Pedometer there has no history. The four-hours push is iOS's.
 */
export type OnFeetHour = { start: number; steps: number | null; stood: boolean };

export async function motionReadable(): Promise<boolean> {
  return false;
}

export async function requestMotionAccess(): Promise<boolean> {
  return false;
}

export async function todayOnFeetHours(): Promise<OnFeetHour[]> {
  return [];
}
