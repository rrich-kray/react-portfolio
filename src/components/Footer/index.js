import React from "react";

const Footer = () => {
  return (
    <div className="footer d-flex flex-column justify-content-center align-items-center">
      <h2>❤️ Made with love by Code Monkey</h2>
      <img
        src={require("../Hero/monkey.svg").default}
        className="footer-icon"
        style={{ marginBottom: "10px" }}
        alt="monkey-icon"
      />
      <div style={{ marginBottom: "10px" }}> &copy; 2022 Code Monkey, inc.</div>
      <span style={{ fontWeight: "bold", fontSize: "25px" }}>
        Email: rrich.kray.93@gmail.com
      </span>
      <div className="links d-flex justify-content-center align-items-center">
        <a href="https://github.com/rrich-kray/" alt="github-link">
          <img
            src={require("../Projects/gh.svg").default}
            alt="gh-icon"
            style={{ height: "55px", padding: "10px;" }}
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/ryankray/" alt="linkedIn-link">
          <img
            src={require("./linkedin.svg").default}
            alt="linkedIn-icon"
            style={{ height: "75px", padding: "10px" }}
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
