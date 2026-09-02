import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { IslandProvider } from '@/components/IslandProvider';
import JsonLd from '@/components/JsonLd';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { requestHostMode, requestIsland, resolveRequestSeo } from '@/lib/request';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '400', '500'],
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mychef-hawaii.com'),
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const islandId = await requestIsland();
  const hostMode = await requestHostMode();
  const seo = await resolveRequestSeo();

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-dvh bg-paper font-sans text-ink antialiased">
        {seo.jsonLd.map((block, i) => (
          <JsonLd key={i} data={block} />
        ))}
        <IslandProvider islandId={islandId} hostMode={hostMode}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="flex-1 pt-16">
            {children}
          </main>
          <SiteFooter islandId={islandId} hostMode={hostMode} />
        </IslandProvider>
      </body>
    </html>
  );
}
