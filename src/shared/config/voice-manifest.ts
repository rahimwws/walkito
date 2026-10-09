/**
 * Every spoken exercise instruction, by language and catalogue id.
 *
 * Not bundled: about 4.6 MB of voice across the languages, so they live in the
 * same public bucket as the clips (under `voice/`) and are fetched once into
 * the app's documents, ahead of any session. New recordings ship over the air:
 * upload with `scripts/upload-voice.mjs`, update this table, publish.
 *
 * `bytes` lets the cache tell a finished download from a partial one, `hash`
 * names a re-recording, `ms` is how long the instruction speaks — the tempo
 * stays quiet for that long.
 *
 * `toe_spread` and `hip_abduction` are the recordings named `toe_spread_out`
 * and `hip_abduction_side`.
 */
export type VoiceEntry = { file: string; bytes: number; hash: string; ms: number };

export const VOICE: Readonly<Record<string, Readonly<Record<string, VoiceEntry>>>> = {
  en: {
    balance_pillow: { file: 'voice/en-balance_pillow.m4a', bytes: 55947, hash: 'ad63fd052bcb0f51', ms: 9000 },
    band_inversion: { file: 'voice/en-band_inversion.m4a', bytes: 73141, hash: '8d31512962815fb2', ms: 11500 },
    big_toe_lift: { file: 'voice/en-big_toe_lift.m4a', bytes: 68187, hash: 'b4532315fdf698a0', ms: 10600 },
    calf_stretch_bent: { file: 'voice/en-calf_stretch_bent.m4a', bytes: 61745, hash: '374525d00286bdb6', ms: 9800 },
    calf_stretch_straight: { file: 'voice/en-calf_stretch_straight.m4a', bytes: 62330, hash: '44cee40e4e4fc5fe', ms: 9800 },
    eyes_closed_stand: { file: 'voice/en-eyes_closed_stand.m4a', bytes: 75409, hash: '151a6691c14be9ed', ms: 11800 },
    fascia_stretch: { file: 'voice/en-fascia_stretch.m4a', bytes: 72919, hash: 'd2e07762e32fd642', ms: 11400 },
    foot_roll: { file: 'voice/en-foot_roll.m4a', bytes: 56508, hash: '8796a862b212f648', ms: 8800 },
    heel_drop_straight: { file: 'voice/en-heel_drop_straight.m4a', bytes: 85531, hash: 'c3c79f32dfccde93', ms: 13200 },
    heel_raise_bent_knee: { file: 'voice/en-heel_raise_bent_knee.m4a', bytes: 60783, hash: '5af5e59f5e3ef385', ms: 9800 },
    heel_raise_double: { file: 'voice/en-heel_raise_double.m4a', bytes: 56211, hash: '4df795d67c4b0c05', ms: 8800 },
    heel_raise_hold: { file: 'voice/en-heel_raise_hold.m4a', bytes: 48850, hash: 'b5170177e3882d8f', ms: 7800 },
    heel_raise_plain: { file: 'voice/en-heel_raise_plain.m4a', bytes: 59081, hash: '9c10174228c15afd', ms: 9100 },
    heel_raise_seated: { file: 'voice/en-heel_raise_seated.m4a', bytes: 63948, hash: 'd99a22b8b90ff14c', ms: 10200 },
    heel_raise_towel: { file: 'voice/en-heel_raise_towel.m4a', bytes: 87180, hash: '853d18af6837d088', ms: 13700 },
    hip_abduction: { file: 'voice/en-hip_abduction.m4a', bytes: 66213, hash: 'd51489edeed2afdd', ms: 10300 },
    knee_to_wall: { file: 'voice/en-knee_to_wall.m4a', bytes: 62803, hash: '4438acdf688d3e17', ms: 10100 },
    pogo_hops: { file: 'voice/en-pogo_hops.m4a', bytes: 50481, hash: '20ac74b35e6c2a91', ms: 8000 },
    short_foot_double: { file: 'voice/en-short_foot_double.m4a', bytes: 75710, hash: 'ebea7c9ffb742936', ms: 11800 },
    short_foot_seated: { file: 'voice/en-short_foot_seated.m4a', bytes: 70758, hash: 'c7c1b7c36ad913f3', ms: 11200 },
    short_foot_single: { file: 'voice/en-short_foot_single.m4a', bytes: 72123, hash: '0410bcc4a1b9f7a5', ms: 11400 },
    single_leg_hold: { file: 'voice/en-single_leg_hold.m4a', bytes: 52104, hash: 'ae795dc73723c7f6', ms: 8100 },
    sole_massage: { file: 'voice/en-sole_massage.m4a', bytes: 54516, hash: 'd8ec0e8852e75394', ms: 8600 },
    step_down: { file: 'voice/en-step_down.m4a', bytes: 61955, hash: 'd97d146d08662fb3', ms: 9500 },
    tibialis_raise: { file: 'voice/en-tibialis_raise.m4a', bytes: 63322, hash: '0c20e415287eb15c', ms: 10000 },
    toe_spread: { file: 'voice/en-toe_spread.m4a', bytes: 63300, hash: '1d89081483b808cc', ms: 10100 },
  },
  es: {
    balance_pillow: { file: 'voice/es-balance_pillow.m4a', bytes: 67337, hash: 'b096a5b2944094e7', ms: 10700 },
    band_inversion: { file: 'voice/es-band_inversion.m4a', bytes: 86932, hash: '83604d9862eb8e60', ms: 13400 },
    big_toe_lift: { file: 'voice/es-big_toe_lift.m4a', bytes: 76208, hash: '55a8bebabd33d084', ms: 12100 },
    calf_stretch_bent: { file: 'voice/es-calf_stretch_bent.m4a', bytes: 67279, hash: '1f8e23fd42193736', ms: 10700 },
    calf_stretch_straight: { file: 'voice/es-calf_stretch_straight.m4a', bytes: 72289, hash: '329c0505affbb788', ms: 11000 },
    eyes_closed_stand: { file: 'voice/es-eyes_closed_stand.m4a', bytes: 80278, hash: 'ed801f45ba91ba3c', ms: 12500 },
    fascia_stretch: { file: 'voice/es-fascia_stretch.m4a', bytes: 83808, hash: '470d0cba64fc2597', ms: 12900 },
    foot_roll: { file: 'voice/es-foot_roll.m4a', bytes: 65442, hash: '459f0979665497cd', ms: 9800 },
    heel_drop_straight: { file: 'voice/es-heel_drop_straight.m4a', bytes: 96096, hash: '5cc4a495c88d84b3', ms: 14700 },
    heel_raise_bent_knee: { file: 'voice/es-heel_raise_bent_knee.m4a', bytes: 72878, hash: 'e722b80ca86dec11', ms: 11500 },
    heel_raise_double: { file: 'voice/es-heel_raise_double.m4a', bytes: 63434, hash: 'd1de747ee37f5d93', ms: 10100 },
    heel_raise_hold: { file: 'voice/es-heel_raise_hold.m4a', bytes: 58339, hash: '96943ba0ad6c0841', ms: 9000 },
    heel_raise_plain: { file: 'voice/es-heel_raise_plain.m4a', bytes: 73135, hash: '25b3a5e6880fc925', ms: 11400 },
    heel_raise_seated: { file: 'voice/es-heel_raise_seated.m4a', bytes: 77322, hash: '529bb5b50d13523c', ms: 12000 },
    heel_raise_towel: { file: 'voice/es-heel_raise_towel.m4a', bytes: 103792, hash: '6ee25512ee510409', ms: 16200 },
    hip_abduction: { file: 'voice/es-hip_abduction.m4a', bytes: 76098, hash: 'bb34ca8500c4ce70', ms: 11800 },
    knee_to_wall: { file: 'voice/es-knee_to_wall.m4a', bytes: 72618, hash: '21322bd21a743d7c', ms: 11500 },
    pogo_hops: { file: 'voice/es-pogo_hops.m4a', bytes: 70598, hash: 'd38bb84fa35348e7', ms: 11200 },
    short_foot_double: { file: 'voice/es-short_foot_double.m4a', bytes: 85870, hash: '7b3cfb2a08bc2485', ms: 13800 },
    short_foot_seated: { file: 'voice/es-short_foot_seated.m4a', bytes: 80143, hash: '00ac4ef0401e7976', ms: 12600 },
    short_foot_single: { file: 'voice/es-short_foot_single.m4a', bytes: 82608, hash: 'e08b4f4fcf74b1c9', ms: 12800 },
    single_leg_hold: { file: 'voice/es-single_leg_hold.m4a', bytes: 61742, hash: 'a239a695fa624c35', ms: 9700 },
    sole_massage: { file: 'voice/es-sole_massage.m4a', bytes: 60545, hash: '36adc858f843da2a', ms: 9400 },
    step_down: { file: 'voice/es-step_down.m4a', bytes: 61916, hash: 'c1612f23ad672eeb', ms: 9800 },
    tibialis_raise: { file: 'voice/es-tibialis_raise.m4a', bytes: 72510, hash: '82fb2053ab41a25d', ms: 11300 },
    toe_spread: { file: 'voice/es-toe_spread.m4a', bytes: 67013, hash: 'b6599fd5bf29d0a9', ms: 10700 },
  },
  de: {
    calf_stretch_bent: { file: 'voice/de-calf_stretch_bent.m4a', bytes: 76309, hash: 'b0610c242d50486c', ms: 11400 },
    calf_stretch_straight: { file: 'voice/de-calf_stretch_straight.m4a', bytes: 77087, hash: '03e4753afe63b72f', ms: 11700 },
    eyes_closed_stand: { file: 'voice/de-eyes_closed_stand.m4a', bytes: 91440, hash: '7d340edfd823e504', ms: 14300 },
    fascia_stretch: { file: 'voice/de-fascia_stretch.m4a', bytes: 83582, hash: 'a94949237e505e6f', ms: 13000 },
    foot_roll: { file: 'voice/de-foot_roll.m4a', bytes: 69351, hash: '1ed8de4173daba3b', ms: 10900 },
    heel_raise_towel: { file: 'voice/de-heel_raise_towel.m4a', bytes: 103050, hash: '28bda30c22d7fb39', ms: 15900 },
    short_foot_double: { file: 'voice/de-short_foot_double.m4a', bytes: 87545, hash: '303d229d8d31ea41', ms: 13500 },
    short_foot_seated: { file: 'voice/de-short_foot_seated.m4a', bytes: 91841, hash: '62711134efd317dd', ms: 14200 },
    short_foot_single: { file: 'voice/de-short_foot_single.m4a', bytes: 75697, hash: '779e30258249d3c3', ms: 11800 },
    single_leg_hold: { file: 'voice/de-single_leg_hold.m4a', bytes: 64283, hash: 'bf496d76df1e7b5e', ms: 9900 },
    toe_spread: { file: 'voice/de-toe_spread.m4a', bytes: 80903, hash: '2e2c7e423540a05f', ms: 12400 },
  },
};

export const VOICE_TOTAL_BYTES = 4518373;

/** `language` is an app language code (`en`, `es`, …). */
export function voiceEntry(language: string, exerciseId: string): VoiceEntry | null {
  return VOICE[language]?.[exerciseId] ?? null;
}
