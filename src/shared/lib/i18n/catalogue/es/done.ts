/** The session-complete moment: "nice work", the streak pill and the tiles. Filled per domain; see
 * `../en/core.ts` for the rules. */

export const DONE_ES = {
  'sessionDone.tileMoves': 'Ejercicios',
  'sessionDone.tileShowedUp': 'Días de cuidado',
  'sessionDone.minutes': '{count} min',

  'sessionDone.tileSessionA11y': { one: 'Sesión, {count} minuto', other: 'Sesión, {count} minutos' },
  'sessionDone.tileMovesA11y': { one: '{count} ejercicio hecho', other: '{count} ejercicios hechos' },
  'sessionDone.tileShowedUpA11y': { one: '{count} día de cuidado', other: '{count} días de cuidado' },

  // ── Redesign v1.1: the Done screen ──
  'sessionDone.dayDone': 'Día {day} hecho',
  'sessionDone.title': 'Hecho',
  'sessionDone.tileMinutes': 'Minutos',
  'sessionDone.tileWeek': 'Días esta semana',
  'sessionDone.tileWeekA11y': { one: '{count} día esta semana', other: '{count} días esta semana' },
  'sessionDone.feel.question': '¿Qué tal te ha ido?',
  'sessionDone.feel.easy': 'Fácil',
  'sessionDone.feel.right': 'Justo bien',
  'sessionDone.feel.hard': 'Difícil',
  'sessionDone.feel.hurt': 'Me dolió',
  'sessionDone.easier': 'Hacer mañana más suave',
  'sessionDone.easierDone': 'Mañana empieza un paso más suave.',
  'sessionDone.tomorrowAt': 'Mañana a las {time}',
  'sessionDone.nextOn': 'Próxima sesión: {day}',
  'sessionDone.complete': 'Sesión completada',
  'sessionDone.tileSets': 'Series',
  'sessionDone.tileSetsA11y': { one: '{count} serie hecha', other: '{count} series hechas' },
  'sessionDone.path.day': 'Día {day}',
  'sessionDone.path.completed': 'Completado',
  'sessionDone.month.title': 'Días hechos este mes',
  'sessionDone.month.unit': { one: 'día', other: 'días' },
  'sessionDone.month.a11y': { one: '{count} día hecho este mes', other: '{count} días hechos este mes' },
  'sessionDone.nextLabel': 'A continuación',
};
