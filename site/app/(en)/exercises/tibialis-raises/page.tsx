import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.exTibialisRaises;

export const metadata = guideMetadata(guide);

export default function ExTibialisRaisesPage() {
  return <Guide guide={guide} />;
}
