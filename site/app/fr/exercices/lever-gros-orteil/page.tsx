import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.exBigToeLift!;

export const metadata = guideMetadata(guide);

export default function ExBigToeLiftFrPage() {
  return <Guide guide={guide} />;
}
