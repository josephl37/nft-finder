import { useState } from "react";
import { overrideTailwindClasses } from "tailwind-override";
import ModalLayout from "./modal";

export default function ListNFT({ nft, index, activeNFT, onClickNFT }) {
  const [modal, toggleModal] = useState(false);
  const openModal = () => toggleModal(true);
  const closeModal = () => toggleModal(false);

  const onDoubleClick = (e) => {
    openModal();
  };

  const [src, setSrc] = useState(nft.media[0].gateway);

  const isEven = index % 2 === 0;
  const bgColor = isEven ? "bg-white" : "bg-gray-1";
  const title = nft.title ? nft.title : "UNTITLED";

  const activeState = activeNFT === index ? "bg-blue-2" : "";
  const activeText = activeNFT === index ? "text-white" : "";

  return (
    <div
      className={overrideTailwindClasses(
        `flex justify-between text-sm px-4 py-0.5 cursor-default ${bgColor} ${activeState}`
      )}
      onClick={(e) => onClickNFT(e, index)}
      onDoubleClick={(e) => onDoubleClick(e)}
    >
      <div className={`text-gray-4 w-5/6 truncate pr-4 ${activeText}`}>
        {title}
      </div>
      <div className={`text-gray-5 w-1/6 ${activeText}`}>
        {nft.contractMetadata.tokenType}
      </div>
      <ModalLayout
        modal={modal}
        closeModal={closeModal}
        nft={nft}
        src={src}
        title={title}
        setSrc={setSrc}
      />
    </div>
  );
}