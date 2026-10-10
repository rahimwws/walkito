import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.exTibialisRaises!;

export const metadata = guideMetadata(guide);

export default function ExTibialisRaisesItPage() {
  return <Guide guide={guide} />;
}
