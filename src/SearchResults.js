import React, { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results, id }) => {
  const [customerID, setCustomerID] = useState("");

  function changeId(d) {
    setCustomerID(d);
  }

  return (
    <table className="table">
      <TableHead />
      <TableBody bookings={results} changeId={changeId} />
      <CustomerProfile id={customerID} />
    </table>
  );
};

export default SearchResults;
