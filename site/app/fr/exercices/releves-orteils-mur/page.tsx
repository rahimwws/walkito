import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.exTibialisRaises!;

export const metadata = guideMetadata(guide);

export default function ExTibialisRaisesFrPage() {
  return <Guide guide={guide} />;
}
