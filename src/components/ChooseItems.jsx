import Item from "./Item";

export default function ChooseItems() {
  const itemData = [
    {
      itemName: "Hamburger",
      price: 300,
      imageSrc: "../../assets/hamburger.svg",
      imageAlt: "Hamburger",
    },
    {
      itemName: "Chicken Nuggets",
      price: 150,
      imageSrc: "../../assets/chicken.svg",
      imageAlt: "Chicken Nuggets",
    },
    {
      itemName: "Pizza slices",
      price: 200,
      imageSrc: "../../assets/pizza.svg",
      imageAlt: "Pizza slices",
    },
    {
      itemName: "Submarine Sandwich",
      price: 250,
      imageSrc: "../../assets/submarine.svg",
      imageAlt: "Submarine Sandwich",
    },
  ];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Choose Items</label>
      <div className="items-container">
        {itemData.map((item) => (
          <Item
            name={item.itemName}
            price={item.price}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}
