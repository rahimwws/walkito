import { endPassSetPreview, usePassSetPreview } from '../model/preview';

import { PassCheckoutSheet } from './pass-checkout-sheet';

/**
 * The checkout's "Your 3 months are set" in development builds, raised by
 * `?previewPassSet` (`devPreviewPassSet`). Mounted at the root behind
 * `__DEV__`, with nothing else over the app, so its sheet presents on its
 * own. Both buttons only close it.
 */
export function PassSetPreview() {
  const startsAt = usePassSetPreview();
  return (
    <PassCheckoutSheet
      stage={startsAt != null ? { kind: 'set', startsAt } : { kind: 'idle' }}
      onClose={endPassSetPreview}
      onSignedIn={endPassSetPreview}
      onTurnOffRenewal={endPassSetPreview}
      onDone={endPassSetPreview}
      onHidden={() => undefined}
    />
  );
}
