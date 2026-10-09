import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.flatFeetKids;

export const metadata = guideMetadata(guide);

export default function FlatFeetKidsPage() {
  return <Guide guide={guide} />;
}
