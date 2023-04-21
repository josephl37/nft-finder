import ListNFT from "./listNFT";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function ListView() {
  const data = useSelector((state) => state.nfts.data)
  const [ activeNFT, setActiveNFT ] = useState("");

  const onClickNFT = (e, index) => {
    e.preventDefault();
    setActiveNFT(index)
  }

  return (
    <div className="overflow-y-auto">
      <div className="flex justify-between text-sm border-b border-gray-3 px-4 py-2">
        <p className="text-gray-4 w-5/6">Name</p>
        <p className="text-gray-5 w-1/6">Type</p>
      </div>
      <div>
      {data ? (
        data.map((nft, index) => (
          <ListNFT key={index} nft={nft} index={index} activeNFT={activeNFT} onClickNFT={onClickNFT}/>
        ))
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
  );
}
