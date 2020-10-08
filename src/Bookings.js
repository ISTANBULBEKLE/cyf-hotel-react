import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => response.json())
      .then(data => {
        setDataLoading(false);
        setBookings(data);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        b =>
          b.firstName.toLowerCase() === searchVal.toLowerCase() ||
          b.surname.toLowerCase() === searchVal.toLowerCase()
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {dataLoading ? (
          <p> User Data is loading...</p>
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
