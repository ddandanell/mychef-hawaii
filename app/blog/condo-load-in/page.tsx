import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/condo-load-in');

export default function Page() {
  return <HubDirectoryView id="blogCondo" />;
}
