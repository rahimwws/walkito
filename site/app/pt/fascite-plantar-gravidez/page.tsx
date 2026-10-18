import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.pfPregnancy!;

export const metadata = guideMetadata(guide);

export default function PfPregnancyPTPage() {
  return <Guide guide={guide} />;
}
