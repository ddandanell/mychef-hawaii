import type { IslandId } from '@/data/islands';

export function islandHref(island: IslandId | null, hostMode: boolean, path: string): string {
  const [rawPath, qs] = path.split('?');
  const raw = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  if (!island || hostMode) return qs ? `${raw}?${qs}` : raw;
  const prefixed = raw === '/' ? `/${island}` : `/${island}${raw}`;
  return qs ? `${prefixed}?${qs}` : prefixed;
}

export function quotePath(island?: string, service?: string): string {
  const params = new URLSearchParams();
  if (island) params.set('island', island);
  if (service) params.set('service', service);
  const q = params.toString();
  return q ? `/quote?${q}` : '/quote';
}
