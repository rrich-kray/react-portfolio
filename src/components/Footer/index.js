import React from "react";

const Footer = () => {
  return (
    <div className="footer d-flex flex-column justify-content-center align-items-center">
      <h2>❤️ Made with love by Code Monkey</h2>
      <img
        src={require("../Hero/monkey.svg").default}
        className="footer-icon"
        alt="monkey-icon"
      />
      <div> &copy; 2022 Code Monkey, inc.</div>
    </div>
  );
};

export default Footer;
