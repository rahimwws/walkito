import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.exTibialisRaises!;

export const metadata = guideMetadata(guide);

export default function ExTibialisRaisesPtPage() {
  return <Guide guide={guide} />;
}
