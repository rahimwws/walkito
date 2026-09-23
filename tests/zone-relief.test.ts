import { describe, expect, test } from 'bun:test';

import { EXERCISES_BY_ID } from '../src/entities/program/model/exercises';
import { PAIN_ZONES, type LegZone } from '../src/entities/leg-zone/model/leg-zones';
import { CLIPS } from '../src/widgets/session-player/config/clip-manifest';
import {
  RELIEF_DEFAULT,
  RELIEF_LIMIT,
  reliefIdsFor,
} from '../src/pages/home/model/zone-relief';

/**
 * What a user is shown after pointing at the place that hurts.
 *
 * The pairings themselves are a judgement call and a test cannot check them.
 * What it can check is that every one of them resolves to something real: an id
 * that is not in the catalogue, or is in the catalogue but has no footage,
 * produces a relief session that is blank or missing an exercise — offered to
 * somebody who has just reported pain, which is the worst moment for it.
 */

describe('the pairings are real', () => {
  const everyId = [...PAIN_ZONES, 'ankle' as LegZone].flatMap((zone) => reliefIdsFor([zone]));

  test('every suggested exercise exists in the catalogue', () => {
    const unknown = everyId.filter((id) => EXERCISES_BY_ID[id] == null);
    expect([...new Set(unknown)]).toEqual([]);
  });

  test('every suggested exercise has a clip', () => {
    // The whole request was "show the video that suits". An exercise with no
    // footage answers it with a paragraph.
    const silent = everyId.filter((id) => CLIPS[id] == null);
    expect([...new Set(silent)]).toEqual([]);
  });

  test('every tappable zone leads somewhere', () => {
    for (const zone of PAIN_ZONES) {
      expect(reliefIdsFor([zone]).length).toBeGreaterThan(0);
    }
  });
});

describe('choosing what to show', () => {
  test('the heel leads with the plantar stretch', () => {
    expect(reliefIdsFor(['heel'])[0]).toBe('fascia_stretch');
  });

  test('the calf leads with the calf stretch, not a foot exercise', () => {
    expect(reliefIdsFor(['calf'])[0]).toBe('calf_stretch_straight');
  });

  test('the achilles gets the bent-knee stretch first', () => {
    // Knee bent is the soleus and the tendon; knee straight is gastrocnemius.
    // Leading with the wrong one is a real mistake, not a preference.
    expect(reliefIdsFor(['achilles'])[0]).toBe('calf_stretch_bent');
  });

  test('nothing marked falls back to the general case', () => {
    expect(reliefIdsFor([])).toEqual(RELIEF_DEFAULT);
  });
});

describe('several zones at once', () => {
  test('each zone gets its best match before any gets its second', () => {
    // The failure this guards: concatenating would spend the whole budget on
    // the first zone, so somebody who marked both would be shown three heel
    // exercises and nothing for the calf.
    const ids = reliefIdsFor(['heel', 'calf']);
    expect(ids[0]).toBe('fascia_stretch');
    expect(ids[1]).toBe('calf_stretch_straight');
  });

  test('an exercise that suits two zones is not shown twice', () => {
    // Both lists contain `ankle_rocks`.
    const ids = reliefIdsFor(['tibia', 'tib_ant']);
    expect(ids.length).toBe(new Set(ids).size);
  });

  test('the session stays short however many zones are marked', () => {
    const ids = reliefIdsFor([...PAIN_ZONES]);
    expect(ids.length).toBeLessThanOrEqual(RELIEF_LIMIT);
  });
});
