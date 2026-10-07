import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.hammerToe;

export const metadata = guideMetadata(guide);

export default function HammerToePage() {
  return <Guide guide={guide} />;
}
