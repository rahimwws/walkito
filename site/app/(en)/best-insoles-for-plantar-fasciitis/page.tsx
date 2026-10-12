import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.bestInsoles;

export const metadata = guideMetadata(guide);

export default function BestInsoles() {
  return <Guide guide={guide} />;
}
