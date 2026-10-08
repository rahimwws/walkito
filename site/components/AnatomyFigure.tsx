import type { Lang } from '@/lib/i18n';
import { ANATOMY, anatomyCredit, anatomySrc, type AnatomyId } from '@/lib/anatomy';

/**
 * A labelled anatomy illustration inside a guide section. Plain HTML, no
 * script: the labels are in the image, the caption and credit under it.
 * Portrait figures are kept narrower so they do not fill a whole screen.
 */
export function AnatomyFigure({
  id,
  lang,
  caption,
  alt,
}: {
  id: AnatomyId;
  lang: Lang;
  caption: string;
  alt: string;
}) {
  const { w, h } = ANATOMY[id];
  const credit = anatomyCredit(id, lang);
  const tall = h > w;
  return (
    <figure className={tall ? 'anatomy anatomy-tall' : 'anatomy'}>
      <img
        src={anatomySrc(id, lang)}
        srcSet={`${anatomySrc(id, lang, true)} 600w, ${anatomySrc(id, lang)} 1200w`}
        sizes={tall ? '(max-width: 520px) 100vw, 440px' : '(max-width: 640px) 100vw, 560px'}
        width={w}
        height={h}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
      <figcaption>
        {caption}{' '}
        <small className="anatomy-credit">
          {'author' in credit ? (
            <>
              {credit.lead}
              <a href={credit.authorUrl} rel="noopener">
                {credit.author}
              </a>
              {', '}
              <a href={credit.licenseUrl} rel="license noopener">
                {credit.license}
              </a>
              {`, ${credit.tail}`}
            </>
          ) : (
            credit.lead
          )}
        </small>
      </figcaption>
    </figure>
  );
}
