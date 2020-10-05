import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  return (
    <table className="table">
      <TableHead />
      <TableBody bookings={results} />
      <CustomerProfile id={id} />
    </table>
  );
};

export default SearchResults;
