import ChooseItems from "./components/ChooseItems";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="text-white container mx-auto px-4 h-screen flex flex-col">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <MainContent/>
      </div>
    </div>
  );
}
