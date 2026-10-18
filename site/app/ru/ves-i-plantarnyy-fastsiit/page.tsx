import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.weightPf!;

export const metadata = guideMetadata(guide);

export default function WeightPfRuPage() {
  return <Guide guide={guide} />;
}
