import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
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
    'Qué recoge Walkito, adónde va y por qué. Tu plan, tu registro de dolor y tus datos de Apple Salud se quedan en tu teléfono. Sin anuncios y sin rastreo publicitario.',
  alternates: alternatesFor('privacy', 'es'),
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function PrivacidadEs() {
  return (
    <>
      <Masthead lang="es" />

      <main className="shell prose">
        <h1>Privacidad</h1>

        <p className="updated">Última actualización: 27 de septiembre de 2026</p>
        <p className="updated">
          Esta es una traducción. Si difiere de{' '}
          <a href="/privacy/">la versión en inglés</a>, se aplica la versión en
          inglés.
        </p>

        <h2>En resumen</h2>
        <ul>
          <li>
            Walkito te crea una cuenta la primera vez que la abres. No tienes
            que registrarte.
          </li>
          <li>
            Tu plan, tu registro de dolor y tus datos de Apple Salud se quedan en
            tu teléfono. <b>Los datos de Salud nunca se suben como datos.</b>
          </li>
          <li>
            Algunos servicios reciben una pequeña cantidad de datos para que la
            app funcione: PostHog (analítica de uso y grabaciones de sesiones),
            Supabase (tu cuenta), RevenueCat (compras), Expo (notificaciones y
            actualizaciones de la app) y Apple (inicio de sesión, pagos y
            notificaciones). Nunca enviamos tu registro de dolor ni tus datos
            de Salud a ningún servicio como datos.
          </li>
          <li>Sin anuncios, sin rastreo publicitario, y nunca vendemos tus datos.</li>
        </ul>

        <h2>Tu cuenta</h2>
        <p>
          La primera vez que abres Walkito, la app crea una cuenta en nuestro
          servidor con un ID aleatorio. Nadie tiene que registrarse. La cuenta
          guarda tu código de invitación y, si nos los das, tu correo
          electrónico y tu identificador de notificaciones.
        </p>
        <p>
          Si usas Iniciar sesión con Apple, Apple comparte tu nombre y tu correo,
          o una dirección de reenvío privada si eliges ocultar el tuyo. Tu
          nombre se queda en tu teléfono. Tu correo se guarda con tu cuenta.
          Iniciar sesión con correo y contraseña solo funciona en cuentas que
          creamos nosotros, por ejemplo para la revisión del App Store. No
          existe el registro con correo.
        </p>
        <p>
          Tu plan y tu progreso se guardan en tu teléfono y no se copian a
          nuestro servidor, así que no pasan a un teléfono nuevo. Las compras
          sí: toca Restaurar compras en la app con el mismo Apple ID.
        </p>

        <h2>Tu correo electrónico</h2>
        <p>
          El correo que guardamos es el que compartes a través de Iniciar sesión
          con Apple, o el que usas para iniciar sesión. Solo lo usamos para el
          inicio de sesión y para responderte cuando escribes a soporte. Nunca
          enviamos correos de marketing, y nunca compartimos tu dirección con
          fines de marketing.
        </p>

        <h2>Lo que se queda en tu teléfono</h2>
        <p>
          Todo aquello con lo que se construye el plan: tus registros de cada
          mañana y el mapa de dónde te duele, las sesiones que terminas, los
          resultados de tus reevaluaciones, tu racha, tu nombre, tus respuestas
          del onboarding (incluidas la edad, el peso y la talla de calzado), los
          resúmenes de Apple Salud que se describen más abajo, tus ajustes y los
          videos de ejercicios que has descargado. Todo esto se guarda en el
          almacenamiento propio de la app en el dispositivo. Se borra cuando
          eliminas tu cuenta en la app, o cuando borras la app.
        </p>

        <h2>Apple Salud</h2>
        <p>
          Con tu permiso, Walkito lee los pasos, la velocidad al caminar, la
          asimetría al caminar, los pisos subidos, la frecuencia
          cardiaca en reposo, la frecuencia cardiaca, la energía activa, el
          análisis del sueño y los entrenamientos. Guarda en Apple Salud las
          sesiones que terminas, como entrenamientos y minutos de atención plena.
        </p>
        <p>
          Estos datos se leen y se resumen en tu teléfono.{' '}
          <b>
            Nunca se suben como datos, y nunca se usan para publicidad,
            marketing ni minería de datos.
          </b>{' '}
          Nunca los vendemos.
        </p>
        <p>
          Puedes retirar cualquier permiso en cualquier momento en Ajustes →
          Salud → Acceso a datos y dispositivos → Walkito. La app sigue
          funcionando, y las partes que dependían de esos datos dejan de
          aparecer.
        </p>

        <h2>Qué recogemos, cómo y por qué</h2>

        <h3>PostHog: analítica y grabaciones de sesiones</h3>
        <p>
          <b>Qué:</b> eventos que indican que algo pasó en la app, por ejemplo
          que se mostró un paso del onboarding, que se empezó o se terminó una
          sesión, que se hizo el registro de la mañana (nunca lo que
          indicaste), o que se abrió la pantalla de compra. También las
          pantallas que visitas, las respuestas a algunas preguntas del
          onboarding que no dicen nada de tu cuerpo (dónde oíste hablar de
          Walkito, tu objetivo, tu deporte y con qué frecuencia corres), el
          modelo de tu dispositivo, la versión de iOS, la versión de la app, el
          idioma y la zona horaria, y una ubicación aproximada (país y ciudad)
          que PostHog deduce de tu dirección IP. Los eventos van unidos a un ID
          aleatorio, el mismo que usa RevenueCat, para poder relacionar una
          compra con el uso de la app que llevó a ella.
        </p>
        <p>
          <b>Por qué:</b> para ver dónde se atasca la gente y mejorar la app.
        </p>

        {/* Worded to be true for build 23 (in review, no masking) and for the
            next build (pain and Health screens masked). When the masked build
            is live, we can add the equivalent of: "Screens showing pain or
            Apple Health data are hidden from recordings." Mirrors the English. */}
        <p>
          <b>Grabaciones de sesiones:</b> para encontrar errores y mejorar la
          app, PostHog graba cómo se usan las pantallas. Todo lo que escribes se
          oculta, y las grabaciones se guardan hasta 12 meses.
        </p>

        <h3>Supabase: tu cuenta</h3>
        <p>
          <b>Qué:</b> el ID aleatorio de la cuenta, tu correo (si compartiste
          uno), tu identificador de notificaciones (si activaste las
          notificaciones), tu código de invitación y qué cuenta usó qué código.
          Los videos de ejercicios se descargan del almacenamiento de Supabase,
          que registra los datos habituales de cada solicitud, como tu
          dirección IP.
        </p>
        <p>
          <b>Por qué:</b> para gestionar tu cuenta, responder a las consultas de
          soporte, hacer que funcionen las invitaciones, avisarte cuando alguien
          usa tu código y entregarte los videos de ejercicios.
        </p>

        <h3>RevenueCat: compras</h3>
        <p>
          <b>Qué:</b> un ID aleatorio, tu historial de compras y suscripciones
          del App Store, el ID de analítica mencionado arriba y dónde dijiste
          que oíste hablar de Walkito.
        </p>
        <p>
          <b>Por qué:</b> para saber qué has comprado y desbloquearlo, y para
          ver qué canales llevan a compras.
        </p>

        <h3>Expo: notificaciones y actualizaciones de la app</h3>
        <p>
          <b>Qué:</b> tu identificador de notificaciones y, cuando alguien usa
          tu código de invitación, el texto de la notificación que te avisa.
          Los recordatorios diarios se programan en tu teléfono y no pasan por
          ningún servidor. La app también consulta el servicio de
          actualizaciones de Expo para buscar versiones nuevas, lo que envía tu
          versión de la app y tu plataforma.
        </p>
        <p>
          <b>Por qué:</b> para entregar las notificaciones de invitaciones y
          mantener la app al día.
        </p>

        <h3>Apple: inicio de sesión, pagos y notificaciones</h3>
        <p>
          Iniciar sesión con Apple comparte el nombre y el correo que elijas.
          Los pagos los gestiona Apple, y nosotros nunca vemos los datos de tu
          tarjeta. Las notificaciones se entregan a través del servicio de
          notificaciones push de Apple.
        </p>

        <h2>Lo que no hacemos</h2>
        <p>
          Sin publicidad, sin SDK de anuncios ni de atribución, y sin
          identificador publicitario. No te rastreamos en apps ni sitios web de
          otras empresas. No vendemos tus datos, y nunca enviamos tu registro de
          dolor ni tus datos de Salud a nadie como datos. Los servicios de arriba solo pueden usar
          los datos para prestarnos su servicio.
        </p>

        <h2>Cuánto tiempo los conservamos</h2>
        <ul>
          <li>
            <b>Cuenta y correo:</b> hasta que eliminas tu cuenta.
          </li>
          <li>
            <b>Analítica y grabaciones de sesiones:</b> hasta 12 meses.
          </li>
          <li>
            <b>Registros de compras:</b> los conservan Apple y RevenueCat
            durante el tiempo que exijan las leyes de facturación, contabilidad
            y fiscales.
          </li>
          <li>
            <b>Todo lo que hay en tu teléfono:</b> hasta que eliminas tu cuenta
            o la app.
          </li>
        </ul>

        <h2>Eliminar tu cuenta</h2>
        <p>
          En la app, ve a <b>Perfil → Eliminar cuenta</b>. Esto borra de
          nuestro servidor tu cuenta, tu correo, tu identificador de
          notificaciones, tu código de invitación y los registros de
          invitaciones, y borra todo lo que Walkito guardó en tu teléfono.
          También puedes escribir a {mail} y la eliminamos por ti. Si quieres
          que borremos antes tus datos de analítica o de compras, escribe a la
          misma dirección.
        </p>
        <p>
          Eliminar tu cuenta no cancela una suscripción. Solo Apple puede
          hacerlo, en Ajustes → [tu nombre] → Suscripciones.
        </p>

        <h2>Menores</h2>
        <p>
          Walkito no es para menores de 13 años, y no recogemos datos de ellos a
          sabiendas. Si crees que un menor de 13 años ha usado la app, escribe a{' '}
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
            <b>Contrato:</b> tu cuenta, las compras, las invitaciones y las
            notificaciones, que necesitamos para darte la app que pediste.
          </li>
          <li>
            <b>Interés legítimo:</b> la analítica y las grabaciones de sesiones,
            para entender y mejorar la app. Puedes oponerte a ello.
          </li>
          <li>
            <b>Consentimiento:</b> el acceso a Apple Salud, que puedes retirar
            en cualquier momento en Ajustes. Esos datos nunca salen de tu
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

        <h2>No es consejo médico</h2>
        <p>
          Walkito es un programa de ejercicios para el dolor de talón y de pie.
          No diagnostica ninguna afección y no sustituye a un profesional
          sanitario.
        </p>

        <h2>Cambios</h2>
        <p>
          Si cambia lo que recogemos, actualizamos esta página y la fecha de
          arriba.
        </p>

        <h2>Contacto</h2>
        <p>
          Walkito
          <br />
          {mail}
        </p>
      </main>

      <Footer lang="es" page="privacy" />
    </>
  );
}
