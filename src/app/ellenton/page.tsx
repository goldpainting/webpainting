import { buildAreaMetadata, getAreaLandingData } from "../components/areaLandingData";
import AreaLandingPage from "../components/AreaLandingPage";

const area = getAreaLandingData("ellenton");

export const metadata = buildAreaMetadata(area);

export default function EllentonPage() {
  return <AreaLandingPage area={area} />;
}
