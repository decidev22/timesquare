import { itemsDivider } from "@/app/utils";
import PanelBoard from "../boards/panelBoard";

export default function RightSide({ newsItems = [""] }) {
  const [firstNewsSelection, secondNewsSelection, thirdNewsSelection] =
    itemsDivider(newsItems);

  return (
    <div className="right-side">
      <div className="absolute w-20 h-5/6 -translate-x-20 bg-gray-500 flex flex-col justify-end">
        <PanelBoard newsSelections={firstNewsSelection} />
      </div>
      <div className="absolute w-20 h-5/6 -translate-x-40 bg-gray-800 flex flex-col justify-end">
        <PanelBoard newsSelections={secondNewsSelection} bottomMargin="mb-72" />
      </div>
      <div className="absolute w-20 h-4/6 -translate-x-60 bg-gray-500 flex flex-col justify-end">
        <PanelBoard
          newsSelections={thirdNewsSelection}
          bottomMargin="mb-auto"
        />
      </div>
    </div>
  );
}
