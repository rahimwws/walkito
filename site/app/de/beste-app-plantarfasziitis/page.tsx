import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.bestApp!;

export const metadata = guideMetadata(guide);

export default function BestAppDePage() {
  return <Guide guide={guide} />;
}
