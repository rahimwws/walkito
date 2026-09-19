import * as QuickActions from 'expo-quick-actions';
import { useQuickActionCallback } from 'expo-quick-actions/hooks';
import { useEffect } from 'react';
import { Linking } from 'react-native';

import { firstName, useProfileName } from '@/entities/profile';
import { SUPPORT_EMAIL } from '@/shared/config';


/**
 * The two things a long press can say: one static, one named.
 *
 * `TALK` is never constructed here — it is the id of the item baked into
 * `Info.plist` by the config plugin, and it appears in this file only so the
 * handler below can recognise a tap on it.
 *
 * Ids rather than URLs in the action payload: the payload is serialised into
 * the home screen's shortcut item and survives reinstalls of the JS bundle, so
 * anything put in it is a contract with a version of the app that may no longer
 * exist. An id is the smallest such contract.
 */
const LEAVING = 'leaving';
const TALK = 'talk';

/**
 * A pre-written email, because the point is to lower the cost of telling us.
 *
 * A bare `mailto:` opens an empty draft and an empty draft is a blank page —
 * the exact moment most people decide it is not worth it. Arriving at a mail
 * composer with the subject filled and the first line already written turns the
 * job into finishing a sentence.
 */
function mailto(subject: string, body: string): string {
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const MAIL = {
  [LEAVING]: mailto(
    'Before I delete Walkito',
    "I'm about to delete the app.\n\nWhat pushed me out:\n\n",
  ),
  [TALK]: mailto('Something is off in Walkito', "Hey —\n\nWhat's going on:\n\n"),
} as const;

/**
 * What the long press offers, on top of what is already there.
 *
 * Only the named plea. The generic "Something off?" is not here because it is
 * already on the phone: it is declared in `app.json` under `iosActions`, which
 * iOS bakes into `Info.plist` as a *static* shortcut. Static and dynamic items
 * are two separate lists and the system concatenates them — `setItems` cannot
 * replace, edit or remove a static one. Returning a support item here as well
 * printed the same offer twice, once anonymous and once with a name on it.
 *
 * So the two lists split by job rather than by wording. The static one is the
 * support channel and never changes; this one is the thing that only makes
 * sense once we know who is holding the phone, and it lands in the one menu
 * where the button beside it says Remove App. That is the whole reason it
 * exists — not to trap anyone, but to make the last moment before leaving a
 * moment where telling us costs one tap instead of finding a support page.
 *
 * Empty until there is a name. An unnamed plea is just the support link again.
 */
function itemsFor(name: string): QuickActions.Action[] {
  if (name.length === 0) return [];
  return [
    {
      id: LEAVING,
      // Caps, in the one place in the app that shouts. Everywhere inside it we
      // are careful never to raise our voice at someone — but this line is read
      // with a thumb already moving toward Remove App, and it has about half a
      // second to be noticed at all.
      title: `${name.toUpperCase()}, WAIT.`,
      // Sentence case underneath. Both lines in caps is a wall, and the second
      // line is the one that has to actually be read.
      subtitle: 'Deleting? Tell us what broke.',
      // Our own mascot rather than a system symbol. iOS keeps only the alpha of
      // a template image, so the artwork arrives as a silhouette — which is
      // exactly what makes it fill the fixed box corner to corner where an SF
      // Symbol leaves air around itself. See `assets/quick-actions`.
      icon: 'asset:wait',
    },
  ];
}

/**
 * The home screen shortcuts, kept in step with what the app knows.
 *
 * Two halves, and they have to be two halves. The generic item is declared in
 * `app.json` under `iosActions`, because it must exist on a phone where this
 * app has never been opened — the JS bundle has not run, so nothing here has
 * had a chance to call `setItems`. This half then *adds* to it; it cannot
 * replace it, which is the constraint the split above is built around.
 *
 * Lives at the root for the same reason the notification listener does: the tap
 * can be what launches the app, in which case no screen has mounted yet to hear
 * it.
 */
export function useQuickActions(): void {
  const name = firstName(useProfileName());

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      // Older devices and some Android launchers have nowhere to put these.
      // Setting items on one throws, and this is decoration — it must never be
      // the reason a launch fails.
      try {
        if (!(await QuickActions.isSupported())) return;
        if (cancelled) return;
        await QuickActions.setItems(itemsFor(name));
      } catch {
        // Deliberately silent. There is no recovery and nothing to tell the
        // user: they simply do not get a shortcut menu.
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [name]);

  useQuickActionCallback((action) => {
    const url = action.id === LEAVING ? MAIL[LEAVING] : MAIL[TALK];
    // Not awaited, and failures are swallowed: a phone with no mail account
    // configured rejects the URL, and there is nothing useful to say about that
    // in a handler the user reached by long-pressing an icon.
    void Linking.openURL(url).catch(() => {});
  });
}
