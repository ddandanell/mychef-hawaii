import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { detectIslandFromHost, ISLAND_HOSTS, siteUrl } from '@/config/site';
import type { IslandId } from '@/data/islands';

type Host = IslandId | 'root';

function hostNow(): Host {
  if (typeof window === 'undefined') return 'root';
  const fromHost = detectIslandFromHost(window.location.hostname);
  if (fromHost) return fromHost;
  const seg = window.location.pathname.split('/').filter(Boolean)[0]?.toLowerCase();
  return (ISLAND_HOSTS as string[]).includes(seg ?? '') ? (seg as IslandId) : 'root';
}

/**
 * Cross-department link. Same host stays in the SPA; a different island
 * (or the Hawaii hub) does a real navigation to that wildcard host.
 */
export default function HostLink({
  island,
  path = '/',
  className,
  children,
  ...rest
}: {
  island: Host;
  path?: string;
  className?: string;
  children: ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (hostNow() === island) {
    return (
      <Link to={clean} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={siteUrl(island, clean)} className={className} {...rest}>
      {children}
    </a>
  );
}

export function goToHost(island: Host, path = '/'): void {
  if (typeof window === 'undefined') return;
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (hostNow() === island) {
    window.location.assign(clean);
    return;
  }
  window.location.assign(siteUrl(island, clean));
}
