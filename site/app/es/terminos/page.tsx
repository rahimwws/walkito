import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { alternatesFor } from '@/lib/i18n';
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from '@/lib/site';

/**
 * The Spanish Terms of Use. It mirrors `app/(en)/terms/page.tsx` and must be
 * updated whenever that page changes; where the two differ, the English
 * applies. The notes on what is deliberately left out (governing law, prices)
 * live on the English page.
 *
 * UI labels are the app's own Spanish, from `src/shared/lib/i18n/catalogue/es`.
 */
export const metadata: Metadata = {
  title: 'Términos de uso',
  description:
    'Términos de uso de Walkito: qué es y qué no es, tu cuenta, suscripciones y compras únicas, invitaciones, salud y seguridad.',
  alternates: alternatesFor('terms', 'es'),
  openGraph: {
    title: `Términos de uso | ${SITE_NAME}`,
    description: 'Qué es la app, cómo funcionan los pagos y los límites de lo que afirma.',
    url: '/es/terminos/',
    type: 'website',
  },
};

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/es/` },
    { '@type': 'ListItem', position: 2, name: 'Términos de uso', item: `${SITE_URL}/es/terminos/` },
  ],
};

export default function TerminosEs() {
  return (
    <>
      <JsonLd data={BREADCRUMBS} />
      <Masthead lang="es" />

      <Prose className="shell prose">
        <h1>Términos de uso</h1>

        <p className="updated">Última actualización: 28 de septiembre de 2026</p>
        <p className="updated">
          Esta es una traducción. Si difiere de{' '}
          <a href="/terms/">la versión en inglés</a>, se aplica la versión en
          inglés.
        </p>

        <p className="lede">
          Estos términos regulan tu uso de la app Walkito, que opera Walkito
          («nosotros»). Al usar la app, los aceptas. Si no los aceptas, deja de
          usarla y elimina tu cuenta en Perfil → Eliminar cuenta.
        </p>

        <h2>Qué es Walkito</h2>
        <p>
          Walkito es un programa de ejercicios para el dolor de talón y de pie.
          Arma tu plan semana a semana en torno a metas que se pueden medir,
          con sesiones de 3, 5 o 10 minutos, ajusta cada día según lo que
          registras y mide tu progreso con pruebas físicas cada 14 días, y cada
          28 una vez que alcanzas tu primera meta.
        </p>
        <p>
          <b>No es un dispositivo médico, ni un diagnóstico, ni un tratamiento.</b>{' '}
          No puede decirte qué le pasa a tu pie, y nada de lo que contiene
          sustituye el consejo de un profesional de la salud que te haya
          examinado.
        </p>

        <h2>Salud y seguridad</h2>
        <p>
          El ejercicio conlleva riesgos, y los asumes tú. Eres responsable de
          decidir si una sesión es adecuada para ti cada día, y de parar cuando
          algo te duela de una forma que la app no tiene manera de saber.
        </p>
        <p className="notice">
          Consulta a un profesional de la salud antes de empezar, y detente y pide consejo, si tu dolor empezó tras una lesión o una caída, viene con
          entumecimiento, hormigueo, ardor, hinchazón o calor, te despierta por
          la noche, o si uno de tus arcos se ha aplanado de repente en la edad
          adulta.
        </p>

        <h2>Quién puede usarla</h2>
        <p>
          Necesitas tener 13 años o más. Si tienes menos de 18, usa Walkito con
          un padre, una madre o un tutor legal que haya leído estos términos.
        </p>

        <h2>Tu cuenta</h2>
        <p>
          Inicias sesión con Apple cuando configuras Walkito, y en esa cuenta se
          guarda tu plan. Iniciar sesión con correo y contraseña solo funciona
          en cuentas que creamos nosotros; no existe el registro con correo.
          Protege tu teléfono y tu Apple ID, porque cualquiera que los use puede
          usar tu cuenta.
        </p>
        <p>
          Tu plan, tus respuestas, tus registros, los resultados de tus pruebas
          y tus sesiones se guardan en tu teléfono y se copian a tu cuenta. Si
          inicias sesión con la misma cuenta en un teléfono nuevo o después de
          reinstalar la app, vuelven. Las compras vuelven con Restaurar compras
          usando el mismo Apple ID.
        </p>

        <h2>Tu licencia</h2>
        <p>
          Recibes una licencia personal, no exclusiva e intransferible para usar
          Walkito en dispositivos que te pertenecen o que controlas, para tu
          propio uso no comercial. No puedes revender el acceso, redistribuir el
          programa, aplicar ingeniería inversa a la app ni usar su contenido
          para crear un producto de la competencia.
        </p>
        <p>
          El programa, el catálogo de ejercicios, los textos y el software son
          nuestros. Todo lo que registras (tus entradas de dolor, tus sesiones,
          tu historial) es tuyo. Se guarda en tu dispositivo y se copia a tu
          cuenta para poder restaurarlo.
        </p>

        <h2>Pagos</h2>
        <p>
          Walkito se paga a través del App Store. Apple cobra el pago, guarda el
          recibo y te muestra las opciones, el precio y la duración antes de
          comprar. Ese es el precio que se aplica, no cualquier cifra que
          aparezca en otro sitio. Hoy hay dos formas de pagar:
        </p>
        <ul>
          <li>
            <b>Una suscripción mensual</b> que se renueva automáticamente.
          </li>
          <li>
            <b>El programa de 12 semanas</b>, con un pago único. Te da 3 meses
            (90 días) de acceso y no se renueva.
          </li>
        </ul>

        <h3>Suscripciones</h3>
        <ul>
          <li>
            Una suscripción se renueva automáticamente al final de cada periodo,
            y se cobra a tu Apple ID, a menos que desactives la renovación al
            menos 24 horas antes de que termine el periodo.
          </li>
          <li>
            Adminístrala o cancélala en <b>Ajustes → [tu nombre] → Suscripciones</b>.
            Cancelar detiene la próxima renovación; mantienes el acceso hasta
            el final del periodo que ya pagaste.
          </li>
          <li>
            Si se ofrece una prueba gratuita o un precio introductorio, al
            terminar pasa al precio estándar, a menos que canceles al menos 24
            horas antes de que termine.
          </li>
          <li>
            Borrar la app o eliminar tu cuenta no cancela una suscripción. Solo
            Apple puede hacerlo, desde la pantalla indicada arriba.
          </li>
        </ul>

        <h3>Compras únicas</h3>
        <p>
          Una compra única, como el programa de 12 semanas, se cobra una sola
          vez y nunca se renueva. No hay nada que cancelar. Cuando termina,
          puedes volver a comprarla o suscribirte.
        </p>

        <h3>Reembolsos</h3>
        <p>
          Los reembolsos los gestiona únicamente Apple. Usa{' '}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
          No podemos hacer ni anular un cargo en nombre de Apple.
        </p>

        <h2>Invitaciones</h2>
        <p>
          Puedes compartir tu código de invitación. Un amigo que lo use obtiene
          un descuento en el programa de 12 semanas, y tú recibes semanas
          gratis, hasta el límite que se muestra en la app.
        </p>
        <p>
          Cada persona puede usar un código, una sola vez, y no el suyo propio.
          Las recompensas por invitación no tienen valor en efectivo.
        </p>
        <p>
          Podemos cambiar o terminar el programa de invitaciones en cualquier
          momento. Las recompensas que ya hayas recibido siguen siendo tuyas.
        </p>

        <h2>Apple Salud</h2>
        <p>
          Si lo permites, Walkito lee los pasos, la velocidad al caminar, la
          asimetría al caminar, los pisos subidos, la frecuencia
          cardiaca en reposo, la frecuencia cardiaca, la energía activa, el
          análisis del sueño y los entrenamientos, y guarda las sesiones que
          terminas como entrenamientos y minutos de atención plena. Cada permiso
          es opcional y puedes retirarlo en cualquier momento en Ajustes. Los
          datos de Apple Salud se quedan en tu teléfono y nunca se suben ni se
          guardan en tu cuenta.
          Consulta la <a href="/es/privacidad/">página de privacidad</a> para
          saber qué sí sale de él.
        </p>

        <h2>Cambios</h2>
        <p>
          El programa y la app van a cambiar: los ejercicios se revisan, el plan
          se ajusta, hay funciones que llegan y otras que se van. También
          podemos cambiar estos términos. Cuando un cambio sea importante, te lo
          diremos en la app o actualizando la fecha de arriba de esta página, y
          si sigues usando Walkito después, aceptas la nueva versión.
        </p>

        <h2>Cómo terminar</h2>
        <p>
          Puedes dejarlo cuando quieras eliminando tu cuenta en Perfil →
          Eliminar cuenta, lo que borra lo que registraste del teléfono y de
          nuestro servidor, y cancelar cualquier suscripción a través de Apple
          como se indica arriba. Borrar solo la app elimina únicamente la copia
          del teléfono. Podemos suspender el acceso si la app se usa de
          una forma que estos términos prohíben. En la práctica, eso significa
          reventa o manipulación, nunca algo que puedas hacer usándola con
          normalidad.
        </p>

        <h2>Lo que no prometemos</h2>
        <p>
          Walkito se ofrece tal cual. No prometemos que seguir el programa vaya
          a reducir tu dolor, cambiar tu arco ni producir ningún resultado
          concreto. La <a href="/science/">página de evidencia</a> (en inglés)
          explica lo que encontró la investigación en la que se basa, incluido
          dónde termina esa evidencia.
        </p>
        <p>
          No prometemos que la app funcione sin interrupciones ni errores, y no
          somos responsables de pérdidas indirectas o derivadas, ni de lesiones
          causadas por el ejercicio que decidiste hacer. Nada de lo aquí escrito
          limita los derechos que te reconocen las leyes de protección al consumidor y que no pueden
          limitarse por acuerdo.
        </p>

        <h2>Contacto</h2>
        <p>
          Walkito
          <br />
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
      </Prose>

      <Footer lang="es" page="terms" />
    </>
  );
}
