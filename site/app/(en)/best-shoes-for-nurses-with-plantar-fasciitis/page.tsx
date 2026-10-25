import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.shoesNurses;

export const metadata = guideMetadata(guide);

export default function ShoesNurses() {
  return <Guide guide={guide} />;
}
