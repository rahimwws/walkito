import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.flatFeetBackPain!;

export const metadata = guideMetadata(guide);

export default function FlatFeetBackPainRuPage() {
  return <Guide guide={guide} />;
}
