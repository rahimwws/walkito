import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.exToeSpread!;

export const metadata = guideMetadata(guide);

export default function ExToeSpreadItPage() {
  return <Guide guide={guide} />;
}
