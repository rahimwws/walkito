/** player strings (count-in, post-session feedback). Filled per domain; see `../en/core.ts` for the rules. */

export const PLAYER_ES = {
  // ── The count-in ──────────────────────────────────────────────────────────
  'player.countIn.getReady': 'Prepárate',
  'player.countIn.nextUp': 'A continuación',
  'player.countIn.go': '¡Ya!',
  'player.countIn.tapToStart': 'Toca para empezar ya',

  // ── How hard was that ─────────────────────────────────────────────────────
  'player.feedback.question': '¿Cómo de duro ha sido?',
  'player.feedback.purpose': 'Tu respuesta ajusta las próximas sesiones.',
  'player.feedback.easy': 'Demasiado fácil',
  'player.feedback.right': 'En su punto',
  'player.feedback.hard': 'Demasiado duro',
  'player.feedback.hurt': 'Me ha dolido',
  'player.feedback.adjusts': 'Entendido. El plan se ajusta.',
  'player.feedback.keeps': 'Entendido. El plan mantiene este ritmo.',

  // ── "It hurt", after the session ──────────────────────────────────────────
  'player.afterPain.lowHint':
    'Anotado. Algo de molestia tras este trabajo es normal. Si sigue ahí al despertar, tu registro de mañana suaviza el plan.',
  'player.afterPain.highHint':
    'Es más de lo que este trabajo debería causar. Tu próxima sesión empieza un paso más suave.',
  'player.afterPain.save': 'Guardar',
};
