import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.heelPainAfterWalking!;

export const metadata = guideMetadata(guide);

export default function HeelPainAfterWalkingItPage() {
  return <Guide guide={guide} />;
}
