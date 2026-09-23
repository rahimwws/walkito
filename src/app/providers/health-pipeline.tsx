import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

import {
  healthAccess,
  healthCache,
  onHealthAsked,
  refreshHealth,
  requestHealthAccess,
  startHealthPipeline,
  type RefreshOptions,
} from '@/entities/health';
import { maybeSendStepCheck } from '@/entities/notifications';
import {
  currentDay,
  dayNumberFor,
  fromDateKey,
  logFor,
  painOn,
  programState,
  writeLog,
} from '@/entities/program';

/**
 * Pain the morning after a stored date.
 *
 * By date rather than by position in the cache: the programme's calendar and
 * the cache's are both local days, and a date is the one key they share that
 * cannot drift at a gap or a timezone boundary.
 */
function painNextMorning(date: string): number | null {
  return painOn(dayNumberFor(programState(), date) + 1);
}

/**
 * Copies each day's hours on foot into the programme's own log.
 *
 * The adaptation engine reads `hoursOnFeetOn(yesterday)` to turn a strength day
 * into a recovery day after a heavy one — and nothing ever wrote that field, so
 * the rule could not fire and the load notification it drives never went out.
 * Only days inside the programme, and only when the figure changed, so an
 * hourly wake does not rewrite ninety log entries.
 */
function syncHoursOnFeet(): void {
  const state = programState();
  const today = currentDay();
  for (const day of healthCache().days) {
    if (day.hoursOnFeet == null) continue;
    const dayNumber = dayNumberFor(state, day.date);
    if (dayNumber < 1 || dayNumber > today) continue;
    if (logFor(dayNumber)?.hoursOnFeet === day.hoursOnFeet) continue;
    writeLog(dayNumber, { hoursOnFeet: day.hoursOnFeet }, fromDateKey(day.date).getTime());
  }
}

/**
 * Everything that follows fresh numbers, in the foreground or from a wake.
 *
 * The step check-in lives here because this is the one place that runs on a
 * background wake: HealthKit relaunches the app, the pipeline reads, and this is
 * the moment the day may have crossed the mark.
 */
async function afterRefresh(): Promise<void> {
  syncHoursOnFeet();
  await maybeSendStepCheck();
}

const OPTIONS: RefreshOptions = { painNextMorning, onRefreshed: afterRefresh };

/**
 * Keeps the local health cache current, and introduces the entities.
 *
 * Mounted at the root so the subscriptions are registered once for the life of
 * the app rather than once per visit to a screen. Nothing here renders and
 * nothing here blocks: every screen reads the cache, and the cache always has
 * an answer — the worst case is that the answer is yesterday's.
 *
 * This is the app layer's job because it bridges three entities that may not
 * import each other: health supplies the numbers, the programme supplies pain
 * and stores hours on foot, notifications decides whether to speak.
 */
export function useHealthPipeline(): void {
  /**
   * Bumped when Apple's sheet is answered.
   *
   * The root mounts long before onboarding reaches the Health step, so on a
   * fresh install the pipeline starts, finds nothing asked, and registers
   * nothing. Without this it stayed that way until the next cold launch.
   */
  const [generation, setGeneration] = useState(0);
  useEffect(() => onHealthAsked(() => setGeneration((n) => n + 1)), []);

  useEffect(() => startHealthPipeline(OPTIONS), [generation]);

  useEffect(() => {
    /**
     * Once, in the foreground, for people who connected on an older build.
     *
     * The read list grew (stairs), and Apple shows only the new rows. Asked
     * here rather than never: a type that was not requested reads as nothing
     * forever, silently. Only when the app is actually in front — a background
     * wake cannot present a sheet — and only for someone who has already said
     * yes to the question once.
     */
    let cancelled = false;
    const askAgainIfOutdated = async () => {
      if (AppState.currentState !== 'active') return;
      if ((await healthAccess()) !== 'outdated' || cancelled) return;
      await requestHealthAccess();
    };
    void askAgainIfOutdated();

    // The documented fallback for background delivery, which can be switched
    // off by Low Power Mode or by the user and which no app can detect.
    // Someone who opens Walkito every morning gets current data either way.
    const sub = AppState.addEventListener('change', (state) => {
      if (state !== 'active') return;
      void askAgainIfOutdated();
      void refreshHealth(new Date(), OPTIONS);
    });
    return () => {
      cancelled = true;
      sub.remove();
    };
  }, []);
}
