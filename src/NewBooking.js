import React, { useState } from "react";

const NewBooking = ({ booking }) => {
  const {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
    //showProfile
  } = booking;

  const [formSubmit, setFormSubmit] = useState("");

  function handleSubmit(event) {
    setFormSubmit();
    event.preventDefault();
  }

  const [cid, setCid] = useState("");
  function handleCid(e) {
    setCid(e.target.value);
  }

  const [ctitle, setcTitle] = useState("");
  function handlecTitle(e) {
    setcTitle(e.target.value);
  }

  const [cfirstName, setcFirstName] = useState("");
  function handlecFirstName(e) {
    setcFirstName(e.target.value);
  }

  const [csurName, setcSurName] = useState("");
  function handlecSurName(e) {
    setcSurName(e.target.value);
  }

  const [cemail, setcEmail] = useState("");
  function handlecEmail(e) {
    setcEmail(e.target.value);
  }

  const [croomId, setcRoomId] = useState("");
  function handlecRoomId(e) {
    setcRoomId(e.target.value);
  }

  const [ccheckInDate, setcCheckInDate] = useState("");
  function handlecCheckInDate(e) {
    setcCheckInDate(e.target.value);
  }
  const [ccheckOutDate, setcCheckOutDate] = useState("");
  function handlecCheckOutDate(e) {
    setcCheckOutDate(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleCid} type="text" name="id" value={id}>
        Customer Id: {id}
      </input>
      <input onChange={handlecTitle} type="text" name="title" value={title}>
        Customer Title: {title}
      </input>
      <input
        onChange={handlecFirstName}
        type="text"
        name="firstName"
        value={firstName}
      >
        Customer First Name: {firstName}
      </input>
      <input
        onChange={handlecSurName}
        type="text"
        name="surName"
        value={surname}
      >
        Customer Sur Name: {surname}
      </input>
      <input onChange={handlecEmail} type="text" name="email" value={email}>
        Customer email: {email}
      </input>
      <input onChange={handlecRoomId} type="text" name="roomId" value={roomId}>
        Customer Room Id: {roomId}
      </input>
      <input
        onChange={handlecCheckInDate}
        type="text"
        name="checkInDate"
        value={checkInDate}
      >
        Customer Check In Date: {checkInDate}
      </input>
      <input
        onChange={setcCheckOutDate}
        type="text"
        name="checkOutDate"
        value={checkOutDate}
      >
        Customer Check Out Date: {checkOutDate}
      </input>
      <button type="submit">Submit the Form</button>
    </form>
  );
};

// export default NewBooking;
