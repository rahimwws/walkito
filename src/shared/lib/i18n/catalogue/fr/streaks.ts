/** The streak sheet: the big number, the week, the tiles and the milestone ladder. Filled per domain; see
 * `../en/core.ts` for the rules.
 *
 * Commas rather than colons in the spoken labels, so no line needs French's
 * space before a colon. */

export const STREAKS_FR = {
  'streakSheet.inARow': { one: '{count} jour d’affilée', other: '{count} jours d’affilée' },

  'streakSheet.current': 'Série actuelle',
  'streakSheet.showedUp': 'Jours au total',
  'streakSheet.longest': 'Meilleure série',
  'streakSheet.currentA11y': { one: 'Série actuelle, {count} jour', other: 'Série actuelle, {count} jours' },
  'streakSheet.showedUpA11y': { one: '{count} jour au total', other: '{count} jours au total' },
  'streakSheet.longestA11y': { one: 'Meilleure série, {count} jour', other: 'Meilleure série, {count} jours' },

  'streakSheet.allCount': 'Les jours difficiles et les jours à 2 minutes comptent tous.',

  'streakSheet.dayDone': '{day}, jour compté',
  'streakSheet.dayRest': '{day}, jour de repos',
  'streakSheet.dayToday': 'Aujourd’hui, {day}',
  'streakSheet.dayTodayDone': 'Aujourd’hui, {day}, jour compté',
  'streakSheet.dayAhead': '{day}, à venir',

  'streakSheet.milestoneReached': {
    one: '{count} jour d’affilée, atteint',
    other: '{count} jours d’affilée, atteint',
  },
  'streakSheet.milestoneAhead': {
    one: '{count} jour d’affilée, encore à venir',
    other: '{count} jours d’affilée, encore à venir',
  },
  'streakSheet.levelsTitle': 'Deux façons de compter un jour',
  'streakSheet.levelFull': 'Une séance ou une routine de la bibliothèque allume la chaussure.',
  'streakSheet.levelCheckin': 'Ton bilan seul allume la flamme. Ta série continue tout pareil.',
  'streakSheet.dayCheckin': '{day}, bilan fait',
  'streakSheet.dayTodayCheckin': 'Aujourd’hui, {day}, bilan fait',

  // French `one` covers 0 and 1: "0 protection en réserve".
  'streakSheet.freezes': { one: '{count} protection en réserve', other: '{count} protections en réserve' },
  'streakSheet.freezesRule': 'Tu en gagnes une par semaine, deux au maximum. Un jour sans rien en utilise une, et ta série tient.',
  'streakSheet.freezeSpent': 'Cette semaine, une protection a couvert un jour calme, et ta série a continué.',

  // The noun follows the planned count: "2 séances sur 3", "1 séance sur 1".
  'weekGoal.progress': { one: '{done} sur {count} séance cette semaine', other: '{done} sur {count} séances cette semaine' },
  'weekGoal.inARow': { one: '{count} semaine d’affilée', other: '{count} semaines d’affilée' },

  'accessory.shoe': 'À partir d’aujourd’hui, Walkito porte un badge chaussure.',
  'accessory.medal': 'À partir d’aujourd’hui, Walkito porte une médaille.',
  'accessory.trophy': 'À partir d’aujourd’hui, Walkito a un trophée à côté de lui.',
  'accessory.crown': 'À partir d’aujourd’hui, Walkito porte une couronne.',
};
