import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.heelNotPf!;

export const metadata = guideMetadata(guide);

export default function HeelNotPfEsPage() {
  return <Guide guide={guide} />;
}
