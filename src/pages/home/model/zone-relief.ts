import type { LegZone } from './leg-zones';

/**
 * What to show someone who has just pointed at the place that hurts.
 *
 * The check-in asks two things — how much, and where. The first already changes
 * the day. The second did nothing with the answer, which makes the map a survey
 * rather than a question: you tell the app your heel hurts and it shows you the
 * same recovery session it would have shown anybody.
 *
 * So the relief session is composed from the zones. Every id below is one the
 * catalogue already prescribes and one the bucket already has footage for —
 * this adds no exercises and records no new video, it only picks from what is
 * there on the strength of an answer the user has already given.
 *
 * Ordered by how directly each targets the zone, because the list is truncated
 * and the first entry is the one most people will actually do.
 */

/**
 * Zone to exercises, most specific first.
 *
 * The pairings are the conventional ones for plantar heel pain and the tissues
 * around it: the calf and soleus stretch what pulls on the heel, the short-foot
 * work loads the arch, the band inversion is the tibialis posterior, and the
 * roll and the plantar stretch are what the fascia itself responds to. Nothing
 * here is a diagnosis — it is the same catalogue, sorted by where it was said
 * to hurt.
 */
const BY_ZONE: Readonly<Record<LegZone, readonly string[]>> = {
  calf: ['calf_stretch_straight', 'calf_stretch_bent', 'foot_roll'],
  soleus: ['calf_stretch_bent', 'calf_stretch_straight'],
  // The shin, front and back. Neither is a fascia problem, and the honest
  // answer is ankle mobility rather than anything that loads the heel.
  tibia: ['ankle_rocks', 'foot_roll'],
  tib_ant: ['ankle_rocks', 'foot_roll'],
  achilles: ['calf_stretch_bent', 'calf_stretch_straight', 'heel_raise_towel'],
  // `ankle` is drawn but never selectable — a tap on the ankle mass resolves to
  // `inner_ankle`, whose centre sits on top of it. Present so the map stays
  // exhaustive: a zone added to the drawing later must not silently fall
  // through to the default.
  ankle: ['ankle_rocks', 'band_inversion'],
  inner_ankle: ['band_inversion', 'ankle_rocks'],
  heel: ['fascia_stretch', 'foot_roll', 'short_foot_seated'],
  dorsum: ['ankle_rocks', 'toe_spread'],
  arch: ['short_foot_seated', 'fascia_stretch', 'foot_roll'],
  ball: ['toe_spread', 'fascia_stretch'],
  toes: ['toe_spread', 'short_foot_seated'],
};

/**
 * How many exercises a relief session runs to.
 *
 * Four, because this is offered to somebody who has just said their foot hurts
 * — a session long enough to feel like the programme is not what that person
 * needs at that moment, and the whole reason the sore-day session is shorter in
 * the first place.
 */
export const RELIEF_LIMIT = 4;

/** What the session falls back to when nobody pointed at anything. The general
 * case for this condition, in the order the programme itself uses. */
export const RELIEF_DEFAULT: readonly string[] = [
  'fascia_stretch',
  'calf_stretch_straight',
  'foot_roll',
];

/**
 * The exercise ids for a set of painful zones.
 *
 * Interleaved rather than concatenated: taking the first zone's whole list
 * before touching the second would mean somebody who marked both the heel and
 * the calf got three heel exercises and nothing for the calf. Round-robin gives
 * every zone its best match before any zone gets its second.
 *
 * Every id in the table has footage, and there is no runtime check that it
 * does. Checking here would mean importing the clip manifest, the manifest sits
 * behind a widget's public API, and that barrel pulls in react-native — which
 * would make this module unloadable under `bun test` and cost the coverage that
 * is the better guard anyway. `zone-relief.test.ts` asserts it instead, so a
 * pairing added without a clip fails in CI rather than showing somebody in pain
 * a title with no video.
 */
export function reliefIdsFor(zones: readonly LegZone[]): readonly string[] {
  if (zones.length === 0) return RELIEF_DEFAULT;

  const lists = zones.map((zone) => BY_ZONE[zone] ?? []);
  const picked: string[] = [];
  const seen = new Set<string>();

  const deepest = Math.max(0, ...lists.map((list) => list.length));
  for (let rank = 0; rank < deepest && picked.length < RELIEF_LIMIT; rank += 1) {
    for (const list of lists) {
      if (picked.length >= RELIEF_LIMIT) break;
      const id = list[rank];
      if (id == null || seen.has(id)) continue;
      seen.add(id);
      picked.push(id);
    }
  }

  // A zone with an empty list would otherwise hand back nothing, and a relief
  // session with no exercises in it is a blank screen offered to somebody who
  // has just reported pain.
  return picked.length > 0 ? picked : RELIEF_DEFAULT;
}
