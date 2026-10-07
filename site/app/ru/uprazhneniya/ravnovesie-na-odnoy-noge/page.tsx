import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.exSingleLegBalance!;

export const metadata = guideMetadata(guide);

export default function ExSingleLegBalanceRuPage() {
  return <Guide guide={guide} />;
}
