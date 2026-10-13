// Phosphor v3 exports every glyph with an `Icon` suffix (`Path` would
// otherwise collide with react-native-svg's `Path`), so each one is
// aliased back to its plain name here rather than at every use site.
import type { Icon, IconWeight } from 'phosphor-react-native';
import { BarbellIcon as Barbell } from 'phosphor-react-native/src/icons/Barbell';
import { BasketballIcon as Basketball } from 'phosphor-react-native/src/icons/Basketball';
import { CircleIcon as Circle } from 'phosphor-react-native/src/icons/Circle';
import { CircleHalfIcon as CircleHalf } from 'phosphor-react-native/src/icons/CircleHalf';
import { MountainsIcon as Mountains } from 'phosphor-react-native/src/icons/Mountains';
import { PersonSimpleBikeIcon as PersonSimpleBike } from 'phosphor-react-native/src/icons/PersonSimpleBike';
import { PersonSimpleRunIcon as PersonSimpleRun } from 'phosphor-react-native/src/icons/PersonSimpleRun';
import { QuestionIcon as Question } from 'phosphor-react-native/src/icons/Question';
import { SoccerBallIcon as SoccerBall } from 'phosphor-react-native/src/icons/SoccerBall';
import { TennisBallIcon as TennisBall } from 'phosphor-react-native/src/icons/TennisBall';

/**
 * The glyphs that still lead a few answers, where the drawing itself is the
 * answer: the sport rail and the foot checks' verdict circles. Every other
 * answer card leads with a Fluent emoji (`@/shared/ui/fluent-icon`), or with Walkito.
 *
 * The colour is decoration with a job: it tells the rows apart at a glance. It
 * never encodes good or bad.
 */
export type OptionArt = { icon: Icon; color: string; /** `fill` unless set. */ weight?: IconWeight };

/** A small, fixed spread. More hues than this and the list stops reading as
 * one set; fewer and the rows stop being distinguishable. */
const HUE = {
  violet: '#A78BFA',
  pink: '#F472B6',
  amber: '#FBBF24',
  sky: '#38BDF8',
  green: '#4ADE80',
  rose: '#FB7185',
  teal: '#2DD4BF',
} as const;

/**
 * The sport rail's artwork.
 *
 * The sport is the one answer that reappears later: the same glyph and hue
 * follow it into the questions it rewrites, so the flow visibly remembers what
 * you picked.
 */
export const SPORT_ICONS: Record<string, OptionArt> = {
  default: { icon: PersonSimpleRun, color: HUE.sky },
  running: { icon: PersonSimpleRun, color: HUE.sky },
  tennis: { icon: TennisBall, color: HUE.green },
  gym: { icon: Barbell, color: HUE.violet },
  football: { icon: SoccerBall, color: HUE.amber },
  basketball: { icon: Basketball, color: HUE.rose },
  cycling: { icon: PersonSimpleBike, color: HUE.teal },
  hiking: { icon: Mountains, color: HUE.pink },
};

/**
 * Yes, a little, no, not sure: the foot checks with a photograph. How much,
 * drawn as how full a circle is (whole, half, an empty ring), in the brand's
 * one hue: the answer is an observation about a foot, and a tick or a cross
 * would read as right and wrong, the more so beside the row's own check.
 */
export const VERDICT_ICONS: Record<string, OptionArt> = {
  default: { icon: Question, color: HUE.violet, weight: 'bold' },
  yes: { icon: Circle, color: HUE.violet },
  little: { icon: CircleHalf, color: HUE.violet },
  no: { icon: Circle, color: HUE.violet, weight: 'bold' },
  unsure: { icon: Question, color: HUE.violet, weight: 'bold' },
};
