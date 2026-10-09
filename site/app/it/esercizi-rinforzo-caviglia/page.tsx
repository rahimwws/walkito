import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.ankleStrengthening!;

export const metadata = guideMetadata(guide);

export default function AnkleStrengtheningItPage() {
  return <Guide guide={guide} />;
}
