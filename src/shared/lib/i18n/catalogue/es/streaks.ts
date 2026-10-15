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

  'streakSheet.allCount': 'Los días malos y los de 2 minutos también cuentan.',

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
  'streakSheet.levelsTitle': 'Dos formas de que un día cuente',
  'streakSheet.levelFull': 'Una sesión o una rutina de la biblioteca enciende la zapatilla.',
  'streakSheet.levelCheckin': 'Registrar solo tu dolor enciende la llama. Tu racha sigue igual.',
  'streakSheet.dayCheckin': '{day}: dolor registrado',
  'streakSheet.dayTodayCheckin': 'Hoy, {day}: dolor registrado',

  'streakSheet.freezes': { one: '{count} protector de racha guardado', other: '{count} protectores de racha guardados' },
  'streakSheet.freezesRule': 'Ganas uno cada semana, dos como máximo. Un día sin nada usa uno, y tu racha se mantiene.',
  'streakSheet.freezeSpent': 'Esta semana un protector cubrió un día tranquilo, así que tu racha siguió.',

  'weekGoal.progress': { one: '{done} de {count} sesión esta semana', other: '{done} de {count} sesiones esta semana' },
  'weekGoal.inARow': { one: '{count} semana seguida', other: '{count} semanas seguidas' },

  'accessory.shoe': 'Desde hoy, Walkito lleva una insignia de zapatilla.',
  'accessory.medal': 'Desde hoy, Walkito lleva una medalla.',
  'accessory.trophy': 'Desde hoy, Walkito tiene un trofeo a su lado.',
  'accessory.crown': 'Desde hoy, Walkito lleva una corona.',
};
