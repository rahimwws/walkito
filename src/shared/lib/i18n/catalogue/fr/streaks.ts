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

  'streakSheet.allCount': 'Les jours de repos, les jours difficiles et les jours à 2 minutes comptent tous.',

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
};
