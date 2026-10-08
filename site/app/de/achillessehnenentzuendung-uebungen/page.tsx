import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.achilles!;

export const metadata = guideMetadata(guide);

export default function AchillesDePage() {
  return <Guide guide={guide} />;
}
