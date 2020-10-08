import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => setProfile(data));
  }, [id]);

  return profile ? (
    <div>
      <p>Customer Profile:{profile.id} </p>
      <p>Customer email:{profile.email}</p>
      <p>VIP:{profile.vip}</p>
      <p>Customer phone: {profile.phoneNumber}</p>
    </div>
  ) : (
    id && <p>Delayed...data is downloading</p>
  );
};

export default CustomerProfile;
