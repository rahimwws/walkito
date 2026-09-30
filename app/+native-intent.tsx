// Route file only: incoming links are rewritten in `src/pages/open`.
import { rewriteIncomingPath } from '@/pages/open';

export function redirectSystemPath({ path }: { path: string; initial: boolean }): string {
  return rewriteIncomingPath(path);
}
