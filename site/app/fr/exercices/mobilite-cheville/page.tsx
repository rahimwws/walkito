import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.exAnkleRocks!;

export const metadata = guideMetadata(guide);

export default function ExAnkleRocksFrPage() {
  return <Guide guide={guide} />;
}
