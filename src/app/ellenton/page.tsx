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

const raw = readMarkdownContent('doc/info-areas/ELLENTON.md');
const heroImage = '/ellenton/professional-exterior-painter-ellenton.jpg';
const heroAlt = 'Exterior house painting project in Ellenton';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/ellenton',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function EllentonPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/ellenton"
      eyebrow="Ellenton Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="Residential Painting Services"
      interlinks={serviceInterlinkCards}
      interlinkType="services"
      pageImages={buildPageImages(areaPageImages.ellenton, 'Ellenton')}
    />
  );
}
