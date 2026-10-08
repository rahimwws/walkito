import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.shinSplints!;

export const metadata = guideMetadata(guide);

export default function ShinSplintsFrPage() {
  return <Guide guide={guide} />;
}
