import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.achilles!;

export const metadata = guideMetadata(guide);

export default function AchillesFrPage() {
  return <Guide guide={guide} />;
}
