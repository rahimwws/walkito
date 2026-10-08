import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.exCalfStretch!;

export const metadata = guideMetadata(guide);

export default function ExCalfStretchFrPage() {
  return <Guide guide={guide} />;
}
