import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.archPain!;

export const metadata = guideMetadata(guide);

export default function ArchPainFrPage() {
  return <Guide guide={guide} />;
}
