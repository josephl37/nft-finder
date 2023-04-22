import Image from "next/image";
import Modal from "react-modal";
import Controls from "../components/controls.js";
import truncateEthAddress from "truncate-eth-address";

export default function ModalLayout({modal, closeModal, nft, src, title, setSrc}) {
  return (
    <Modal
      isOpen={modal}
      onRequestClose={closeModal}
      className="w-[740px] h-auto bg-white mx-auto mt-36 drop-shadow-2xl	rounded-lg"
      style={{ overlay: { backgroundColor: `rgba(0,0,0,0)` } }}
      disableAutoFocus={true}
    >
      <div>
        <div className="bg-gray-2 flex justify-between rounded-tl-lg rounded-tr-lg border border-gray-3">
          <div className="mb-2.5 ml-1">
            <Controls />
          </div>
        </div>
        <div className="flex">
          <div className="px-4 pt-6 border-r-2 border-gray-2 w-3/6">
            <Image
              src={src}
              alt="nft"
              width="400"
              height="400"
              className="rounded mx-auto"
              onError={() => setSrc("/../public/placeholder.png")}
            />
          </div>
          <div className="px-4 pt-4 w-3/6 overflow-y-auto h-96 overflow-hidden">
            <div>
              <p className="text-xl font-semibold">{title}</p>
              <p className="text-xs text-gray-4 mt-1">
                {nft.contractMetadata.openSea.collectionName}
              </p>
            </div>
            <div className="mt-10">
              <p className="text-sm font-semibold mb-1">Information</p>
              <div className="flex justify-between text-sm py-1 text-gray-4 border-b border-gray-2">
                <p>Floor Price</p>
                <p>{nft.contractMetadata.openSea.floorPrice} ETH</p>
              </div>
              <div className="flex justify-between text-sm py-1 text-gray-4 border-b border-gray-2">
                <p>Token Supply</p>
                <p>{nft.contractMetadata.totalSupply}</p>
              </div>
              <div className="flex justify-between text-sm py-1 text-gray-4 border-b border-gray-2">
                <p>Token Type</p>
                <p>{nft.contractMetadata.tokenType}</p>
              </div>
              <div className="flex justify-between text-sm py-1 border-b border-gray-2">
                <p className="text-gray-4 ">Contract</p>
                <a
                  className="text-blue-2 font-medium"
                  href={`https://etherscan.io/address/${nft.contract.address}`}
                  target="_blank"
                >
                  {truncateEthAddress(nft.contract.address)}
                </a>
              </div>
            </div>
            <div className="mt-4 mb-4">
              <p className="text-sm font-semibold mb-1">Description</p>
              <p className="">{nft.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
