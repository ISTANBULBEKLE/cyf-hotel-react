import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ orders }) => {
  return (
    <tbody>
      {orders.map(order => (
        <TableRow key={order.id} order={order} />
      ))}
    </tbody>
  );
};

export default TableBody;
