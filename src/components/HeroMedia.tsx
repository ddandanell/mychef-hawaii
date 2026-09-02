/**
 * Full-bleed still. No Ken Burns, no parallax. Light bottom gradient only.
 */
export default function HeroMedia({
  src,
  alt,
}: {
  src: string;
  alt: string;
  overlay?: 'default' | 'dusk';
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      <div className="hero-scrim-desktop absolute inset-0" aria-hidden="true" />
    </div>
  );
}
