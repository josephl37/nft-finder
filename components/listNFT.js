export default function ListNFT({nft, index}) {
  const isEven = index % 2 === 0;
  const bgColor = isEven ? "bg-white" : "bg-gray-1";

  return (
    <div className={`flex justify-between text-sm px-4 py-0.5 ${bgColor}`}>
      <div className="text-gray-4 w-5/6">{nft.title}</div>
      <div className="text-gray-5 w-1/6">{nft.contractMetadata.tokenType}</div>
    </div>
  );
}
