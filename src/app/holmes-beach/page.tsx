import MarkdownLandingPage from '../components/MarkdownLandingPage';
import { serviceInterlinkCards } from '../content/landingCards';
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from '../content/markdownContent';
import { areaPageImages, buildPageImages } from '../content/pageImages';

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const raw = readMarkdownContent('doc/info-areas/HOLMES-BEACH.md');
const heroImage = '/holmesbeach/exterior-house-painting-holmes-beach-01.jpg';
const heroAlt = 'Exterior house painting project in Holmes Beach';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/holmes-beach',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function HolmesBeachPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/holmes-beach"
      eyebrow="Holmes Beach Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="Residential Painting Services"
      interlinks={serviceInterlinkCards}
      interlinkType="services"
      pageImages={buildPageImages(
        areaPageImages['holmes-beach'],
        'Holmes Beach'
      )}
    />
  );
}
