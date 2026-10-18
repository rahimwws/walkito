import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.retailWarehouse!;

export const metadata = guideMetadata(guide);

export default function RetailWarehouseDePage() {
  return <Guide guide={guide} />;
}
