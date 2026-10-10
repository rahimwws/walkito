import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.footStrengthening!;

export const metadata = guideMetadata(guide);

export default function FootStrengtheningDePage() {
  return <Guide guide={guide} />;
}
