import { useState } from "react";
import Image from "next/image";
import ModalLayout from "./modal.js";

export default function GridNFT({ index, nft, activeNFT, onClickNFT }) {
  const [src, setSrc] = useState(nft.media[0].gateway);
  const [modal, toggleModal] = useState(false);
  const openModal = () => toggleModal(true);
  const closeModal = () => toggleModal(false);

  const title = nft.title ? nft.title : "UNTITLED";
  const activeImg = activeNFT === index ? "bg-gray-2 rounded" : "";
  const activeText =
    activeNFT === index ? "bg-blue-2 text-white rounded p-0.5" : "";

  const onDoubleClick = (e) => {
    openModal();
  };

  return (
    <div>
      <div
        onClick={(e) => onClickNFT(e, index)}
        onDoubleClick={(e) => onDoubleClick(e)}
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
        <p className={`text-xs text-center m-1 truncate ${activeText}`}>
          {title}
        </p>
      </div>
      <ModalLayout modal={modal} closeModal={closeModal} nft={nft} src={src} title={title} />
    </div>
  );
}
