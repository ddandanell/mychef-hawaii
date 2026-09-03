import { HubCateringView } from '@/components/views/CateringView';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/catering');

export default function Page() {
  return <HubCateringView />;
}
