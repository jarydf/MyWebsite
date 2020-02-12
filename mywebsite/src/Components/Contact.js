import React, { useState } from "react";
import axios from "axios";

function Contact(props) {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });

  const handleChange = event => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/send", contact)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="message">Message</label>
          <textarea
            rows="5"
            name="message"
            value={contact.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-field">
          <button className="btn blue darken-3" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
