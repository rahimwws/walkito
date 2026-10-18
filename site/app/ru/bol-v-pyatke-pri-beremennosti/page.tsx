import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.pfPregnancy!;

export const metadata = guideMetadata(guide);

export default function PfPregnancyRuPage() {
  return <Guide guide={guide} />;
}
