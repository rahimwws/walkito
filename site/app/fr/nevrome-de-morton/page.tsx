import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.mortons!;

export const metadata = guideMetadata(guide);

export default function MortonsFrPage() {
  return <Guide guide={guide} />;
}
