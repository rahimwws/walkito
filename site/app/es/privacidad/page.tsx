import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { alternatesFor } from '@/lib/i18n';
import { SUPPORT_EMAIL } from '@/lib/site';

/**
 * The Spanish Privacy Policy. It mirrors `app/(en)/privacy/page.tsx` and must
 * be updated whenever that page changes; where the two differ, the English
 * applies. The notes on what each service receives live on the English page.
 *
 * UI labels are the app's own Spanish, from `src/shared/lib/i18n/catalogue/es`.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito".
  title: 'Privacidad',
  description:
    'Qué recopila Walkito y por qué. Tu plan se guarda en tu cuenta; los datos de Apple Salud y Health Connect quedan en tu teléfono. Sin anuncios ni rastreo.',
  alternates: alternatesFor('privacy', 'es'),
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function PrivacidadEs() {
  return (
    <>
      <Masthead lang="es" />

      <Prose className="shell prose">
        <h1>Privacidad</h1>

        <p className="updated">Última actualización: 7 de octubre de 2026</p>
        <p className="updated">
          Esta es una traducción. Si difiere de{' '}
          <a href="/privacy/">la versión en inglés</a>, se aplica la versión en
          inglés.
        </p>

        <h2>En resumen</h2>
        <ul>
          <li>Inicias sesión con Apple en iPhone, o con Google en Android, cuando configuras Walkito.</li>
          <li>
            Tu plan, tus respuestas, tus registros de dolor, los resultados de
            tus pruebas y las sesiones que terminas se guardan en tu cuenta, así
            que vuelven en un teléfono nuevo o si reinstalas la app.
          </li>
          <li>
            <b>Los datos de Apple Salud y Health Connect se quedan en tu teléfono y nunca se suben.</b>
          </li>
          <li>
            Algunos servicios reciben datos para que la app funcione: Supabase
            (tu cuenta y tu plan), PostHog (analítica de uso), RevenueCat
            (compras), Superwall (pantallas de suscripción), Expo (notificaciones, actualizaciones de la app e
            informes de velocidad y de errores), Apple (inicio de sesión, pagos
            y notificaciones), Google (inicio de sesión en Android) y Resend (correos).
          </li>
          <li>Sin anuncios, sin rastreo publicitario, y nunca vendemos tus datos.</li>
        </ul>

        <h2>Tu cuenta</h2>
        <p>
          Al configurar Walkito, inicias sesión con Apple. Apple nos da un
          identificador, tu nombre y tu correo electrónico, o una dirección de
          reenvío privada si eliges ocultar el tuyo. Ese identificador se
          convierte en tu cuenta en nuestro servidor. Tu nombre y tu correo se guardan con tu cuenta.
        </p>
        <p>
          En Android, inicias sesión con Google. Google, como Apple, nos da un
          identificador y tu correo electrónico, y se usan de la misma manera.
        </p>
        <p>
          Si Iniciar sesión con Apple no está disponible en tu dispositivo, la
          app usa en su lugar una cuenta anónima. Iniciar sesión con correo y
          contraseña solo funciona en cuentas que creamos nosotros, por ejemplo
          para la revisión del App Store. No existe el registro con correo.
        </p>
        <p>
          En el Llavero de tu iPhone se guarda una clave de inicio de sesión.
          Sigue ahí aunque borres la app, para que al reinstalarla se pueda
          encontrar de nuevo tu cuenta. Eliminar cuenta la borra.
        </p>

        <h2>Tu correo electrónico</h2>
        <p>
          Usamos tu correo para responderte cuando escribes a soporte, para reconocer tu cuenta en nuestros propios informes y para enviarte correos sobre tu plan: recordatorios, un resumen semanal, los resultados de tus pruebas y, de vez en cuando, una oferta de Walkito Premium. Los correos se escriben a partir de tu plan y usan tu nombre. Cada correo tiene un enlace para darte de baja, y también puedes escribirnos. Nunca compartimos tu dirección con otras empresas para su propio marketing.
        </p>

        <h2>Qué se guarda en tu cuenta</h2>
        <p>
          Todo se guarda primero en tu teléfono. Después, en segundo plano, se
          copia a tu cuenta en nuestro servidor, para que vuelva cuando inicias
          sesión en un teléfono nuevo o reinstalas la app. Esa copia contiene:
        </p>
        <ul>
          <li>
            <b>Tus respuestas y ajustes:</b> qué pie y dónde te duele, tu tipo
            de pie, tu meta y tu deporte, los días por semana, la duración
            de la sesión, la hora del recordatorio, el material que no tienes y
            tu fecha de inicio.
          </li>
          <li>
            <b>Tus metas</b> y tu progreso en cada uno.
          </li>
          <li>
            <b>Tus registros de dolor:</b> cada puntuación de dolor que anotas,
            cuándo la anotaste y dónde te dolía, y si hiciste el estiramiento de
            la mañana.
          </li>
          <li>
            <b>Los resultados de tus pruebas:</b> elevaciones de talón,
            mantener el arco y equilibrio, pie izquierdo y pie derecho.
          </li>
          <li>
            <b>Tus sesiones:</b> el plan de cada semana, las sesiones que
            terminas, qué ejercicios hiciste, saltaste o cambiaste, cómo te
            resultó la sesión, si tuviste dolor durante ella, y los ejercicios
            que marcaste como que no puedes hacer.
          </li>
          <li>
            <b>Tu uso de la app:</b> cuántas veces la abriste cada día y durante
            cuánto tiempo.
          </li>
        </ul>
        <p>
          También usamos esta copia para ver cómo se usa el plan y si la gente
          alcanza sus metas, para poder mejorarlo.
        </p>

        <h2>Lo que se queda en tu teléfono</h2>
        <p>
          La edad, el sexo, el peso y la talla de zapato que indicas
          durante la configuración, tus ajustes de apariencia e idioma de la
          app, los videos de ejercicios que has descargado y todos los datos de
          Apple Salud y Health Connect. Todo esto se guarda solo en el almacenamiento propio de
          la app en el dispositivo.
        </p>

        <h2>Apple Salud</h2>
        <p>
          Con tu permiso, Walkito lee los pasos, la velocidad al caminar, la
          asimetría al caminar, los pisos subidos, la frecuencia cardiaca en
          reposo, la frecuencia cardiaca, la energía activa, el análisis del
          sueño y los entrenamientos. Guarda en Apple Salud las sesiones que
          terminas, como entrenamientos y minutos de atención plena.
        </p>
        <p>
          Estos datos se leen y se resumen en tu teléfono.{' '}
          <b>
            Nunca se suben, nunca se guardan en tu cuenta y nunca se usan para
            publicidad, marketing ni minería de datos.
          </b>{' '}
          Nunca los vendemos.
        </p>
        <p>
          Puedes retirar cualquier permiso en cualquier momento en Ajustes →
          Apps → Salud → Acceso a datos y dispositivos → Walkito. La app sigue
          funcionando, y las partes que dependían de esos datos dejan de
          aparecer.
        </p>

        <h2>Health Connect (Android)</h2>
        <p>
          En Android, con tu permiso, Walkito lee de Health Connect los pasos,
          los pisos subidos, la frecuencia cardiaca en reposo, la frecuencia
          cardiaca, el sueño, los entrenamientos, la distancia y las calorías
          activas. Guarda las sesiones que terminas como entrenamientos.
        </p>
        <p>
          Usamos estos datos solo para ajustar tu plan: cuánto te moviste,
          dormiste y corriste influye en la sesión del día y en las sugerencias.
          Se leen y se resumen en tu teléfono.{' '}
          <b>
            Los datos de Health Connect nunca se suben, nunca se venden, nunca se
            comparten con terceros y nunca se usan para publicidad.
          </b>{' '}
          El uso que Walkito hace de la información recibida de Health Connect
          cumple la política de permisos de Health Connect, incluidos los
          requisitos de uso limitado (Limited Use).
        </p>
        <p>
          Puedes retirar cualquier permiso en cualquier momento en la app Health
          Connect o en Ajustes de Android → Seguridad y privacidad → Privacidad →
          Health Connect → Permisos de apps → Walkito. La app sigue funcionando.
        </p>

        <h2>Qué recopilamos, cómo y por qué</h2>

        <h3>Supabase: tu cuenta y tu plan</h3>
        <p>
          <b>Qué:</b> tu cuenta, tu correo, todo lo que aparece en «Qué se
          guarda en tu cuenta», tu dirección de notificaciones (si activaste las
          notificaciones), tu código de invitación y qué cuenta usó qué código.
          Los videos de ejercicios se descargan del almacenamiento de Supabase.
        </p>
        <p>
          <b>Por qué:</b> para gestionar tu cuenta, devolverte tu plan en un
          teléfono nuevo, responder a las consultas de soporte, hacer que
          funcionen las invitaciones y entregarte los videos de ejercicios.
        </p>

        <h3>PostHog: analítica de uso</h3>
        <p>
          <b>Qué:</b> eventos que indican que algo pasó en la app, por ejemplo
          que se mostró un paso de la configuración inicial, que se terminó una sesión, un
          registro o una prueba y si la sesión te pareció fácil, normal o
          difícil, que se alcanzó una meta, que se cambió un ajuste del plan
          (no a qué valor), o que se abrió la pantalla de compra. También las
          pantallas que visitas y las respuestas a algunas preguntas de la configuración inicial: dónde oíste hablar de Walkito, tu meta, tu deporte y cuánto corres. Tu meta, o el nombre de una meta que alcanzaste,
          puede dar una pista sobre tu afección. Se añaden el modelo de tu
          dispositivo, la versión de iOS y de la app, el idioma y la zona
          horaria, y PostHog deduce una ubicación aproximada (país y ciudad) a
          partir de tu dirección IP. Los eventos van unidos a un ID aleatorio,
          el mismo que usa RevenueCat.
        </p>
        <p>
          <b>Nunca se envía:</b> puntuaciones de dolor, zonas de dolor,
          resultados de pruebas, lecturas de Apple Salud, edad ni peso. No se
          registra nada de lo que aparece en tu pantalla.
        </p>
        <p>
          <b>Por qué:</b> para ver dónde se atasca la gente y mejorar la app.
        </p>

        <h3>RevenueCat: compras</h3>
        <p>
          <b>Qué:</b> un ID aleatorio, tu historial de compras y suscripciones
          del App Store, el ID de analítica mencionado arriba y dónde dijiste
          que oíste hablar de Walkito. En iPhone, también si instalaste Walkito
          desde un anuncio de búsqueda de Apple Ads y, en ese caso, de qué
          campaña y con qué búsqueda, según AdServices de Apple. No necesita
          permiso de rastreo ni usa el identificador de publicidad.
        </p>
        <p>
          <b>Por qué:</b> para saber qué has comprado y desbloquearlo, y para
          ver qué canales llevan a compras.
        </p>

        <h3>Expo: notificaciones, actualizaciones, velocidad y errores</h3>
        <p>
          <b>Qué:</b> cuánto tarda la app en arrancar y en abrir cada pantalla,
          los errores y los informes de fallos, los mismos eventos que recibe
          PostHog, y el modelo de tu dispositivo, la versión de iOS y de la app,
          el idioma y un ID de instalación aleatorio. Las actualizaciones de la
          app se descargan de Expo. Cuando alguien usa tu código de invitación,
          la notificación que te avisa pasa por el servicio push de Expo. Los
          recordatorios diarios se programan en tu teléfono y no pasan por
          ningún servidor.
        </p>
        <p>
          <b>Por qué:</b> para que la app sea rápida y funcione bien, mantenerla
          al día y entregar las notificaciones de invitaciones.
        </p>

        <h3>Superwall: pantallas de suscripción</h3>
        <p>
          <b>Qué:</b> el ID de tu cuenta, tu nombre, el objetivo y el deporte
          que elegiste al crear tu plan, el primer paso de tu plan, los días y
          los minutos que elegiste, la fecha de tu próxima revisión de progreso,
          el idioma de la app, qué pantallas de suscripción viste y qué tocaste
          en ellas, y si ya tienes una suscripción. Nunca tu dolor, tus
          respuestas sobre tu cuerpo ni nada de Apple Health o Health Connect.
        </p>
        <p>
          <b>Para qué:</b> para mostrarte la pantalla de suscripción, dirigirla
          a ti y a tu plan, y probar qué versión funciona mejor. Los pagos
          siguen pasando por Apple y RevenueCat.
        </p>

        <h3>Resend: correos</h3>
        <p>
          <b>Qué:</b> tu correo, tu nombre y el contenido de cada correo que te
          enviamos, hecho a partir de tu plan.
        </p>
        <p>
          <b>Por qué:</b> para entregarte esos correos y saber si llegaron.
        </p>

        <h3>Apple: inicio de sesión, pagos y notificaciones</h3>
        <p>
          Iniciar sesión con Apple comparte el nombre y el correo que elijas.
          Los pagos los gestiona Apple, y nosotros nunca vemos los datos de tu
          tarjeta. Las notificaciones se entregan a través del servicio de
          notificaciones push de Apple.
        </p>

        <p>
          Todos los servicios de arriba reciben tu dirección IP con cada
          solicitud, como cualquier servidor.
        </p>

        <h2>Lo que no hacemos</h2>
        <p>
          Sin publicidad, sin SDK de anuncios ni de atribución, y sin
          identificador publicitario. No te rastreamos en apps ni sitios web de
          otras empresas. No vendemos tus datos, y no compartimos nada de lo que
          registras para que otros lo usen. Los servicios de arriba solo tratan
          los datos para prestarnos su servicio.
        </p>

        <h2>Cuánto tiempo los conservamos</h2>
        <ul>
          <li>
            <b>Tu cuenta y todo lo que se guarda en ella:</b> hasta que elimines tu cuenta.
          </li>
          <li>
            <b>Datos de analítica, de velocidad y de errores:</b> hasta 12 meses.
          </li>
          <li>
            <b>Registros de compras:</b> los conservan Apple y RevenueCat
            durante el tiempo que exijan las leyes de facturación, contabilidad
            y fiscales.
          </li>
          <li>
            <b>Lo que hay en tu teléfono:</b> hasta que elimines tu cuenta o la
            app.
          </li>
        </ul>

        <h2>Eliminar tu cuenta</h2>
        <p>
          En la app, ve a <b>Perfil → Eliminar cuenta</b>. Esto borra tu cuenta
          de nuestro servidor con todo lo que se guarda en ella: tus respuestas
          y ajustes, metas, registros de dolor, resultados de pruebas,
          sesiones, uso de la app, correo, dirección de notificaciones y código
          de invitación. Después borra la clave de inicio de sesión y vacía el
          teléfono. No se puede deshacer. También puedes escribir a {mail} y la
          eliminamos por ti.
        </p>
        <p>
          Borrar solo la app elimina únicamente lo que hay en el teléfono. Tu
          cuenta sigue en nuestro servidor y vuelve cuando inicias sesión de
          nuevo.
        </p>
        <p>
          Eliminar cuenta no borra los registros de compras de RevenueCat, la
          analítica de PostHog ni los datos de velocidad y de errores que guarda
          Expo. Si quieres que se borren, escribe a la misma dirección. Los
          entrenamientos y minutos de atención plena que Walkito guardó en Apple
          Salud se quedan ahí hasta que los borres en Salud. Eliminar tu cuenta
          no cancela una suscripción. Solo Apple puede hacerlo, en Ajustes → [tu
          nombre] → Suscripciones.
        </p>

        <h2>Menores</h2>
        <p>
          Walkito no es para menores de 13 años, y no recopilamos datos de ellos a
          sabiendas. Si crees que un menor de 13 años ha usado la app, escribe a{' '}
          {mail} y borraremos sus datos.
        </p>

        <h2>Tus derechos</h2>
        <p>
          Si estás en la UE o en el Reino Unido, la ley de protección de datos
          te da derechos sobre tus datos personales. Nos basamos en estas bases
          legales:
        </p>
        <ul>
          <li>
            <b>Contrato:</b> tu cuenta, tu plan guardado, las compras, las
            invitaciones y las notificaciones, que necesitamos para darte la app
            que pediste.
          </li>
          <li>
            <b>Interés legítimo:</b> la analítica y los datos de velocidad y de
            errores, para entender y mejorar la app. Puedes oponerte a ello.
          </li>
          <li>
            <b>Consentimiento:</b> el acceso a Apple Salud y Health Connect, que
            puedes retirar en cualquier momento en Ajustes. Esos datos nunca salen de tu
            teléfono.
          </li>
        </ul>
        <p>
          Puedes pedir acceder a tus datos, corregirlos, borrarlos o recibir una
          copia, y puedes oponerte a cómo los usamos o pedirnos que lo
          limitemos. Escribe a {mail}. También puedes presentar una reclamación
          ante la autoridad de protección de datos de tu país. Algunos de los
          servicios de arriba tratan datos fuera de tu país, incluido en
          Estados Unidos, con sus propias garantías para las transferencias
          internacionales.
        </p>

        <h2>Suscripcion en el sitio web</h2>
        <p>
          Si te suscribes en el sitio web para recibir los ejercicios y el plan
          de 7 dias, guardamos tu email, el idioma, la pagina donde te
          suscribiste y un registro de cada correo enviado.
        </p>
        <p>
          <b>Para que:</b> para enviarte los ejercicios y los siete correos
          diarios, y nada mas.
        </p>
        <p>
          <b>Procesadores:</b> Resend (entrega los correos) y Supabase (guarda
          la suscripcion).
        </p>
        <p>
          <b>No se crea una cuenta.</b> La suscripcion en el sitio web no crea
          una cuenta en la app. Los datos se guardan por separado.
        </p>
        <p>
          <b>Darse de baja:</b> cada correo tiene un enlace para darse de baja
          con un clic. Tras darte de baja, dejamos de enviar y eliminamos tus
          datos en un plazo de 30 dias. Tambien puedes escribir a {mail}.
        </p>
        <p>
          <b>El sitio web no usa cookies ni carga ningun rastreador.</b>
        </p>

        <h2>No es consejo médico</h2>
        <p>
          Walkito es un programa de ejercicios para el dolor de talón y de pie.
          No diagnostica ninguna afección y no sustituye a un profesional de la salud.
        </p>

        <h2>Cambios</h2>
        <p>
          Si cambia lo que recopilamos, actualizamos esta página y la fecha de
          arriba.
        </p>

        <h2>Contacto</h2>
        <p>
          Walkito
          <br />
          {mail}
        </p>
      </Prose>

      <Footer lang="es" page="privacy" />
    </>
  );
}
