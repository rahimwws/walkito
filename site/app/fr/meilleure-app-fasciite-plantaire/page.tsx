import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.bestApp!;

export const metadata = guideMetadata(guide);

export default function BestAppFrPage() {
  return <Guide guide={guide} />;
}
