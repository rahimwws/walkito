import { TurboModuleRegistry } from 'react-native';

import { EMPTY_SUMMARY, type HealthAccess, type HealthConnection, type HealthSummary } from './health-types';

export {
  EMPTY_SUMMARY,
  type HealthAccess,
  type HealthConnection,
  type HealthOutcome,
  type HealthSummary,
} from './health-types';

/**
 * Health Connect — Android's Apple Health, behind the same functions
 * `health.ts` offers on iOS, so nothing outside this entity knows which one it
 * is talking to. Metro picks this file on Android.
 *
 * The same short list as iOS where Health Connect has the type. Walking
 * asymmetry and walking speed have no equivalent here: those signals stay null
 * on Android and simply never speak, which every signal already tolerates.
 */
type HealthConnect = typeof import('react-native-health-connect');

/** The records read, as Health Connect permissions. */
export const READ_TYPES = [
  'Steps',
  'FloorsClimbed',
  'RestingHeartRate',
  'HeartRate',
  'SleepSession',
  'ExerciseSession',
  'Distance',
  'ActiveCaloriesBurned',
] as const;

/** Written back: finished sessions, as exercise. */
const WRITE_RECORDS = ['ExerciseSession'] as const;

const PERMISSIONS = [
  ...READ_TYPES.map((recordType) => ({ accessType: 'read' as const, recordType })),
  ...WRITE_RECORDS.map((recordType) => ({ accessType: 'write' as const, recordType })),
];

/**
 * The library, once its native half is known to be in the binary — its own
 * import throws otherwise, and a dev client built before it was added must
 * keep working.
 */
export function healthConnect(): HealthConnect | null {
  if (TurboModuleRegistry.get('HealthConnect') == null) return null;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require('react-native-health-connect') as HealthConnect;
}

/**
 * Whether Health Connect is installed and usable, learnt once per launch.
 * `healthAvailable` has to answer synchronously — onboarding decides whether
 * to show the Health step from it — so it answers from this, optimistically
 * `true` until the check comes back.
 */
let sdkReady: boolean | null = null;
let initialised: Promise<boolean> | null = null;

export function ensureHealthConnect(): Promise<boolean> {
  const hc = healthConnect();
  if (hc == null) {
    sdkReady = false;
    return Promise.resolve(false);
  }
  initialised ??= (async () => {
    try {
      const status = await hc.getSdkStatus();
      if (status !== hc.SdkAvailabilityStatus.SDK_AVAILABLE) {
        sdkReady = false;
        return false;
      }
      sdkReady = await hc.initialize();
      return sdkReady;
    } catch {
      sdkReady = false;
      return false;
    }
  })();
  return initialised;
}

void ensureHealthConnect();

export function healthAvailable(): boolean {
  if (healthConnect() == null) return false;
  return sdkReady !== false;
}

const askedListeners = new Set<() => void>();

export function onHealthAsked(listener: () => void): () => void {
  askedListeners.add(listener);
  return () => {
    askedListeners.delete(listener);
  };
}

/**
 * Opens Health Connect's permission screen. Unlike Apple, Health Connect says
 * what was granted, so `true` here means at least one read was allowed.
 */
export async function requestHealthAccess(): Promise<boolean> {
  const hc = healthConnect();
  if (hc == null || !(await ensureHealthConnect())) return false;
  try {
    const granted = await hc.requestPermission(PERMISSIONS);
    for (const listener of askedListeners) listener();
    return granted.some((permission) => 'accessType' in permission && permission.accessType === 'read');
  } catch {
    return false;
  }
}

export async function healthAccess(): Promise<HealthAccess> {
  const hc = healthConnect();
  if (hc == null || !(await ensureHealthConnect())) return 'never';
  try {
    const granted = await hc.getGrantedPermissions();
    const reads = new Set(
      granted.filter((p) => 'accessType' in p && p.accessType === 'read').map((p) => ('recordType' in p ? p.recordType : '')),
    );
    if (reads.size === 0) return 'never';
    return READ_TYPES.every((type) => reads.has(type)) ? 'current' : 'outdated';
  } catch {
    return 'never';
  }
}

export async function connectHealth(now = Date.now()): Promise<HealthConnection> {
  if (!(await ensureHealthConnect())) return { outcome: 'unavailable', summary: EMPTY_SUMMARY };
  const asked = await requestHealthAccess();
  if (!asked) return { outcome: 'declined', summary: EMPTY_SUMMARY };
  const summary = await readTodaySummary(now);
  const anything = summary.steps != null || summary.calories != null || summary.heartRate != null;
  return { outcome: anything ? 'ready' : 'empty', summary };
}

function startOfToday(now: number): Date {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  return d;
}

/** Today's totals, each read on its own so one refused type blanks only itself. */
export async function readTodaySummary(now = Date.now()): Promise<HealthSummary> {
  const hc = healthConnect();
  if (hc == null || !(await ensureHealthConnect())) return EMPTY_SUMMARY;
  const timeRangeFilter = {
    operator: 'between' as const,
    startTime: startOfToday(now).toISOString(),
    endTime: new Date(now).toISOString(),
  };
  const round = (n: number | undefined) => (typeof n === 'number' && Number.isFinite(n) ? Math.round(n) : null);
  // Health Connect answers an empty window with zeros, not nothing. No source
  // behind the figure means there is no figure: "0 bpm" is not a reading.
  const known = <T extends { dataOrigins: string[] }>(r: T, value: number | undefined) =>
    r.dataOrigins.length === 0 ? null : round(value);
  const [steps, calories, heartRate] = await Promise.all([
    hc
      .aggregateRecord({ recordType: 'Steps', timeRangeFilter })
      .then((r) => known(r, r.COUNT_TOTAL))
      .catch(() => null),
    hc
      .aggregateRecord({ recordType: 'ActiveCaloriesBurned', timeRangeFilter })
      .then((r) => known(r, r.ACTIVE_CALORIES_TOTAL?.inKilocalories))
      .catch(() => null),
    hc
      .aggregateRecord({ recordType: 'HeartRate', timeRangeFilter })
      .then((r) => known(r, r.BPM_AVG))
      .catch(() => null),
  ]);
  return { steps, calories, heartRate };
}
