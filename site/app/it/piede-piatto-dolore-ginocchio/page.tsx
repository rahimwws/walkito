import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.flatFeetKneePain!;

export const metadata = guideMetadata(guide);

export default function FlatFeetKneePainItPage() {
  return <Guide guide={guide} />;
}
