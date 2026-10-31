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

  'streakSheet.allCount': 'Dias difíceis e dias de 2 minutos contam todos.',

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
  'streakSheet.levelsTitle': 'Duas formas de um dia contar',
  'streakSheet.levelFull': 'Uma sessão ou uma rotina da biblioteca acende o tênis.',
  'streakSheet.levelCheckin': 'Só o check-in acende a chama. Sua sequência continua do mesmo jeito.',
  'streakSheet.dayCheckin': '{day}: check-in feito',
  'streakSheet.dayTodayCheckin': 'Hoje, {day}: check-in feito',

  'streakSheet.freezes': { one: '{count} proteção guardada', other: '{count} proteções guardadas' },
  'streakSheet.freezesRule': 'Você ganha uma por semana, no máximo duas. Um dia sem nada usa uma, e sua sequência continua.',
  'streakSheet.freezeSpent': 'Nesta semana uma proteção cobriu um dia tranquilo, e sua sequência continuou.',

  'weekGoal.progress': { one: '{done} de {count} sessão nesta semana', other: '{done} de {count} sessões nesta semana' },
  'weekGoal.inARow': { one: '{count} semana seguida', other: '{count} semanas seguidas' },

  'accessory.shoe': 'A partir de hoje, o Walkito usa um distintivo de tênis.',
  'accessory.medal': 'A partir de hoje, o Walkito usa uma medalha.',
  'accessory.trophy': 'A partir de hoje, o Walkito tem um troféu ao lado dele.',
  'accessory.crown': 'A partir de hoje, o Walkito usa uma coroa.',
};
