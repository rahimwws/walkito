import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.exHipAbduction!;

export const metadata = guideMetadata(guide);

export default function ExHipAbductionPtPage() {
  return <Guide guide={guide} />;
}
