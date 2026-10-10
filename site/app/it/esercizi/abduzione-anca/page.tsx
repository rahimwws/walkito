import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.exHipAbduction!;

export const metadata = guideMetadata(guide);

export default function ExHipAbductionItPage() {
  return <Guide guide={guide} />;
}
