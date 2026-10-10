import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.exEccentricHeelDrops!;

export const metadata = guideMetadata(guide);

export default function ExEccentricHeelDropsFrPage() {
  return <Guide guide={guide} />;
}
