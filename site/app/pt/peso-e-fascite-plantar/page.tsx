import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.weightPf!;

export const metadata = guideMetadata(guide);

export default function WeightPfPtPage() {
  return <Guide guide={guide} />;
}
