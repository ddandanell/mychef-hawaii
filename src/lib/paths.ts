export function quotePath(island?: string, service?: string): string {
  const params = new URLSearchParams();
  if (island) params.set('island', island);
  if (service) params.set('service', service);
  const q = params.toString();
  return q ? `/quote?${q}` : '/quote';
}
