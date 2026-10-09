import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.toeStrengthening!;

export const metadata = guideMetadata(guide);

export default function ToeStrengtheningItPage() {
  return <Guide guide={guide} />;
}
