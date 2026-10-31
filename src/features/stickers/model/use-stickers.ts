import { useEffect, useMemo } from 'react';

import {
  allLogs,
  currentDay,
  dateKeyForDay,
  dayNumberFor,
  planWeekOf,
  programState,
  retestResults,
  sessions,
  useLogsVersion,
  usePlanVersion,
  useStreak,
  weekStartOf,
  type WeekPlan,
} from '@/entities/program';

import { historyFrom } from './history';
import { keepStickers, keptStickers, useStickerStoreVersion } from './store';
import {
  STICKERS,
  STICKER_COUNT,
  nextSessionSticker,
  stickersEarned,
  type NextSticker,
  type Sticker,
  type StickerId,
} from './stickers';

export type AlbumEntry = Sticker & { earned: boolean };

export type StickerAlbum = {
  /** All twenty, in album order. */
  entries: readonly AlbumEntry[];
  /** The earned ones' ids, in album order. */
  earnedIds: readonly StickerId[];
  earned: number;
  total: number;
  /** The next session sticker and how far along it is: what finishing a
   * session moves toward. Null once the session stickers are all in. */
  nextSession: NextSticker | null;
};

/**
 * The album as it stands: worked out from the synced history (the day logs,
 * the session list, the tests on file and the streak), with every sticker ever
 * earned kept.
 *
 * Recomputed when a log, the plan or the album changes, never on a timer.
 */
export function useStickers(): StickerAlbum {
  const logsVersion = useLogsVersion();
  const planVersion = usePlanVersion();
  const storeVersion = useStickerStoreVersion();
  const streak = useStreak();

  const computed = useMemo(
    () => {
      const kept = new Set(keptStickers());
      const state = programState();
      // A week's plan is read once however many of its days are asked about.
      const weeks = new Map<string, WeekPlan>();
      const history = historyFrom({
        today: currentDay(),
        logs: Object.values(allLogs()),
        sessions: sessions(),
        testsOnFile: retestResults().length,
        dayOf: (date) => dayNumberFor(state, date),
        minuteOf: (at) => {
          const date = new Date(at);
          return date.getHours() * 60 + date.getMinutes();
        },
        restOn: (day) => {
          // Both rest stickers are in the album for good: nothing to look up.
          if (kept.has('rest-5')) return false;
          const date = dateKeyForDay(day, state);
          const start = weekStartOf(date);
          let week = weeks.get(start);
          if (week == null) {
            week = planWeekOf(date);
            weeks.set(start, week);
          }
          return week.days.some((planned) => planned.date === date && planned.type === 'rest');
        },
        streak: { longest: streak.longest, total: streak.total },
      });
      return { ids: stickersEarned(history), history };
    },
    // The logs and the plan are mutated in place; their versions are what
    // change. What is kept only spares a lookup here, so it is not a reason
    // to work the history out again.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [logsVersion, planVersion, streak.longest, streak.total],
  );

  // Filed after the render that found them, never during it.
  useEffect(() => {
    keepStickers(computed.ids);
  }, [computed]);

  return useMemo(() => {
    const kept = new Set<StickerId>([...keptStickers(), ...computed.ids]);
    const entries = STICKERS.map((sticker) => ({ ...sticker, earned: kept.has(sticker.id) }));
    const earnedIds = entries.filter((entry) => entry.earned).map((entry) => entry.id);
    return {
      entries,
      earnedIds,
      earned: earnedIds.length,
      total: STICKER_COUNT,
      nextSession: nextSessionSticker(computed.history, kept),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computed, storeVersion]);
}
