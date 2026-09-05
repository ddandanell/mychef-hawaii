import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/sourcing-honesty');

export default function Page() {
  return <HubDirectoryView id="blogSourcing" />;
}
