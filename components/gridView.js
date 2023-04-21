import GridNFT from "./gridNFT";
import loadingSvg from "../public/loading.svg";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useState } from "react";

export default function GridView() {
  const data = useSelector((state) => state.nfts.data)
  const [ activeNFT, setActiveNFT ] = useState("");

  const onClickNFT = (e, index) => {
    e.preventDefault();
    setActiveNFT(index)
  }

  // TODO: ability to deselect clicking on something else
  const onClickScreen = (e) => {
    e.preventDefault();
  }

  return (
    <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 px-4 py-4 overflow-y-auto" onClick={onClickScreen}>
       {data ? (
        data.map((nft, index) => (
          <GridNFT key={index} index={index} nft={nft} activeNFT={activeNFT} onClickNFT={onClickNFT}/>
        ))
      ) : (
        <div className="flex items-center justify-center h-full">
          <Image src={loadingSvg} alt="Loading..." className="w-6 h-6 animate-spin" />
      </div>
      )}
    </div>
  );
}
