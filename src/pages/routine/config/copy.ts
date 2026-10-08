import type { ProtocolId, ProtocolPosition } from '@/entities/protocols';
import type { Key } from '@/shared/lib/i18n';

/**
 * The page's paragraph per routine: what it does and why now.
 *
 * Here rather than on `Protocol`, because only this page shows it; the entity
 * carries what every surface reads (title, cue, steps).
 */
export const WHY_KEYS: Readonly<Record<ProtocolId, Key>> = {
  flare: 'quick.flare.why',
  pre_run: 'quick.preRun.why',
  post_run: 'quick.postRun.why',
  at_work: 'quick.atWork.why',
  morning: 'quick.morning.why',
};

export const POSITION_KEYS: Readonly<Record<ProtocolPosition, Key>> = {
  seated: 'quick.seated',
  standing: 'quick.standing',
  in_bed: 'quick.inBed',
};
