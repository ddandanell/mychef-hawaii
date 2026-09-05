import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/breakfast-in-the-villa');

export default function Page() {
  return <HubDirectoryView id="blogBreakfast" />;
}
