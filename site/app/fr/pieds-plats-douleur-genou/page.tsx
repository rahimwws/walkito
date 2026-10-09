import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.flatFeetKneePain!;

export const metadata = guideMetadata(guide);

export default function FlatFeetKneePainFrPage() {
  return <Guide guide={guide} />;
}
