import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.pfMenopause!;

export const metadata = guideMetadata(guide);

export default function PfMenopauseEsPage() {
  return <Guide guide={guide} />;
}
