import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/catering/grazing');

export default function Page() {
  return <HubDirectoryView id="fmtGrazing" />;
}
