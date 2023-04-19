import Image from "next/image";

export default function GridNFT({ nft }) {
  return (
    <div>
      <Image
        src={nft.media[0].gateway}
        alt="nft"
        width="100"
        height="100"
        className="rounded mx-auto"
      />
      <p className="text-xs text-center m-2">{nft.title}</p>
    </div>
  );
}