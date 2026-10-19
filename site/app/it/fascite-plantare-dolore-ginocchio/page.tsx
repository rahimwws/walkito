import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.pfKneeHipBack!;

export const metadata = guideMetadata(guide);

export default function PfKneeHipBackItPage() {
  return <Guide guide={guide} />;
}
