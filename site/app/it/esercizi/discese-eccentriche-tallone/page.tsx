import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.exEccentricHeelDrops!;

export const metadata = guideMetadata(guide);

export default function ExEccentricHeelDropsItPage() {
  return <Guide guide={guide} />;
}
