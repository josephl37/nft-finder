import Image from "next/image";
import finderIcon from "../public/findericon.png";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <Image src={finderIcon} className="w-28" alt="finder icon" />
        <p className="text-white text-center text-lg font-serif">nft finder</p>
        <div className="mt-20 flex justify-center">
          <Link href="/home">
            <button className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 px-8 py-1 rounded text-white font-serif drop-shadow-lg hover:brightness-110">
              enter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
