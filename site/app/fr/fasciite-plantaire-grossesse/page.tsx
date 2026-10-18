import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.pfPregnancy!;

export const metadata = guideMetadata(guide);

export default function PfPregnancyFRPage() {
  return <Guide guide={guide} />;
}
