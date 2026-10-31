import { requireOptionalNativeModule } from 'expo';
import { queryCategorySamples, queryStatisticsCollectionForQuantity } from '@kingstinct/react-native-healthkit';

import { healthAvailable } from './health';

/**
 * Today, hour by hour: how many steps, and whether an Apple Watch saw the
 * person standing. What "four hours on your feet" is decided from.
 *
 * From Health first, deduplicated across phone and watch. When Health has no
 * steps at all today (not granted, or nothing synced yet), from the iPhone's
 * own motion coprocessor through CoreMotion (`expo-sensors` Pedometer), which
 * counts steps with no Health permission at all. Neither can tell sitting
 * from standing still; the watch's stand hours are the only thing that does,
 * so a cashier with few steps is seen only with a watch.
 *
 * Read on a background wake, never sent anywhere.
 */
export type OnFeetHour = {
  /** The hour's start, epoch ms. */
  start: number;
  steps: number | null;
  /** The watch recorded a stand in this hour. */
  stood: boolean;
};

const HOUR_MS = 3_600_000;
/** How far back CoreMotion is asked, hour by hour: enough for a streak of
 * four and the hour in progress. */
const MOTION_HOURS = 6;
const STOOD = 0;

function startOfDay(now: Date): Date {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  return d;
}

/** Hours from midnight to now, oldest first, with nothing in them yet. */
function blankHours(now: Date): OnFeetHour[] {
  const from = startOfDay(now).getTime();
  const out: OnFeetHour[] = [];
  for (let start = from; start <= now.getTime(); start += HOUR_MS) out.push({ start, steps: null, stood: false });
  return out;
}

async function fromHealth(now: Date, hours: OnFeetHour[]): Promise<boolean> {
  if (!healthAvailable()) return false;
  const from = startOfDay(now);
  let any = false;
  try {
    const buckets = await queryStatisticsCollectionForQuantity(
      'HKQuantityTypeIdentifierStepCount',
      ['cumulativeSum'],
      from,
      { hour: 1 },
      { unit: 'count', filter: { date: { startDate: from, endDate: now } } },
    );
    for (const bucket of buckets) {
      const steps = bucket.sumQuantity?.quantity;
      const started = bucket.startDate;
      if (started == null || steps == null) continue;
      const slot = hours.find((h) => h.start === new Date(started).getTime());
      if (slot == null) continue;
      slot.steps = steps;
      if (steps > 0) any = true;
    }
  } catch {
    // Not granted, or the phone is locked.
  }
  try {
    const stands = await queryCategorySamples('HKCategoryTypeIdentifierAppleStandHour', {
      limit: 0,
      filter: { date: { startDate: from, endDate: now } },
    });
    for (const stand of stands) {
      if (Number(stand.value) !== STOOD) continue;
      const start = new Date(stand.startDate).getTime();
      const slot = hours.find((h) => start >= h.start && start < h.start + HOUR_MS);
      if (slot != null) {
        slot.stood = true;
        any = true;
      }
    }
  } catch {
    // No watch, or not granted.
  }
  return any;
}

type PedometerModule = typeof import('expo-sensors').Pedometer;

/** The Pedometer, or null in a binary built before it was linked. */
function pedometer(): PedometerModule | null {
  if (requireOptionalNativeModule('ExponentPedometer') == null) return null;
  try {
    return (require('expo-sensors') as typeof import('expo-sensors')).Pedometer;
  } catch {
    return null;
  }
}

/** Whether CoreMotion may be read: available on this phone and allowed. */
export async function motionReadable(): Promise<boolean> {
  const p = pedometer();
  if (p == null) return false;
  try {
    if (!(await p.isAvailableAsync())) return false;
    return (await p.getPermissionsAsync()).granted;
  } catch {
    return false;
  }
}

/**
 * Asks for Motion & Fitness, once, when it would actually be used: Health has
 * been asked and still has no steps to give. Only from the foreground; the
 * system sheet cannot show from a background wake.
 */
export async function requestMotionAccess(): Promise<boolean> {
  const p = pedometer();
  if (p == null) return false;
  try {
    if (!(await p.isAvailableAsync())) return false;
    const current = await p.getPermissionsAsync();
    if (current.granted || !current.canAskAgain) return current.granted;
    return (await p.requestPermissionsAsync()).granted;
  } catch {
    return false;
  }
}

async function fromMotion(now: Date, hours: OnFeetHour[]): Promise<void> {
  if (!(await motionReadable())) return;
  const p = pedometer();
  if (p == null) return;
  for (const slot of hours.slice(-MOTION_HOURS)) {
    try {
      const end = new Date(Math.min(slot.start + HOUR_MS, now.getTime()));
      const { steps } = await p.getStepCountAsync(new Date(slot.start), end);
      slot.steps = steps;
    } catch {
      // One hour failing does not stop the others.
    }
  }
}

export async function todayOnFeetHours(now: Date = new Date()): Promise<OnFeetHour[]> {
  const hours = blankHours(now);
  const fromHealthKit = await fromHealth(now, hours);
  if (!fromHealthKit) await fromMotion(now, hours);
  return hours;
}
