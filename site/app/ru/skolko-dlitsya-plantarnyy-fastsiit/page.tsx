import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.pfDuration!;

export const metadata = guideMetadata(guide);

export default function PfDurationRuPage() {
  return <Guide guide={guide} />;
}
