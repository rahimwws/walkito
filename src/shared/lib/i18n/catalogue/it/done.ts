/** The session-complete moment: "nice work", the streak pill and the tiles. Filled per domain; see
 * `../en/core.ts` for the rules. */

export const DONE_IT = {
  'sessionDone.tileSession': 'Sessione',
  'sessionDone.tileMoves': 'Esercizi',
  'sessionDone.tileShowedUp': 'Giorni di cura',
  'sessionDone.minutes': '{count} min',

  'sessionDone.tileSessionA11y': { one: 'Sessione, {count} minuto', other: 'Sessione, {count} minuti' },
  'sessionDone.tileMovesA11y': { one: '{count} esercizio fatto', other: '{count} esercizi fatti' },
  'sessionDone.tileShowedUpA11y': { one: '{count} giorno di cura', other: '{count} giorni di cura' },

  // ── Redesign v1.1: the Done screen ──
  'sessionDone.dayDone': 'Giorno {day} fatto',
  'sessionDone.title': 'Fatto',
  'sessionDone.tileMinutes': 'Minuti',
  'sessionDone.tileWeek': 'Giorni questa settimana',
  'sessionDone.tileWeekA11y': { one: '{count} giorno questa settimana', other: '{count} giorni questa settimana' },
  'sessionDone.feel.question': 'Com’è andata?',
  'sessionDone.feel.easy': 'Facile',
  'sessionDone.feel.right': 'Giusto',
  'sessionDone.feel.hard': 'Difficile',
  'sessionDone.feel.hurt': 'Ha fatto male',
  'sessionDone.easier': 'Rendi domani più leggero',
  'sessionDone.easierDone': 'Domani si riparte un passo più leggero.',
  'sessionDone.tomorrowAt': 'Domani alle {time}',
  'sessionDone.nextOn': 'Prossima sessione: {day}',
  'sessionDone.complete': 'Sessione completata',
  'sessionDone.tileSets': 'Serie',
  'sessionDone.tileSetsA11y': { one: '{count} serie fatta', other: '{count} serie fatte' },
  'sessionDone.path.day': 'Giorno {day}',
  'sessionDone.path.completed': 'Completato',
  'sessionDone.month.title': 'Giorni fatti questo mese',
  'sessionDone.month.unit': { one: 'giorno', other: 'giorni' },
  'sessionDone.month.a11y': { one: '{count} giorno fatto questo mese', other: '{count} giorni fatti questo mese' },
  'sessionDone.nextLabel': 'Dopo',
};
