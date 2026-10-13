import { Asset } from 'expo-asset';
import { Directory, File, Paths } from 'expo-file-system';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import type { NotificationArt } from './art';

/**
 * The mascot on a notification, on iPhone.
 *
 * iOS draws a picture attached to a local notification as a thumbnail beside
 * the text, and the whole picture when the banner is pulled down. Android's
 * side is `attachment.android.ts`: a local notification there cannot carry one
 * through expo-notifications, so it asks for nothing and its requests go out
 * exactly as they did before.
 *
 * Two things about how iOS takes the file shape this module:
 *
 * - **It moves the file** into its own store when the request is added
 *   (`UNNotificationAttachment`); only a file inside the app bundle is copied
 *   instead. An asset that arrived in an over-the-air update lives in
 *   expo-updates' own store, and under Metro in expo-asset's cached download:
 *   handed either, iOS would take it away from the app and the next
 *   notification would find it gone. So every request gets a fresh copy of its
 *   own in the cache, and whatever iOS did not take is deleted after.
 * - **It checks the file** when the request is built, and one it does not like
 *   is dropped (expo-notifications `compactMap`s the attachments): the
 *   notification still goes out, without the picture.
 *
 * Nothing here may stop a reminder. Any failure, and anything slower than
 * `ART_TIMEOUT_MS`, is a notification without a picture, never no notification.
 */

type Attachment = Notifications.NotificationContentAttachmentIos;

/**
 * 360 px square PNGs on transparency, under 10 KB each. Static requires, so Metro bundles
 * them; Android's file has none, so they stay out of its bundle.
 */
const ART: Readonly<Record<NotificationArt, number>> = {
  session: require('@assets/notifications/session.png'),
  plan: require('@assets/notifications/plan.png'),
  checkin: require('@assets/notifications/checkin.png'),
  streak: require('@assets/notifications/streak.png'),
  retest: require('@assets/notifications/retest.png'),
  flare: require('@assets/notifications/flare.png'),
  load: require('@assets/notifications/load.png'),
  gait: require('@assets/notifications/gait.png'),
  block: require('@assets/notifications/block.png'),
  winback: require('@assets/notifications/winback.png'),
  offer: require('@assets/notifications/offer.png'),
  expiry: require('@assets/notifications/expiry.png'),
  steps: require('@assets/notifications/steps.png'),
};

/** Long enough for a local file copy many times over; short enough that a
 * week's window, laid one request at a time, is never held up by pictures. */
const ART_TIMEOUT_MS = 2_000;

/** The cache folder the copies wait in until iOS takes them. */
const FOLDER = 'notification-art';

let swept = false;
let serial = 0;

/**
 * The folder, emptied on its first use in each run of the app.
 *
 * A copy iOS took is gone from here already, and one it refused is deleted
 * after the request (`scheduleWithArt`). What can be left is a copy from a run
 * that was killed between the two, and that is what the sweep is for. Once per
 * process and synchronously, before this run has made any copy of its own.
 */
function folder(): Directory {
  const dir = new Directory(Paths.cache, FOLDER);
  if (!swept) {
    swept = true;
    try {
      if (dir.exists) dir.delete();
    } catch {
      // Left for the next run. Cache, so the system may clear it first.
    }
  }
  dir.create({ intermediates: true, idempotent: true });
  return dir;
}

/** The bundled file behind each picture, resolved once per run. */
const sources = new Map<NotificationArt, Promise<string | null>>();

function sourceFor(name: NotificationArt): Promise<string | null> {
  const known = sources.get(name);
  if (known != null) return known;
  const pending = (async () => {
    const asset = Asset.fromModule(ART[name]);
    await asset.downloadAsync();
    return asset.localUri ?? null;
  })();
  sources.set(name, pending);
  // A miss is not remembered: the next notification gets another go.
  pending.then(
    (uri) => {
      if (uri == null) sources.delete(name);
    },
    () => sources.delete(name),
  );
  return pending;
}

async function copyFor(name: NotificationArt): Promise<Attachment[]> {
  const source = await sourceFor(name);
  if (source == null) return [];
  const target = new File(folder(), `${name}-${Date.now().toString(36)}-${(serial += 1)}.png`);
  try {
    await new File(source).copy(target);
  } catch (error) {
    // Under Metro the source is expo-asset's download in the cache, which the
    // system may have cleared; resolve it again next time.
    sources.delete(name);
    throw error;
  }
  return [{ identifier: name, url: target.uri, type: null, typeHint: 'public.png' }];
}

/** `work`, or `fallback` once `ms` have passed without it. A copy that lands
 * after that is left for the sweep. */
function within<T>(work: Promise<T>, ms: number, fallback: T): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => resolve(fallback), ms);
    work.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error: unknown) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}

/**
 * The attachment for `name`: a fresh copy of its picture, ready for iOS to take.
 *
 * Empty on any other platform, on any failure, and after `ART_TIMEOUT_MS`.
 */
export async function attachmentFor(name: NotificationArt): Promise<Attachment[]> {
  if (Platform.OS !== 'ios') return [];
  try {
    return await within(copyFor(name), ART_TIMEOUT_MS, []);
  } catch (error) {
    if (__DEV__) console.warn('[notify] no picture for', name, error);
    return [];
  }
}

/** Deletes whatever copy iOS did not take: refused at validation, or a
 * request that failed. A copy it took is no longer at this path. */
function release(attachments: readonly Attachment[]): void {
  for (const { url } of attachments) {
    if (url == null) continue;
    try {
      const left = new File(url);
      if (left.exists) left.delete();
    } catch {
      // Swept on the next run.
    }
  }
}

/**
 * `Notifications.scheduleNotificationAsync`, with the picture for `art`.
 *
 * The request goes out as given. On iPhone the only change is
 * `content.attachments`, and only when a picture was ready; everything else,
 * the text, the data, the trigger, is the caller's, untouched. Resolves and
 * rejects exactly as the plain call would.
 *
 * A request refused with its picture is sent again without it: moving the file
 * into the data store happens in `add`, and a failure there
 * (`UNErrorCodeAttachmentMoveIntoDataStoreFailed`) fails the whole request,
 * which would otherwise cost the reminder, not just the picture.
 */
export async function scheduleWithArt(
  art: NotificationArt,
  request: Notifications.NotificationRequestInput,
): Promise<string> {
  const attachments = await attachmentFor(art);
  if (attachments.length === 0) return Notifications.scheduleNotificationAsync(request);
  try {
    return await Notifications.scheduleNotificationAsync({
      ...request,
      content: { ...request.content, attachments },
    });
  } catch (error) {
    if (__DEV__) console.warn('[notify] refused with its picture, sending without', art, error);
    return await Notifications.scheduleNotificationAsync(request);
  } finally {
    release(attachments);
  }
}

/**
 * A picture copied ahead of the moment its notification is for.
 *
 * For a request that has to leave the instant something happens, with nothing
 * awaited first: the comeback, sent as the app goes to the background
 * (`offer-pushes.ts`). `prepareArt` does the slow part (resolving the asset,
 * copying the file) while nothing is waiting on it, and
 * `scheduleWithPreparedArt` then makes the request on the spot.
 *
 * One request per copy. iOS moves the file away when it takes it, so a
 * prepared picture is spent by its first use, whatever the answer, and the
 * next request needs a fresh one. A copy that is never used is deleted with
 * `releaseArt`, or by the next run's sweep.
 */
export type PreparedArt = {
  readonly art: NotificationArt;
  /** Empty off iPhone, and whenever the copy could not be made. */
  readonly attachments: readonly Attachment[];
  spent: boolean;
};

/** A fresh copy of `name`'s picture, held for one request. Never rejects:
 * no picture is a prepared art with no attachment. */
export async function prepareArt(name: NotificationArt): Promise<PreparedArt> {
  return { art: name, attachments: await attachmentFor(name), spent: false };
}

/**
 * `scheduleWithArt`, for a request that cannot wait.
 *
 * The native request is made before this returns: nothing is awaited ahead of
 * it, so a caller on its way to the background can call this first and know
 * the request has left. With the prepared picture when it is unspent, without
 * it otherwise; refused with it, it is sent again without, as
 * `scheduleWithArt` does. Spends `prepared` either way.
 */
export function scheduleWithPreparedArt(
  prepared: PreparedArt | null,
  request: Notifications.NotificationRequestInput,
): Promise<string> {
  const attachments = prepared != null && !prepared.spent ? prepared.attachments : [];
  if (prepared != null) prepared.spent = true;
  if (attachments.length === 0) return Notifications.scheduleNotificationAsync(request);
  return Notifications.scheduleNotificationAsync({
    ...request,
    content: { ...request.content, attachments: [...attachments] },
  }).then(
    (id) => {
      release(attachments);
      return id;
    },
    (error: unknown) => {
      if (__DEV__) console.warn('[notify] refused with its picture, sending without', prepared?.art, error);
      release(attachments);
      return Notifications.scheduleNotificationAsync(request);
    },
  );
}

/** A prepared picture that will not be sent: its copy, deleted now rather
 * than at the next run's sweep. Nothing to do once it is spent. */
export function releaseArt(prepared: PreparedArt | null): void {
  if (prepared == null || prepared.spent) return;
  prepared.spent = true;
  release(prepared.attachments);
}
