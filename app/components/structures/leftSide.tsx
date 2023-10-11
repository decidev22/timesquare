import { itemsDivider } from "@/app/utils";
import PanelBoard from "../boards/panelBoard";

export default function LeftSide({ newsItems }: { newsItems: string[] }) {
  const [firstNewsSelection, secondNewsSelection, thirdNewsSelection] =
    itemsDivider(newsItems);

  return (
    <div className="left-side">
      <div className="absolute w-20 h-5/6 bg-gray-200  flex flex-col justify-end">
        <PanelBoard newsSelections={firstNewsSelection} bottomMargin="mb-72" />
      </div>
      <div className="absolute w-20 h-4/6 translate-x-20 bg-gray-400  flex flex-col justify-end">
        <PanelBoard newsSelections={secondNewsSelection} />
      </div>
      <div className="absolute w-20 h-5/6 translate-x-40 bg-gray-500  flex flex-col justify-end">
        <PanelBoard newsSelections={thirdNewsSelection} />
      </div>
    </div>
  );
}
