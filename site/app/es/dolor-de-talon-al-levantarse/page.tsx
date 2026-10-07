import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.morningHeelPain!;

export const metadata = guideMetadata(guide);

export default function MorningHeelPainEsPage() {
  return <Guide guide={guide} />;
}
