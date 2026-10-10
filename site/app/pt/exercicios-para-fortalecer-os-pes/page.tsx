import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.footStrengthening!;

export const metadata = guideMetadata(guide);

export default function FootStrengtheningPtPage() {
  return <Guide guide={guide} />;
}
