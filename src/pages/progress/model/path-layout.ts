import { BLOCK_LENGTH, PROGRAM_LENGTH, blockName, type ProgramDay } from '@/entities/program';

import {
  CAPTION_GAP,
  CHECKPOINT_SCALE,
  DIVIDER_GAP,
  FINISH_SCALE,
  NODE_SIZE,
  NODE_STEP,
  NODE_SWING,
  PATH_BOTTOM_PAD,
  PATH_TOP_PAD,
} from '../config/path-theme';
import { reservesCaption } from './day-caption';

export type PathItem = {
  day: ProgramDay;
  /** Centre of the node, in trail coordinates. */
  x: number;
  y: number;
  size: number;
};

export type PathDivider = {
  /** Program day the divider sits above — unique, so it keys a list. */
  day: number;
  label: string;
  y: number;
};

/** Days per week, which is also how often the ribbon gets a rule across it. */
const WEEK = 7;

/**
 * A divider every seven nodes, naming the week — and naming the block instead
 * when the week also opens one.
 *
 * Weeks give the ribbon a pulse: without them 56 nodes scroll past as one
 * undifferentiated run, and the user has no way to feel how far a scroll
 * actually went.
 */
function dividerLabel(day: ProgramDay): string {
  if (day.day % BLOCK_LENGTH === 1) return `Block ${day.block} · ${blockName(day.block)}`;
  return `Week ${Math.ceil(day.day / WEEK)}`;
}

export type PathLayout = {
  items: PathItem[];
  dividers: PathDivider[];
  /** Total trail height, so the scroll container can reserve it. */
  height: number;
};

function sizeFor(day: ProgramDay, base: number): number {
  if (day.day === PROGRAM_LENGTH) return Math.round(base * FINISH_SCALE);
  if (day.checkpoint) return Math.round(base * CHECKPOINT_SCALE);
  return base;
}

/**
 * Places the nodes of a zigzag ribbon.
 *
 * The sine is driven by the day's program index rather than its position in
 * the array, so a node keeps its side of the centreline no matter what slice
 * is being laid out — the path re-reads as the same path.
 *
 * Amplitude is clamped to whatever the trail is actually wide enough for; on a
 * narrow screen the ribbon flattens rather than clipping a node.
 *
 * A captioned node gets a taller step after it. Without that, the 34pt of air
 * between two 62pt nodes has to hold a 16pt caption *and* a visible leg, and
 * one of them loses — pushing the leg clear of the words left nothing to draw.
 */
export function layoutPath(
  days: readonly ProgramDay[],
  { width, cursor }: { width: number; cursor: number },
): PathLayout {
  const centerX = width / 2;
  const widest = NODE_SIZE * FINISH_SCALE;
  const swing = Math.min(NODE_SWING, Math.max(centerX - widest / 2 - 6, 0));

  const items: PathItem[] = [];
  const dividers: PathDivider[] = [];
  let y = PATH_TOP_PAD + NODE_SIZE / 2;

  days.forEach((day, i) => {
    if (i > 0) {
      const air = reservesCaption(days[i - 1], cursor) ? CAPTION_GAP : 0;
      if (day.day % WEEK === 1) {
        dividers.push({
          day: day.day,
          label: dividerLabel(day),
          y: y + (NODE_STEP + air + DIVIDER_GAP) / 2,
        });
        y += NODE_STEP + air + DIVIDER_GAP;
      } else {
        y += NODE_STEP + air;
      }
    }
    items.push({
      day,
      size: sizeFor(day, NODE_SIZE),
      x: centerX + Math.sin(day.index * 0.9) * swing,
      y,
    });
  });

  const last = items[items.length - 1];
  return {
    items,
    dividers,
    height: last ? last.y + last.size / 2 + PATH_BOTTOM_PAD : 0,
  };
}
