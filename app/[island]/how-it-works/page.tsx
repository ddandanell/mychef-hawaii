import { IslandSupportView } from '@/components/views/IslandDocumentView';
import { islandPageMetadata } from '@/lib/pageSeo';
import { islandHow } from '@/data/islandSupport';
import { islandProps } from '../params';

export function generateMetadata({ params }: { params: Promise<{ island: string }> }) {
  return islandPageMetadata(params, '/how-it-works');
}

export default async function Page({ params }: { params: Promise<{ island: string }> }) {
  const { islandId, hostMode } = await islandProps(params);
  return (
    <IslandSupportView islandId={islandId} hostMode={hostMode} copy={islandHow[islandId]} showHelp />
  );
}
