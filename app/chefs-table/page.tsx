import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/chefs-table');

export default function Page() {
  return <HubDirectoryView id="chefsTable" />;
}
