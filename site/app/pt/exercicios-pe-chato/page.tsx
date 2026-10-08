import { Guide } from '@/components/Guide';
import { GUIDES, guideMetadata } from '@/lib/guides';

const guide = GUIDES.flatFeet.pt;

export const metadata = guideMetadata(guide);

export default function FlatFeetPt() {
  return <Guide guide={guide} />;
}
