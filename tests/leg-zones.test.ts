import { describe, expect, test } from 'bun:test';

import { LANGUAGES, translatorFor } from '../src/shared/lib/i18n';
import {
  MAX_ZONES,
  PAIN_ZONES,
  ZONE_LABEL_KEYS,
  toggleZone,
  zoneAt,
  type LegZone,
} from '../src/pages/home/model/leg-zones';
import { RELIEF_LIMIT } from '../src/pages/home/model/zone-relief';

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
    const missing = PAIN_ZONES.filter((zone) => ZONE_LABEL_KEYS[zone] == null);
    expect(missing).toEqual([]);
  });

  /**
   * And every label names a different place, in every language.
   *
   * The caption joins up to three of these with a middle dot. Two zones sharing
   * a name would print "Ankle · Ankle" and leave the user unable to tell which
   * of the two they had marked — a failure the type system cannot see, because
   * both sides are perfectly valid catalogue keys.
   *
   * Russian is where the pressure is: «лодыжка» and «голеностоп» are two words
   * a translator could reasonably reach for, and the inner ankle and the ankle
   * would then collide.
   */
  for (const language of LANGUAGES) {
    test(`${language} names every zone differently`, () => {
      const t = translatorFor(language);
      const names = PAIN_ZONES.map((zone) => t(ZONE_LABEL_KEYS[zone]));
      expect(new Set(names).size).toBe(names.length);
    });
  }

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

/**
 * Three at a time.
 *
 * The relief session runs to four exercises, so a fourth zone could only be
 * honoured by giving some zone nothing.
 */
describe('the selection cap', () => {
  test('lets three in', () => {
    let zones: readonly LegZone[] = [];
    for (const zone of ['heel', 'calf', 'arch'] as LegZone[]) {
      const next = toggleZone(zones, zone);
      expect(next).not.toBeNull();
      zones = next ?? zones;
    }
    expect(zones).toEqual(['heel', 'calf', 'arch']);
  });

  test('refuses the fourth, and says so rather than returning the list', () => {
    // Null, not the unchanged array. The caller has to be able to tell "nothing
    // changed" from "nothing happened" — a map that silently ignores a tap is
    // the failure the hit testing was rewritten to remove.
    expect(toggleZone(['heel', 'calf', 'arch'], 'toes')).toBeNull();
  });

  test('never refuses a deselect, even at the cap', () => {
    // Otherwise the cap is a trap: full, and no way to change your mind.
    expect(toggleZone(['heel', 'calf', 'arch'], 'calf')).toEqual(['heel', 'arch']);
  });

  test('frees a slot when one is removed', () => {
    const freed = toggleZone(['heel', 'calf', 'arch'], 'calf') ?? [];
    expect(toggleZone(freed, 'toes')).toEqual(['heel', 'arch', 'toes']);
  });

  test('the cap is never more than the relief session can carry', () => {
    expect(MAX_ZONES).toBeLessThanOrEqual(RELIEF_LIMIT);
  });
});
