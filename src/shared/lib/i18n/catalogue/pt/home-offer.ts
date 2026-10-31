/** Home offer: the one-time trial, the comeback and the plans after the paywall's "Not now", and their pushes. Filled per domain; see
 * `../en/home-offer.ts` for the rules (no prices, `**…**` marks the heavier words, "Walkito Plus" stays as it is).
 * Brazilian Portuguese. */

export const HOME_OFFER_PT = {
  'homeOffer.trial.title': 'Espera, esta é uma oferta única',
  'homeOffer.trial.bodyWeek': '**Walkito Plus por um ano**, e **a primeira semana é grátis**.',
  'homeOffer.trial.bodyWeeks': {
    one: '**Walkito Plus por um ano**, com **{count} semana grátis** para começar.',
    other: '**Walkito Plus por um ano**, com **{count} semanas grátis** para começar.',
  },
  'homeOffer.trial.bodyDays': {
    one: '**Walkito Plus por um ano**, com **{count} dia grátis** para começar.',
    other: '**Walkito Plus por um ano**, com **{count} dias grátis** para começar.',
  },
  'homeOffer.trial.bodyMonths': {
    one: '**Walkito Plus por um ano**, com **{count} mês grátis** para começar.',
    other: '**Walkito Plus por um ano**, com **{count} meses grátis** para começar.',
  },
  'homeOffer.trial.ctaDays': { one: 'Teste grátis por {count} dia', other: 'Teste grátis por {count} dias' },
  'homeOffer.trial.ctaMonths': { one: 'Teste grátis por {count} mês', other: 'Teste grátis por {count} meses' },
  'homeOffer.trial.reminder': {
    one: 'Vamos te lembrar {count} dia antes do fim do teste.',
    other: 'Vamos te lembrar {count} dias antes do fim do teste.',
  },

  'homeOffer.comeback.title': 'Oferta por tempo limitado',
  'homeOffer.comeback.endsIn': 'Termina em {time}',
  'homeOffer.comeback.bodyBoth': 'Fique com o **Walkito Plus** do seu jeito: **um ano mais barato** ou **para sempre**.',
  'homeOffer.comeback.bodyYear': '**Um ano de Walkito Plus** por um preço menor, só por pouco tempo.',
  'homeOffer.comeback.bodyLifetime': '**Walkito Plus para sempre** com um único pagamento, só por pouco tempo.',
  'homeOffer.comeback.cta': 'Quero a oferta',

  'homeOffer.card.off': '{percent}% off',
  'homeOffer.card.onlyOnce': 'Só desta vez',
  'homeOffer.card.wasNow': 'Antes {was}, agora {now}',
  'homeOffer.card.perMonthFirstYear': 'São {price} por mês no primeiro ano',
  'homeOffer.card.perMonth': 'São {price} por mês',
  'homeOffer.card.lifetime': 'Um único pagamento e é seu para sempre',

  'homeOffer.standard.title': 'Continue com o Walkito Plus',
  'homeOffer.standard.body': 'Seu plano, todas as sessões e todas as reavaliações. **Escolha o jeito que for melhor para você.**',
  'homeOffer.standard.cta': 'Continuar',

  'homeOffer.plan.yearly': 'Anual',
  'homeOffer.plan.monthly': 'Mensal',
  'homeOffer.plan.weekly': 'Semanal',
  'homeOffer.plan.lifetime': 'Vitalício',
  'homeOffer.tab.year': 'Ano',
  'homeOffer.tab.month': 'Mês',
  'homeOffer.tab.week': 'Semana',
  'homeOffer.tab.lifetime': 'Vitalício',

  'homeOffer.price.perYear': '{price}/ano',
  'homeOffer.price.perMonth': '{price}/mês',
  'homeOffer.price.perWeek': '{price}/sem',
  'homeOffer.price.once': '{price} uma vez',
  'homeOffer.price.firstYear': '{price} no primeiro ano',
  'homeOffer.price.lifetimeNote': 'Pague uma vez e é seu para sempre. Nada é renovado.',

  'homeOffer.badge.freeDays': { one: '{count} dia grátis', other: '{count} dias grátis' },
  'homeOffer.badge.freeWeeks': { one: '{count} semana grátis', other: '{count} semanas grátis' },
  'homeOffer.badge.freeMonths': { one: '{count} mês grátis', other: '{count} meses grátis' },
  'homeOffer.badge.save': 'Economize {percent}%',

  'homeOffer.terms.trialDays': {
    one: 'Grátis por {count} dia, depois {price} por ano. Nada é cobrado hoje.',
    other: 'Grátis por {count} dias, depois {price} por ano. Nada é cobrado hoje.',
  },
  'homeOffer.terms.trialMonths': {
    one: 'Grátis por {count} mês, depois {price} por ano. Nada é cobrado hoje.',
    other: 'Grátis por {count} meses, depois {price} por ano. Nada é cobrado hoje.',
  },
  'homeOffer.terms.trialCancel': 'Cancele nos Ajustes antes do fim do teste e você não paga nada.',
  'homeOffer.terms.trialCancelAndroid': 'Cancele no Google Play antes do fim do teste e você não paga nada.',
  'homeOffer.terms.introYear': 'Assinatura anual: {introPrice} no primeiro ano, depois {price} por ano.',
  'homeOffer.terms.monthly': 'Assinatura mensal: {price} por mês.',
  'homeOffer.terms.lifetime': 'Um único pagamento de {price}. Nada é renovado.',

  'homeOffer.push.lastChanceTitle': 'Calma, aqui vai uma última chance',
  'homeOffer.push.lastChanceBoth': 'Um ano de Walkito Plus por um preço menor, ou fique com ele para sempre.',
  'homeOffer.push.lastChanceYear': 'Um ano de Walkito Plus por um preço menor, só por pouco tempo.',
  'homeOffer.push.lastChanceLifetime': 'Walkito Plus para sempre com um único pagamento, só por pouco tempo.',
  'homeOffer.push.endsSoonTitle': 'Sua oferta termina em breve',
  'homeOffer.push.endsSoonBody': 'Seu preço menor do Walkito Plus acaba em poucas horas.',
  'homeOffer.push.trialEndsTitle': {
    one: 'Seu teste grátis termina em {count} dia',
    other: 'Seu teste grátis termina em {count} dias',
  },
  'homeOffer.push.trialEndsBody':
    'Depois disso, o Walkito Plus é renovado por {price} por ano. Se não for para você, cancele antes nas configurações de assinaturas.',
};
