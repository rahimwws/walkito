import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.pfVsAchilles!;

export const metadata = guideMetadata(guide);

export default function PfVsAchillesEsPage() {
  return <Guide guide={guide} />;
}
