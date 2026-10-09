import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.hammerToe!;

export const metadata = guideMetadata(guide);

export default function HammerToeFrPage() {
  return <Guide guide={guide} />;
}
