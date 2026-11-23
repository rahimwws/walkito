/** A point in the rig's own units: the traced SVG's coordinates. */
export type Point = readonly [number, number];

/**
 * What a part does when the mascot acts. The engine moves parts by role, not
 * by name, so one library of moves drives every pose.
 */
export type PartRole =
  /** Never moves on its own: a part tucked behind a petal. */
  | 'static'
  /** Both legs as one piece: they move only with the whole body. */
  | 'legs'
  /** The leg the weight is on. */
  | 'stand'
  /**
   * One leg, swung from the hip (`pivot`, its parent `root`). It taps its
   * foot, takes the weight off for a shift, kicks for joy and tucks in the
   * air: turned a few degrees out or in, its foot lifted toward the hip.
   * `dir` is its side on screen: -1 the leg on the left, 1 the one on the
   * right, so a step that lifts one never lifts the other.
   */
  | 'leg'
  /**
   * An arm at rest, from the shoulder (parent `head` or `root`). It sways a
   * little with the breath, out of step with the other arm, and joins every
   * gesture: swinging for joy, rising on a cheer, lifting in a shrug. `dir`
   * as for `wave`: the sign that swings the hand up and out, away from the
   * body (a hanging arm on the left is 1, on the right -1).
   */
  | 'arm'
  /** An arm held up: it pumps when the mascot cheers. */
  | 'raise'
  /** An arm that waves from the shoulder. */
  | 'wave'
  /**
   * A hand on an arm: it waves from the wrist, and its fingers flex, curling
   * toward the wrist and opening again, when it fidgets, waves and cheers.
   */
  | 'hand'
  /** Whatever is held: the gift, the sore foot. It bobs with the breath and is lifted for joy. */
  | 'hold';

export type RigPart = {
  name: string;
  role: PartRole;
  /** `root`, `head`, or another part's name: what it moves with. */
  parent: string;
  /** The joint it turns about. */
  pivot: Point;
  /** Which way is "up" or "out" for this part: 1 or -1. */
  dir: number;
  /** Paper: the silhouette `bodies[body]`, cut to this polygon. */
  body?: number;
  clip?: string;
  /** This part's own stretch of the outline, stroked. */
  ink?: string;
  /** Closed shapes the part carries (a gift, a whole arm): paper and outline each. */
  shapes?: readonly string[];
  /** Detail lines drawn in ink over the part's paper. */
  lines?: readonly string[];
};

export type RigPetal = {
  name: string;
  clip: string;
  ink: string;
  /** The middle of its base, which it sways about. */
  pivot: Point;
  /** Which way it points from the flower's centre, in degrees (0 right, 90 down). */
  angle: number;
  body: number;
};

export type MarkRole =
  /** Ache lines: they throb with how much it hurts, and are gone when it doesn't. */
  | 'ache'
  /** Bounce marks by the feet: they vanish in the air and pop on landing. */
  | 'pop'
  /** Motion lines by a hand: they flicker while it waves. */
  | 'flicker';

export type RigMark = {
  name: string;
  parent: string;
  role: MarkRole;
  centre: Point;
  /** Thin marks are fattened by this much before the outline, so every pose's marks weigh the same. */
  thicken: number;
  d: readonly string[];
};

export type RigFace = {
  eyes: readonly [string, string];
  eyesFilled: boolean;
  mouth: string;
  mouthFilled: boolean;
};

export type MascotMood = 'idle' | 'happy' | 'celebrate' | 'thinking' | 'sad' | 'wave';

export type MascotRig = {
  name: string;
  /** The square the character is fitted to at `size`. */
  box: { x: number; y: number; size: number };
  /** The drawing area, past the box on every side so a jump is never cut off. */
  canvas: { x: number; y: number; width: number; height: number };
  /** Outline width; half of it shows outside the body. */
  outline: number;
  /** Stroke of the drawn face features. */
  feature: number;
  /** How high a happy hop goes. */
  hop: number;
  headPivot: Point;
  /** Under the standing foot: squash, stretch and lean are measured from here. */
  ground: Point;
  bodyCentre: Point;
  /** The traced silhouettes parts cut their paper from. */
  bodies: readonly string[];
  /** The flower's middle, under the petals. */
  core?: { clip: string; ink?: string; body: number };
  petals: readonly RigPetal[];
  parts: readonly RigPart[];
  /** Shapes on the root that do not move on their own. */
  shapes: readonly string[];
  /** Plain paper never seen at rest: what is behind a part when it moves. */
  underlays: readonly { parent: string; points: string }[];
  marks: readonly RigMark[];
  faces: Record<string, RigFace>;
  /** Which face each mood wears. */
  moods: Record<MascotMood, string>;
  /** A face the mascot now and then looks up with, then goes back to rest. */
  glance?: string;
  /** The faces whose eyes are open, so they blink. */
  blinks: readonly string[];
  eyeCentres: readonly [Point, Point];
  mouthCentre: Point;
};
