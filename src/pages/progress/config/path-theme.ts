/** Node shading, and the few dimensions the path is built from. */

/** The two things the top control switches between. `Program` is the path
 * itself; `Progress` is what the retests have measured. */
export const VIEWS = ['Program', 'Progress'] as const;
export type ProgressView = (typeof VIEWS)[number];

/**
 * Base node diameter and the distance between node centres.
 *
 * Sized so six or seven nodes are on screen at once. That number is the whole
 * difference between a path and a stack of buttons: at two and a half nodes
 * there is no sense of distance travelled or distance left, and the ribbon
 * stops reading as a route.
 */
export const NODE_SIZE = 48;
export const NODE_STEP = 90;
/**
 * How far a node swings off the centreline.
 *
 * Wide on purpose. Below about ±50 the zigzag reads as jitter — as if the
 * nodes were meant to be in a column and drifted — rather than as a path
 * winding somewhere.
 */
export const NODE_SWING = 70;

/** Multipliers on the base node size. */
export const CHECKPOINT_SCALE = 1.45;
export const FINISH_SCALE = 1.7;

/** Air above the first node, below the last, and around a week divider. */
export const PATH_TOP_PAD = 12;
export const PATH_BOTTOM_PAD = 40;
export const DIVIDER_GAP = 34;
/** Extra step after a node that carries a caption, so the caption and the leg
 * leaving the node aren't fighting over the same gap. */
export const CAPTION_GAP = 26;

/** Dotted trail between nodes still to come. */
export const TRAIL_DOT = {
  light: 'rgba(17,17,20,0.18)',
  dark: 'rgba(255,255,255,0.20)',
} as const;
