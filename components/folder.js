import FolderSvg from "../public/folder.svg";
import Image from "next/image";

export default function Folder() {
  return (
    <div className="flex gap-2 text-gray-4 hover:bg-gray-3 px-2 py-1 mb-1 rounded cursor-pointer">
      <Image src={FolderSvg} alt="folder" />
      <p className="text-sm">Favorites</p>
    </div>
  );
}
