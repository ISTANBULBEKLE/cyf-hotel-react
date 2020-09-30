import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <div>
      <li className="order-restaurant-ul-li">
        {orderType}: {orders}
        <RestaurantButton order={orderOne} />
      </li>
    </div>
  );
};

export default Order;
