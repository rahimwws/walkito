// Phosphor v3 exports every glyph with an `Icon` suffix (`Path` would
// otherwise collide with react-native-svg's `Path`), so each one is
// aliased back to its plain name here rather than at every use site.
import {
  ArrowsClockwiseIcon as ArrowsClockwise,
  BarbellIcon as Barbell,
  BasketballIcon as Basketball,
  BedIcon as Bed,
  CalendarCheckIcon as CalendarCheck,
  ClockIcon as Clock,
  DropIcon as Drop,
  FireIcon as Fire,
  FirstAidIcon as FirstAid,
  FootprintsIcon as Footprints,
  LightningIcon as Lightning,
  MapPinIcon as MapPin,
  MoonIcon as Moon,
  MountainsIcon as Mountains,
  PathIcon as Path,
  PersonSimpleBikeIcon as PersonSimpleBike,
  PersonSimpleRunIcon as PersonSimpleRun,
  RulerIcon as Ruler,
  ShieldCheckIcon as ShieldCheck,
  SneakerIcon as Sneaker,
  SoccerBallIcon as SoccerBall,
  SparkleIcon as Sparkle,
  SunHorizonIcon as SunHorizon,
  TennisBallIcon as TennisBall,
  TimerIcon as Timer,
  TrophyIcon as Trophy,
  type Icon,
} from 'phosphor-react-native';

/**
 * The glyph and hue for each answer.
 *
 * The colour here is decoration with a job: it makes a list of five rows
 * scannable at a glance and gives each answer an identity you recognise when
 * you come back to the screen. It never encodes good/bad — "50+ km" and
 * "0–5 km" are the same green, because one is not a better answer than the
 * other.
 *
 * Deliberately a flat map keyed by option value rather than a field on the
 * step data: the questions are content, this is presentation, and keeping
 * them apart means rewording a question never risks losing its icon.
 */
export type OptionArt = { icon: Icon; color: string };

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

export const OPTION_ICONS: Record<string, OptionArt> = {
  default: { icon: Sparkle, color: HUE.violet },

  // Runner type
  new: { icon: Sparkle, color: HUE.violet },
  casual: { icon: Footprints, color: HUE.teal },
  regular: { icon: PersonSimpleRun, color: HUE.sky },
  racing: { icon: Trophy, color: HUE.amber },
  serious: { icon: Lightning, color: HUE.rose },

  // Experience
  years: { icon: CalendarCheck, color: HUE.sky },

  // Weekly load
  '0-5': { icon: Path, color: HUE.teal },
  '5-15': { icon: Path, color: HUE.sky },
  '15-30': { icon: Path, color: HUE.violet },
  '30-50': { icon: Path, color: HUE.pink },
  '50+': { icon: Mountains, color: HUE.amber },

  // "Nothing" on the watch question.
  none: { icon: ShieldCheck, color: HUE.green },

  // When it hurts
  during: { icon: PersonSimpleRun, color: HUE.rose },
  after: { icon: Timer, color: HUE.amber },
  later: { icon: Clock, color: HUE.violet },

  // When you run
  morning: { icon: SunHorizon, color: HUE.amber },
  rest: { icon: Moon, color: HUE.violet },
  varies: { icon: ArrowsClockwise, color: HUE.sky },

  // Goal
  painfree: { icon: ShieldCheck, color: HUE.green },
  back: { icon: ArrowsClockwise, color: HUE.sky },
  distance: { icon: MapPin, color: HUE.pink },
  recovery: { icon: Bed, color: HUE.violet },
  strength: { icon: Barbell, color: HUE.amber },
  injury: { icon: FirstAid, color: HUE.rose },
  race: { icon: Trophy, color: HUE.amber },
  consistent: { icon: Fire, color: HUE.rose },
  stronger: { icon: Barbell, color: HUE.violet },
  injuryfree: { icon: ShieldCheck, color: HUE.green },

  // Units
  kg: { icon: Ruler, color: HUE.sky },
  lb: { icon: Ruler, color: HUE.sky },
  shoes: { icon: Sneaker, color: HUE.teal },
  hydration: { icon: Drop, color: HUE.sky },
};

/**
 * The sport rail's artwork.
 *
 * Kept separate from `OPTION_ICONS` because these are shown at 34pt on a card
 * rather than 24pt in a row, and because the sport is the one answer that
 * reappears later — the same glyph and hue follow it into the questions it
 * rewrites, so the flow visibly remembers what you picked.
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
