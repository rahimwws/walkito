import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.exSingleLegBalance!;

export const metadata = guideMetadata(guide);

export default function ExSingleLegBalanceFrPage() {
  return <Guide guide={guide} />;
}
