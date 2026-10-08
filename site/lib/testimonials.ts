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
 * translate it for the other two languages, and set `sample: false`. A
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
    },
    quote: {
      en: 'Five minutes before a night shift is something I can actually keep up. On a rough morning the session gets lighter, so I don’t skip it.',
      ru: 'Пять минут перед ночной сменой я правда успеваю. Если утро тяжёлое, занятие становится легче, и я его не пропускаю.',
      es: 'Cinco minutos antes del turno de noche sí los puedo cumplir. Si la mañana es mala, la sesión es más suave y no me la salto.',
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
    },
    quote: {
      en: 'The short test every two weeks is my favourite part. Same moves each time, so I can see what is actually changing.',
      ru: 'Больше всего мне нравится короткий тест раз в две недели. Упражнения каждый раз те же, поэтому видно, что на самом деле меняется.',
      es: 'Lo que más me gusta es la prueba corta cada dos semanas. Siempre los mismos ejercicios, así veo qué está cambiando de verdad.',
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
    },
    quote: {
      en: 'I answer the widget before I get out of bed. One tap, and the day’s session is already set for how my feet feel.',
      ru: 'Отвечаю на виджет ещё в кровати. Одно касание, и занятие на день уже подстроено под то, как чувствуют себя стопы.',
      es: 'Respondo el widget antes de levantarme. Un toque y la sesión del día ya está ajustada a cómo siento los pies.',
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
    },
    quote: {
      en: 'Nothing to buy and no gym. A towel, a wall and short videos, each with one cue, which is about all I take in at six in the morning.',
      ru: 'Ничего не надо покупать, зал не нужен. Полотенце, стена и короткие видео с одной подсказкой, больше в шесть утра я и не воспринимаю.',
      es: 'Nada que comprar y sin gimnasio. Una toalla, una pared y videos cortos con una sola indicación, que es lo que asimilo a las seis de la mañana.',
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
    },
    quote: {
      en: 'I had started and dropped other apps. This one asks how my feet are each morning and changes the plan, so it feels made for me.',
      ru: 'Другие приложения я начинала и бросала. Это каждое утро спрашивает, как мои стопы, и меняет план, поэтому он ощущается моим.',
      es: 'Había empezado y dejado otras apps. Esta me pregunta cada mañana cómo están mis pies y cambia el plan, así que se siente hecha para mí.',
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
