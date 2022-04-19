import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const Contact = () => {
  // when input content is changed, handleInputChange is invoked, which
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "username") setUsername(e.target.value);
    if (e.target.name === "message") setMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !username || !message || !validateEmail(email)) {
      setErrorMessage("Invalid input detected");
      return;
    }

    setUsername("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="contact d-flex flex-column justify-content-center align-items-center">
      <form className="form d-flex flex-column justify-content-center align-items-center">
        <label for="username">Username:</label>
        <input
          type="text"
          name="username"
          onChange={handleInputChange}
          value={username}
        />
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={handleInputChange}
          value={email}
        />
        <label for="message">Message</label>
        <input
          type="text"
          name="message"
          onChange={handleInputChange}
          value={message}
        />
      </form>
      <button
        className="submit-btn nav-btn"
        onClick={handleFormSubmit}
        onChange={handleInputChange}
      >
        Submit Message
      </button>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
