import Image from "next/image";
import LeftSvg from "../public/chevron-left.svg";
import RightSvg from "../public/chevron-right.svg";
import GridSvg from "../public/grid.svg";
import ListSvg from "../public/list.svg";

export default function MenuBar() {
  return (
    <div className="flex py-2 justify-between border-b border-gray-3">
      <div className="flex ml-2">
        <div className="hover:bg-gray-2 p-1 rounded">
          <Image src={LeftSvg} alt="left" />
        </div>
        <div className="hover:bg-gray-2 p-1 rounded">
          <Image src={RightSvg} alt="right" />
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-sm font-medium text-gray-4">john.eth's wallet</p>
      </div>
      <div className="flex gap-2 mr-2">
        <div className="hover:bg-gray-2 p-1 rounded">
          <Image src={GridSvg} alt="grid" />
        </div>
        <div className="hover:bg-gray-2 p-1 rounded">
          <Image src={ListSvg} alt="list" />
        </div>
      </div>
    </div>
  );
}
