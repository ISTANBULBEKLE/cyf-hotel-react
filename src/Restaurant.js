import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3 className="order-restaurant">Restaurant Orders</h3>
      <ul className="order-restaurant-ul">
        <Order className="order-restaurant-ul-li" orderType="Pizzas" />
        <Order className="order-restaurant-ul-li" orderType="Salads" />
        <Order className="order-restaurant-ul-li" orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
