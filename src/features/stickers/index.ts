/**
 * The sticker album: twenty mascot poses, each earned for showing up (a
 * check-in, a session, a test day whatever it measured, a rest day kept, a run
 * of days, a week on the plan, coming back), never for a pain number, a test
 * result or doing more than the plan's dose.
 *
 * `StickersCard` is the cover for a page to place; it reads its own data and
 * opens `StickersSheet`, the album. `stickersEarned` is the pure rule over a
 * `StickerHistory`, for anything else that needs to know.
 */
export { StickersCard, type StickersCardProps } from './ui/stickers-card';
export { StickersSheet, type StickersSheetProps } from './ui/stickers-sheet';
export { useStickers, type AlbumEntry, type StickerAlbum } from './model/use-stickers';
export {
  STICKERS,
  STICKER_COUNT,
  nextSessionSticker,
  stickersEarned,
  type NextSticker,
  type Sticker,
  type StickerHistory,
  type StickerId,
} from './model/stickers';
