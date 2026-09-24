import { Guide } from '@/components/Guide';
import { GUIDES, guideMetadata } from '@/lib/guides';

const guide = GUIDES.flatFeet.es;

export const metadata = guideMetadata(guide);

export default function FlatFeetEs() {
  return <Guide guide={guide} />;
}
