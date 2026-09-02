'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ISLAND_HOSTS, detectIslandFromHost, siteUrl } from '@/lib/site';
import type { IslandId } from '@/data/islands';
import { useIsland } from '@/components/IslandProvider';
import { islandHref } from '@/lib/paths';

type Host = IslandId | 'root';

function currentHost(islandId: IslandId | null, hostMode: boolean, pathname: string): Host {
  if (hostMode && islandId) return islandId;
  const seg = pathname.split('/').filter(Boolean)[0]?.toLowerCase();
  return (ISLAND_HOSTS as string[]).includes(seg ?? '') ? (seg as IslandId) : islandId ?? 'root';
}

export default function HostLink({
  island,
  path = '/',
  className,
  children,
  onClick,
  'aria-label': ariaLabel,
}: {
  island: Host;
  path?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  'aria-label'?: string;
}) {
  const { islandId, hostMode } = useIsland();
  const clean = path.startsWith('/') ? path : `/${path}`;
  const pathname = usePathname() || '/';
  const here = currentHost(islandId, hostMode, pathname);

  if (here === island) {
    const href = islandHref(island === 'root' ? null : island, island === 'root' ? false : hostMode, clean);
    return (
      <Link href={href} className={className} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  const href =
    typeof window === 'undefined'
      ? siteUrl(island, clean)
      : siteUrl(island, clean, {
          protocol: window.location.protocol,
          hostname: window.location.hostname,
          port: window.location.port,
        });

  return (
    <a href={href} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

export function goToHost(island: Host, path = '/'): void {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const hostname = window.location.hostname;
  const fromHost = detectIslandFromHost(hostname);
  const here: Host = fromHost ?? 'root';
  if (here === island) {
    window.location.assign(clean);
    return;
  }
  window.location.assign(
    siteUrl(island, clean, {
      protocol: window.location.protocol,
      hostname,
      port: window.location.port,
    }),
  );
}
