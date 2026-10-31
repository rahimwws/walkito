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

  'streakSheet.allCount': 'I giorni difficili e quelli da 2 minuti contano tutti.',

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
  'streakSheet.levelsTitle': 'Due modi in cui un giorno conta',
  'streakSheet.levelFull': 'Una sessione o una routine della libreria accende la scarpa.',
  'streakSheet.levelCheckin': 'Il solo check-in accende la fiamma. La tua serie continua allo stesso modo.',
  'streakSheet.dayCheckin': '{day}: check-in fatto',
  'streakSheet.dayTodayCheckin': 'Oggi, {day}: check-in fatto',

  'streakSheet.freezes': { one: '{count} protezione da parte', other: '{count} protezioni da parte' },
  'streakSheet.freezesRule': 'Ne guadagni una a settimana, al massimo due. Un giorno senza niente ne usa una, e la tua serie regge.',
  'streakSheet.freezeSpent': 'Questa settimana una protezione ha coperto un giorno tranquillo, e la tua serie è andata avanti.',

  'weekGoal.progress': { one: '{done} di {count} sessione questa settimana', other: '{done} di {count} sessioni questa settimana' },
  'weekGoal.inARow': { one: '{count} settimana di fila', other: '{count} settimane di fila' },

  'accessory.shoe': 'Da oggi Walkito porta un distintivo con la scarpa.',
  'accessory.medal': 'Da oggi Walkito porta una medaglia.',
  'accessory.trophy': 'Da oggi Walkito ha un trofeo accanto a sé.',
  'accessory.crown': 'Da oggi Walkito porta una corona.',
};
