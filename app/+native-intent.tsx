// Route file only: incoming links are rewritten in `src/pages/open`.
import { rewriteIncomingPath } from '@/pages/open';

export function redirectSystemPath({ path, initial }: { path: string; initial: boolean }): string | null {
  return rewriteIncomingPath(path, initial);
}
