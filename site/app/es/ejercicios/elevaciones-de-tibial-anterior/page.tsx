import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.exTibialisRaises!;

export const metadata = guideMetadata(guide);

export default function ExTibialisRaisesEsPage() {
  return <Guide guide={guide} />;
}
