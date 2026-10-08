/**
 * Onboarding, Brazilian Portuguese.
 *
 * `você` throughout, Brazilian vocabulary (`celular`, `academia`, `tela`).
 * A few places avoid a gendered form, because the screen has just asked the
 * user their sex and could get it wrong:
 *
 * - `onboarding.social.welcome` is «Boas-vindas», not «Bem-vindo/a».
 * - `onboarding.notify.ask` is «Conte com a gente», not «sozinho/sozinha».
 * - `onboarding.contract.stampText` is the noun «Compromisso», not
 *   «Comprometido/a».
 *
 * Watch sync steps name Garmin Connect's menus as its Brazilian build shows
 * them; Whoop is not localised, so its menu names stay in English, as in
 * Spanish.
 *
 * The `many` plural form is left out everywhere - in Portuguese it is the
 * whole-millions form, and no count in this flow reaches a million.
 */
export const ONBOARDING_PT = {
  // ── Acts ─────────────────────────────────────────────────────────────────
  'onboarding.act.about': 'Sobre você',
  'onboarding.act.sport': 'Seu esporte',
  'onboarding.act.health': 'Sua saúde',
  'onboarding.act.plan': 'Seu plano',

  // ── Shared buttons ───────────────────────────────────────────────────────
  'onboarding.cta.next': 'Próximo',
  'onboarding.cta.continue': 'Continuar',
  'onboarding.cta.done': 'Pronto',
  'onboarding.cta.skip': 'Pular',
  'onboarding.cta.skipForNow': 'Pular por enquanto',
  'onboarding.cta.checking': 'Verificando…',
  'onboarding.cta.applyCode': 'Aplicar código',
  'onboarding.cta.startPlan': 'Começar meu plano',

  // ── Intro ────────────────────────────────────────────────────────────────
  'onboarding.intro.title': 'Corra sem ficar na dúvida',
  'onboarding.intro.blurb': 'Um plano diário que muda quando suas pernas mudam.',
  'onboarding.intro.greeting': 'Oi, eu sou o Walkito',
  'onboarding.intro.headline': 'Vamos descobrir por que ainda dói.',
  'onboarding.intro.cta': 'Continuar com a Apple',
  'onboarding.intro.ctaGoogle': 'Continuar com o Google',
  'onboarding.intro.footnote': 'Cerca de 3 minutos',
  'onboarding.intro.signInFailed': 'O login não foi concluído. Tente de novo.',
  'onboarding.intro.emailCta': 'Entrar com e-mail',

  // ── Email sign-in sheet ──────────────────────────────────────────────────
  'onboarding.email.title': 'Entrar',
  'onboarding.email.blurb': 'Use o e-mail e a senha da sua conta.',
  'onboarding.email.address': 'E-mail',
  'onboarding.email.password': 'Senha',
  'onboarding.email.submit': 'Entrar',
  'onboarding.email.submitting': 'Entrando…',

  // ── Name ─────────────────────────────────────────────────────────────────
  'onboarding.name.title': 'Como devemos\nchamar você?',
  'onboarding.name.blurb':
    'Tudo daqui em diante é escrito para você, não para corredores em geral.',
  'onboarding.name.placeholder': 'ex.: Alex',

  // ── Sex ──────────────────────────────────────────────────────────────────
  'onboarding.sex.title': 'Homem ou mulher, {name}?',
  'onboarding.sex.blurb':
    'A tolerância à carga e os padrões de lesão mudam, então o plano muda também.',
  'onboarding.sex.female': 'Mulher',
  'onboarding.sex.male': 'Homem',

  // ── Runner ───────────────────────────────────────────────────────────────
  'onboarding.runner.title': 'Que tipo de atleta você é, {name}?',
  'onboarding.runner.blurb':
    'É daqui que seu plano parte. Se subestimar, a primeira semana só fica fácil demais.',
  'onboarding.runner.new': 'Estou começando',
  'onboarding.runner.casual': 'De vez em quando',
  'onboarding.runner.regular': 'Com frequência',
  'onboarding.runner.racing': 'Treinando para uma prova',
  'onboarding.runner.serious': 'Levo a sério',

  // ── Age ──────────────────────────────────────────────────────────────────
  'onboarding.age.title': 'Quantos anos você tem?',
  'onboarding.age.blurb':
    'Os tendões se adaptam mais devagar com a idade. Isso define o ritmo em que o plano avança.',
  'onboarding.age.years': 'anos',

  // ── Body ─────────────────────────────────────────────────────────────────
  'onboarding.body.title': 'Um pouco mais sobre você, {name}',
  'onboarding.body.blurb': 'Os tendões carregam o seu peso. Isso define sua carga inicial.',
  'onboarding.body.kg': 'kg',
  'onboarding.body.lb': 'lb',

  // ── Shoe size ────────────────────────────────────────────────────────────
  'onboarding.size.title': 'Que número você calça, {name}?',
  'onboarding.size.blurb':
    'O número do calçado indica o tamanho da alavanca que sua panturrilha precisa mover.',

  // ── Goal ─────────────────────────────────────────────────────────────────
  'onboarding.goal.title': '{name}, qual é o seu objetivo?',
  'onboarding.goal.blurb': 'Escolha o que mais importa agora. Dá para mudar depois.',
  'onboarding.goal.painfree': 'Correr sem dor',
  'onboarding.goal.race': 'Treinar para uma prova',
  'onboarding.goal.consistent': 'Correr com mais constância',
  'onboarding.goal.stronger': 'Fortalecer as pernas',
  'onboarding.goal.injuryfree': 'Evitar lesões',
  'onboarding.goal.flatfeet': 'Arcos mais fortes',
  'onboarding.goal.ankles': 'Tornozelos mais firmes',
  'onboarding.goal.jump': 'Pular mais alto',
  'onboarding.goal.allday': 'Aguentar o dia todo de pé',
  'onboarding.goal.comeback': 'Voltar depois de uma lesão',
  'onboarding.goal.steady': 'Andar com confiança',
  'onboarding.days.title': 'Quantos dias por semana, {name}?',
  'onboarding.days.blurb': 'Sessões curtas. Os dias de descanso fazem parte do plano, não são um buraco nele.',
  'onboarding.days.days3': '3 dias',
  'onboarding.days.days3Caption': 'Um começo tranquilo',
  'onboarding.days.days5': '5 dias',
  'onboarding.days.days5Caption': 'Recomendado',
  'onboarding.days.days7': 'Todo dia',
  'onboarding.days.days7Caption': 'Curto e diário',
  'onboarding.minutes.title': 'Quanto tempo por sessão?',
  'onboarding.minutes.blurb': 'Mude quando quiser - dias corridos também contam.',
  'onboarding.minutes.min3': '3 minutos',
  'onboarding.minutes.min3Caption': 'Até nos dias corridos',
  'onboarding.minutes.min5': '5 minutos',
  'onboarding.minutes.min5Caption': 'Recomendado',
  'onboarding.minutes.min10': '10 minutos',
  'onboarding.minutes.min10Caption': 'Para avançar mais rápido',
  'onboarding.equipment.title': 'O que você tem em casa?',
  'onboarding.equipment.blurb': 'Marque tudo o que você tem.',
  'onboarding.equipment.step': 'Um degrau ou escada',
  'onboarding.equipment.band': 'Faixa elástica',
  'onboarding.equipment.towel': 'Toalha',
  'onboarding.equipment.pillow': 'Travesseiro',
  'onboarding.equipment.ball': 'Bolinha de massagem',
  'onboarding.equipment.none': 'Nada disso',
  'onboarding.reminder.title': 'Quando devemos lembrar você?',
  'onboarding.reminder.blurb': 'Um lembrete por dia. Escolha um horário em que você costuma ter cinco minutos livres.',
  // ── Pain ─────────────────────────────────────────────────────────────────
  'onboarding.pain.title': 'Onde costuma doer, {name}?',
  'onboarding.pain.blurb': 'Toque nos pontos da perna, até {count}.',
  'onboarding.pain.full': 'Até {count} por vez. Toque em um para trocar.',
  'onboarding.pain.none': 'Nada dói agora',
  'onboarding.pain.disclaimer':
    'Não é orientação médica. Se a dor for aguda, estiver piorando ou vier com inchaço ou dormência, procure um médico.',

  'onboarding.side.title': 'Qual lado, {name}?',
  'onboarding.side.blurb': 'Os testes comparam uma perna com a outra, então precisamos saber com qual estamos trabalhando.',
  'onboarding.side.left': 'Esquerdo',
  'onboarding.side.right': 'Direito',
  'onboarding.side.both': 'Os dois',

  // ── Sport ────────────────────────────────────────────────────────────────
  'onboarding.sport.title': 'O que mais exige das suas pernas, {name}?',
  'onboarding.sport.blurb': 'Isso define como as próximas perguntas são feitas.',
  'onboarding.sport.running': 'Corrida',
  'onboarding.sport.tennis': 'Tênis',
  'onboarding.sport.gym': 'Academia',
  'onboarding.sport.football': 'Futebol',
  'onboarding.sport.basketball': 'Basquete',
  'onboarding.sport.cycling': 'Ciclismo',
  'onboarding.sport.hiking': 'Trilha',

  // ── Load ─────────────────────────────────────────────────────────────────
  'onboarding.load.title': 'Quanto você está fazendo agora?',
  'onboarding.load.blurb': 'Sua semana real de agora, não a melhor que você já teve.',
  'onboarding.load.blurbMonth': 'Seu mês real de agora, não o melhor que você já teve.',
  'onboarding.load.titleRunning': 'Quanto você corre por semana?',
  'onboarding.load.titleTennis': 'Quanto tempo você passa em quadra, {name}?',
  'onboarding.load.blurbTennis': 'Jogos e treinos juntos - a semana real.',
  'onboarding.load.titleGym': 'Quanto você está treinando, {name}?',
  'onboarding.load.blurbGym': 'Tempo sob carga, não tempo dentro da academia.',
  'onboarding.load.titleFootball': 'Quanto você está jogando, {name}?',
  'onboarding.load.blurbFootball': 'Jogos e treinos juntos - a semana real.',
  'onboarding.load.titleBasketball': 'Quanto você está jogando, {name}?',
  'onboarding.load.blurbBasketball': 'Jogos e treinos juntos - a semana real.',
  'onboarding.load.titleCycling': 'Quanto você está pedalando, {name}?',
  'onboarding.load.titleHiking': 'Quanto você está fazendo trilha, {name}?',
  'onboarding.load.km0': '0–5 {unit}',
  'onboarding.load.km1': '5–15 {unit}',
  'onboarding.load.km2': '15–30 {unit}',
  'onboarding.load.km3': '30–50 {unit}',
  'onboarding.load.km4': '50+ {unit}',
  'onboarding.load.unitKm': 'km',
  'onboarding.load.hours0': 'Menos de 1 hora',
  'onboarding.load.hours1': '1–3 horas',
  'onboarding.load.hours2': '3–5 horas',
  'onboarding.load.hours3': '5–8 horas',
  'onboarding.load.hours4': '8+ horas',
  'onboarding.load.perWeek': 'por semana',
  'onboarding.load.runsPerWeek': 'Corridas por semana',
  'onboarding.load.sessionsPerWeek': 'Sessões por semana',
  'onboarding.load.ridesPerWeek': 'Pedais por semana',
  'onboarding.load.hikesPerMonth': 'Trilhas por mês',

  // ── Challenge ────────────────────────────────────────────────────────────
  'onboarding.challenge.title': 'O que está mais difícil agora, {name}?',
  'onboarding.challenge.blurb': 'Até dois. O plano se inclina para o que você escolher.',
  'onboarding.challenge.painfree': 'Ficar sem dor',
  'onboarding.challenge.back': 'Voltar a correr',
  'onboarding.challenge.distance': 'Aumentar a distância',
  'onboarding.challenge.recovery': 'Me recuperar mais rápido',
  'onboarding.challenge.strength': 'Ficar mais forte',
  'onboarding.challenge.injury': 'Evitar outra lesão',

  'onboarding.source.title': 'Como você conheceu o Walkito?',
  'onboarding.source.blurb': 'Um toque. Isso nos ajuda a chegar a pessoas como você.',
  'onboarding.source.tiktok': 'TikTok',
  'onboarding.source.instagram': 'Instagram',
  'onboarding.source.youtube': 'YouTube',
  'onboarding.source.friend': 'Um amigo me contou',
  'onboarding.source.appStore': 'Navegando na App Store',
  'onboarding.source.playStore': 'Navegando no Google Play',
  'onboarding.source.google': 'Busca no Google',
  'onboarding.source.other': 'Em outro lugar',
  'onboarding.challenge.swapped': 'Só {count} por vez - «{label}» saiu da lista.',

  // ── Health ───────────────────────────────────────────────────────────────
  'onboarding.health.title': 'Conecte seus dados do Saúde',
  'onboarding.health.blurb': 'Para o seu plano partir do que você realmente tem feito.',
  'onboarding.health.askNamed': 'Me conte tudo, {name}!',
  'onboarding.health.ask': 'Me conte tudo!',
  'onboarding.health.askBlurbAndroid':
    'O Walkito lê seus passos, corridas e sono para o plano partir do que você realmente tem feito - não do que você pretendia fazer.',
  'onboarding.health.askBlurb':
    'O Walkito lê seus passos, energia e frequência cardíaca para o plano partir do que você realmente tem feito - não do que você pretendia fazer.',
  'onboarding.health.steps': 'Passos',
  'onboarding.health.calories': 'Energia ativa',
  'onboarding.health.heartRate': 'Frequência cardíaca',
  'onboarding.health.notShared': 'Não compartilhado',
  'onboarding.health.thousands': '{value} mil',
  'onboarding.health.kcal': '{value} kcal',
  'onboarding.health.bpm': '{value} bpm',
  'onboarding.health.connect': 'Conectar ao Saúde',
  'onboarding.health.opening': 'Abrindo o Saúde…',
  'onboarding.health.connectAndroid': 'Conectar ao Health Connect',
  'onboarding.health.openingAndroid': 'Abrindo o Health Connect…',
  'onboarding.health.promise': 'Seus dados de saúde nunca saem deste aparelho.',
  'onboarding.health.unavailable': 'O Saúde não está disponível aqui - você pode seguir sem ele.',
  'onboarding.health.declined': 'O acesso ao Saúde foi recusado. Seu plano funciona sem ele.',
  'onboarding.health.empty': 'Conectado - ainda sem dados. Eles aparecem conforme você se mexe.',

  // ── Watch ────────────────────────────────────────────────────────────────
  'onboarding.watch.title': 'Você usa relógio?',
  'onboarding.watch.blurb': 'Só para sabermos se precisa conectar alguma coisa.',
  'onboarding.watch.apple': 'Apple Watch',
  'onboarding.watch.appleCaption': 'Já funciona tudo',
  'onboarding.watch.garmin': 'Garmin',
  'onboarding.watch.whoop': 'Whoop',
  'onboarding.watch.switchCaption': 'Uma opção para ativar',
  'onboarding.watch.none': 'Sem relógio',
  'onboarding.watch.noneCaption': 'O celular no bolso já basta',

  // ── Watch sync ───────────────────────────────────────────────────────────
  'onboarding.watchSync.title': 'Ative a sincronização com o Saúde',
  'onboarding.watchSync.blurb': 'Uma opção dentro do app que você já usa.',
  'onboarding.watchSync.open': 'Abrir {app}',
  'onboarding.watchSync.garminApp': 'Garmin Connect',
  'onboarding.watchSync.garmin1': 'Abra o Garmin Connect e vá em Mais.',
  'onboarding.watchSync.garmin2': 'Toque em Configurações e depois em Apple Saúde.',
  'onboarding.watchSync.garmin3': 'Ative as categorias que você quer compartilhar.',
  'onboarding.watchSync.whoopApp': 'Whoop',
  'onboarding.watchSync.whoop1': 'Abra o Whoop e toque em More.',
  'onboarding.watchSync.whoop2': 'Abra App Settings e depois Integrations.',
  'onboarding.watchSync.whoop3': 'Toque em Apple Health e ative.',

  // ── Notifications ────────────────────────────────────────────────────────
  'onboarding.notify.title': 'Ative as notificações',
  'onboarding.notify.blurb': 'Para o seu plano avisar quando precisar de você.',
  'onboarding.notify.askNamed': 'Conte com a gente, {name}',
  'onboarding.notify.ask': 'Conte com a gente',
  'onboarding.notify.askBlurb': 'Só nos dias em que seu plano tem sessão.',
  'onboarding.notify.promise1': 'Um lembrete nos dias em que seu plano tem sessão',
  'onboarding.notify.promise2': 'Um aviso quando o plano mudar o que você vai fazer',
  'onboarding.notify.promise3': 'E de vez em quando um desconto - nada mais.',
  'onboarding.notify.bannerApp': 'Walkito',
  'onboarding.notify.bannerTime': 'agora',
  'onboarding.notify.bannerBody':
    'Hoje é dia de força nos pés - 7 minutos. Suas canelas vão agradecer.',
  'onboarding.notify.turnOn': 'Ativar notificações',
  'onboarding.notify.opening': 'Abrindo…',
  'onboarding.notify.notNow': 'Agora não',
  'onboarding.notify.declined': 'Tudo bem - você pode ativar depois em Ajustes.',

  // ── Building ─────────────────────────────────────────────────────────────
  'onboarding.building.title': 'Montando seu plano',
  'onboarding.building.blurb': 'Colocando tudo o que você me contou na primeira semana.',
  'onboarding.building.line1': 'Conhecendo você',
  'onboarding.building.line3': 'Seu plano está pronto',
  'onboarding.building.cta': 'Começar meu treino',
  'onboarding.building.reflectionBoth': '{pain}, {volume}.',
  'onboarding.building.reflectionPain': '{pain}.',
  'onboarding.building.reflectionVolume': '{volume}.',
  'onboarding.pattern.heel': 'Esse é o padrão mais comum que existe. E também o que responde mais rápido.',
  'onboarding.pattern.foot': 'O arco não é fraco sozinho. O que o sustenta é que precisa de força.',
  'onboarding.pattern.achilles':
    'A carga subiu mais rápido do que o tendão se adaptou. Isso tem jeito.',
  'onboarding.pattern.shin':
    'O volume passou à frente das suas pernas. O plano dá um passo atrás e depois constrói.',
  'onboarding.pattern.calf': 'A panturrilha puxa tudo o que está abaixo dela. Solte-a e o resto acompanha.',
  'onboarding.pattern.none': 'Você chegou antes de doer. Esse é o jeito mais fácil de fazer isso.',
  'onboarding.building.promise': 'Primeiras mudanças: do dia 12 ao 16.',

  // ── Reflection parts ─────────────────────────────────────────────────────
  'onboarding.reflection.painHeel': 'Dor no calcanhar',
  'onboarding.reflection.painFoot': 'Dor no pé',
  'onboarding.reflection.painAchilles': 'Dor no tendão de Aquiles',
  'onboarding.reflection.painShin': 'Dor na canela',
  'onboarding.reflection.painCalf': 'Dor na panturrilha',
  'onboarding.reflection.volumeWeekly': '{band} por semana',
  'onboarding.reflection.volumeMonthly': '{band} por mês',

  // ── Plan ─────────────────────────────────────────────────────────────────
  'onboarding.sendPlan.title': 'Enviar seu plano\npara o seu e-mail?',
  'onboarding.sendPlan.blurb': 'Opcional. Alguns e-mails curtos nas duas primeiras semanas, e você pode desativar quando quiser.',
  'onboarding.sendPlan.placeholder': 'voce@exemplo.com',
  'onboarding.sendPlan.send': 'Enviar',
  'onboarding.plan.title': 'Seu plano',
  'onboarding.plan.blurb': 'Feito a partir das suas respostas.',
  'onboarding.plan.wordmarkMomentum': 'Embalo',
  'onboarding.plan.wordmarkFoundations': 'Alicerce',
  'onboarding.plan.meta': {
    one: '{count} sessão por semana',
    other: '{count} sessões por semana',
  },
  'onboarding.plan.week': 'Semana {n}',
  'onboarding.plan.weeks': 'Semanas {from}–{to}',
  'onboarding.plan.weeksOn': 'Semanas {from}+',
  'onboarding.plan.phaseSettle': 'acalmar a irritação',
  'onboarding.plan.phaseBuild': 'fortalecer o arco',
  'onboarding.plan.phaseLoad': 'voltar à carga total',
  'onboarding.plan.reflectionBoth':
    '{pain} e {volume}. As duas primeiras semanas acalmam tudo antes de qualquer carga.',
  'onboarding.plan.reflectionPain':
    '{pain}. As duas primeiras semanas acalmam tudo antes de qualquer carga.',
  'onboarding.plan.reflectionVolume':
    '{volume}. As duas primeiras semanas constroem uma base antes de qualquer carga.',

  // ── Contract ─────────────────────────────────────────────────────────────
  'onboarding.contract.title': 'Vamos fazer um contrato, {name}',
  'onboarding.contract.blurb': 'Não comigo. Com você mesmo.',
  'onboarding.contract.hint': 'Assine aqui',
  'onboarding.contract.stampTop': '★ Walkito ★',
  'onboarding.contract.stampText': 'Compromisso',
  'onboarding.contract.stampLine1': 'Dia um',
  'onboarding.contract.stampLine2': 'Começou',
  'onboarding.contract.noteNamed': '{name}, sua assinatura fica neste aparelho.',
  'onboarding.contract.note': 'Sua assinatura fica neste aparelho.',

  // ── Social proof ─────────────────────────────────────────────────────────
  'onboarding.social.welcomeNamed': 'Boas-vindas, {name}',
  'onboarding.social.welcome': 'Boas-vindas',
  'onboarding.social.crest': 'Poucos minutos por dia.\nSem academia, sem achismo.',
  'onboarding.testimonial1.before': 'Diga como o pé está e',
  'onboarding.testimonial1.lead': 'a sessão do dia se ajusta',
  'onboarding.testimonial1.after': ' a isso.',
  'onboarding.testimonial1.name': 'Toda manhã',
  'onboarding.testimonial2.before': 'Exercícios curtos e guiados',
  'onboarding.testimonial2.lead': 'em casa ou no trabalho',
  'onboarding.testimonial2.after': ' - um chão e uma parede bastam.',
  'onboarding.testimonial2.name': 'Toda sessão',
  'onboarding.testimonial3.before': 'Uma reavaliação de um minuto',
  'onboarding.testimonial3.lead': 'mostra o que realmente mudou',
  'onboarding.testimonial3.after': ', em números e não em impressões.',
  'onboarding.testimonial3.name': 'A cada duas semanas',

  // ── Outlook ──────────────────────────────────────────────────────────────
  'onboarding.outlook.title': '{name}, é para cá que isso vai',
  'onboarding.outlook.blurb': 'O que dói hoje, e o que o plano faz a respeito.',
  'onboarding.outlook.blurbNone': 'Suas pernas hoje, e para onde o plano as leva.',
  'onboarding.outlook.today': 'Hoje',
  'onboarding.outlook.month': 'Mês {n}',
  'onboarding.outlook.pain0': 'Dolorido',
  'onboarding.outlook.pain1': 'Acalmando',
  'onboarding.outlook.pain2': 'Aliviando',
  'onboarding.outlook.pain3': 'Mais calmo',
  'onboarding.outlook.strength0': 'Ponto de partida',
  'onboarding.outlook.strength1': 'Acordando',
  'onboarding.outlook.strength2': 'Crescendo',
  'onboarding.outlook.strength3': 'Mais forte',
  'onboarding.outlook.footnote': 'Uma ilustração de como o plano avança, não uma previsão. Cada pessoa se recupera no seu ritmo.',

  // ── Referral ─────────────────────────────────────────────────────────────
  'onboarding.referral.title': 'Tem um código de convite?',
  'onboarding.referral.blurb': 'Digite e ganhe {percent}% de desconto na assinatura anual.',
  'onboarding.referral.applied': '{percent}% de desconto na assinatura anual aplicado.',
  'onboarding.referral.unlocked': 'Código aceito. O Walkito Premium está ativado.',
  'onboarding.referral.unknown': 'Não conhecemos esse código. Confira e tente de novo.',
  'onboarding.referral.own': 'Esse código é seu. Mande para outra pessoa.',
  'onboarding.referral.already': 'Você já usou um código.',
  'onboarding.referral.unavailable': 'Os convites não estão disponíveis nesta versão.',
  'onboarding.referral.failed': 'Não foi possível falar com o servidor. Tente de novo daqui a pouco.',

  // ── The note at the end of onboarding ────────────────────────────────────
  // Draft - see the comment in en/onboarding.ts.
  'onboarding.note.title': 'Um recado nosso',
  'onboarding.note.body1':
    'Oi, eu sou o Rahim. Eu e um amigo fazemos o Walkito, só nós dois. Muita gente sente dor no calcanhar: palmilhas, um terceiro par de tênis - e de manhã continua mancando. Os exercícios que ajudam são bem conhecidos. Ninguém diz quais, nem quantos. Então foi isso que fizemos.',
  'onboarding.note.body2':
    'Uma avaliação sua significaria muito. De verdade, faz diferença para nós. Obrigado por estar aqui.',
  'onboarding.note.signature': 'Rahim e Rahman',
  'onboarding.note.cta': 'Avaliar o Walkito',
  'onboarding.note.later': 'Agora não',
};
