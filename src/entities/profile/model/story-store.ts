import { kv } from '@/shared/lib/storage';

import type { PlanKind } from './story';

/**
 * What the onboarding's story leaves for the paywall: the kind of plan, her
 * goals, and whether she did the first move. On the phone only, never sent:
 * the goals are hers, in her words, and the paywall is the one reader.
 */
export type Story = {
  kind: PlanKind;
  goals: string[];
  /** She did the first move in the onboarding (Day 1, filed as done). */
  moved: boolean;
};

const KEY = 'onboarding/story';

export function saveStory(story: Story): void {
  kv.set(KEY, JSON.stringify(story));
}

export function storyOf(): Story | null {
  const raw = kv.getString(KEY);
  if (raw == null) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<Story>;
    if (parsed.kind !== 'desk' && parsed.kind !== 'runner' && parsed.kind !== 'feet') return null;
    return {
      kind: parsed.kind,
      goals: Array.isArray(parsed.goals) ? parsed.goals.filter((g): g is string => typeof g === 'string') : [],
      moved: parsed.moved === true,
    };
  } catch {
    return null;
  }
}

export function clearStory(): void {
  kv.remove(KEY);
}
