import { Guide } from '@/components/Guide';
import { GUIDES, guideMetadata } from '@/lib/guides';

const guide = GUIDES.flatFeet.ru;

export const metadata = guideMetadata(guide);

export default function FlatFeetRu() {
  return <Guide guide={guide} />;
}
