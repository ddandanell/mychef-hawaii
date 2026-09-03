import { HowItWorksView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/how-it-works');

export default function Page() {
  return <HowItWorksView />;
}
