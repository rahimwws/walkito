import { describe, expect, test } from 'bun:test';

import { LANGUAGES, translatorFor } from '../src/shared/lib/i18n';
import {
  LEG_VIEW,
  MAX_ZONES,
  PAIN_ZONES,
  ZONE_LABEL_KEYS,
  toggleZone,
  zoneAt,
  type LegZone,
} from '../src/entities/leg-zone/model/leg-zones';
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
const SIZE = { width: 180, height: (180 * LEG_VIEW.height) / LEG_VIEW.width };

/** viewBox point → the view coordinates a tap there would produce. */
function tapAt(vx: number, vy: number) {
  return zoneAt(
    ((vx - LEG_VIEW.x) / LEG_VIEW.width) * SIZE.width,
    ((vy - LEG_VIEW.y) / LEG_VIEW.height) * SIZE.height,
    SIZE,
  );
}

describe('hit testing', () => {
  const cases: readonly { zone: LegZone; x: number; y: number; where: string }[] = [
    { zone: 'heel', x: 250, y: 1530, where: 'the heel' },
    { zone: 'arch', x: 430, y: 1555, where: 'the arch' },
    { zone: 'achilles', x: 272, y: 1240, where: 'the achilles' },
    { zone: 'toes', x: 770, y: 1570, where: 'the toes' },
    { zone: 'ball', x: 600, y: 1580, where: 'the ball of the foot' },
    { zone: 'calf', x: 200, y: 450, where: 'the calf' },
    { zone: 'soleus', x: 255, y: 850, where: 'the soleus' },
  ];

  for (const { zone, x, y, where } of cases) {
    test(`a tap on ${where} picks ${zone}`, () => {
      expect(tapAt(x, y)).toBe(zone);
    });
  }

  test('the heel and the arch do not bleed into each other', () => {
    // Adjacent centres, and the two most likely to be confused: both are the
    // underside of the foot and they sit a hand's width apart.
    expect(tapAt(290, 1520)).toBe('heel');
    expect(tapAt(400, 1550)).toBe('arch');
  });

  test('a tap well off the leg selects nothing', () => {
    // The empty margin in front of the shin. Selecting "whatever is least far
    // away" there would mark a zone the user never touched.
    expect(tapAt(850, 300)).toBeNull();
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
      for (let x = LEG_VIEW.x; x <= LEG_VIEW.x + LEG_VIEW.width; x += 10) {
        for (let y = LEG_VIEW.y; y <= LEG_VIEW.y + LEG_VIEW.height; y += 10) {
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
