import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.achilles!;

export const metadata = guideMetadata(guide);

export default function AchillesPtPage() {
  return <Guide guide={guide} />;
}
