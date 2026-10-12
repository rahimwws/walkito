import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.footApps;

export const metadata = guideMetadata(guide);

export default function BestAppsForFootPain() {
  return <Guide guide={guide} />;
}
