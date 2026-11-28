import type { SourceEntry } from '../entry';

/**
 * The physical therapist who reviewed our exercises, as walkito.site/about/
 * shows her: the onboarding before the plan is built, the exercise sheet, the
 * paywall and Settings (`shared/ui/reviewer-card`).
 *
 * **What may be said.** She reviewed the exercises, once, on a date. Never
 * that she reviewed the app, never "doctor" alone or "doctors", never
 * "medically approved", "clinically proven" or "certified" as a claim about the
 * product. `{name}` is her name with her letters (PT, DPT, OCS), which no
 * language translates.
 */
export const REVIEWER_EN = {
  'reviewer.byline': 'Exercises reviewed by {name}',
  'reviewer.short': 'Reviewed by a physical therapist',
  'reviewer.paywall': 'Exercises reviewed by a physical therapist',
  'reviewer.title': 'Who reviews our exercises',
  'reviewer.role': 'Doctor of physical therapy and board-certified orthopedic clinical specialist.',
  'reviewer.date': 'Reviewed our exercises on October 30, 2026.',
  'reviewer.linkedin': 'Profile on LinkedIn',
} as const satisfies Record<string, SourceEntry>;
