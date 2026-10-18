import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.pfPregnancy!;

export const metadata = guideMetadata(guide);

export default function PfPregnancyEsPage() {
  return <Guide guide={guide} />;
}
