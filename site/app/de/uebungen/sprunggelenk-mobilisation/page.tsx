import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exAnkleRocks!;

export const metadata = guideMetadata(guide);

export default function ExAnkleRocksDePage() {
  return <Guide guide={guide} />;
}
