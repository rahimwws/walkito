import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.bestApp!;

export const metadata = guideMetadata(guide);

export default function BestAppEsPage() {
  return <Guide guide={guide} />;
}
