import { overrideTailwindClasses } from "tailwind-override";

export default function ListNFT({nft, index, activeNFT, onClickNFT}) {
  const isEven = index % 2 === 0;
  const bgColor = isEven ? "bg-white" : "bg-gray-1";
  const title = nft.title ? nft.title : "UNTITLED";

  const activeState = activeNFT === index ? "bg-blue-2" : "";
  const activeText = activeNFT === index ? "text-white" : "";

  return (
    <div className={overrideTailwindClasses(`flex justify-between text-sm px-4 py-0.5 cursor-default ${bgColor} ${activeState}`)} onClick={e => onClickNFT(e, index)}>
      <div className={`text-gray-4 w-5/6 truncate pr-4 ${activeText}`}>{title}</div>
      <div className={`text-gray-5 w-1/6 ${activeText}`}>{nft.contractMetadata.tokenType}</div>
    </div>
  );
}