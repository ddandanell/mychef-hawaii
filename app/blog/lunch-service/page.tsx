import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/lunch-service');

export default function Page() {
  return <HubDirectoryView id="blogLunch" />;
}
