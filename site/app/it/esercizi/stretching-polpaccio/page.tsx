import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.exCalfStretch!;

export const metadata = guideMetadata(guide);

export default function ExCalfStretchItPage() {
  return <Guide guide={guide} />;
}
