import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.toeStrengthening!;

export const metadata = guideMetadata(guide);

export default function ToeStrengtheningPtPage() {
  return <Guide guide={guide} />;
}
