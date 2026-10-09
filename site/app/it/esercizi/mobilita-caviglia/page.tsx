import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.exAnkleRocks!;

export const metadata = guideMetadata(guide);

export default function ExAnkleRocksItPage() {
  return <Guide guide={guide} />;
}
