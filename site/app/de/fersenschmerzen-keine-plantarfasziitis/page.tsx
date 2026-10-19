import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.heelNotPf!;

export const metadata = guideMetadata(guide);

export default function HeelNotPfDePage() {
  return <Guide guide={guide} />;
}
