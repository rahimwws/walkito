import { describe, expect, test } from 'bun:test';

import {
  PAIN_ZONES,
  ZONE_LABELS,
  zoneAt,
  type LegZone,
} from '../src/pages/home/model/leg-zones';

/**
 * Which zone a tap on the leg means.
 *
 * The first version put `onPress` on each SVG path, so a tap only counted when
 * it landed inside a filled outline. Several of those outlines are slivers —
 * the achilles is fourteen points wide — and missing did nothing at all, with
 * no feedback to distinguish a miss from a broken screen. "Works every other
 * time" was the report, and it was accurate.
 *
 * Nearest-centre is forgiving by design, so what needs proving is that it is
 * not *too* forgiving: a tap on the heel must not select the arch, and a tap
 * off the leg entirely must select nothing.
 */

/** The drawing as laid out on a phone: the box keeps the viewBox aspect ratio,
 * so these are the real numbers the component passes in. */
const SIZE = { width: 356, height: 532 };

/** viewBox point → the view coordinates a tap there would produce. */
function tapAt(vx: number, vy: number) {
  return zoneAt(((vx - 44) / 356) * SIZE.width, ((vy + 2) / 532) * SIZE.height, SIZE);
}

describe('hit testing', () => {
  const cases: readonly { zone: LegZone; x: number; y: number; where: string }[] = [
    { zone: 'heel', x: 138, y: 482, where: 'the heel' },
    { zone: 'arch', x: 235, y: 492, where: 'the arch' },
    { zone: 'achilles', x: 140, y: 395, where: 'the achilles' },
    { zone: 'toes', x: 368, y: 503, where: 'the toes' },
    { zone: 'ball', x: 325, y: 510, where: 'the ball of the foot' },
    { zone: 'calf', x: 112, y: 120, where: 'the calf' },
    { zone: 'soleus', x: 140, y: 260, where: 'the soleus' },
  ];

  for (const { zone, x, y, where } of cases) {
    test(`a tap on ${where} picks ${zone}`, () => {
      expect(tapAt(x, y)).toBe(zone);
    });
  }

  test('the heel and the arch do not bleed into each other', () => {
    // Adjacent centres, and the two most likely to be confused: both are the
    // underside of the foot and they sit a hundred points apart.
    expect(tapAt(150, 485)).toBe('heel');
    expect(tapAt(250, 492)).toBe('arch');
  });

  test('a tap well off the leg selects nothing', () => {
    // The empty margin to the right of the calf. Selecting "whatever is least
    // far away" there would mark a zone the user never touched.
    expect(tapAt(390, 60)).toBeNull();
  });

  test('an unmeasured box selects nothing rather than dividing by zero', () => {
    // The first frame, before `onLayout` has run.
    expect(zoneAt(10, 10, { width: 0, height: 0 })).toBeNull();
  });
});

describe('the zone list', () => {
  test('everything tappable has a label', () => {
    const missing = PAIN_ZONES.filter((zone) => ZONE_LABELS[zone] == null);
    expect(missing).toEqual([]);
  });

  test('every tappable zone can actually be reached', () => {
    // A zone in the list with no centre is unreachable: `zoneAt` skips it, so
    // it is drawn, documented, and impossible to select.
    const unreachable = PAIN_ZONES.filter((zone) => {
      for (let x = 44; x <= 400; x += 4) {
        for (let y = -2; y <= 530; y += 4) {
          if (tapAt(x, y) === zone) return false;
        }
      }
      return true;
    });
    expect(unreachable).toEqual([]);
  });
});
