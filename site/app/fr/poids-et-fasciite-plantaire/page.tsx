import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.weightPf!;

export const metadata = guideMetadata(guide);

export default function WeightPfFrPage() {
  return <Guide guide={guide} />;
}
