import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import Controls from "./controls";
import Folder from "./folder";

export default function Sidebar() {
  const { isConnected } = useAccount();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="col-start-1 bg-gray-2 rounded-tl-lg rounded-bl-lg">
      <Controls />
      {isConnected && isClient && (
        <div className="mx-2 mt-6">
          <p className="text-gray-4 text-sm mb-2 ml-2 font-medium">Folders</p>
          <Folder />
        </div>
      )}
    </div>
  );
}

/* OLD CODE
if (isConnected && isClient) {
    return (
      <div className="col-start-1 bg-gray-2 rounded-tl-lg rounded-bl-lg">
      <Controls />
      <div className="mx-2 mt-6">
        <p className="text-gray-4 text-sm mb-2 ml-2 font-medium">Folders</p>
        <Folder />
      </div>
    </div>
    )
  }
  return (
    <div className="col-start-1 bg-gray-2 rounded-tl-lg rounded-bl-lg">
      <Controls />
    </div>
  );
*/
