import { useState } from "react";
import Image from "next/image";

export default function GridNFT({ index, nft, activeNFT, onClickNFT }) {
  const [src, setSrc] = useState(nft.media[0].gateway);

  const title = nft.title ? nft.title : "UNTITLED";
  const activeImg = activeNFT === index ? "bg-gray-2 rounded" : "";
  const activeText = activeNFT === index ? "bg-blue-2 text-white rounded p-0.5" : "";

  return (
    <div
    onClick={e => onClickNFT(e, index)}
    >
      <div className={`p-2 ${activeImg}`}>
      <Image
        src={src}
        alt="nft"
        width="100"
        height="100"
        className="rounded mx-auto"
        onError={() => setSrc("/../public/placeholder.png")}
      />
      </div>
      <p className={`text-xs text-center m-1 truncate ${activeText}`}>{title}</p>
    </div>
  );
}

/* Makes all images have the same aspect ratio but messes with image layout (not centered)
import { useState } from "react";
import Image from "next/image";

export default function GridNFT({ nft }) {
  const [src, setSrc] = useState(nft.media[0].gateway);

  const title = nft.title ? nft.title : "UNTITLED";

  return (
    <div>
      <div className="w-28 h-28 relative">
        <Image
          src={src}
          alt="nft"
          layout="fill"
          objectFit="cover"
          className="rounded"
          onError={() => setSrc("/../public/placeholder.png")}
        />
      </div>
      <p className="text-xs text-center m-2">{title}</p>
    </div>
  );
}
*/