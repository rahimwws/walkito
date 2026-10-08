import { Guide } from '@/components/Guide';
import { GUIDES, guideMetadata } from '@/lib/guides';

const guide = GUIDES.flatFeet.fr;

export const metadata = guideMetadata(guide);

export default function FlatFeetFr() {
  return <Guide guide={guide} />;
}
