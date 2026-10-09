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

const raw = readMarkdownContent('doc/info-areas/BRADENTON.md');
const heroImage = '/bradenton/luxury-exterior-painting-bradenton-02.jpg.jpg';
const heroAlt = 'Luxury exterior house painting project in Bradenton';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/bradenton',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function BradentonPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/bradenton"
      eyebrow="Bradenton Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="Residential Painting Services"
      interlinks={serviceInterlinkCards}
      interlinkType="services"
      pageImages={buildPageImages(areaPageImages.bradenton, 'Bradenton')}
    />
  );
}
