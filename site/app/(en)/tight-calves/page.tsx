import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.tightCalves;

export const metadata = guideMetadata(guide);

export default function TightCalvesPage() {
  return <Guide guide={guide} />;
}
