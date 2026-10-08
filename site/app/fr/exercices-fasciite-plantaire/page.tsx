import { Guide } from '@/components/Guide';
import { GUIDES, guideMetadata } from '@/lib/guides';

const guide = GUIDES.heelPain.fr;

export const metadata = guideMetadata(guide);

export default function HeelPainFr() {
  return <Guide guide={guide} />;
}
