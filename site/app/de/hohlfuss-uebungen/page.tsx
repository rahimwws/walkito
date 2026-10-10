import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.highArches!;

export const metadata = guideMetadata(guide);

export default function HighArchesDePage() {
  return <Guide guide={guide} />;
}
