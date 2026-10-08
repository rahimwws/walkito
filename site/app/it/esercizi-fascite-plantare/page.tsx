import { Guide } from '@/components/Guide';
import { GUIDES, guideMetadata } from '@/lib/guides';

const guide = GUIDES.heelPain.it;

export const metadata = guideMetadata(guide);

export default function HeelPainIt() {
  return <Guide guide={guide} />;
}
