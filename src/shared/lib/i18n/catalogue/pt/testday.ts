/** testday strings (the guided test day: intro, the three tests, results). Filled per domain; see `../en/core.ts` for the rules. */

export const TESTDAY_PT = {
  // ── Chrome ────────────────────────────────────────────────────────────────
  'testday.close': 'Fechar',
  'testday.leave.title': 'Sair do teste?',
  'testday.leave.body': 'Nada é salvo até o último teste terminar. O teste continua pendente.',
  'testday.leave.stay': 'Continuar testando',
  'testday.leave.confirm': 'Sair',

  // ── Intro ─────────────────────────────────────────────────────────────────
  'testday.intro.eyebrow': 'Dia de teste',
  'testday.intro.title': 'Três testes curtos',
  'testday.intro.body': {
    one: 'Cerca de {count} minuto.',
    other: 'Cerca de {count} minutos.',
  },
  'testday.intro.nowSeconds': 'Agora {now} s · meta {goal} s',
  'testday.intro.nowRaises': {
    one: 'Agora {now} · meta {count} elevação',
    other: 'Agora {now} · meta {count} elevações',
  },
  'testday.intro.firstSeconds': 'Primeira medição · meta {goal} s',
  'testday.intro.firstRaises': {
    one: 'Primeira medição · meta {count} elevação',
    other: 'Primeira medição · meta {count} elevações',
  },
  'testday.intro.need': 'Você vai precisar de',
  'testday.intro.needBarefoot': 'Pés descalços',
  'testday.intro.needWall': 'Uma parede para tocar e se equilibrar',
  'testday.intro.needPhone': 'O celular num lugar onde você consiga ver',
  'testday.intro.checkin': 'Como está o pé agora?',
  'testday.intro.checkinHint': 'Isso conta como o registro de hoje.',
  'testday.intro.painNone': 'Sem dor',
  'testday.intro.painWorst': 'Máxima',
  'testday.intro.painA11y': '{score} de 10',
  'testday.intro.sore':
    'Num dia de dor, os números saem mais baixos do que seu pé realmente consegue, e as próximas duas semanas seriam planejadas a partir deles. O teste pode esperar até amanhã.',
  'testday.intro.start': 'Começar',
  'testday.intro.anyway': 'Testar mesmo assim',
  'testday.intro.tomorrow': 'Testar amanhã',

  // ── The three tests ───────────────────────────────────────────────────────
  'testday.test.eyebrow': 'Teste {current} de {total}',
  'testday.test.calf.name': 'Elevação de calcanhar',
  'testday.test.arch.name': 'Arco sustentado',
  'testday.test.balance.name': 'Equilíbrio',

  'testday.side.left': 'Perna esquerda',
  'testday.side.right': 'Perna direita',
  'testday.side.leftSore': 'Perna esquerda - a que dói',
  'testday.side.rightSore': 'Perna direita - a que dói',

  // The button on the picture before a test: opens the clip at full size.

  'testday.watch': 'Ver o vídeo',

  'testday.calf.step1': 'Em uma perna, dedos na parede.',
  'testday.calf.step2': 'Suba até o alto e desça, no ritmo do clique.',
  'testday.calf.step3': 'Pare quando perder o ritmo ou a altura.',
  'testday.calf.stopHint': 'Toque quando não conseguir manter o ritmo ou a altura total',
  'testday.calf.up': 'Sobe',
  'testday.calf.down': 'Desce',
  'testday.calf.otherTitle': 'Agora a outra perna',
  'testday.calf.otherBody': 'Mesmo ritmo, mesma altura total, pontas dos dedos na parede.',

  'testday.arch.step1': 'Fique de pé sobre os dois pés.',
  'testday.arch.step2': 'Puxe a base dos dedos em direção ao calcanhar.',
  'testday.arch.step3': 'Pare quando o arco cair.',
  'testday.arch.stopHint': 'Toque assim que o arco cair',

  'testday.balance.step1': 'Em uma perna, mãos na cintura.',
  'testday.balance.step2': 'Feche os olhos no início.',
  'testday.balance.step3': 'Pare quando o outro pé tocar o chão.',
  'testday.balance.stopHint': 'Toque quando o outro pé tocar o chão',

  'testday.start': 'Começar',
  'testday.stop': 'Parar',
  'testday.timeLeft': 'Faltam {time}',
  'testday.secondsLeft': { one: 'segundo restante', other: 'segundos restantes' },
  'testday.held': 'Segurou por {n} s',

  'testday.paused.title': 'Pausado',
  'testday.paused.body': 'O cronômetro parou enquanto o app estava em segundo plano.',
  'testday.paused.resume': 'Continuar',
  'testday.paused.restart': 'Começar este teste de novo',

  'testday.confirm.raises': {
    one: '{count} elevação - está certo?',
    other: '{count} elevações - está certo?',
  },
  'testday.confirm.seconds': {
    one: '{count} segundo - está certo?',
    other: '{count} segundos - está certo?',
  },
  'testday.confirm.hint': 'Ajuste se a contagem saiu errada.',
  'testday.confirm.holdHint': 'Se você demorou um pouco para alcançar o celular, tire esses segundos.',
  'testday.confirm.less': 'Menos',
  'testday.confirm.more': 'Mais',
  'testday.confirm.again': 'Fazer este teste de novo',
  'testday.confirm.next': 'Próximo teste',
  'testday.confirm.finish': 'Ver resultados',

  // ── Results ───────────────────────────────────────────────────────────────
  'testday.results.firstBlurb': 'O próximo teste mostra o quanto você avançou.',
  'testday.results.name.arch_hold': 'Arco sustentado',
  'testday.results.name.calf_raises': 'Elevação de calcanhar',
  'testday.results.name.balance': 'Equilíbrio',
  'testday.results.name.symmetry': 'Simetria',
  'testday.results.unitSeconds': { one: 'segundo', other: 'segundos' },
  'testday.results.unitRaises': { one: 'elevação', other: 'elevações' },
  'testday.results.percent': '{n}%',
  'testday.results.gapUnit': 'de diferença entre as pernas',
  'testday.results.legs': 'Esquerda {left} · direita {right}',
  'testday.results.goalGap': 'Meta: abaixo de {n}%',
  'testday.results.toGoSeconds': { one: 'Falta {count} s', other: 'Faltam {count} s' },
  'testday.results.toGoRaises': { one: 'Falta {count} elevação', other: 'Faltam {count} elevações' },
  'testday.results.toGoGap': { one: 'Falta {count} ponto', other: 'Faltam {count} pontos' },
  'testday.results.reached': 'Meta alcançada',
  'testday.results.moreSeconds': {
    one: '{count} s a mais que da última vez',
    other: '{count} s a mais que da última vez',
  },
  'testday.results.fewerSeconds': {
    one: '{count} s a menos que da última vez',
    other: '{count} s a menos que da última vez',
  },
  'testday.results.moreRaises': {
    one: '{count} elevação a mais que da última vez',
    other: '{count} elevações a mais que da última vez',
  },
  'testday.results.fewerRaises': {
    one: '{count} elevação a menos que da última vez',
    other: '{count} elevações a menos que da última vez',
  },
  'testday.results.gapSmaller': {
    one: 'Diferença {count} ponto menor que da última vez',
    other: 'Diferença {count} pontos menor que da última vez',
  },
  'testday.results.gapLarger': {
    one: 'Diferença {count} ponto maior que da última vez',
    other: 'Diferença {count} pontos maior que da última vez',
  },
  'testday.results.same': 'Igual à última vez',
  'testday.results.first': 'Primeira medição',
  'testday.results.nextTest': 'Próximo teste: {date}',
  'testday.results.planUpdated': 'Seu plano para as próximas duas semanas foi atualizado.',
  'testday.results.done': 'Pronto',

  'testday.results.verdictFirst': 'Três números para superar',
  'testday.results.verdictSteady': 'Os três se mantiveram',
  'testday.results.verdictUp.calf_raises': 'Mais elevações que da última vez',
  'testday.results.verdictUp.arch_hold': 'Seu arco segurou por mais tempo',
  'testday.results.verdictUp.balance': 'Você se equilibrou por mais tempo',
  'testday.results.verdictUpTwo': 'Dois de três subiram',
  'testday.results.verdictUpAll': 'Os três subiram',
  // The line over the headline, and the headline when a goal was reached.
  'testday.results.heroEyebrowUp': 'Novo recorde',
  'testday.results.heroEyebrowFirst': 'Seu ponto de partida',
  'testday.results.heroEyebrowSteady': 'Testes feitos',
  'testday.results.verdictGoal.calf_raises': 'Você bateu sua meta de elevação',
  'testday.results.verdictGoal.arch_hold': 'Você bateu sua meta de arco',
  'testday.results.verdictGoal.balance': 'Você bateu sua meta de equilíbrio',
  // A test's row opened: every test so far, and the share card.
  'testday.results.history': 'Todos os testes',
  'testday.results.showDetails': 'Ver detalhes',
  'testday.results.hideDetails': 'Ocultar detalhes',
  'testday.results.share': 'Compartilhar',
  'testday.results.shareTitle': 'Meu teste dos pés',
  'testday.results.shareBrand': 'Walkito',
  'testday.results.shareMessage': 'Meu teste dos pés no Walkito: elevação de calcanhar {calf} · arco {arch} s · equilíbrio {balance} s',
  // A figure in seconds on its own: the unit beside the big number, and the share card.
  'testday.results.secondsShort': 's',
  'testday.results.valueSeconds': '{n} s',
  'testday.results.dateVs': {
    one: '{date} · comparado com {count} dia atrás',
    other: '{date} · comparado com {count} dias atrás',
  },
  'testday.results.dateFirst': '{date} · seu ponto de partida',
  'testday.results.chipBaseline': 'Ponto de partida',
  'testday.results.chipSame': 'Igual',
  'testday.results.chipSeconds': '{delta} s',
  'testday.results.chipRaises': { one: '{delta} elevação', other: '{delta} elevações' },
  'testday.results.gapBetween': 'Diferença entre as pernas {n}%',
  'testday.results.explain.calf_raises':
    'As elevações de calcanhar mostram quanto trabalho a panturrilha e o tendão de Aquiles aguentam antes de cansar. Mais elevações significa que a panturrilha carrega mais de cada passo em caminhadas e corridas longas.',
  'testday.results.explain.arch_hold':
    'O arco sustentado mostra por quanto tempo os pequenos músculos da sola mantêm o arco elevado. Um tempo maior significa que o pé fica apoiado por mais tempo ao longo do dia.',
  'testday.results.explain.balance':
    'Ficar em uma perna de olhos fechados mostra o quanto o pé e o tornozelo sentem o chão. Mais segundos significa passos mais firmes em terreno irregular e quando você está cansado.',
  'testday.results.explainA11y': 'O que isto mostra',
};
