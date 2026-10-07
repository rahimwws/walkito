import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.hubFlatFeet!;

export const metadata = guideMetadata(guide);

export default function HubFlatFeetEsPage() {
  return <Guide guide={guide} />;
}
