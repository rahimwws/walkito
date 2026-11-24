/** The session-complete moment: "nice work", the streak pill and the tiles. Filled per domain; see
 * `../en/core.ts` for the rules. */

export const DONE_FR = {
  'sessionDone.tileMoves': 'Exercices',
  'sessionDone.tileShowedUp': 'Jours de soin',
  'sessionDone.minutes': '{count} min',
  'sessionDone.unitMinutes': 'min',
  'sessionDone.unitMoves': { one: 'exercice', other: 'exercices' },
  'sessionDone.unitSets': { one: 'série', other: 'séries' },

  'sessionDone.tileSessionA11y': { one: 'Séance, {count} minute', other: 'Séance, {count} minutes' },
  'sessionDone.tileMovesA11y': { one: '{count} exercice fait', other: '{count} exercices faits' },
  'sessionDone.tileShowedUpA11y': { one: '{count} jour de soin', other: '{count} jours de soin' },

  // ── Redesign v1.1: the Done screen ──
  'sessionDone.dayDone': 'Jour {day} terminé',
  'sessionDone.title': 'Terminé',
  'sessionDone.tileWeek': 'Jours cette semaine',
  'sessionDone.tileWeekA11y': { one: '{count} jour cette semaine', other: '{count} jours cette semaine' },
  'sessionDone.feel.question': 'Comment c’était ?',
  'sessionDone.feel.easy': 'Facile',
  'sessionDone.feel.right': 'Juste bien',
  'sessionDone.feel.hard': 'Difficile',
  'sessionDone.feel.hurt': 'J’ai eu mal',
  'sessionDone.easier': 'Alléger demain',
  'sessionDone.easierDone': 'Demain reprend un cran plus doux.',
  'sessionDone.tomorrowAt': 'Demain à {time}',
  'sessionDone.nextOn': 'Prochaine séance : {day}',
  'sessionDone.complete': 'Séance terminée',
  'sessionDone.tileSetsA11y': { one: '{count} série faite', other: '{count} séries faites' },
  'sessionDone.path.day': 'Jour {day}',
  'sessionDone.path.completed': 'Terminé',
  'sessionDone.month.title': 'Jours faits ce mois-ci',
  'sessionDone.month.unit': { one: 'jour', other: 'jours' },
  'sessionDone.month.a11y': { one: '{count} jour fait ce mois-ci', other: '{count} jours faits ce mois-ci' },
};
