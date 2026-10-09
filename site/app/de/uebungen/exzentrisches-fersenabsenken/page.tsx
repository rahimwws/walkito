import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exEccentricHeelDrops!;

export const metadata = guideMetadata(guide);

export default function ExEccentricHeelDropsDePage() {
  return <Guide guide={guide} />;
}
