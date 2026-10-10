import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exToeSpread!;

export const metadata = guideMetadata(guide);

export default function ExToeSpreadDePage() {
  return <Guide guide={guide} />;
}
