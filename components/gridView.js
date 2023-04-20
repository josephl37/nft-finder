import GridNFT from "./gridNFT";
import loadingSvg from "../public/loading.svg";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function GridView() {
  const data = useSelector((state) => state.nfts.data)

  return (
    <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 px-4 py-4 overflow-y-auto">
       {data ? (
        data.map((nft, index) => (
          <GridNFT key={index} nft={nft}/>
        ))
      ) : (
        <div className="flex items-center justify-center h-full">
          <Image src={loadingSvg} alt="Loading..." className="w-6 h-6 animate-spin" />
      </div>
      )}
    </div>
  );
}
