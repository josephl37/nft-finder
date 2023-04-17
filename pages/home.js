import Sidebar from "../components/sidebar";
import Main from "../components/main";

export default function Home() {
  return (
    <div className="grid grid-cols-5 grid-rows-6 h-screen">
      <div className="col-start-2 col-span-3 grid row-start-2 row-span-4 drop-shadow-2xl" style={{gridTemplateColumns: "160px minmax(200px, auto)"}}>
        <Sidebar/>
        <Main/>
      </div>
    </div>
  );
}