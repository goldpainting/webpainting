import { buildAreaMetadata, getAreaLandingData } from "../components/areaLandingData";
import AreaLandingPage from "../components/AreaLandingPage";

const area = getAreaLandingData("palmetto");

export const metadata = buildAreaMetadata(area);

export default function PalmettoPage() {
  return <AreaLandingPage area={area} />;
}
