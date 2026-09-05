import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/wine-and-alcohol');

export default function Page() {
  return <HubDirectoryView id="blogWine" />;
}
