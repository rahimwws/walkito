import { Guide } from '@/components/Guide';
import { GUIDES, guideMetadata } from '@/lib/guides';

const guide = GUIDES.flatFeet.it;

export const metadata = guideMetadata(guide);

export default function FlatFeetIt() {
  return <Guide guide={guide} />;
}
