import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.hubFlatFeet!;

export const metadata = guideMetadata(guide);

export default function HubFlatFeetItPage() {
  return <Guide guide={guide} />;
}
