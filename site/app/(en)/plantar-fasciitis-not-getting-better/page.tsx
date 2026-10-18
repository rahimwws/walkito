import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.pfNotBetter;

export const metadata = guideMetadata(guide);

export default function PfNotBetterPage() {
  return <Guide guide={guide} />;
}
