import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.exAnkleRocks;

export const metadata = guideMetadata(guide);

export default function ExAnkleRocksPage() {
  return <Guide guide={guide} />;
}
