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

const raw = readMarkdownContent('doc/info-areas/SIESTA-KEY.md');
const heroImage = '/siesta/siesta-exterior-home.jpeg';
const heroAlt = 'Exterior house painting project in Siesta Key';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/siesta-key',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function SiestaKeyPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/siesta-key"
      eyebrow="Siesta Key Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="Residential Painting Services"
      interlinks={serviceInterlinkCards}
      interlinkType="services"
      pageImages={buildPageImages(areaPageImages['siesta-key'], 'Siesta Key')}
    />
  );
}
