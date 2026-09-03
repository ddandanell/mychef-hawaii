import QuoteView from '@/components/views/QuoteView';
import { requestHostMode, requestIsland } from '@/lib/request';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/quote');

export default async function Page() {
  const islandId = await requestIsland();
  const hostMode = await requestHostMode();
  return <QuoteView islandId={islandId} hostMode={hostMode} />;
}
