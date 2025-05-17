import FilterSvg from "./FilterSvg";
import OrderSummaryCard from "./OrderSummaryCard";
import Table from "./Table";

export default function OrderAndReport() {
  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      <div>
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <OrderSummaryCard number="8" text="Total Order" type="Total" />
          <OrderSummaryCard number="7" text="Pending" type="Pending" />
          <OrderSummaryCard number="1" text="Delivered" type="Delivered" />
        </div>
      </div>

      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>

        <div className="flex gap-4 items-center">
          <FilterSvg />
          <select className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm">
            <option>All</option>
            <option>Pending</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>
      <Table />
    </div>
  );
}
