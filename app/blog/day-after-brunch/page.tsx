import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/day-after-brunch');

export default function Page() {
  return <HubDirectoryView id="blogBrunch" />;
}
