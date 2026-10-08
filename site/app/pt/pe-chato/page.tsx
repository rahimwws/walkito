import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.hubFlatFeet!;

export const metadata = guideMetadata(guide);

export default function HubFlatFeetPtPage() {
  return <Guide guide={guide} />;
}
