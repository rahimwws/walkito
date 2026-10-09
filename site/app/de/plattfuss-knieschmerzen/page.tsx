import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.flatFeetKneePain!;

export const metadata = guideMetadata(guide);

export default function FlatFeetKneePainDePage() {
  return <Guide guide={guide} />;
}
