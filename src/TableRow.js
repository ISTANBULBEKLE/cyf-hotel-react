import React, { useState } from "react";
import moment from "moment";

const TableRow = ({ booking }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }

  const {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  } = booking;

  return (
    <tr
      style={{ backgroundColor: isMouseOver ? "yellow" : "white" }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{NumberOfNights(checkInDate, checkOutDate)}</td>
    </tr>
  );
};

const NumberOfNights = (checkInDate, checkOutDate) => {
  const checkIn = moment(checkInDate);
  const checkOut = moment(checkOutDate);

  return checkOut.diff(checkIn, "days");
};

export default TableRow;
