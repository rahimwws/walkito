import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.weightPf!;

export const metadata = guideMetadata(guide);

export default function WeightPfItPage() {
  return <Guide guide={guide} />;
}
