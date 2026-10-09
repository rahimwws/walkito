import { SocialLinks } from '@/components/SocialLinks';
import type { Lang } from '@/lib/i18n';
import { SUPPORT_EMAIL } from '@/lib/site';
import { typeset } from '@/components/Prose';

/**
 * Who makes Walkito, in each language. Shared by the English home page and the
 * three About pages; the caller supplies the wrapping section.
 *
 * `contact` is split around the address so the address can be a link.
 */
const COPY: Record<Lang, { h2: string; paragraphs: readonly string[]; contact: [string, string] }> = {
  en: {
    h2: 'Made by Rahman and Rahim',
    paragraphs: [
      'We make Walkito, just the two of us. It started close to home: family with flat feet, friends with heel pain.',
      'Insoles, new shoes, fifty videos saying different things, and it still hurt every morning. What they needed was a plan.',
      'Now you have one.',
      'Walkito Research writes the guides on this site. Neither of us is a clinician: every dose comes from the app\'s exercise catalogue and every claim from a published study, linked on the page.',
    ],
    contact: ['Questions? Write to ', '. A person replies, usually within 12 hours.'],
  },
  ru: {
    h2: 'Walkito делают Рахман и Рахим',
    paragraphs: [
      'Walkito делаем только мы вдвоём. Всё началось с близких: у родных плоскостопие, у друзей болит пятка.',
      'Стельки, новая обувь, полсотни видео, где говорят разное, а по утрам всё равно больно. Им нужен был план.',
      'Теперь он есть у вас.',
      'Гайды на этом сайте пишет Walkito Research. Мы не врачи: каждая дозировка взята из каталога упражнений приложения, а каждое утверждение из опубликованного исследования со ссылкой на странице.',
    ],
    contact: ['Есть вопросы? Напишите на ', '. Ответит живой человек, обычно в течение 12 часов.'],
  },
  es: {
    h2: 'Hecho por Rahman y Rahim',
    paragraphs: [
      'Hacemos Walkito solo nosotros dos. Empezó muy cerca de casa: familia con pie plano, amigos con dolor de talón.',
      'Plantillas, zapatos nuevos, cincuenta videos que dicen cosas distintas, y aun así dolía cada mañana. Lo que les faltaba era un plan.',
      'Ahora tú tienes uno.',
      'Walkito Research escribe las guías de este sitio. Ninguno de los dos es profesional de la salud: cada dosis sale del catálogo de ejercicios de la app y cada afirmación de un estudio publicado, enlazado en la página.',
    ],
    contact: ['¿Preguntas? Escribe a ', '. Te responde una persona, normalmente en menos de 12 horas.'],
  },
  pt: {
    h2: 'Feito por Rahman e Rahim',
    paragraphs: [
      'Fazemos o Walkito só nós dois. Começou bem perto de casa: família com pé chato, amigos com dor no calcanhar.',
      'Palmilhas, tênis novos, cinquenta vídeos dizendo coisas diferentes, e ainda doía toda manhã. O que faltava era um plano.',
      'Agora você tem um.',
      'Os guias deste site são escritos pela Walkito Research. Nenhum de nós é profissional de saúde: cada dose vem do catálogo de exercícios do app e cada afirmação de um estudo publicado, com link na página.',
    ],
    contact: ['Dúvidas? Escreva para ', '. Quem responde é uma pessoa, normalmente em até 12 horas.'],
  },
  fr: {
    h2: 'Fait par Rahman et Rahim',
    paragraphs: [
      "Nous faisons Walkito à deux, rien que nous. Tout est parti de nos proches : de la famille aux pieds plats, des amis avec une douleur au talon.",
      "Semelles, nouvelles chaussures, cinquante vidéos qui disent des choses différentes, et ça faisait toujours mal chaque matin. Ce qui manquait, c'était un plan.",
      'Maintenant, vous en avez un.',
      "Les guides de ce site sont écrits par Walkito Research. Aucun de nous n'est professionnel de santé : chaque dose vient du catalogue d'exercices de l'app et chaque affirmation d'une étude publiée, en lien sur la page.",
    ],
    contact: ['Une question ? Écrivez à ', '. Une vraie personne répond, en général en moins de 12 heures.'],
  },
  it: {
    h2: 'Fatto da Rahman e Rahim',
    paragraphs: [
      'Facciamo Walkito solo noi due. È nato vicino a casa: familiari con il piede piatto, amici con il dolore al tallone.',
      'Plantari, scarpe nuove, cinquanta video che dicevano cose diverse, e ogni mattina faceva ancora male. Mancava un piano.',
      "Adesso ce l'hai.",
      "Le guide di questo sito sono scritte da Walkito Research. Nessuno di noi è un professionista sanitario: ogni dose viene dal catalogo di esercizi dell'app e ogni affermazione da uno studio pubblicato, citato nella pagina.",
    ],
    contact: ['Domande? Scrivi a ', '. Risponde una persona, di solito entro 12 ore.'],
  },
  de: {
    h2: 'Gemacht von Rahman und Rahim',
    paragraphs: [
      'Wir machen Walkito zu zweit. Angefangen hat es ganz nah: Familie mit Plattfüßen, Freunde mit Fersenschmerzen.',
      'Einlagen, neue Schuhe, fünfzig Videos, die alle etwas anderes sagen, und trotzdem tat es jeden Morgen weh. Was fehlte, war ein Plan.',
      'Jetzt hast du einen.',
      'Die Ratgeber auf dieser Seite schreibt Walkito Research. Keiner von uns ist medizinische Fachperson: Jede Dosis stammt aus dem Übungskatalog der App und jede Aussage aus einer veröffentlichten Studie, die auf der Seite verlinkt ist.',
    ],
    contact: ['Fragen? Schreib an ', '. Es antwortet ein Mensch, meist innerhalb von 12 Stunden.'],
  },
};

export function Founders({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  return typeset(
    <>
      <h2>{copy.h2}</h2>
      {copy.paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <p className="story-contact">
        {copy.contact[0]}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        {copy.contact[1]}
      </p>
      <SocialLinks lang={lang} />
    </>,
  );
}
