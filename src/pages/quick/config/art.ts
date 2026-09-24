import type { ImageSourcePropType } from 'react-native';

import type { ProtocolId } from '@/entities/protocols';

/**
 * One photograph per protocol, behind its card.
 *
 * The cards were tinted washes, which told the protocols apart by colour alone
 * and gave none of them a moment you could picture. Each photo is the moment
 * the protocol is for — sat down with it hurting, lacing up on a dark road,
 * bent double after the run, at the desk, the first light on the floor — in
 * one low-light, cinematic register so the five read as a set.
 *
 * All from Unsplash under the Unsplash License: free for commercial use, no
 * attribution required. Credited here anyway, and so the source of each file
 * can be found again:
 *
 * - flare     — Eser GOAT (@goatboxing),         unsplash.com/photos/Js4EY3OS3hc
 * - pre_run   — Ulf Meyer (@travelling_mo),      unsplash.com/photos/cS0W4GvUUDM
 * - post_run  — Falaq Lazuardi (@falaqkun),      unsplash.com/photos/RtUK6jT5y_A
 * - at_work   — Ataberk Güler (@ataberkguler),   unsplash.com/photos/S4ivgQRxaPo
 * - morning   — Duncan Kidd (@we_the_royal),     unsplash.com/photos/LM43DWuTCP0
 *
 * Cropped to 4:3 at 1600×1200 with the subject centred, because the card
 * crops from the centre in both of its shapes — the near-square tile and the
 * wide banner — and a subject off to one side is cut out of one of them. A
 * light vignette and, on the foggy field, a slight darkening keep the set in
 * one key.
 */
export const PROTOCOL_ART: Readonly<Record<ProtocolId, ImageSourcePropType>> = {
  flare: require('@assets/quick/flare.jpg'),
  pre_run: require('@assets/quick/pre-run.jpg'),
  post_run: require('@assets/quick/post-run.jpg'),
  at_work: require('@assets/quick/at-work.jpg'),
  morning: require('@assets/quick/morning.jpg'),
};
