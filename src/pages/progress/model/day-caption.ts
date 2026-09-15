import type { DayStatus, ProgramDay } from '@/entities/program';

/** How far below a node its caption reaches. The leg leaving that node starts
 * past this, so the trail never runs through the words. */
export const CAPTION_CLEARANCE = 22;

/**
 * The caption under a node, or null for the vast majority that get none.
 *
 * Only two nodes ever speak: the one you can act on, and the ones that close a
 * block. The path needs air more than it needs labels — 14 captioned days
 * would be a list, not a path.
 */
export function captionFor(day: ProgramDay, status: DayStatus): string | null {
  if (status === 'today') {
    return day.checkpoint ? 'Retest today' : `Today · ${day.minutes} min`;
  }
  if (day.checkpoint) return 'Retest';
  return null;
}

/**
 * Whether the layout should reserve caption room after a day.
 *
 * Deliberately *static* — it ignores whether today's session is already done,
 * even though that hides the caption. Reserving on the live caption would
 * change the ribbon's geometry the moment a user pressed Start, and the whole
 * path would shift under the finger that just tapped it. A day that loses its
 * caption keeps its air instead.
 */
export function reservesCaption(day: ProgramDay, cursor: number): boolean {
  return day.checkpoint || day.index === cursor;
}
