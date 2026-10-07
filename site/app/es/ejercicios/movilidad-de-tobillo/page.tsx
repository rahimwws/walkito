import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.exAnkleRocks!;

export const metadata = guideMetadata(guide);

export default function ExAnkleRocksEsPage() {
  return <Guide guide={guide} />;
}
