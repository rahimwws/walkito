import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.exEccentricHeelDrops!;

export const metadata = guideMetadata(guide);

export default function ExEccentricHeelDropsEsPage() {
  return <Guide guide={guide} />;
}
