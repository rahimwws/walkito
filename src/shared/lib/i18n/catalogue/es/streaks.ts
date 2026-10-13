/** The streak sheet: the big number, the week, the tiles and the milestone ladder. Filled per domain; see
 * `../en/core.ts` for the rules. */

export const STREAKS_ES = {
  'streakSheet.inARow': { one: '{count} día seguido', other: '{count} días seguidos' },

  'streakSheet.current': 'Racha actual',
  'streakSheet.showedUp': 'Días en total',
  // "Mejor", not "más larga": the tile clips to one line.
  'streakSheet.longest': 'Mejor racha',
  'streakSheet.currentA11y': { one: 'Racha actual: {count} día', other: 'Racha actual: {count} días' },
  'streakSheet.showedUpA11y': { one: '{count} día en total', other: '{count} días en total' },
  'streakSheet.longestA11y': { one: 'Mejor racha: {count} día', other: 'Mejor racha: {count} días' },

  'streakSheet.allCount': 'Los días de descanso, los días malos y los de 2 minutos también cuentan.',

  'streakSheet.dayDone': '{day}: día contado',
  'streakSheet.dayRest': '{day}: descanso',
  'streakSheet.dayToday': 'Hoy, {day}',
  'streakSheet.dayTodayDone': 'Hoy, {day}: día contado',
  'streakSheet.dayAhead': '{day}: todavía por llegar',

  'streakSheet.milestoneReached': {
    one: '{count} día seguido: logrado',
    other: '{count} días seguidos: logrado',
  },
  'streakSheet.milestoneAhead': {
    one: '{count} día seguido: por delante',
    other: '{count} días seguidos: por delante',
  },
};
