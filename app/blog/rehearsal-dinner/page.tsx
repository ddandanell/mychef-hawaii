import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/rehearsal-dinner');

export default function Page() {
  return <HubDirectoryView id="blogRehearsal" />;
}
