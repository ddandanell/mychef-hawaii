import { HubAreasView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/areas');

export default function Page() {
  return <HubAreasView />;
}
