import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.pfKneeHipBack!;

export const metadata = guideMetadata(guide);

export default function PfKneeHipBackRuPage() {
  return <Guide guide={guide} />;
}
