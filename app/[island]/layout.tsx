import { ISLAND_HOSTS } from '@/lib/site';

export function generateStaticParams() {
  return ISLAND_HOSTS.map((island) => ({ island }));
}

export const dynamicParams = false;

export default function IslandLayout({ children }: { children: React.ReactNode }) {
  return children;
}
