import { HubOfferView } from '@/components/views/OfferViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/vacation-chef');

export default function Page() {
  return <HubOfferView kind="vacation-chef" />;
}
