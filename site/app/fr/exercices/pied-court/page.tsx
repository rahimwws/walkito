import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.exShortFoot!;

export const metadata = guideMetadata(guide);

export default function ExShortFootFrPage() {
  return <Guide guide={guide} />;
}
