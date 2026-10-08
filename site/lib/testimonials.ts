import type { Lang } from '@/lib/i18n';

/**
 * What people say about Walkito, and the stores' ratings.
 *
 * PLACEHOLDERS, ALL OF THEM. On 8 October 2026 the App Store listing had no
 * ratings and no reviews (iTunes lookup API), and the Google Play listing is
 * not published yet. The owner asked for stand-in text so the reviews section
 * could be designed; none of the people below exist and none of the numbers
 * were measured.
 *
 * That is what `sample` is for. `components/home/Reviews.tsx` shows a sample
 * entry only outside a production build, so `next build` (what the deploy
 * runs) never puts an invented review or star rating on the live site.
 *
 * To replace them: copy a real review word for word, with the person's
 * permission and the name they agreed to (first name and last initial),
 * translate it for the other six languages, and set `sample: false`. A
 * rating goes in as the store shows it, with its count, also `sample: false`.
 * Never add `aggregateRating` to the page's JSON-LD from these: Google wants
 * ratings collected on the page itself, and a store rating is not that.
 */
export type Testimonial = {
  quote: Record<Lang, string>;
  name: string;
  role: Record<Lang, string>;
  /**
   * The stars that came with the review, if it came from a store. A review
   * sent by email has none, so leave it out and the card shows no stars
   * rather than five nobody gave.
   */
  stars?: number;
  sample: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Maya C.',
    role: {
      en: 'Nurse, night shifts',
      ru: 'Медсестра, ночные смены',
      es: 'Enfermera, turnos de noche',
      pt: 'Enfermeira, plantões noturnos',
      fr: 'Infirmière, gardes de nuit',
      it: 'Infermiera, turni di notte',
      de: 'Krankenpflegerin, Nachtschichten',
    },
    quote: {
      en: 'Five minutes before a night shift is something I can actually keep up. On a rough morning the session gets lighter, so I don’t skip it.',
      ru: 'Пять минут перед ночной сменой я правда успеваю. Если утро тяжёлое, занятие становится легче, и я его не пропускаю.',
      es: 'Cinco minutos antes del turno de noche sí los puedo cumplir. Si la mañana es mala, la sesión es más suave y no me la salto.',
      pt: 'Cinco minutos antes do plantão noturno é algo que eu consigo manter de verdade. Numa manhã ruim a sessão fica mais leve, então eu não pulo.',
      fr: 'Cinq minutes avant une garde de nuit, ça, j’arrive vraiment à le tenir. Quand le matin est difficile, la séance s’allège, alors je ne la saute pas.',
      it: 'Cinque minuti prima del turno di notte riesco davvero a mantenerli. Se la mattina è dura la sessione si alleggerisce, così non la salto.',
      de: 'Fünf Minuten vor der Nachtschicht schaffe ich wirklich. An einem schlechten Morgen wird die Einheit leichter, also lasse ich sie nicht ausfallen.',
    },
    stars: 5,
    sample: true,
  },
  {
    name: 'Daniel R.',
    role: {
      en: 'Runner, 10k',
      ru: 'Бегает 10 км',
      es: 'Corredor, 10 km',
      pt: 'Corredor, 10\u00a0km',
      fr: 'Coureur, 10\u00a0km',
      it: 'Corre i 10\u00a0km',
      de: 'Läufer, 10\u00a0km',
    },
    quote: {
      en: 'The short test every two weeks is my favourite part. Same moves each time, so I can see what is actually changing.',
      ru: 'Больше всего мне нравится короткий тест раз в две недели. Упражнения каждый раз те же, поэтому видно, что на самом деле меняется.',
      es: 'Lo que más me gusta es la prueba corta cada dos semanas. Siempre los mismos ejercicios, así veo qué está cambiando de verdad.',
      pt: 'O teste curto a cada duas semanas é a minha parte favorita. Sempre os mesmos movimentos, então dá para ver o que está mudando de verdade.',
      fr: 'Le petit test toutes les deux semaines, c’est ce que je préfère. Toujours les mêmes mouvements, donc je vois ce qui change vraiment.',
      it: 'Il test breve ogni due settimane è la parte che preferisco. Sempre gli stessi movimenti, così vedo cosa sta cambiando davvero.',
      de: 'Der kurze Test alle zwei Wochen ist mein Lieblingsteil. Jedes Mal dieselben Übungen, so sehe ich, was sich wirklich verändert.',
    },
    stars: 5,
    sample: true,
  },
  {
    name: 'Sofia M.',
    role: {
      en: 'Teacher, on her feet all day',
      ru: 'Учительница, весь день на ногах',
      es: 'Maestra, todo el día de pie',
      pt: 'Professora, o dia todo em pé',
      fr: 'Enseignante, debout toute la journée',
      it: 'Insegnante, in piedi tutto il giorno',
      de: 'Lehrerin, den ganzen Tag auf den Beinen',
    },
    quote: {
      en: 'I answer the widget before I get out of bed. One tap, and the day’s session is already set for how my feet feel.',
      ru: 'Отвечаю на виджет ещё в кровати. Одно касание, и занятие на день уже подстроено под то, как чувствуют себя стопы.',
      es: 'Respondo el widget antes de levantarme. Un toque y la sesión del día ya está ajustada a cómo siento los pies.',
      pt: 'Respondo o widget antes de sair da cama. Um toque e a sessão do dia já está ajustada a como meus pés estão.',
      fr: 'Je réponds au widget avant même de me lever. Un appui, et la séance du jour est déjà réglée sur l’état de mes pieds.',
      it: 'Rispondo al widget prima di alzarmi dal letto. Un tocco, e la sessione del giorno è già adattata a come sento i piedi.',
      de: 'Ich beantworte das Widget, bevor ich aufstehe. Einmal tippen, und die Einheit des Tages ist schon darauf abgestimmt, wie sich meine Füße anfühlen.',
    },
    stars: 5,
    sample: true,
  },
  {
    name: 'James T.',
    role: {
      en: 'Warehouse shifts',
      ru: 'Смены на складе',
      es: 'Turnos en un almacén',
      pt: 'Turnos em um depósito',
      fr: 'Travaille en entrepôt',
      it: 'Turni in magazzino',
      de: 'Schichten im Lager',
    },
    quote: {
      en: 'Nothing to buy and no gym. A towel, a wall and short videos, each with one cue, which is about all I take in at six in the morning.',
      ru: 'Ничего не надо покупать, зал не нужен. Полотенце, стена и короткие видео с одной подсказкой, больше в шесть утра я и не воспринимаю.',
      es: 'Nada que comprar y sin gimnasio. Una toalla, una pared y videos cortos con una sola indicación, que es lo que asimilo a las seis de la mañana.',
      pt: 'Nada para comprar e sem academia. Uma toalha, uma parede e vídeos curtos, cada um com uma única orientação, que é mais ou menos o que eu absorvo às seis da manhã.',
      fr: 'Rien à acheter, pas de salle. Une serviette, un mur et de courtes vidéos avec une seule consigne chacune, c’est à peu près tout ce que j’assimile à six heures du matin.',
      it: 'Niente da comprare e niente palestra. Un asciugamano, un muro e video brevi, ognuno con una sola indicazione, che è più o meno quello che recepisco alle sei del mattino.',
      de: 'Nichts zu kaufen, kein Fitnessstudio. Ein Handtuch, eine Wand und kurze Videos mit jeweils einem Hinweis, mehr nehme ich um sechs Uhr morgens auch nicht auf.',
    },
    stars: 5,
    sample: true,
  },
  {
    name: 'Elena P.',
    role: {
      en: 'Walks the dog twice a day',
      ru: 'Гуляет с собакой дважды в день',
      es: 'Pasea al perro dos veces al día',
      pt: 'Passeia com o cachorro duas vezes por dia',
      fr: 'Promène son chien deux fois par jour',
      it: 'Porta fuori il cane due volte al giorno',
      de: 'Geht zweimal am Tag mit dem Hund raus',
    },
    quote: {
      en: 'I had started and dropped other apps. This one asks how my feet are each morning and changes the plan, so it feels made for me.',
      ru: 'Другие приложения я начинала и бросала. Это каждое утро спрашивает, как мои стопы, и меняет план, поэтому он ощущается моим.',
      es: 'Había empezado y dejado otras apps. Esta me pregunta cada mañana cómo están mis pies y cambia el plan, así que se siente hecha para mí.',
      pt: 'Eu já tinha começado e largado outros apps. Este pergunta toda manhã como estão meus pés e muda o plano, então parece feito para mim.',
      fr: 'J’avais commencé puis abandonné d’autres applis. Celle-ci me demande chaque matin comment vont mes pieds et adapte le plan, alors j’ai l’impression qu’elle est faite pour moi.',
      it: 'Avevo iniziato e mollato altre app. Questa ogni mattina mi chiede come stanno i piedi e cambia il piano, quindi la sento fatta per me.',
      de: 'Andere Apps hatte ich angefangen und wieder aufgegeben. Diese fragt jeden Morgen, wie es meinen Füßen geht, und passt den Plan an, deshalb fühlt sie sich wie für mich gemacht an.',
    },
    stars: 5,
    sample: true,
  },
];

export type StoreRating = {
  /** Out of 5, as the store rounds it. Null until the store shows one. */
  rating: number | null;
  /** How many ratings the store counts. */
  count: number | null;
  sample: boolean;
};

/** Placeholder ratings: see the note at the top of this file. */
export const STORE_RATINGS: { appStore: StoreRating; googlePlay: StoreRating } = {
  appStore: { rating: 4.9, count: 120, sample: true },
  googlePlay: { rating: 4.8, count: 80, sample: true },
};
