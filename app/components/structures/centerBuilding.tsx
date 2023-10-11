import PanelBoard from "../boards/panelBoard";

export default function CenterBuilding({ newsItems }: { newsItems: string[] }) {
  return (
    <div className="center-building flex flex-col justify-end">
      <PanelBoard
        newsSelections={newsItems}
        bottomMargin="mb-44"
        textSize="text-xl"
        bgColors={["bg-white", "bg-cyan-500", "bg-yellow-500", "bg-red-500"]}
      />
    </div>
  );
}
