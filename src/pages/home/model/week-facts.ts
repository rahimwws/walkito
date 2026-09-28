import {
  addDays,
  exerciseById,
  goals,
  planSessionDone,
  programState,
  retestResults,
  todayKey,
  todayPlan,
  weekPlan,
  type PlanDay,
  type TodayHealth,
} from '@/entities/program';
import { translatorFor, type Language } from '@/shared/lib/i18n';

/**
 * What the weekly plan tells the morning line — section 5.1 of the plan spec:
 * yesterday missed, a test close, something new, a goal reached.
 */
export function weekFacts(language: Language, health: TodayHealth, now: number = Date.now()) {
  const t = translatorFor(language);
  const today = todayKey(now);
  const yesterday = addDays(today, -1);
  const plan = weekPlan(now);
  // Yesterday may belong to last week's plan; only this week's is asked, which
  // makes Monday's line the one day this rung stays quiet.
  const planned = (day: PlanDay | undefined) => day != null && day.type !== 'rest';
  const yDay = plan.days.find((d) => d.date === yesterday);
  const missedYesterday = planned(yDay) && !planSessionDone(yesterday);

  const test = plan.days.find((d) => d.type === 'test' && d.date >= today);
  const daysToTest =
    test == null
      ? null
      : Math.round((new Date(`${test.date}T00:00:00`).getTime() - new Date(`${today}T00:00:00`).getTime()) / 86_400_000);

  const all = goals();
  const reached = all.find((g) => g.achievedOn != null && g.achievedOn >= plan.weekStart);
  const next = all.find((g) => g.status === 'active');
  const goalReached =
    reached != null && next != null
      ? { goal: t(`pages.week.goal.${reached.type}`), next: t(`pages.week.goal.${next.type}`) }
      : null;

  // Today as the plan has it this morning — the brief's work and minutes.
  const adjusted = todayPlan(health, null, now);
  const kind = adjusted.type === 'rest' || adjusted.type === 'test' ? null : adjusted.type;
  const results = retestResults();
  const last = results[results.length - 1];
  const lastDate = last == null ? null : addDays(programState().startDate, last.dayNumber - 1);
  const weeksSinceTest =
    lastDate == null
      ? null
      : Math.max(1, Math.round((new Date(`${today}T00:00:00`).getTime() - new Date(`${lastDate}T00:00:00`).getTime()) / (7 * 86_400_000)));

  return {
    plan: {
      focus: plan.focus == null ? null : t(`pages.week.goal.${plan.focus}`),
      kind,
      minutes: adjusted.minutes,
      moves: adjusted.exercises.map((e) => exerciseById(e.id).title),
      weekStart: plan.weekStart === today,
      weeksSinceTest,
    },
    missedYesterday,
    daysToTest,
    testToday: test?.date === today,
    newThisWeek: plan.newThisWeek.length > 0 ? exerciseById(plan.newThisWeek[0]).title : null,
    goalReached,
  };
}
