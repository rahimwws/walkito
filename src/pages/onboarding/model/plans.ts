/**
 * The two shapes the same programme can take.
 *
 * Not a long menu. Two lengths is a decision a person can make in a second,
 * and the difference between them is a real one — how much runway the plan has
 * before it expects you to be running properly — rather than a pricing tier
 * wearing a plan's clothes.
 */
export type TrainingPlan = {
  weeks: number;
  /** Segment label, and how the plan is named everywhere else. */
  tab: string;
  /** Set over the photograph. Short, because it is set large. */
  wordmark: string;
  /** Small caps chip under the image. */
  eyebrow: string;
  title: string;
  blurb: string;
  bullets: readonly string[];
};

export const PLANS: readonly TrainingPlan[] = [
  {
    weeks: 6,
    tab: '6 weeks',
    wordmark: 'MOMENTUM',
    eyebrow: 'KEEP RUNNING',
    title: '6-week plan',
    blurb:
      'If you’re already running most weeks and want to build without breaking down.',
    bullets: [
      'A focused block that adds load only as fast as your legs adapt',
      'Strength and mobility woven around the runs you already do',
    ],
  },
  {
    weeks: 12,
    tab: '12 weeks',
    wordmark: 'FOUNDATIONS',
    eyebrow: 'START RUNNING',
    title: '12-week plan',
    blurb: 'If you’re starting from scratch, or coming back after time off.',
    bullets: [
      'A gentle build mixing consistency with varied work',
      'Become a runner step by step, all the way to your first 5K',
    ],
  },
];

/**
 * Which one gets the badge.
 *
 * Read off the answer the user already gave about themselves rather than
 * defaulting to the longer, better-value one: a recommendation that always
 * points the same way is a sales tag, and the flow has just spent fifteen
 * screens earning the right to make an actual suggestion.
 */
export function recommendedIndex(runner: string | null): number {
  return runner === 'regular' || runner === 'racing' || runner === 'serious' ? 0 : 1;
}
