import React, { useState } from "react";
import "./contact.css";
import email from "../../img/correo.png";
import TextField from "@material-ui/core/TextField";

import { db } from "../../firebase";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (state.name === "" || state.email === "" || state.message === "") {
      alert(
        "There are empty fields in the contact form. Please fill every field.",
      );
    } else {
      db.collection("contacts")
        .add({
          name: state.name,
          email: state.email,
          message: state.message,
        })
        .then(() => {
          alert(
            "You have successfully contact us. You'll recieve a confirmation email shortly.",
          );
          setLoading(false);
        })
        .then(() => {
          setState({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          setLoading(false);
          alert(error.message);
        });
    }
  }

  return (
    <div className="footer-main" id="contact">
      <div className="inner-footer">
        <div className="emailLogo">
          <img src={email} alt="Lets Gtok" />
        </div>

        <div className="contactForm">
          <h1>
            Get in contact with <span className="purpleText">Lets Gtok</span>
          </h1>
          <div className="info">
            <TextField
              required
              fullWidth
              name="name"
              value={state.name}
              id="Name"
              label="Name"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              name="email"
              value={state.email}
              id="Email"
              label="Email"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              name="message"
              value={state.message}
              id="Message"
              label="Message"
              placeholder="Message"
              multiline
              variant="outlined"
              onChange={handleChange}
            />
          </div>

          <button onClick={handleSubmit} disabled={loading} style={{background: loading && 'rgba(102, 48, 220, 0.2)' }} className="shareButton">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
