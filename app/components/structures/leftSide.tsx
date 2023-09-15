export default function LeftSide({newsItems}) {
  return (
    <div className="left-side">
      <div className="absolute w-20 h-5/6 bg-gray-500"></div>
      <div className="absolute w-20 h-4/6 translate-x-20 bg-gray-800"></div>
      <div className="absolute w-20 h-5/6 translate-x-40 bg-gray-800"></div>
    </div>
  );
}
