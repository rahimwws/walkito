import { useMemo } from 'react';

import { todayHealthInputs, useHealthSignals } from '@/entities/health';
import {
  RETEST_MINUTES,
  RETEST_TESTS,
  exerciseById,
  logFor,
  planSessionDone,
  todayDayNumber,
  todayKey,
  todayPlan,
  useLogsVersion,
  useNextSession,
  usePlanVersion,
  type DayType,
  type PlannedExercise,
  type TodayReason,
} from '@/entities/program';

/** Where today's moves are done, as the hero's meta line says it. */
export type TodayWhere = 'chair' | 'standing' | 'mixed';

export type TodayWork = {
  date: string;
  type: DayType;
  minutes: number;
  /** Today's moves in order; empty on a test or rest day. */
  exerciseIds: readonly string[];
  /** The same moves with their doses, for the session card's rows. */
  exercises: readonly PlannedExercise[];
  /** Tests on a test day, nothing otherwise. */
  tests: number;
  where: TodayWhere;
  /** Moves already ticked today. */
  ticked: number;
  /** Today's plan session is finished: the one answer Plan, the widget and the
   * streak read too. */
  done: boolean;
  reason: TodayReason;
};

/** "in a chair" only when every move is seated (or position-free). */
export function whereOf(ids: readonly string[]): TodayWhere {
  const positions = ids.map((id) => exerciseById(id).position);
  const seated = positions.every((p) => p === 'seated' || p === 'none');
  if (seated) return 'chair';
  const standing = positions.every((p) => p === 'standing' || p === 'wall' || p === 'none');
  return standing ? 'standing' : 'mixed';
}

/**
 * Today's session as the plan resolves it, adjusted to this morning: the same
 * `todayPlan` call the Plan tab starts, so the card and the session cannot
 * disagree. Recomputed when the log or the plan moves, and at midnight (the
 * next-session hook wakes then, and the date is part of the key).
 */
export function useTodayWork(): TodayWork {
  const logsVersion = useLogsVersion();
  const planVersion = usePlanVersion();
  const health = useHealthSignals();
  useNextSession();
  const date = todayKey();
  return useMemo(() => {
    const day = todayPlan(todayHealthInputs(health), null);
    const exercises = day.type === 'test' ? [] : day.exercises;
    const exerciseIds = exercises.map((e) => e.id);
    const ticked = (logFor(todayDayNumber())?.exercisesDone ?? []).filter((id) => exerciseIds.includes(id)).length;
    return {
      date,
      type: day.type,
      minutes: day.type === 'test' ? RETEST_MINUTES : day.minutes,
      exerciseIds,
      exercises,
      tests: day.type === 'test' ? RETEST_TESTS : 0,
      where: whereOf(exerciseIds),
      ticked,
      done: planSessionDone(date),
      reason: day.reason,
    };
    // The versions stand for stores mutated in place; see the old list's note.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logsVersion, planVersion, health, date]);
}
