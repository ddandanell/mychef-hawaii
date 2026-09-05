import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/events/birthdays');

export default function Page() {
  return <HubDirectoryView id="occBirthdays" />;
}
