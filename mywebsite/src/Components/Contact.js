import React, { useState } from "react";
import Axios from "axios";
import "./../css/contact.css";
import Recaptcha from './Recaptcha';

function Contact(props) {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });

  const handleChange = event => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    var recaptcha = document.getElementById("g-recaptcha-response").value;
    if (recaptcha === "") {
      event.preventDefault();
      alert("Please check the recaptcha");
    }
    else{
    event.preventDefault();
    const data = { contact };
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("name").value = "";
    alert("Message Sent");
    Axios.post(
      "https://us-central1-mywebsite-57f7f.cloudfunctions.net/submit",
      data
    )
      .then(e => {
        console.log("success");
      })
      .catch(error => {
        console.log(error);
      });
    }
  };

  return (
    <div className="container">
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
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
            id="email"
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
            id="message"
            rows="5"
            name="message"
            value={contact.message}
            onChange={handleChange}
            required
          />
          <Recaptcha />
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
