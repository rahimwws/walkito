import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.appVsPt;

export const metadata = guideMetadata(guide);

export default function AppVsPhysicalTherapy() {
  return <Guide guide={guide} />;
}
