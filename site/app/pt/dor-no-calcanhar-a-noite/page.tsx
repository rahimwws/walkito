import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.heelPainAtNight!;

export const metadata = guideMetadata(guide);

export default function HeelPainAtNightPtPage() {
  return <Guide guide={guide} />;
}
