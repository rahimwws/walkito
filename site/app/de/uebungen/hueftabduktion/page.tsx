import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exHipAbduction!;

export const metadata = guideMetadata(guide);

export default function ExHipAbductionDePage() {
  return <Guide guide={guide} />;
}
