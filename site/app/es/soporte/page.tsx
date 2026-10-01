import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { alternatesFor } from '@/lib/i18n';
import { SUPPORT_EMAIL } from '@/lib/site';

/**
 * The Spanish Support page. It mirrors `app/(en)/support/page.tsx` and must be
 * updated whenever that page changes; where the two differ, the English applies.
 *
 * UI labels are the app's own Spanish, from `src/shared/lib/i18n/catalogue/es`.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito".
  title: 'Soporte',
  description:
    'Ayuda con Walkito: notificaciones, Apple Salud, compras, reembolsos y cómo eliminar tu cuenta. Escríbenos y te responde una persona.',
  alternates: alternatesFor('support', 'es'),
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function SoporteEs() {
  return (
    <>
      <Masthead lang="es" />

      <Prose className="shell prose">
        <h1>Soporte</h1>

        <p className="updated">¿Algo no funciona bien? Cuéntanos. Te responde una persona.</p>

        <p>
          Escribe a {mail}. Te responde una persona, normalmente en menos de 12
          horas. Dinos qué estabas haciendo y qué hizo la app. Con eso suele
          bastar para entender qué pasó sin tener que ir y venir con mensajes.
        </p>

        <h2>Iniciar sesión, y un teléfono nuevo</h2>
        <p>
          Durante la configuración inicias sesión con Apple, y para eso
          necesitas conexión una vez. Después, el uso diario funciona sin
          conexión, y lo que registras se copia a tu cuenta cada vez que hay
          conexión. En un teléfono nuevo o después de reinstalar la app, inicia
          sesión con el mismo Apple ID y vuelven tu plan, tus registros, los
          resultados de tus pruebas y tus sesiones.
        </p>

        <h2>El plan va por fechas, no por asistencia</h2>
        <p>
          Saltarte días no te deja atrás, y no hay nada que recuperar. La semana
          va por fechas, así que una sesión que te saltas no pasa a mañana. Si estuviste fuera, abre la app y sigue desde hoy.
        </p>

        <h2>Notificaciones</h2>
        <p>
          Como mucho una al día y cinco a la semana, y nada después de las
          21:30. Si dejas de abrirlas, la app envía menos, y si sigues sin
          abrirlas, las pausa durante un mes. Puedes desactivarlas del todo en
          Ajustes → Notificaciones → Walkito. Si lo haces, nada más cambia en la
          app.
        </p>

        <h2>Datos de salud</h2>
        <p>
          Walkito lee de Apple Salud los pasos, la velocidad al caminar, la
          asimetría al caminar, los pisos subidos, la frecuencia
          cardiaca, la frecuencia cardiaca en reposo, la energía activa, el
          sueño y los entrenamientos, y guarda allí las sesiones que terminas.
          Todo es opcional. Estos datos se quedan en tu teléfono y nunca se
          suben ni se guardan en tu cuenta. Desactiva lo que quieras en Ajustes
          → Apps → Salud → Acceso a datos y dispositivos → Walkito, y las partes
          que lo usaban simplemente dejan de mostrarse. El plan sigue
          funcionando.
        </p>

        <h2>El dolor, y cuándo parar</h2>
        <p>
          Walkito es un programa de ejercicios. No diagnostica, y no puede
          decirte qué te pasa. Si el dolor es agudo, empeora o no te deja
          dormir, consulta a un profesional de la salud.
        </p>

        <h2>Compras</h2>
        <p>
          Walkito se paga con una suscripción a través del App Store, anual o
          semanal. Las dos se renuevan automáticamente, y el App Store te
          muestra el precio en tu moneda antes de comprar.
        </p>
        <ul>
          <li>
            <b>Administra o cancela</b> tu suscripción en Ajustes → [tu nombre] →
            Suscripciones. Si desactivas la renovación al menos 24 horas antes de
            que termine el periodo, no se te vuelve a cobrar. Mantienes el acceso
            hasta el final del periodo que ya pagaste.
          </li>
          <li>
            <b>Los reembolsos</b> los gestiona Apple. Usa su página{' '}
            <a href="https://reportaproblem.apple.com">Reportar un problema</a>.
            No podemos tramitar reembolsos en nombre de Apple.
          </li>
          <li>
            <b>¿Teléfono nuevo?</b> Inicia sesión con el mismo Apple ID y toca
            Restaurar compras en la app. Tu plan vuelve con tu cuenta.
          </li>
        </ul>

        <h2>Eliminar tu cuenta</h2>
        <p>
          En la app, ve a <b>Perfil → Eliminar cuenta</b>. Eso borra tu cuenta
          de nuestro servidor con todo lo que se guarda en ella (tu plan, tus
          registros, los resultados de tus pruebas, tus sesiones, tu correo y
          tu código de invitación) y vacía el teléfono. No se puede deshacer.
          Borrar solo la app elimina únicamente la copia del teléfono: tu cuenta
          sigue ahí y vuelve cuando inicias sesión de nuevo. También puedes
          escribir a {mail} y la eliminamos por ti.
        </p>

        <p className="updated">
          Esta es una traducción. Si difiere de{' '}
          <a href="/support/">la versión en inglés</a>, se aplica la versión en
          inglés.
        </p>
      </Prose>

      <Footer lang="es" page="support" />
    </>
  );
}
