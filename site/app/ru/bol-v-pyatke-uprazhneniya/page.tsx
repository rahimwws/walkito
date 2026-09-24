import { Guide } from '@/components/Guide';
import { GUIDES, guideMetadata } from '@/lib/guides';

const guide = GUIDES.heelPain.ru;

export const metadata = guideMetadata(guide);

export default function HeelPainRu() {
  return <Guide guide={guide} />;
}
