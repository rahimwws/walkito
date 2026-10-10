import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.flatFeetBackPain!;

export const metadata = guideMetadata(guide);

export default function FlatFeetBackPainItPage() {
  return <Guide guide={guide} />;
}
