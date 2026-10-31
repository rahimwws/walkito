'use client';

import { useEffect, useRef, useState } from 'react';

import { WIDE_MEDIA } from '@/lib/exercise-media';

/**
 * One exercise, shown the way the app shows it: the app's own demonstration
 * clip, cut to a single repetition, looping, muted.
 *
 * The still is always in the page, and the clip is in it too inside
 * <noscript> for clients that do not run scripts. It is what search engines, screen readers
 * and people who prefer reduced motion get, and it holds the 4:5 box so the
 * layout never jumps. The video is only added once the card is near the
 * viewport, so a guide with seven exercises downloads the clips people
 * actually scroll to, and nothing at all for reduced motion.
 *
 * Files come from `scripts/exercise-media.mjs`, named by the app's exercise id:
 * `/exercises/<id>.webp` (+ `@2x`), `.webm` and `.mp4`.
 */

const DRAWING_ALT: Record<string, string> = {
  en: 'Drawing of the same move, with the working area highlighted',
  es: 'Dibujo del mismo movimiento, con la zona que trabaja resaltada',
  ru: 'Рисунок того же движения, рабочая зона выделена',
  pt: 'Desenho do mesmo movimento, com a área trabalhada destacada',
  fr: 'Dessin du même mouvement, avec la zone sollicitée mise en évidence',
  it: 'Disegno dello stesso movimento, con la zona che lavora evidenziata',
  de: 'Zeichnung derselben Bewegung, der beanspruchte Bereich hervorgehoben',
};

export function ExerciseMedia({ id, alt, caption, lang = 'en' }: { id: string; alt: string; caption?: string; lang?: string }) {
  const wide = WIDE_MEDIA.has(id);
  const ref = useRef<HTMLElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (node == null) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) {
      setPlay(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPlay(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const still = `/exercises/${id}.webp`;

  return (
    <figure ref={ref} className={wide ? 'exercise-media wide' : 'exercise-media'} data-exercise={id}>
      <div className="exercise-media-pair">
      <div className="exercise-media-frame">
        <img
          src={still}
          srcSet={`${still} 1x, /exercises/${id}@2x.webp 2x`}
          width={wide ? 800 : 720}
          height={wide ? 450 : 900}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
        {/* The same clip as plain HTML for anything that does not run scripts:
            crawlers that read the page as sent, and browsers with JS off. No
            autoplay there, so a long guide does not fetch every clip at once. */}
        <noscript>
          <video controls muted loop playsInline preload="none" poster={still}>
            <source src={`/exercises/${id}.webm`} type="video/webm" />
            <source src={`/exercises/${id}.mp4`} type="video/mp4" />
          </video>
        </noscript>
        {play && (
          <video autoPlay muted loop playsInline preload="none" poster={still} aria-hidden>
            <source src={`/exercises/${id}.webm`} type="video/webm" />
            <source src={`/exercises/${id}.mp4`} type="video/mp4" />
          </video>
        )}
      </div>
      {wide && (
        <div className="exercise-media-frame exercise-drawing">
          <img
            src={`/exercises/${id}-drawing.webp`}
            srcSet={`/exercises/${id}-drawing.webp 1x, /exercises/${id}-drawing@2x.webp 2x`}
            width={688}
            height={384}
            alt={DRAWING_ALT[lang] ?? DRAWING_ALT.en}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
