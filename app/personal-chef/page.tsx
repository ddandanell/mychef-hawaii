import HubPhotoGrid from '@/components/HubPhotoGrid';
import { HubDirectoryView } from '@/components/views/SupportViews';
import { photos } from '@/data/photos';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/personal-chef');

export default function Page() {
  return (
    <HubDirectoryView
      id="personalChef"
      related={
        <HubPhotoGrid
          eyebrow="Beside this household line"
          heading="Open a related document."
          intro="This page is the four-island picker for weekly household cooking. Visitor dinners, Stay Chef weeks, the form, and the rate card are their own URLs."
          columns={2}
          items={[
            {
              href: '/private-chef',
              title: 'Visitor dinner',
              body: 'One night in the house. Distinct from the resident household line.',
              still: photos.chefMaui,
            },
            {
              href: '/vacation-chef',
              title: 'Stay Chef week',
              body: 'A chef for the villa week. Distinct from school-night households.',
              still: photos.vacationMaui,
            },
            {
              href: '/quote',
              title: 'The quote form',
              body: 'Five fields. A human reply. Typical response in Hawaii business hours.',
              still: photos.quoteHub,
            },
            {
              href: '/pricing',
              title: 'What a night costs',
              body: 'The published rate card. Distinct from the fee-stack explainer.',
              still: photos.hubPricing,
            },
          ]}
        />
      }
    />
  );
}
