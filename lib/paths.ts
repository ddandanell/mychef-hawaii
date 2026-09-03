import type { IslandId } from '@/data/islands';

export function islandHref(island: IslandId | null, hostMode: boolean, path: string): string {
  const hashAt = path.indexOf('#');
  const hash = hashAt >= 0 ? path.slice(hashAt) : '';
  const withoutHash = hashAt >= 0 ? path.slice(0, hashAt) : path;
  const [rawPath, qs] = withoutHash.split('?');
  const raw = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  const withQs = (base: string) => `${qs ? `${base}?${qs}` : base}${hash}`;
  if (!island || hostMode) return withQs(raw);
  const prefixed = raw === '/' ? `/${island}` : `/${island}${raw}`;
  return withQs(prefixed);
}

export function quotePath(island?: string, service?: string): string {
  const params = new URLSearchParams();
  if (island) params.set('island', island);
  if (service) params.set('service', service);
  const q = params.toString();
  return q ? `/quote?${q}` : '/quote';
}
