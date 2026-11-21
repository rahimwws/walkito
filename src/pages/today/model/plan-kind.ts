import { storyOf, type PlanKind } from '@/entities/profile';

/** Who the plan is for, from the onboarding's story; a desk plan when there is
 * none (an install from before the story was kept). */
export function planKind(): PlanKind {
  return storyOf()?.kind ?? 'desk';
}
