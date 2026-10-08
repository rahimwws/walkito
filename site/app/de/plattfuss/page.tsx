import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.hubFlatFeet!;

export const metadata = guideMetadata(guide);

export default function HubFlatFeetDePage() {
  return <Guide guide={guide} />;
}
