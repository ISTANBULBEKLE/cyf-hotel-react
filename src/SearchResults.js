import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const SearchResults = ({ searches }) => {
  console.log(searches);
  return (
    <table className="table">
      <TableHead />
      <TableBody bookings={searches} />
    </table>
  );
};

export default SearchResults;
