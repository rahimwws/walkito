import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.pfKneeHipBack!;

export const metadata = guideMetadata(guide);

export default function PfKneeHipBackEsPage() {
  return <Guide guide={guide} />;
}
