import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex">
      <div className="stage-3d">
        <div className="panel front-panel">Testing testing testing</div>
        <div className="panel middle-panel">Testing</div>
        <div className="panel rear-panel"></div>
        <div className="left-wall-front"></div>
        <div className="left-wall-middle">
          <div className="panel">TESTING TESTING</div>
        </div>
        <div className="left-wall-back"></div>
        <div className="center-panel text-white">Testing</div>
        <div className="right-wall-back"></div>
        <div className="right-wall-middle"></div>
        <div className="right-wall-front">
          <div className="panel">TESTING TESTING</div>
        </div>
      </div>
      {/* <div className="stage-3d">
        <div className="left-wall-back"></div>
        <div className="right-wall-back"></div>
        <div className="right-wall-middle"></div>
        <div className="right-wall-front"></div>
      </div> */}
    </main>
  );
}
