export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="stage-3d">
        <div className="left-wall-front"></div>
        <div className="left-wall-middle"></div>
        <div className="left-wall-back"></div>
        <div className="center-building">
          <div className="m-1 w-9/10 h-24 bg-white"></div>
          <div className="m-1 w-9/10 h-48 bg-red-500"></div>
          <div className="m-1 w-9/10 h-32 bg-cyan-500"></div>
          <div className="m-1 w-9/10 h-32 bg-green-500"></div>
          <div className="m-1 w-9/10 h-48 bg-yellow-500"></div>
        </div>
        <div className="right-wall-back"></div>
        <div className="right-wall-middle"></div>
        <div className="right-wall-front">
        </div>
      </div>
    </main>
  );
}
