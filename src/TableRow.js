import React, { useState } from "react";
import moment from "moment";

const TableRow = ({ booking, changeId }) => {
  const [rowClass, setRowClass] = useState(false);

  function handleOnClick() {
    setRowClass(!rowClass);
  }

  function handleClick() {
    changeId(id);
  }

  const {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate,
    showProfile
  } = booking;

  return (
    <tr className={rowClass ? "yellow-class" : ""} onClick={handleOnClick}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{NumberOfNights(checkInDate, checkOutDate)}</td>
      <button onClick={handleClick} className="btn btn-outline-success">
        Show Profile {showProfile}
      </button>
    </tr>
  );
};

const NumberOfNights = (checkInDate, checkOutDate) => {
  const checkIn = moment(checkInDate);
  const checkOut = moment(checkOutDate);

  return checkOut.diff(checkIn, "days");
};

export default TableRow;
