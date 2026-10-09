import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.exSingleLegBalance!;

export const metadata = guideMetadata(guide);

export default function ExSingleLegBalanceItPage() {
  return <Guide guide={guide} />;
}
