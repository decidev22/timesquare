"use client";

import { useEffect, useState } from "react";
import CenterBuilding from "./components/structures/centerBuilding";
import LeftSide from "./components/structures/leftSide";
import RightSide from "./components/structures/rightSide";

export default function Home() {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await fetch("http://localhost:3003/news");
      const news = await response.json();
      setNews(news)
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <main className="flex justify-center">
      <div className="stage-3d">
        <LeftSide/>
        <CenterBuilding/>
        <RightSide/>
      </div>
    </main>
  );
}
