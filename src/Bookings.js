import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [Bookings, setNewBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => setNewBookings(data));
  }, [fetch]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults searches={Bookings} />
      </div>
    </div>
  );
};

export default Bookings;
