import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.hubFlatFeet;

export const metadata = guideMetadata(guide);

export default function HubFlatFeetPage() {
  return <Guide guide={guide} />;
}
