export default function PlaceOrderButton({ price }) {
  // const [price, setPrice] = useState(0);
  if (price < 0) price = 0;
  return (
    <button
      className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      // onClick={() => console.log(price)}
    >
      Place Order (BDT {price})
    </button>
  );
}
