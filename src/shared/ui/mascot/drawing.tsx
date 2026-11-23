import { useMemo, type ComponentProps, type ReactNode } from 'react';
import Animated, { useAnimatedProps } from 'react-native-reanimated';
import Svg, { ClipPath, Defs, Ellipse, G, Path, Polygon } from 'react-native-svg';

import {
  about,
  achePulse,
  bob,
  drift,
  flickerAt,
  headMatrix,
  inhale,
  legMatrix,
  petalDegrees,
  rootMatrix,
  squeezeAbout,
  type Motion,
} from './motion';
import type { MascotRig, Point, RigFace, RigMark, RigPart, RigPetal } from './types';

const AnimatedG = Animated.createAnimatedComponent(G);

/**
 * react-native-svg's `G` types leave out `matrix`, its own native transform.
 * Reanimated sets native props straight from the UI thread, past the JS
 * layer that turns `transform` into a matrix, so the matrix is the one
 * transform an animation can drive.
 */
type Moving = ComponentProps<typeof AnimatedG>['animatedProps'];
const moving = (props: unknown) => props as Moving;

export type MascotColors = {
  /** The outline and the face. */
  ink: string;
  /** The body. */
  paper: string;
  /** The shadow under the feet. */
  shadow: string;
};

type Ctx = { rig: MascotRig; m: Motion; colors: MascotColors; id: string; aching: boolean };

// Each moving node below captures only the shared values it reads, so it
// recomputes when one of those moves and never for the others.

function RootGroup({ ctx, children }: { ctx: Ctx; children: ReactNode }) {
  const [gx, gy] = ctx.rig.ground;
  const { clock, balance, lean, sx, sy, shake, hop } = ctx.m;
  const props = useAnimatedProps(() => ({
    matrix: rootMatrix(gx, gy, clock.value, balance.value, lean.value, sx.value, sy.value, shake.value, hop.value),
  }));
  return <AnimatedG animatedProps={moving(props)}>{children}</AnimatedG>;
}

function HeadGroup({ ctx, children }: { ctx: Ctx; children: ReactNode }) {
  const [px, py] = ctx.rig.headPivot;
  const { clock, sink, breath, tilt, look } = ctx.m;
  const props = useAnimatedProps(() => ({
    matrix: headMatrix(px, py, clock.value, sink.value, breath.value, tilt.value + look.value),
  }));
  return <AnimatedG animatedProps={moving(props)}>{children}</AnimatedG>;
}

// The idle drifts below are scaled by the petals' sway, so a limb moves as
// much as the mood moves the flower (less when sad), and not at all in a
// still, which is then exactly the drawing.

function RaiseGroup({ ctx, part, phase, children }: { ctx: Ctx; part: RigPart; phase: number; children: ReactNode }) {
  const [px, py] = part.pivot;
  const { dir } = part;
  const { clock, sway, raise, swing } = ctx.m;
  const props = useAnimatedProps(() => ({
    matrix: about(px, py, dir * (raise.value + 0.9 * sway.value * drift(clock.value, 2.6, phase)) + swing.value),
  }));
  return <AnimatedG animatedProps={moving(props)}>{children}</AnimatedG>;
}

function WaveGroup({ ctx, part, phase, children }: { ctx: Ctx; part: RigPart; phase: number; children: ReactNode }) {
  const [px, py] = part.pivot;
  const { dir } = part;
  const { clock, sway, wave, breath } = ctx.m;
  const props = useAnimatedProps(() => ({
    matrix: about(
      px,
      py,
      dir *
        (wave.value +
          breath.value * 30 * drift(clock.value, 2.4, 1 + phase) +
          0.4 * sway.value * drift(clock.value, 3.3, 2 + phase)),
    ),
  }));
  return <AnimatedG animatedProps={moving(props)}>{children}</AnimatedG>;
}

/** An arm at rest: it floats out a little on each breath, sways out of step with the other, and joins the gestures. */
function ArmGroup({ ctx, part, phase, children }: { ctx: Ctx; part: RigPart; phase: number; children: ReactNode }) {
  const [px, py] = part.pivot;
  const { dir } = part;
  const { clock, sway, breath, arm, swing } = ctx.m;
  const props = useAnimatedProps(() => ({
    matrix: about(
      px,
      py,
      dir *
        (arm.value +
          0.7 * sway.value * drift(clock.value, 3.4, phase) +
          60 * breath.value * inhale(clock.value)) +
        0.5 * swing.value,
    ),
  }));
  return <AnimatedG animatedProps={moving(props)}>{children}</AnimatedG>;
}

/**
 * Which way a hand points from its wrist, in radians: toward the middle of
 * its own art. Its fingers curl along it. Straight down for a hand whose
 * art cannot be read.
 */
function handAxis(part: RigPart): number {
  const source = part.clip ?? part.ink ?? part.shapes?.join(' ');
  const numbers = source?.match(/-?\d*\.?\d+/g);
  if (numbers == null || numbers.length < 2) return Math.PI / 2;
  let x = 0;
  let y = 0;
  let n = 0;
  for (let i = 0; i + 1 < numbers.length; i += 2) {
    x += Number(numbers[i]);
    y += Number(numbers[i + 1]);
    n += 1;
  }
  const centre: Point = [x / n, y / n];
  const dx = centre[0] - part.pivot[0];
  const dy = centre[1] - part.pivot[1];
  return Math.hypot(dx, dy) < 1 ? Math.PI / 2 : Math.atan2(dy, dx);
}

/** A hand: it waves from the wrist, and its fingers curl toward it and open, the hand turning in a little as they close. */
function HandGroup({ ctx, part, phase, children }: { ctx: Ctx; part: RigPart; phase: number; children: ReactNode }) {
  const [px, py] = part.pivot;
  const { dir } = part;
  const axis = useMemo(() => handAxis(part), [part]);
  const { clock, sway, hand, flex } = ctx.m;
  const props = useAnimatedProps(() => {
    const closed = flex.value;
    return {
      matrix: squeezeAbout(
        px,
        py,
        dir * (hand.value + 0.6 * sway.value * drift(clock.value, 1.9, phase) + 8 * closed),
        axis,
        1 - 0.08 * closed,
      ),
    };
  });
  return <AnimatedG animatedProps={moving(props)}>{children}</AnimatedG>;
}

/** One leg, from the hip: still at rest, it steps, taps, kicks and tucks. */
function LegGroup({ ctx, part, children }: { ctx: Ctx; part: RigPart; children: ReactNode }) {
  const [px, py] = part.pivot;
  const { dir } = part;
  const size = ctx.rig.box.size;
  const length = Math.max(ctx.rig.ground[1] - py, size * 0.1);
  const reach = size * 0.03;
  const { step, tuck } = ctx.m;
  const props = useAnimatedProps(() => ({ matrix: legMatrix(px, py, dir, length, reach, step.value, tuck.value) }));
  return <AnimatedG animatedProps={moving(props)}>{children}</AnimatedG>;
}

function HoldGroup({ ctx, part, children }: { ctx: Ctx; part: RigPart; children: ReactNode }) {
  const [px, py] = part.pivot;
  const size = ctx.rig.box.size;
  const { clock, breath, rub, kick, liftTilt, lift } = ctx.m;
  const props = useAnimatedProps(() => ({
    matrix: about(
      px,
      py,
      rub.value * drift(clock.value, 1.7, 0) + kick.value + liftTilt.value,
      1,
      1,
      0,
      -bob(clock.value, breath.value, size) - lift.value,
    ),
  }));
  return <AnimatedG animatedProps={moving(props)}>{children}</AnimatedG>;
}

function PartGroup({ ctx, part, index, children }: { ctx: Ctx; part: RigPart; index: number; children: ReactNode }) {
  const phase = index * 1.7;
  switch (part.role) {
    case 'raise':
      return <RaiseGroup ctx={ctx} part={part} phase={phase}>{children}</RaiseGroup>;
    case 'wave':
      return <WaveGroup ctx={ctx} part={part} phase={phase}>{children}</WaveGroup>;
    case 'arm':
      return <ArmGroup ctx={ctx} part={part} phase={phase}>{children}</ArmGroup>;
    case 'hand':
      return <HandGroup ctx={ctx} part={part} phase={phase}>{children}</HandGroup>;
    case 'leg':
      return <LegGroup ctx={ctx} part={part}>{children}</LegGroup>;
    case 'hold':
      return <HoldGroup ctx={ctx} part={part}>{children}</HoldGroup>;
    default:
      // Legs drawn as one piece, the standing leg and anything tucked away
      // move only with what carries them: a plain group. Moving them alone
      // would open their seam with the body, which is cut straight through.
      return <G>{children}</G>;
  }
}

function PetalGroup({ ctx, petal, index, children }: { ctx: Ctx; petal: RigPetal; index: number; children: ReactNode }) {
  const [px, py] = petal.pivot;
  const { angle } = petal;
  const { clock, wall, sway, droop, ache, flutter, spread } = ctx.m;
  const props = useAnimatedProps(() => ({
    matrix: about(
      px,
      py,
      petalDegrees(angle, index, clock.value, wall.value, sway.value, droop.value, ache.value, flutter.value),
      spread.value,
      spread.value,
    ),
  }));
  return <AnimatedG animatedProps={moving(props)}>{children}</AnimatedG>;
}

function AcheMark({ ctx, mark, children }: { ctx: Ctx; mark: RigMark; children: ReactNode }) {
  const [cx, cy] = mark.centre;
  const { wall, ache, throb, markPop } = ctx.m;
  const props = useAnimatedProps(() => {
    // Throbs about the art's own size, so a still frame is the drawing.
    const pulse = achePulse(wall.value, ache.value);
    const s = 1 + 0.07 * throb.value * pulse + 0.3 * markPop.value;
    return {
      matrix: about(cx, cy, 0, s, s),
      opacity: Math.min(Math.max(throb.value * (1 + 0.45 * pulse), 0) + markPop.value, 1),
    };
  });
  return <AnimatedG animatedProps={moving(props)}>{children}</AnimatedG>;
}

function BounceMark({ ctx, mark, children }: { ctx: Ctx; mark: RigMark; children: ReactNode }) {
  const [cx, cy] = mark.centre;
  const flickers = mark.role === 'flicker';
  const { wall, markPop, markHide, flick } = ctx.m;
  const props = useAnimatedProps(() => {
    const s = 1 + 0.35 * markPop.value;
    const shown = 1 - markHide.value;
    return {
      matrix: about(cx, cy, 0, s, s),
      opacity: flickers ? shown * (1 - 0.7 * flick.value * flickerAt(wall.value)) : shown,
    };
  });
  return <AnimatedG animatedProps={moving(props)}>{children}</AnimatedG>;
}

function ShadowGroup({ ctx }: { ctx: Ctx }) {
  const { rig, colors } = ctx;
  const [gx, gy] = rig.ground;
  const height = rig.hop * 2;
  const { hop, shake } = ctx.m;
  const props = useAnimatedProps(() => {
    const air = Math.min(Math.max(-hop.value / height, 0), 1);
    return { matrix: about(gx, gy, 0, 1 - 0.45 * air, 1 - 0.45 * air, shake.value) };
  });
  const r = rig.box.size * 0.12;
  return (
    <AnimatedG animatedProps={moving(props)}>
      <Ellipse cx={gx} cy={gy + r * 0.05} rx={r} ry={r * 0.13} fill={colors.shadow} fillOpacity={0.1} />
    </AnimatedG>
  );
}

function EyeGroup({ ctx, side, children }: { ctx: Ctx; side: 0 | 1; children: ReactNode }) {
  const [cx, cy] = ctx.rig.eyeCentres[side];
  const { blink, blinkable, swap, eyeX, eyeY } = ctx.m;
  const props = useAnimatedProps(() => {
    // An eye closes about its own middle: a blink, or the squeeze a new face comes in on.
    const closed = Math.max(blink.value * blinkable.value, swap.value);
    return { matrix: about(cx, cy, 0, 1, 1 - 0.88 * closed, eyeX.value, eyeY.value) };
  });
  return <AnimatedG animatedProps={moving(props)}>{children}</AnimatedG>;
}

function MouthGroup({ ctx, children }: { ctx: Ctx; children: ReactNode }) {
  const [cx, cy] = ctx.rig.mouthCentre;
  const { swap, eyeX } = ctx.m;
  // The mouth goes a little of the way the eyes go, so a glance turns the face.
  const props = useAnimatedProps(() => ({ matrix: about(cx, cy, 0, 1, 1 - 0.8 * swap.value, 0.5 * eyeX.value) }));
  return <AnimatedG animatedProps={moving(props)}>{children}</AnimatedG>;
}

/** A stroked outline, half of which the paper drawn later covers. */
const inkOf = (ctx: Ctx, d: string, extra = 0) => (
  <Path
    d={d}
    fill="none"
    stroke={ctx.colors.ink}
    strokeWidth={ctx.rig.outline + extra}
    strokeLinejoin="round"
    strokeLinecap="round"
  />
);

function Marks({ ctx, parent, pass }: { ctx: Ctx; parent: string; pass: 'ink' | 'paper' }) {
  return (
    <>
      {ctx.rig.marks
        // Ache marks are only in the tree while they can show: a group at
        // opacity 0 still costs an offscreen layer on every frame.
        .filter((mark) => mark.parent === parent && (mark.role !== 'ache' || ctx.aching))
        .map((mark) => {
          const body = mark.d.map((d) =>
            pass === 'ink' ? (
              <G key={d}>{inkOf(ctx, d, mark.thicken)}</G>
            ) : (
              <Path
                key={d}
                d={d}
                fill={ctx.colors.paper}
                stroke={mark.thicken > 0 ? ctx.colors.paper : 'none'}
                strokeWidth={mark.thicken}
                strokeLinejoin="round"
              />
            ),
          );
          return mark.role === 'ache' ? (
            <AcheMark key={mark.name} ctx={ctx} mark={mark}>
              {body}
            </AcheMark>
          ) : (
            <BounceMark key={mark.name} ctx={ctx} mark={mark}>
              {body}
            </BounceMark>
          );
        })}
    </>
  );
}

function PartTree({ ctx, part, pass }: { ctx: Ctx; part: RigPart; pass: 'ink' | 'paper' }) {
  const { rig, colors, id } = ctx;
  const index = rig.parts.indexOf(part);
  return (
    <PartGroup ctx={ctx} part={part} index={index}>
      {pass === 'ink'
        ? part.ink != null && inkOf(ctx, part.ink)
        : part.clip != null &&
          part.body != null && (
            <Path d={rig.bodies[part.body]} fill={colors.paper} fillRule="evenodd" clipPath={`url(#${id}-${part.name})`} />
          )}
      {part.shapes?.map((d) =>
        pass === 'ink' ? <G key={d}>{inkOf(ctx, d)}</G> : <Path key={d} d={d} fill={colors.paper} fillRule="evenodd" />,
      )}
      {rig.parts
        .filter((child) => child.parent === part.name)
        .map((child) => (
          <PartTree key={child.name} ctx={ctx} part={child} pass={pass} />
        ))}
      <Marks ctx={ctx} parent={part.name} pass={pass} />
      {pass === 'paper' && part.lines?.map((d) => <Path key={d} d={d} fill={colors.ink} />)}
    </PartGroup>
  );
}

/** Only the face being worn is drawn; a change of face swaps it at the bottom of a squeeze. */
function Face({ ctx, face }: { ctx: Ctx; face: RigFace }) {
  const { rig, colors } = ctx;
  const feature = (d: string, filled: boolean) =>
    filled ? (
      <Path d={d} fill={colors.ink} />
    ) : (
      <Path d={d} fill="none" stroke={colors.ink} strokeWidth={rig.feature} strokeLinecap="round" strokeLinejoin="round" />
    );
  return (
    <>
      <EyeGroup ctx={ctx} side={0}>
        {feature(face.eyes[0], face.eyesFilled)}
      </EyeGroup>
      <EyeGroup ctx={ctx} side={1}>
        {feature(face.eyes[1], face.eyesFilled)}
      </EyeGroup>
      <MouthGroup ctx={ctx}>{feature(face.mouth, face.mouthFilled)}</MouthGroup>
    </>
  );
}

/** One pass over the whole tree: every outline first, then every paper over them. */
function Pass({ ctx, pass, face }: { ctx: Ctx; pass: 'ink' | 'paper'; face: RigFace }) {
  const { rig, colors, id } = ctx;
  return (
    <>
      {rig.shapes.map((d) =>
        pass === 'ink' ? <G key={d}>{inkOf(ctx, d)}</G> : <Path key={d} d={d} fill={colors.paper} fillRule="evenodd" />,
      )}
      {rig.parts
        .filter((part) => part.parent === 'root')
        .map((part) => (
          <PartTree key={part.name} ctx={ctx} part={part} pass={pass} />
        ))}
      <HeadGroup ctx={ctx}>
        {rig.core != null &&
          (pass === 'ink'
            ? rig.core.ink != null && inkOf(ctx, rig.core.ink)
            : (
                <Path d={rig.bodies[rig.core.body]} fill={colors.paper} fillRule="evenodd" clipPath={`url(#${id}-core)`} />
              ))}
        {rig.petals.map((petal, i) => (
          <PetalGroup key={petal.name} ctx={ctx} petal={petal} index={i}>
            {pass === 'ink' ? (
              inkOf(ctx, petal.ink)
            ) : (
              <Path d={rig.bodies[petal.body]} fill={colors.paper} fillRule="evenodd" clipPath={`url(#${id}-${petal.name})`} />
            )}
          </PetalGroup>
        ))}
        {rig.parts
          .filter((part) => part.parent === 'head')
          .map((part) => (
            <PartTree key={part.name} ctx={ctx} part={part} pass={pass} />
          ))}
        <Marks ctx={ctx} parent="head" pass={pass} />
        {pass === 'paper' && <Face ctx={ctx} face={face} />}
      </HeadGroup>
      <Marks ctx={ctx} parent="root" pass={pass} />
    </>
  );
}

/**
 * A rigged mascot, drawn: the traced art cut into parts that move.
 *
 * Every outline goes down before any paper. A stroke is centred on its
 * edge, so half of it spills into the body; the paper over it trims every
 * outline to its outer half and fills the slits between fingers solid. In
 * the dark the outline is drawn in the colour behind the mascot, which makes
 * it the white cut-out the art was drawn as.
 *
 * Sized by the square the character is fitted to (`size`); the canvas
 * reaches past it, above most, so a hop is never cut off. Never takes
 * touches.
 */
export function MascotDrawing({
  rig,
  size,
  colors,
  motion,
  face,
  aching,
  shadow = true,
}: {
  rig: MascotRig;
  size: number;
  colors: MascotColors;
  motion: Motion;
  /** The face being worn, by name. */
  face: string;
  /** The ache marks are in the drawing. */
  aching: boolean;
  /** The ground shadow, which the art itself does not have. */
  shadow?: boolean;
}) {
  const k = size / rig.box.size;
  const { canvas, box } = rig;
  const ctx: Ctx = { rig, m: motion, colors, id: rig.name, aching };
  const worn = rig.faces[face] ?? Object.values(rig.faces)[0];
  const headUnderlays = rig.underlays.filter((u) => u.parent === 'head');
  return (
    <Svg
      pointerEvents="none"
      width={canvas.width * k}
      height={canvas.height * k}
      viewBox={`${canvas.x} ${canvas.y} ${canvas.width} ${canvas.height}`}
      style={{ position: 'absolute', left: (canvas.x - box.x) * k, top: (canvas.y - box.y) * k }}>
      <Defs>
        {rig.parts
          .filter((part) => part.clip != null)
          .map((part) => (
            <ClipPath key={part.name} id={`${ctx.id}-${part.name}`}>
              <Polygon points={part.clip} />
            </ClipPath>
          ))}
        {rig.petals.map((petal) => (
          <ClipPath key={petal.name} id={`${ctx.id}-${petal.name}`}>
            <Polygon points={petal.clip} />
          </ClipPath>
        ))}
        {rig.core != null && (
          <ClipPath id={`${ctx.id}-core`}>
            <Polygon points={rig.core.clip} />
          </ClipPath>
        )}
      </Defs>
      {shadow && <ShadowGroup ctx={ctx} />}
      <RootGroup ctx={ctx}>
        {rig.underlays
          .filter((u) => u.parent === 'root')
          .map((u) => (
            <Polygon key={u.points} points={u.points} fill={colors.paper} />
          ))}
        {headUnderlays.length > 0 && (
          <HeadGroup ctx={ctx}>
            {headUnderlays.map((u) => (
              <Polygon key={u.points} points={u.points} fill={colors.paper} />
            ))}
          </HeadGroup>
        )}
        <Pass ctx={ctx} pass="ink" face={worn} />
        <Pass ctx={ctx} pass="paper" face={worn} />
      </RootGroup>
    </Svg>
  );
}
