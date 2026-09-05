import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/bartender-add-on');

export default function Page() {
  return <HubDirectoryView id="blogBartender" />;
}
