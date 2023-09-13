import CenterBuilding from "./components/structures/centerBuilding";
import LeftSide from "./components/structures/leftSide";
import RightSide from "./components/structures/rightSide";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="stage-3d">
        <LeftSide />
        <CenterBuilding />
        <RightSide />
      </div>
    </main>
  );
}
