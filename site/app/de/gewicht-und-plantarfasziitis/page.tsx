import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.weightPf!;

export const metadata = guideMetadata(guide);

export default function WeightPfDePage() {
  return <Guide guide={guide} />;
}
