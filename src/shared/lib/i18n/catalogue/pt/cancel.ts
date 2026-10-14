/** Cancelling: Settings → Subscription and the flow behind "Manage subscription". Filled per domain; see
 * `../en/cancel.ts` for the rules (no prices, "Cancel anyway" means the store's own page, "Walkito Plus" stays as it is). */

export const CANCEL_PT = {
  'cancel.row.section': 'Assinatura',
  'cancel.row.manage': 'Gerenciar assinatura',
  'cancel.row.manageHint': 'Walkito Plus',
  'cancel.row.renewsAnnual': 'Plano anual, renova em {date}',
  'cancel.row.renewsMonthly': 'Plano mensal, renova em {date}',
  'cancel.row.renewsWeekly': 'Plano semanal, renova em {date}',
  'cancel.row.trial': 'Teste grátis até {date}, depois seu plano renova',
  'cancel.row.ends': 'A renovação está desligada. O Walkito Plus fica ativo até {date}.',
  'cancel.row.lifetime': 'Vitalício',
  'cancel.row.lifetimeHint': 'O Walkito Plus é seu para sempre. Nada é renovado.',

  'cancel.title': 'Por que você está saindo?',
  'cancel.sub': 'Escolha a opção mais próxima. Isso nos ajuda a melhorar o Walkito.',
  'cancel.reason.budget': 'Não cabe no meu orçamento',
  'cancel.reason.better': 'Meus pés estão melhores',
  'cancel.reason.pause': 'Vou dar uma pausa',
  'cancel.reason.notHelping': 'Não está ajudando, ou dói',
  'cancel.reason.noTime': 'Não tenho tempo',
  'cancel.anyway': 'Cancelar mesmo assim',
  'cancel.anywayHintIos': 'Abre suas assinaturas na App Store',
  'cancel.anywayHintAndroid': 'Abre suas assinaturas no Google Play',

  'cancel.budget.title': 'Vamos deixar mais leve para o seu bolso',
  'cancel.budget.noneTitle': 'A gente entende',
  'cancel.budget.none': 'Tudo o que você registrou fica no Walkito, e seu plano espera por você se voltar.',

  'cancel.better.title': 'Que notícia boa',
  'cancel.better.body': 'Veja o quanto você avançou.',
  'cancel.better.plain':
    'Ficamos muito felizes que seus pés estejam melhores. Obrigado por fazer parte do caminho com a gente.',
  'cancel.better.pain': 'Dor nos primeiros passos, de 0 a 10',
  'cancel.better.calf': 'Elevações de calcanhar',
  'cancel.better.arch': 'Arco sustentado, segundos',
  'cancel.better.balance': 'Equilíbrio, segundos',
  'cancel.better.firstWeek': 'Primeira semana',
  'cancel.better.lastWeek': 'Últimos 7 dias',
  'cancel.better.firstTest': 'Primeiro teste',
  'cancel.better.latestTest': 'Último teste',
  'cancel.better.changeA11y': '{label}: antes {from}, agora {to}',
  'cancel.better.reviewAsk': 'Se o Walkito ajudou, algumas palavras numa avaliação ajudam outra pessoa a encontrá-lo.',
  'cancel.better.review': 'Deixar uma avaliação',

  'cancel.pause.title': 'Às vezes uma pausa faz bem',
  'cancel.pause.freeMonthTitle': 'Um mês grátis',
  'cancel.pause.freeMonthBody':
    'Fique com seu plano, e seu próximo mês não custa nada. Depois, o Walkito Plus renova como agora.',
  'cancel.pause.freeMonthCta': 'Quero um mês grátis',
  'cancel.pause.freeMonthTerms':
    'O mês grátis começa na sua próxima renovação. Você pode cancelar quando quiser nos ajustes de assinaturas.',
  'cancel.pause.playTitle': 'Pausar por até 3 meses',
  'cancel.pause.playBody':
    'O Google Play pode pausar sua assinatura em vez de encerrá-la. Nada é cobrado enquanto ela estiver pausada, e seu plano espera por você quando ela voltar.',
  'cancel.pause.playCta': 'Pausar no Google Play',
  'cancel.pause.none': 'Seu plano espera por você quando voltar, com tudo o que você registrou.',

  'cancel.notHelping.title': 'Sentimos muito que não esteja indo bem',
  'cancel.notHelping.body': 'Veja o que podemos fazer agora mesmo.',
  'cancel.notHelping.lighter': 'Deixar meu plano mais leve',
  'cancel.notHelping.lighterCaption': 'Sessões mais curtas, ou menos sessões, a partir de hoje',
  'cancel.notHelping.lightest': 'Seu plano já está o mais leve possível.',
  'cancel.notHelping.doctor': 'Quando procurar um médico',
  'cancel.notHelping.doctorCaption': 'Uma checagem rápida dos sinais que vale a pena mostrar a um médico',
  'cancel.notHelping.write': 'Fale com a gente',
  'cancel.notHelping.writeCaption': 'Uma pessoa lê cada mensagem',

  'cancel.noTime.title': 'Vamos encaixar no seu dia',
  'cancel.noTime.body': {
    one: 'As sessões podem ter só {count} minuto, e o lembrete pode mudar para um horário que seja bom para você.',
    other: 'As sessões podem ter só {count} minutos, e o lembrete pode mudar para um horário que seja bom para você.',
  },
  'cancel.noTime.short': {
    one: 'Mudar para sessões de {count} minuto',
    other: 'Mudar para sessões de {count} minutos',
  },
  'cancel.noTime.shortCaption': 'Todas as sessões, a partir de hoje. Você pode voltar atrás nos Ajustes.',
  'cancel.noTime.already': 'Suas sessões já estão o mais curtas possível.',
  'cancel.noTime.reminder': 'Mudar o horário do lembrete',
  'cancel.noTime.reminderCaption': 'Seu lembrete diário, na hora que for melhor',

  'cancel.done.title': 'Tudo certo',
  'cancel.done.freeMonth': 'Seu próximo mês é grátis. Obrigado por ficar.',
  'cancel.done.lighter': 'Seu plano fica mais leve a partir de hoje. Você pode mudar isso quando quiser nos Ajustes.',
  'cancel.done.short': {
    one: 'Suas sessões passam a ter {count} minuto a partir de hoje. Você pode mudar isso quando quiser nos Ajustes.',
    other: 'Suas sessões passam a ter {count} minutos a partir de hoje. Você pode mudar isso quando quiser nos Ajustes.',
  },
  'cancel.done.pending': 'A loja ainda está confirmando. Vai aparecer aqui assim que for concluído.',
  'cancel.done.back': 'Voltar ao Walkito',
};
