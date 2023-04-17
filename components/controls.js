import RedSvg from "../public/red.svg";
import YellowSvg from "../public/yellow.svg";
import GreenSvg from "../public/green.svg";
import Image from "next/image";

export default function Controls() {
  return (
    <div className="flex gap-1.5 mt-3 ml-3">
      <Image src={RedSvg} alt="red" />
      <Image src={YellowSvg} alt="yellow" />
      <Image src={GreenSvg} alt="green" />
    </div>
  );
}
