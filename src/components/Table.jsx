import TableHead from "./TableHead";
import TableRow from "./TableRow";

export default function Table() {
  const tableData = [
    {
      id: 21,
      customerName: "Sumit Saha",
      items: 5,
      amount: 123,
      status: "PENDING",
    },
    {
      id: 21,
      customerName: "Akash Ahmed",
      items: 5,
      amount: 123,
      status: "DELIVERED",
    },
    {
      id: 21,
      customerName: "Saad Hasan",
      items: 5,
      amount: 123,
      status: "PENDING",
    },
    {
      id: 21,
      customerName: "MD Salahuddin",
      items: 5,
      amount: 123,
      status: "PENDING",
    },
    {
      id: 21,
      customerName: "Ferdous",
      items: 5,
      amount: 123,
      status: "PENDING",
    },
    {
      id: 21,
      customerName: "Rafe",
      items: 5,
      amount: 123,
      status: "PENDING",
    },
    {
      id: 21,
      customerName: "Sarwar",
      items: 5,
      amount: 123,
      status: "PENDING",
    },
    {
      id: 21,
      customerName: "Obaidul",
      items: 5,
      amount: 123,
      status: "PENDING",
    },
  ];

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
            {tableData.map((obj) => (
              <TableRow
                id={obj.id}
                customerName={obj.customerName}
                items={obj.items}
                amount={obj.amount}
                status={obj.status}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
