/** player strings (count-in, post-session feedback). Filled per domain; see `../en/core.ts` for the rules. */

export const PLAYER_FR = {
  // ── The count-in ──────────────────────────────────────────────────────────
  'player.countIn.getReady': 'Prépare-toi',
  'player.countIn.nextUp': 'Ensuite',
  'player.countIn.go': 'C’est parti',
  'player.countIn.tapToStart': 'Touche pour commencer',

  // ── How hard was that ─────────────────────────────────────────────────────
  'player.feedback.question': 'Aurais-tu pu faire 2 bonnes répétitions de plus ?',
  'player.feedback.purpose': 'Ta réponse ajuste les prochaines séances.',
  'player.feedback.easy': 'Oui, facilement',
  'player.feedback.right': 'À peu près',
  'player.feedback.hard': 'Non',
  'player.feedback.hurt': 'J’ai eu mal',
  'player.feedback.adjusts': 'C’est noté. Le plan s’ajuste.',
  'player.feedback.keeps': 'C’est noté. Le plan garde ce rythme.',

  // ── "It hurt", after the session ──────────────────────────────────────────
  'player.afterPain.lowHint':
    'Noté. Un peu de gêne après ce travail, c’est normal. Si elle est encore là demain matin, le bilan allège le plan.',
  'player.afterPain.highHint':
    'C’est plus que ce que ce travail devrait provoquer. Ta prochaine séance reprend un cran en dessous.',
  'player.afterPain.save': 'Enregistrer',
  'player.cantDo.button': 'Je ne peux pas',
  'player.cantDo.title': 'Qu’est-ce qui bloque ?',
  'player.cantDo.blurb': 'On le remplace maintenant et on le retire de ton plan.',
  'player.cantDo.noStep': 'Pas de marche',
  'player.cantDo.noBand': 'Pas d’élastique',
  'player.cantDo.noTowel': 'Pas de serviette',
  'player.cantDo.noPillow': 'Pas de coussin',
  'player.cantDo.noBall': 'Pas de balle',
  'player.cantDo.hurts': 'J’ai mal',
  'player.cantDo.swapped': 'Remplacé par {name}.',
  'player.cantDo.skipped': 'Rien ne convient ici aujourd’hui, on passe celui-ci.',
  'player.load.backpack': 'Ajoute un sac à dos d’environ 5-10 % de ton poids. Si 12 répétitions lentes sont faciles, ajoute un peu plus.',
  'player.painRule.title': 'Quelle douleur est acceptable ?',
  'player.painRule.body': '0-3, c’est bon. 4-5, ça va si ça se calme le lendemain matin. 6 ou plus : arrête.',
  'player.painRule.ok': 'Compris',
  'player.painRule.a11y': 'Quelle douleur est acceptable',
  'player.tempo.on': 'Son activé',
  'player.tempo.off': 'Son désactivé',
  'player.voice.replay': 'Réécouter la consigne',

  // ── The player's own chrome ───────────────────────────────────────────────
  'player.header.meta': '{minutes} · {moves}',
  'player.chip.position': '{index} sur {total}',
  'player.cta.pause': 'Pause',
  'player.cta.resume': 'Reprendre',
  'player.cta.done': 'Terminé',
};
