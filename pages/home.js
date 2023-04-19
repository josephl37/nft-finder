import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import Sidebar from "../components/sidebar";
import Main from "../components/main";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

export default function Home() {
  return (
    <WagmiConfig client={client}>
      <div className="grid grid-cols-5 grid-rows-6 h-screen">
        <div
          className="col-start-2 col-span-3 row-start-2 row-span-4 row-end-6 grid drop-shadow-2xl"
          style={{ gridTemplateColumns: "160px minmax(300px, auto)" }}
        >
          <Sidebar />
          <Main />
        </div>
      </div>
    </WagmiConfig>
  );
}
