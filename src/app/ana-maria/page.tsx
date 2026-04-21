import { buildAreaMetadata, getAreaLandingData } from "../components/areaLandingData";
import AreaLandingPage from "../components/AreaLandingPage";

const area = getAreaLandingData("ana-maria");

export const metadata = buildAreaMetadata(area);

export default function AnaMariaPage() {
  return <AreaLandingPage area={area} />;
}
