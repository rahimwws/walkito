import { SocialLinks } from '@/components/SocialLinks';
import type { Lang } from '@/lib/i18n';
import { SUPPORT_EMAIL } from '@/lib/site';

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
      'Insoles, new shoes, ten videos saying different things, and it still hurt every morning. What they needed was a plan.',
      'Now you have one.',
    ],
    contact: ['Questions? Write to ', '. A person replies, usually within 12 hours.'],
  },
  ru: {
    h2: 'Walkito делают Рахман и Рахим',
    paragraphs: [
      'Walkito делаем только мы вдвоём. Всё началось с близких: у родных плоскостопие, у друзей болит пятка.',
      'Стельки, новая обувь, десяток видео, где говорят разное, а по утрам всё равно больно. Им нужен был план.',
      'Теперь он у вас есть.',
    ],
    contact: ['Есть вопросы? Напишите на ', '. Ответит человек, обычно в течение 12 часов.'],
  },
  es: {
    h2: 'Hecho por Rahman y Rahim',
    paragraphs: [
      'Hacemos Walkito solo nosotros dos. Empezó muy cerca de casa: familia con pie plano, amigos con dolor de talón.',
      'Plantillas, zapatillas nuevas, diez vídeos que dicen cosas distintas, y aun así dolía cada mañana. Lo que les faltaba era un plan.',
      'Ahora tienes uno.',
    ],
    contact: ['¿Preguntas? Escribe a ', '. Te responde una persona, normalmente en menos de 12 horas.'],
  },
};

export function Founders({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  return (
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
    </>
  );
}
