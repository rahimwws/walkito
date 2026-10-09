import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.highArches!;

export const metadata = guideMetadata(guide);

export default function HighArchesFrPage() {
  return <Guide guide={guide} />;
}
