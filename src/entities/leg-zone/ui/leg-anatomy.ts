import type { LegZone } from '../model/leg-zones';

/**
 * The drawing, as data.
 *
 * The leg itself is a render — `assets/leg-map/leg.webp`, in the same white
 * écorché style as the exercise clips — and what lives here is only what sits
 * on top of it: one outline per zone, traced over the render, which fills red
 * when that zone is marked. Nothing here is drawn when nothing is marked.
 *
 * It was a hand-built SVG plate before: gradients, fibres and a sheen per
 * muscle. That got as far as vector art gets, which is not far enough — next to
 * the clips it read as a diagram of a different body. A render gives the grain
 * and the soft light for free, and the outlines only have to say where.
 *
 * Coordinates are pixels of the source render (897 × 1752) rather than of the
 * cropped asset, so an outline can be checked against the original by eye. The
 * asset is the part of it `LEG_VIEW` frames.
 *
 * Pure data and arithmetic, so the geometry can be reviewed without the
 * renderer and changed without touching it.
 */

type Point = readonly [number, number];

/** Where the cropped render sits, in the same units as the outlines. */
export const LEG_IMAGE = { x: 110, y: 40, width: 770, height: 1620 } as const;

/**
 * Each zone's outline, as a loop of points traced round the muscle, tendon or
 * part of the foot it names. Smoothed into curves by `outline` below, so a
 * point list stays short enough to read and adjust.
 *
 * Back to front: the calf's tint lies over the soleus where their edges meet.
 */
const OUTLINES: Readonly<Record<LegZone, readonly Point[]>> = {
  soleus: [[300, 470], [296, 600], [284, 760], [268, 920], [252, 1080], [236, 1000], [214, 880], [204, 780], [232, 690], [262, 580]],
  calf: [[300, 165], [335, 240], [300, 420], [262, 580], [232, 690], [200, 785], [160, 700], [142, 600], [148, 500], [178, 400], [228, 300], [256, 200]],
  tibia: [[445, 280], [434, 400], [432, 550], [430, 700], [420, 850], [402, 1000], [400, 1180], [395, 1230], [370, 1180], [350, 1000], [330, 800], [320, 600], [325, 420], [360, 300]],
  tib_ant: [[500, 290], [478, 400], [476, 550], [474, 700], [464, 850], [448, 1000], [442, 1120], [446, 1230], [425, 1270], [400, 1180], [402, 1000], [420, 850], [430, 700], [432, 550], [434, 400], [445, 290]],
  achilles: [[252, 1090], [285, 1150], [305, 1250], [300, 1340], [280, 1400], [245, 1420], [256, 1330], [260, 1200]],
  ankle: [[330, 1300], [420, 1300], [475, 1310], [500, 1345], [470, 1395], [400, 1420], [360, 1440], [330, 1360]],
  inner_ankle: [[300, 1360], [335, 1355], [360, 1385], [350, 1425], [315, 1440], [290, 1415]],
  heel: [[245, 1425], [295, 1440], [312, 1500], [300, 1555], [262, 1568], [228, 1558], [212, 1515], [222, 1460]],
  arch: [[320, 1515], [400, 1505], [480, 1510], [545, 1530], [550, 1575], [520, 1605], [460, 1590], [380, 1572], [322, 1565]],
  dorsum: [[505, 1345], [560, 1405], [630, 1465], [700, 1505], [690, 1525], [610, 1515], [530, 1495], [460, 1465], [425, 1425], [470, 1390]],
  ball: [[555, 1530], [610, 1525], [648, 1550], [640, 1600], [595, 1620], [552, 1605], [540, 1565]],
  toes: [[650, 1530], [720, 1515], [790, 1538], [845, 1560], [840, 1595], [790, 1615], [710, 1622], [658, 1610], [642, 1570]],
};

/** Draw order for the tints — the order of `OUTLINES`. */
export const ZONE_ORDER = Object.keys(OUTLINES) as LegZone[];

/**
 * A closed Catmull-Rom curve through the points, as cubic Béziers.
 *
 * Through the points rather than near them, so a traced point is a place the
 * edge actually passes — which is what makes the list adjustable by eye.
 */
function smooth(points: readonly Point[]): string {
  const n = points.length;
  const at = (i: number) => points[(i + n) % n];
  let d = `M${at(0)[0]} ${at(0)[1]}`;
  for (let i = 0; i < n; i += 1) {
    const [p0, p1, p2, p3] = [at(i - 1), at(i), at(i + 1), at(i + 2)];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0]} ${p2[1]}`;
  }
  return `${d}Z`;
}

/** Each zone's outline as a path, computed once — it is geometry, not state. */
export const ZONE_PATHS: Readonly<Record<LegZone, string>> = Object.fromEntries(
  ZONE_ORDER.map((zone) => [zone, smooth(OUTLINES[zone])]),
) as Record<LegZone, string>;
