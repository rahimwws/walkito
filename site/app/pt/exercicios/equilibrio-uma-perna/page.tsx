import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.exSingleLegBalance!;

export const metadata = guideMetadata(guide);

export default function ExSingleLegBalancePtPage() {
  return <Guide guide={guide} />;
}
