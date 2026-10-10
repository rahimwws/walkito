import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exSingleLegBalance!;

export const metadata = guideMetadata(guide);

export default function ExSingleLegBalanceDePage() {
  return <Guide guide={guide} />;
}
