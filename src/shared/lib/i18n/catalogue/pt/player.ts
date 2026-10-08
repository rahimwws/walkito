/** player strings (count-in, post-session feedback), Brazilian Portuguese.
 * Filled per domain; see `../en/core.ts` for the rules. */

export const PLAYER_PT = {
  // ── The count-in ──────────────────────────────────────────────────────────
  'player.countIn.getReady': 'Prepare-se',
  'player.countIn.nextUp': 'A seguir',
  'player.countIn.go': 'Já!',
  'player.countIn.tapToStart': 'Toque para começar agora',

  // ── How hard was that ─────────────────────────────────────────────────────
  'player.feedback.question': 'Você conseguiria fazer mais 2 repetições boas?',
  'player.feedback.purpose': 'Sua resposta ajusta as próximas sessões.',
  'player.feedback.easy': 'Sim, fácil',
  'player.feedback.right': 'Na medida',
  'player.feedback.hard': 'Não',
  'player.feedback.hurt': 'Doeu',
  'player.feedback.adjusts': 'Entendi. O plano se ajusta.',
  'player.feedback.keeps': 'Entendi. O plano mantém este ritmo.',

  // ── "It hurt", after the session ──────────────────────────────────────────
  'player.afterPain.lowHint':
    'Anotado. Um pouco de incômodo depois deste trabalho é normal. Se ainda estiver aí amanhã de manhã, o check-in deixa o plano mais leve.',
  'player.afterPain.highHint':
    'Isso é mais do que este trabalho deveria causar. Sua próxima sessão começa um passo mais leve.',
  'player.afterPain.save': 'Salvar',
  'player.cantDo.button': 'Não consigo fazer',
  'player.cantDo.title': 'O que está atrapalhando?',
  'player.cantDo.blurb': 'Vamos trocar agora e tirar do seu plano.',
  'player.cantDo.noStep': 'Sem degrau',
  'player.cantDo.noBand': 'Sem elástico',
  'player.cantDo.noTowel': 'Sem toalha',
  'player.cantDo.noPillow': 'Sem travesseiro',
  'player.cantDo.noBall': 'Sem bolinha',
  'player.cantDo.hurts': 'Está doendo',
  'player.cantDo.swapped': 'Trocado por {name}.',
  'player.cantDo.skipped': 'Hoje nada serve no lugar, então este fica de fora.',
  'player.load.backpack': 'Coloque uma mochila com cerca de 5-10% do seu peso corporal. Se 12 repetições lentas ficarem fáceis, coloque um pouco mais.',
  'player.painRule.title': 'Quanta dor é aceitável?',
  'player.painRule.body': '0-3 tudo bem. 4-5 tudo bem se passar até a manhã seguinte. 6 ou mais - pare.',
  'player.painRule.ok': 'Entendi',
  'player.painRule.a11y': 'Quanta dor é aceitável',
  'player.tempo.on': 'Sons de ritmo ligados',
  'player.tempo.off': 'Sons de ritmo desligados',

  // ── The player's own chrome ───────────────────────────────────────────────
  'player.header.meta': '{minutes} · {moves}',
  'player.chip.position': '{index} de {total}',
  'player.cta.pause': 'Pausar',
  'player.cta.resume': 'Retomar',
  'player.cta.done': 'Pronto',
};
