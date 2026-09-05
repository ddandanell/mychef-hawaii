import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/weather-backup');

export default function Page() {
  return <HubDirectoryView id="blogWeather" />;
}
