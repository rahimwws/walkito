/** The streak sheet: the big number, the week, the tiles and the milestone ladder. Filled per domain; see
 * `../en/core.ts` for the rules. */

export const STREAKS_IT = {
  'streakSheet.inARow': { one: '{count} giorno di fila', other: '{count} giorni di fila' },

  'streakSheet.current': 'Serie attuale',
  'streakSheet.showedUp': 'Giorni in tutto',
  'streakSheet.longest': 'Serie migliore',
  'streakSheet.currentA11y': { one: 'Serie attuale: {count} giorno', other: 'Serie attuale: {count} giorni' },
  'streakSheet.showedUpA11y': { one: '{count} giorno in tutto', other: '{count} giorni in tutto' },
  'streakSheet.longestA11y': { one: 'Serie migliore: {count} giorno', other: 'Serie migliore: {count} giorni' },

  'streakSheet.allCount': 'I giorni di riposo, quelli difficili e quelli da 2 minuti contano tutti.',

  'streakSheet.dayDone': '{day}: giorno contato',
  'streakSheet.dayRest': '{day}: riposo',
  'streakSheet.dayToday': 'Oggi, {day}',
  'streakSheet.dayTodayDone': 'Oggi, {day}: giorno contato',
  'streakSheet.dayAhead': '{day}: deve ancora arrivare',

  'streakSheet.milestoneReached': {
    one: '{count} giorno di fila: raggiunto',
    other: '{count} giorni di fila: raggiunto',
  },
  'streakSheet.milestoneAhead': {
    one: '{count} giorno di fila: più avanti',
    other: '{count} giorni di fila: più avanti',
  },
};
