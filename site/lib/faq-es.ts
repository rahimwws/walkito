import { CITE } from './citations';
import { SUPPORT_EMAIL } from './site';

import type { FaqEntry, FaqGroup } from './faq';

/**
 * Spanish version of the FAQ, translated from `faq.ts`.
 *
 * Same structure, same groups, same citation indices. Neutral Latin American
 * Spanish, tú form, following the rules in BRIEF-ES.md. Every number, hedge
 * and qualifier is identical to the English. Non-breaking space between
 * numbers and units.
 */

const RATHLEFF_SOURCE =
  'Medido con el Foot Function Index: 29\u00A0puntos menos en el grupo de las elevaciones a los tres meses (IC 95\u00A0%: 6-52, p = 0,016), y 22 frente a 16 a los doce meses, una diferencia no significativa.';

export const FAQ_GROUPS_ES: readonly FaqGroup[] = [
  {
    id: 'sobre-la-app',
    h2: 'Sobre la app',
    entries: [
      {
        q: '¿Walkito está disponible en Android?',
        a: 'Sí. Walkito está en Android, en Google Play, y en iPhone, en el App Store. En Android lee Health Connect para pasos, distancia y sueño. La app de iPhone lee Apple Health para pasos, sueño y asimetría al caminar. También muestra una Live Activity en la pantalla de bloqueo mientras corre una sesión. Walkito viene en inglés, ruso y español.',
      },
      {
        q: '¿Necesito un Apple Watch?',
        a: 'No, Walkito funciona sin Apple Watch. El conteo de pasos, la velocidad al caminar y la asimetría que usa vienen del iPhone. Un reloj añade el sueño y la frecuencia cardíaca en reposo. Sin uno, las partes que los necesitan se quedan calladas, como que una noche corta haga la sesión más suave. El resto del plan funciona normal.',
      },
      {
        q: '¿Cuántas notificaciones voy a recibir?',
        a: 'Walkito envía como máximo una notificación al día, y nada después de las 21:30. La mayoría de las semanas, cinco es el límite. Solo cuatro tipos pueden pasarlo: un brote después de un día con dolor, un día muy largo de pie, un cambio en tu forma de caminar y un día de prueba. Puedes apagar las notificaciones en Ajustes de iOS, y el plan funciona igual.',
      },
      {
        q: '¿Walkito me va a molestar si dejo de usarlo?',
        a: 'No, Walkito se aleja cuando dejas de abrir sus mensajes. Después de tres notificaciones seguidas sin abrir, los recordatorios bajan a dos por semana. Después de siete, se calla un mes y después manda un solo mensaje. Luego se queda callado a menos que vuelvas por tu cuenta. Abrir Walkito en cualquier momento reinicia el conteo.',
      },
      {
        q: '¿Cómo funciona la racha?',
        a: 'La racha de Walkito cuenta que te presentaste, no que terminaste entrenamientos. Un día cuenta si registraste tu dolor de la mañana, terminaste una sesión, o el plan te dio un día de descanso. Un día de descanso que el plan puso nunca puede romper tu racha. Así que elegir tres días de entrenamiento a la semana no te cuesta nada.',
      },
      {
        q: '¿Qué pasa con mi racha si tengo una mala semana?',
        a: 'Una mala semana no tiene que acabar tu racha, porque Walkito te da congelamientos. Ganas un congelamiento por cada semana en el plan y puedes guardar dos a la vez. Un día que faltas usa uno solo. Si la racha termina, Walkito nunca lo muestra como un fracaso. El número simplemente empieza de nuevo.',
      },
    ],
  },
  {
    id: 'tu-plan',
    h2: 'Tu plan',
    entries: [
      {
        q: '¿Cuánto dura el plan de Walkito?',
        a: 'El plan de Walkito no tiene una duración fija. Dura lo que lo uses. Walkito arma una semana a la vez en torno a una meta, como mañanas sin dolor o mantener el arco 60\u00A0segundos. Cuando alcanzas una meta, pasa a mantenimiento con una dosis más baja, y la siguiente ocupa su lugar. [Cómo funciona el plan](/es/programa/).',
      },
      {
        q: '¿Cuánto dura una sesión diaria?',
        a: 'Una sesión de Walkito dura 5\u00A0minutos por defecto, y puedes cambiar cualquier sesión a 3 o 10. Cada sesión tiene de 2 a 4\u00A0ejercicios. El ejercicio de la meta de la semana siempre se queda, incluso en la versión de 3\u00A0minutos. Un día de prueba dura unos cuatro minutos y no tiene entrenamiento.',
      },
      {
        q: '¿Cuántos días a la semana entreno?',
        a: 'Eliges entrenar tres, cinco o siete días a la semana. Los días de fuerza nunca caen seguidos. Con cinco días, sesiones de movilidad y equilibrio llenan los espacios, y siete días añade una sesión de recuperación. Los otros días son descanso que el plan puso, y un día de descanso planeado nunca rompe tu racha.',
      },
      {
        q: '¿Necesito algún equipo?',
        a: 'No, no necesitas comprar nada para empezar Walkito. Durante la configuración, Walkito pregunta qué tienes en casa: un escalón o escaleras, una banda elástica, una toalla, una almohada o una pelota de masaje. Los ejercicios que necesitan algo que no tienes se quedan fuera de tu plan. También puedes responder «Ninguno de estos».',
      },
      {
        q: '¿Qué pasa si falto unos días?',
        a: 'No debes nada cuando faltas unos días, y nada se acumula. La semana va por fechas, no por asistencia, así que una sesión que faltaste no se mueve a mañana y no hay pantalla de ponerse al día. Lo que sí registraste sigue contando. La semana siguiente se arma con cómo se sintieron tus sesiones y tu dolor de la mañana.',
      },
      {
        q: '¿Necesito registrar el dolor todos los días para que funcione?',
        a: 'No, pero el plan solo puede responder a lo que registras. Una mañana registrada es lo que le permite a Walkito aligerar un mal día. La meta de mañanas sin dolor también necesita 14\u00A0mañanas seguidas a 1/10 o menos, así que una mañana que te saltas rompe esa racha. Sin nada registrado, el día corre como la semana lo planeó.',
      },
      {
        q: '¿Qué miden las pruebas?',
        a: 'Las pruebas de Walkito miden tres cosas en unos cuatro minutos: elevaciones de talón hasta el fallo en cada pierna, cuánto tiempo mantienes el arco, y equilibrio a una pierna. Las elevaciones de talón también muestran la diferencia entre tu lado izquierdo y derecho. Las pruebas se hacen cada 14\u00A0días, y después cada 28 cuando alcanzas tu primera meta. Las metas se juzgan con estos números y tu dolor de la mañana.',
      },
      {
        q: '¿Qué pasa cuando alcanzo una meta?',
        a: 'Cuando alcanzas una meta, pasa a mantenimiento y la siguiente ocupa su lugar. Una meta en mantenimiento conserva un lugar en tu plan con una dosis más baja, para que el trabajo que te trajo hasta ahí siga. Las pruebas pasan de cada 14\u00A0días a cada 28 cuando alcanzas tu primera meta.',
      },
      {
        q: '¿Cuánto tardo en notar una diferencia?',
        a: 'Nadie puede prometer honestamente un día, pero un ensayo da una guía. En un ensayo con 48\u00A0personas con fascitis plantar, todas con plantillas, el grupo que hacía elevaciones de talón con carga alta iba claramente adelante del grupo de estiramiento a los tres meses. A los doce meses los dos grupos estaban igualados. Tus propias pruebas muestran tus números conforme cambian.',
        source: RATHLEFF_SOURCE,
        cites: [CITE.rathleff],
      },
      {
        q: '¿El entrenamiento de fuerza es mejor que el estiramiento para la fascitis plantar?',
        a: 'El entrenamiento de fuerza funciona más rápido que el estiramiento, pero no mejor a largo plazo. En un ensayo con 48\u00A0personas con fascitis plantar confirmada por ultrasonido, todas con plantillas, las elevaciones de talón con carga alta iban claramente adelante a los tres meses. A los doce meses los grupos estaban igualados. La guía de 2023 le da al estiramiento una A, su grado más alto, y al entrenamiento de fuerza una B. Walkito usa las dos cosas.',
        source: RATHLEFF_SOURCE,
        cites: [CITE.rathleff, CITE.guideline],
      },
      {
        q: '¿Los ejercicios pueden cambiar el pie plano?',
        a: 'El ejercicio puede cambiar de forma medible el pie plano flexible, en el que el arco vuelve cuando el pie no toca el piso. En un ensayo con 52\u00A0personas con pie plano flexible, un programa de ejercicios de seis semanas mejoró el arco más que en el grupo de control. El pie plano rígido es estructural, y el ejercicio no va a cambiar su forma. Los ejercicios están en [ejercicios para pie plano](/es/ejercicios-pie-plano/).',
        source: 'La caída del navicular mejoró 0,4\u00A0cm y el ángulo del arco 16\u00A0grados más que en el grupo de control.',
        cites: [CITE.brijwasi],
      },
      {
        q: '¿Cuánto tardan los ejercicios para el arco en funcionar?',
        a: 'Los ejercicios para el arco necesitan seis semanas o más, según los ensayos. En un ensayo con pie plano flexible, seis semanas de pie corto (llevar la parte delantera del pie hacia el talón para que el arco suba), trabajo de cadera y estiramientos cambiaron el arco más que el grupo de control. Una revisión de 2024 sobre el pie corto solo no encontró una diferencia significativa en general. Una medida del arco mejoró solo en programas de más de seis semanas.',
        source:
          'Resultados de la revisión: caída del navicular y Foot Posture Index, ninguno significativamente diferente del control en general. La caída del navicular mejoró de forma significativa solo en el subgrupo de programas de más de seis semanas.',
        cites: [CITE.brijwasi, CITE.cheng],
      },
    ],
  },
  {
    id: 'dolor-y-seguridad',
    h2: 'Dolor y seguridad',
    entries: [
      {
        q: '¿Walkito puede decirme qué le pasa a mi pie?',
        a: 'No, Walkito no puede decirte qué está causando tu dolor. Es un programa de ejercicios. No diagnostica ni trata. Consulta a un profesional de la salud si el dolor es agudo, empeora, no te deja dormir o empezó después de una lesión. Las señales de alerta están en [la guía de dolor de talón](/es/ejercicios-fascitis-plantar/#consulta-primero).',
      },
      {
        q: '¿El plan cambia si mi dolor empeora?',
        a: 'Sí, Walkito cambia el plan esa misma mañana. Un dolor de la mañana de 7/10 o más convierte el día en unos tres minutos de trabajo sentado. Una mañana tres puntos por encima de tu promedio de la última semana baja un nivel cada ejercicio. Un dolor de 6/10 o más durante una sesión la termina y baja las dos siguientes. Una buena mañana nunca acelera el plan.',
      },
      {
        q: '¿Puedo seguir corriendo mientras hago Walkito?',
        a: 'Sí, puedes seguir corriendo mientras haces Walkito. El plan se ajusta a tu carga en vez de pedirte que pares. Cuando ayer fue un día muy largo de pie, la sesión de fuerza de hoy se convierte en una de recuperación más ligera. Un dolor agudo, o un dolor que sigue empeorando, necesita un profesional de la salud. Más en [dolor de talón en corredores](/es/dolor-de-talon-en-corredores/).',
      },
      {
        q: '¿Debo descansar por completo cuando me duele el talón?',
        a: 'La respuesta de Walkito es cambiar la carga sobre tu talón, no dejarlo todo. La guía de 2023 recomienda aprender a ajustar la carga sobre tus pies en el día a día, en el trabajo y en el deporte. Ese consejo tiene grado E, lo que significa que se basa en teoría, no en ensayos. En un mal día, mantén los estiramientos y quita el trabajo con carga. En Walkito, una mañana de 7/10 o más se convierte en tres minutos de trabajo sentado.',
        cites: [CITE.guideline],
      },
      {
        q: '¿Las plantillas y las ortesis ayudan con el dolor de talón?',
        a: 'La guía de 2023 para el dolor de talón desaconseja las ortesis por sí solas para el alivio del dolor a corto plazo, con un grado B en contra. Dice que pueden usarse junto con otros cuidados, con un grado C, lo que significa evidencia más débil. Walkito no las recomienda como única respuesta ni vende ninguna. La tabla completa de grados está en [la guía de dolor de talón](/es/ejercicios-fascitis-plantar/).',
        cites: [CITE.guideline],
      },
      {
        q: '¿El dolor puede volver?',
        a: 'El dolor de talón puede volver, y Walkito no promete que no lo hará. Lo que Walkito hace es seguir después de que el dolor se va. Una meta alcanzada pasa a mantenimiento y conserva un lugar en el plan con una dosis más baja. Las pruebas siguen cada 28\u00A0días cuando alcanzas tu primera meta, así puedes ver si tus números empiezan a bajar.',
      },
      {
        q: '¿Caminar de forma desigual significa que estoy lesionado?',
        a: 'Walkito nunca lee un cambio en la forma de caminar como señal de lesión. La asimetría al caminar es el porcentaje de tiempo en que tus pasos con un pie son más rápidos o más lentos que con el otro. Walkito la compara, según la estimación del iPhone, solo con tus propias lecturas anteriores, nunca con las de otras personas. Walkito puede decirte que tu forma de caminar cambió. Nunca te dirá qué significa eso ni que estás lesionado. Si algo se siente mal, consulta a un profesional de la salud.',
      },
    ],
  },
  {
    id: 'privacidad-y-cuenta',
    h2: 'Privacidad y cuenta',
    entries: [
      {
        q: '¿Mis datos de salud se suben a algún lado?',
        a: 'Walkito sube lo que registras, pero no tus datos de Apple Health. Las lecturas de Apple Health, desde los pasos hasta el sueño, se quedan en tu iPhone. Tu plan y lo que registras se copian a tu cuenta de Walkito: puntuaciones de dolor, dónde duele, sesiones, dolor durante las sesiones, resultados de pruebas y tiempo diario en la app. Esa copia recupera tu plan y muestra cómo se usa el plan. Mira la [política de privacidad](/es/privacidad/).',
      },
      {
        q: '¿Qué permisos de Apple Health pide Walkito?',
        a: 'Walkito pide leer conteo de pasos, velocidad al caminar, asimetría al caminar, pisos subidos, frecuencia cardíaca, frecuencia cardíaca en reposo, energía activa, sueño y entrenamientos. Pide escribir entrenamientos y minutos de atención plena. Cada permiso es opcional, y puedes quitarlo en Ajustes de iOS. El plan sigue funcionando sin ellos. Solo se adapta menos a tu día.',
      },
      {
        q: '¿Walkito funciona sin conexión?',
        a: 'Sí, Walkito funciona sin conexión después de la configuración. La configuración necesita conexión una vez, para iniciar sesión con Apple, o con email si ya tienes una cuenta. Después de eso, todo se guarda primero en el teléfono, y nada en el uso diario espera la red. Lo que registras se copia a tu cuenta de Walkito en segundo plano cuando estás en línea.',
      },
      {
        q: '¿Qué pasa con mi plan si cambio de teléfono?',
        a: 'Tu plan vuelve cuando inicias sesión con la misma cuenta de Walkito en el teléfono nuevo, porque tu plan y lo que registras se guardan en esa cuenta. Para recuperar una compra en iPhone, inicia sesión con el mismo Apple ID y toca Restaurar compras en Walkito. En Android, usa la misma cuenta de Google en Google Play y la suscripción vuelve. Una suscripción comprada en iPhone no pasa a Android, ni al revés, porque Apple y Google cobran por separado. Las lecturas de Apple Health no son parte de esa copia, porque se quedan en el teléfono.',
      },
      {
        q: '¿Cómo borro mi cuenta y mis datos de Walkito?',
        a: `Borra tu cuenta en Walkito en Perfil, después Eliminar cuenta. Eso borra tu cuenta del servidor de Walkito con todo lo guardado, y limpia el teléfono. No se puede deshacer. Borrar solo la app deja tu cuenta en su lugar. Ninguna de las dos cancela una suscripción, eso solo lo pueden hacer Apple o Google. También puedes escribir a ${SUPPORT_EMAIL}.`,
      },
    ],
  },
  {
    id: 'precios',
    h2: 'Precios',
    entries: [
      {
        q: '¿Cuánto cuesta Walkito?',
        a: 'El precio de Walkito lo fija la tienda en la que compras, el App Store en iPhone o Google Play en Android, que te lo muestra en tu moneda antes de comprar. Hay dos suscripciones, anual y semanal, y las dos se renuevan solas hasta que canceles. El código de invitación de un amigo da un descuento en la anual. El precio que muestra la tienda es el que aplica.',
      },
      {
        q: '¿Cómo cancelo mi suscripción de Walkito?',
        a: 'Cancela una suscripción de Walkito en tu iPhone en Ajustes → tu nombre → Suscripciones, al menos 24\u00A0horas antes de que termine el período. Cancelar detiene la próxima renovación, y conservas el acceso hasta el final del período que pagaste. En Android, abre la app de Google Play, toca tu icono de perfil y luego Pagos y suscripciones → Suscripciones → Walkito → Cancelar suscripción; también conservas el acceso hasta el final del período pagado. Borrar la app o tu cuenta no la cancela. Los reembolsos los maneja la tienda: Apple en iPhone, Google Play en Android.',
      },
    ],
  },
];

/** Every question in page order: for the FAQPage schema. */
export const FAQ_ES: readonly FaqEntry[] = FAQ_GROUPS_ES.flatMap((group) => group.entries);
