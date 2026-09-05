import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/locations');

export default function Page() {
  return <HubDirectoryView id="locations" />;
}
