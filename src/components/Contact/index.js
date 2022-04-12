import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="panel-container d-flex flex-column justify-content-center align-items-center">
        <div className="left-panel d-flex justify-content-center align-items-center w-50">
          <h1 data-testid="contact">Contact</h1>
        </div>
        <div className="right-panel d-flex flex-column justify-content-center align-items-center w-50">
          <h5 data-testid="email">Email: rrich.kray.93@gmail.com</h5>
          <h5 data-testid="gh">GitHub: https://rrich-kray.github.io</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
