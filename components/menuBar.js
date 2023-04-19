import Image from "next/image";
import LeftSvg from "../public/chevron-left.svg";
import RightSvg from "../public/chevron-right.svg";
import GridSvg from "../public/grid.svg";
import ListSvg from "../public/list.svg";
import SignoutSvg from "../public/signout.svg";
import truncateEthAddress from "truncate-eth-address";

export default function MenuBar({
  isConnected,
  address,
  toggleView,
  isGrid,
  isClient,
  disconnect,
}) {
  if (isConnected && isClient) {
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
          <p className="text-sm font-medium text-gray-4">{truncateEthAddress(address)}&apos;s wallet</p>
        </div>
        <div className="flex gap-2 mr-2">
          <div
            className={`p-1 rounded ${isGrid ? "bg-gray-2" : ""}`}
            onClick={isGrid ? null : toggleView}
          >
            <Image src={GridSvg} alt="grid" />
          </div>
          <div
            className={`p-1 rounded ${!isGrid ? "bg-gray-2" : ""}`}
            onClick={!isGrid ? null : toggleView}
          >
            <Image src={ListSvg} alt="list" />
          </div>
          <div
            className="p-1 rounded hover:bg-gray-2 cursor-pointer"
            onClick={disconnect}
          >
            <Image src={SignoutSvg} alt="signout" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex py-2 justify-between border-b border-gray-3">
      <div className="flex ml-2">
        <div className="p-1 rounded">
          <Image src={LeftSvg} alt="left" />
        </div>
        <div className="p-1 rounded">
          <Image src={RightSvg} alt="right" />
        </div>
      </div>

      <div className="flex gap-2 mr-2">
        <div className="p-1 rounded">
          <Image src={GridSvg} alt="grid" />
        </div>
        <div className="p-1 rounded">
          <Image src={ListSvg} alt="list" />
        </div>
      </div>
    </div>
  );
}
