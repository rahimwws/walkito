import { Guide } from '@/components/Guide';
import { GUIDES, guideMetadata } from '@/lib/guides';

const guide = GUIDES.heelPain.pt;

export const metadata = guideMetadata(guide);

export default function HeelPainPt() {
  return <Guide guide={guide} />;
}
