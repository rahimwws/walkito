import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.archPain!;

export const metadata = guideMetadata(guide);

export default function ArchPainPtPage() {
  return <Guide guide={guide} />;
}
