import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.exTibialisRaises!;

export const metadata = guideMetadata(guide);

export default function ExTibialisRaisesRuPage() {
  return <Guide guide={guide} />;
}
