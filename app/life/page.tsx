import { getTravelData } from "@/api/travel";
import Map from "@/components/map";
export default async function Page() {
  const dark = `https://api.maptiler.com/maps/9377f8b1-69c2-444e-b849-35e77594d858/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_ACCESS_TOKEN}`;
  const light = `https://api.maptiler.com/maps/98c9d9a6-6443-4088-8613-0e6aa7b55ada/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_ACCESS_TOKEN}`;
  const { data: travelData } = await getTravelData();
  return <Map lightStyle={light} darkStyle={dark} travelData={travelData} />;
}
