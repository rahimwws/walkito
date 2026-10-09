import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.ankleStrengthening!;

export const metadata = guideMetadata(guide);

export default function AnkleStrengtheningPtPage() {
  return <Guide guide={guide} />;
}
