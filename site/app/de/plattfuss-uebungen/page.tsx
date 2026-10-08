import { Guide } from '@/components/Guide';
import { GUIDES, guideMetadata } from '@/lib/guides';

const guide = GUIDES.flatFeet.de;

export const metadata = guideMetadata(guide);

export default function FlatFeetDe() {
  return <Guide guide={guide} />;
}
