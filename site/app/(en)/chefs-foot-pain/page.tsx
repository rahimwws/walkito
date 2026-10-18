import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.chefs;

export const metadata = guideMetadata(guide);

export default function ChefsPage() {
  return <Guide guide={guide} />;
}
