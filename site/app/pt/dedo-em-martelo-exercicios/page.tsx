import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.hammerToe!;

export const metadata = guideMetadata(guide);

export default function HammerToePtPage() {
  return <Guide guide={guide} />;
}
