import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.exSingleLegBalance;

export const metadata = guideMetadata(guide);

export default function ExSingleLegBalancePage() {
  return <Guide guide={guide} />;
}
