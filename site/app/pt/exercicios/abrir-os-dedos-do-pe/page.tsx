import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.exToeSpread!;

export const metadata = guideMetadata(guide);

export default function ExToeSpreadPtPage() {
  return <Guide guide={guide} />;
}
