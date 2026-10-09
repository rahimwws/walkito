/**
 * Offer, in Brazilian Portuguese - the paywall and the session player.
 *
 * `você` throughout, Brazilian vocabulary ("assinatura", "celular",
 * "panturrilha"). "Bem-vindo/a" is avoided in the restore celebration for the
 * same reason a coach avoids it: it forces a gender onto somebody the app has
 * never asked.
 *
 * Nothing here is a price. Every amount arrives as `{price}` or `{perWeek}`,
 * already formatted for the user's storefront - see the note in `../en/offer.ts`.
 * Menu paths use the names Apple and Google show in Brazilian Portuguese
 * ("Ajustes → Conta Apple → Assinaturas").
 *
 * The `many` plural form is left out everywhere: in Portuguese it is the
 * whole-millions form, and no count on these screens reaches a million.
 */
export const OFFER_PT = {
  // ── Paywall: what the app is ─────────────────────────────────────────────
  'offer.featurePlanTitle': 'Seu plano, não um modelo pronto',
  'offer.featurePlanBlurb': 'Feito com as respostas que você acabou de dar, e refeito quando elas mudam.',
  'offer.featureAdaptiveTitle': 'Sessões que se adaptam',
  'offer.featureAdaptiveBlurb': 'Cada treino se ajusta a como o anterior realmente foi.',
  'offer.featureProgressTitle': 'Progresso que dá para ver',
  'offer.featureProgressBlurb': 'Veja seu preparo subir semana a semana.',

  // ── Paywall: headline ────────────────────────────────────────────────────
  'offer.comebackBadge': 'Preço de retorno',
  'offer.inviteBadge': 'Seu preço de convite',
  'offer.headline': 'Desbloqueie o Walkito Premium',
  'offer.headlineInvite': 'Seu preço de convite em um ano de Walkito Premium',
  'offer.headlineComeback': 'Seu preço de retorno em um ano de Walkito Premium',
  'offer.sub': 'Seu plano, e tudo em volta dele.',

  // ── Paywall: the two plans ───────────────────────────────────────────────
  'offer.annualTitle': 'Anual',
  'offer.annualPrice': '{price} por ano',
  'offer.annualNote': '{perWeek} por semana, cobrado anualmente',
  'offer.annualNoteSave': '{perWeek} por semana · Economize {percent}% em relação ao semanal',
  'offer.weeklyTitle': 'Semanal',
  'offer.weeklyPrice': '{price} por semana',
  'offer.weeklyNote': 'Cobrado semanalmente · Cancele quando quiser',
  'offer.badgeBest': 'Melhor custo-benefício',
  'offer.badgeOff': '{percent}% de desconto',

  // ── Paywall: billing terms ───────────────────────────────────────────────
  'offer.ctaAnnual': '{price} por ano, renovação automática. Cancele quando quiser.',
  'offer.ctaWeekly': '{price} por semana, renovação automática. Cancele quando quiser.',
  'offer.termsIncluded':
    'O Walkito Premium dá acesso completo: seu plano adaptativo, todas as sessões e rotinas, as reavaliações e o acompanhamento do seu progresso.',
  'offer.termsAnnual': 'Assinatura anual: {price} por ano.',
  'offer.termsWeekly': 'Assinatura semanal: {price} por semana.',
  'offer.termsRenewal':
    'O pagamento é cobrado na sua Conta Apple na confirmação da compra. A assinatura é renovada automaticamente pelo mesmo período e preço, a menos que seja cancelada pelo menos 24 horas antes do fim do período atual, e a renovação é cobrada nas 24 horas antes desse fim. Gerencie ou cancele em Ajustes → Conta Apple → Assinaturas.',
  'offer.termsRenewalAndroid':
    'O pagamento é cobrado na sua conta do Google Play na confirmação da compra. A assinatura é renovada automaticamente pelo mesmo período e preço, a menos que seja cancelada pelo menos 24 horas antes do fim do período atual. Gerencie ou cancele em Google Play → Pagamentos e assinaturas → Assinaturas.',
  'offer.linkTerms': 'Termos de uso',
  'offer.linkPrivacy': 'Política de privacidade',
  'offer.restore': 'Restaurar compras',

  // ── Paywall: what the store said ─────────────────────────────────────────
  'offer.planUnavailable': 'Esse plano não está disponível agora. Tente o outro.',
  'offer.storeUnreachable': 'Não foi possível falar com a loja agora. Tente de novo em instantes.',
  'offer.nothingRestored': 'Nenhuma compra anterior encontrada.',
  'offer.restoreFailed': 'Não deu certo. Nada foi cobrado.',
  'offer.purchaseFailed': 'Não deu certo. Nada foi cobrado.',
  'offer.purchaseNotAllowed': 'As compras estão desativadas neste aparelho.',
  'offer.alreadyOwned': 'Você já tem isso. Toque em "Restaurar compras".',
  'offer.pending': 'Aguardando aprovação. Você terá acesso assim que for concluído.',
  'offer.notUnlocked': 'A compra foi concluída, mas o acesso não foi liberado. Toque em "Restaurar compras".',
  'offer.continue': 'Continuar',
  'offer.processing': 'Processando…',

  // ── Paywall: the celebration ─────────────────────────────────────────────
  'offer.purchasedTitle': 'Tudo pronto.',
  'offer.premium': 'Walkito Premium',
  'offer.purchasedBlurb':
    'Seu plano está desbloqueado e começa a se adaptar a partir da sua próxima sessão.',
  'offer.restoredTitle': 'Que bom te ver de volta.',
  'offer.restoredBlurb': 'Sua assinatura está ativa de novo. Tudo está onde você deixou.',
  'offer.start': 'Começar',

  // ── Paywall: the two steps before it, after onboarding ──────────────────
  'offer.stepA11y': 'Passo {step} de {total}',
  'offer.next': 'Próximo',
  'offer.introTitle': 'É assim que seu plano começa',
  'offer.introTitleNamed': '{name}, é assim que seu plano começa',
  // Under the title: the goal they picked in onboarding, quoted back as theirs.
  'offer.introWhy': '“{why}.”',
  'offer.introTodayWhen': 'Hoje',
  'offer.introTodayTitle': { one: 'Um teste de {count} minuto', other: 'Um teste de {count} minutos' },
  'offer.introTodayBody': 'Panturrilhas, arco e equilíbrio. Seu plano parte desses números.',
  'offer.introWeekWhen': 'Esta semana',
  'offer.introWeekTitle': 'Acalmar as coisas',
  'offer.introWeekBody': {
    one: '{minutes} min por dia, {count} dia por semana. O trabalho de força começa na semana que vem.',
    other: '{minutes} min por dia, {count} dias por semana. O trabalho de força começa na semana que vem.',
  },
  'offer.introSundayWhen': 'Todo domingo',
  'offer.introSundayTitle': 'Uma semana nova, feita a partir da anterior',
  'offer.introSundayBody': 'Mais leve se pareceu difícil, um pouco mais se pareceu fácil.',
  'offer.introCheckTitle': 'Sua primeira avaliação de progresso',
  'offer.introCheckBody': 'O mesmo teste de novo. Veja o que mudou, e depois o próximo passo.',
  'offer.howTitle': 'Alguns minutos por dia. Funciona assim.',
  'offer.howCheckinTitle': 'Faça o check-in toda manhã',
  'offer.howCheckinBody': 'Dez segundos sobre como estão seus pés. O dia é montado a partir disso.',
  'offer.howSessionTitle': 'Faça a sessão do dia',
  'offer.howSessionBody': 'De 3 a 10 minutos. Só fica mais difícil quando a anterior pareceu fácil.',
  'offer.howTestTitle': 'Reavaliação a cada duas semanas',
  'offer.howTestBody': 'Panturrilhas, arco e equilíbrio, medidos. Veja os números mudarem.',
  'offer.howQuote': '“Os exercícios que ajudam são bem conhecidos. Ninguém diz quais, nem quantos. Então foi isso que fizemos.”',
  'offer.howQuoteBy': 'Rahim, que faz o Walkito com seu amigo Rahman',
  'offer.startTitle': 'Comece seu plano hoje',
  'offer.startSub': 'Sua primeira semana está pronta. Ela começa com um teste curto.',
  'offer.chipWeekly': 'Seu plano semanal',
  'offer.chipSessions': 'Sessões curtas',
  'offer.chipTests': 'Um teste a cada duas semanas',
  'offer.chipRoutines': 'Rotinas para crises e para corrida',
  'offer.chipReminders': 'Lembretes',

  // ── Session player: the locked state ─────────────────────────────────────
  'widgets.sessionLockedTitle': 'Sua assinatura terminou',
  'widgets.sessionLockedBody':
    'Tudo o que você registrou continua aqui para consultar. Para voltar a fazer as sessões, retome de onde parou.',
  'widgets.sessionLockedCta': 'Ver suas opções',

  // ── Test day: the results ────────────────────────────────────────────────
  'widgets.retestYourGoal': 'Sua meta',
  'widgets.retestGoal.painfree': 'Você veio aqui por manhãs que não começam com dor no calcanhar. Esses números são o pé caminhando para isso.',
  'widgets.retestGoal.race': 'Você está se preparando para uma prova. Uma panturrilha mais forte e um pé mais firme são o que te levam até a largada.',
  'widgets.retestGoal.consistent': 'Você disse que a meta era constância. É nisso que aparecer todo dia vai somando.',
  'widgets.retestGoal.stronger': 'Você queria ficar mais forte. É aqui que isso aparece primeiro.',
  'widgets.retestGoal.injuryfree': 'Você queria evitar lesões. Um pé que se mostra mais forte nos testes se machuca com menos facilidade.',

  'widgets.retestGoal.flatfeet': 'Você veio aqui por causa do pé chato. A sustentação do arco e um equilíbrio mais firme são onde o treino aparece.',
  'widgets.retestGoal.ankles': 'Você queria tornozelos mais firmes. O equilíbrio é onde isso aparece primeiro.',
  'widgets.retestGoal.jump': 'Você queria pular mais alto. Uma panturrilha mais forte é a mola por trás disso.',
  'widgets.retestGoal.allday': 'Você queria aguentar o dia em pé. Os músculos que sustentam seu arco são o que isso treina.',
  'widgets.retestGoal.comeback': 'Você está voltando de uma lesão. A diferença entre as suas pernas é o número a acompanhar.',
  'widgets.retestGoal.steady': 'Você queria andar com confiança. Equilíbrio e um pé forte são como isso se sente.',
  // ── Session player: the counter line ─────────────────────────────────────
  // One word per phase: read at two metres, and it changes every three seconds.
  'widgets.phaseUp': 'Sobe',
  'widgets.phaseHold': 'Segura',
  'widgets.phaseDown': 'Desce',
  'widgets.sideRight': 'Pé direito',
  'widgets.sideLeft': 'Pé esquerdo',

  'widgets.sessionRepLine': '{phase} · Rep. {rep} de {reps}',
  'widgets.sessionRepLineSided': '{side} · {phase} · Rep. {rep} de {reps}',
  'widgets.sessionRepSpoken': '{phase}, repetição {rep} de {reps}',
  'widgets.sessionRepSpokenSided': '{side}. {phase}, repetição {rep} de {reps}',
  'widgets.sessionPositionShort': 'Exercício {index}/{total}',
  'widgets.sessionPositionShortSided': '{side} · Exercício {index}/{total}',
  'widgets.sessionPositionLong': 'Exercício {index} de {total}',
  'widgets.sessionPositionLongSided': '{side}. Exercício {index} de {total}',
  'widgets.sessionDone': 'Pronto.',
  'widgets.sessionDoneSpoken': 'Pronto',

  // ── Session player: the card and the transport ───────────────────────────
  'widgets.clipFailed': 'O vídeo não carregou. As instruções continuam valendo.',
  'widgets.lockScreenHint': 'Bloqueie o celular - o timer continua',
  'widgets.expandDemo': 'Ampliar a demonstração',
  'widgets.collapseDemo': 'Reduzir a demonstração',
  'widgets.sessionContinue': 'Continuar',
  'widgets.sessionFinish': 'Terminar',
  'widgets.scrubberPrevious': 'Exercício anterior',
  'widgets.scrubberNext': 'Próximo exercício',
  'widgets.scrubberPlay': 'Reproduzir',
  'widgets.scrubberPause': 'Pausar',

  // ── Session player: the end of a session ─────────────────────────────────
  'widgets.sessionDoneTitle': 'Bom trabalho.',
  'widgets.sessionStoppedTitle': 'Paramos aqui.',
  'widgets.sessionStoppedBlurb': 'Ainda conta como a sessão de hoje. Amanhã começa um passo mais leve.',

  // ── Session player: "it hurts" ───────────────────────────────────────────
  'widgets.painButton': 'Está doendo',
  'widgets.painTitle': 'Quanto, agora?',
  'widgets.painCarryOn': 'Continue com calma. Pare se aumentar.',
  'widgets.painPick': 'Toque em um número para ver o que acontece depois.',
  'widgets.painLowHint': 'Um leve desconforto é normal neste trabalho. A sessão continua de onde você pausou - só vá com calma, e toque no curativo de novo se aumentar.',
  'widgets.painHighHint': 'Isso é demais para treinar. Vamos encerrar a sessão aqui - ela ainda conta para hoje - e o plano de amanhã vai ser um passo mais leve.',
  'widgets.painResume': 'Continuar com calma',
  'widgets.painEnd': 'Encerrar a sessão',
  'widgets.painCancel': 'Deixa pra lá',
  'widgets.painClose': 'Fechar',
  'widgets.sessionDoneStreak': {
    one: '{count} dia seguido',
    other: '{count} dias seguidos',
  },
  'widgets.sessionDoneBlurb': {
    one: '{count} exercício feito. Pouco e sempre é o que faz isso andar.',
    other: 'Todos os {count} exercícios feitos. Pouco e sempre é o que faz isso andar.',
  },
};
