import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/staffing-servers');

export default function Page() {
  return <HubDirectoryView id="blogServers" />;
}
