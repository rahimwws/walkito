import { Guide } from '@/components/Guide';
import { GUIDES, guideMetadata } from '@/lib/guides';

const guide = GUIDES.heelPain.de;

export const metadata = guideMetadata(guide);

export default function HeelPainDe() {
  return <Guide guide={guide} />;
}
