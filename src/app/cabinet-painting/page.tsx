import MarkdownLandingPage from '../components/MarkdownLandingPage';
import { areaInterlinkCards } from '../content/landingCards';
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from '../content/markdownContent';
import { buildPageImages, servicePageImages } from '../content/pageImages';

const raw = readMarkdownContent('doc/infor_services/cabine.md');
const heroImage = '/home/kitchen-cabinet-painting.jpg';
const heroAlt = 'Cabinet painting project by Gold Lion Painting Inc';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/cabinet-painting',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function CabinetPaintingPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/cabinet-painting"
      eyebrow="Cabinet Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="House Painting Areas"
      interlinks={areaInterlinkCards}
      interlinkType="areas"
      pageImages={buildPageImages(
        servicePageImages.cabinet,
        'Cabinet Painting'
      )}
    />
  );
}
