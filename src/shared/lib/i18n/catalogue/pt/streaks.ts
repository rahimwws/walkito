/** The streak sheet: the big number, the week, the tiles and the milestone ladder. Filled per domain; see
 * `../en/core.ts` for the rules. */

export const STREAKS_PT = {
  'streakSheet.inARow': { one: '{count} dia seguido', other: '{count} dias seguidos' },

  'streakSheet.current': 'Sequência atual',
  'streakSheet.showedUp': 'Dias no total',
  // «Melhor», not «mais longa»: the tile clips to one line.
  'streakSheet.longest': 'Melhor sequência',
  'streakSheet.currentA11y': { one: 'Sequência atual: {count} dia', other: 'Sequência atual: {count} dias' },
  'streakSheet.showedUpA11y': { one: '{count} dia no total', other: '{count} dias no total' },
  'streakSheet.longestA11y': { one: 'Melhor sequência: {count} dia', other: 'Melhor sequência: {count} dias' },

  'streakSheet.allCount': 'Dias de descanso, dias difíceis e dias de 2 minutos contam todos.',

  'streakSheet.dayDone': '{day}: dia contado',
  'streakSheet.dayRest': '{day}: descanso',
  'streakSheet.dayToday': 'Hoje, {day}',
  'streakSheet.dayTodayDone': 'Hoje, {day}: dia contado',
  'streakSheet.dayAhead': '{day}: ainda está por vir',

  'streakSheet.milestoneReached': {
    one: '{count} dia seguido: conquistado',
    other: '{count} dias seguidos: conquistado',
  },
  'streakSheet.milestoneAhead': {
    one: '{count} dia seguido: pela frente',
    other: '{count} dias seguidos: pela frente',
  },
};
