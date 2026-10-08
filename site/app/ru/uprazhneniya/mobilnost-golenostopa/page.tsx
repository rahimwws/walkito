import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.exAnkleRocks!;

export const metadata = guideMetadata(guide);

export default function ExAnkleRocksRuPage() {
  return <Guide guide={guide} />;
}
