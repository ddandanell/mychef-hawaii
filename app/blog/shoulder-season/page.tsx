import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/shoulder-season');

export default function Page() {
  return <HubDirectoryView id="blogShoulder" />;
}
