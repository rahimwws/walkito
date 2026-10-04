import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.vsExakt;

export const metadata = guideMetadata(guide);

export default function WalkitoVsExakt() {
  return <Guide guide={guide} />;
}
