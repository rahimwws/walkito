import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.footStrengthening!;

export const metadata = guideMetadata(guide);

export default function FootStrengtheningItPage() {
  return <Guide guide={guide} />;
}
