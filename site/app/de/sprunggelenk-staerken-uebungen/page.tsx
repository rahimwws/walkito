import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.ankleStrengthening!;

export const metadata = guideMetadata(guide);

export default function AnkleStrengtheningDePage() {
  return <Guide guide={guide} />;
}
