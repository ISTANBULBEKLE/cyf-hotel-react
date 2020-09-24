import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const SearchResults = ({ searches }) => {
  return (
    <table className="table">
      <TableHead />
      <TableBody orders={searches} />
    </table>
  );
};

export default SearchResults;
