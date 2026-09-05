import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/welcome-dinner');

export default function Page() {
  return <HubDirectoryView id="blogWelcome" />;
}
