import React from "react";

const footerInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => {
  return (
    <div className="footer-info container">
      <ul className="footer-info-ul">
        {footerInfo.map(info => (
          <li className="footer-info-ul-li">{info}</li>
        ))}
      </ul>
    </div>
  );
};
export default Footer;
