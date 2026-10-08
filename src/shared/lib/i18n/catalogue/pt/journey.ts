/**
 * The rebuilt onboarding and the screens after the first purchase, Brazilian
 * Portuguese.
 *
 * `você` throughout. Places and sides are whole names because Portuguese puts
 * the side after the noun and agrees it: "calcanhar esquerdo", "canela
 * esquerda". Gendered agreement with the user is avoided rather than guessed
 * ("prazer em te conhecer", "na cadeira" rather than "sentado/sentada"). The
 * iOS labels in `setup.widget.mock*` are the system's own Brazilian ones.
 *
 * As in English: never a diagnosis, never a promised result, no figures we
 * cannot stand behind, no doctors and no refusals.
 */
export const JOURNEY_PT = {
  // ── Intro ────────────────────────────────────────────────────────────────
  'onboarding.intro.ctaStart': 'Vamos começar',
  'onboarding.intro.haveAccount': 'Já tem uma conta? Entre',
  'onboarding.signIn.title': 'Que bom te ver de novo',
  'onboarding.signIn.blurb': 'Entre na conta em que seu plano está salvo.',
  'onboarding.signIn.apple': 'Continuar com a Apple',
  'onboarding.signIn.google': 'Continuar com o Google',
  'onboarding.signIn.email': 'Usar e-mail',

  // ── Name ─────────────────────────────────────────────────────────────────
  'onboarding.react.nameNamed': 'Prazer em te conhecer, {name}.',

  // ── Who they are ─────────────────────────────────────────────────────────
  'onboarding.role.title': 'O que te mantém em pé, {name}?',
  'onboarding.role.blurb': 'Para o plano caber no seu dia, não no de outra pessoa.',
  'onboarding.role.running': 'Corrida',
  'onboarding.role.feet': 'Trabalho em pé o dia todo',
  'onboarding.role.both': 'Os dois',
  'onboarding.role.walking': 'Caminhada do dia a dia',
  'onboarding.runner.titleRunning': 'Como você corre, {name}?',

  'onboarding.react.runningTitle': 'Quem corre está em boa companhia aqui.',
  'onboarding.react.runningBody': 'Seu plano se encaixa nas suas corridas.',
  'onboarding.react.feetTitle': 'Turnos longos pesam nos pés.',
  'onboarding.react.feetBody': 'Seu plano cabe antes ou depois do trabalho.',
  'onboarding.react.bothTitle': 'Corrida em cima de um dia cheio.',
  'onboarding.react.bothBody': 'Seu plano conta os dois.',
  'onboarding.react.walkingTitle': 'Cada passo conta.',
  'onboarding.react.walkingBody': 'Seu plano é montado em torno da caminhada.',

  // ── Where it hurts ───────────────────────────────────────────────────────
  'onboarding.react.areaHeel': 'O mais comum por aqui.',
  'onboarding.react.areaFoot': 'É por aí que o plano começa.',
  'onboarding.react.areaAchilles': 'Ele responde bem a carga lenta.',
  'onboarding.react.areaCalf': 'Ela puxa tudo o que está abaixo.',
  'onboarding.react.areaShin': 'A carga subiu mais rápido que as pernas.',
  'onboarding.react.areaNone': 'Boa hora para ganhar força.',

  'onboarding.where.heelLeft': 'Calcanhar esquerdo',
  'onboarding.where.heelRight': 'Calcanhar direito',
  'onboarding.where.heelBoth': 'Os dois calcanhares',
  'onboarding.where.footLeft': 'Pé esquerdo',
  'onboarding.where.footRight': 'Pé direito',
  'onboarding.where.footBoth': 'Os dois pés',
  'onboarding.where.achillesLeft': 'Aquiles esquerdo',
  'onboarding.where.achillesRight': 'Aquiles direito',
  'onboarding.where.achillesBoth': 'Os dois Aquiles',
  'onboarding.where.calfLeft': 'Panturrilha esquerda',
  'onboarding.where.calfRight': 'Panturrilha direita',
  'onboarding.where.calfBoth': 'As duas panturrilhas',
  'onboarding.where.shinLeft': 'Canela esquerda',
  'onboarding.where.shinRight': 'Canela direita',
  'onboarding.where.shinBoth': 'As duas canelas',

  // ── How long ─────────────────────────────────────────────────────────────
  'onboarding.duration.title': 'Há quanto tempo dói?',
  'onboarding.duration.blurb': 'Mais ou menos já serve.',
  'onboarding.duration.weeks': 'Menos de 6 semanas',
  'onboarding.duration.months': 'De 6 semanas a 3 meses',
  'onboarding.duration.year': 'De 3 a 12 meses',
  'onboarding.duration.longer': 'Mais de um ano',

  'onboarding.react.weeksTitle': 'Cedo é a melhor hora.',
  'onboarding.react.weeksBody': 'A gente começa com calma.',
  'onboarding.react.monthsTitle': 'Não vai passar sozinho.',
  'onboarding.react.monthsBody': 'A gente começa pelo que ajuda primeiro.',
  'onboarding.react.yearTitle': 'É bastante tempo.',
  'onboarding.react.yearBody': 'Em geral a carga nunca mudou. A gente vai mudar.',
  'onboarding.react.longerTitle': 'Mais de um ano. É real.',
  'onboarding.react.longerBody': 'Precisa de outra carga, não de mais descanso.',

  // ── Morning pain ─────────────────────────────────────────────────────────
  'onboarding.morning.title': 'Dor nos primeiros passos hoje?',
  'onboarding.morning.blurb': 'A mesma pergunta que você vai responder toda manhã.',
  'onboarding.morning.min': 'Tudo bem',
  'onboarding.morning.max': 'A pior',
  'onboarding.morning.a11y': 'Primeiros passos hoje de manhã, {score} de 10',
  'onboarding.react.painZero': 'Vamos manter assim.',
  'onboarding.react.painMild': 'Pouca, mas toda manhã.',
  'onboarding.react.painMiddle': 'O bastante para mudar o seu dia.',
  'onboarding.react.painHard': 'A gente começa com calma.',

  // ── Safety check ─────────────────────────────────────────────────────────
  'onboarding.safety.title': 'Algum destes agora?',
  'onboarding.safety.blurb': 'Uma checagem rápida de segurança.',
  'onboarding.safety.calf': 'Panturrilha inchada, quente ou vermelha de um lado',
  'onboarding.safety.pop': 'Um estalo repentino atrás do tornozelo',
  'onboarding.safety.diabetes': 'Diabetes com o pé quente e vermelho ou uma ferida aberta',
  'onboarding.safety.fall': 'Machuquei numa queda e não consigo apoiar o peso',
  'onboarding.safety.numb': 'Dormência, formigamento ou queimação',
  'onboarding.safety.none': 'Nada disso',
  'onboarding.react.safetySeated': 'A primeira semana é feita na cadeira.',
  'onboarding.react.safetyNumb': 'Anotado. Vamos ficar de olho.',

  // ── What they tried ──────────────────────────────────────────────────────
  'onboarding.tried.title': 'O que você já tentou?',
  'onboarding.tried.blurb': 'Escolha todos que se aplicam.',
  'onboarding.tried.insoles': 'Palmilhas ou órteses',
  'onboarding.tried.stretching': 'Alongamento',
  'onboarding.tried.shoes': 'Tênis novo',
  'onboarding.tried.rest': 'Descanso',
  'onboarding.tried.physio': 'Fisioterapia',
  'onboarding.tried.none': 'Nada ainda',

  'onboarding.react.insolesTitle': 'Palmilhas tiram carga.',
  'onboarding.react.insolesBody': 'Seu plano soma a força que elas não dão.',
  'onboarding.react.restTitle': 'Descanso acalma.',
  'onboarding.react.restBody': 'Seu plano soma a força que o descanso não dá.',
  'onboarding.react.stretchingTitle': 'Alongar é um bom começo.',
  'onboarding.react.stretchingBody': 'Seu plano soma força a isso.',
  'onboarding.react.shoesTitle': 'Um bom tênis ajuda.',
  'onboarding.react.shoesBody': 'Seu plano fortalece o que segura a carga.',
  'onboarding.react.physioTitle': 'Fisioterapia é um ótimo começo.',
  'onboarding.react.physioBody': 'Seu plano dá continuidade todo dia.',
  'onboarding.react.nothingTitle': 'Você está no lugar certo.',
  'onboarding.react.nothingBody': 'A gente começa pelo que mais ajuda.',
  'onboarding.react.tap': 'Toque para continuar',

  // ── Goal ─────────────────────────────────────────────────────────────────
  'onboarding.goal.titleShort': 'O que importa mais?',
  'onboarding.goal.mornings': 'Manhãs mais leves',
  'onboarding.goal.backToRunning': 'Voltar a correr',
  'onboarding.goal.shift': 'Aguentar um turno sem dor',

  // ── Load ─────────────────────────────────────────────────────────────────
  'onboarding.load.titleFeet': 'Quantas horas em pé por dia?',
  'onboarding.load.blurbFeet': 'Seu dia comum, não o mais longo.',
  'onboarding.load.feet0': 'Menos de 4 horas',
  'onboarding.load.feet1': '4–8 horas',
  'onboarding.load.feet2': '8–12 horas',
  'onboarding.load.feet3': '12+ horas',
  'onboarding.reflection.feetDaily': '{band} em pé por dia',

  // ── Halfway ──────────────────────────────────────────────────────────────
  'onboarding.midway.title': 'O que já sabemos, {name}',
  'onboarding.midway.body': 'Mais algumas, e aí vem seu plano.',
  'onboarding.midway.mornings': 'Manhãs: {score} de 10',
  'onboarding.midway.since': 'Há: {duration}',
  'onboarding.midway.tried': 'Já tentou: {items}',
  'onboarding.midway.nothing': 'Nada dói agora',

  // ── Why it still hurts ───────────────────────────────────────────────────
  'onboarding.why.title': 'Por que ainda dói, {name}',
  'onboarding.why.patternHead': 'O padrão',
  'onboarding.why.lingersHead': 'Por que não passa',
  'onboarding.why.helpsHead': 'O que ajuda',
  'onboarding.why.patternHeel': 'Pior nos primeiros passos. Muito comum.',
  'onboarding.why.patternFoot': 'Os músculos do arco cansam antes do fim do dia.',
  'onboarding.why.patternAchilles': 'A carga subiu mais rápido do que o tendão se adaptou.',
  'onboarding.why.patternCalf': 'Uma panturrilha tensa puxa o calcanhar e o pé.',
  'onboarding.why.patternShin': 'A carga subiu mais rápido que as pernas.',
  'onboarding.why.lingersWeeks': 'Só algumas semanas. Mais fácil de virar o jogo.',
  'onboarding.why.lingersMonths': 'Já são meses. Não vai simplesmente passar.',
  'onboarding.why.lingersYear': 'Já são meses. A carga nunca mudou.',
  'onboarding.why.lingersLonger': 'Mais de um ano. A carga nunca mudou.',
  'onboarding.why.triedInsoles': 'Palmilhas tiram carga, mas não constroem força.',
  'onboarding.why.triedRest': 'Descanso acalma, mas não constrói força.',
  'onboarding.why.triedStretching': 'Só alongar não constrói força.',
  'onboarding.why.triedShoes': 'O tênis muda a carga, não o que a segura.',
  'onboarding.why.triedPhysio': 'O que falta é fazer todo dia.',
  'onboarding.why.triedNone': 'Um começo do zero.',
  'onboarding.why.helpsFoot': 'Um alongamento de manhã, depois força lenta de panturrilha e pé.',
  'onboarding.why.helpsAchilles': 'Carga lenta na panturrilha, semana a semana.',
  'onboarding.why.helpsCalf': 'Soltar a panturrilha, depois fortalecer.',
  'onboarding.why.helpsShin': 'Aliviar a carga, depois ganhar força.',
  'onboarding.why.footer': 'Não é um diagnóstico.',
  'onboarding.why.cta': 'Montar meu plano',

  // ── When ─────────────────────────────────────────────────────────────────
  'onboarding.habit.title': 'Quando você vai fazer?',
  'onboarding.habit.blurb': 'Ligue a algo que você já faz todo dia.',
  'onboarding.habit.wake': 'Ao acordar, antes de levantar',
  'onboarding.habit.coffee': 'Com o café da manhã',
  'onboarding.habit.shift': 'Depois do meu turno',
  'onboarding.habit.bed': 'Antes de dormir',
  'onboarding.habit.reminder': 'Lembrete: {time}',
  'onboarding.habit.change': 'Mudar',
  'onboarding.react.habitWake': 'É quando o pé está mais rígido.',
  'onboarding.react.habitCoffee': 'Todo dia, como o café.',
  'onboarding.react.habitShift': 'Quando os pés mais precisam.',
  'onboarding.react.habitBed': 'Alguns minutos tranquilos.',
  'onboarding.react.equipmentNone': 'Não precisa de nada.',
  'onboarding.react.equipmentSome': 'A gente planeja em volta disso.',

  // ── The 30-second check ──────────────────────────────────────────────────
  'onboarding.test.introTitle': 'Checagem rápida: fique em pé',
  'onboarding.test.introBody': 'Duas checagens, 30 segundos.',
  'onboarding.test.introBalance': 'Em uma perna só',
  'onboarding.test.start': 'Começar a checagem',
  'onboarding.test.notNow': 'Pular',
  'onboarding.test.meta': 'Checagem {n} de {total}',
  'onboarding.test.toeStep1': 'Fique em pé com os pés apoiados e relaxados.',
  'onboarding.test.toeStep2': 'Levante só o dedão. Mantenha os outros no chão.',
  'onboarding.test.toeQuestion': 'Aparece um arco embaixo do pé?',
  'onboarding.test.toeYes': 'Sim, aparece um arco',
  'onboarding.test.toeNo': 'Não',
  'onboarding.test.toeUnsure': 'Não tenho certeza',
  'onboarding.test.balanceBody': 'Levante um pé. Toque em Parar quando ele encostar no chão.',
  'onboarding.test.startLeft': 'Começar com a esquerda',
  'onboarding.test.startRight': 'Começar com a direita',
  'onboarding.test.stop': 'Parar',
  'onboarding.test.left': 'Esquerda',
  'onboarding.test.right': 'Direita',
  'onboarding.test.seconds': '{count} s',
  'onboarding.test.resultTitle': 'Seu ponto de partida',
  'onboarding.test.archYes': 'Pé flexível. Responde bem ao trabalho de força.',
  'onboarding.test.archNo': 'Sem arco. Vamos focar em panturrilha e tornozelo.',
  'onboarding.test.archUnsure': 'Difícil dizer. Sua primeira reavaliação vai medir isso.',
  'onboarding.test.balanceHead': 'Em uma perna só',
  'onboarding.test.resultFoot': 'Seu plano usa isso desde o primeiro dia.',

  // ── Building ─────────────────────────────────────────────────────────────
  'onboarding.building.heading': 'Montando seu plano',
  'onboarding.building.where': '{where} · manhãs {score}/10',
  'onboarding.building.safety': 'Checagem de segurança concluída',
  'onboarding.building.seated': 'A primeira semana é feita na cadeira',
  'onboarding.building.kitAll': 'Tudo o que você precisa em casa',
  'onboarding.building.kitWithout': 'Planejado sem: {items}',
  'onboarding.building.kitNone': 'Sem equipamento',
  'onboarding.building.choosing': 'Escolhendo sua primeira semana…',
  'onboarding.building.ctaWeek': 'Ver minha primeira semana',

  // ── First week ───────────────────────────────────────────────────────────
  'onboarding.week.title': 'Sua primeira semana',
  'onboarding.week.blurb': 'Sessões curtas nos dias que você escolheu. Cada uma se ajusta a como seu pé está naquela manhã.',
  'onboarding.week.morningMeta': 'Toda manhã, antes de levantar · 2 min',
  'onboarding.week.sessionMeta': 'Nas suas sessões desta semana',

  // ── After the first purchase ─────────────────────────────────────────────
  'setup.save.titleNamed': 'Tudo pronto, {name}',
  'setup.save.title': 'Tudo pronto',
  'setup.save.blurb': 'Para ficar seguro se você trocar de celular.',
  'setup.save.later': 'Agora não',
  'setup.widget.title': 'Seu check-in na Tela de Início',
  'setup.widget.blurb': 'Um toque antes de levantar.',
  'setup.widget.add': 'Adicionar widget',
  'setup.widget.later': 'Agora não',
  'setup.widget.stepOf': 'Passo {n} de {total}',
  'setup.widget.holdTitle': 'Toque e segure a Tela de Início',
  'setup.widget.holdBody': 'Toque e segure um espaço vazio.',
  'setup.widget.editTitle': 'Toque em Editar e depois em Adicionar Widget',
  'setup.widget.editBody': 'No canto de cima, depois Adicionar Widget.',
  'setup.widget.searchTitle': 'Busque por Walkito',
  'setup.widget.searchBody': 'Escolha o tamanho pequeno e toque em Adicionar Widget.',
  /** The system's own labels, as iOS shows them in Brazilian Portuguese. */
  'setup.widget.mockEdit': 'Editar',
  'setup.widget.mockAdd': 'Adicionar Widget',
  'setup.widget.mockSearch': 'Buscar Widgets',
  'setup.next': 'Próximo',
  'setup.done': 'Pronto',
  'setup.finish': 'Começar minha primeira sessão',

  // ── The paywall ──────────────────────────────────────────────────────────
  'offer.stripMornings': 'Manhãs {score}/10',
  'offer.introTomorrowWhen': 'Amanhã, antes de levantar',
  'offer.introTomorrowBody': 'Dois minutos, antes de o pé tocar o chão.',
  'offer.howTitleShort': 'É assim que funciona',
  'offer.howCheckinShort': 'Check-in de 10 segundos pela manhã',
  'offer.howSessionShort': 'Sessão de 3–10 minutos, ajustada todo dia',
  'offer.howRetestShort': 'O mesmo teste a cada duas semanas',
  'offer.builtTitle': 'No que ele se baseia',
  'offer.builtBody':
    'Exercícios de pesquisas publicadas e da diretriz de 2023 sobre dor no calcanhar. O Walkito em si não foi testado em um estudo clínico.',
  'offer.freeLine': 'Se um dia você cancelar, o alongamento da manhã continua grátis.',
  'offer.haveCode': 'Tem um código?',
  'offer.startPlan': 'Começar meu plano',
};
