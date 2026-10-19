import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.pfNotBetter!;

export const metadata = guideMetadata(guide);

export default function PfNotBetterItPage() {
  return <Guide guide={guide} />;
}
