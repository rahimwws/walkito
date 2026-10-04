import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.pfDuration;

export const metadata = guideMetadata(guide);

export default function PfDuration() {
  return <Guide guide={guide} />;
}
