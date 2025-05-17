export default function OrderSummaryCard({ number, text, type }) {
  let numberColor, backgroundColor, textColor;
  if (type === "Total") {
    numberColor = "text-yellow-500";
    backgroundColor = " bg-yellow-800";
    textColor = " text-yellow-200";
  } else if (type === "Pending") {
    numberColor = "text-red-500";
    backgroundColor = " bg-red-800";
    textColor = " text-red-200";
  } else if (type === "Delivered") {
    numberColor = "text-green-500";
    backgroundColor = " bg-green-800";
    textColor = " text-green-200";
  }

  return (
    <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
      <div className={"text-5xl font-bold mb-2 " + numberColor}>{number}</div>
      <div
        className={
          backgroundColor +
          textColor +
          " bg-opacity-50 text-xs font-medium px-3 py-1 rounded-full inline-block "
        }
      >
        {text}
      </div>
    </div>
  );
}
