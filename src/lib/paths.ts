export function quotePath(island?: string, service?: string): string {
  const params = new URLSearchParams();
  if (island) params.set('island', island);
  if (service) params.set('service', service);
  const q = params.toString();
  return q ? `/quote?${q}` : '/quote';
}

/** Prefix a local path with the island base (`/maui`) in path-fallback mode. Idempotent. */
export function islandHref(basePath: string, path: string): string {
  const [rawPath, qs] = path.split('?');
  const raw = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  if (basePath && (raw === basePath || raw.startsWith(`${basePath}/`))) {
    return qs ? `${raw}?${qs}` : raw;
  }
  const prefixed = raw === '/' ? basePath || '/' : `${basePath}${raw}`;
  return qs ? `${prefixed}?${qs}` : prefixed;
}
