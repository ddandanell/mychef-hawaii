import QuoteView from '@/components/views/QuoteView';
import { islandPageMetadata } from '@/lib/pageSeo';
import { islandProps } from '../params';

export function generateMetadata({ params }: { params: Promise<{ island: string }> }) {
  return islandPageMetadata(params, '/quote');
}

export default async function Page({ params }: { params: Promise<{ island: string }> }) {
  const { islandId, hostMode } = await islandProps(params);
  return <QuoteView islandId={islandId} hostMode={hostMode} />;
}
