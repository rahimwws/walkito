import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.pfNotBetter!;

export const metadata = guideMetadata(guide);

export default function PfNotBetterDePage() {
  return <Guide guide={guide} />;
}
