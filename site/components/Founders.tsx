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
      'Insoles, new shoes, ten videos saying different things, and it still hurt every morning. It’s not your fault. Nobody gave you a plan: which exercises, how many, in what order, and what to do on a bad day.',
      'Now you have one.',
    ],
    contact: ['Questions? Write to ', '. A person replies, usually within 12 hours.'],
  },
  ru: {
    h2: 'Walkito делают Рахман и Рахим',
    paragraphs: [
      'Walkito делаем только мы вдвоём. Всё началось с близких: у родных плоскостопие, у друзей болит пятка.',
      'Стельки, новая обувь, десяток видео, где говорят разное, а по утрам всё равно больно. Вы в этом не виноваты. Просто никто не дал вам план: какие упражнения, сколько, в каком порядке и что делать в плохой день.',
      'Теперь он у вас есть.',
    ],
    contact: ['Есть вопросы? Напишите на ', '. Ответит человек, обычно в течение 12 часов.'],
  },
  es: {
    h2: 'Hecho por Rahman y Rahim',
    paragraphs: [
      'Hacemos Walkito solo nosotros dos. Empezó muy cerca de casa: familia con pie plano, amigos con dolor de talón.',
      'Plantillas, zapatillas nuevas, diez vídeos que dicen cosas distintas, y aun así dolía cada mañana. No es culpa tuya. Nadie te dio un plan: qué ejercicios, cuántos, en qué orden y qué hacer en un día malo.',
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
