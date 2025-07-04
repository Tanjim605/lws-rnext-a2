export default function TableRow({
  id,
  customerName,
  items,
  amount,
  status,
  totalPending,
  setPending,
  totalDelivered,
  setDelivered,
}) {
  function actionButton() {
    if (status == "PENDING") {
      // setPending(totalPending + 1);
      return (
        <>
          <td className="py-3">
            <span className="text-red-500">{status}</span>
          </td>
          <td className="py-3">
            <button className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
              Delete
            </button>
            <button
              onClick={() => {
                status = "DELIVERED";
                setPending(totalPending - 1);
                setDelivered(totalDelivered + 1);
              }}
              className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
            >
              DELIVER
            </button>
          </td>
        </>
      );
    } else {
      // setDelivered(totalDelivered + 1);
      return (
        <>
          <td className="py-3">
            <span className="text-green-500">{status}</span>
          </td>
          <td className="py-3">
            <button className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
              Delete
            </button>
          </td>
        </>
      );
    }
  }

  let statusData = actionButton(status);

  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">{id}</td>
      <td className="py-3">{customerName}</td>
      <td className="py-3">{items}</td>
      <td className="py-3">{amount}</td>
      {statusData}
    </tr>
  );
}
