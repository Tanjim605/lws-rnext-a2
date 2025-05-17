import ChooseItems from "./components/ChooseItems";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import OrderSummaryCard from "./components/OrderSummaryCard";

export default function App() {
  return (
    <div className="text-white container mx-auto px-4 h-screen flex flex-col">
      <Navbar />
      <MainContent>
        <ChooseItems />
      </MainContent>
      
    </div>
  );
}
