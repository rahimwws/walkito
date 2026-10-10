import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.exCalfRaises!;

export const metadata = guideMetadata(guide);

export default function ExCalfRaisesFrPage() {
  return <Guide guide={guide} />;
}
