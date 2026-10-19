import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.heelNotPf;

export const metadata = guideMetadata(guide);

export default function HeelNotPfPage() {
  return <Guide guide={guide} />;
}
