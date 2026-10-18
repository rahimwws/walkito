import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.retailWarehouse;

export const metadata = guideMetadata(guide);

export default function RetailWarehousePage() {
  return <Guide guide={guide} />;
}
