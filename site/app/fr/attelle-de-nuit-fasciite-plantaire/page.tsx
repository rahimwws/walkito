import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.nightSplints!;

export const metadata = guideMetadata(guide);

export default function NightSplintsFrPage() {
  return <Guide guide={guide} />;
}
