import React from "react";

const RestaurantButton = ({ order }) => {
  return (
    <button onClick={order} className="btn btn-outline-danger order-button">
      Add
    </button>
  );
};
export default RestaurantButton;
