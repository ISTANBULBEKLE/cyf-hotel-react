import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room id</th>
        <th scope="col">Check in Date</th>
        <th scope="col">Check out Date</th>
        <th scope="col">Number of Nights</th>
      </tr>
    </thead>
  );
};

export default TableHead;
