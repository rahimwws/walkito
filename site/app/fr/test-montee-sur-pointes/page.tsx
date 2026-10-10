import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.calfRaiseTest!;

export const metadata = guideMetadata(guide);

export default function CalfRaiseTestFrPage() {
  return <Guide guide={guide} />;
}
