import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.morningHeelPain!;

export const metadata = guideMetadata(guide);

export default function MorningHeelPainRuPage() {
  return <Guide guide={guide} />;
}
