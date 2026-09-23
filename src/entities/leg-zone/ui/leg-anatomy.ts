import type { LegZone } from '../model/leg-zones';

/**
 * The drawing, as data.
 *
 * Inner (medial) view of the lower leg and foot, toes to the right, in the
 * viewBox `LEG_VIEW` describes. Every tappable shape is here with the tissue it
 * is drawn as and, for muscle and tendon, the line its fibres run along — the
 * fibres are what make a shape read as muscle rather than as a plate, and they
 * are generated once, below, rather than hand-written per strand.
 *
 * Pure strings and arithmetic, so the geometry can be reviewed without the
 * renderer and changed without touching it.
 */

export type Tissue = 'muscle' | 'bone' | 'tendon';

/** Where a muscle's fibres run: top, bend, bottom, how wide the bundle is, how
 * many strands, and how much the bundle fans out through its belly. */
type FibreSpec = {
  top: readonly [number, number];
  mid: readonly [number, number];
  bottom: readonly [number, number];
  spread: number;
  count: number;
  bulge: number;
};

export type AnatomyPart = {
  zone: LegZone;
  tissue: Tissue;
  d: string;
  fibre?: FibreSpec;
};

/** The skin: everything the parts sit inside. */
export const SILHOUETTE =
  'M78 0C58 40 38 92 40 146C42 206 76 262 100 300C112 322 116 352 114 392' +
  'C112 420 94 440 92 470C90 500 108 514 136 513C168 512 196 500 230 495' +
  'C258 492 280 504 308 511C330 516 352 512 361 500C366 490 362 480 352 476' +
  'C326 468 296 452 272 436C252 422 240 406 234 384C228 356 224 300 224 240' +
  'C224 160 228 80 232 0Z';

/**
 * Back to front. The soleus goes first because the calf's medial head lies
 * over it — only the band below and the strip in front of the calf show, which
 * is also how it looks on a real leg.
 */
export const PARTS: readonly AnatomyPart[] = [
  {
    zone: 'soleus',
    tissue: 'muscle',
    d: 'M136 96C154 158 156 236 146 296C140 322 130 340 122 354C116 336 112 318 104 302C90 280 74 256 62 232C84 256 104 268 118 270C132 236 140 180 136 96Z',
    fibre: { top: [138, 100], mid: [140, 250], bottom: [120, 352], spread: 34, count: 7, bulge: 1.1 },
  },
  {
    zone: 'tibia',
    tissue: 'bone',
    d: 'M158 0C162 96 166 196 170 282C174 322 180 356 192 380C204 384 214 372 216 346C214 250 212 110 214 0Z',
  },
  {
    zone: 'tib_ant',
    tissue: 'muscle',
    d: 'M217 0C217 110 216 220 218 320C220 350 226 372 234 386C236 360 228 300 226 240C226 160 228 80 230 0Z',
    fibre: { top: [223, 0], mid: [221, 190], bottom: [230, 380], spread: 10, count: 3, bulge: 1 },
  },
  {
    zone: 'calf',
    tissue: 'muscle',
    d: 'M86 4C62 40 46 92 48 146C50 196 76 240 110 266C122 236 132 190 132 136C132 78 116 30 86 4Z',
    fibre: { top: [100, 6], mid: [86, 150], bottom: [112, 264], spread: 78, count: 10, bulge: 1.3 },
  },
  {
    zone: 'achilles',
    tissue: 'tendon',
    d: 'M112 286C124 318 128 362 124 404C122 426 118 440 112 452C104 428 106 390 104 356C103 330 104 306 112 286Z',
    fibre: { top: [112, 288], mid: [118, 370], bottom: [112, 450], spread: 10, count: 4, bulge: 1 },
  },
  {
    zone: 'ankle',
    tissue: 'muscle',
    d: 'M128 364C154 376 196 386 232 386C240 404 254 420 270 432C240 446 204 454 172 458C162 440 148 424 138 412C130 398 126 380 128 364Z',
    fibre: { top: [134, 372], mid: [196, 420], bottom: [262, 436], spread: 30, count: 5, bulge: 0.8 },
  },
  {
    zone: 'heel',
    tissue: 'muscle',
    d: 'M110 452C94 468 94 496 110 508C126 516 152 514 168 504C180 494 182 472 172 458C158 446 128 442 110 452Z',
  },
  {
    zone: 'dorsum',
    tissue: 'muscle',
    d: 'M244 436C266 446 296 458 324 468C338 472 348 476 352 482C334 488 310 486 288 482C262 476 240 468 226 460C228 450 234 442 244 436Z',
    fibre: { top: [226, 456], mid: [288, 474], bottom: [350, 482], spread: 12, count: 3, bulge: 1 },
  },
  {
    zone: 'arch',
    tissue: 'muscle',
    d: 'M174 470C204 474 246 482 282 492C298 496 306 504 302 510C288 505 262 500 236 500C212 500 194 506 176 510C168 496 167 482 174 470Z',
    fibre: { top: [172, 490], mid: [240, 490], bottom: [302, 503], spread: 24, count: 6, bulge: 1 },
  },
  {
    zone: 'ball',
    tissue: 'muscle',
    d: 'M304 494C318 490 336 494 344 502C338 512 320 514 306 510C300 505 299 499 304 494Z',
  },
  {
    zone: 'toes',
    tissue: 'muscle',
    d: 'M348 480C360 480 368 489 366 499C364 509 354 513 346 509C340 501 340 487 348 480Z',
  },
];

/** The inner ankle bone, and the `inner_ankle` zone. */
export const MALLEOLUS = { cx: 186, cy: 400, r: 16 } as const;

/** The big toe's nail. Drawn, never an answer. */
export const NAIL = 'M355 483C361 484 365 490 364 497C359 495 355 490 355 483Z';

/** Tibialis anterior's tendon, crossing the front of the ankle to the inner
 * foot. Drawn, never an answer — it is what makes the ankle read as a joint. */
export const TENDON = 'M231 372C236 400 244 424 252 446';

/** One fibre per strand, as a quadratic curve through the bundle. */
export function fibresOf(spec: FibreSpec): string[] {
  const out: string[] = [];
  for (let i = 0; i < spec.count; i += 1) {
    const t = spec.count === 1 ? 0 : i / (spec.count - 1) - 0.5;
    const o = t * spec.spread;
    out.push(
      `M${spec.top[0] + o * 0.6} ${spec.top[1]}` +
        `Q${spec.mid[0] + o * spec.bulge} ${spec.mid[1]} ${spec.bottom[0] + o * 0.15} ${spec.bottom[1]}`,
    );
  }
  return out;
}
