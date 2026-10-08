/**
 * Home, Brazilian Portuguese.
 *
 * Two exports, mirroring `../en/home.ts`: the phrases numbers arrive in, and
 * the sentences themselves as ordered segments.
 *
 * `você` throughout, Brazilian vocabulary ("panturrilha", "academia",
 * "celular", "bolso"). Where a figure comes from the Saúde app, the word the
 * Saúde app itself uses in Portuguese wins ("lances de escada"), so the figure
 * matches what the user can go and check.
 *
 * Gendered agreement about the user is avoided rather than guessed at:
 * "sentado/sentada" becomes "sem ficar em pé", which stays true for everyone.
 *
 * The `many` plural form is left out everywhere: in Portuguese it is the
 * whole-millions form, and no count in this app reaches a million.
 *
 * **Register:** a coach. The health lines compare the person to themselves and
 * never to a norm - "acima da sua média", never "alto", never "mancando".
 */

import type { BriefVariants } from '@/shared/ui/daily-brief';

export const HOME_PT = {
  'home.greeting.morning': 'Bom dia',
  'home.greeting.afternoon': 'Boa tarde',
  'home.greeting.evening': 'Boa noite',

  // ── The kind of work a day is ────────────────────────────────────────────
  'home.workStrength': 'força de pé e panturrilha',
  'home.workMobility': 'alongamento',
  'home.workBalance': 'trabalho de equilíbrio',
  'home.workRecovery': 'recuperação leve',
  'home.fallbackMove': 'elevações de calcanhar',

  // ── Counted phrases ──────────────────────────────────────────────────────
  'home.minutes': { one: '{count} minuto', other: '{count} minutos' },
  'home.moves': { one: '{count} exercício', other: '{count} exercícios' },
  'home.tests': { one: '{count} teste', other: '{count} testes' },
  'home.weeks': { one: '{count} semana', other: '{count} semanas' },
  'home.points': { one: '{count} ponto', other: '{count} pontos' },
  'home.flights': { one: '{count} lance de escada', other: '{count} lances de escada' },
  'home.hoursOnFeet': { one: '{count} hora', other: '{count} horas' },
  'home.thresholdHours': { one: '{count} hora', other: '{count} horas' },
  'home.daysInARow': { one: '{count} dia seguido', other: '{count} dias seguidos' },
  'home.dayNumber': 'dia {count}',
  'home.dayOfPlan': 'dia {day} de {total}',
  'home.steps': { one: '{steps} passo', other: '{steps} passos' },

  // With the preposition, contracted where Portuguese contracts it: "voltar
  // ao tênis", "voltar à academia", and a verb for running.
  'home.backTo.running': 'a correr',
  'home.backTo.tennis': 'ao tênis',
  'home.backTo.gym': 'à academia',
  'home.backTo.football': 'ao futebol',
  'home.backTo.basketball': 'ao basquete',
  'home.backTo.cycling': 'à bicicleta',
  'home.backTo.hiking': 'às trilhas',

  // ── Units ────────────────────────────────────────────────────────────────
  'home.km': '{value} km',
  'home.percent': '{value}%',
  'home.duration': '{hours} h {minutes} min',

  // ── Today's list ─────────────────────────────────────────────────────────
  'home.tasksTitle': 'Tarefas de hoje',
  'home.libraryTitle': 'Para agora',
  'home.allDoneTitle': 'Feito por hoje',
  'home.allDoneBlurb': 'Hoje não precisa de mais nada.',
  'home.retestTask': 'Reavaliação',
  'home.retestTaskSub': 'Checkpoint · {tests}',
  'home.seeResults': 'Ver resultados',
  'home.nothingScheduled': 'Nada programado para hoje. Descanso também conta.',
  'home.markDone': 'Marcar como feito',
  'home.markNotDone': 'Desmarcar',
  'home.taskSubtitle': '{category} · {dose}',
  'home.taskA11y': '{title}. {subtitle}',
  'home.chipSeconds': '{count} s',
  'home.chipMinutes': '{count} min',

  // ── The check-in ─────────────────────────────────────────────────────────
  'home.itHurts': 'Hoje está doendo',
  'home.noPain': 'Hoje sem dor',
  'home.logCheckIn': 'Registrar o check-in de hoje',
  'home.checkInAgain': 'Fazer check-in de novo',
  'home.checkInTitle': 'Check-in de hoje',
  'home.checkInSub': 'Como está o pé?',
  'home.checkInSubMorning': 'Quanto doeram seus primeiros passos ao sair da cama hoje de manhã?',
  'home.checkInSubDay': 'Como está seu pé hoje?',
  'home.somethingNew': 'Algo novo? (inchaço, dormência, um estalo)',
  'safety.title': 'Algo novo?',
  'safety.sub': 'Toque no que estiver acontecendo agora.',
  'safety.a1': 'Minha panturrilha está inchada, quente ou vermelha de um lado, ou estou com falta de ar ou dor no peito',
  'safety.a2': 'Senti um estalo repentino atrás do tornozelo e não consigo ficar na ponta do pé com essa perna',
  'safety.a3': 'Tenho diabetes e meu pé está quente, vermelho, inchado ou com uma ferida aberta',
  'safety.b1': 'Começou depois de uma queda, uma torção ou uma pancada e não consigo apoiar todo o peso',
  'safety.b2': 'Consigo apontar com um dedo um ponto dolorido no osso, ou dói ao apertar as laterais do calcanhar',
  'safety.b3': 'A dor me acorda à noite ou continua forte quando estou em repouso',
  'safety.b4': 'Estou com febre ou me sentindo mal',
  'safety.c1': 'Queimação, formigamento ou dormência no pé',
  'safety.c2': 'Os dois calcanhares doem e outras articulações ficam inchadas ou rígidas de manhã',
  'safety.c3': 'Um dos arcos ficou plano sozinho já na vida adulta',
  'safety.c4': 'Tenho diabetes ou menos sensibilidade nos pés',
  'safety.c5': 'Tomei uma injeção de corticoide no calcanhar ou no tendão de Aquiles nas últimas 3 semanas',
  'safety.common': 'Dolorido ou mancando depois de um dia longo? Isso é comum com dor no calcanhar - pode continuar.',
  'safety.none': 'Nada disso',
  'safety.check': 'Pronto',
  'safety.resultA': 'Por favor, não treine hoje. Isso precisa de um médico agora - ligue para a emergência ou vá ao pronto-socorro.',
  'safety.resultB1': 'Por favor, peça para avaliarem isso logo. Até lá, vá com calma.',
  'safety.resultB2': 'Vale a pena comentar com um médico quando puder.',
  'safety.resultNone': 'Nada aqui precisa de um médico agora. Siga com o plano.',
  'safety.close': 'Fechar',
  'home.save': 'Salvar',
  'home.saved': 'Salvo',
  // Nothing here congratulates a number: meeting a seven with warmth teaches
  // people to stop reporting honestly.
  'home.ackGood': 'Certo.',
  'home.ackLogged': 'Registrado.',
  'home.ackLoggedShorter': 'Registrado. Por isso a sessão de hoje está mais curta.',

  // ── The leg map ──────────────────────────────────────────────────────────
  'home.whereItHurts': 'Onde dói',
  'home.zonesEmpty': 'Toque onde dói - até {count}',
  'home.zonesFull': 'Até {count} por vez - toque em um para trocar',
  'home.zonesPicked': '{zones} - depois {move}',
  'home.zoneJoin': ' · ',

  /** Names a person finds on their own leg, not labels from an anatomy chart. */
  'home.zone.calf': 'Panturrilha',
  'home.zone.soleus': 'Sóleo',
  'home.zone.tibia': 'Canela',
  'home.zone.tibAnt': 'Frente da canela',
  'home.zone.ankle': 'Tornozelo',
  'home.zone.achilles': 'Tendão de Aquiles',
  'home.zone.heel': 'Calcanhar',
  'home.zone.dorsum': 'Peito do pé',
  'home.zone.arch': 'Arco do pé',
  'home.zone.ball': 'Planta do pé',
  'home.zone.toes': 'Dedos do pé',
  'home.zone.innerAnkle': 'Parte interna do tornozelo',

  // ── The pain scale ───────────────────────────────────────────────────────
  'home.painToday': 'Dor hoje',
  'home.morePain': 'Mais dor',
  'home.lessPain': 'Menos dor',
  'home.painValueA11y': '{score} de {max}, {band}',
  // Always against this person's own range, never a norm.
  'home.rangeAbove': 'Acima da sua faixa habitual',
  'home.rangeBelow': 'Abaixo da sua faixa habitual',
  'home.rangeWithin': 'Dentro da sua faixa habitual',
  // Shorter than the full line: the chip is narrow, and VoiceOver reads the rest.
  'home.rangeAboveChip': 'Acima do habitual',
  'home.rangeBelowChip': 'Abaixo do habitual',
  'home.rangeWithinChip': 'Dentro do habitual',
  'home.usualRangeLegend': 'Faixa habitual {low}–{high}',
  'home.usualRangeA11y': 'Faixa habitual, de {low} a {high}',

  /**
   * What each score means, as what the pain stops you doing, never an
   * adjective. The person is rating their own body: these describe, they do
   * not grade.
   */
  'home.bandNothing': 'Nada',
  'home.bandNothingBlurb': 'Nenhuma dor para registrar hoje.',
  'home.bandBarely': 'Quase nada',
  'home.bandBarelyBlurb': 'Você esqueceria se ninguém perguntasse.',
  'home.bandNoticeable': 'Dá para notar',
  'home.bandNoticeableBlurb': 'Você sente, mas não muda nada do que você faz.',
  'home.bandSore': 'Incomoda',
  'home.bandSoreBlurb': 'Você já se desvia dela sem pensar.',
  'home.bandHurts': 'Dói',
  'home.bandHurtsBlurb': 'Agora ela está decidindo coisas por você.',
  'home.bandSevere': 'Forte',
  'home.bandSevereBlurb': 'O problema é ficar em pé, não correr.',
};

export const BRIEF_PT = {
  // ── Pain, the user's own report ──────────────────────────────────────────
  flare: [
    [
      { k: 'frame', text: 'hoje são' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: ',' },
      { k: 'frame', text: 'sem ficar em pé. Só isso.' },
    ],
    [
      { k: 'frame', text: 'manhã difícil. Hoje são só' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: '.' },
      { k: 'frame', text: 'Nada mais.' },
    ],
    [
      { k: 'frame', text: 'hoje a gente alivia a carga -' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: ',' },
      { k: 'frame', text: 'sem peso no pé.' },
    ],
  ],

  'pain-spike': [
    [
      { k: 'frame', text: 'suas manhãs estão' },
      { k: 'metric', icon: 'warn', text: '{jump}', tone: 'warn' },
      { k: 'frame', text: 'acima da semana passada. Hoje a gente pega mais leve.' },
    ],
    [
      { k: 'frame', text: 'esta semana está' },
      { k: 'metric', icon: 'warn', text: '{jump}', tone: 'warn' },
      { k: 'frame', text: 'pior que a anterior. Dia mais leve.' },
    ],
    [
      { k: 'frame', text: 'a dor está' },
      { k: 'metric', icon: 'warn', text: 'acima da sua média', tail: '.', tone: 'warn' },
      { k: 'frame', text: 'Hoje a gente reduz.' },
    ],
  ],

  // ── The programme's own structure ────────────────────────────────────────
  baseline: [
    [
      { k: 'frame', text: 'hoje não é treino, são' },
      { k: 'metric', icon: 'retest', text: '{tests}' },
      { k: 'frame', text: '- para ter com o que comparar depois.' },
    ],
    [
      { k: 'frame', text: 'o primeiro dia são' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: ',' },
      { k: 'frame', text: 'uns quatro minutos. Este é o seu ponto de partida.' },
    ],
    [
      { k: 'frame', text: 'a gente começa com' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: '.' },
      { k: 'frame', text: 'Em duas semanas vemos o que mudou.' },
    ],
  ],

  retest: [
    [
      { k: 'frame', text: 'já se passaram' },
      { k: 'metric', icon: 'retest', text: '{weeks}', tail: '.' },
      { k: 'frame', text: 'Hora de ver o que mudou.' },
    ],
    [
      { k: 'frame', text: 'dia de checkpoint -' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: ',' },
      { k: 'value', text: '{testMinutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'vamos medir:' },
      { k: 'metric', icon: 'retest', text: '{testMinutes}', tail: ',' },
      { k: 'frame', text: 'e vamos saber onde você está.' },
    ],
  ],

  'checkpoint-recap': [
    [
      { k: 'frame', text: 'uma semana nova começa hoje. Foco:' },
      { k: 'metric', icon: 'level', text: '{block}', tail: '.' },
    ],
    // The hedge stays: "a maioria" and "costuma".
    [
      { k: 'frame', text: 'semana nova hoje. A maioria das pessoas sente as manhãs mais leves em' },
      { k: 'metric', icon: 'level', text: '4-6 semanas', tail: '.' },
      { k: 'frame', text: 'A maior mudança costuma vir por volta dos 3 meses.' },
    ],
    [
      { k: 'frame', text: 'o foco desta semana é' },
      { k: 'metric', icon: 'level', text: '{block}', tail: '.' },
      { k: 'frame', text: 'O plano é montado em torno disso.' },
    ],
  ],

  // ── The weekly plan ──────────────────────────────────────────────────────
  'goal-reached': [
    [
      { k: 'metric', icon: 'up', text: '{goalDone}' },
      { k: 'frame', text: '- feito. Próximo:' },
      { k: 'metric', icon: 'level', text: '{nextGoal}', tail: '.' },
    ],
  ],
  'missed-yesterday': [
    [
      { k: 'frame', text: 'ontem não deu. Que não sejam dois -' },
      { k: 'metric', icon: 'session', text: '2 minutos', tail: ' hoje?' },
    ],
  ],
  'test-soon': [
    [
      { k: 'frame', text: 'faltam' },
      { k: 'metric', icon: 'retest', text: '{testIn}' },
      { k: 'frame', text: 'para o seu próximo teste.' },
    ],
  ],
  'new-this-week': [
    [
      { k: 'frame', text: 'novo esta semana:' },
      { k: 'metric', icon: 'session', text: '{newMove}', tail: '.' },
    ],
  ],

  'first-week': [
    [
      { k: 'metric', icon: 'streak', text: '{dayOfPlan}', tail: '.' },
      { k: 'frame', text: 'hoje são' },
      { k: 'metric', icon: 'tasks', text: '{moves}' },
      { k: 'frame', text: 'de {work} -' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'primeiros dias -' },
      { k: 'metric', icon: 'streak', text: '{planDay}', tail: ':' },
      { k: 'value', text: '{minutes}' },
      { k: 'frame', text: 'de {work}. Pouco e sempre vale mais que muito e de vez em quando.' },
    ],
    [
      { k: 'metric', icon: 'streak', text: '{planDay}', tail: '.' },
      {
        k: 'frame',
        text: 'hoje é {work}. A primeira semana é sobre aparecer, não sobre esforço.',
      },
    ],
  ],

  // ── Load, from what actually happened ────────────────────────────────────
  'big-run': [
    [
      { k: 'frame', text: 'ontem foi sua' },
      { k: 'metric', icon: 'feet', text: 'corrida mais longa do mês', tail: ' -' },
      { k: 'value', text: '{distance}', tail: '.' },
      { k: 'frame', text: 'Hoje é' },
      { k: 'metric', icon: 'rest', text: 'leve', tail: '.' },
    ],
    [
      { k: 'frame', text: 'foram' },
      { k: 'metric', icon: 'feet', text: '{distance}', tail: ',' },
      { k: 'frame', text: 'mais do que qualquer coisa em quatro semanas. Hoje a gente recupera.' },
    ],
    [
      { k: 'frame', text: 'ontem, a maior corrida do mês. Hoje é' },
      { k: 'metric', icon: 'rest', text: 'recuperação', tail: '.' },
    ],
  ],

  stairs: [
    [
      { k: 'metric', icon: 'level', text: '{flights}' },
      { k: 'frame', text: 'ontem - mais do que na sua semana habitual. Vale um dia leve.' },
    ],
    [
      { k: 'frame', text: 'ontem você subiu mais' },
      { k: 'metric', icon: 'level', text: 'escadas' },
      { k: 'frame', text: 'do que costuma. Escada puxa bastante do arco.' },
    ],
    [
      { k: 'frame', text: 'ontem teve muita' },
      { k: 'metric', icon: 'level', text: 'escada', tail: '.' },
      { k: 'frame', text: 'Hoje vai mais leve.' },
    ],
  ],

  // Five segments where English has six: "the next morning was" / "rough" is
  // one clause in Portuguese.
  'on-feet': [
    [
      { k: 'frame', text: 'você já está há' },
      { k: 'metric', icon: 'feet', text: '{hours}' },
      { k: 'frame', text: 'em pé. Das últimas duas vezes que passou de' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tail: ',', tone: 'warn' },
      { k: 'frame', text: 'a manhã seguinte foi difícil.' },
    ],
    [
      { k: 'frame', text: 'hoje já são' },
      { k: 'metric', icon: 'feet', text: '{hours}' },
      { k: 'frame', text: 'em pé. Passar de' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tone: 'warn' },
      { k: 'frame', text: 'já te custou a manhã seguinte antes.' },
    ],
    [
      { k: 'frame', text: 'o dia já está longo -' },
      { k: 'metric', icon: 'feet', text: '{hours}', tail: '.' },
      { k: 'frame', text: 'Vale sentar por dez minutos.' },
    ],
  ],

  // A question, never a milestone.
  'steps-today': [
    [
      { k: 'frame', text: 'já são' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}' },
      { k: 'frame', text: 'hoje. Como está o calcanhar?' },
    ],
    [
      { k: 'metric', icon: 'feet', text: '{stepsToday}' },
      { k: 'frame', text: 'até agora - bastante. Se o calcanhar estiver doendo, sente um pouco.' },
    ],
    [
      { k: 'frame', text: 'você já deu' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}', tail: '.' },
      { k: 'frame', text: 'Alongue o pé hoje à noite - a manhã de amanhã agradece.' },
    ],
    [
      { k: 'frame', text: 'um dia longo em pé -' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}', tail: '.' },
      { k: 'frame', text: 'Registre como está o calcanhar para o plano saber.' },
    ],
  ],

  // ── Recovery, watch only ─────────────────────────────────────────────────
  'poor-sleep': [
    [
      { k: 'frame', text: 'você dormiu em média' },
      { k: 'metric', icon: 'sleep', text: '{sleep}' },
      { k: 'frame', text: 'esta semana. Os tendões se reconstroem à noite - hoje é' },
      { k: 'metric', icon: 'rest', text: 'mais leve', tail: '.' },
    ],
    [
      { k: 'frame', text: 'noites curtas a semana toda -' },
      { k: 'metric', icon: 'sleep', text: '{sleep}' },
      { k: 'frame', text: 'em média. Hoje a gente tira um pouco.' },
    ],
    [
      { k: 'frame', text: 'o sono tem ficado' },
      { k: 'metric', icon: 'sleep', text: 'abaixo de sete horas', tail: '.' },
      { k: 'frame', text: 'Hoje é mais leve de propósito.' },
    ],
  ],

  'resting-hr': [
    [
      { k: 'frame', text: 'sua frequência cardíaca em repouso está' },
      { k: 'metric', icon: 'level', text: 'um pouco mais alta', tail: '.' },
      { k: 'frame', text: 'Hoje puxa para a recuperação.' },
    ],
    [
      { k: 'frame', text: 'o pulso em repouso está' },
      { k: 'metric', icon: 'level', text: 'acima do seu habitual', tail: '.' },
      { k: 'frame', text: 'Vamos com calma.' },
    ],
    [
      { k: 'frame', text: 'seu corpo ainda está se recuperando -' },
      { k: 'metric', icon: 'level', text: 'pulso em repouso mais alto', tail: '.' },
      { k: 'frame', text: 'Mais leve hoje.' },
    ],
  ],

  // ── Gait, demoted ────────────────────────────────────────────────────────
  'slower-walk': [
    [
      { k: 'frame', text: 'você andou' },
      { k: 'metric', icon: 'gait', text: 'mais devagar que o seu habitual' },
      { k: 'frame', text: 'a semana toda. Isso costuma acompanhar um pé dolorido.' },
    ],
    [
      { k: 'frame', text: 'seu ritmo de caminhada está' },
      { k: 'metric', icon: 'gait', text: 'abaixo da sua média', tail: '.' },
      { k: 'frame', text: 'Vale notar, não se preocupar.' },
    ],
    [
      { k: 'frame', text: 'passos mais lentos que o seu habitual esta semana.' },
      { k: 'metric', icon: 'gait', text: 'Nada alarmante' },
      { k: 'frame', text: '- mas hoje a gente mantém leve.' },
    ],
  ],

  'gait-change': [
    [
      { k: 'frame', text: 'seus passos ficaram' },
      { k: 'metric', icon: 'gait', text: 'menos regulares', tone: 'warn' },
      { k: 'frame', text: '-' },
      { k: 'value', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'contra o seu habitual' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'menos regulares que o seu habitual esta semana -' },
      { k: 'metric', icon: 'gait', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'contra o seu habitual' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'algo mudou no seu jeito de andar.' },
      { k: 'metric', icon: 'gait', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'contra os seus' },
      { k: 'value', text: '{usual}', tail: '.' },
      { k: 'frame', text: 'Isso costuma acontecer quando algo dói.' },
    ],
  ],

  // ── Done, and coming back ────────────────────────────────────────────────
  done: [
    [
      { k: 'frame', text: 'feito por hoje.' },
      { k: 'metric', icon: 'done', text: '{days}', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Até amanhã.' },
    ],
    [
      { k: 'frame', text: 'hoje está resolvido -' },
      { k: 'metric', icon: 'done', text: '{days}', tone: 'good' },
      { k: 'frame', text: 'e contando.' },
    ],
    [
      { k: 'frame', text: 'sessão feita - é o' },
      { k: 'metric', icon: 'done', text: '{streakDay}' },
      { k: 'frame', text: 'da sua sequência atual.' },
    ],
  ],

  returning: [
    [
      { k: 'frame', text: 'que bom te ver de volta. Você tem' },
      { k: 'metric', icon: 'session', text: 'uma sessão curta' },
      { k: 'frame', text: 'para retomar aos poucos.' },
    ],
    [
      { k: 'frame', text: 'bom te ver. Hoje a gente começa' },
      { k: 'metric', icon: 'session', text: 'pequeno', tail: '.' },
    ],
    [
      { k: 'frame', text: 'de volta - a gente continua de onde você parou, só que' },
      { k: 'metric', icon: 'session', text: 'mais leve', tail: '.' },
    ],
  ],

  // ── Good news, gated behind a quiet morning ──────────────────────────────
  'pain-down': [
    [
      { k: 'frame', text: 'suas manhãs estão' },
      { k: 'metric', icon: 'up', text: 'mais leves', tone: 'good' },
      { k: 'frame', text: '-' },
      { k: 'value', text: '{drop}', tone: 'good' },
      { k: 'frame', text: 'a menos este mês.' },
    ],
    [
      { k: 'frame', text: 'este mês caiu' },
      { k: 'metric', icon: 'up', text: '{drop}', tail: '.', tone: 'good' },
      { k: 'frame', text: 'É uma mudança de verdade, não ruído.' },
    ],
    [
      { k: 'frame', text: 'as últimas duas semanas foram' },
      { k: 'metric', icon: 'up', text: 'mais tranquilas', tone: 'good' },
      { k: 'frame', text: 'que as duas anteriores.' },
    ],
  ],

  'walk-back': [
    [
      { k: 'frame', text: 'seu ritmo de caminhada' },
      { k: 'metric', icon: 'done', text: 'voltou ao seu habitual', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Bom sinal.' },
    ],
    [
      { k: 'frame', text: 'o ritmo' },
      { k: 'metric', icon: 'done', text: 'se acomodou', tone: 'good' },
      { k: 'frame', text: 'de novo onde costuma ficar.' },
    ],
    [
      { k: 'frame', text: 'você voltou a andar na' },
      { k: 'metric', icon: 'done', text: 'sua velocidade de sempre', tail: '.', tone: 'good' },
    ],
  ],

  'gait-recovered': [
    [
      { k: 'frame', text: 'sua caminhada está' },
      { k: 'metric', icon: 'done', text: 'regular de novo', tail: '.', tone: 'good' },
      { k: 'frame', text: 'De volta a' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'os passos estão' },
      { k: 'metric', icon: 'done', text: 'equilibrados de novo', tone: 'good' },
      { k: 'frame', text: '- dois dias seguidos.' },
    ],
    [
      { k: 'frame', text: 'isso se acertou.' },
      { k: 'metric', icon: 'done', text: 'De volta ao seu habitual', tail: '.', tone: 'good' },
    ],
  ],

  // ── Honest emptiness ─────────────────────────────────────────────────────
  learning: [
    [
      { k: 'frame', text: 'ainda estou aprendendo como você anda. Me dê' },
      { k: 'metric', icon: 'window', text: 'mais alguns dias' },
      { k: 'frame', text: 'com o celular no bolso.' },
    ],
    [
      { k: 'frame', text: 'ainda estou entendendo o seu habitual -' },
      { k: 'metric', icon: 'window', text: 'mais alguns dias' },
      { k: 'frame', text: 'devem bastar.' },
    ],
    [
      { k: 'frame', text: 'ainda não tenho histórico seu suficiente.' },
      { k: 'metric', icon: 'window', text: 'Mais alguns dias' },
      { k: 'frame', text: 'e eu consigo comparar.' },
    ],
  ],

  // ── Their goal ───────────────────────────────────────────────────────────
  // A direction, never a promise about the outcome.
  'goal-back': [
    [
      { k: 'frame', text: 'cada sessão é mais um passo para voltar' },
      { k: 'metric', icon: 'session', text: '{backTo}', tail: '.' },
      { k: 'frame', text: 'Hoje:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'voltar' },
      { k: 'metric', icon: 'session', text: '{backTo}' },
      { k: 'frame', text: 'leva dias como este. Hoje:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'hoje' },
      { k: 'value', text: '{minutes}' },
      { k: 'frame', text: '- e você fica um pouco mais perto de voltar' },
      { k: 'metric', icon: 'session', text: '{backTo}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'um pouco por dia é como as pessoas voltam' },
      { k: 'metric', icon: 'session', text: '{backTo}', tail: '.' },
    ],
  ],

  'goal-consistent': [
    [
      { k: 'frame', text: 'já são' },
      { k: 'metric', icon: 'streak', text: '{days}', tail: '.' },
      { k: 'frame', text: 'Siga assim.' },
    ],
    [
      { k: 'frame', text: 'você queria constância - aqui está:' },
      { k: 'metric', icon: 'streak', text: '{days}', tail: '.' },
    ],
    [
      { k: 'metric', icon: 'streak', text: '{days}', tail: '.' },
      { k: 'frame', text: 'A sessão de hoje é só' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
  ],

  'goal-stronger': [
    [
      { k: 'frame', text: 'força vem da repetição. Hoje:' },
      { k: 'metric', icon: 'level', text: '{work}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'hoje é' },
      { k: 'metric', icon: 'level', text: '{work}', tail: '.' },
      { k: 'frame', text: 'Quanto mais vezes, mais força.' },
    ],
    [
      { k: 'frame', text: 'ficar mais forte é um pouco, mas sempre. Hoje:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
  ],

  'goal-injuryfree': [
    [
      { k: 'frame', text: 'a melhor proteção contra lesões é um pouco todo dia. Hoje:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'um pé forte se machuca menos. Hoje ele ganha' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'value', text: '{minutes}' },
      { k: 'frame', text: 'por dia bastam para ficar à frente das lesões.' },
    ],
  ],

  'no-data': [
    [
      { k: 'frame', text: 'não consigo ler sua caminhada - deixe o celular no' },
      { k: 'metric', icon: 'pocket', text: 'bolso', tail: ',' },
      { k: 'frame', text: 'não na bolsa, e eu capto.' },
    ],
    [
      { k: 'frame', text: 'nenhum dado de caminhada chegando. Precisa do celular no' },
      { k: 'metric', icon: 'pocket', text: 'bolso' },
      { k: 'frame', text: 'em terreno plano.' },
    ],
    [
      { k: 'frame', text: 'nada para ler ainda - os sensores precisam do celular no' },
      { k: 'metric', icon: 'pocket', text: 'bolso' },
      { k: 'frame', text: 'enquanto você anda.' },
    ],
  ],

  // ── Most days ────────────────────────────────────────────────────────────
  'quiet-session': [
    [
      { k: 'frame', text: 'hoje é' },
      { k: 'metric', icon: 'session', text: '{move}' },
      { k: 'frame', text: '- o exercício que sustenta este plano.' },
    ],
  ],

  'quiet-progress': [
    [
      { k: 'metric', icon: 'streak', text: '{dayOfPlan}', tail: '.' },
      { k: 'frame', text: 'Você já passou da parte difícil, que é começar.' },
    ],
  ],

  'quiet-load-big': [
    [
      { k: 'frame', text: 'ontem foi um dia longo em pé -' },
      { k: 'metric', icon: 'feet', text: '{steps}', tail: '.' },
      { k: 'frame', text: 'Contexto, não um veredito.' },
    ],
  ],

  'quiet-load-light': [
    [
      { k: 'frame', text: 'ontem foi um' },
      { k: 'metric', icon: 'feet', text: 'dia mais leve' },
      { k: 'frame', text: 'em pé. Bom dia para colocar um pouco mais de carga.' },
    ],
  ],

  'quiet-shoes': [
    [
      { k: 'frame', text: 'uma ideia sobre tênis: um' },
      { k: 'metric', icon: 'level', text: 'calcanhar mais firme' },
      { k: 'frame', text: 'e um pouco mais de drop tiram carga do arco.' },
    ],
  ],

  'quiet-cadence': [
    [
      { k: 'frame', text: 'se for correr hoje, mantenha a cadência cerca de' },
      { k: 'metric', icon: 'up', text: '{cadence} acima do seu habitual', tail: '.' },
      { k: 'frame', text: 'Passos mais curtos, menos carga no calcanhar.' },
    ],
  ],

  'quiet-horizon': [
    [
      { k: 'frame', text: 'a maior parte da mudança aqui aparece' },
      { k: 'metric', icon: 'window', text: 'cedo', tail: '.' },
      { k: 'frame', text: 'Você está nessa janela.' },
    ],
  ],
} satisfies Record<string, BriefVariants>;
