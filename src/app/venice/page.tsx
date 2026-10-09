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

const raw = readMarkdownContent('doc/info-areas/VENICE.md');
const heroImage = '/venice/exterior-painting-venice.jpeg';
const heroAlt = 'Exterior house painting project in Venice';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/venice',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function VenicePage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/venice"
      eyebrow="Venice Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="Residential Painting Services"
      interlinks={serviceInterlinkCards}
      interlinkType="services"
      pageImages={buildPageImages(areaPageImages.venice, 'Venice')}
    />
  );
}
