import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.exSingleLegBalance!;

export const metadata = guideMetadata(guide);

export default function ExSingleLegBalanceEsPage() {
  return <Guide guide={guide} />;
}
