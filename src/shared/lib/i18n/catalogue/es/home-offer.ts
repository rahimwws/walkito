/** Home offer: the one-time trial, the comeback and the plans after the paywall's "Not now", and their pushes. Filled per domain; see
 * `../en/home-offer.ts` for the rules (no prices, `**…**` marks the heavier words, "Walkito Plus" stays as it is). */

export const HOME_OFFER_ES = {
  'homeOffer.trial.title': 'Espera, esta es una oferta única',
  'homeOffer.trial.bodyWeek': '**Walkito Plus durante un año**, y **la primera semana es gratis**.',
  'homeOffer.trial.bodyWeeks': {
    one: '**Walkito Plus durante un año**, y **{count} semana gratis** para empezar.',
    other: '**Walkito Plus durante un año**, y **{count} semanas gratis** para empezar.',
  },
  'homeOffer.trial.bodyDays': {
    one: '**Walkito Plus durante un año**, y **{count} día gratis** para empezar.',
    other: '**Walkito Plus durante un año**, y **{count} días gratis** para empezar.',
  },
  'homeOffer.trial.bodyMonths': {
    one: '**Walkito Plus durante un año**, y **{count} mes gratis** para empezar.',
    other: '**Walkito Plus durante un año**, y **{count} meses gratis** para empezar.',
  },
  'homeOffer.trial.ctaDays': { one: 'Prueba gratis {count} día', other: 'Prueba gratis {count} días' },
  'homeOffer.trial.ctaMonths': { one: 'Prueba gratis {count} mes', other: 'Prueba gratis {count} meses' },
  'homeOffer.trial.reminder': {
    one: 'Te avisaremos {count} día antes de que acabe la prueba.',
    other: 'Te avisaremos {count} días antes de que acabe la prueba.',
  },

  'homeOffer.comeback.title': 'Oferta limitada',
  'homeOffer.comeback.endsIn': 'Termina en {time}',
  'homeOffer.comeback.bodyBoth': 'Quédate con **Walkito Plus** a tu manera: **un año más barato** o **para siempre**.',
  'homeOffer.comeback.bodyYear': '**Un año de Walkito Plus** a un precio más bajo, solo por poco tiempo.',
  'homeOffer.comeback.bodyLifetime': '**Walkito Plus para siempre** con un solo pago, solo por poco tiempo.',
  'homeOffer.comeback.cta': 'Quiero la oferta',

  'homeOffer.card.off': 'Ahorra {percent}%',
  'homeOffer.card.onlyOnce': 'Solo esta vez',
  'homeOffer.card.wasNow': 'Antes {was}, ahora {now}',
  'homeOffer.card.perMonthFirstYear': 'Son {price} al mes durante el primer año',
  'homeOffer.card.perMonth': 'Son {price} al mes',
  'homeOffer.card.lifetime': 'Un solo pago y es tuyo para siempre',

  'homeOffer.standard.title': 'Sigue con Walkito Plus',
  'homeOffer.standard.body': 'Tu plan, todas las sesiones y todas las reevaluaciones. **Elige la forma que mejor te venga.**',
  'homeOffer.standard.cta': 'Continuar',

  'homeOffer.plan.yearly': 'Anual',
  'homeOffer.plan.monthly': 'Mensual',
  'homeOffer.plan.weekly': 'Semanal',
  'homeOffer.plan.lifetime': 'De por vida',
  'homeOffer.tab.year': 'Año',
  'homeOffer.tab.month': 'Mes',
  'homeOffer.tab.week': 'Semana',
  'homeOffer.tab.lifetime': 'Para siempre',

  'homeOffer.price.perYear': '{price}/año',
  'homeOffer.price.perMonth': '{price}/mes',
  'homeOffer.price.perWeek': '{price}/sem',
  'homeOffer.price.once': '{price} una vez',
  'homeOffer.price.firstYear': '{price} el primer año',
  'homeOffer.price.lifetimeNote': 'Pagas una vez y es tuyo para siempre. No se renueva nada.',

  'homeOffer.badge.freeDays': { one: '{count} día gratis', other: '{count} días gratis' },
  'homeOffer.badge.freeWeeks': { one: '{count} semana gratis', other: '{count} semanas gratis' },
  'homeOffer.badge.freeMonths': { one: '{count} mes gratis', other: '{count} meses gratis' },
  'homeOffer.badge.save': 'Ahorra {percent}%',

  'homeOffer.terms.trialDays': {
    one: 'Gratis durante {count} día y después {price} al año. Hoy no se cobra nada.',
    other: 'Gratis durante {count} días y después {price} al año. Hoy no se cobra nada.',
  },
  'homeOffer.terms.trialMonths': {
    one: 'Gratis durante {count} mes y después {price} al año. Hoy no se cobra nada.',
    other: 'Gratis durante {count} meses y después {price} al año. Hoy no se cobra nada.',
  },
  'homeOffer.terms.trialCancel': 'Cancela en Ajustes antes de que acabe la prueba y no pagas nada.',
  'homeOffer.terms.trialCancelAndroid': 'Cancela en Google Play antes de que acabe la prueba y no pagas nada.',
  'homeOffer.terms.introYear': 'Suscripción anual: {introPrice} el primer año y después {price} al año.',
  'homeOffer.terms.monthly': 'Suscripción mensual: {price} al mes.',
  'homeOffer.terms.lifetime': 'Un solo pago de {price}. No se renueva.',

  'homeOffer.push.lastChanceTitle': 'No te preocupes, aquí tienes una última oportunidad',
  'homeOffer.push.lastChanceBoth': 'Un año de Walkito Plus a un precio más bajo, o quédatelo para siempre.',
  'homeOffer.push.lastChanceYear': 'Un año de Walkito Plus a un precio más bajo, solo por poco tiempo.',
  'homeOffer.push.lastChanceLifetime': 'Walkito Plus para siempre con un solo pago, solo por poco tiempo.',
  'homeOffer.push.endsSoonTitle': 'Tu oferta termina pronto',
  'homeOffer.push.endsSoonBody': 'Tu precio rebajado de Walkito Plus desaparece en unas horas.',
  'homeOffer.push.trialEndsTitle': {
    one: 'Tu prueba gratis termina en {count} día',
    other: 'Tu prueba gratis termina en {count} días',
  },
  'homeOffer.push.trialEndsBody':
    'Después, Walkito Plus se renueva por {price} al año. Si no es para ti, cancélalo antes en los ajustes de tus suscripciones.',
};
