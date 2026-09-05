import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/no-fake-reviews');

export default function Page() {
  return <HubDirectoryView id="blogReviews" />;
}
