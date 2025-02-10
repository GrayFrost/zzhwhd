import Image from "next/image";
import GarlicIcon from "../public/Garlic-Garlic.svg";
// svg from: https://maketext.io/
export const GarlicImage = () => (
  <div>
    <Image priority src={GarlicIcon} alt="Garlic Garlic" />
  </div>
);
