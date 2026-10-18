import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.pfVsAchilles!;

export const metadata = guideMetadata(guide);

export default function PfVsAchillesItPage() {
  return <Guide guide={guide} />;
}
