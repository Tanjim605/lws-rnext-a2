export default function TableHead() {
  const headArray = [
    "ID",
    "Customer Name",
    "Items",
    "Amount",
    "Status",
    "Action",
  ];
  return headArray.map((headText) => (
    <th className="pb-3 font-medium">{headText}</th>
  ));
  // return <th className="pb-3 font-medium">{text}</th>;
}
