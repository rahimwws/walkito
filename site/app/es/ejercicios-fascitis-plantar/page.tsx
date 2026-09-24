import { Guide } from '@/components/Guide';
import { GUIDES, guideMetadata } from '@/lib/guides';

const guide = GUIDES.heelPain.es;

export const metadata = guideMetadata(guide);

export default function HeelPainEs() {
  return <Guide guide={guide} />;
}
