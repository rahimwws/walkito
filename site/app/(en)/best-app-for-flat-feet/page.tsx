import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.bestFlatApp;

export const metadata = guideMetadata(guide);

export default function BestAppForFlatFeet() {
  return <Guide guide={guide} />;
}
