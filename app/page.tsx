import HomeView from '@/components/views/HomeView';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/');

export default function Page() {
  return <HomeView />;
}
