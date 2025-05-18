import TableHead from "./TableHead";
import TableRow from "./TableRow";

export default function Table({orderData}) {
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
            {orderData.map((obj) => {
              // if (obj.status == "PENDING") pend++;
              // else if (obj.status == "DELIVERED") deli++;

              return (
                <tr class="border-t border-gray-700">
                  <td class="py-3">{obj.id}</td>
                  <td class="py-3">{obj.customerName}</td>
                  <td class="py-3">{obj.items}</td>
                  <td class="py-3">{obj.amount}</td>
                  <td class="py-3">
                    <span class="text-red-500">{obj.status}</span>
                  </td>
                  <td class="py-3">
                    <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                      Delete
                    </button>
                    <button class="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                      DELIVER
                    </button>
                  </td>
                </tr>
              );
            })}
            {/* {console.log(pend, deli)} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
