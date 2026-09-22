export {
  DailyBrief,
  BRIEF_ICONS,
  frame,
  metric,
  value,
  type BriefIcon,
  type BriefToken,
  type BriefTone,
  type DailyBriefProps,
  type Emphasis,
} from './daily-brief';

/**
 * Sentence templates live beside the renderer that consumes them.
 *
 * They started in `pages/home/model`, which was the page that needed them
 * first. Progress builds briefs too, and page-to-page is a sideways import the
 * layer rules forbid — so they moved down here rather than being duplicated.
 *
 * `template.ts` imports from `./daily-brief` **type-only**, so it carries no
 * runtime dependency on the component and stays testable under bun, which
 * cannot parse React Native. Import it as `./template` from a test; the barrel
 * below is for app code.
 */
export {
  buildBrief,
  pickVariant,
  type BriefSegment,
  type BriefVariants,
} from './template';
