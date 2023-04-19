import { useState, useEffect } from "react";
import { useConnect, useDisconnect, useAccount } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import MenuBar from "./menuBar";
import GridView from "./gridView";
import ListView from "./listView";

export default function Main() {
  const [isClient, setIsClient] = useState(false);
  const [isGrid, setGrid] = useState(true);
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleView = () => {
    setGrid(!isGrid);
  };

  if (isConnected && isClient) {
    return (
      <div className="col-start-2 bg-white rounded-tr-lg rounded-br-lg flex flex-col min-h-0 overflow-hidden">
        <MenuBar isConnected={isConnected} address={address} toggleView={toggleView} isGrid={isGrid} isClient={isClient} disconnect={disconnect}/>
        {isGrid ? <GridView /> : <ListView />}
      </div>
    );
  }
  return (
    <div className="col-start-2 bg-white rounded-tr-lg rounded-br-lg flex flex-col min-h-0 overflow-hidden">
      <MenuBar isConnected={isConnected} toggleView={toggleView} isGrid={isGrid} />
      <div className="flex flex-grow items-center justify-center">
        <button
          className="bg-gray-2 px-4 py-2 rounded hover:brightness-95"
          onClick={() => connect()}
        >
          connect wallet
        </button>
      </div>
    </div>
  );
}
