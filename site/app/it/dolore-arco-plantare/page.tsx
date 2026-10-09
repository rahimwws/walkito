import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.archPain!;

export const metadata = guideMetadata(guide);

export default function ArchPainItPage() {
  return <Guide guide={guide} />;
}
