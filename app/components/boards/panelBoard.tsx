export default function PanelBoard({
  newsSelections = [''],
  textSize = "text-xs",
  bottomMargin = "mb-36",
  bgColors = ['bg-white']
}) {

  return (
    <div
      className={`${textSize} ${bottomMargin} flex flex-col justify-end`}
    >
      {newsSelections.length
        ? newsSelections.map((item, index) => (
            <div
              className={`${bgColors[index] ? bgColors[index] : 'bg-white'} my-0.5 overflow-hidden border-2 border-black`}
              key={index}
            >
              {item}
            </div>
          ))
        : null}
    </div>
  );
}
