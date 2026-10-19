import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.pfKneeHipBack!;

export const metadata = guideMetadata(guide);

export default function PfKneeHipBackPtPage() {
  return <Guide guide={guide} />;
}
