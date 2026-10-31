import { MergedRedirect, mergedMetadata } from '@/components/MergedRedirect';

/** Folded into /de/fersensporn-uebungen/ (lib/google-hidden.ts, MERGED). */
export const metadata = mergedMetadata('/de/fersensporn-uebungen/');

export default function Moved() {
  return <MergedRedirect to="/de/fersensporn-uebungen/" />;
}
