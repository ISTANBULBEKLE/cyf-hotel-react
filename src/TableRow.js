import React, { useState } from "react";
import moment from "moment";

const TableRow = ({ booking }) => {
  const [rowClass, setRowClass] = useState(false);

  function handleOnClick() {
    setRowClass(!rowClass);
  }

  const {
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  } = booking;

  return (
    <tr className={rowClass ? "yellow-class" : ""} onClick={handleOnClick}>
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
