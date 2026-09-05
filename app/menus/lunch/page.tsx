import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/menus/lunch');

export default function Page() {
  return <HubDirectoryView id="menuLunch" />;
}
