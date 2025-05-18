import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { tableData } from "./tableData";

export default function Table({
  pend,
  deli,
  totalPending,
  setPending,
  totalDelivered,
  setDelivered,
}) {
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
            {tableData.map((obj) => {
              if (obj.status == "PENDING") pend++;
              else if (obj.status == "DELIVERED") deli++;

              return (
                <TableRow
                  totalDelivered={totalDelivered}
                  setDelivered={setDelivered}
                  totalPending={totalPending}
                  setPending={setPending}
                  id={obj.id}
                  customerName={obj.customerName}
                  items={obj.items}
                  amount={obj.amount}
                  status={obj.status}
                />
              );
            })}
            {/* {console.log(pend, deli)} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
