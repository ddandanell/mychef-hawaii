import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/events/welcome-dinners');

export default function Page() {
  return <HubDirectoryView id="occWelcome" />;
}
