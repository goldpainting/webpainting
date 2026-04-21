import { buildAreaMetadata, getAreaLandingData } from "../components/areaLandingData";
import AreaLandingPage from "../components/AreaLandingPage";

const area = getAreaLandingData("parrish");

export const metadata = buildAreaMetadata(area);

export default function ParrishPage() {
  return <AreaLandingPage area={area} />;
}
