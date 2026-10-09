/** player strings (count-in, post-session feedback). Filled per domain; see `../en/core.ts` for the rules. */

export const PLAYER_ES = {
  // ── The count-in ──────────────────────────────────────────────────────────
  'player.countIn.getReady': 'Prepárate',
  'player.countIn.nextUp': 'A continuación',
  'player.countIn.go': '¡Ya!',
  'player.countIn.tapToStart': 'Toca para empezar ya',

  // ── How hard was that ─────────────────────────────────────────────────────
  'player.feedback.question': '¿Podrías haber hecho 2 repeticiones buenas más?',
  'player.feedback.purpose': 'Tu respuesta ajusta las próximas sesiones.',
  'player.feedback.easy': 'Sí, fácilmente',
  'player.feedback.right': 'Más o menos',
  'player.feedback.hard': 'No',
  'player.feedback.hurt': 'Me ha dolido',
  'player.feedback.adjusts': 'Entendido. El plan se ajusta.',
  'player.feedback.keeps': 'Entendido. El plan mantiene este ritmo.',

  // ── "It hurt", after the session ──────────────────────────────────────────
  'player.afterPain.lowHint':
    'Anotado. Algo de molestia tras este trabajo es normal. Si sigue ahí al despertar, tu registro de mañana suaviza el plan.',
  'player.afterPain.highHint':
    'Es más de lo que este trabajo debería causar. Tu próxima sesión empieza un paso más suave.',
  'player.afterPain.save': 'Guardar',
  'player.cantDo.button': 'No puedo hacerlo',
  'player.cantDo.title': '¿Qué te lo impide?',
  'player.cantDo.blurb': 'Lo cambiamos ahora y lo quitamos de tu plan.',
  'player.cantDo.noStep': 'Sin escalón',
  'player.cantDo.noBand': 'Sin banda',
  'player.cantDo.noTowel': 'Sin toalla',
  'player.cantDo.noPillow': 'Sin almohada',
  'player.cantDo.noBall': 'Sin pelota',
  'player.cantDo.hurts': 'Me duele',
  'player.cantDo.swapped': 'Cambiado por {name}.',
  'player.cantDo.skipped': 'Hoy no hay con qué cambiarlo, así que lo saltamos.',
  'player.load.backpack': 'Ponte una mochila con un 5-10% de tu peso corporal. Si 12 repeticiones lentas te resultan fáciles, añade un poco más.',
  'player.painRule.title': '¿Cuánto dolor es aceptable?',
  'player.painRule.body': '0-3 está bien. 4-5 vale si se calma a la mañana siguiente. 6 o más: para.',
  'player.painRule.ok': 'Entendido',
  'player.painRule.a11y': 'Cuánto dolor es aceptable',
  'player.tempo.on': 'Sonido activado',
  'player.tempo.off': 'Sonido desactivado',
  'player.voice.replay': 'Repetir la explicación',

  // ── The player's own chrome ───────────────────────────────────────────────
  'player.header.meta': '{minutes} · {moves}',
  'player.chip.position': '{index} de {total}',
  'player.cta.pause': 'Pausar',
  'player.cta.resume': 'Reanudar',
  'player.cta.done': 'Listo',
};
