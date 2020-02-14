import React, { useState } from "react";
import axios from "axios";
import "./../contact.css";

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
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            rows="5"
            name="message"
            value={contact.message}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
