/**
 * Notifications, Brazilian Portuguese.
 *
 * `você` throughout, Brazilian vocabulary ("panturrilha", "celular").
 *
 * The rules of `../en/notifications.ts` hold here word for word: nothing
 * cheerful after pain (no "!", no "ótimo", no "parabéns", no "arrasou"), no
 * streak number outside `streak.*` and never the word "sequência" in a morning
 * nudge, and the gait lines compare the person only to themselves (no
 * "mancando", no "compensando", no "lesão", no "média", no "normal").
 *
 * Gendered agreement is avoided rather than guessed at. English's "sitting
 * down" would be "sentado/sentada" and the app does not know which, so the line
 * says "sem sair da cadeira" and stays true for everyone.
 *
 * The `many` plural form is the whole-millions one and is left out everywhere.
 * `{steps}` is already grouped for the locale while `count` is the same number
 * raw, which is what selects the form.
 *
 * `{block}` arrives in English: block names live in `@/entities/program` and
 * are not translated anywhere yet.
 */

export const NOTIFICATIONS_PT = {
  // ── What kind of day it is ───────────────────────────────────────────────
  /** Android's name for the app's notification channel, shown in system settings. */
  'notifications.channelName': 'Lembretes',
  'notifications.kindStrength': 'Treino de força',
  'notifications.kindMobility': 'Treino de mobilidade',
  'notifications.kindBalance': 'Treino de equilíbrio',
  'notifications.kindRecovery': 'Treino de recuperação',
  'notifications.kindFoot': 'Treino para o pé',

  // ── The morning nudge ────────────────────────────────────────────────────
  /** The morning reminder, in the words of the intention signed in onboarding. */
  'notifications.morningIntention': 'Ao acordar, antes de ficar em pé, faça seu alongamento do pé.',
  'notifications.sessionStrength': {
    one: 'Hoje é força do pé. {count} minuto.',
    other: 'Hoje é força do pé. {count} minutos.',
  },
  'notifications.sessionDay': {
    one: 'Dia {day}. {kind}. {count} minuto.',
    other: 'Dia {day}. {kind}. {count} minutos.',
  },
  'notifications.sessionShort': {
    one: 'Sessão curta hoje - {count} minuto, sem sair da cadeira.',
    other: 'Sessão curta hoje - {count} minutos, sem sair da cadeira.',
  },
  'notifications.sessionBackTo': {
    one: '{count} minuto hoje. Mais um passo para voltar {backTo}.',
    other: '{count} minutos hoje. Mais um passo para voltar {backTo}.',
  },
  'notifications.sessionCalves': {
    one: '{count} minuto. Hoje o compromisso é com as suas panturrilhas.',
    other: '{count} minutos. Hoje o compromisso é com as suas panturrilhas.',
  },
  'notifications.sessionMobility': 'Mobilidade hoje. Nada pesado.',

  // ── Maintenance ──────────────────────────────────────────────────────────
  'notifications.maintenanceDay': {
    one: 'Dia de manutenção. {count} minuto.',
    other: 'Dia de manutenção. {count} minutos.',
  },
  'notifications.maintenanceCheckpoint': 'Checkpoint do mês. Vamos ver se nada voltou atrás.',
  'notifications.maintenanceFourWeeks': 'Quatro semanas estáveis. É exatamente essa a ideia.',

  // ── The morning after a bad day ──────────────────────────────────────────
  // No exclamation mark, no praise, no encouragement: yesterday hurt, and a
  // bright tone here would tell the user the app does not believe them.
  'notifications.flareCheckIn': 'Ontem foi difícil. Faça o check-in quando levantar - se ainda estiver ruim, hoje é algo curto e sem sair da cadeira.',

  // ── A big day on their feet ──────────────────────────────────────────────
  'notifications.loadSteps': {
    one: '{steps} passo ontem - {percent}% acima do seu habitual. Hoje é recuperação.',
    other: '{steps} passos ontem - {percent}% acima do seu habitual. Hoje é recuperação.',
  },
  'notifications.loadBigDay': 'Ontem foi um dia longo em pé. O plano se ajustou.',
  'notifications.loadBackOff': 'Ontem foi puxado. Hoje o plano alivia.',

  // ── The step check-in ────────────────────────────────────────────────────
  // A question about the foot, never a congratulation.
  'notifications.stepsCheck': {
    one: '{steps} passo hoje - um dia longo em pé. Como está o calcanhar?',
    other: '{steps} passos hoje - um dia longo em pé. Como está o calcanhar?',
  },

  // ── Something changed in how they walk ───────────────────────────────────
  // Only change against the person's own baseline. No limping, no
  // compensating, no injury risk, no comparison with anyone else.
  'notifications.gaitUneven': {
    one: 'Seus passos estão irregulares há {count} dia.',
    other: 'Seus passos estão irregulares há {count} dias.',
  },
  'notifications.gaitChanged': 'Algo mudou no seu jeito de andar esta semana.',

  // ── Retest ───────────────────────────────────────────────────────────────
  'notifications.retestTwoWeeks': 'Duas semanas. Hora de ver o que mudou. 3 testes, 4 minutos.',
  'notifications.retestCheckpoint': 'Checkpoint hoje. Sem treino - só três medições.',
  'notifications.retestDay': 'Dia {day}. Vamos descobrir se está funcionando.',
  'notifications.retestFollowUp': 'Os testes continuam abertos. Quatro minutos.',

  // ── A new block opens ────────────────────────────────────────────────────
  'notifications.blockNew': 'Uma semana nova começa hoje. Foco: {block}.',
  'notifications.blockLoadUp': 'O foco desta semana é {block}.',
  'notifications.blockOpens': 'Semana nova, mesmo pé. Esta é sobre {block}.',

  // ── The plan changed, and why ────────────────────────────────────────────
  'notifications.planFlare': 'A dor subiu esta semana, então hoje desce um nível.',
  'notifications.planSpike': 'Ontem foi um dia grande. Hoje retoma mais leve.',
  'notifications.planHeavyDay': 'Ontem foi um dia longo em pé. Hoje vira recuperação.',
  'notifications.planReturn': 'Cinco dias de pausa. Hoje retoma um passo mais fácil.',
  'notifications.planBackUp': 'O incômodo passou - hoje a carga volta a subir.',

  // ── Evening check-in ─────────────────────────────────────────────────────
  'notifications.checkinHow': 'Como foi o pé hoje?',
  'notifications.checkinOneTap': 'Um toque antes de dormir - como ele se sentiu?',
  'notifications.checkinLog': 'Registre hoje e o plano sabe o que fazer amanhã.',

  // ── Streak ───────────────────────────────────────────────────────────────
  // Both lines say what one tap keeps, never what is about to be lost.
  'notifications.streakKeep': {
    one: 'Um toque mantém {count} dia.',
    other: 'Um toque mantém {count} dias.',
  },
  'notifications.streakTap': { one: '{count} dia. Um toque.', other: '{count} dias. Um toque.' },

  // ── Win-back ─────────────────────────────────────────────────────────────
  'notifications.winbackDay3': 'O dia {day} continua aqui quando você quiser.',
  'notifications.winbackDay10': 'O plano segue o calendário, não a presença. Hoje é o dia {day}.',
  'notifications.winbackDay30': 'Continuamos aqui se o pé voltar a dar sinal.',

  // ── Leaving the offer ────────────────────────────────────────────────────
  'notifications.offerWaitNamed': '{name}, antes de ir - {percent}% de desconto',
  'notifications.offerWait': 'Antes de ir - {percent}% de desconto',
  'notifications.offerWaitBody': 'A assinatura anual está esperando por um preço menor. Toque para ver.',

  // ── Programme expiry ─────────────────────────────────────────────────────
  'notifications.expiryTitle': 'Seu acesso ao programa termina em uma semana',
  'notifications.expiryBody': 'Seu progresso fica salvo de qualquer jeito.',
};
