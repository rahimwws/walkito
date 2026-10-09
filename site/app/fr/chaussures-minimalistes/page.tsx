import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.barefoot!;

export const metadata = guideMetadata(guide);

export default function BarefootFrPage() {
  return <Guide guide={guide} />;
}
