import MarkdownLandingPage from '../components/MarkdownLandingPage';
import { areaInterlinkCards } from '../content/landingCards';
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from '../content/markdownContent';
import { buildPageImages, servicePageImages } from '../content/pageImages';

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const raw = readMarkdownContent('doc/infor_services/interior.md');
const heroImage = '/home/interior-house-painting-anna-maria-.jpg';
const heroAlt = 'Interior painting project by Gold Lion Painting Inc';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/interior-painting',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function InteriorPaintingPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/interior-painting"
      eyebrow="Interior Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="House Painting Areas"
      interlinks={areaInterlinkCards}
      interlinkType="areas"
      pageImages={buildPageImages(
        servicePageImages.interior,
        'Interior Painting'
      )}
    />
  );
}
