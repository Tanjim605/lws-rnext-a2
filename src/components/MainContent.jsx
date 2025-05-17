import CustomerNameInput from "./CustomerNameInput";
import OrderAndReport from "./OrderAndReport";
import PlaceOrderButton from "./PlaceOrderButton";

export default function MainContent({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
        <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
        <p className="text-gray-400 text-sm mb-4">
          Accurately fulfill customer orders based on a precise understanding of
          their requirements.
        </p>
        <CustomerNameInput />
        {/* items below */}
        {children}
        <PlaceOrderButton />
      </div>
      
      <OrderAndReport />
    </div>
  );
}
