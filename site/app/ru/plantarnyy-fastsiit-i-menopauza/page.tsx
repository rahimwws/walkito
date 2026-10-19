import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.pfMenopause!;

export const metadata = guideMetadata(guide);

export default function PfMenopauseRuPage() {
  return <Guide guide={guide} />;
}
