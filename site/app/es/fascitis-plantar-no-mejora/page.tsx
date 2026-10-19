import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.pfNotBetter!;

export const metadata = guideMetadata(guide);

export default function PfNotBetterEsPage() {
  return <Guide guide={guide} />;
}
