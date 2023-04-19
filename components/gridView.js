import GridNFT from "./gridNFT";
import { useSelector } from "react-redux";

export default function GridView() {
  const data = useSelector((state) => state.nfts.data)

  console.log(data);
  return (
    <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 px-4 py-4 overflow-y-auto">
       {data ? (
        data.map((nft, index) => (
          <GridNFT key={index} nft={nft}/>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
