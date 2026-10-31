import { createContext, useContext, type ReactNode } from 'react';

import { useColorScheme } from '@/shared/lib/theme';

type Scheme = 'light' | 'dark';

const Override = createContext<Scheme | null>(null);

/**
 * Renders the kit inside it in one scheme, whatever the app's.
 *
 * For the UI lab, which has to show the light half of every token while the
 * app itself renders dark only (`DARK_ONLY` in `shared/lib/theme`). Nothing in
 * a shipping screen should need it: a screen follows the app.
 *
 * Only JS colours follow it. The system draws Liquid Glass and the SwiftUI
 * number host from the trait collection, so `GlassFace` passes the scheme to
 * the glass explicitly and a rolled number stays in the app's scheme.
 */
export function RaisedScheme({ scheme, children }: { scheme: Scheme; children: ReactNode }) {
  return <Override.Provider value={scheme}>{children}</Override.Provider>;
}

/** The scheme the kit renders in: an enclosing `RaisedScheme`, else the app's. */
export function useRaisedScheme(): Scheme {
  const app = useColorScheme();
  return useContext(Override) ?? app;
}
