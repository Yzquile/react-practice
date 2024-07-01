import React from "react";
import "../../App.css";
import Swal from 'sweetalert2'

const api_key = process.env.REACT_APP_WEB3_API_KEY;

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", api_key);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

  return (
    <section className="contact">
      <h1>My Contact Page</h1>
      <form onSubmit={onSubmit}>
        <h2>Contact Form</h2>
        <p>Fill up the form below to send me a message.</p>
        <div className="input-box">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Enter message here..."
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
