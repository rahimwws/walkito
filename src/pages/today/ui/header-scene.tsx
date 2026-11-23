import Svg, { Circle, ClipPath, Defs, Ellipse, G, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

import type { PlanKind } from '@/entities/profile';

export type SceneTime = 'morning' | 'day' | 'evening';

type Palette = {
  skyTop: string;
  skyBottom: string;
  sun: string;
  cloud: string;
  hillFar: string;
  hillNear: string;
  bush: string;
  bushDark: string;
  trunk: string;
  crown: string;
  path: string;
  flower: string;
  wall: string;
  wood: string;
  /** Text drawn over the scene. */
  ink: string;
  /** The status bar goes light over this scene. */
  dark: boolean;
};

/**
 * The scene's colours by time of day: a peach morning, a blue day, a violet
 * evening with the moon out. Illustration colours, like the Fluent drawings
 * carry their own, so they live with the drawing rather than in the tokens.
 */
const PALETTES: Readonly<Record<SceneTime, Palette>> = {
  morning: {
    skyTop: '#FFD3B0',
    skyBottom: '#FFF1DF',
    sun: '#FFA94D',
    cloud: '#FFFFFF',
    hillFar: '#A6DDB3',
    hillNear: '#6CC489',
    bush: '#4FAF72',
    bushDark: '#3E9A61',
    trunk: '#8A5A3B',
    crown: '#5BBF7D',
    path: '#F6DDB8',
    flower: '#FF8FA3',
    wall: '#FFE9D6',
    wood: '#D29A6A',
    ink: '#1D1D24',
    dark: false,
  },
  day: {
    skyTop: '#76C4F4',
    skyBottom: '#D3EEFC',
    sun: '#FFD23F',
    cloud: '#FFFFFF',
    hillFar: '#9EDB9B',
    hillNear: '#5DC06F',
    bush: '#43A85E',
    bushDark: '#35924F',
    trunk: '#8A5A3B',
    crown: '#4DB867',
    path: '#F3DDB4',
    flower: '#FFC531',
    wall: '#E6F3FB',
    wood: '#D29A6A',
    ink: '#1D1D24',
    dark: false,
  },
  evening: {
    skyTop: '#2E2A6B',
    skyBottom: '#7E62C2',
    sun: '#FFF0B8',
    cloud: '#B9A6E8',
    hillFar: '#4F7F79',
    hillNear: '#3B6A5E',
    bush: '#2F5A4C',
    bushDark: '#244A3E',
    trunk: '#5A3D2B',
    crown: '#3D7262',
    path: '#C8B596',
    flower: '#FFB3C1',
    wall: '#3A3566',
    wood: '#8C6448',
    ink: '#FFFFFF',
    dark: true,
  },
};

export function sceneTime(hour: number): SceneTime {
  if (hour >= 5 && hour < 11) return 'morning';
  if (hour >= 11 && hour < 18) return 'day';
  return 'evening';
}

export function scenePalette(time: SceneTime): Palette {
  return PALETTES[time];
}

const W = 390;
const H = 300;

function Sky({ p, id }: { p: Palette; id: string }) {
  return (
    <>
      <Defs>
        <LinearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={p.skyTop} />
          <Stop offset="1" stopColor={p.skyBottom} />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={W} height={H} fill={`url(#${id})`} />
    </>
  );
}

function Cloud({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <G transform={`translate(${x} ${y}) scale(${s})`}>
      <Circle cx={0} cy={0} r={14} fill={color} />
      <Circle cx={16} cy={-8} r={18} fill={color} />
      <Circle cx={34} cy={0} r={13} fill={color} />
      <Rect x={0} y={0} width={34} height={13} fill={color} />
    </G>
  );
}

function SunOrMoon({ time, p, x, y }: { time: SceneTime; p: Palette; x: number; y: number }) {
  if (time !== 'evening') {
    return (
      <>
        <Circle cx={x} cy={y} r={44} fill={p.sun} opacity={0.25} />
        <Circle cx={x} cy={y} r={30} fill={p.sun} />
      </>
    );
  }
  return (
    <>
      {[
        [40, 40],
        [120, 70],
        [200, 30],
        [250, 110],
        [360, 130],
        [170, 120],
      ].map(([sx, sy]) => (
        <Circle key={`${sx}-${sy}`} cx={sx} cy={sy} r={2} fill="#FFFFFF" opacity={0.8} />
      ))}
      <Circle cx={x} cy={y} r={24} fill={p.sun} />
      <Circle cx={x + 10} cy={y - 8} r={20} fill={p.skyTop} />
    </>
  );
}

function Tree({ x, y, s, p }: { x: number; y: number; s: number; p: Palette }) {
  return (
    <G transform={`translate(${x} ${y}) scale(${s})`}>
      <Rect x={-4} y={-6} width={8} height={40} rx={3} fill={p.trunk} />
      <Circle cx={0} cy={-22} r={24} fill={p.crown} />
      <Circle cx={-16} cy={-6} r={16} fill={p.crown} />
      <Circle cx={16} cy={-8} r={17} fill={p.crown} />
      <Circle cx={-6} cy={-30} r={8} fill={p.bush} opacity={0.35} />
    </G>
  );
}

function Bush({ x, y, s, p }: { x: number; y: number; s: number; p: Palette }) {
  return (
    <G transform={`translate(${x} ${y}) scale(${s})`}>
      <Circle cx={-14} cy={0} r={14} fill={p.bushDark} />
      <Circle cx={4} cy={-8} r={18} fill={p.bush} />
      <Circle cx={22} cy={0} r={13} fill={p.bushDark} />
    </G>
  );
}

function Flowers({ p }: { p: Palette }) {
  return (
    <>
      {[
        [96, 262],
        [118, 274],
        [212, 258],
        [236, 270],
        [330, 280],
      ].map(([fx, fy]) => (
        <G key={`${fx}-${fy}`}>
          <Circle cx={fx} cy={fy} r={5} fill={p.flower} />
          <Circle cx={fx} cy={fy} r={2} fill="#FFFFFF" />
        </G>
      ))}
    </>
  );
}

/** Outdoors: the runner's park path, or the feet plan's garden. */
function Park({ time, p, path }: { time: SceneTime; p: Palette; path: boolean }) {
  return (
    <>
      <Sky p={p} id={`sky-park-${time}`} />
      <SunOrMoon time={time} p={p} x={time === 'day' ? 250 : time === 'morning' ? 300 : 290} y={time === 'morning' ? 175 : 95} />
      {time !== 'evening' && (
        <>
          <Cloud x={190} y={60} s={1} color={p.cloud} />
          <Cloud x={50} y={150} s={0.8} color={p.cloud} />
        </>
      )}
      <Path d="M0 205 Q 95 160 195 198 T 390 186 L390 300 L0 300 Z" fill={p.hillFar} />
      <Tree x={350} y={205} s={1.1} p={p} />
      <Tree x={36} y={226} s={0.9} p={p} />
      <Path d="M0 246 Q 120 206 240 238 T 390 228 L390 300 L0 300 Z" fill={p.hillNear} />
      {path ? (
        <Path
          d="M150 300 C 170 272 214 252 262 238 C 292 230 322 226 352 224 L 360 230 C 326 236 296 244 270 256 C 236 272 218 288 212 300 Z"
          fill={p.path}
        />
      ) : (
        <Flowers p={p} />
      )}
      <Bush x={70} y={288} s={1.1} p={p} />
      <Bush x={310} y={292} s={1.2} p={p} />
    </>
  );
}

/** Indoors for a desk plan: a window onto the same sky, a plant, the desk. */
function Desk({ time, p }: { time: SceneTime; p: Palette }) {
  const win = { x: 184, y: 92, w: 166, h: 146 };
  return (
    <>
      <Rect x={0} y={0} width={W} height={H} fill={p.wall} />
      <Defs>
        <ClipPath id={`window-${time}`}>
          <Rect x={win.x} y={win.y} width={win.w} height={win.h} rx={18} />
        </ClipPath>
      </Defs>
      <G clipPath={`url(#window-${time})`}>
        <Sky p={p} id={`sky-desk-${time}`} />
        <SunOrMoon time={time} p={p} x={time === 'morning' ? 230 : 300} y={time === 'morning' ? 200 : 130} />
        {time !== 'evening' && <Cloud x={240} y={130} s={0.7} color={p.cloud} />}
        <Path d="M170 206 Q 240 180 290 202 T 360 196 L360 240 L170 240 Z" fill={p.hillFar} />
        <Tree x={320} y={212} s={0.6} p={p} />
        <Path d="M170 224 Q 250 204 300 218 T 360 214 L360 240 L170 240 Z" fill={p.hillNear} />
      </G>
      <Rect x={win.x} y={win.y} width={win.w} height={win.h} rx={18} fill="none" stroke="#FFFFFF" strokeWidth={10} />
      <Rect x={win.x + win.w / 2 - 3} y={win.y} width={6} height={win.h} fill="#FFFFFF" />
      <Rect x={win.x} y={win.y + win.h / 2 - 3} width={win.w} height={6} fill="#FFFFFF" />
      <Rect x={0} y={252} width={W} height={48} fill={p.wood} />
      <Rect x={0} y={252} width={W} height={6} fill="#000000" opacity={0.08} />
      <G transform="translate(56 252) scale(0.7)">
        <Ellipse cx={-14} cy={-62} rx={12} ry={30} fill={p.crown} transform="rotate(-25 -14 -62)" />
        <Ellipse cx={14} cy={-66} rx={12} ry={32} fill={p.bush} transform="rotate(22 14 -66)" />
        <Ellipse cx={0} cy={-76} rx={11} ry={34} fill={p.crown} />
        <Path d="M-24 -36 H24 L18 0 H-18 Z" fill="#E07B4F" />
        <Rect x={-27} y={-42} width={54} height={9} rx={4} fill="#C9653D" />
      </G>
      <G transform="translate(267 252)">
        <Rect x={-36} y={-14} width={72} height={14} rx={4} fill="#FFFFFF" opacity={0.85} />
        <Rect x={-30} y={-24} width={60} height={10} rx={3} fill="#FFFFFF" opacity={0.7} />
      </G>
    </>
  );
}

export type HeaderSceneProps = {
  kind: PlanKind;
  time: SceneTime;
  width: number;
  height: number;
};

/**
 * Today's header (BitePal #97, without the character): a flat illustrated
 * scene, a park path for a runner, a garden for the feet plan, a window and a
 * plant over a desk for the desk plan, in the colours of the time of day.
 */
export function HeaderScene({ kind, time, width, height }: HeaderSceneProps) {
  const p = PALETTES[time];
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants">
      {kind === 'desk' ? <Desk time={time} p={p} /> : <Park time={time} p={p} path={kind === 'runner'} />}
    </Svg>
  );
}
