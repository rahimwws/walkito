import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.bestApp!;

export const metadata = guideMetadata(guide);

export default function BestAppPtPage() {
  return <Guide guide={guide} />;
}
