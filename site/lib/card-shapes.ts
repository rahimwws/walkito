/** The three shapes of an article's share image (lib/article-card.tsx), the
 * ones Google asks for on an Article: 16:9, 4:3 and 1:1. Kept apart from the
 * drawing code so lib/guides can name the files without loading JSX
 * (scripts/build-llms.mjs reads lib/guides with plain Node). */
export type CardRatio = '16x9' | '4x3' | '1x1';
export const CARD_RATIOS: readonly CardRatio[] = ['16x9', '4x3', '1x1'];
export const CARD_SIZE: Record<CardRatio, { width: number; height: number }> = {
  '16x9': { width: 1200, height: 675 },
  '4x3': { width: 1200, height: 900 },
  '1x1': { width: 1200, height: 1200 },
};
