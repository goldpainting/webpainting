import MarkdownLandingPage from '../components/MarkdownLandingPage';
import { areaInterlinkCards } from '../content/landingCards';
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from '../content/markdownContent';
import { buildPageImages, servicePageImages } from '../content/pageImages';

const raw = readMarkdownContent('doc/infor_services/exterior.md');
const heroImage = '/exterior/home-extrior-lading8.png';
const heroAlt = 'Exterior painting project by Gold Lion Painting Inc';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/exterior-painting',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function ExteriorPaintingPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/exterior-painting"
      eyebrow="Exterior Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="House Painting Areas"
      interlinks={areaInterlinkCards}
      interlinkType="areas"
      pageImages={buildPageImages(
        servicePageImages.exterior,
        'Exterior Painting'
      )}
    />
  );
}
