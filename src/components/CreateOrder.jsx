import Item from "./Item";

export default function CreateOrder({
  totalItem,
  itemData,
  totalPrice,
  setTotalPrice,
  orderTable,
  handlePlaceOrder,
}) {
  {
    if (totalPrice < 0) totalPrice = 0;
  }
  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        ></input>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {itemData.map((item) => (
            <Item
              totalItem={totalItem}
              setTotalPrice={setTotalPrice}
              totalPrice={totalPrice}
              name={item.itemName}
              price={item.price}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      >
        Place Order (BDT {totalPrice})
      </button>
    </div>
  );
}
