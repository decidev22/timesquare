import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex">
      <div className="stage-3d">
        <div className="panel front-left-panel">TESTING TESTING TESTING</div>
        <div className="panel middle-left-panel">TESTING</div>
        <div className="left-wall-front"></div>
        <div className="left-wall-middle">
          <div className="panel">TESTING TESTING</div>
        </div>
        <div className="panel rear-left-panel">TESTING TESTING TESTING</div>
        <div className="left-wall-back"></div>
        <div className="left-wall-back-2"></div>
        <div className="left-wall-back-3"></div>
        <div className="center-building">
          <div className="m-1 w-9/10 h-24 bg-white"></div>
          <div className="m-1 w-9/10 h-48 bg-red-500"></div>
          <div className="m-1 w-9/10 h-32 bg-cyan-500"></div>
          <div className="m-1 w-9/10 h-32 bg-green-500"></div>
          <div className="m-1 w-9/10 h-48 bg-yellow-500"></div>
        </div>
        <div className="right-wall-back"></div>
        <div className="right-wall-middle"></div>
        <div className="panel front-right-panel">TESTING TESTING TESTING</div>
        <div className="right-wall-front">
          <div className="bg-white m-1">TESTING TESTING</div>
          <div className="bg-white m-1 h-48">TESTING TESTING</div>
          <div className="bg-white m-1 h-48">TESTING TESTING</div>
          <div className="bg-white m-1">TESTING TESTING</div>
        </div>
      </div>
    </main>
  );
}
