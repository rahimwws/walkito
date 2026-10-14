/** Cancelling: Settings → Subscription and the flow behind "Manage subscription". Filled per domain; see
 * `../en/cancel.ts` for the rules (no prices, "Cancel anyway" means the store's own page, "Walkito Plus" stays as it is). */

export const CANCEL_ES = {
  'cancel.row.section': 'Suscripción',
  'cancel.row.manage': 'Gestionar suscripción',
  'cancel.row.manageHint': 'Walkito Plus',
  'cancel.row.renewsAnnual': 'Plan anual, se renueva el {date}',
  'cancel.row.renewsMonthly': 'Plan mensual, se renueva el {date}',
  'cancel.row.renewsWeekly': 'Plan semanal, se renueva el {date}',
  'cancel.row.trial': 'Prueba gratis hasta el {date}, después tu plan se renueva',
  'cancel.row.ends': 'La renovación está desactivada. Walkito Plus sigue activo hasta el {date}.',
  'cancel.row.lifetime': 'De por vida',
  'cancel.row.lifetimeHint': 'Walkito Plus es tuyo para siempre. No se renueva nada.',

  'cancel.title': '¿Por qué te vas?',
  'cancel.sub': 'Elige la opción más cercana. Nos ayuda a mejorar Walkito.',
  'cancel.reason.budget': 'No entra en mi presupuesto',
  'cancel.reason.better': 'Mis pies ya están mejor',
  'cancel.reason.pause': 'Me tomo un descanso',
  'cancel.reason.notHelping': 'No me ayuda, o me duele',
  'cancel.reason.noTime': 'No tengo tiempo',
  'cancel.anyway': 'Cancelar de todos modos',
  'cancel.anywayHintIos': 'Abre tus suscripciones en el App Store',
  'cancel.anywayHintAndroid': 'Abre tus suscripciones en Google Play',

  'cancel.budget.title': 'Hagámoslo más fácil para tu bolsillo',
  'cancel.budget.noneTitle': 'Lo entendemos',
  'cancel.budget.none': 'Todo lo que has registrado se queda en Walkito, y tu plan te espera si vuelves.',

  'cancel.better.title': 'Qué buena noticia',
  'cancel.better.body': 'Mira todo lo que has avanzado.',
  'cancel.better.plain':
    'Nos alegra mucho que tus pies estén mejor. Gracias por recorrer parte del camino con nosotros.',
  'cancel.better.pain': 'Dolor en los primeros pasos, de 0 a 10',
  'cancel.better.calf': 'Elevaciones de talón',
  'cancel.better.arch': 'Arco sostenido, segundos',
  'cancel.better.balance': 'Equilibrio, segundos',
  'cancel.better.firstWeek': 'Primera semana',
  'cancel.better.lastWeek': 'Últimos 7 días',
  'cancel.better.firstTest': 'Primera prueba',
  'cancel.better.latestTest': 'Última prueba',
  'cancel.better.changeA11y': '{label}: antes {from}, ahora {to}',
  'cancel.better.reviewAsk': 'Si Walkito te ayudó, unas palabras en una reseña ayudan a otra persona a encontrarlo.',
  'cancel.better.review': 'Dejar una reseña',

  'cancel.pause.title': 'A veces hace falta un descanso',
  'cancel.pause.freeMonthTitle': 'Un mes gratis',
  'cancel.pause.freeMonthBody':
    'Conserva tu plan y tu próximo mes no cuesta nada. Después, Walkito Plus se renueva como ahora.',
  'cancel.pause.freeMonthCta': 'Quiero un mes gratis',
  'cancel.pause.freeMonthTerms':
    'El mes gratis empieza en tu próxima renovación. Puedes cancelar cuando quieras en los ajustes de suscripciones.',
  'cancel.pause.playTitle': 'Pausa de hasta 3 meses',
  'cancel.pause.playBody':
    'Google Play puede pausar tu suscripción en lugar de terminarla. No se cobra nada mientras está en pausa, y tu plan te espera cuando se reanude.',
  'cancel.pause.playCta': 'Pausar en Google Play',
  'cancel.pause.none': 'Tu plan te espera cuando vuelvas, con todo lo que has registrado.',

  'cancel.notHelping.title': 'Sentimos que no haya ido bien',
  'cancel.notHelping.body': 'Esto es lo que podemos hacer ahora mismo.',
  'cancel.notHelping.lighter': 'Hacer mi plan más ligero',
  'cancel.notHelping.lighterCaption': 'Sesiones más cortas, o menos sesiones, desde hoy',
  'cancel.notHelping.lightest': 'Tu plan ya es lo más ligero posible.',
  'cancel.notHelping.doctor': 'Cuándo ir al médico',
  'cancel.notHelping.doctorCaption': 'Un repaso breve de las señales que conviene que vea un médico',
  'cancel.notHelping.write': 'Escríbenos',
  'cancel.notHelping.writeCaption': 'Cada mensaje lo lee una persona',

  'cancel.noTime.title': 'Hagamos que encaje en tu día',
  'cancel.noTime.body': {
    one: 'Las sesiones pueden durar solo {count} minuto, y el recordatorio puede pasar a la hora que mejor te venga.',
    other: 'Las sesiones pueden durar solo {count} minutos, y el recordatorio puede pasar a la hora que mejor te venga.',
  },
  'cancel.noTime.short': {
    one: 'Cambiar a sesiones de {count} minuto',
    other: 'Cambiar a sesiones de {count} minutos',
  },
  'cancel.noTime.shortCaption': 'Cada sesión, desde hoy. Puedes volver a cambiarlo en Ajustes.',
  'cancel.noTime.already': 'Tus sesiones ya son lo más cortas posible.',
  'cancel.noTime.reminder': 'Cambiar la hora del recordatorio',
  'cancel.noTime.reminderCaption': 'Tu aviso diario, cuando mejor te venga',

  'cancel.done.title': 'Listo',
  'cancel.done.freeMonth': 'Tu próximo mes es gratis. Gracias por quedarte.',
  'cancel.done.lighter': 'Tu plan es más ligero desde hoy. Puedes cambiarlo cuando quieras en Ajustes.',
  'cancel.done.short': {
    one: 'Tus sesiones duran {count} minuto desde hoy. Puedes cambiarlo cuando quieras en Ajustes.',
    other: 'Tus sesiones duran {count} minutos desde hoy. Puedes cambiarlo cuando quieras en Ajustes.',
  },
  'cancel.done.pending': 'La tienda todavía lo está confirmando. Aparecerá aquí en cuanto se complete.',
  'cancel.done.back': 'Volver a Walkito',
};
