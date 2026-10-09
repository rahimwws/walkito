import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exTibialisRaises!;

export const metadata = guideMetadata(guide);

export default function ExTibialisRaisesDePage() {
  return <Guide guide={guide} />;
}
