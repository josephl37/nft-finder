import MenuBar from "./menuBar";
import GridView from "./gridView";
import ListView from "./listView";

export default function Main() {
  return (
    <div className="col-start-2 bg-white rounded-tr-lg rounded-br-lg flex flex-col min-h-0 overflow-hidden">
      <MenuBar />
      <ListView />
    </div>
  );
}
