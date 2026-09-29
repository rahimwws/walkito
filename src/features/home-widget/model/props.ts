import { healthSignals } from '@/entities/health';
import {
  attended,
  currentDay,
  dayNumberFor,
  logFor,
  planSessionDone,
  programState,
  streakThrough,
  toDateKey,
  todayPlan,
  weekAttendance,
  type PlanDay,
} from '@/entities/program';
import { getLanguage, translatorFor } from '@/shared/lib/i18n';

import type { DailyWidgetProps, DayCellState, WidgetDay } from '../ui/daily-widget';

export type WidgetArt = DailyWidgetProps['art'];
export type WidgetLinks = DailyWidgetProps['links'];

type Goal = { type: PlanDay['type'] | null; done: number; total: number };

const DAY_MS = 86_400_000;

/**
 * Weekday names from the platform, Monday first.
 *
 * `Intl` rather than the catalogue, for the reason `StreakWeek` gives: it
 * already knows every locale's abbreviations and capitalisation. 5 January
 * 1970 was a Monday.
 */
function weekdayLabels(language: string): string[] {
  const format = new Intl.DateTimeFormat(language, { weekday: 'short', timeZone: 'UTC' });
  const monday = Date.UTC(1970, 0, 5);
  return Array.from({ length: 7 }, (_, i) => format.format(new Date(monday + i * DAY_MS)));
}

/**
 * Today's work, counted the way Home's list counts it: the same adjusted plan
 * (`todayPlan`, from the morning's pain and last night's health readings) and
 * the same ticks in the day's log, restricted to exercises on today's plan.
 *
 * A copy of Home's arithmetic rather than a shared helper for now — the plan
 * engine is mid-rewrite in `entities/program`, and the helper belongs there
 * once it settles. Until then the two can drift if one of them changes.
 */
function todayGoal(now: number): Goal {
  const health = healthSignals();
  const day = todayPlan(
    {
      stepsYesterday: health.stepsYesterday,
      steps28Avg: health.stepsBaseline,
      sleepHours: health.sleepLastNightMin == null ? null : health.sleepLastNightMin / 60,
    },
    null,
    now,
  );
  const log = logFor(currentDay(now));
  // Done is `planSessionDone`, the answer Home and Plan read: a finished plan or
  // test session counts whatever the log's own flag says since. A test day
  // ticks no exercise ids, which is how the log alone once read a finished
  // retest as untaken.
  const done = planSessionDone(toDateKey(new Date(now)));
  if (day.type === 'rest') return { type: 'rest', done: 0, total: 0 };
  if (day.type === 'test') return { type: 'test', done: done ? 1 : 0, total: 1 };
  // Unique ids: a flare day can list the same move twice.
  const ids = [...new Set(day.exercises.map((exercise) => exercise.id))];
  // A finished session is the whole goal, whatever today's plan says now. The
  // plan is re-derived live, and recording a session can move the step-down
  // that picks today's exercises — so the ids ticked an hour ago need not be
  // the ids on the plan now.
  if (done) return { type: day.type, done: ids.length, total: ids.length };
  const ticked = ids.filter((id) => log?.exercisesDone.includes(id)).length;
  return { type: day.type, done: ticked, total: ids.length };
}

/**
 * A day still to come, from a plan that has already been built. Never builds
 * one: `weekPlan` stores a week the first time it is asked for it, and asking
 * about next week from a forecast would fix that week before this one ended.
 */
function forecastGoal(dateKey: string, plan: readonly PlanDay[]): Goal {
  const planned = plan.find((day) => day.date === dateKey);
  if (planned == null) return { type: null, done: 0, total: 0 };
  if (planned.type === 'rest') return { type: 'rest', done: 0, total: 0 };
  if (planned.type === 'test') return { type: 'test', done: 0, total: 1 };
  return { type: planned.type, done: 0, total: new Set(planned.exercises.map((e) => e.id)).size };
}

/**
 * The seven cells, Monday first.
 *
 * - A day is `off` only before the program began. After its last day the app
 *   carries on in maintenance, and the strip carries on with it.
 * - Today is judged by its goal, not by attendance: a morning check-in alone
 *   attends the day, and the ring should keep filling until the work is done.
 * - A past day is ticked only for a finished session. A check-in keeps the
 *   streak alive, but a day with nothing trained is not a done day on a
 *   strip that is about the day's goal.
 * - What a day *was* — rest, retest — comes from the week's plan and beats
 *   everything else except a finished session.
 */
function weekFor(
  now: number,
  plan: readonly PlanDay[],
  goal: Goal,
  labels: readonly string[],
): { days: WidgetDay[]; todayIndex: number } {
  const attendance = weekAttendance(now, 1);
  const state = programState();
  const days = attendance.map((day, i): WidgetDay => {
    const planned = plan.find((candidate) => candidate.date === day.date) ?? null;
    const number = dayNumberFor(state, day.date);
    const rest = planned?.type === 'rest' || (day.dayNumber != null && day.rest);
    let cell: DayCellState;
    if (day.isToday) {
      cell =
        goal.type === 'rest'
          ? 'rest'
          : goal.total > 0 && goal.done >= goal.total
            ? 'done'
            : goal.type === 'test'
              ? 'test'
              : 'today';
    } else if (number < 1) cell = 'off';
    else if (day.future) cell = rest ? 'rest' : planned?.type === 'test' ? 'test' : 'future';
    else if (planSessionDone(day.date)) cell = 'done';
    else cell = rest ? 'rest' : 'missed';
    return { label: labels[i] ?? '', state: cell };
  });
  return { days, todayIndex: attendance.findIndex((day) => day.isToday) };
}

/**
 * Everything the widget needs for one moment in time.
 *
 * `forecast` is set for the entries scheduled at the coming midnights: a fresh,
 * unanswered check-in on a day nobody has opened the app yet, with the week's
 * cells moved on to it. `plan` is this week's plan, fetched once by the caller
 * with the real clock, so a forecast can say what a day will be when it is
 * this week and says nothing when it is not.
 */
export function buildWidgetProps(
  now: number,
  art: WidgetArt,
  url: string,
  links: WidgetLinks,
  plan: readonly PlanDay[],
  forecast = false,
): DailyWidgetProps {
  const language = getLanguage();
  const t = translatorFor(language);
  const dateKey = toDateKey(new Date(now));
  const dayNumber = currentDay(now);

  const goal = forecast ? forecastGoal(dateKey, plan) : todayGoal(now);
  const week = weekFor(now, plan, goal, weekdayLabels(language));

  // Today's answer, if the app already has one. The latest reading, because
  // that is how the foot is *now*; a single legacy reading counts as it. A
  // forecast day has none — nobody has been asked yet.
  const log = forecast ? undefined : logFor(dayNumber);
  const last = log?.painEntries?.[log.painEntries.length - 1];
  const answerScore = last?.score ?? log?.painMorning ?? undefined;

  const goalValue =
    goal.type === 'rest'
      ? t('widget.goalRest')
      : goal.type === 'test'
        ? t('widget.goalTest')
        : goal.total > 0
          ? t('widget.goalValue', { done: String(goal.done), total: String(goal.total) })
          : t('widget.goalUnknown');

  return {
    dateKey,
    // Omitted rather than null when absent. See the note on `DailyWidgetProps`:
    // a null here would abort the app when the timeline is stored.
    ...(answerScore != null ? { answerScore } : {}),
    text: {
      question: t('widget.question'),
      hurts: t('widget.hurts'),
      fine: t('widget.fine'),
      tapToCheckIn: t('widget.tapToCheckIn'),
      goalTitle: t('widget.goalTitle'),
      goalValue,
      checkinLabel: t('widget.checkin'),
    },
    art,
    goal: { done: goal.done, total: goal.total },
    week: week.days,
    todayIndex: week.todayIndex,
    // Through yesterday on a forecast day: at midnight the new day is still
    // open, and a streak that dropped the moment the date turned would read as
    // a punishment for sleeping. Days nobody opened the app on have no
    // attendance in the log, which is the truth — no session happened.
    streak: streakThrough(forecast ? dayNumber - 1 : dayNumber, attended, true).current,
    url,
    links,
  };
}
