import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/menus/breakfast');

export default function Page() {
  return <HubDirectoryView id="menuBreakfast" />;
}
