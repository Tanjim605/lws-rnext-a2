import TableHead from "./TableHead";

export default function Table({ orderTable, onDelete, onDeliver }) {
  return (
    <div className="bg-cardbg rounded-lg p-4">
      <div className="reports-container">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-sm">
              <TableHead />
            </tr>
          </thead>
          <tbody className="text-sm">
            {orderTable.map((obj) => {
              if (obj.status == "PENDING") {
                return (
                  <tr className="border-t border-gray-700">
                    <td className="py-3">{obj.id}</td>
                    <td className="py-3">{obj.customerName}</td>
                    <td className="py-3">{obj.items}</td>
                    <td className="py-3">{obj.amount}</td>
                    <td className="py-3">
                      <span className="text-red-500">{obj.status}</span>
                    </td>
                    <td className="py-3">
                      <button
                        onClick={() => onDelete(obj.id)}
                        className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => onDeliver(obj.id)}
                        className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
                      >
                        DELIVER
                      </button>
                    </td>
                  </tr>
                );
              } else if (obj.status == "DELIVERED") {
                return (
                  <tr className="border-t border-gray-700">
                    <td className="py-3">{obj.id}</td>
                    <td className="py-3">{obj.customerName}</td>
                    <td className="py-3">{obj.items}</td>
                    <td className="py-3">{obj.amount}</td>
                    <td className="py-3">
                      <span className="text-green-500">{obj.status}</span>
                    </td>
                    <td className="py-3">
                      <button
                        onClick={() => onDelete(obj.id)}
                        className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
            {/* {console.log(pend, deli)} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
