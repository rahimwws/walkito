import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.pfKneeHipBack;

export const metadata = guideMetadata(guide);

export default function PfKneeHipBackPage() {
  return <Guide guide={guide} />;
}
