import { useState } from "react";
import CreateOrder from "./CreateOrder";
import OrderReport from "./OrderReport";
import OrderSummary from "./OrderSummary";

export default function MainContent() {
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
  const orderData = [
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
  // let totalItem = 0;
  const [totalItem, setTotalItem] = useState(0);
  const [customerName, setCustomerName] = useState("tanjim Demo");
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPending, setPending] = useState(7);
  const [totalDelivered, setDelivered] = useState(1);
  const [orderTable, setOrderData] = useState(orderData);

  // setOrderData(console.log("setting order"));
  function handleOrder() {
    let itemCount = totalItem > 0 ? totalItem : 0;
    setOrderData([
      {
        id: 21,
        customerName: customerName,
        items: itemCount,
        amount: totalPrice,
        status: "PENDING",
      },
      ...orderTable,
    ]);
    setPending(totalPending + 1);
    setTotalPrice(0);
    setTotalItem(0);
  }

  return (
    <>
      <CreateOrder
        customerName={customerName}
        setCustomerName={setCustomerName}
        totalItem={totalItem}
        setTotalItem={setTotalItem}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        itemData={itemData}
        orderTable={orderTable}
        handlePlaceOrder={handleOrder}
      />
      <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
        <OrderSummary
          totalPending={totalPending}
          totalDelivered={totalDelivered}
        />
        <OrderReport orderTable={orderTable} />
      </div>
    </>
  );
}
