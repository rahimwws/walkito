import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.heelNotPf!;

export const metadata = guideMetadata(guide);

export default function HeelNotPfPtPage() {
  return <Guide guide={guide} />;
}
