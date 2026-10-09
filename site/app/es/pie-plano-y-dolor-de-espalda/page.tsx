import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.flatFeetBackPain!;

export const metadata = guideMetadata(guide);

export default function FlatFeetBackPainEsPage() {
  return <Guide guide={guide} />;
}
