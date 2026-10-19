import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.pfMenopause!;

export const metadata = guideMetadata(guide);

export default function PfMenopauseFrPage() {
  return <Guide guide={guide} />;
}
