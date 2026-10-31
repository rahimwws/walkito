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
/** Where an editor can check who we are (the same profiles as the site's sameAs). */
const LINKEDIN = { rahman: 'https://www.linkedin.com/in/rahman-bazarov/', rahim: 'https://www.linkedin.com/in/rhdklv/' } as const;

const PEOPLE: Record<Lang, [string, string, string]> = {
  en: ['Find us on LinkedIn: ', ' and ', '.'],
  ru: ['Мы в LinkedIn: ', ' и ', '.'],
  es: ['Estamos en LinkedIn: ', ' y ', '.'],
  pt: ['Estamos no LinkedIn: ', ' e ', '.'],
  fr: ['Retrouvez-nous sur LinkedIn\u00A0: ', ' et ', '.'],
  it: ['Ci trovi su LinkedIn: ', ' e ', '.'],
  de: ['Du findest uns auf LinkedIn: ', ' und ', '.'],
};

const COPY: Record<Lang, { h2: string; paragraphs: readonly string[]; contact: [string, string] }> = {
  en: {
    h2: 'Made by Rahman and Rahim',
    paragraphs: [
      'We make Walkito, just the two of us. It started close to home: family with flat feet, friends with heel pain.',
      'Insoles, new shoes, fifty videos saying different things, and it still hurt every morning. What they needed was a plan.',
      'We write the guides on this site ourselves. Neither of us is a clinician: every dose comes from the app\'s exercise catalogue and every claim from a published study, linked on the page.',
    ],
    contact: ['Questions? Write to ', '. A person replies, usually within 12 hours.'],
  },
  ru: {
    h2: 'Walkito делают Рахман и Рахим',
    paragraphs: [
      'Walkito делаем только мы вдвоём. Всё началось с близких: у родных плоскостопие, у друзей болит пятка.',
      'Стельки, новая обувь, полсотни видео, где говорят разное, а по утрам всё равно больно. Им нужен был план.',
      'Гайды на этом сайте пишем мы сами. Мы не врачи: каждая дозировка взята из каталога упражнений приложения, а каждое утверждение из опубликованного исследования со ссылкой на странице.',
    ],
    contact: ['Есть вопросы? Напишите на ', '. Ответит живой человек, обычно в течение 12 часов.'],
  },
  es: {
    h2: 'Hecho por Rahman y Rahim',
    paragraphs: [
      'Hacemos Walkito solo nosotros dos. Empezó muy cerca de casa: familia con pie plano, amigos con dolor de talón.',
      'Plantillas, zapatos nuevos, cincuenta videos que dicen cosas distintas, y aun así dolía cada mañana. Lo que les faltaba era un plan.',
      'Las guías de este sitio las escribimos nosotros. Ninguno de los dos es profesional de la salud: cada dosis sale del catálogo de ejercicios de la app y cada afirmación de un estudio publicado, enlazado en la página.',
    ],
    contact: ['¿Preguntas? Escribe a ', '. Te responde una persona, normalmente en menos de 12 horas.'],
  },
  pt: {
    h2: 'Feito por Rahman e Rahim',
    paragraphs: [
      'Fazemos o Walkito só nós dois. Começou bem perto de casa: família com pé chato, amigos com dor no calcanhar.',
      'Palmilhas, tênis novos, cinquenta vídeos dizendo coisas diferentes, e ainda doía toda manhã. O que faltava era um plano.',
      'Os guias deste site somos nós que escrevemos. Nenhum de nós é profissional de saúde: cada dose vem do catálogo de exercícios do app e cada afirmação de um estudo publicado, com link na página.',
    ],
    contact: ['Dúvidas? Escreva para ', '. Quem responde é uma pessoa, normalmente em até 12 horas.'],
  },
  fr: {
    h2: 'Fait par Rahman et Rahim',
    paragraphs: [
      "Walkito, c’est nous deux, et personne d’autre. Tout est parti de nos proches\u00A0: de la famille aux pieds plats, des amis avec une douleur au talon.",
      "Semelles, nouvelles chaussures, cinquante vidéos qui disent des choses différentes, et ça faisait toujours mal chaque matin. Ce qui manquait, c’était un plan.",
      "Les guides de ce site, nous les écrivons nous-mêmes. Aucun de nous n’est professionnel de santé\u00A0: chaque dose vient du catalogue d’exercices de l’app et chaque affirmation d’une étude publiée, en lien sur la page.",
    ],
    contact: ['Une question\u00A0? Écrivez à ', '. Une vraie personne répond, en général en moins de 12 heures.'],
  },
  it: {
    h2: 'Fatto da Rahman e Rahim',
    paragraphs: [
      'Facciamo Walkito solo noi due. È nato vicino a casa: familiari con il piede piatto, amici con il dolore al tallone.',
      'Plantari, scarpe nuove, cinquanta video che dicevano cose diverse, e ogni mattina faceva ancora male. Mancava un piano.',
      "Le guide di questo sito le scriviamo noi. Nessuno di noi è un professionista sanitario: ogni dose viene dal catalogo di esercizi dell'app e ogni affermazione da uno studio pubblicato, citato nella pagina.",
    ],
    contact: ['Domande? Scrivi a ', '. Risponde una persona, di solito entro 12 ore.'],
  },
  de: {
    h2: 'Gemacht von Rahman und Rahim',
    paragraphs: [
      'Wir machen Walkito zu zweit. Angefangen hat es ganz nah: Familie mit Plattfüßen, Freunde mit Fersenschmerzen.',
      'Einlagen, neue Schuhe, fünfzig Videos, die alle etwas anderes sagen, und trotzdem tat es jeden Morgen weh. Was fehlte, war ein Plan.',
      'Die Ratgeber auf dieser Seite schreiben wir selbst. Keiner von uns ist Arzt oder Physiotherapeut: Jede Dosis stammt aus dem Übungskatalog der App und jede Aussage aus einer veröffentlichten Studie, die auf der Seite verlinkt ist.',
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
      <p className="story-people">
        {PEOPLE[lang][0]}
        <a href={LINKEDIN.rahman} rel="noopener" target="_blank">
          Rahman Bazarov
        </a>
        {PEOPLE[lang][1]}
        <a href={LINKEDIN.rahim} rel="noopener" target="_blank">
          Rahim Hudaykulyyev
        </a>
        {PEOPLE[lang][2]}
      </p>
      <SocialLinks lang={lang} />
    </>,
  );
}
