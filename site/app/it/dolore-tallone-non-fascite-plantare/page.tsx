import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.heelNotPf!;

export const metadata = guideMetadata(guide);

export default function HeelNotPfItPage() {
  return <Guide guide={guide} />;
}
