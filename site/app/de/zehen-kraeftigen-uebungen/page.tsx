import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.toeStrengthening!;

export const metadata = guideMetadata(guide);

export default function ToeStrengtheningDePage() {
  return <Guide guide={guide} />;
}
